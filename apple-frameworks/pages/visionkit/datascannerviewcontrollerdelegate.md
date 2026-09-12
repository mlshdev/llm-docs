> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontrollerdelegate](https://developer.apple.com/documentation/visionkit/datascannerviewcontrollerdelegate)

# DataScannerViewControllerDelegate

**Framework:** VisionKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

A delegate object that responds when people interact with items that the data scanner recognizes.

## Declaration

```swift
@MainActor protocol DataScannerViewControllerDelegate : AnyObject
```

## Mentioned In

- [Scanning data with the camera](scanning-data-with-the-camera.md)

<a id="overview"></a>

## Overview

Implement this protocol to handle when people tap recognized items and, optionally, provide additional feedback when the data scanner updates the recognized items.

## Topics

### Customizing highlighting

- [dataScanner(\_:didAdd:allItems:)](datascannerviewcontrollerdelegate/datascanner%28__didadd_allitems_%29.md): Responds when the data scanner starts recognizing an item.
- [dataScanner(\_:didUpdate:allItems:)](datascannerviewcontrollerdelegate/datascanner%28__didupdate_allitems_%29.md): Responds when the data scanner updates the geometry of an item it recognizes.
- [dataScanner(\_:didRemove:allItems:)](datascannerviewcontrollerdelegate/datascanner%28__didremove_allitems_%29.md): Responds when the data scanner stops recognizing an item.

### Zooming

- [dataScannerDidZoom(\_:)](datascannerviewcontrollerdelegate/datascannerdidzoom%28__%29.md): Responds when a person or your code changes the zoom factor.

### Tapping items

- [dataScanner(\_:didTapOn:)](datascannerviewcontrollerdelegate/datascanner%28__didtapon_%29.md): Responds when a person taps an item that the data scanner recognizes.

### Handling errors

- [dataScanner(\_:becameUnavailableWithError:)](datascannerviewcontrollerdelegate/datascanner%28__becameunavailablewitherror_%29.md): Responds when the data scanner becomes unavailable and stops scanning.

## See Also

### Barcode and text scanning through the camera

- [Scanning data with the camera](scanning-data-with-the-camera.md): Enable Live Text data scanning of text and codes that appear in the camera’s viewfinder.
- [DataScannerViewController](datascannerviewcontroller.md): An object that scans the camera live video for text, data in text, and machine-readable codes.
- [RecognizedItem](recognizeditem.md): An item that the data scanner recognizes in the camera’s live video.
