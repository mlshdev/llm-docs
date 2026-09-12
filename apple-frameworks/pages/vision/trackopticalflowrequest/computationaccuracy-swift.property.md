> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/trackopticalflowrequest/computationaccuracy-swift.property](https://developer.apple.com/documentation/vision/trackopticalflowrequest/computationaccuracy-swift.property)

# computationAccuracy

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The level of accuracy to compute the optical flow.

## Declaration

```swift
final var computationAccuracy: TrackOpticalFlowRequest.ComputationAccuracy { get set }
```

<a id="Discussion"></a>

## Discussion

The computational time trends with accuracy level. The default value is [TrackOpticalFlowRequest.ComputationAccuracy.high](computationaccuracy-swift.enum/high.md).

## See Also

### Configuring a request

- [TrackOpticalFlowRequest.ComputationAccuracy](computationaccuracy-swift.enum.md): A type that describes the computational accuracy.
- [outputPixelFormatType](outputpixelformattype.md): The desired pixel format type of the observation.
- [supportedOutputPixelFormatTypes](supportedoutputpixelformattypes.md): The collection of supported pixel format types.
