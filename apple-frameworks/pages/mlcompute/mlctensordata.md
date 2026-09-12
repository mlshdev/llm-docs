> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensordata](https://developer.apple.com/documentation/mlcompute/mlctensordata)

# MLCTensorData (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An encapsulation of the memory that tensor data uses.

## Declaration

```swift
class MLCTensorData
```

<a id="overview"></a>

## Overview

> **Important**

>  A tensor data instance doesn’t take ownership of the `bytes` pointer and therefore won’t free it upon deallocation.

## Topics

### Creating Tensor Data

- [init(bytesNoCopy:length:)](mlctensordata/init%28bytesnocopy_length_%29.md): Deprecated. Creates a tensor data instance with the buffer of data and length of bytes you specify.
- [init(bytesNoCopy:length:deallocator:)](mlctensordata/init%28bytesnocopy_length_deallocator_%29.md): Deprecated. Creates a tensor data instance with a data buffer, byte length, and custom deallocator closure you specify.
- [init(immutableBytesNoCopy:length:)](mlctensordata/init%28immutablebytesnocopy_length_%29.md): Deprecated. Creates a tensor data instance with the buffer of immutable data and length of bytes you specify.

### Inspecting Tensor Data

- [bytes](mlctensordata/bytes.md): Deprecated. A buffer that conains data.
- [length](mlctensordata/length.md): Deprecated. The number of bytes you choose to hold for this tensor data instance.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating Tensors with Descriptors

- [init(descriptor:)](mlctensor/init%28descriptor_%29.md): Deprecated. Creates a tensor without data, using the descriptor you specify.
- [init(descriptor:data:)](mlctensor/init%28descriptor_data_%29.md): Deprecated. Creates a tensor with the descriptor and data you specify.
- [init(descriptor:fillWithData:)](mlctensor/init%28descriptor_fillwithdata_%29.md): Deprecated. Creates a tensor with the descriptor and scalar value you specify.
- [init(descriptor:randomInitializerType:)](mlctensor/init%28descriptor_randominitializertype_%29.md): Deprecated. Creates a tensor with the descriptor and random initializer type you specify.
- [MLCTensorDescriptor](mlctensordescriptor.md): Deprecated. A configuration object you use to create a tensor.
- [MLCDataType](mlcdatatype.md): Deprecated. A tensor data type.
- [MLCRandomInitializerType](mlcrandominitializertype.md): Deprecated. An initializer type you use to create a tensor with random data.

# MLCTensorData (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An encapsulation of the memory that tensor data uses.

## Declaration

```objectivec
@interface MLCTensorData : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  A tensor data instance doesn’t take ownership of the `bytes` pointer and therefore won’t free it upon deallocation.

## Topics

### Creating Tensor Data

- [dataWithBytesNoCopy:length:](mlctensordata/init%28bytesnocopy_length_%29.md): Deprecated. Creates a tensor data instance with the buffer of data and length of bytes you specify.
- [dataWithBytesNoCopy:length:deallocator:](mlctensordata/init%28bytesnocopy_length_deallocator_%29.md): Deprecated. Creates a tensor data instance with a data buffer, byte length, and custom deallocator closure you specify.
- [dataWithImmutableBytesNoCopy:length:](mlctensordata/init%28immutablebytesnocopy_length_%29.md): Deprecated. Creates a tensor data instance with the buffer of immutable data and length of bytes you specify.

### Inspecting Tensor Data

- [bytes](mlctensordata/bytes.md): Deprecated. A buffer that conains data.
- [length](mlctensordata/length.md): Deprecated. The number of bytes you choose to hold for this tensor data instance.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Creating Tensors with Descriptors

- [tensorWithDescriptor:](mlctensor/init%28descriptor_%29.md): Deprecated. Creates a tensor without data, using the descriptor you specify.
- [tensorWithDescriptor:data:](mlctensor/init%28descriptor_data_%29.md): Deprecated. Creates a tensor with the descriptor and data you specify.
- [tensorWithDescriptor:fillWithData:](mlctensor/init%28descriptor_fillwithdata_%29.md): Deprecated. Creates a tensor with the descriptor and scalar value you specify.
- [tensorWithDescriptor:randomInitializerType:](mlctensor/init%28descriptor_randominitializertype_%29.md): Deprecated. Creates a tensor with the descriptor and random initializer type you specify.
- [MLCTensorDescriptor](mlctensordescriptor.md): Deprecated. A configuration object you use to create a tensor.
- [MLCDataType](mlcdatatype.md): Deprecated. A tensor data type.
- [MLCRandomInitializerType](mlcrandominitializertype.md): Deprecated. An initializer type you use to create a tensor with random data.
