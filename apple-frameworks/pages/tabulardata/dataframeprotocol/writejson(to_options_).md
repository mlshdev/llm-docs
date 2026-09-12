> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/writejson(to:options:)](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/writejson(to:options:))

# writeJSON(to:options:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a JSON file with the contents of the data frame.

## Declaration

```swift
func writeJSON(to url: URL, options: JSONWritingOptions = .init()) throws
```

## Parameters

- `url`: A location URL in the file system where the method saves the JSON file.
- `options`: A [JSONWritingOptions](../jsonwritingoptions.md) instance.
