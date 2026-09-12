> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/indexofcolumn(_:)](https://developer.apple.com/documentation/tabulardata/dataframe/indexofcolumn(_:))

# indexOfColumn(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the index of a column.

## Declaration

```swift
func indexOfColumn(_ columnName: String) -> Int?
```

## Parameters

- `columnName`: The name or an alias of the column.

<a id="return-value"></a>

## Return Value

An integer if the column name or alias exists in the data frame; otherwise, `nil`.

This method’s complexity is O(*1*).
