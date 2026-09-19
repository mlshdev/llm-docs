> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/dataframeprotocol/jsonrepresentation(options:)

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
