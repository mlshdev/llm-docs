> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensor/init(descriptor:fillwithdata:)](https://developer.apple.com/documentation/mlcompute/mlctensor/init(descriptor:fillwithdata:))

# init(descriptor:fillWithData:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor with the descriptor and scalar value you specify.

## Declaration

```swift
convenience init(descriptor tensorDescriptor: MLCTensorDescriptor, fillWithData fillData: NSNumber)
```

## Parameters

- `tensorDescriptor`: An object you use to configure the tensor.
- `fillData`: The scalar value with which to initialize the tensor data.

## See Also

### Creating Tensors with Descriptors

- [init(descriptor:)](init%28descriptor_%29.md): Deprecated. Creates a tensor without data, using the descriptor you specify.
- [init(descriptor:data:)](init%28descriptor_data_%29.md): Deprecated. Creates a tensor with the descriptor and data you specify.
- [init(descriptor:randomInitializerType:)](init%28descriptor_randominitializertype_%29.md): Deprecated. Creates a tensor with the descriptor and random initializer type you specify.
- [MLCTensorDescriptor](../mlctensordescriptor.md): Deprecated. A configuration object you use to create a tensor.
- [MLCDataType](../mlcdatatype.md): Deprecated. A tensor data type.
- [MLCTensorData](../mlctensordata.md): Deprecated. An encapsulation of the memory that tensor data uses.
- [MLCRandomInitializerType](../mlcrandominitializertype.md): Deprecated. An initializer type you use to create a tensor with random data.

# tensorWithDescriptor:fillWithData: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor with the descriptor and scalar value you specify.

## Declaration

```objectivec
+ (instancetype) tensorWithDescriptor:(MLCTensorDescriptor *) tensorDescriptor fillWithData:(NSNumber *) fillData;
```

## Parameters

- `tensorDescriptor`: An object you use to configure the tensor.
- `fillData`: The scalar value with which to initialize the tensor data.

## See Also

### Creating Tensors with Descriptors

- [tensorWithDescriptor:](init%28descriptor_%29.md): Deprecated. Creates a tensor without data, using the descriptor you specify.
- [tensorWithDescriptor:data:](init%28descriptor_data_%29.md): Deprecated. Creates a tensor with the descriptor and data you specify.
- [tensorWithDescriptor:randomInitializerType:](init%28descriptor_randominitializertype_%29.md): Deprecated. Creates a tensor with the descriptor and random initializer type you specify.
- [MLCTensorDescriptor](../mlctensordescriptor.md): Deprecated. A configuration object you use to create a tensor.
- [MLCDataType](../mlcdatatype.md): Deprecated. A tensor data type.
- [MLCTensorData](../mlctensordata.md): Deprecated. An encapsulation of the memory that tensor data uses.
- [MLCRandomInitializerType](../mlcrandominitializertype.md): Deprecated. An initializer type you use to create a tensor with random data.
