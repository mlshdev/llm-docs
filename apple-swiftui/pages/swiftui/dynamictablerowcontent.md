> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dynamictablerowcontent](https://developer.apple.com/documentation/swiftui/dynamictablerowcontent)

# DynamicTableRowContent

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

A type of table row content that generates table rows from an underlying collection of data.

## Declaration

```swift
protocol DynamicTableRowContent : TableRowContent
```

<a id="overview"></a>

## Overview

This table row content type provides drag-and-drop support for tables. Use the [onInsert(of:perform:)](dynamictablerowcontent/oninsert%28of_perform_%29.md) modifier to add an action to call when the table inserts new contents into its underlying collection.

## Topics

### Getting row data

- [data](dynamictablerowcontent/data-swift.property.md): The collection of underlying data.
- [Data](dynamictablerowcontent/data-swift.associatedtype.md): The type of the underlying collection of data.

### Inserting rows

- [onInsert(of:perform:)](dynamictablerowcontent/oninsert%28of_perform_%29.md): Sets the insert action for the dynamic table rows.
- [OnInsertTableRowModifier](oninserttablerowmodifier.md): A table row modifier that adds the ability to insert data in some base row content.

### Supporting drag and drop

- [dropDestination(for:action:)](dynamictablerowcontent/dropdestination%28for_action_%29.md): Sets the insert action for the dynamic table rows.

## Relationships

### Inherits From

- [TableRowContent](tablerowcontent.md)

### Conforming Types

- [ForEach](foreach.md)
- [ModifiedContent](modifiedcontent.md)

## See Also

### Creating rows

- [TableRow](tablerow.md): A row that represents a data value in a table.
- [TableRowContent](tablerowcontent.md): A type used to represent table rows.
- [TableHeaderRowContent](tableheaderrowcontent.md): A table row that displays a single view instead of columned content.
- [TupleTableRowContent](tupletablerowcontent.md): A type of table column content that creates table rows created from a Swift tuple of table rows.
- [TableForEachContent](tableforeachcontent.md): A type of table row content that creates table rows created by iterating over a collection.
- [EmptyTableRowContent](emptytablerowcontent.md): A table row content that doesn’t produce any rows.
- [TableRowBuilder](tablerowbuilder.md): A result builder that creates table row content from closures.
