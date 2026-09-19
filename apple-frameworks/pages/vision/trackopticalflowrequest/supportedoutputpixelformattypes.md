> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/trackopticalflowrequest/supportedoutputpixelformattypes

# supportedOutputPixelFormatTypes

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The collection of supported pixel format types.

## Declaration

```swift
final var supportedOutputPixelFormatTypes: [OSType] { get }
```

## See Also

### Configuring a request

- [computationAccuracy](computationaccuracy-swift.property.md): The level of accuracy to compute the optical flow.
- [TrackOpticalFlowRequest.ComputationAccuracy](computationaccuracy-swift.enum.md): A type that describes the computational accuracy.
- [outputPixelFormatType](outputpixelformattype.md): The desired pixel format type of the observation.
