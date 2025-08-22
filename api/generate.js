import qr from "qr-image";

export default function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send("Missing URL parameter");
  }

  try {
    // Generate QR code as a buffer
    const qr_png = qr.imageSync(url, { type: "png" });

    // Set headers and return the buffer
    res.setHeader("Content-Type", "image/png");
    res.status(200).end(qr_png);
  } catch (err) {
    res.status(500).send("Error generating QR code");
  }
}
