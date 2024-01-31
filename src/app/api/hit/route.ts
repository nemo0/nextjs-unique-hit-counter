import fs from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const searchParams = req.nextUrl.searchParams;
  const url = searchParams.get("url");

  try {
    const dataRaw = fs.readFileSync("data.json", "utf8");
    const data = JSON.parse(dataRaw);

    if (url && data && Array.isArray(data.data)) {
      const urlObject = data.data.find((entry: string) =>
        entry.hasOwnProperty(url)
      );

      if (urlObject) {
        const arrayLength = urlObject[url].fingerprints.length;
        return NextResponse.json({ count: arrayLength });
      } else {
        return NextResponse.json({ message: "URL not found", count: 0 });
      }
    } else {
      return NextResponse.json({
        message: "Invalid data or URL not provided",
        count: 0,
      });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Something went wrong", count: 0 });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { fingerprint, url, timestamp } = body;

  const existingDataRaw = fs.readFileSync("data.json", "utf8");
  let existingData;
  try {
    existingData = JSON.parse(existingDataRaw);
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }

  if (!Array.isArray(existingData.data)) {
    existingData.data = [];
  }

  let urlObject = existingData.data.find((entry: string) =>
    entry.hasOwnProperty(url)
  );
  if (!urlObject) {
    urlObject = { [url]: { fingerprints: [{ fingerprint, timestamp }] } };
    existingData.data.push(urlObject);
  } else {
    if (
      !urlObject[url].fingerprints.some(
        (entry: any) => entry.fingerprint === fingerprint
      )
    ) {
      urlObject[url].fingerprints.push({ fingerprint, timestamp });
    }
  }

  fs.writeFile("data.json", JSON.stringify(existingData, null, 2), (err) => {
    if (err) {
      console.error(err);
      return NextResponse.error();
    }
    return NextResponse.json({ message: "Data appended to data.json" });
  });

  return NextResponse.json({ message: "Something went wrong" });
}
