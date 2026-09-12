> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/table/init(of:selection:columncustomization:columns:rows:)](https://developer.apple.com/documentation/swiftui/table/init(of:selection:columncustomization:columns:rows:))

# init(of:selection:columnCustomization:columns:rows:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Creates a table with the given columns and rows that supports selecting multiple rows that generates its data using values of the given type and has dynamically customizable columns.

## Declaration

```swift
nonisolated init(of valueType: Value.Type, selection: Binding<Set<Value.ID>>, columnCustomization: Binding<TableColumnCustomization<Value>>, @TableColumnBuilder<Value, Never> columns: () -> Columns, @TableRowBuilder<Value> rows: () -> Rows)
```

## Parameters

- `valueType`: The type of value used to derive the table’s contents.
- `selection`: A binding to a set that identifies the selected rows IDs.
- `columnCustomization`: A binding to the state of columns.
- `columns`: The columns to display in the table.
- `rows`: The rows to display in the table.

<a id="discussion"></a>

## Discussion

Each column in the table that should participate in customization is required to have an identifier, specified with [customizationID(\_:)](../tablecolumncontent/customizationid%28__%29.md).

## See Also

### Creating a table with dynamically customizable columns

- [init(of:columnCustomization:columns:rows:)](init%28of_columncustomization_columns_rows_%29.md): Conforms when `Value` is `Rows.TableRowValue`, `Rows` conforms to `TableRowContent`, `Columns` conforms to `TableColumnContent`, and `Rows.TableRowValue` is `Columns.TableRowValue`. Creates a table with the given columns and rows that generates its contents using values of the given type and has dynamically customizable columns.
- [init(of:selection:sortOrder:columnCustomization:columns:rows:)](init%28of_selection_sortorder_columncustomization_columns_rows_%29.md): Conforms when `Value` is `Rows.TableRowValue`, `Rows` conforms to `TableRowContent`, `Columns` conforms to `TableColumnContent`, and `Rows.TableRowValue` is `Columns.TableRowValue`. Creates a sortable table with the given columns and rows that supports selecting multiple rows and dynamically customizable columns.
- [init(of:sortOrder:columnCustomization:columns:rows:)](init%28of_sortorder_columncustomization_columns_rows_%29.md): Conforms when `Value` is `Rows.TableRowValue`, `Rows` conforms to `TableRowContent`, `Columns` conforms to `TableColumnContent`, and `Rows.TableRowValue` is `Columns.TableRowValue`. Creates a sortable table with the given columns and rows and has dynamically customizable columns.
