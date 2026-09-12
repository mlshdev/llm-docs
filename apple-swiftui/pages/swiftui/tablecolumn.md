> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumn](https://developer.apple.com/documentation/swiftui/tablecolumn)

# TableColumn

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

A column that displays a view for each row in a table.

## Declaration

```swift
nonisolated struct TableColumn<RowValue, Sort, Content, Label> where RowValue : Identifiable, Sort : SortComparator, Content : View, Label : View
```

<a id="overview"></a>

## Overview

You create a column with a label, content view, and optional key path. The table calls the content content builder with the value for each row in the table. The column uses a key path to map to a property of each row value, which sortable tables use to reflect the current sort order.

The following example creates a sortable column for a table with `Person` rows, displaying each person’s given name:

```swift
TableColumn("Given name", value: \.givenName) { person in
    Text(person.givenName)
}
```

For the common case of `String` properties, you can use the convenience initializer that doesn’t require an explicit content closure and displays that string verbatim as a [Text](text.md) view. This means you can write the previous example as:

```swift
TableColumn("Given name", value: \.givenName)
```

## Topics

### Creating an unsortable column

- [init(\_:value:)](tablecolumn/init%28__value_%29.md): Conforms when `RowValue` conforms to `Identifiable`, `Sort` is `Never`, `Content` conforms to `View`, and `Label` is `Text`. Creates an unsortable column that displays a string property that generates its label from a localized string resource.
- [init(\_:content:)](tablecolumn/init%28__content_%29.md): Conforms when `RowValue` conforms to `Identifiable`, `Sort` is `Never`, `Content` conforms to `View`, and `Label` is `Text`. Creates an unsortable column that generates its label from a localized string resource.

### Creating a sortable column

- [init(\_:value:content:)](tablecolumn/init%28__value_content_%29.md): Conforms when `RowValue` inherits `NSObject`, `RowValue` conforms to `Identifiable`, `Sort` is `SortDescriptor<RowValue>`, `Content` conforms to `View`, and `Label` is `Text`. Creates a sortable column for Boolean values that generates its label from a localized string resource.
- [init(\_:value:comparator:)](tablecolumn/init%28__value_comparator_%29.md): Conforms when `RowValue` conforms to `Identifiable`, `Sort` is `KeyPathComparator<RowValue>`, `Content` conforms to `View`, and `Label` is `Text`. Creates a sortable column that displays a string property, and generates its label from a localized string resource.
- [init(\_:value:comparator:content:)](tablecolumn/init%28__value_comparator_content_%29.md): Conforms when `RowValue` inherits `NSObject`, `RowValue` conforms to `Identifiable`, `Sort` is `SortDescriptor<RowValue>`, `Content` conforms to `View`, and `Label` is `Text`. Creates a sortable column that generates its label from a localized string resource.
- [init(\_:sortUsing:content:)](tablecolumn/init%28__sortusing_content_%29.md): Conforms when `RowValue` conforms to `Identifiable`, `RowValue` is `Sort.Compared`, `Sort` conforms to `SortComparator`, `Content` conforms to `View`, and `Label` is `Text`. Creates a sortable column that generates its label from a localized string resource.

### Setting the column width

- [width(\_:)](tablecolumn/width%28__%29.md): Conforms when `RowValue` conforms to `Identifiable`, `Sort` conforms to `SortComparator`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a fixed width table column that isn’t user resizable.
- [width(min:ideal:max:)](tablecolumn/width%28min_ideal_max_%29.md): Conforms when `RowValue` conforms to `Identifiable`, `Sort` conforms to `SortComparator`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a resizable table column with the provided constraints.
- [width()](tablecolumn/width%28%29.md): Deprecated. Conforms when `RowValue` conforms to `Identifiable`, `Sort` conforms to `SortComparator`, `Content` conforms to `View`, and `Label` conforms to `View`. Sets the column’s width.

## Relationships

### Conforms To

- [TableColumnContent](tablecolumncontent.md)

## See Also

### Creating columns

- [TableColumnContent](tablecolumncontent.md): A type used to represent columns within a table.
- [TableColumnAlignment](tablecolumnalignment.md): Describes the alignment of the content of a table column.
- [TableColumnBuilder](tablecolumnbuilder.md): A result builder that creates table column content from closures.
- [TableColumnForEach](tablecolumnforeach.md): A structure that computes columns on demand from an underlying collection of identified data.
