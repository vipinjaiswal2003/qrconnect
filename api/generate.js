import qr from "qr-image";

export default function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send("Missing URL parameter");
  }

  try {
    // Generate QR code as a buffer
    const qr_png = qr.imageSync(url, { type: "png" });

    // Set headers
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Content-Length", qr_png.length);

    // Send QR code as buffer
    res.status(200).send(Buffer.from(qr_png));
  } catch (err) {
    console.error("QR generation error:", err);
    res.status(500).send("Error generating QR code");
  }
}
