> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsndarraydescriptor/table_data](https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor/table_data)

# table_data (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The lookup table for indexed data types.

## Declaration

```swift
var table_data: UnsafeMutableRawPointer?
```

## See Also

### Accessing the Properties of an Array Descriptor

- [flags](flags.md): Flags that control some behaviors of the n-dimensional array.
- [layout](layout.md): The dimension of the n-dimensional array.
- [size](size.md): The number of values in each dimension.
- [stride](stride.md): The increment, in values, between consecutive elements in each dimension.
- [data](data.md): A pointer that is optional and points to the underlying data.
- [data_type](data_type.md): The data type of the n-dimensional array.
- [table_data_type](table_data_type.md): The data type of the lookup table.
- [data_scale](data_scale.md): The scale you use to convert integer and unsigned integer data to floating point.
- [data_bias](data_bias.md): The bias you use to convert integer and unsigned integer data to floating point.
- [shape](shape.md): The shape of the n-dimensional array.

# table_data (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The lookup table for indexed data types.

## Declaration

```objectivec
void * table_data;
```

## See Also

### Accessing the Properties of an Array Descriptor

- [flags](flags.md): Flags that control some behaviors of the n-dimensional array.
- [layout](layout.md): The dimension of the n-dimensional array.
- [size](size.md): The number of values in each dimension.
- [stride](stride.md): The increment, in values, between consecutive elements in each dimension.
- [data](data.md): A pointer that is optional and points to the underlying data.
- [data_type](data_type.md): The data type of the n-dimensional array.
- [table_data_type](table_data_type.md): The data type of the lookup table.
- [data_scale](data_scale.md): The scale you use to convert integer and unsigned integer data to floating point.
- [data_bias](data_bias.md): The bias you use to convert integer and unsigned integer data to floating point.
