> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/table/init(_:selection:columns:)

# init(\_:selection:columns:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Creates a table that computes its rows based on a collection of identifiable data, and that supports selecting multiple rows.

## Declaration

```swift
nonisolated init<Data>(_ data: Data, selection: Binding<Set<Value.ID>>, @TableColumnBuilder<Value, Never> columns: () -> Columns) where Rows == TableForEachContent<Data>, Data : RandomAccessCollection, Columns.TableRowValue == Data.Element
```

## Parameters

- `data`: The identifiable data for computing the table rows.
- `selection`: A binding to a set that identifies selected rows IDs.
- `columns`: The columns to display in the table.

## See Also

### Creating a table from columns

- [init(\_:columns:)](init%28__columns_%29.md): Conforms when `Value` is `Rows.TableRowValue`, `Rows` conforms to `TableRowContent`, `Columns` conforms to `TableColumnContent`, and `Rows.TableRowValue` is `Columns.TableRowValue`. Creates a table that computes its rows based on a collection of identifiable data.
