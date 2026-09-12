> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/table/init(of:columns:rows:)](https://developer.apple.com/documentation/swiftui/table/init(of:columns:rows:))

# init(of:columns:rows:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Creates a table with the given columns and rows that generates its contents using values of the given type.

## Declaration

```swift
@export(implementation) nonisolated init(of valueType: Value.Type, @TableColumnBuilder<Value, Never> columns: () -> Columns, @TableRowBuilder<Value> rows: () -> Rows)
```

## Parameters

- `valueType`: The type of value used to derive the table’s contents.
- `columns`: The columns to display in the table.
- `rows`: The rows to display in the table.

## See Also

### Creating a table from columns and rows

- [init(of:selection:columns:rows:)](init%28of_selection_columns_rows_%29.md): Conforms when `Value` is `Rows.TableRowValue`, `Rows` conforms to `TableRowContent`, `Columns` conforms to `TableColumnContent`, and `Rows.TableRowValue` is `Columns.TableRowValue`. Creates a table with the given columns and rows that supports selecting multiple rows that generates its data using values of the given type.
