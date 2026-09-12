> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/table/init(_:children:columncustomization:columns:)](https://developer.apple.com/documentation/swiftui/table/init(_:children:columncustomization:columns:))

# init(\_:children:columnCustomization:columns:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Creates a hierarchical table that computes its rows based on a collection of identifiable data and key path to the children of that data.

## Declaration

```swift
nonisolated init<Data>(_ data: Data, children: KeyPath<Value, Data?>, columnCustomization: Binding<TableColumnCustomization<Value>>? = nil, @TableColumnBuilder<Value, Never> columns: () -> Columns) where Rows == TableOutlineGroupContent<Data>, Data : RandomAccessCollection, Columns.TableRowValue == Data.Element
```

## Parameters

- `data`: The identifiable data for computing the table rows.
- `children`: A key path to a property whose non-`nil` value gives the children of `data`, and whose `nil` value represents a leaf row of the hierarchy, which is not capable of having children.
- `columnCustomization`: A binding to the state of columns.
- `columns`: The columns to display in the table.

<a id="discussion"></a>

## Discussion

Each column in the table that should participate in customization is required to have an identifier, specified with [customizationID(\_:)](../tablecolumncontent/customizationid%28__%29.md).

## See Also

### Creating a hierarchical table

- [init(\_:children:selection:columnCustomization:columns:)](init%28__children_selection_columncustomization_columns_%29.md): Conforms when `Value` is `Rows.TableRowValue`, `Rows` conforms to `TableRowContent`, `Columns` conforms to `TableColumnContent`, and `Rows.TableRowValue` is `Columns.TableRowValue`. Creates a hierarchical table that computes its rows based on a collection of identifiable data and key path to the children of that data, and supports selecting multiple rows.
- [init(\_:children:selection:sortOrder:columnCustomization:columns:)](init%28__children_selection_sortorder_columncustomization_columns_%29.md): Conforms when `Value` is `Rows.TableRowValue`, `Rows` conforms to `TableRowContent`, `Columns` conforms to `TableColumnContent`, and `Rows.TableRowValue` is `Columns.TableRowValue`. Creates a sortable, hierarchical table that computes its rows based on a collection of identifiable data and key path to the children of that data, and supports selecting multiple rows.
- [init(\_:children:sortOrder:columnCustomization:columns:)](init%28__children_sortorder_columncustomization_columns_%29.md): Conforms when `Value` is `Rows.TableRowValue`, `Rows` conforms to `TableRowContent`, `Columns` conforms to `TableColumnContent`, and `Rows.TableRowValue` is `Columns.TableRowValue`. Creates a sortable, hierarchical table that computes its rows based on a collection of identifiable data and key path to the children of that data.
