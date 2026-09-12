> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/table/init(_:sortorder:columns:)](https://developer.apple.com/documentation/swiftui/table/init(_:sortorder:columns:))

# init(\_:sortOrder:columns:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Creates a sortable table that computes its rows based on a collection of identifiable data.

## Declaration

```swift
nonisolated init<Data, Sort>(_ data: Data, sortOrder: Binding<[Sort]>, @TableColumnBuilder<Value, Sort> columns: () -> Columns) where Rows == TableForEachContent<Data>, Data : RandomAccessCollection, Sort : SortComparator, Columns.TableRowValue == Data.Element, Data.Element == Sort.Compared
```

## Parameters

- `data`: The identifiable data for computing the table rows.
- `sortOrder`: A binding to the ordered sorting of columns.
- `columns`: The columns to display in the table.

## See Also

### Creating a sortable table from columns

- [init(\_:selection:sortOrder:columns:)](init%28__selection_sortorder_columns_%29.md): Conforms when `Value` is `Rows.TableRowValue`, `Rows` conforms to `TableRowContent`, `Columns` conforms to `TableColumnContent`, and `Rows.TableRowValue` is `Columns.TableRowValue`. Creates a sortable table that computes its rows based on a collection of identifiable data, and supports selecting multiple rows.
