> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngenerateopticalflowrequest/computationaccuracy-swift.enum](https://developer.apple.com/documentation/vision/vngenerateopticalflowrequest/computationaccuracy-swift.enum)

# VNGenerateOpticalFlowRequest.ComputationAccuracy (Swift)

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The supported optical flow accuracy levels.

## Declaration

```swift
enum ComputationAccuracy
```

<a id="overview"></a>

## Overview

The computation time typically increases with accuracy.

## Topics

### Accuracy Levels

- [VNGenerateOpticalFlowRequest.ComputationAccuracy.low](computationaccuracy-swift.enum/low.md): Low accuracy.
- [VNGenerateOpticalFlowRequest.ComputationAccuracy.medium](computationaccuracy-swift.enum/medium.md): Medium accuracy.
- [VNGenerateOpticalFlowRequest.ComputationAccuracy.high](computationaccuracy-swift.enum/high.md): High accuracy.
- [VNGenerateOpticalFlowRequest.ComputationAccuracy.veryHigh](computationaccuracy-swift.enum/veryhigh.md): Very high accuracy.

### Creating an Accuracy Level

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

- [computationAccuracy](computationaccuracy-swift.property.md): The accuracy level for computing optical flow.
- [outputPixelFormat](outputpixelformat.md): The output buffer’s pixel format.
- [keepNetworkOutput](keepnetworkoutput.md): A Boolean value that indicates whether to keep the raw pixel buffer coming from the machine learning network.

# VNGenerateOpticalFlowRequestComputationAccuracy (Objective-C)

**Framework:** Vision  
**Kind:** Enumeration

The supported optical flow accuracy levels.

## Declaration

```objectivec
enum VNGenerateOpticalFlowRequestComputationAccuracy : NSUInteger;
```

<a id="overview"></a>

## Overview

The computation time typically increases with accuracy.

## Topics

### Accuracy Levels

- [VNGenerateOpticalFlowRequestComputationAccuracyLow](computationaccuracy-swift.enum/low.md): Low accuracy.
- [VNGenerateOpticalFlowRequestComputationAccuracyMedium](computationaccuracy-swift.enum/medium.md): Medium accuracy.
- [VNGenerateOpticalFlowRequestComputationAccuracyHigh](computationaccuracy-swift.enum/high.md): High accuracy.
- [VNGenerateOpticalFlowRequestComputationAccuracyVeryHigh](computationaccuracy-swift.enum/veryhigh.md): Very high accuracy.

## See Also

### Configuring the Request

- [computationAccuracy](computationaccuracy-swift.property.md): The accuracy level for computing optical flow.
- [outputPixelFormat](outputpixelformat.md): The output buffer’s pixel format.
- [keepNetworkOutput](keepnetworkoutput.md): A Boolean value that indicates whether to keep the raw pixel buffer coming from the machine learning network.
