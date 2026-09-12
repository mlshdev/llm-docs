> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol](https://developer.apple.com/documentation/tabulardata/dataframeprotocol)

# DataFrameProtocol

**Framework:** TabularData  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that represents a data frame.

## Declaration

```swift
protocol DataFrameProtocol
```

## Topics

### Inspecting a Data Frame Type

- [isEmpty](dataframeprotocol/isempty.md): A Boolean that indicates whether the data frame type is empty.
- [shape](dataframeprotocol/shape.md): The number or rows and columns of the data frame type.
- [columns](dataframeprotocol/columns.md): The columns of the underlying data frame.
- [ColumnType](dataframeprotocol/columntype.md): A type that conforms to the type-erased column protocol.
- [rows](dataframeprotocol/rows.md): The rows of the underlying data frame.
- [DataFrame.Rows](dataframe/rows-swift.struct.md): A collection of rows in a data frame.
- [base](dataframeprotocol/base.md): The underlying data frame.

### Accessing Rows

- [subscript(\_:)](dataframeprotocol/subscript%28__%29.md): Accesses a slice of the data frame type with an index range.
- [subscript(\_:)](dataframeprotocol/subscript%28__%29-8hly3.md): Accesses rows of a data frame type with an index range expression.

### Creating Two Slices by Splitting Rows

- [randomSplit(by:seed:)](dataframeprotocol/randomsplit%28by_seed_%29.md): Generates two data frame slices by randomly splitting the rows of the data table.
- [randomSplit(by:using:)](dataframeprotocol/randomsplit%28by_using_%29.md): Generates two data frame slices by randomly splitting the rows of the data table type with a random-number generator.

### Creating Two Data Frames by Splitting Rows

- [stratifiedSplit(on:by:randomSeed:)](dataframeprotocol/stratifiedsplit%28on_by_randomseed_%29-9iauf.md): Generates two data frames by randomly splitting the rows of a column, which you select by its name, into strata.
- [stratifiedSplit(on:by:randomSeed:)](dataframeprotocol/stratifiedsplit%28on_by_randomseed_%29-8szu1.md): Generates two data frames by randomly splitting the rows of multiple columns, which you select by their names, into strata.
- [stratifiedSplit(on:by:randomSeed:)](dataframeprotocol/stratifiedsplit%28on_by_randomseed_%29-714jk.md): Generates two data frames by randomly splitting the rows of a column, which you select by column identifier, into strata.
- [stratifiedSplit(on:\_:by:randomSeed:)](dataframeprotocol/stratifiedsplit%28on___by_randomseed_%29.md): Generates two data frames by randomly splitting the rows of two columns, which you select by column identifiers, into strata.
- [stratifiedSplit(on:\_:\_:by:randomSeed:)](dataframeprotocol/stratifiedsplit%28on_____by_randomseed_%29.md): Generates two data frames by randomly splitting the rows of three columns, which you select by column identifiers, into strata.

### Creating a Data Frame by Sorting a Column

- [sorted(on:order:)](dataframeprotocol/sorted%28on_order_%29-818u5.md): Generates a data frame by copying the data frame’s rows and then sorting the rows according to a column that you select by its name.
- [sorted(on:\_:order:)](dataframeprotocol/sorted%28on___order_%29-8d7rr.md): Generates a data frame by copying the data frame’s rows and then sorting the rows according to a column that you select by its name and type.
- [sorted(on:\_:by:)](dataframeprotocol/sorted%28on___by_%29.md): Generates a data frame by copying the data frame’s rows and then sorting the rows according to a column that you select by its name and type, with a predicate.
- [sorted(on:order:)](dataframeprotocol/sorted%28on_order_%29-5nl5c.md): Generates a data frame by copying the data frame’s rows and then sorting the rows according to a column that you select by its column identifier.
- [sorted(on:by:)](dataframeprotocol/sorted%28on_by_%29.md): Generates a data frame by copying the data frame’s rows and then sorting the rows according to a column that you select by its column identifier, with a predicate.

### Creating a Data Frame by Sorting Multiple Columns

- [sorted(on:\_:order:)](dataframeprotocol/sorted%28on___order_%29-79los.md): Generates a data frame by copying the data frame’s rows and then sorting the rows according to two columns that you select by their column identifiers.
- [sorted(on:\_:\_:order:)](dataframeprotocol/sorted%28on_____order_%29.md): Generates a data frame by copying the data frame’s rows and then sorting the rows according to three columns that you select by their column identifiers.

### Creating a Data Frame by Joining Another Data Frame

- [joined(\_:on:kind:)](dataframeprotocol/joined%28__on_kind_%29-1gp6k.md): Generates a data frame by joining with another data frame type with a common column you select by name.
- [joined(\_:on:kind:)](dataframeprotocol/joined%28__on_kind_%29-7u2tw.md): Generates a data frame by joining with another data frame type along the columns that you select by name for both data frame types.
- [joined(\_:on:kind:)](dataframeprotocol/joined%28__on_kind_%29-9629e.md): Generates a data frame by joining with another data frame type along the columns that you select by identifier for both data frame types.
- [joined(\_:on:kind:)](dataframeprotocol/joined%28__on_kind_%29-mvic.md): Generates a data frame by joining with another data frame type with a common column that you select by identifier.
- [JoinKind](joinkind.md): An operation type that joins two data frame types.

### Creating a Row Grouping by a Column

- [grouped(by:)](dataframeprotocol/grouped%28by_%29-77mq2.md): Creates a grouping of rows that the method selects by choosing unique values in a column.
- [grouped(by:timeUnit:)](dataframeprotocol/grouped%28by_timeunit_%29-7s782.md): Creates a grouping of rows that the method selects by choosing unique units of time in a date column you select by name.
- [grouped(by:timeUnit:)](dataframeprotocol/grouped%28by_timeunit_%29-78cy.md): Creates a grouping of rows that the method selects by choosing unique units of time in a date column you select by column identifier.
- [grouped(by:transform:)](dataframeprotocol/grouped%28by_transform_%29-3cr4p.md): Creates a grouping of rows that the method selects by choosing unique values the transform closure creates with elements of a column you select by name.
- [grouped(by:transform:)](dataframeprotocol/grouped%28by_transform_%29-3aade.md): Creates a grouping of rows that the method selects by choosing unique values the transform closure creates with elements of a column you select by column identifier.

### Creating a Row Grouping by Multiple Columns

- [grouped(by:)](dataframeprotocol/grouped%28by_%29-4wcw6.md): Creates a grouping from multiple columns you select by name.
- [grouped(by:)](dataframeprotocol/grouped%28by_%29-6m6to.md): Creates a grouping from multiple columns that you select by column identifier.
- [grouped(by:\_:)](dataframeprotocol/grouped%28by___%29.md): Creates a grouping from two columns of different types.
- [grouped(by:\_:\_:)](dataframeprotocol/grouped%28by_____%29.md): Creates a grouping from three columns of different types.

### Saving a Data Frame Type to a CSV Format

- [writeCSV(to:options:)](dataframeprotocol/writecsv%28to_options_%29.md): Creates a CSV file with the contents of the data frame type.
- [csvRepresentation(options:)](dataframeprotocol/csvrepresentation%28options_%29.md): Generates a CSV data instance of the data frame type.

### Describing a Data Frame Type

- [description(options:)](dataframeprotocol/description%28options_%29.md): Generates a text representation of the data frame type.

### Instance Methods

- [jsonRepresentation(options:)](dataframeprotocol/jsonrepresentation%28options_%29.md): Generates a JSON data instance of the data frame.
- [writeJSON(to:options:)](dataframeprotocol/writejson%28to_options_%29.md): Creates a JSON file with the contents of the data frame.

## Relationships

### Conforming Types

- [DataFrame](dataframe.md)
- [DataFrame.Slice](dataframe/slice.md)

## See Also

### Data Tables

- [DataFrame](dataframe.md): A collection that arranges data in rows and columns.
