> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/jsonreadingoptions](https://developer.apple.com/documentation/tabulardata/jsonreadingoptions)

# JSONReadingOptions

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A set of JSON file-reading options.

## Declaration

```swift
struct JSONReadingOptions
```

## Topics

### Initializers

- [init()](jsonreadingoptions/init%28%29.md): Creates a set of options for reading a JSON file.

### Instance Properties

- [dateParsers](jsonreadingoptions/dateparsers.md): An array of closures that parse a date from a string.

### Instance Methods

- [addDateParseStrategy(\_:)](jsonreadingoptions/adddateparsestrategy%28__%29.md): Adds a date parsing strategy.

## See Also

### Creating a Data Frame from a JSON File

- [init(contentsOfJSONFile:columns:types:options:)](dataframe/init%28contentsofjsonfile_columns_types_options_%29.md): Creates a data frame by reading a JSON file.
- [init(jsonData:columns:types:options:)](dataframe/init%28jsondata_columns_types_options_%29.md): Creates a data frame by converting JSON data.
- [JSONType](jsontype.md): Represents the value types in a JSON file.
