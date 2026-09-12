> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/append(_:)-36sor](https://developer.apple.com/documentation/tabulardata/dataframe/append(_:)-36sor)

# append(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds the rows of another data frame.

## Declaration

```swift
mutating func append(_ other: DataFrame)
```

## Parameters

- `other`: Another data frame. The columns in `other` that have the same name as columns in the data frame must also have the same type.

<a id="discussion"></a>

## Discussion

The method ignores columns in `other` that don’t exist in the data frame. It fills the values for columns in the data frame that don’t exist in `other` to `nil`. It raises a fatal error if columns with the same name have different types. The following code shows how to check that the columns match.

```
func columnTypesAreEqual(_ left: DataFrame, _ right: DataFrame) -> Bool {
    for rightColumn in right.columns {
        guard let index = left.indexOfColumn(rightColumn.name) else {
            continue
        }
        let leftColumn = left.columns[index]
        if leftColumn.wrappedElementType != rightColumn.wrappedElementType {
            return false
        }
    }
    return true
}
```

## See Also

### Adding Multiple Rows from a Data Frame

- [append(rowsOf:)](append%28rowsof_%29.md): Adds the rows of another data frame that has the same column names and types.
- [append(\_:)](append%28__%29-5l4c5.md): Adds the rows of a slice from a data frame.
