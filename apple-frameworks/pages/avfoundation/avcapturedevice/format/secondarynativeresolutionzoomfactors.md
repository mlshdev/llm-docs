> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/secondarynativeresolutionzoomfactors](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/secondarynativeresolutionzoomfactors)

# secondaryNativeResolutionZoomFactors

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

The zoom factors at which this device transitions to secondary native resolution modes.

## Declaration

```swift
@nonobjc var secondaryNativeResolutionZoomFactors: [CGFloat] { get }
```

<a id="Discussion"></a>

## Discussion

Devices that provide secondary native resolution zoom factors can switch their pixel sampling mode dynamically to produce high-fidelity images without upscaling at a fixed zoom factor beyond `1.0`.

## See Also

### Determining zoom capabilities

- [systemRecommendedVideoZoomRange](systemrecommendedvideozoomrange.md): The system’s recommended zoom range for this device format.
- [videoMaxZoomFactor](videomaxzoomfactor.md): A maximum zoom factor the format allows.
- [videoZoomFactorUpscaleThreshold](videozoomfactorupscalethreshold.md): A threshold at which the system upscales pixel data.
- [supportedVideoZoomRangesForDepthDataDelivery](supportedvideozoomrangesfordepthdatadelivery.md): The zoom ranges that support the delivery of depth data.
- [zoomFactorsOutsideOfVideoZoomRangesForDepthDeliverySupported](zoomfactorsoutsideofvideozoomrangesfordepthdeliverysupported.md): A Boolean value that indicates whether the format supports zoom factors outside the range supported for depth delivery.
