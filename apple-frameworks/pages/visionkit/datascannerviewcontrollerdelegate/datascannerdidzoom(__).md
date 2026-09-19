> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/datascannerviewcontrollerdelegate/datascannerdidzoom(_:)

# dataScannerDidZoom(\_:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

Responds when a person or your code changes the zoom factor.

## Declaration

```swift
@MainActor func dataScannerDidZoom(_ dataScanner: DataScannerViewController)
```

## Parameters

- `dataScanner`: The data scanner whose zoom factor changes.

<a id="discussion"></a>

## Discussion

The data scanner invokes this method when the [zoomFactor](../datascannerviewcontroller/zoomfactor.md) property changes.

## Default Implementations

### DataScannerViewControllerDelegate Implementations

- [dataScannerDidZoom(\_:)](datascannerdidzoom%28__%29-5lq2p.md): A default, blank implementation for when a person or your code changes the zoom factor.
