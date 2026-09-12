> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/append(_:)-5l4c5](https://developer.apple.com/documentation/tabulardata/dataframe/append(_:)-5l4c5)

# append(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds the rows of a slice from a data frame.

## Declaration

```swift
mutating func append(_ other: DataFrame.Slice)
```

## Parameters

- `other`: A slice of a data frame. The columns in `other` that have the same name as columns in the data frame must also have the same type.

<a id="discussion"></a>

## Discussion

The method ignores columns in `other` that don’t exist in the data frame. The method fills the values for columns in the data frame that don’t exist in `other` to `nil`.

## See Also

### Adding Multiple Rows from a Data Frame

- [append(\_:)](append%28__%29-36sor.md): Adds the rows of another data frame.
- [append(rowsOf:)](append%28rowsof_%29.md): Adds the rows of another data frame that has the same column names and types.
