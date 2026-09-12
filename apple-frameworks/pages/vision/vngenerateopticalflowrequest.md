> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngenerateopticalflowrequest](https://developer.apple.com/documentation/vision/vngenerateopticalflowrequest)

# VNGenerateOpticalFlowRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that generates directional change vectors for each pixel in the targeted image.

## Declaration

```swift
class VNGenerateOpticalFlowRequest
```

<a id="overview"></a>

## Overview

This request operates at a pixel level, so both images need to have the same dimensions to successfully perform the analysis. Setting a region of interest limits the region in which the analysis occurs. However, the system reports the resulting observation at full resolution.

Optical flow requests are resource-intensive, so create only one request at a time, and release it immediately after generating optical flows.

## Topics

### Configuring the Request

- [computationAccuracy](vngenerateopticalflowrequest/computationaccuracy-swift.property.md): The accuracy level for computing optical flow.
- [VNGenerateOpticalFlowRequest.ComputationAccuracy](vngenerateopticalflowrequest/computationaccuracy-swift.enum.md): The supported optical flow accuracy levels.
- [outputPixelFormat](vngenerateopticalflowrequest/outputpixelformat.md): The output buffer’s pixel format.
- [keepNetworkOutput](vngenerateopticalflowrequest/keepnetworkoutput.md): A Boolean value that indicates whether to keep the raw pixel buffer coming from the machine learning network.

### Accessing the Results

- [results](vngenerateopticalflowrequest/results.md): The results of the request to generate optical flow.

### Identifying Request Revisions

- [VNGenerateOpticalFlowRequestRevision2](vngenerateopticalflowrequestrevision2.md): A constant for specifying revision 2 of the optical flow generation request.
- [VNGenerateOpticalFlowRequestRevision1](vngenerateopticalflowrequestrevision1.md): A constant for specifying revision 1 of the optical flow generation request.

## Relationships

### Inherits From

- [VNTargetedImageRequest](vntargetedimagerequest.md)

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

- [VNTrackOpticalFlowRequest](vntrackopticalflowrequest.md): An object that determines the direction change of vectors for each pixel from a previous to current image.

# VNGenerateOpticalFlowRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that generates directional change vectors for each pixel in the targeted image.

## Declaration

```objectivec
@interface VNGenerateOpticalFlowRequest : VNTargetedImageRequest
```

<a id="overview"></a>

## Overview

This request operates at a pixel level, so both images need to have the same dimensions to successfully perform the analysis. Setting a region of interest limits the region in which the analysis occurs. However, the system reports the resulting observation at full resolution.

Optical flow requests are resource-intensive, so create only one request at a time, and release it immediately after generating optical flows.

## Topics

### Configuring the Request

- [computationAccuracy](vngenerateopticalflowrequest/computationaccuracy-swift.property.md): The accuracy level for computing optical flow.
- [VNGenerateOpticalFlowRequestComputationAccuracy](vngenerateopticalflowrequest/computationaccuracy-swift.enum.md): The supported optical flow accuracy levels.
- [outputPixelFormat](vngenerateopticalflowrequest/outputpixelformat.md): The output buffer’s pixel format.
- [keepNetworkOutput](vngenerateopticalflowrequest/keepnetworkoutput.md): A Boolean value that indicates whether to keep the raw pixel buffer coming from the machine learning network.

### Accessing the Results

- [results](vngenerateopticalflowrequest/results.md): The results of the request to generate optical flow.

### Identifying Request Revisions

- [VNGenerateOpticalFlowRequestRevision2](vngenerateopticalflowrequestrevision2.md): A constant for specifying revision 2 of the optical flow generation request.
- [VNGenerateOpticalFlowRequestRevision1](vngenerateopticalflowrequestrevision1.md): A constant for specifying revision 1 of the optical flow generation request.

## Relationships

### Inherits From

- [VNTargetedImageRequest](vntargetedimagerequest.md)

## See Also

### Optical flow

- [VNTrackOpticalFlowRequest](vntrackopticalflowrequest.md): An object that determines the direction change of vectors for each pixel from a previous to current image.
