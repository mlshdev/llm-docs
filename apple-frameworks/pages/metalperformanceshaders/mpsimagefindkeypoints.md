> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagefindkeypoints](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagefindkeypoints)

# MPSImageFindKeypoints (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A kernel that is used to find a list of keypoints.

## Declaration

```swift
class MPSImageFindKeypoints
```

<a id="overview"></a>

## Overview

This kernel is used to find a list of keypoints whose values are greater than the [minimumThresholdValue](mpsimagekeypointrangeinfo/minimumthresholdvalue.md) in [MPSImageKeypointRangeInfo](mpsimagekeypointrangeinfo.md). The keypoints are generated for a specified region in the image. The pixel format of the source image must be [MTLPixelFormat.r8Unorm](../metal/mtlpixelformat/r8unorm.md).

## Topics

### Initializers

- [init(coder:device:)](mpsimagefindkeypoints/init%28coder_device_%29.md)
- [init(device:info:)](mpsimagefindkeypoints/init%28device_info_%29.md)

### Instance Properties

- [keypointRangeInfo](mpsimagefindkeypoints/keypointrangeinfo.md)

### Instance Methods

- [encode(to:sourceTexture:regions:numberOfRegions:keypointCount:keypointCountBufferOffset:keypointDataBuffer:keypointDataBufferOffset:)](mpsimagefindkeypoints/encode%28to_sourcetexture_regions_numberofregions_keypointcount_keypointcountbufferoffset_keypointdatabuffer_keypointdatabufferoffset_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Keypoints

- [MPSImageKeypointData](mpsimagekeypointdata.md): A structure that specifies keypoint information.
- [MPSImageKeypointRangeInfo](mpsimagekeypointrangeinfo.md): A structure that specifies information to find the keypoints in an image.

# MPSImageFindKeypoints (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A kernel that is used to find a list of keypoints.

## Declaration

```objectivec
@interface MPSImageFindKeypoints : MPSKernel
```

<a id="overview"></a>

## Overview

This kernel is used to find a list of keypoints whose values are greater than the [minimumThresholdValue](mpsimagekeypointrangeinfo/minimumthresholdvalue.md) in [MPSImageKeypointRangeInfo](mpsimagekeypointrangeinfo.md). The keypoints are generated for a specified region in the image. The pixel format of the source image must be [MTLPixelFormatR8Unorm](../metal/mtlpixelformat/r8unorm.md).

## Topics

### Initializers

- [initWithCoder:device:](mpsimagefindkeypoints/init%28coder_device_%29.md)
- [initWithDevice:info:](mpsimagefindkeypoints/init%28device_info_%29.md)

### Instance Properties

- [keypointRangeInfo](mpsimagefindkeypoints/keypointrangeinfo.md)

### Instance Methods

- [encodeToCommandBuffer:sourceTexture:regions:numberOfRegions:keypointCountBuffer:keypointCountBufferOffset:keypointDataBuffer:keypointDataBufferOffset:](mpsimagefindkeypoints/encode%28to_sourcetexture_regions_numberofregions_keypointcount_keypointcountbufferoffset_keypointdatabuffer_keypointdatabufferoffset_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

## See Also

### Keypoints

- [MPSImageKeypointData](mpsimagekeypointdata.md): A structure that specifies keypoint information.
- [MPSImageKeypointRangeInfo](mpsimagekeypointrangeinfo.md): A structure that specifies information to find the keypoints in an image.
