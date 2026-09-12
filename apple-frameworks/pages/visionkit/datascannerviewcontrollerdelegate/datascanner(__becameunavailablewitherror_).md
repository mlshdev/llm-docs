> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontrollerdelegate/datascanner(_:becameunavailablewitherror:)](https://developer.apple.com/documentation/visionkit/datascannerviewcontrollerdelegate/datascanner(_:becameunavailablewitherror:))

# dataScanner(\_:becameUnavailableWithError:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

Responds when the data scanner becomes unavailable and stops scanning.

## Declaration

```swift
@MainActor func dataScanner(_ dataScanner: DataScannerViewController, becameUnavailableWithError error: DataScannerViewController.ScanningUnavailable)
```

## Parameters

- `dataScanner`: The data scanner that’s not available.
- `error`: Describes an error if it occurs.

## Mentioned In

- [Scanning data with the camera](../scanning-data-with-the-camera.md)

## Default Implementations

### DataScannerViewControllerDelegate Implementations

- [dataScanner(\_:becameUnavailableWithError:)](datascanner%28__becameunavailablewitherror_%29-89v47.md): A default, blank implementation for when the data scanner becomes unavailable and stops scanning.
