> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnstensor/stride](https://developer.apple.com/documentation/accelerate/bnnstensor/stride)

# stride (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A tuple of unsigned-integer elements that specify the stride of the tensor.

## Declaration

```swift
var stride: (Int, Int, Int, Int, Int, Int, Int, Int)
```

<a id="Discussion"></a>

## Discussion

The first [rank](rank.md) elements specify the stride of each dimension.

## See Also

### Specifying a tensor’s properties

- [data_type](data_type.md): The data type of the tensor.
- [rank](rank.md): The rank of the tensor.
- [shape](shape.md): A tuple of unsigned-integer elements that specify the size of the tensor.
- [data](data.md): A pointer to the memory that contains the tensor values.
- [data_size_in_bytes](data_size_in_bytes.md): The size, in bytes, of the memory that contains the tensor values.
- [name](name.md): An optional name for the tensor that you can use for debugging.

# stride (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A tuple of unsigned-integer elements that specify the stride of the tensor.

## Declaration

```objectivec
ssize_t stride[8];
```

<a id="Discussion"></a>

## Discussion

The first [rank](rank.md) elements specify the stride of each dimension.

## See Also

### Specifying a tensor’s properties

- [data_type](data_type.md): The data type of the tensor.
- [rank](rank.md): The rank of the tensor.
- [shape](shape.md): A tuple of unsigned-integer elements that specify the size of the tensor.
- [data](data.md): A pointer to the memory that contains the tensor values.
- [data_size_in_bytes](data_size_in_bytes.md): The size, in bytes, of the memory that contains the tensor values.
- [name](name.md): An optional name for the tensor that you can use for debugging.
