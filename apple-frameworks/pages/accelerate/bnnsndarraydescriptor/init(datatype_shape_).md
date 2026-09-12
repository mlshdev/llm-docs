> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsndarraydescriptor/init(datatype:shape:)](https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor/init(datatype:shape:))

# init(dataType:shape:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Returns a new n-dimensional array descriptor from the specified data type and shape.

## Declaration

```swift
init(dataType: BNNSDataType, shape: BNNS.Shape)
```

## Parameters

- `dataType`: The data type of the data.
- `shape`: The shape of the n-dimensional array descriptor.

## See Also

### Creating an Array Descriptor

- [init(flags:layout:size:stride:data:data_type:table_data:table_data_type:data_scale:data_bias:)](init%28flags_layout_size_stride_data_data_type_table_data_table_data_type_data_scale_data_bias_%29.md): Returns a new n-dimensional array descriptor with the specified parameters.
- [init(data:scalarType:shape:)](init%28data_scalartype_shape_%29.md): Returns a new n-dimensional array descriptor that references the same data as the specified raw pointer.
- [init(data:shape:)](init%28data_shape_%29.md): Returns a new n-dimensional array descriptor that references the same data as the specified pointer.
- [init()](init%28%29.md): Returns a new n-dimensional array descriptor.
