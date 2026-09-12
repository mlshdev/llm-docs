> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/videomaxzoomfactorfordepthdatadelivery](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/videomaxzoomfactorfordepthdatadelivery)

# videoMaxZoomFactorForDepthDataDelivery (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 16.0) · iPadOS 11.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0)

A maximum zoom factor the device supports when configured for depth data delivery.

> Use [supportedVideoZoomFactorsForDepthDataDelivery](../../avcapturedeviceformat/supportedvideozoomfactorsfordepthdatadelivery.md) instead.

## Declaration

```swift
var videoMaxZoomFactorForDepthDataDelivery: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

Depth data capture requires coordinating the zoom factors of the two cameras on a dual-camera device. Therefore, when you enable depth data delivery for a capture format using the [AVCaptureDepthDataOutput](../../avcapturedepthdataoutput.md) class, the range of available values for the device’s [videoZoomFactor](../videozoomfactor.md) property is reduced.

If this format doesn’t support depth capture, this property’s value is the same as that of the [videoMaxZoomFactor](videomaxzoomfactor.md) property.

## See Also

### Determining zoom capabilities

- [supportedVideoZoomFactorsForDepthDataDelivery](supportedvideozoomfactorsfordepthdatadelivery.md): Deprecated. The zoom factors that a format supports for depth data delivery.
- [videoMinZoomFactorForDepthDataDelivery](videominzoomfactorfordepthdatadelivery.md): Deprecated. A minimum zoom factor the device supports when configured for depth data delivery.

# videoMaxZoomFactorForDepthDataDelivery (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 16.0) · iPadOS 11.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0)

A maximum zoom factor the device supports when configured for depth data delivery.

> Use [supportedVideoZoomFactorsForDepthDataDelivery](../../avcapturedeviceformat/supportedvideozoomfactorsfordepthdatadelivery.md) instead.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat videoMaxZoomFactorForDepthDataDelivery;
```

<a id="Discussion"></a>

## Discussion

Depth data capture requires coordinating the zoom factors of the two cameras on a dual-camera device. Therefore, when you enable depth data delivery for a capture format using the [AVCaptureDepthDataOutput](../../avcapturedepthdataoutput.md) class, the range of available values for the device’s [videoZoomFactor](../videozoomfactor.md) property is reduced.

If this format doesn’t support depth capture, this property’s value is the same as that of the [videoMaxZoomFactor](videomaxzoomfactor.md) property.

## See Also

### Determining zoom capabilities

- [videoMinZoomFactorForDepthDataDelivery](videominzoomfactorfordepthdatadelivery.md): Deprecated. A minimum zoom factor the device supports when configured for depth data delivery.
