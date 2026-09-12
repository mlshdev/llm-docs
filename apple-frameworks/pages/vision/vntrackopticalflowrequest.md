> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrackopticalflowrequest](https://developer.apple.com/documentation/vision/vntrackopticalflowrequest)

# VNTrackOpticalFlowRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An object that determines the direction change of vectors for each pixel from a previous to current image.

## Declaration

```swift
class VNTrackOpticalFlowRequest
```

<a id="overview"></a>

## Overview

This request works at the pixel level, so both images must have the same dimensions to successfully perform the request.

Setting a region of interest isolates where to perform the change determination.

> **Important**

>  Optical flow requests are very resource intensive, so perform only one request at a time. Release memory immediately after generating an optical flow.

## Topics

### Creating an Optical Flow

- [init()](vntrackopticalflowrequest/init%28%29.md): Creates a new request that tracks the optical from one image to another.
- [init(completionHandler:)](vntrackopticalflowrequest/init%28completionhandler_%29.md): Creates a new request that tracks the optical from one image to another, with a system callback on completion.

### Configuring the Request

- [computationAccuracy](vntrackopticalflowrequest/computationaccuracy-swift.property.md): The level of accuracy to compute the optical flow.
- [VNTrackOpticalFlowRequest.ComputationAccuracy](vntrackopticalflowrequest/computationaccuracy-swift.enum.md): Computational accuracy options.
- [keepNetworkOutput](vntrackopticalflowrequest/keepnetworkoutput.md): A Boolean value that indicates the raw pixel buffer continues to emit from the network.
- [outputPixelFormat](vntrackopticalflowrequest/outputpixelformat.md): The pixel format type of the output value.

### Accessing the Results

- [results](vntrackopticalflowrequest/results.md): The optical flow results the request observes.

## Relationships

### Inherits From

- [VNStatefulRequest](vnstatefulrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Optical flow

- [VNGenerateOpticalFlowRequest](vngenerateopticalflowrequest.md): An object that generates directional change vectors for each pixel in the targeted image.

# VNTrackOpticalFlowRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An object that determines the direction change of vectors for each pixel from a previous to current image.

## Declaration

```objectivec
@interface VNTrackOpticalFlowRequest : VNStatefulRequest
```

<a id="overview"></a>

## Overview

This request works at the pixel level, so both images must have the same dimensions to successfully perform the request.

Setting a region of interest isolates where to perform the change determination.

> **Important**

>  Optical flow requests are very resource intensive, so perform only one request at a time. Release memory immediately after generating an optical flow.

## Topics

### Creating an Optical Flow

- [init](vntrackopticalflowrequest/init%28%29.md): Creates a new request that tracks the optical from one image to another.
- [initWithCompletionHandler:](vntrackopticalflowrequest/init%28completionhandler_%29.md): Creates a new request that tracks the optical from one image to another, with a system callback on completion.

### Configuring the Request

- [computationAccuracy](vntrackopticalflowrequest/computationaccuracy-swift.property.md): The level of accuracy to compute the optical flow.
- [VNTrackOpticalFlowRequestComputationAccuracy](vntrackopticalflowrequest/computationaccuracy-swift.enum.md): Computational accuracy options.
- [keepNetworkOutput](vntrackopticalflowrequest/keepnetworkoutput.md): A Boolean value that indicates the raw pixel buffer continues to emit from the network.
- [outputPixelFormat](vntrackopticalflowrequest/outputpixelformat.md): The pixel format type of the output value.

### Accessing the Results

- [results](vntrackopticalflowrequest/results.md): The optical flow results the request observes.

## Relationships

### Inherits From

- [VNStatefulRequest](vnstatefulrequest.md)

## See Also

### Optical flow

- [VNGenerateOpticalFlowRequest](vngenerateopticalflowrequest.md): An object that generates directional change vectors for each pixel in the targeted image.
