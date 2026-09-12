> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumn/width(min:ideal:max:)](https://developer.apple.com/documentation/swiftui/tablecolumn/width(min:ideal:max:))

# width(min:ideal:max:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Creates a resizable table column with the provided constraints.

## Declaration

```swift
nonisolated func width(min: CGFloat? = nil, ideal: CGFloat? = nil, max: CGFloat? = nil) -> TableColumn<RowValue, Sort, Content, Label>
```

## Parameters

- `min`: The minimum width of a resizable column. If non-`nil`, the value must be greater than or equal to `0`.
- `ideal`: The ideal width of the column, used to determine the initial width of the table column. The column always starts at least as large as the set ideal size, but may be larger if table was sized larger than the ideal of all of its columns.
- `max`: The maximum width of a resizable column. If non-`nil`, the value must be greater than `0`. Pass [infinity](https://developer.apple.com/documentation/swift/floatingpoint/infinity) to indicate unconstrained maximum width.

<a id="discussion"></a>

## Discussion

Always specify at least one width constraint when calling this method. Pass `nil` or leave out a constraint to indicate no change to the sizing of a column.

To create a fixed size column use [width(\_:)](width%28__%29.md) instead.

## See Also

### Setting the column width

- [width(\_:)](width%28__%29.md): Conforms when `RowValue` conforms to `Identifiable`, `Sort` conforms to `SortComparator`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a fixed width table column that isn’t user resizable.
- [width()](width%28%29.md): Deprecated. Conforms when `RowValue` conforms to `Identifiable`, `Sort` conforms to `SortComparator`, `Content` conforms to `View`, and `Label` conforms to `View`. Sets the column’s width.
