> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/columnencodingerror/init(columnname:rowindex:encodingerror:)](https://developer.apple.com/documentation/tabulardata/columnencodingerror/init(columnname:rowindex:encodingerror:))

# init(columnName:rowIndex:encodingError:)

**Framework:** TabularData  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a column encoding error.

## Declaration

```swift
init(columnName: String, rowIndex: Int, encodingError: EncodingError)
```

## Parameters

- `columnName`: The name of the column with the error.
- `rowIndex`: The index of the column’s element with the error.
- `encodingError`: An underlying encoding error.
