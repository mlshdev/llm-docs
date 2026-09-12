> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsvectordescriptor](https://developer.apple.com/documentation/accelerate/bnnsvectordescriptor)

# BNNSVectorDescriptor (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

> BNNS switched to new Layer Parameters data structures

## Declaration

```swift
struct BNNSVectorDescriptor
```

<a id="overview"></a>

## Overview

Vector format descriptor (DEPRECATED, Use BNNSNDArrayDescriptor)

Represents a vector of dimension size. Each vector element is a scalar value, stored using the type specified in data_type.

Component V(i) at index i is stored in data\[i\], with i=0..size-1.

Int types are converted to floating point using float Y = DATA_SCALE \* (float)X + DATA_BIAS, and back to integer using Int X = convert_and_saturate(Y / DATA_SCALE - DATA_BIAS)

## Topics

### Initializers

- [init()](bnnsvectordescriptor/init%28%29.md): Deprecated.
- [init(size:data_type:)](bnnsvectordescriptor/init%28size_data_type_%29.md): Deprecated.
- [init(size:data_type:data_scale:data_bias:)](bnnsvectordescriptor/init%28size_data_type_data_scale_data_bias_%29.md): Deprecated.

### Instance Properties

- [data_bias](bnnsvectordescriptor/data_bias.md): Deprecated.
- [data_scale](bnnsvectordescriptor/data_scale.md): Deprecated.
- [data_type](bnnsvectordescriptor/data_type.md): Deprecated.
- [size](bnnsvectordescriptor/size.md): Deprecated.

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
- [BNNSImageStackDescriptor](bnnsimagestackdescriptor.md): Deprecated.

# BNNSVectorDescriptor (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct { ... } BNNSVectorDescriptor;
```

<a id="overview"></a>

## Overview

Vector format descriptor (DEPRECATED, Use BNNSNDArrayDescriptor)

Represents a vector of dimension size. Each vector element is a scalar value, stored using the type specified in data_type.

Component V(i) at index i is stored in data\[i\], with i=0..size-1.

Int types are converted to floating point using float Y = DATA_SCALE \* (float)X + DATA_BIAS, and back to integer using Int X = convert_and_saturate(Y / DATA_SCALE - DATA_BIAS)

## Topics

### Instance Properties

- [data_bias](bnnsvectordescriptor/data_bias.md): Deprecated.
- [data_scale](bnnsvectordescriptor/data_scale.md): Deprecated.
- [data_type](bnnsvectordescriptor/data_type.md): Deprecated.
- [size](bnnsvectordescriptor/size.md): Deprecated.

## See Also

### Structures

- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSSparsityParameters](bnnssparsityparameters.md)
- [BNNSSparsityType](bnnssparsitytype.md)
- [BNNSTargetSystem](bnnstargetsystem.md)
- [bnns_graph_argument_t](bnns_graph_argument_t.md): Describes data associated with an input or output argument
- [BNNSImageStackDescriptor](bnnsimagestackdescriptor.md): Deprecated.
