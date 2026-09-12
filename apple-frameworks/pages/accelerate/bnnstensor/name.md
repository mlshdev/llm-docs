> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnstensor/name](https://developer.apple.com/documentation/accelerate/bnnstensor/name)

# name (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An optional name for the tensor that you can use for debugging.

## Declaration

```swift
var name: UnsafePointer<CChar>?
```

## See Also

### Specifying a tensor’s properties

- [data_type](data_type.md): The data type of the tensor.
- [rank](rank.md): The rank of the tensor.
- [shape](shape.md): A tuple of unsigned-integer elements that specify the size of the tensor.
- [stride](stride.md): A tuple of unsigned-integer elements that specify the stride of the tensor.
- [data](data.md): A pointer to the memory that contains the tensor values.
- [data_size_in_bytes](data_size_in_bytes.md): The size, in bytes, of the memory that contains the tensor values.

# name (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An optional name for the tensor that you can use for debugging.

## Declaration

```objectivec
const char * name;
```

## See Also

### Specifying a tensor’s properties

- [data_type](data_type.md): The data type of the tensor.
- [rank](rank.md): The rank of the tensor.
- [shape](shape.md): A tuple of unsigned-integer elements that specify the size of the tensor.
- [stride](stride.md): A tuple of unsigned-integer elements that specify the stride of the tensor.
- [data](data.md): A pointer to the memory that contains the tensor values.
- [data_size_in_bytes](data_size_in_bytes.md): The size, in bytes, of the memory that contains the tensor values.
