> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/datascannerviewcontrollerdelegate/datascanner(_:becameunavailablewitherror:)-89v47

# dataScanner(\_:becameUnavailableWithError:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

A default, blank implementation for when the data scanner becomes unavailable and stops scanning.

## Declaration

```swift
@MainActor func dataScanner(_ dataScanner: DataScannerViewController, becameUnavailableWithError error: DataScannerViewController.ScanningUnavailable)
```

## Parameters

- `dataScanner`: The data scanner that’s not available.
- `error`: Describes an error if it occurs.
