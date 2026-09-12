> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/jsonrepresentation(options:)](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/jsonrepresentation(options:))

# jsonRepresentation(options:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Generates a JSON data instance of the data frame.

## Declaration

```swift
func jsonRepresentation(options: JSONWritingOptions = .init()) throws -> Data
```

## Parameters

- `options`: A [JSONWritingOptions](../jsonwritingoptions.md) instance.
