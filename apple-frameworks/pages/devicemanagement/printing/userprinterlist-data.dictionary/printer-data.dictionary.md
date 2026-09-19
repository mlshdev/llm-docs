> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/printing/userprinterlist-data.dictionary/printer-data.dictionary

# Printing.UserPrinterList.Printer

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

A printer dictionary.

## Declaration

```
object Printing.UserPrinterList.Printer
```

## Properties

- `DeviceURI` — `string`: The device URI.
- `DisplayName` — `string`: The display name.
- `Location` — `string`: The printer’s location.
- `Model` — `string`: The printer’s model.
- `PPDURL` — `string`: The printer’s PPDURL.
- `PrinterLocked` — `boolean`: If `true`, locks the printer.
  **Default:** `false`
