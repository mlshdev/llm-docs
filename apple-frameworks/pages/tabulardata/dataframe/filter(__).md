> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframe/filter(_:)](https://developer.apple.com/documentation/tabulardata/dataframe/filter(_:))

# filter(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a selection of rows that satisfy a predicate.

## Declaration

```swift
func filter(_ isIncluded: (DataFrame.Row) throws -> Bool) rethrows -> DataFrame.Slice
```

## Parameters

- `isIncluded`: A predicate closure that receives an row and returns a Boolean that indicates whether the slice includes that row.

<a id="return-value"></a>

## Return Value

A data frame slice that contains the rows that satisfy the predicate.

## See Also

### Creating a Slice by Filtering Rows

- [filter(on:\_:\_:)](filter%28on_____%29.md): Returns a selection of rows that satisfy a predicate in the columns you select by name.
- [filter(on:\_:)](filter%28on___%29.md): Returns a selection of rows that satisfy a predicate in the columns you select by column identifier.
