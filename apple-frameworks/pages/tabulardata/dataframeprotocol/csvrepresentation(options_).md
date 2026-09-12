> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/csvrepresentation(options:)](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/csvrepresentation(options:))

# csvRepresentation(options:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a CSV data instance of the data frame type.

## Declaration

```swift
func csvRepresentation(options: CSVWritingOptions = .init()) throws -> Data
```

## Parameters

- `options`: A [CSVWritingOptions](../csvwritingoptions.md) instance.

## See Also

### Saving a Data Frame Type to a CSV Format

- [writeCSV(to:options:)](writecsv%28to_options_%29.md): Creates a CSV file with the contents of the data frame type.
