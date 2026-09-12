> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/jointype](https://developer.apple.com/documentation/createml/mldatatable/jointype)

# MLDataTable.JoinType

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Join types available for [MLDataTable](../mldatatable.md) join operations.

## Declaration

```swift
enum JoinType
```

## Topics

### Selecting a joining operation

- [MLDataTable.JoinType.inner](jointype/inner.md): An operation that joins the rows of the data tables whose values match exactly.
- [MLDataTable.JoinType.left](jointype/left.md): An operation that is the union between an inner join and the remaining rows from the original data table.
- [MLDataTable.JoinType.right](jointype/right.md): An operation that is the union between an inner join and the remaining rows from the secondary data table.
- [MLDataTable.JoinType.outer](jointype/outer.md): An operation that is the union between a left join and a right join.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Merging data tables

- [join(with:on:type:)](join%28with_on_type_%29.md): Creates a new data table by merging two data tables by the given columns.
