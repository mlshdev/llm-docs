> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumnforeach/init(_:id:content:)](https://developer.apple.com/documentation/swiftui/tablecolumnforeach/init(_:id:content:))

# init(\_:id:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · visionOS 1.1+

Creates an instance that uniquely identifies and creates table columns across updates based on the provided key path to the underlying data’s identifier.

## Declaration

```swift
nonisolated init(_ data: Data, id: KeyPath<Data.Element, ID>, @TableColumnBuilder<TableColumnForEach<Data, ID, RowValue, Sort, Content>.TableRowValue, TableColumnForEach<Data, ID, RowValue, Sort, Content>.TableColumnSortComparator> content: @escaping (Data.Element) -> Content)
```

## Parameters

- `data`: The data that the [TableColumnForEach](../tablecolumnforeach.md) instance uses to create table columns dynamically.
- `id`: The key path to the provided data’s identifier.
- `content`: The table column builder that creates columns dynamically for each element.

## See Also

### Creating the collection

- [init(\_:content:)](init%28__content_%29.md): Creates an instance that uniquely identifies and creates table columns across updates based on the identity of the underlying data.
