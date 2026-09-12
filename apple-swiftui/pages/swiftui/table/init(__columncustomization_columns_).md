> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/table/init(_:columncustomization:columns:)](https://developer.apple.com/documentation/swiftui/table/init(_:columncustomization:columns:))

# init(\_:columnCustomization:columns:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Creates a table that computes its rows based on a collection of identifiable data and has dynamically customizable columns.

## Declaration

```swift
nonisolated init<Data>(_ data: Data, columnCustomization: Binding<TableColumnCustomization<Value>>, @TableColumnBuilder<Value, Never> columns: () -> Columns) where Rows == TableForEachContent<Data>, Data : RandomAccessCollection, Columns.TableRowValue == Data.Element
```

## Parameters

- `data`: The identifiable data for computing the table rows.
- `columnCustomization`: A binding to the state of columns.
- `columns`: The columns to display in the table.

<a id="discussion"></a>

## Discussion

Each column in the table that should participate in customization is required to have an identifier, specified with [customizationID(\_:)](../tablecolumncontent/customizationid%28__%29.md).

## See Also

### Creating a table with customizable columns

- [init(\_:selection:columnCustomization:columns:)](init%28__selection_columncustomization_columns_%29.md): Conforms when `Value` is `Rows.TableRowValue`, `Rows` conforms to `TableRowContent`, `Columns` conforms to `TableColumnContent`, and `Rows.TableRowValue` is `Columns.TableRowValue`. Creates a table that computes its rows based on a collection of identifiable data, that supports selecting multiple rows, and that has dynamically customizable columns.
- [init(\_:selection:sortOrder:columnCustomization:columns:)](init%28__selection_sortorder_columncustomization_columns_%29.md): Conforms when `Value` is `Rows.TableRowValue`, `Rows` conforms to `TableRowContent`, `Columns` conforms to `TableColumnContent`, and `Rows.TableRowValue` is `Columns.TableRowValue`. Creates a sortable table that computes its rows based on a collection of identifiable data, supports selecting multiple rows, and has dynamically customizable columns.
- [init(\_:sortOrder:columnCustomization:columns:)](init%28__sortorder_columncustomization_columns_%29.md): Conforms when `Value` is `Rows.TableRowValue`, `Rows` conforms to `TableRowContent`, `Columns` conforms to `TableColumnContent`, and `Rows.TableRowValue` is `Columns.TableRowValue`. Creates a sortable table that computes its rows based on a collection of identifiable data and has dynamically customizable columns.
