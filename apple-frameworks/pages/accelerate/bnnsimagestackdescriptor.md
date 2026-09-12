> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsimagestackdescriptor](https://developer.apple.com/documentation/accelerate/bnnsimagestackdescriptor)

# BNNSImageStackDescriptor (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

> BNNS switched to new Layer Parameters data structures

## Declaration

```swift
struct BNNSImageStackDescriptor
```

<a id="overview"></a>

## Overview

Image stack descriptor (DEPRECATED, Use BNNSNDArrayDescriptor)

An image stack is a sequence of images with the same width and height. Each image in the sequence is called a channel. For example, a RGB image will be stored as three separate channels. A pixel has only one scalar value, stored using the type described by data_type.

Pixel P(c,x,y) at position (x,y) in channel c is stored in data\[x + row_stride \* y + image_stride \* c\], with x=0..width-1, y=0..height-1, c=0..channels-1. row_stride ≥ width, image_stride ≥ row_stride \* height.

Int types are converted to floating point using float Y = DATA_SCALE \* (float)X + DATA_BIAS, and back to integer using Int X = convert_and_saturate(Y / DATA_SCALE - DATA_BIAS)

## Topics

### Initializers

- [init()](bnnsimagestackdescriptor/init%28%29.md): Deprecated.
- [init(width:height:channels:row_stride:image_stride:data_type:)](bnnsimagestackdescriptor/init%28width_height_channels_row_stride_image_stride_data_type_%29.md): Deprecated.
- [init(width:height:channels:row_stride:image_stride:data_type:data_scale:data_bias:)](bnnsimagestackdescriptor/init%28width_height_channels_row_stride_image_stride_data_type_data_scale_data_bias_%29.md): Deprecated.

### Instance Properties

- [channels](bnnsimagestackdescriptor/channels.md): Deprecated.
- [data_bias](bnnsimagestackdescriptor/data_bias.md): Deprecated.
- [data_scale](bnnsimagestackdescriptor/data_scale.md): Deprecated.
- [data_type](bnnsimagestackdescriptor/data_type.md): Deprecated.
- [height](bnnsimagestackdescriptor/height.md): Deprecated.
- [image_stride](bnnsimagestackdescriptor/image_stride.md): Deprecated.
- [row_stride](bnnsimagestackdescriptor/row_stride.md): Deprecated.
- [width](bnnsimagestackdescriptor/width.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures

- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSSparsityParameters](bnnssparsityparameters.md)
- [BNNSSparsityType](bnnssparsitytype.md)
- [BNNSTargetSystem](bnnstargetsystem.md)
- [bnns_graph_argument_t](bnns_graph_argument_t.md): Describes data associated with an input or output argument
- [BNNSVectorDescriptor](bnnsvectordescriptor.md): Deprecated.

# BNNSImageStackDescriptor (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct { ... } BNNSImageStackDescriptor;
```

<a id="overview"></a>

## Overview

Image stack descriptor (DEPRECATED, Use BNNSNDArrayDescriptor)

An image stack is a sequence of images with the same width and height. Each image in the sequence is called a channel. For example, a RGB image will be stored as three separate channels. A pixel has only one scalar value, stored using the type described by data_type.

Pixel P(c,x,y) at position (x,y) in channel c is stored in data\[x + row_stride \* y + image_stride \* c\], with x=0..width-1, y=0..height-1, c=0..channels-1. row_stride ≥ width, image_stride ≥ row_stride \* height.

Int types are converted to floating point using float Y = DATA_SCALE \* (float)X + DATA_BIAS, and back to integer using Int X = convert_and_saturate(Y / DATA_SCALE - DATA_BIAS)

## Topics

### Instance Properties

- [channels](bnnsimagestackdescriptor/channels.md): Deprecated.
- [data_bias](bnnsimagestackdescriptor/data_bias.md): Deprecated.
- [data_scale](bnnsimagestackdescriptor/data_scale.md): Deprecated.
- [data_type](bnnsimagestackdescriptor/data_type.md): Deprecated.
- [height](bnnsimagestackdescriptor/height.md): Deprecated.
- [image_stride](bnnsimagestackdescriptor/image_stride.md): Deprecated.
- [row_stride](bnnsimagestackdescriptor/row_stride.md): Deprecated.
- [width](bnnsimagestackdescriptor/width.md): Deprecated.

## See Also

### Structures

- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSSparsityParameters](bnnssparsityparameters.md)
- [BNNSSparsityType](bnnssparsitytype.md)
- [BNNSTargetSystem](bnnstargetsystem.md)
- [bnns_graph_argument_t](bnns_graph_argument_t.md): Describes data associated with an input or output argument
- [BNNSVectorDescriptor](bnnsvectordescriptor.md): Deprecated.
