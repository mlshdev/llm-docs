> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrackopticalflowrequest/computationaccuracy-swift.enum](https://developer.apple.com/documentation/vision/vntrackopticalflowrequest/computationaccuracy-swift.enum)

# VNTrackOpticalFlowRequest.ComputationAccuracy (Swift)

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Computational accuracy options.

## Declaration

```swift
enum ComputationAccuracy
```

## Topics

### Options

- [VNTrackOpticalFlowRequest.ComputationAccuracy.low](computationaccuracy-swift.enum/low.md): An option that indicates a low level of computational accuracy.
- [VNTrackOpticalFlowRequest.ComputationAccuracy.medium](computationaccuracy-swift.enum/medium.md): An option that indicates a moderate level of computational accuracy.
- [VNTrackOpticalFlowRequest.ComputationAccuracy.high](computationaccuracy-swift.enum/high.md): An option that indicates a high level of computational accuracy.
- [VNTrackOpticalFlowRequest.ComputationAccuracy.veryHigh](computationaccuracy-swift.enum/veryhigh.md): An option that indicates a very high level of computational accuracy.
- [VNTrackOpticalFlowRequest.ComputationAccuracy.low](computationaccuracy-swift.enum/low.md): An option that indicates a low level of computational accuracy.
- [VNTrackOpticalFlowRequest.ComputationAccuracy.medium](computationaccuracy-swift.enum/medium.md): An option that indicates a moderate level of computational accuracy.
- [VNTrackOpticalFlowRequest.ComputationAccuracy.high](computationaccuracy-swift.enum/high.md): An option that indicates a high level of computational accuracy.
- [VNTrackOpticalFlowRequest.ComputationAccuracy.veryHigh](computationaccuracy-swift.enum/veryhigh.md): An option that indicates a very high level of computational accuracy.

### Creating an Accuracy Option

- [init(rawValue:)](computationaccuracy-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the Request

- [computationAccuracy](computationaccuracy-swift.property.md): The level of accuracy to compute the optical flow.
- [keepNetworkOutput](keepnetworkoutput.md): A Boolean value that indicates the raw pixel buffer continues to emit from the network.
- [outputPixelFormat](outputpixelformat.md): The pixel format type of the output value.

# VNTrackOpticalFlowRequestComputationAccuracy (Objective-C)

**Framework:** Vision  
**Kind:** Enumeration

Computational accuracy options.

## Declaration

```objectivec
enum VNTrackOpticalFlowRequestComputationAccuracy : NSUInteger;
```

## Topics

### Options

- [VNTrackOpticalFlowRequestComputationAccuracyLow](computationaccuracy-swift.enum/low.md): An option that indicates a low level of computational accuracy.
- [VNTrackOpticalFlowRequestComputationAccuracyMedium](computationaccuracy-swift.enum/medium.md): An option that indicates a moderate level of computational accuracy.
- [VNTrackOpticalFlowRequestComputationAccuracyHigh](computationaccuracy-swift.enum/high.md): An option that indicates a high level of computational accuracy.
- [VNTrackOpticalFlowRequestComputationAccuracyVeryHigh](computationaccuracy-swift.enum/veryhigh.md): An option that indicates a very high level of computational accuracy.
- [VNTrackOpticalFlowRequestComputationAccuracyLow](computationaccuracy-swift.enum/low.md): An option that indicates a low level of computational accuracy.
- [VNTrackOpticalFlowRequestComputationAccuracyMedium](computationaccuracy-swift.enum/medium.md): An option that indicates a moderate level of computational accuracy.
- [VNTrackOpticalFlowRequestComputationAccuracyHigh](computationaccuracy-swift.enum/high.md): An option that indicates a high level of computational accuracy.
- [VNTrackOpticalFlowRequestComputationAccuracyVeryHigh](computationaccuracy-swift.enum/veryhigh.md): An option that indicates a very high level of computational accuracy.

## See Also

### Configuring the Request

- [computationAccuracy](computationaccuracy-swift.property.md): The level of accuracy to compute the optical flow.
- [keepNetworkOutput](keepnetworkoutput.md): A Boolean value that indicates the raw pixel buffer continues to emit from the network.
- [outputPixelFormat](outputpixelformat.md): The pixel format type of the output value.
