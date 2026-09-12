> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/joinkind](https://developer.apple.com/documentation/tabulardata/joinkind)

# JoinKind

**Framework:** TabularData  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An operation type that joins two data frame types.

## Declaration

```swift
enum JoinKind
```

## Topics

### Enumeration Cases

- [JoinKind.full](joinkind/full.md): A join kind that contains every row from both data frame types.
- [JoinKind.inner](joinkind/inner.md): A join kind that only contains rows with matching values in both data frame types.
- [JoinKind.left](joinkind/left.md): A join kind that contains all rows from the left data frame type, and only the rows with matching values from the right data frame type.
- [JoinKind.right](joinkind/right.md): A join kind that contains all rows from the right data frame type, and only the rows with matching values from the left data frame type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Data Frame by Joining Another Data Frame

- [joined(\_:on:kind:)](dataframeprotocol/joined%28__on_kind_%29-1gp6k.md): Generates a data frame by joining with another data frame type with a common column you select by name.
- [joined(\_:on:kind:)](dataframeprotocol/joined%28__on_kind_%29-7u2tw.md): Generates a data frame by joining with another data frame type along the columns that you select by name for both data frame types.
- [joined(\_:on:kind:)](dataframeprotocol/joined%28__on_kind_%29-9629e.md): Generates a data frame by joining with another data frame type along the columns that you select by identifier for both data frame types.
- [joined(\_:on:kind:)](dataframeprotocol/joined%28__on_kind_%29-mvic.md): Generates a data frame by joining with another data frame type with a common column that you select by identifier.
