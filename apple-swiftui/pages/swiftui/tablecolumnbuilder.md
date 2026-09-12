> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumnbuilder](https://developer.apple.com/documentation/swiftui/tablecolumnbuilder)

# TableColumnBuilder

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

A result builder that creates table column content from closures.

## Declaration

```swift
@resultBuilder struct TableColumnBuilder<RowValue, Sort> where RowValue : Identifiable, Sort : SortComparator
```

<a id="overview"></a>

## Overview

The `buildBlock` methods in this type create [TableColumnContent](tablecolumncontent.md) instances based on the number and types of sources provided as parameters.

Don’t use this type directly; instead, SwiftUI annotates the `columns` parameter of the various [Table](table.md) initializers with the `@TableColumnBuilder` annotation, implicitly calling this builder for you.

## Topics

### Building a column

- [buildBlock(\_:)](tablecolumnbuilder/buildblock%28__%29.md): Creates a single, unsortable column result.
- [buildBlock(\_:\_:)](tablecolumnbuilder/buildblock%28____%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from two sources.
- [buildBlock(\_:\_:\_:)](tablecolumnbuilder/buildblock%28______%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from three sources.
- [buildBlock(\_:\_:\_:\_:)](tablecolumnbuilder/buildblock%28________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from four sources.
- [buildBlock(\_:\_:\_:\_:\_:)](tablecolumnbuilder/buildblock%28__________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from five sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:)](tablecolumnbuilder/buildblock%28____________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from six sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](tablecolumnbuilder/buildblock%28______________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from seven sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](tablecolumnbuilder/buildblock%28________________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from eight sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](tablecolumnbuilder/buildblock%28__________________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from nine sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](tablecolumnbuilder/buildblock%28____________________%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates an unsortable column result from ten sources.
- [buildExpression(\_:)](tablecolumnbuilder/buildexpression%28__%29.md): Creates a generic, unsortable single column expression.

### Supporting types

- [TupleTableColumnContent](tupletablecolumncontent.md): A type of table column content that creates table columns created from a Swift tuple of table columns.

### Type Methods

- [buildEither(first:)](tablecolumnbuilder/buildeither%28first_%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates a column result for the first of two column content alternatives.
- [buildEither(second:)](tablecolumnbuilder/buildeither%28second_%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`. Creates a row result for the second of two row content alternatives.
- [buildIf(\_:)](tablecolumnbuilder/buildif%28__%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`.
- [buildLimitedAvailability(\_:)](tablecolumnbuilder/buildlimitedavailability%28__%29.md): Conforms when `RowValue` conforms to `Identifiable` and `Sort` conforms to `SortComparator`.

## See Also

### Creating columns

- [TableColumn](tablecolumn.md): A column that displays a view for each row in a table.
- [TableColumnContent](tablecolumncontent.md): A type used to represent columns within a table.
- [TableColumnAlignment](tablecolumnalignment.md): Describes the alignment of the content of a table column.
- [TableColumnForEach](tablecolumnforeach.md): A structure that computes columns on demand from an underlying collection of identified data.
