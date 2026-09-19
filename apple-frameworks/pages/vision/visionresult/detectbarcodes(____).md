> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/visionresult/detectbarcodes(_:_:)

# VisionResult.detectBarcodes(\_:\_:)

**Framework:** Vision  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A result from performing a detect barcodes request.

## Declaration

```swift
case detectBarcodes(DetectBarcodesRequest, [BarcodeObservation])
```

## See Also

### Getting the optical flow, rectangle and barcode detection result

- [VisionResult.trackOpticalFlow(\_:\_:)](trackopticalflow%28____%29.md): A result from performing a track optical flow request.
- [VisionResult.detectRectangles(\_:\_:)](detectrectangles%28____%29.md): A result from performing a detect rectangles request.
