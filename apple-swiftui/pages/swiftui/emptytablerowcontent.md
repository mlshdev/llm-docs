> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/emptytablerowcontent](https://developer.apple.com/documentation/swiftui/emptytablerowcontent)

# EmptyTableRowContent

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A table row content that doesn’t produce any rows.

## Declaration

```swift
nonisolated struct EmptyTableRowContent<Value> where Value : Identifiable
```

<a id="overview"></a>

## Overview

You will rarely, if ever, need to create an `EmptyTableRowContent` directly. Instead, `EmptyTableRowContent` represents the absence of a row.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [TableRowContent](tablerowcontent.md)

## See Also

### Creating rows

- [TableRow](tablerow.md): A row that represents a data value in a table.
- [TableRowContent](tablerowcontent.md): Conforms when `Value` conforms to `Identifiable`. A type used to represent table rows.
- [TableHeaderRowContent](tableheaderrowcontent.md): A table row that displays a single view instead of columned content.
- [TupleTableRowContent](tupletablerowcontent.md): A type of table column content that creates table rows created from a Swift tuple of table rows.
- [TableForEachContent](tableforeachcontent.md): A type of table row content that creates table rows created by iterating over a collection.
- [DynamicTableRowContent](dynamictablerowcontent.md): A type of table row content that generates table rows from an underlying collection of data.
- [TableRowBuilder](tablerowbuilder.md): A result builder that creates table row content from closures.
