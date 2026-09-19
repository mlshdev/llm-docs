> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/airprint/airprintitem

# AirPrint.AirPrintItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.10+ · visionOS 2.0+

A dictionary of AirPrint printer details.

## Declaration

```
object AirPrint.AirPrintItem
```

## Properties

- `ForceTLS` — `boolean`: If `true`, Transport Layer Security (TLS) secures AirPrint connections. Available only in iOS 11 and later.

  Available: iOS 11+ | iPadOS 11+ | visionOS 2+  
  **Default:** `false`
- `IPAddress` — `string` (required): The IP address or hostname of the AirPrint destination.
- `Port` — `integer`: The listening port of the AirPrint destination. Available only in iOS 11 and later.

  Available: iOS 11+ | iPadOS 11+ | visionOS 2+  
  **Minimum:** `0`  
  **Maximum:** `65535`
- `ResourcePath` — `string` (required): The resource path associated with the printer. This path corresponds to the `rp` parameter of the `_ipps.tcp` Bonjour record. For example:

  - `printers/Canon_MG5300_series`
  - `printers/Xerox_Phaser_7600`
  - `ipp/print`
  - `Epson_IPP_Printer`
