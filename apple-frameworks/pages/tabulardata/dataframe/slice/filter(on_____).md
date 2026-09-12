> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/slice/filter(on:_:_:)](https://developer.apple.com/documentation/tabulardata/dataframe/slice/filter(on:_:_:))

# filter(on:\_:\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a selection of rows that satisfy a predicate in the columns you select by name.

## Declaration

```swift
func filter<T>(on columnName: String, _ type: T.Type, _ isIncluded: (T?) throws -> Bool) rethrows -> DataFrame.Slice
```

## Parameters

- `columnName`: The name of a column.
- `type`: The type of the column.
- `isIncluded`: A predicate closure that receives an element of the column as its argument, and returns a Boolean that indicates whether the slice includes the element’s row.

<a id="return-value"></a>

## Return Value

A data frame slice that contains the rows that satisfy the predicate.

## See Also

### Creating a Slice by Filtering Rows

- [filter(on:\_:)](filter%28on___%29.md): Returns a selection of rows that satisfy a predicate in the columns you select by column identifier.
