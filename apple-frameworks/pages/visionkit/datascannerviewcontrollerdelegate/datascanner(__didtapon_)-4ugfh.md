> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/datascannerviewcontrollerdelegate/datascanner(_:didtapon:)-4ugfh

# dataScanner(\_:didTapOn:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

A default, blank implementation for when a person taps an item that the data scanner recognizes.

## Declaration

```swift
@MainActor func dataScanner(_ dataScanner: DataScannerViewController, didTapOn item: RecognizedItem)
```

## Parameters

- `dataScanner`: The data scanner with the zoom factor that changes.
- `item`: The item that a person taps.
