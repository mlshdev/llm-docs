> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tableforeachcontent](https://developer.apple.com/documentation/swiftui/tableforeachcontent)

# TableForEachContent

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

A type of table row content that creates table rows created by iterating over a collection.

## Declaration

```swift
nonisolated struct TableForEachContent<Data> where Data : RandomAccessCollection, Data.Element : Identifiable
```

<a id="overview"></a>

## Overview

You don’t use this type directly. The various `Table.init(_:,...)` initializers create this type as the table’s `Rows` generic type.

To explicitly create dynamic collection-based rows, use [ForEach](foreach.md) instead.

## Relationships

### Conforms To

- [TableRowContent](tablerowcontent.md)

## See Also

### Creating rows

- [TableRow](tablerow.md): A row that represents a data value in a table.
- [TableRowContent](tablerowcontent.md): A type used to represent table rows.
- [TableHeaderRowContent](tableheaderrowcontent.md): A table row that displays a single view instead of columned content.
- [TupleTableRowContent](tupletablerowcontent.md): A type of table column content that creates table rows created from a Swift tuple of table rows.
- [EmptyTableRowContent](emptytablerowcontent.md): A table row content that doesn’t produce any rows.
- [DynamicTableRowContent](dynamictablerowcontent.md): A type of table row content that generates table rows from an underlying collection of data.
- [TableRowBuilder](tablerowbuilder.md): A result builder that creates table row content from closures.
