> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/init(_:)](https://developer.apple.com/documentation/tabulardata/dataframe/init(_:))

# init(\_:)

**Framework:** TabularData  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new data frame with a slice of rows from another data frame.

## Declaration

```swift
init(_ other: DataFrame.Slice)
```

## Parameters

- `other`: A row slice from another data frame.

## See Also

### Creating a Data Frame from Other Data Frames

- [DataFrame.Slice](slice.md): A set of a data frame’s rows you create by using a method from a data frame instance or another data frame slice.
