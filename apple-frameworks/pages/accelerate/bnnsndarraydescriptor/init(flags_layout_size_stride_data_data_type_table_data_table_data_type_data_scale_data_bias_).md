> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsndarraydescriptor/init(flags:layout:size:stride:data:data_type:table_data:table_data_type:data_scale:data_bias:)](https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor/init(flags:layout:size:stride:data:data_type:table_data:table_data_type:data_scale:data_bias:))

# init(flags:layout:size:stride:data:data_type:table_data:table_data_type:data_scale:data_bias:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a new n-dimensional array descriptor with the specified parameters.

## Declaration

```swift
init(flags: BNNSNDArrayFlags, layout: BNNSDataLayout, size: (Int, Int, Int, Int, Int, Int, Int, Int), stride: (Int, Int, Int, Int, Int, Int, Int, Int), data: UnsafeMutableRawPointer?, data_type: BNNSDataType, table_data: UnsafeMutableRawPointer?, table_data_type: BNNSDataType, data_scale: Float, data_bias: Float)
```

## Parameters

- `flags`: Flags that control some behaviors of the n-dimensional array.
- `layout`: The dimension of the n-dimensional array.
- `size`: The number of values in each dimension.
- `stride`: The increment, in values, between values in each dimension.
- `data`: A pointer that is optional and points to the underlying data.
- `data_type`: The data type of the n-dimensional array.
- `table_data`: The lookup table for indexed data types.
- `table_data_type`: The data type of the lookup table.
- `data_scale`: The scale you use to convert integer and unsigned integer data to floating point.
- `data_bias`: The bias you use to convert integer and unsigned integer data to floating point.

## See Also

### Creating an Array Descriptor

- [init(data:scalarType:shape:)](init%28data_scalartype_shape_%29.md): Returns a new n-dimensional array descriptor that references the same data as the specified raw pointer.
- [init(data:shape:)](init%28data_shape_%29.md): Returns a new n-dimensional array descriptor that references the same data as the specified pointer.
- [init(dataType:shape:)](init%28datatype_shape_%29.md): Returns a new n-dimensional array descriptor from the specified data type and shape.
- [init()](init%28%29.md): Returns a new n-dimensional array descriptor.
