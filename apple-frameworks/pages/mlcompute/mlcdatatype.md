> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcdatatype](https://developer.apple.com/documentation/mlcompute/mlcdatatype)

# MLCDataType (Swift)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A tensor data type.

## Declaration

```swift
enum MLCDataType
```

## Topics

### Enumeration Cases

- [MLCDataType.float16](mlcdatatype/float16.md): Deprecated.
- [MLCDataType.float32](mlcdatatype/float32.md): Deprecated.
- [MLCDataType.boolean](mlcdatatype/boolean.md): Deprecated.
- [MLCDataType.int8](mlcdatatype/int8.md): Deprecated.
- [MLCDataType.int32](mlcdatatype/int32.md): Deprecated.
- [MLCDataType.int64](mlcdatatype/int64.md): Deprecated.
- [MLCDataType.uint8](mlcdatatype/uint8.md): Deprecated.

### Initializers

- [init(rawValue:)](mlcdatatype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating Tensors with Descriptors

- [init(descriptor:)](mlctensor/init%28descriptor_%29.md): Deprecated. Creates a tensor without data, using the descriptor you specify.
- [init(descriptor:data:)](mlctensor/init%28descriptor_data_%29.md): Deprecated. Creates a tensor with the descriptor and data you specify.
- [init(descriptor:fillWithData:)](mlctensor/init%28descriptor_fillwithdata_%29.md): Deprecated. Creates a tensor with the descriptor and scalar value you specify.
- [init(descriptor:randomInitializerType:)](mlctensor/init%28descriptor_randominitializertype_%29.md): Deprecated. Creates a tensor with the descriptor and random initializer type you specify.
- [MLCTensorDescriptor](mlctensordescriptor.md): Deprecated. A configuration object you use to create a tensor.
- [MLCTensorData](mlctensordata.md): Deprecated. An encapsulation of the memory that tensor data uses.
- [MLCRandomInitializerType](mlcrandominitializertype.md): Deprecated. An initializer type you use to create a tensor with random data.

# MLCDataType (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

A tensor data type.

## Declaration

```objectivec
enum MLCDataType : int32_t;
```

## Topics

### Enumeration Cases

- [MLCDataTypeInvalid](mlcdatatype/mlcdatatypeinvalid.md)
- [MLCDataTypeFloat16](mlcdatatype/float16.md): Deprecated.
- [MLCDataTypeFloat32](mlcdatatype/float32.md): Deprecated.
- [MLCDataTypeBoolean](mlcdatatype/boolean.md): Deprecated.
- [MLCDataTypeInt8](mlcdatatype/int8.md): Deprecated.
- [MLCDataTypeInt32](mlcdatatype/int32.md): Deprecated.
- [MLCDataTypeInt64](mlcdatatype/int64.md): Deprecated.
- [MLCDataTypeUInt8](mlcdatatype/uint8.md): Deprecated.
- [MLCDataTypeCount](mlcdatatype/mlcdatatypecount.md)

## See Also

### Creating Tensors with Descriptors

- [tensorWithDescriptor:](mlctensor/init%28descriptor_%29.md): Deprecated. Creates a tensor without data, using the descriptor you specify.
- [tensorWithDescriptor:data:](mlctensor/init%28descriptor_data_%29.md): Deprecated. Creates a tensor with the descriptor and data you specify.
- [tensorWithDescriptor:fillWithData:](mlctensor/init%28descriptor_fillwithdata_%29.md): Deprecated. Creates a tensor with the descriptor and scalar value you specify.
- [tensorWithDescriptor:randomInitializerType:](mlctensor/init%28descriptor_randominitializertype_%29.md): Deprecated. Creates a tensor with the descriptor and random initializer type you specify.
- [MLCTensorDescriptor](mlctensordescriptor.md): Deprecated. A configuration object you use to create a tensor.
- [MLCTensorData](mlctensordata.md): Deprecated. An encapsulation of the memory that tensor data uses.
- [MLCRandomInitializerType](mlcrandominitializertype.md): Deprecated. An initializer type you use to create a tensor with random data.
