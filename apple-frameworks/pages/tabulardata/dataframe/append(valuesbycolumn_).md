> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/append(valuesbycolumn:)](https://developer.apple.com/documentation/tabulardata/dataframe/append(valuesbycolumn:))

# append(valuesByColumn:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds a dictionary’s values as a row to the data frame.

## Declaration

```swift
mutating func append(valuesByColumn dictionary: [String : Any?])
```

## Parameters

- `dictionary`: A dictionary of values whose key is a column’s name. Each key in the dictionary must be the name or alias of a column in the data frame. Each value in the dictionary must be of the same types as the corresponding column.

## See Also

### Adding a Row

- [appendEmptyRow()](appendemptyrow%28%29.md): Adds an empty row to the data frame.
- [append(row:)](append%28row_%29-3p6lx.md): Adds a comma-separated, or variadic, list of values as a row to the data frame.
