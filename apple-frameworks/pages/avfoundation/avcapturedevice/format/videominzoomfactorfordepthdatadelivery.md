> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/videominzoomfactorfordepthdatadelivery](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/videominzoomfactorfordepthdatadelivery)

# videoMinZoomFactorForDepthDataDelivery (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 16.0) · iPadOS 11.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0)

A minimum zoom factor the device supports when configured for depth data delivery.

> Use [supportedVideoZoomFactorsForDepthDataDelivery](../../avcapturedeviceformat/supportedvideozoomfactorsfordepthdatadelivery.md) instead.

## Declaration

```swift
var videoMinZoomFactorForDepthDataDelivery: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

Depth data capture requires coordinating the zoom factors of the two cameras on a dual-camera device. Therefore, when you enable depth data delivery for a capture format using the [AVCaptureDepthDataOutput](../../avcapturedepthdataoutput.md) class, the range of available values for the device’s [videoZoomFactor](../videozoomfactor.md) property is reduced.

If this format doesn’t support depth capture, this property’s value is `1.0`.

## See Also

### Determining zoom capabilities

- [supportedVideoZoomFactorsForDepthDataDelivery](supportedvideozoomfactorsfordepthdatadelivery.md): Deprecated. The zoom factors that a format supports for depth data delivery.
- [videoMaxZoomFactorForDepthDataDelivery](videomaxzoomfactorfordepthdatadelivery.md): Deprecated. A maximum zoom factor the device supports when configured for depth data delivery.

# videoMinZoomFactorForDepthDataDelivery (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 16.0) · iPadOS 11.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0)

A minimum zoom factor the device supports when configured for depth data delivery.

> Use [supportedVideoZoomFactorsForDepthDataDelivery](../../avcapturedeviceformat/supportedvideozoomfactorsfordepthdatadelivery.md) instead.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat videoMinZoomFactorForDepthDataDelivery;
```

<a id="Discussion"></a>

## Discussion

Depth data capture requires coordinating the zoom factors of the two cameras on a dual-camera device. Therefore, when you enable depth data delivery for a capture format using the [AVCaptureDepthDataOutput](../../avcapturedepthdataoutput.md) class, the range of available values for the device’s [videoZoomFactor](../videozoomfactor.md) property is reduced.

If this format doesn’t support depth capture, this property’s value is `1.0`.

## See Also

### Determining zoom capabilities

- [videoMaxZoomFactorForDepthDataDelivery](videomaxzoomfactorfordepthdatadelivery.md): Deprecated. A maximum zoom factor the device supports when configured for depth data delivery.
