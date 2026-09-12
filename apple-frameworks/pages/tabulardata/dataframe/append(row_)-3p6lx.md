> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/append(row:)-3p6lx](https://developer.apple.com/documentation/tabulardata/dataframe/append(row:)-3p6lx)

# append(row:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds a comma-separated, or variadic, list of values as a row to the data frame.

## Declaration

```swift
mutating func append(row: Any?...)
```

## Parameters

- `row`: A comma-separated, or variadic, list of optional values. Each value’s type must match the type of the corresponding column in the data frame.

## See Also

### Adding a Row

- [appendEmptyRow()](appendemptyrow%28%29.md): Adds an empty row to the data frame.
- [append(valuesByColumn:)](append%28valuesbycolumn_%29.md): Adds a dictionary’s values as a row to the data frame.
