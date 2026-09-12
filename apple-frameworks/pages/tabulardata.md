> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata](https://developer.apple.com/documentation/tabulardata)

# TabularData

**Framework:** TabularData  
**Kind:** Framework  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Import, organize, and prepare a table of data to train a machine learning model.

## Topics

### Data Tables

- [DataFrame](tabulardata/dataframe.md): A collection that arranges data in rows and columns.
- [DataFrameProtocol](tabulardata/dataframeprotocol.md): A type that represents a data frame.

### Typed Columns

- [Column](tabulardata/column.md): A column in a data frame.
- [ColumnSlice](tabulardata/columnslice.md): A collection that represents a selection of contiguous elements from a typed column.
- [FilledColumn](tabulardata/filledcolumn.md): A view on a column that replaces missing elements with a default value.
- [DiscontiguousColumnSlice](tabulardata/discontiguouscolumnslice.md): A collection that represents a selection, potentially with gaps, of elements from a typed column.
- [ColumnProtocol](tabulardata/columnprotocol.md): A type that represents a column.
- [OptionalColumnProtocol](tabulardata/optionalcolumnprotocol.md): A type that represents a column that has missing values.

### Type-Erased Columns

- [AnyColumn](tabulardata/anycolumn.md): A type-erased column.
- [AnyColumnSlice](tabulardata/anycolumnslice.md): A type-erased column slice.
- [AnyColumnProtocol](tabulardata/anycolumnprotocol.md): A type that represents a type-erased column.
- [AnyColumnPrototype](tabulardata/anycolumnprototype.md): A prototype that creates type-erased columns.

### Statistical Summaries

- [NumericSummary](tabulardata/numericsummary.md): A summary of a numerical column.
- [CategoricalSummary](tabulardata/categoricalsummary.md): A categorical summary of a collection’s elements.
- [AnyCategoricalSummary](tabulardata/anycategoricalsummary.md): A type-erased categorical summary.

### Errors

- [JSONReadingError](tabulardata/jsonreadingerror.md): A JSON reading error.
- [CSVReadingError](tabulardata/csvreadingerror.md): A CSV reading error.
- [CSVWritingError](tabulardata/csvwritingerror.md): A CSV writing error.
- [ColumnDecodingError](tabulardata/columndecodingerror.md): A column decoding error.
- [ColumnEncodingError](tabulardata/columnencodingerror.md): A column encoding error.
- [SFrameReadingError](tabulardata/sframereadingerror.md): An error when reading a Turi Create scalable data frame.

### Supporting Types

- [Order](tabulardata/order.md): A type that represents a sort ordering.
- [ColumnID](tabulardata/columnid.md): A column identifier that stores a column’s name and the type of its elements.
- [FormattingOptions](tabulardata/formattingoptions.md): A set of parameters that indicate how to present the contents of data frame or column types to a printable string.

### Structures

- [JSONWritingOptions](tabulardata/jsonwritingoptions.md): A set of JSON file-reading options.
