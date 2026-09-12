> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/columndecodingerror/init(columnname:rowindex:decodingerror:)](https://developer.apple.com/documentation/tabulardata/columndecodingerror/init(columnname:rowindex:decodingerror:))

# init(columnName:rowIndex:decodingError:)

**Framework:** TabularData  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a column decoding error.

## Declaration

```swift
init(columnName: String, rowIndex: Int, decodingError: DecodingError)
```

## Parameters

- `columnName`: The name of the column with the error.
- `rowIndex`: The index of the column’s element with the error.
- `decodingError`: An underlying decoding error.
