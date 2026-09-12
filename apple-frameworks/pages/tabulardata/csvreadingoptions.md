> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/csvreadingoptions](https://developer.apple.com/documentation/tabulardata/csvreadingoptions)

# CSVReadingOptions

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A set of CSV file-reading options.

## Declaration

```swift
struct CSVReadingOptions
```

## Topics

### Initializers

- [init(hasHeaderRow:nilEncodings:trueEncodings:falseEncodings:floatingPointType:ignoresEmptyLines:usesQuoting:usesEscaping:delimiter:escapeCharacter:)](csvreadingoptions/init%28hasheaderrow_nilencodings_trueencodings_falseencodings_floatingpointtype_ignoresemptylines_usesquoting_usesescaping_delimiter_escapecharacter_%29.md): Creates a set of options for reading a CSV file.

### Instance Properties

- [dateParsers](csvreadingoptions/dateparsers.md): An array of closures that parse a date from a string.
- [delimiter](csvreadingoptions/delimiter.md): The character that separates data fields in a CSV file, typically a comma.
- [escapeCharacter](csvreadingoptions/escapecharacter.md): The character that precedes other characters, such as quotation marks, so that the parser interprets them as literal characters instead of special ones.
- [falseEncodings](csvreadingoptions/falseencodings.md): The set of strings that stores acceptable spellings for false Boolean values.
- [floatingPointType](csvreadingoptions/floatingpointtype.md): The type to use for floating-point numeric values.
- [hasHeaderRow](csvreadingoptions/hasheaderrow.md): A Boolean value that indicates whether the CSV file has a header row.
- [ignoresEmptyLines](csvreadingoptions/ignoresemptylines.md): A Boolean value that indicates whether to ignore empty lines.
- [nilEncodings](csvreadingoptions/nilencodings.md): The set of strings that stores acceptable spellings for empty values.
- [trueEncodings](csvreadingoptions/trueencodings.md): The set of strings that stores acceptable spellings for true Boolean values.
- [usesEscaping](csvreadingoptions/usesescaping.md): A Boolean value that indicates whether to enable escaping.
- [usesQuoting](csvreadingoptions/usesquoting.md): A Boolean value that indicates whether to enable quoting.

### Instance Methods

- [addDateParseStrategy(\_:)](csvreadingoptions/adddateparsestrategy%28__%29.md): Adds a date parsing strategy.

## See Also

### Creating a Data Frame from a CSV

- [init(contentsOfCSVFile:columns:rows:types:options:)](dataframe/init%28contentsofcsvfile_columns_rows_types_options_%29.md): Creates a data frame from a CSV file.
- [init(csvData:columns:rows:types:options:)](dataframe/init%28csvdata_columns_rows_types_options_%29.md): Creates a data frame from CSV data.
- [CSVType](csvtype.md): Represents the value types in a CSV file.
