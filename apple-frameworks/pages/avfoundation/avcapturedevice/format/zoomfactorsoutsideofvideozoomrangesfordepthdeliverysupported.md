> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/zoomfactorsoutsideofvideozoomrangesfordepthdeliverysupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/zoomfactorsoutsideofvideozoomrangesfordepthdeliverysupported)

# zoomFactorsOutsideOfVideoZoomRangesForDepthDeliverySupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+

A Boolean value that indicates whether the format supports zoom factors outside the range supported for depth delivery.

## Declaration

```swift
var zoomFactorsOutsideOfVideoZoomRangesForDepthDeliverySupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Setting a zoom factor outside the range defined by the [supportedVideoZoomFactorsForDepthDataDelivery](supportedvideozoomfactorsfordepthdatadelivery.md) property results in the system suspending depth data delivery. It resumes delivery when you set the zoom factor back to a supported value.

## See Also

### Determining zoom capabilities

- [systemRecommendedVideoZoomRange](systemrecommendedvideozoomrange.md): The system’s recommended zoom range for this device format.
- [videoMaxZoomFactor](videomaxzoomfactor.md): A maximum zoom factor the format allows.
- [videoZoomFactorUpscaleThreshold](videozoomfactorupscalethreshold.md): A threshold at which the system upscales pixel data.
- [secondaryNativeResolutionZoomFactors](secondarynativeresolutionzoomfactors.md): The zoom factors at which this device transitions to secondary native resolution modes.
- [supportedVideoZoomRangesForDepthDataDelivery](supportedvideozoomrangesfordepthdatadelivery.md): The zoom ranges that support the delivery of depth data.

# zoomFactorsOutsideOfVideoZoomRangesForDepthDeliverySupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+

A Boolean value that indicates whether the format supports zoom factors outside the range supported for depth delivery.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL zoomFactorsOutsideOfVideoZoomRangesForDepthDeliverySupported;
```

<a id="Discussion"></a>

## Discussion

Setting a zoom factor outside the range defined by the [supportedVideoZoomFactorsForDepthDataDelivery](supportedvideozoomfactorsfordepthdatadelivery.md) property results in the system suspending depth data delivery. It resumes delivery when you set the zoom factor back to a supported value.

## See Also

### Determining zoom capabilities

- [systemRecommendedVideoZoomRange](../../avcapturedeviceformat/systemrecommendedvideozoomrange.md): The system’s recommended zoom range for this device format.
- [videoMaxZoomFactor](videomaxzoomfactor.md): A maximum zoom factor the format allows.
- [videoZoomFactorUpscaleThreshold](videozoomfactorupscalethreshold.md): A threshold at which the system upscales pixel data.
- [secondaryNativeResolutionZoomFactors](../../avcapturedeviceformat/secondarynativeresolutionzoomfactors.md): The zoom factors at which this device transitions to secondary native resolution modes.
- [supportedVideoZoomRangesForDepthDataDelivery](../../avcapturedeviceformat/supportedvideozoomrangesfordepthdatadelivery.md): The zoom ranges that support the delivery of depth data.
- [AVZoomRange](../../avzoomrange.md): An object that defines an inclusive range of zoom values.
