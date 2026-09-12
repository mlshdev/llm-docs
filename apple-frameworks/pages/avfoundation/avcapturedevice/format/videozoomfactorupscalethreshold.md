> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/videozoomfactorupscalethreshold](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/videozoomfactorupscalethreshold)

# videoZoomFactorUpscaleThreshold (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A threshold at which the system upscales pixel data.

## Declaration

```swift
var videoZoomFactorUpscaleThreshold: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The device achieves a zoom effect by cropping around the center of the image captured by the sensor. At low zoom factors, the cropped images is equal to or larger than the output size. At higher zoom factors, the device must scale the cropped image up to the output size, resulting in a loss of image quality. This property indicates the factors at which upscaling occurs.

## See Also

### Determining zoom capabilities

- [systemRecommendedVideoZoomRange](systemrecommendedvideozoomrange.md): The system’s recommended zoom range for this device format.
- [videoMaxZoomFactor](videomaxzoomfactor.md): A maximum zoom factor the format allows.
- [secondaryNativeResolutionZoomFactors](secondarynativeresolutionzoomfactors.md): The zoom factors at which this device transitions to secondary native resolution modes.
- [supportedVideoZoomRangesForDepthDataDelivery](supportedvideozoomrangesfordepthdatadelivery.md): The zoom ranges that support the delivery of depth data.
- [zoomFactorsOutsideOfVideoZoomRangesForDepthDeliverySupported](zoomfactorsoutsideofvideozoomrangesfordepthdeliverysupported.md): A Boolean value that indicates whether the format supports zoom factors outside the range supported for depth delivery.

# videoZoomFactorUpscaleThreshold (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A threshold at which the system upscales pixel data.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat videoZoomFactorUpscaleThreshold;
```

<a id="Discussion"></a>

## Discussion

The device achieves a zoom effect by cropping around the center of the image captured by the sensor. At low zoom factors, the cropped images is equal to or larger than the output size. At higher zoom factors, the device must scale the cropped image up to the output size, resulting in a loss of image quality. This property indicates the factors at which upscaling occurs.

## See Also

### Determining zoom capabilities

- [systemRecommendedVideoZoomRange](../../avcapturedeviceformat/systemrecommendedvideozoomrange.md): The system’s recommended zoom range for this device format.
- [videoMaxZoomFactor](videomaxzoomfactor.md): A maximum zoom factor the format allows.
- [secondaryNativeResolutionZoomFactors](../../avcapturedeviceformat/secondarynativeresolutionzoomfactors.md): The zoom factors at which this device transitions to secondary native resolution modes.
- [supportedVideoZoomRangesForDepthDataDelivery](../../avcapturedeviceformat/supportedvideozoomrangesfordepthdatadelivery.md): The zoom ranges that support the delivery of depth data.
- [AVZoomRange](../../avzoomrange.md): An object that defines an inclusive range of zoom values.
- [zoomFactorsOutsideOfVideoZoomRangesForDepthDeliverySupported](zoomfactorsoutsideofvideozoomrangesfordepthdeliverysupported.md): A Boolean value that indicates whether the format supports zoom factors outside the range supported for depth delivery.
