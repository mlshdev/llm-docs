> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsndarraydescriptor/shape](https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor/shape)

# shape

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

The shape of the n-dimensional array.

## Declaration

```swift
var shape: BNNS.Shape { get }
```

## See Also

### Accessing the Properties of an Array Descriptor

- [flags](flags.md): Flags that control some behaviors of the n-dimensional array.
- [layout](layout.md): The dimension of the n-dimensional array.
- [size](size.md): The number of values in each dimension.
- [stride](stride.md): The increment, in values, between consecutive elements in each dimension.
- [data](data.md): A pointer that is optional and points to the underlying data.
- [data_type](data_type.md): The data type of the n-dimensional array.
- [table_data](table_data.md): The lookup table for indexed data types.
- [table_data_type](table_data_type.md): The data type of the lookup table.
- [data_scale](data_scale.md): The scale you use to convert integer and unsigned integer data to floating point.
- [data_bias](data_bias.md): The bias you use to convert integer and unsigned integer data to floating point.
