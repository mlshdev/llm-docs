> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/parsingoptions](https://developer.apple.com/documentation/createml/mldatatable/parsingoptions)

# MLDataTable.ParsingOptions

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

The options for parsing a comma-separated values (CSV) file into a data table for a machine learning model.

## Declaration

```swift
struct ParsingOptions
```

<a id="overview"></a>

## Overview

Use `ParsingOptions` only when importing a CSV file with [init(contentsOf:options:)](init%28contentsof_options_%29.md), especially if your CSV file has special formatting or your data table only needs to import specific rows or columns.

## Topics

### Creating the CSV parsing options

- [init(containsHeader:delimiter:comment:escape:doubleQuote:quote:skipInitialSpaces:missingValues:lineTerminator:selectColumns:maxRows:skipRows:)](parsingoptions/init%28containsheader_delimiter_comment_escape_doublequote_quote_skipinitialspaces_missingvalues_lineterminator_selectcolumns_maxrows_skiprows_%29.md): Creates CSV parsing options.

### Specifying the CSV file format

- [containsHeader](parsingoptions/containsheader.md): A Boolean value indicating whether an input CSV file contains a header.
- [delimiter](parsingoptions/delimiter.md): The character that separates the data fields in a CSV file.
- [lineTerminator](parsingoptions/lineterminator.md): The character that represents the end of a line in a CSV file.

### Handling special characters

- [escape](parsingoptions/escape.md): The character that marks a C escape sequence in a CSV file.
- [quote](parsingoptions/quote.md): The character that represents a quote (`"`) in a CSV file.
- [doubleQuote](parsingoptions/doublequote.md): A Boolean value indicating whether two consecutive quotes (`""`) represent a single quote (`"`) in a CSV file.

### Ignoring CSV components

- [skipRows](parsingoptions/skiprows.md): The number of starting rows to skip from the start of a CSV file.
- [skipInitialSpaces](parsingoptions/skipinitialspaces.md): A Boolean value indicating whether to ignore leading spaces of a data field.
- [comment](parsingoptions/comment.md): The character that marks the beginning of a comment, or text to ignore, in a CSV file.

### Limiting rows and columns

- [maxRows](parsingoptions/maxrows.md): The maximum number of rows to import form a CSV file; otherwise `nil` to import all rows.
- [selectColumns](parsingoptions/selectcolumns.md): The list of column names to import from a CSV file; otherwise `nil` to import all columns.

### Representing missing values

- [missingValues](parsingoptions/missingvalues.md): A list of strings that represent missing values in a CSV file.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a data table

- [Creating a model from tabular data](../creating-a-model-from-tabular-data.md): Train a machine learning model by using Core ML to import and manage tabular data.
- [init(contentsOf:options:)](init%28contentsof_options_%29.md): Creates a data table from an imported JSON or CSV file.
- [init(dictionary:)](init%28dictionary_%29.md): Creates a data table from a dictionary of column names and data values.
- [init(namedColumns:)](init%28namedcolumns_%29.md): Creates a data table from a dictionary of column names and untyped columns.
- [init()](init%28%29.md): Creates an empty table containing no rows or columns.
