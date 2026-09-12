> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumnalignment](https://developer.apple.com/documentation/swiftui/tablecolumnalignment)

# TableColumnAlignment

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Describes the alignment of the content of a table column.

## Declaration

```swift
struct TableColumnAlignment
```

<a id="overview"></a>

## Overview

The alignment of a column applies to both its header label as well as the default alignment of its content view for each row.

## Topics

### Getting the alignment

- [automatic](tablecolumnalignment/automatic.md): The default column alignment.
- [leading](tablecolumnalignment/leading.md): Leading column alignment.
- [center](tablecolumnalignment/center.md): Center column alignment.
- [trailing](tablecolumnalignment/trailing.md): Trailing column alignment.
- [numeric](tablecolumnalignment/numeric.md): Column alignment appropriate for numeric content.
- [numeric(\_:)](tablecolumnalignment/numeric%28__%29.md): Column alignment appropriate for numeric content.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating columns

- [TableColumn](tablecolumn.md): A column that displays a view for each row in a table.
- [TableColumnContent](tablecolumncontent.md): A type used to represent columns within a table.
- [TableColumnBuilder](tablecolumnbuilder.md): A result builder that creates table column content from closures.
- [TableColumnForEach](tablecolumnforeach.md): A structure that computes columns on demand from an underlying collection of identified data.
