> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumn/width()](https://developer.apple.com/documentation/swiftui/tablecolumn/width())

# width()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Sets the column’s width.

> Use [width(\_:)](width%28__%29.md) or [width(min:ideal:max:)](width%28min_ideal_max_%29.md) instead.

## Declaration

```swift
@export(implementation) nonisolated func width() -> TableColumn<RowValue, Sort, Content, Label>
```

## See Also

### Setting the column width

- [width(\_:)](width%28__%29.md): Conforms when `RowValue` conforms to `Identifiable`, `Sort` conforms to `SortComparator`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a fixed width table column that isn’t user resizable.
- [width(min:ideal:max:)](width%28min_ideal_max_%29.md): Conforms when `RowValue` conforms to `Identifiable`, `Sort` conforms to `SortComparator`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a resizable table column with the provided constraints.
