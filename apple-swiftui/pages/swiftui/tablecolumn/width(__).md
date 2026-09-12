> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumn/width(_:)](https://developer.apple.com/documentation/swiftui/tablecolumn/width(_:))

# width(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Creates a fixed width table column that isn’t user resizable.

## Declaration

```swift
nonisolated func width(_ width: CGFloat? = nil) -> TableColumn<RowValue, Sort, Content, Label>
```

## Parameters

- `width`: A fixed width for the resulting column. If `width` is `nil`, the resulting column has no change in sizing.

## See Also

### Setting the column width

- [width(min:ideal:max:)](width%28min_ideal_max_%29.md): Conforms when `RowValue` conforms to `Identifiable`, `Sort` conforms to `SortComparator`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a resizable table column with the provided constraints.
- [width()](width%28%29.md): Deprecated. Conforms when `RowValue` conforms to `Identifiable`, `Sort` conforms to `SortComparator`, `Content` conforms to `View`, and `Label` conforms to `View`. Sets the column’s width.
