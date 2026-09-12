> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsndarraydescriptor/stride](https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor/stride)

# stride (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The increment, in values, between consecutive elements in each dimension.

## Declaration

```swift
var stride: (Int, Int, Int, Int, Int, Int, Int, Int)
```

<a id="Discussion"></a>

## Discussion

Specify the stride of an array descriptor the define the increment between neighboring elements in each dimension. For example, the following values represent a 2D row-major matrix:

```swift
[ 10, 20, 30,
  40, 50, 60,
  70, 80, 90 ]
```

The stride for the first dimension is `1`, for example, the increment between `50` and `60` is a single element. The stride for the second dimension is `3`, for example, the stride between `50` and `80` is three elements.

## See Also

### Accessing the Properties of an Array Descriptor

- [flags](flags.md): Flags that control some behaviors of the n-dimensional array.
- [layout](layout.md): The dimension of the n-dimensional array.
- [size](size.md): The number of values in each dimension.
- [data](data.md): A pointer that is optional and points to the underlying data.
- [data_type](data_type.md): The data type of the n-dimensional array.
- [table_data](table_data.md): The lookup table for indexed data types.
- [table_data_type](table_data_type.md): The data type of the lookup table.
- [data_scale](data_scale.md): The scale you use to convert integer and unsigned integer data to floating point.
- [data_bias](data_bias.md): The bias you use to convert integer and unsigned integer data to floating point.
- [shape](shape.md): The shape of the n-dimensional array.

# stride (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The increment, in values, between consecutive elements in each dimension.

## Declaration

```objectivec
size_t stride[8];
```

<a id="Discussion"></a>

## Discussion

Specify the stride of an array descriptor the define the increment between neighboring elements in each dimension. For example, the following values represent a 2D row-major matrix:

```swift
[ 10, 20, 30,
  40, 50, 60,
  70, 80, 90 ]
```

The stride for the first dimension is `1`, for example, the increment between `50` and `60` is a single element. The stride for the second dimension is `3`, for example, the stride between `50` and `80` is three elements.

## See Also

### Accessing the Properties of an Array Descriptor

- [flags](flags.md): Flags that control some behaviors of the n-dimensional array.
- [layout](layout.md): The dimension of the n-dimensional array.
- [size](size.md): The number of values in each dimension.
- [data](data.md): A pointer that is optional and points to the underlying data.
- [data_type](data_type.md): The data type of the n-dimensional array.
- [table_data](table_data.md): The lookup table for indexed data types.
- [table_data_type](table_data_type.md): The data type of the lookup table.
- [data_scale](data_scale.md): The scale you use to convert integer and unsigned integer data to floating point.
- [data_bias](data_bias.md): The bias you use to convert integer and unsigned integer data to floating point.
