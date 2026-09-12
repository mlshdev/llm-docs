> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/table/init(sortorder:columns:rows:)](https://developer.apple.com/documentation/swiftui/table/init(sortorder:columns:rows:))

# init(sortOrder:columns:rows:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Creates a sortable table with the given columns and rows.

## Declaration

```swift
nonisolated init<Sort>(sortOrder: Binding<[Sort]>, @TableColumnBuilder<Value, Sort> columns: () -> Columns, @TableRowBuilder<Value> rows: () -> Rows) where Sort : SortComparator, Columns.TableRowValue == Sort.Compared
```

## Parameters

- `sortOrder`: A binding to the ordered sorting of columns.
- `columns`: The columns to display in the table.
- `rows`: The rows to display in the table.

## See Also

### Creating a sortable table from columns and rows

- [init(of:sortOrder:columns:rows:)](init%28of_sortorder_columns_rows_%29.md): Conforms when `Value` is `Rows.TableRowValue`, `Rows` conforms to `TableRowContent`, `Columns` conforms to `TableColumnContent`, and `Rows.TableRowValue` is `Columns.TableRowValue`. Creates a sortable table with the given columns and rows.
- [init(of:selection:sortOrder:columns:rows:)](init%28of_selection_sortorder_columns_rows_%29.md): Conforms when `Value` is `Rows.TableRowValue`, `Rows` conforms to `TableRowContent`, `Columns` conforms to `TableColumnContent`, and `Rows.TableRowValue` is `Columns.TableRowValue`. Creates a sortable table with the given columns and rows that supports selecting multiple rows.
- [init(selection:sortOrder:columns:rows:)](init%28selection_sortorder_columns_rows_%29.md): Conforms when `Value` is `Rows.TableRowValue`, `Rows` conforms to `TableRowContent`, `Columns` conforms to `TableColumnContent`, and `Rows.TableRowValue` is `Columns.TableRowValue`. Creates a sortable table with the given columns and rows that supports selecting multiple rows.
