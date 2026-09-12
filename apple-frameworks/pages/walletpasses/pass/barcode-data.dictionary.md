> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletpasses/pass/barcode-data.dictionary](https://developer.apple.com/documentation/walletpasses/pass/barcode-data.dictionary)

# Pass.Barcode

**Interface language:** Data

**Framework:** Wallet Passes  
**Kind:** Object  
**Availability:** iOS 6.0+ (deprecated in 9.0) · iPadOS 6.0+ (deprecated in 9.0) · watchOS 1.0+ (deprecated in 2.0)

An object that represents a barcode shown on a pass.

> Use [Pass.Barcodes](barcodes-data.dictionary.md) instead.

## Declaration

```
object Pass.Barcode
```

## Properties

- `altText` — `string`: The text displayed near the barcode. For example, a human-readable version of the barcode data in case the barcode doesn’t scan.

  The alternative text isn’t displayed for watchOS.
- `format` — `string` (required): The format of the barcode.

  The barcode format PKBarcodeFormatCode128 isn’t supported for watchOS.  
  **Allowed values:** `PKBarcodeFormatQR`, `PKBarcodeFormatPDF417`, `PKBarcodeFormatAztec`
- `message` — `string` (required): The message or payload to display as a barcode.
- `messageEncoding` — `string` (required): The IANA character set name of the text encoding to use to convert `message` from a string representation to a data representation that the system renders as a barcode, such as `“iso-8859-1”`

## See Also

### Adding barcodes

- [Pass.Barcodes](barcodes-data.dictionary.md): An array of barcode objects on a Pass.
