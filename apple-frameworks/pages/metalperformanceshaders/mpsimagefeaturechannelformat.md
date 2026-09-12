> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagefeaturechannelformat](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagefeaturechannelformat)

# MPSImageFeatureChannelFormat (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Encodes the representation of a single channel within an image.

## Declaration

```swift
enum MPSImageFeatureChannelFormat
```

<a id="overview"></a>

## Overview

A pixel in an [MPSImage](mpsimage.md) object may have many channels in it, sometimes many more than 4, that exceed the limit of what a [MTLPixelFormat](../metal/mtlpixelformat.md) value can encode. The storage format for a single channel within a pixel can be given by the [MPSImageFeatureChannelFormat](mpsimagefeaturechannelformat.md) type. The number of channels is defined by the [featureChannels](mpsimage/featurechannels.md) property of an [MPSImage](mpsimage.md) object. The size of the pixel is the size of the channel format multiplied by the number of feature channels. No padding is allowed, except to round out to a full byte.

## Topics

### Constants

- [MPSImageFeatureChannelFormat.none](mpsimagefeaturechannelformat/none.md)
- [MPSImageFeatureChannelFormat.unorm8](mpsimagefeaturechannelformat/unorm8.md): `uint8_t` type with value `[0,255]` and encoding `[0,1.0]`.
- [MPSImageFeatureChannelFormat.unorm16](mpsimagefeaturechannelformat/unorm16.md): `uint16_t` type with value `[0,65535]` and encoding `[0,1.0]`.
- [MPSImageFeatureChannelFormat.float16](mpsimagefeaturechannelformat/float16.md): IEEE-754 16-bit floating-point type (half precision). Representable normal range is `+-[2^-14, 65504], 0, INF, NaN`. 11 bits of precision + exponent.
- [MPSImageFeatureChannelFormat.float32](mpsimagefeaturechannelformat/float32.md): IEEE-754 32-bit floating-point type (single precision, standard `float` type in C). 24 bits of precision + exponent.

### Enumeration Cases

- [MPSImageFeatureChannelFormat.count](mpsimagefeaturechannelformat/count.md)

### Initializers

- [init(rawValue:)](mpsimagefeaturechannelformat/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Instance Properties

- [exportFromGraph](mpsnnimagenode/exportfromgraph.md)
- [format](mpsnnimagenode/format.md)
- [handle](mpsnnimagenode/handle.md)
- [imageAllocator](mpsnnimagenode/imageallocator.md)
- [stopGradient](mpsnnimagenode/stopgradient.md)
- [synchronizeResource](mpsnnimagenode/synchronizeresource.md)

# MPSImageFeatureChannelFormat (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Encodes the representation of a single channel within an image.

## Declaration

```objectivec
enum MPSImageFeatureChannelFormat : NSUInteger;
```

<a id="overview"></a>

## Overview

A pixel in an [MPSImage](mpsimage.md) object may have many channels in it, sometimes many more than 4, that exceed the limit of what a [MTLPixelFormat](../metal/mtlpixelformat.md) value can encode. The storage format for a single channel within a pixel can be given by the [MPSImageFeatureChannelFormat](mpsimagefeaturechannelformat.md) type. The number of channels is defined by the [featureChannels](mpsimage/featurechannels.md) property of an [MPSImage](mpsimage.md) object. The size of the pixel is the size of the channel format multiplied by the number of feature channels. No padding is allowed, except to round out to a full byte.

## Topics

### Constants

- [MPSImageFeatureChannelFormatNone](mpsimagefeaturechannelformat/none.md)
- [MPSImageFeatureChannelFormatUnorm8](mpsimagefeaturechannelformat/unorm8.md): `uint8_t` type with value `[0,255]` and encoding `[0,1.0]`.
- [MPSImageFeatureChannelFormatUnorm16](mpsimagefeaturechannelformat/unorm16.md): `uint16_t` type with value `[0,65535]` and encoding `[0,1.0]`.
- [MPSImageFeatureChannelFormatFloat16](mpsimagefeaturechannelformat/float16.md): IEEE-754 16-bit floating-point type (half precision). Representable normal range is `+-[2^-14, 65504], 0, INF, NaN`. 11 bits of precision + exponent.
- [MPSImageFeatureChannelFormatFloat32](mpsimagefeaturechannelformat/float32.md): IEEE-754 32-bit floating-point type (single precision, standard `float` type in C). 24 bits of precision + exponent.
- [MPSImageFeatureChannelFormat_reserved0](mpsimagefeaturechannelformat/mpsimagefeaturechannelformat_reserved0.md)

### Enumeration Cases

- [MPSImageFeatureChannelFormatCount](mpsimagefeaturechannelformat/count.md)

## See Also

### Instance Properties

- [exportFromGraph](mpsnnimagenode/exportfromgraph.md)
- [format](mpsnnimagenode/format.md)
- [handle](mpsnnimagenode/handle.md)
- [imageAllocator](mpsnnimagenode/imageallocator.md)
- [stopGradient](mpsnnimagenode/stopgradient.md)
- [synchronizeResource](mpsnnimagenode/synchronizeresource.md)
