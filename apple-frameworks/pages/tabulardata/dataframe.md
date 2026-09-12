> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe](https://developer.apple.com/documentation/tabulardata/dataframe)

# DataFrame

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A collection that arranges data in rows and columns.

## Declaration

```swift
@dynamicMemberLookup struct DataFrame
```

## Topics

### Creating a Data Frame

- [init()](dataframe/init%28%29.md): Creates an empty data frame with no rows or columns.
- [init(columns:)](dataframe/init%28columns_%29.md): Creates a new data frame from a sequence of columns.
- [init(dictionaryLiteral:)](dataframe/init%28dictionaryliteral_%29.md): Creates a data frame from a dictionary literal.

### Creating a Data Frame from Other Data Frames

- [init(\_:)](dataframe/init%28__%29.md): Creates a new data frame with a slice of rows from another data frame.
- [DataFrame.Slice](dataframe/slice.md): A set of a data frame’s rows you create by using a method from a data frame instance or another data frame slice.

### Creating a Data Frame from a JSON File

- [init(contentsOfJSONFile:columns:types:options:)](dataframe/init%28contentsofjsonfile_columns_types_options_%29.md): Creates a data frame by reading a JSON file.
- [init(jsonData:columns:types:options:)](dataframe/init%28jsondata_columns_types_options_%29.md): Creates a data frame by converting JSON data.
- [JSONType](jsontype.md): Represents the value types in a JSON file.
- [JSONReadingOptions](jsonreadingoptions.md): A set of JSON file-reading options.

### Creating a Data Frame from a CSV

- [init(contentsOfCSVFile:columns:rows:types:options:)](dataframe/init%28contentsofcsvfile_columns_rows_types_options_%29.md): Creates a data frame from a CSV file.
- [init(csvData:columns:rows:types:options:)](dataframe/init%28csvdata_columns_rows_types_options_%29.md): Creates a data frame from CSV data.
- [CSVType](csvtype.md): Represents the value types in a CSV file.
- [CSVReadingOptions](csvreadingoptions.md): A set of CSV file-reading options.

### Creating a Data Frame from Turi Create Types

- [init(contentsOfSFrameDirectory:columns:rows:)](dataframe/init%28contentsofsframedirectory_columns_rows_%29.md): Creates a data frame from a Turi Create scalable data frame.
- [ShapedData](shapeddata.md): A collection type that represents multidimensional data in a data frame element.

### Inspecting a Data Frame

- [shape](dataframe/shape.md): The number of rows and columns in the data frame.
- [columns](dataframe/columns.md): The entire data frame as a collection of columns.
- [rows](dataframe/rows-swift.property.md): The entire data frame as a collection of rows.
- [DataFrame.Rows](dataframe/rows-swift.struct.md): A collection of rows in a data frame.
- [base](dataframe/base.md): The underlying data frame.
- [containsColumn(\_:\_:)](dataframe/containscolumn%28____%29.md): Returns a Boolean value indicating whether the data frame contains a column.

### Sorting a Data Frame

- [sort(on:order:)](dataframe/sort%28on_order_%29-4vns7.md): Arranges the rows of a data frame according to a column that you select by its name.
- [sort(on:\_:order:)](dataframe/sort%28on___order_%29-78avw.md): Arranges the rows of a data frame according to a column that you select by its name and type.
- [sort(on:\_:by:)](dataframe/sort%28on___by_%29.md): Arranges the rows of a data frame according to a column that you select by its name and type, with a predicate.
- [sort(on:by:)](dataframe/sort%28on_by_%29.md): Arranges the rows of a data frame according to a column that you select by its column identifier, with a predicate.
- [sort(on:order:)](dataframe/sort%28on_order_%29-5ep7w.md): Arranges the rows of a data frame according to a column that you select by its column identifier.
- [sort(on:\_:order:)](dataframe/sort%28on___order_%29-8wrkl.md): Arranges the rows of a data frame according to two columns that you select by their column identifiers.
- [sort(on:\_:\_:order:)](dataframe/sort%28on_____order_%29.md): Arranges the rows of a data frame according to three columns that you select by their column identifiers.

### Summarizing a Data Frame

- [summary()](dataframe/summary%28%29.md): Generates a data frame that summarizes the columns of the data frame.
- [summary(of:)](dataframe/summary%28of_%29.md): Generates a data frame that summarizes the columns you select by name.
- [summary(ofColumns:)](dataframe/summary%28ofcolumns_%29.md): Generates a data frame that summarizes the columns you select by index.
- [SummaryColumnIDs](summarycolumnids.md): The summary data frame column identifiers.

### Saving a Data Frame to a CSV Format

- [CSVWritingOptions](csvwritingoptions.md): A set of CSV file-writing options.

### Describing a Data Frame

- [description](dataframe/description.md): A text representation of the data frame.
- [debugDescription](dataframe/debugdescription.md): A text representation of the data frame suitable for debugging.
- [customMirror](dataframe/custommirror.md): A mirror that reflects the data frame.

### Comparing Data Frames

- [==(\_:\_:)](dataframe/==%28____%29.md): Returns a Boolean that indicates whether the data frames are equal.

### Hashing a Data Frame

- [hash(into:)](dataframe/hash%28into_%29.md): Hashes the essential components of the data frame by feeding them into a hasher.

### Initializers

- [init(\_:featuresColumnID:annotationsColumnID:)](dataframe/init%28__featurescolumnid_annotationscolumnid_%29.md): Creates a data frame from a sequence of annotated features.
- [init(contentsOfCSVFile:columns:rows:options:)](dataframe/init%28contentsofcsvfile_columns_rows_options_%29.md): Creates a data frame from a CSV file.
- [init(csvData:columns:rows:options:)](dataframe/init%28csvdata_columns_rows_options_%29.md): Creates a data frame from CSV data.

### Instance Methods

- [containsColumn(\_:)](dataframe/containscolumn%28__%29-6nqfs.md): Returns a Boolean value indicating whether the data frame contains a column matching a column ID.
- [containsColumn(\_:)](dataframe/containscolumn%28__%29-8spst.md): Returns a Boolean value indicating whether the data frame contains a column.
- [loadRangedAnnotations(parameters:continueOnFailure:)](dataframe/loadrangedannotations%28parameters_continueonfailure_%29.md): Loads training examples from a data frame containing annotations.
- [selecting(\_:)](dataframe/selecting%28__%29.md): Generates a data frame that includes only the column selection.

### Subscripts

- [subscript(\_:)](dataframe/subscript%28__%29-4jbhp.md): Accesses a result column by its typed descriptor.
- [subscript(metric:)](dataframe/subscript%28metric_%29.md): Accesses a metric column using the metric’s name

### Default Implementations

- [CustomDebugStringConvertible Implementations](dataframe/customdebugstringconvertible-implementations.md)
- [CustomReflectable Implementations](dataframe/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](dataframe/customstringconvertible-implementations.md)
- [DataFrameProtocol Implementations](dataframe/dataframeprotocol-implementations.md)
- [Equatable Implementations](dataframe/equatable-implementations.md)
- [ExpressibleByDictionaryLiteral Implementations](dataframe/expressiblebydictionaryliteral-implementations.md)
- [Hashable Implementations](dataframe/hashable-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataFrameProtocol](dataframeprotocol.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByDictionaryLiteral](https://developer.apple.com/documentation/swift/expressiblebydictionaryliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Data Tables

- [DataFrameProtocol](dataframeprotocol.md): A type that represents a data frame.
