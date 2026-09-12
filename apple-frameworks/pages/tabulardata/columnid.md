> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/columnid](https://developer.apple.com/documentation/tabulardata/columnid)

# ColumnID

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A column identifier that stores a column’s name and the type of its elements.

## Declaration

```swift
struct ColumnID<T>
```

## Topics

### Creating a Column ID

- [init(\_:\_:)](columnid/init%28____%29.md): Creates a column identifier.

### Getting the Properties

- [name](columnid/name.md): The name of the column the identifier represents.

### Instance Properties

- [type](columnid/type.md): The type of elements stored in the column the identifier represents.

### Default Implementations

- [CustomStringConvertible Implementations](columnid/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting Types

- [Order](order.md): A type that represents a sort ordering.
- [FormattingOptions](formattingoptions.md): A set of parameters that indicate how to present the contents of data frame or column types to a printable string.
