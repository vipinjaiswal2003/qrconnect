import qr from "qr-image";

export default function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send("Missing URL parameter");
  }

  try {
    // Generate QR code as PNG buffer
    const qr_png = qr.imageSync(url, { type: "png" });

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Content-Length", qr_png.length);

    res.status(200).end(qr_png);
  } catch (err) {
    console.error("QR generation error:", err);
    res.status(500).send("Error generating QR code");
  }
}
