> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnstensor/data](https://developer.apple.com/documentation/accelerate/bnnstensor/data)

# data (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to the memory that contains the tensor values.

## Declaration

```swift
var data: UnsafeMutableRawPointer?
```

## See Also

### Specifying a tensor’s properties

- [data_type](data_type.md): The data type of the tensor.
- [rank](rank.md): The rank of the tensor.
- [shape](shape.md): A tuple of unsigned-integer elements that specify the size of the tensor.
- [stride](stride.md): A tuple of unsigned-integer elements that specify the stride of the tensor.
- [data_size_in_bytes](data_size_in_bytes.md): The size, in bytes, of the memory that contains the tensor values.
- [name](name.md): An optional name for the tensor that you can use for debugging.

# data (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to the memory that contains the tensor values.

## Declaration

```objectivec
void * data;
```

## See Also

### Specifying a tensor’s properties

- [data_type](data_type.md): The data type of the tensor.
- [rank](rank.md): The rank of the tensor.
- [shape](shape.md): A tuple of unsigned-integer elements that specify the size of the tensor.
- [stride](stride.md): A tuple of unsigned-integer elements that specify the stride of the tensor.
- [data_size_in_bytes](data_size_in_bytes.md): The size, in bytes, of the memory that contains the tensor values.
- [name](name.md): An optional name for the tensor that you can use for debugging.
