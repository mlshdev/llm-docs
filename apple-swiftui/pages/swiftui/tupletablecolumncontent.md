> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tupletablecolumncontent](https://developer.apple.com/documentation/swiftui/tupletablecolumncontent)

# TupleTableColumnContent

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

A type of table column content that creates table columns created from a Swift tuple of table columns.

## Declaration

```swift
@frozen nonisolated struct TupleTableColumnContent<RowValue, Sort, T> where RowValue : Identifiable, Sort : SortComparator
```

<a id="overview"></a>

## Overview

Don’t use this type directly; instead, SwiftUI uses this type as the return value from the various `buildBlock` methods in [TableColumnBuilder](tablecolumnbuilder.md). The size of the tuple corresponds to how many columns you create in the `columns` closure you provide to the [Table](table.md) initializer.

## Topics

### Accessing the value

- [value](tupletablecolumncontent/value.md): The value of a row presented by this column content.

## Relationships

### Conforms To

- [TableColumnContent](tablecolumncontent.md)
