> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/supportedvideozoomfactorsfordepthdatadelivery

# supportedVideoZoomFactorsForDepthDataDelivery

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 17.2) · iPadOS 16.0+ (deprecated in 17.2) · Mac Catalyst 16.0+ (deprecated in 17.2) · tvOS 17.0+ (deprecated in 17.2)

The zoom factors that a format supports for depth data delivery.

> Use AVCaptureDevice.Format.supportedVideoZoomRangesForDepthDataDelivery instead

## Declaration

```swift
@nonobjc var supportedVideoZoomFactorsForDepthDataDelivery: [CGFloat] { get }
```

## See Also

### Determining depth capture support

- [supportedDepthDataFormats](supporteddepthdataformats.md): The list of data formats compatible with this video format.
