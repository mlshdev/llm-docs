> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/appendemptyrow()](https://developer.apple.com/documentation/tabulardata/dataframe/appendemptyrow())

# appendEmptyRow()

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds an empty row to the data frame.

## Declaration

```swift
mutating func appendEmptyRow()
```

<a id="discussion"></a>

## Discussion

Each value in an empty row is `nil`.

## See Also

### Adding a Row

- [append(row:)](append%28row_%29-3p6lx.md): Adds a comma-separated, or variadic, list of values as a row to the data frame.
- [append(valuesByColumn:)](append%28valuesbycolumn_%29.md): Adds a dictionary’s values as a row to the data frame.
