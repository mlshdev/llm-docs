> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontrollerdelegate/datascanner(_:didtapon:)](https://developer.apple.com/documentation/visionkit/datascannerviewcontrollerdelegate/datascanner(_:didtapon:))

# dataScanner(\_:didTapOn:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

Responds when a person taps an item that the data scanner recognizes.

## Declaration

```swift
@MainActor func dataScanner(_ dataScanner: DataScannerViewController, didTapOn item: RecognizedItem)
```

## Parameters

- `dataScanner`: The data scanner with the zoom factor that changes.
- `item`: The item that a person taps.

## Mentioned In

- [Scanning data with the camera](../scanning-data-with-the-camera.md)

<a id="discussion"></a>

## Discussion

Implement this method to take some action, depending on the type of data that a person taps.

## Default Implementations

### DataScannerViewControllerDelegate Implementations

- [dataScanner(\_:didTapOn:)](datascanner%28__didtapon_%29-4ugfh.md): A default, blank implementation for when a person taps an item that the data scanner recognizes.
