> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/videomaxzoomfactor](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/videomaxzoomfactor)

# videoMaxZoomFactor (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A maximum zoom factor the format allows.

## Declaration

```swift
var videoMaxZoomFactor: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

A maximum factor of `1.0` indicates that the format isn’t capable of zooming.

## See Also

### Determining zoom capabilities

- [systemRecommendedVideoZoomRange](systemrecommendedvideozoomrange.md): The system’s recommended zoom range for this device format.
- [videoZoomFactorUpscaleThreshold](videozoomfactorupscalethreshold.md): A threshold at which the system upscales pixel data.
- [secondaryNativeResolutionZoomFactors](secondarynativeresolutionzoomfactors.md): The zoom factors at which this device transitions to secondary native resolution modes.
- [supportedVideoZoomRangesForDepthDataDelivery](supportedvideozoomrangesfordepthdatadelivery.md): The zoom ranges that support the delivery of depth data.
- [zoomFactorsOutsideOfVideoZoomRangesForDepthDeliverySupported](zoomfactorsoutsideofvideozoomrangesfordepthdeliverysupported.md): A Boolean value that indicates whether the format supports zoom factors outside the range supported for depth delivery.

# videoMaxZoomFactor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A maximum zoom factor the format allows.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat videoMaxZoomFactor;
```

<a id="Discussion"></a>

## Discussion

A maximum factor of `1.0` indicates that the format isn’t capable of zooming.

## See Also

### Determining zoom capabilities

- [systemRecommendedVideoZoomRange](../../avcapturedeviceformat/systemrecommendedvideozoomrange.md): The system’s recommended zoom range for this device format.
- [videoZoomFactorUpscaleThreshold](videozoomfactorupscalethreshold.md): A threshold at which the system upscales pixel data.
- [secondaryNativeResolutionZoomFactors](../../avcapturedeviceformat/secondarynativeresolutionzoomfactors.md): The zoom factors at which this device transitions to secondary native resolution modes.
- [supportedVideoZoomRangesForDepthDataDelivery](../../avcapturedeviceformat/supportedvideozoomrangesfordepthdatadelivery.md): The zoom ranges that support the delivery of depth data.
- [AVZoomRange](../../avzoomrange.md): An object that defines an inclusive range of zoom values.
- [zoomFactorsOutsideOfVideoZoomRangesForDepthDeliverySupported](zoomfactorsoutsideofvideozoomrangesfordepthdeliverysupported.md): A Boolean value that indicates whether the format supports zoom factors outside the range supported for depth delivery.
