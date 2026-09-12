> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/jointype/right](https://developer.apple.com/documentation/createml/mldatatable/jointype/right)

# MLDataTable.JoinType.right

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

An operation that is the union between an inner join and the remaining rows from the secondary data table.

## Declaration

```swift
case right
```

<a id="discussion"></a>

## Discussion

The `.right` join type merges missing values.

## See Also

### Selecting a joining operation

- [MLDataTable.JoinType.inner](inner.md): An operation that joins the rows of the data tables whose values match exactly.
- [MLDataTable.JoinType.left](left.md): An operation that is the union between an inner join and the remaining rows from the original data table.
- [MLDataTable.JoinType.outer](outer.md): An operation that is the union between a left join and a right join.
