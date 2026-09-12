> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablerowbuilder](https://developer.apple.com/documentation/swiftui/tablerowbuilder)

# TableRowBuilder

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

A result builder that creates table row content from closures.

## Declaration

```swift
@resultBuilder struct TableRowBuilder<Value> where Value : Identifiable
```

<a id="overview"></a>

## Overview

The `buildBlock` methods in this type create [TableRowContent](tablerowcontent.md) instances based on the number and types of sources provided as parameters.

Don’t use this type directly; instead, SwiftUI annotates the `rows` parameter of the various [Table](table.md) initializers with the `@TableRowBuilder` annotation, implicitly calling this builder for you.

## Topics

### Building a row from sources

- [buildBlock(\_:)](tablerowbuilder/buildblock%28__%29.md): Creates a single row result.
- [buildBlock(\_:\_:)](tablerowbuilder/buildblock%28____%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result from two sources.
- [buildBlock(\_:\_:\_:)](tablerowbuilder/buildblock%28______%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result from three sources.
- [buildBlock(\_:\_:\_:\_:)](tablerowbuilder/buildblock%28________%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result from four sources.
- [buildBlock(\_:\_:\_:\_:\_:)](tablerowbuilder/buildblock%28__________%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result from five sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:)](tablerowbuilder/buildblock%28____________%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result from six sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](tablerowbuilder/buildblock%28______________%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result from seven sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](tablerowbuilder/buildblock%28________________%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result from eight sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](tablerowbuilder/buildblock%28__________________%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result from nine sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](tablerowbuilder/buildblock%28____________________%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result from ten sources.

### Building a row from conditionals

- [buildIf(\_:)](tablerowbuilder/buildif%28__%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result for conditional statements.
- [buildEither(first:)](tablerowbuilder/buildeither%28first_%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result for the first of two row content alternatives.
- [buildEither(second:)](tablerowbuilder/buildeither%28second_%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result for the second of two row content alternatives.
- [buildExpression(\_:)](tablerowbuilder/buildexpression%28__%29.md): Builds an expression within the builder.

## See Also

### Creating rows

- [TableRow](tablerow.md): A row that represents a data value in a table.
- [TableRowContent](tablerowcontent.md): A type used to represent table rows.
- [TableHeaderRowContent](tableheaderrowcontent.md): A table row that displays a single view instead of columned content.
- [TupleTableRowContent](tupletablerowcontent.md): A type of table column content that creates table rows created from a Swift tuple of table rows.
- [TableForEachContent](tableforeachcontent.md): A type of table row content that creates table rows created by iterating over a collection.
- [EmptyTableRowContent](emptytablerowcontent.md): A table row content that doesn’t produce any rows.
- [DynamicTableRowContent](dynamictablerowcontent.md): A type of table row content that generates table rows from an underlying collection of data.
