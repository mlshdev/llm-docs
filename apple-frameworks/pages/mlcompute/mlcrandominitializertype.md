> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcrandominitializertype](https://developer.apple.com/documentation/mlcompute/mlcrandominitializertype)

# MLCRandomInitializerType (Swift)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An initializer type you use to create a tensor with random data.

## Declaration

```swift
enum MLCRandomInitializerType
```

## Topics

### Enumeration Cases

- [MLCRandomInitializerType.uniform](mlcrandominitializertype/uniform.md): Deprecated.
- [MLCRandomInitializerType.glorotUniform](mlcrandominitializertype/glorotuniform.md): Deprecated.
- [MLCRandomInitializerType.xavier](mlcrandominitializertype/xavier.md): Deprecated.

### Initializers

- [init(rawValue:)](mlcrandominitializertype/init%28rawvalue_%29.md): Deprecated.

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
- [MLCDataType](mlcdatatype.md): Deprecated. A tensor data type.
- [MLCTensorData](mlctensordata.md): Deprecated. An encapsulation of the memory that tensor data uses.

# MLCRandomInitializerType (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

An initializer type you use to create a tensor with random data.

## Declaration

```objectivec
enum MLCRandomInitializerType : int32_t;
```

## Topics

### Enumeration Cases

- [MLCRandomInitializerTypeInvalid](mlcrandominitializertype/mlcrandominitializertypeinvalid.md)
- [MLCRandomInitializerTypeUniform](mlcrandominitializertype/uniform.md): Deprecated.
- [MLCRandomInitializerTypeGlorotUniform](mlcrandominitializertype/glorotuniform.md): Deprecated.
- [MLCRandomInitializerTypeXavier](mlcrandominitializertype/xavier.md): Deprecated.
- [MLCRandomInitializerTypeCount](mlcrandominitializertype/mlcrandominitializertypecount.md)

## See Also

### Creating Tensors with Descriptors

- [tensorWithDescriptor:](mlctensor/init%28descriptor_%29.md): Deprecated. Creates a tensor without data, using the descriptor you specify.
- [tensorWithDescriptor:data:](mlctensor/init%28descriptor_data_%29.md): Deprecated. Creates a tensor with the descriptor and data you specify.
- [tensorWithDescriptor:fillWithData:](mlctensor/init%28descriptor_fillwithdata_%29.md): Deprecated. Creates a tensor with the descriptor and scalar value you specify.
- [tensorWithDescriptor:randomInitializerType:](mlctensor/init%28descriptor_randominitializertype_%29.md): Deprecated. Creates a tensor with the descriptor and random initializer type you specify.
- [MLCTensorDescriptor](mlctensordescriptor.md): Deprecated. A configuration object you use to create a tensor.
- [MLCDataType](mlcdatatype.md): Deprecated. A tensor data type.
- [MLCTensorData](mlctensordata.md): Deprecated. An encapsulation of the memory that tensor data uses.
