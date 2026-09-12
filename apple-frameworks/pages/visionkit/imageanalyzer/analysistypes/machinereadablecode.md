> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalyzer/analysistypes/machinereadablecode](https://developer.apple.com/documentation/visionkit/imageanalyzer/analysistypes/machinereadablecode)

# machineReadableCode

**Framework:** VisionKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 13.0+ · visionOS 1.0+

An option that analyzes an image for machine-readable codes, such as QR codes.

## Declaration

```swift
static let machineReadableCode: ImageAnalyzer.AnalysisTypes
```

## Mentioned In

- [Enabling Live Text interactions with images](../../enabling-live-text-interactions-with-images.md)

<a id="discussion"></a>

## Discussion

The framework recognizes the following code types:

Aztec, Codebar, Code 39 Checksum, Code 39, Code 39 Full ASCII, Code 39 Full ASCII Checksum, Code 93, Code 93, Code 128, Matrix EAN-8, Data, EAN-13, GS1 DataBar Expanded, GS1 DataBar Limited, ITF, ITF-14, MicroPDF417, MicroQR, PDF417 QR, UPC-E

> **Important**

> The framework ignores this option on macOS.

## See Also

### Specifying types to find

- [text](text.md): An option that analyzes an image for text.
- [visualLookUp](visuallookup.md): An option that analyzes an image for subjects that the framework can look up for more information.
