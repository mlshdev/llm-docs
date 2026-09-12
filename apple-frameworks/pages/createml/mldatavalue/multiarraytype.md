> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatavalue/multiarraytype](https://developer.apple.com/documentation/createml/mldatavalue/multiarraytype)

# MLDataValue.MultiArrayType

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A multidimensional array of data values.

## Declaration

```swift
struct MultiArrayType
```

## Topics

### Creating an array type

- [init(\_:)](multiarraytype/init%28__%29.md)
- [init(shape:)](multiarraytype/init%28shape_%29.md)

### Getting the array

- [mlMultiArray](multiarraytype/mlmultiarray.md)

### Getting an element

- [subscript(\_:)](multiarraytype/subscript%28__%29.md)

### Default Implementations

- [MLDataValueConvertible Implementations](multiarraytype/mldatavalueconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [MLDataValueConvertible](../mldatavalueconvertible.md)

## See Also

### Accessing array values

- [sequenceValue](sequencevalue.md): The underlying sequence.
- [MLDataValue.SequenceType](sequencetype.md): A sequence of data values.
- [multiArrayValue](multiarrayvalue.md): The underlying multidimensional array.
