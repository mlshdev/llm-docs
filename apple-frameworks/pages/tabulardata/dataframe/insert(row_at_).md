> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/insert(row:at:)](https://developer.apple.com/documentation/tabulardata/dataframe/insert(row:at:))

# insert(row:at:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds a row of values at a position in the data frame.

## Declaration

```swift
mutating func insert(row: DataFrame.Row, at index: Int)
```

## Parameters

- `row`: A row from a data frame.
- `index`: A row position in the data frame. The method inserts the new row before the row currently at `index`. If you pass the array’s `shape.rows` property as the `index` parameter, the method appends the new row to the data frame.

## See Also

### Adding a Row from a Data Frame

- [append(row:)](append%28row_%29-6wvcq.md): Adds a row of values to the data frame.
