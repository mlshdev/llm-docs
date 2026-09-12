> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablerow](https://developer.apple.com/documentation/swiftui/tablerow)

# TableRow

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

A row that represents a data value in a table.

## Declaration

```swift
nonisolated struct TableRow<Value> where Value : Identifiable
```

<a id="overview"></a>

## Overview

Create instances of [TableRow](tablerow.md) in the closure you provide to the `rows` parameter in [Table](table.md) initializers that take columns and rows. The table provides the value of a row to each column of a table, which produces the cells for each row in the column.

## Topics

### Creating a row

- [init(\_:)](tablerow/init%28__%29.md): Creates a table row for the given value.

## Relationships

### Conforms To

- [TableRowContent](tablerowcontent.md)

## See Also

### Creating rows

- [TableRowContent](tablerowcontent.md): A type used to represent table rows.
- [TableHeaderRowContent](tableheaderrowcontent.md): A table row that displays a single view instead of columned content.
- [TupleTableRowContent](tupletablerowcontent.md): A type of table column content that creates table rows created from a Swift tuple of table rows.
- [TableForEachContent](tableforeachcontent.md): A type of table row content that creates table rows created by iterating over a collection.
- [EmptyTableRowContent](emptytablerowcontent.md): A table row content that doesn’t produce any rows.
- [DynamicTableRowContent](dynamictablerowcontent.md): A type of table row content that generates table rows from an underlying collection of data.
- [TableRowBuilder](tablerowbuilder.md): A result builder that creates table row content from closures.
