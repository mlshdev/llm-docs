> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensor/init(descriptor:)](https://developer.apple.com/documentation/mlcompute/mlctensor/init(descriptor:))

# init(descriptor:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor without data, using the descriptor you specify.

## Declaration

```swift
convenience init(descriptor tensorDescriptor: MLCTensorDescriptor)
```

## Parameters

- `tensorDescriptor`: An object you use to configure the tensor.

<a id="Discussion"></a>

## Discussion

The tensor data type is [MLCDataType.float32](../mlcdatatype/float32.md).

## See Also

### Creating Tensors with Descriptors

- [init(descriptor:data:)](init%28descriptor_data_%29.md): Deprecated. Creates a tensor with the descriptor and data you specify.
- [init(descriptor:fillWithData:)](init%28descriptor_fillwithdata_%29.md): Deprecated. Creates a tensor with the descriptor and scalar value you specify.
- [init(descriptor:randomInitializerType:)](init%28descriptor_randominitializertype_%29.md): Deprecated. Creates a tensor with the descriptor and random initializer type you specify.
- [MLCTensorDescriptor](../mlctensordescriptor.md): Deprecated. A configuration object you use to create a tensor.
- [MLCDataType](../mlcdatatype.md): Deprecated. A tensor data type.
- [MLCTensorData](../mlctensordata.md): Deprecated. An encapsulation of the memory that tensor data uses.
- [MLCRandomInitializerType](../mlcrandominitializertype.md): Deprecated. An initializer type you use to create a tensor with random data.

# tensorWithDescriptor: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor without data, using the descriptor you specify.

## Declaration

```objectivec
+ (instancetype) tensorWithDescriptor:(MLCTensorDescriptor *) tensorDescriptor;
```

## Parameters

- `tensorDescriptor`: An object you use to configure the tensor.

<a id="Discussion"></a>

## Discussion

The tensor data type is [MLCDataTypeFloat32](../mlcdatatype/float32.md).

## See Also

### Creating Tensors with Descriptors

- [tensorWithDescriptor:data:](init%28descriptor_data_%29.md): Deprecated. Creates a tensor with the descriptor and data you specify.
- [tensorWithDescriptor:fillWithData:](init%28descriptor_fillwithdata_%29.md): Deprecated. Creates a tensor with the descriptor and scalar value you specify.
- [tensorWithDescriptor:randomInitializerType:](init%28descriptor_randominitializertype_%29.md): Deprecated. Creates a tensor with the descriptor and random initializer type you specify.
- [MLCTensorDescriptor](../mlctensordescriptor.md): Deprecated. A configuration object you use to create a tensor.
- [MLCDataType](../mlcdatatype.md): Deprecated. A tensor data type.
- [MLCTensorData](../mlctensordata.md): Deprecated. An encapsulation of the memory that tensor data uses.
- [MLCRandomInitializerType](../mlcrandominitializertype.md): Deprecated. An initializer type you use to create a tensor with random data.
