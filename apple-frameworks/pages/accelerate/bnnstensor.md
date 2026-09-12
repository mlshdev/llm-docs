> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnstensor](https://developer.apple.com/documentation/accelerate/bnnstensor)

# BNNSTensor (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.

## Declaration

```swift
struct BNNSTensor
```

## Topics

### Initializers

- [init()](bnnstensor/init%28%29.md): Creates an empty tensor.
- [init(data_type:rank:shape:stride:data:data_size_in_bytes:name:)](bnnstensor/init%28data_type_rank_shape_stride_data_data_size_in_bytes_name_%29.md): Creates a tensor with the specified properties.
- [init(data:shape:stride:)](bnnstensor/init%28data_shape_stride_%29.md): Creates a `BNNSTensor` that references the same memory as the specified `UnsafeMutableBufferPointer`.
- [init(data:shape:stride:dataType:)](bnnstensor/init%28data_shape_stride_datatype_%29.md): Creates a `BNNSTensor` that references the same memory as the specified `UnsafeMutableRawBufferPointer`.
- [init(dataType:shape:stride:)](bnnstensor/init%28datatype_shape_stride_%29.md): Creates an unallocated `BNNSTensor`
- [init(initializingFrom:shape:stride:)](bnnstensor/init%28initializingfrom_shape_stride_%29.md): Returns a `BNNSTensor` structure that’s initialized with every element of the source.
- [init(shape:stride:dataType:)](bnnstensor/init%28shape_stride_datatype_%29.md): Returns a `BNNSTensor` structure based on the supplied shape and data type.

### Specifying a tensor’s properties

- [data_type](bnnstensor/data_type.md): The data type of the tensor.
- [rank](bnnstensor/rank.md): The rank of the tensor.
- [shape](bnnstensor/shape.md): A tuple of unsigned-integer elements that specify the size of the tensor.
- [stride](bnnstensor/stride.md): A tuple of unsigned-integer elements that specify the stride of the tensor.
- [data](bnnstensor/data.md): A pointer to the memory that contains the tensor values.
- [data_size_in_bytes](bnnstensor/data_size_in_bytes.md): The size, in bytes, of the memory that contains the tensor values.
- [name](bnnstensor/name.md): An optional name for the tensor that you can use for debugging.

### Instance Properties

- [count](bnnstensor/count.md): The number of elements in the tensor.

### Instance Methods

- [allocate(as:count:)](bnnstensor/allocate%28as_count_%29.md): Allocates a tensor with existing size and stride populated by `Context.tensor(forFunction:argument:fillKnownDynamicShapes:)`.
- [allocate(initializingFrom:)](bnnstensor/allocate%28initializingfrom_%29.md): Allocates and initializes a tensor with existing size and stride populated by `Context.tensor(forFunction:argument:fillKnownDynamicShapes:)`.
- [deallocate()](bnnstensor/deallocate%28%29.md): Deallocates the previously allocated memory block referenced by this pointer.
- [makeArray(of:)](bnnstensor/makearray%28of_%29.md): Returns an array that contains a copy of this `BNNSTensor`’s elements.

### Type Methods

- [allocate(initializingFrom:shape:stride:)](bnnstensor/allocate%28initializingfrom_shape_stride_%29.md): Creates a `BNNSTensor` populated with a **copy** of the values in `source`.
- [allocate(repeating:shape:stride:)](bnnstensor/allocate%28repeating_shape_stride_%29.md): Creates a `BNNSTensor` filled with the specified scalar value.
- [allocateUninitialized(scalarType:shape:stride:)](bnnstensor/allocateuninitialized%28scalartype_shape_stride_%29.md): Creates a `BNNSTensor` of the specified data type with allocated memory.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Specifying and querying a tensor’s properties

- [BNNSTensorGetAllocationSize(\_:)](bnnstensorgetallocationsize%28__%29.md): Returns the minimum allocation size, in bytes, of the specified tensor.
- [BNNSGraphContextGetTensor(\_:\_:\_:\_:\_:)](bnnsgraphcontextgettensor%28__________%29.md): Sets the properties of a tensor for the specified function argument.
- [BNNSGraphTensorFillStrides(\_:\_:\_:\_:)](bnnsgraphtensorfillstrides%28________%29.md): Sets the stride of the specifed tensor for compatibility with the given model’s input or output argument based on its current shape.

# BNNSTensor (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.

## Declaration

```objectivec
typedef struct { ... } BNNSTensor;
```

## Topics

### Specifying a tensor’s properties

- [data_type](bnnstensor/data_type.md): The data type of the tensor.
- [rank](bnnstensor/rank.md): The rank of the tensor.
- [shape](bnnstensor/shape.md): A tuple of unsigned-integer elements that specify the size of the tensor.
- [stride](bnnstensor/stride.md): A tuple of unsigned-integer elements that specify the stride of the tensor.
- [data](bnnstensor/data.md): A pointer to the memory that contains the tensor values.
- [data_size_in_bytes](bnnstensor/data_size_in_bytes.md): The size, in bytes, of the memory that contains the tensor values.
- [name](bnnstensor/name.md): An optional name for the tensor that you can use for debugging.

## See Also

### Specifying and querying a tensor’s properties

- [BNNSTensorGetAllocationSize](bnnstensorgetallocationsize%28__%29.md): Returns the minimum allocation size, in bytes, of the specified tensor.
- [BNNSGraphContextGetTensor](bnnsgraphcontextgettensor%28__________%29.md): Sets the properties of a tensor for the specified function argument.
- [BNNSGraphTensorFillStrides](bnnsgraphtensorfillstrides%28________%29.md): Sets the stride of the specifed tensor for compatibility with the given model’s input or output argument based on its current shape.
