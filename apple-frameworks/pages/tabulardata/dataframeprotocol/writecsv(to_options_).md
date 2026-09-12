> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/writecsv(to:options:)](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/writecsv(to:options:))

# writeCSV(to:options:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a CSV file with the contents of the data frame type.

## Declaration

```swift
func writeCSV(to url: URL, options: CSVWritingOptions = .init()) throws
```

## Parameters

- `url`: A location URL in the file system where the method saves the CSV file.
- `options`: A [CSVWritingOptions](../csvwritingoptions.md) instance.

## See Also

### Saving a Data Frame Type to a CSV Format

- [csvRepresentation(options:)](csvrepresentation%28options_%29.md): Generates a CSV data instance of the data frame type.
