> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tupletablerowcontent](https://developer.apple.com/documentation/swiftui/tupletablerowcontent)

# TupleTableRowContent

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

A type of table column content that creates table rows created from a Swift tuple of table rows.

## Declaration

```swift
@frozen nonisolated struct TupleTableRowContent<Value, T> where Value : Identifiable
```

<a id="overview"></a>

## Overview

Don’t use this type directly; instead, SwiftUI uses this type as the return value from the various `buildBlock` methods in [TableRowBuilder](tablerowbuilder.md). The size of the tuple corresponds to how many columns you create in the `rows` closure you provide to the [Table](table.md) initializer.

## Topics

### Accessing the value

- [value](tupletablerowcontent/value.md)

## Relationships

### Conforms To

- [TableRowContent](tablerowcontent.md)

## See Also

### Creating rows

- [TableRow](tablerow.md): A row that represents a data value in a table.
- [TableRowContent](tablerowcontent.md): A type used to represent table rows.
- [TableHeaderRowContent](tableheaderrowcontent.md): A table row that displays a single view instead of columned content.
- [TableForEachContent](tableforeachcontent.md): A type of table row content that creates table rows created by iterating over a collection.
- [EmptyTableRowContent](emptytablerowcontent.md): A table row content that doesn’t produce any rows.
- [DynamicTableRowContent](dynamictablerowcontent.md): A type of table row content that generates table rows from an underlying collection of data.
- [TableRowBuilder](tablerowbuilder.md): A result builder that creates table row content from closures.
