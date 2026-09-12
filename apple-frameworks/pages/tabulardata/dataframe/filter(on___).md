> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/filter(on:_:)](https://developer.apple.com/documentation/tabulardata/dataframe/filter(on:_:))

# filter(on:\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a selection of rows that satisfy a predicate in the columns you select by column identifier.

## Declaration

```swift
func filter<T>(on columnID: ColumnID<T>, _ isIncluded: (T?) throws -> Bool) rethrows -> DataFrame.Slice
```

## Parameters

- `columnID`: The identifier of a column in the data frame.
- `isIncluded`: A predicate closure that receives an element of the column as its argument and returns a Boolean that indicates whether the slice includes the element’s row.

<a id="return-value"></a>

## Return Value

A data frame slice that contains the rows that satisfy the predicate.

## See Also

### Creating a Slice by Filtering Rows

- [filter(\_:)](filter%28__%29.md): Returns a selection of rows that satisfy a predicate.
- [filter(on:\_:\_:)](filter%28on_____%29.md): Returns a selection of rows that satisfy a predicate in the columns you select by name.
