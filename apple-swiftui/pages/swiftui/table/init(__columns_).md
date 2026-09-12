> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/table/init(_:columns:)](https://developer.apple.com/documentation/swiftui/table/init(_:columns:))

# init(\_:columns:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Creates a table that computes its rows based on a collection of identifiable data.

## Declaration

```swift
nonisolated init<Data>(_ data: Data, @TableColumnBuilder<Value, Never> columns: () -> Columns) where Rows == TableForEachContent<Data>, Data : RandomAccessCollection, Columns.TableRowValue == Data.Element
```

## Parameters

- `data`: The identifiable data for computing the table rows.
- `columns`: The columns to display in the table.

## See Also

### Creating a table from columns

- [init(\_:selection:columns:)](init%28__selection_columns_%29.md): Conforms when `Value` is `Rows.TableRowValue`, `Rows` conforms to `TableRowContent`, `Columns` conforms to `TableColumnContent`, and `Rows.TableRowValue` is `Columns.TableRowValue`. Creates a table that computes its rows based on a collection of identifiable data, and that supports selecting multiple rows.
