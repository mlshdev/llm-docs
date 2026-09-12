> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatavalue/valuetype](https://developer.apple.com/documentation/createml/mldatavalue/valuetype)

# MLDataValue.ValueType

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

An enumeration describing the supported underlying types that an `MLDataValue wraps`.

## Declaration

```swift
enum ValueType
```

## Topics

### Supported values

- [MLDataValue.ValueType.int](valuetype/int.md): An integer type.
- [MLDataValue.ValueType.double](valuetype/double.md): A double type.
- [MLDataValue.ValueType.string](valuetype/string.md): A string type.
- [MLDataValue.ValueType.dictionary](valuetype/dictionary.md): A dictionary type.
- [MLDataValue.ValueType.sequence](valuetype/sequence.md): A sequence type.
- [MLDataValue.ValueType.multiArray](valuetype/multiarray.md): A multidimensional type.
- [MLDataValue.ValueType.invalid](valuetype/invalid.md): An invalid type.

### Describing a data value type

- [description](valuetype/description.md): A text representation of the data value type.
- [debugDescription](valuetype/debugdescription.md): A text representation of the data value type that’s suitable for output during debugging.

### Default Implementations

- [CustomDebugStringConvertible Implementations](valuetype/customdebugstringconvertible-implementations.md)
- [CustomStringConvertible Implementations](valuetype/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Inspecting the type

- [type](type.md): The kind of the underlying value that the data value wraps.
