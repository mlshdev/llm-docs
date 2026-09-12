> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/csvreadingerror/outofbounds(requested:actual:)](https://developer.apple.com/documentation/tabulardata/csvreadingerror/outofbounds(requested:actual:))

# CSVReadingError.outOfBounds(requested:actual:)

**Framework:** TabularData  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An error that indicates that the read operation requested rows beyond the end of the CSV file.

## Declaration

```swift
case outOfBounds(requested: Int, actual: Int)
```

## Parameters

- `requested`: The requested start row index.
- `actual`: The actual number of rows in the file.
