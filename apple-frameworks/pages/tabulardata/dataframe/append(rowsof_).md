> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/append(rowsof:)](https://developer.apple.com/documentation/tabulardata/dataframe/append(rowsof:))

# append(rowsOf:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds the rows of another data frame that has the same column names and types.

## Declaration

```swift
mutating func append(rowsOf other: DataFrame)
```

## Parameters

- `other`: Another data frame that has the same number of columns. The columns in `other` must have the same names and types as the columns in the data frame.

<a id="discussion"></a>

## Discussion

This method raises a fatal error if the data frame columns don’t match. The following code shows how to check that the columns match.

```
let sameColumns = left.columns.count == right.columns.count && zip(left.columns, right.columns).allSatisfy {
    $0.name == $1.name && $0.wrappedElementType == $1.wrappedElementType
}
```

## See Also

### Adding Multiple Rows from a Data Frame

- [append(\_:)](append%28__%29-36sor.md): Adds the rows of another data frame.
- [append(\_:)](append%28__%29-5l4c5.md): Adds the rows of a slice from a data frame.
