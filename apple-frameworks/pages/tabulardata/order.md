> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/order](https://developer.apple.com/documentation/tabulardata/order)

# Order

**Framework:** TabularData  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that represents a sort ordering.

## Declaration

```swift
enum Order
```

## Topics

### Getting the Properties

- [Order.ascending](order/ascending.md): A sort ordering that starts with the lowest value and monotonically proceeds to higher values.
- [Order.descending](order/descending.md): A sort ordering that starts with the highest value and monotonically proceeds to lower values.
- [areOrdered(\_:\_:)](order/areordered%28____%29.md): Returns a Boolean that indicates whether the comparable types match the order’s state.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting Types

- [ColumnID](columnid.md): A column identifier that stores a column’s name and the type of its elements.
- [FormattingOptions](formattingoptions.md): A set of parameters that indicate how to present the contents of data frame or column types to a printable string.
