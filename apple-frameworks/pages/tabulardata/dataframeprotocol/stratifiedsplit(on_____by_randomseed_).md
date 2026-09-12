> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/stratifiedsplit(on:_:_:by:randomseed:)](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/stratifiedsplit(on:_:_:by:randomseed:))

# stratifiedSplit(on:\_:\_:by:randomSeed:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates two data frames by randomly splitting the rows of three columns, which you select by column identifiers, into strata.

## Declaration

```swift
func stratifiedSplit<T0, T1, T2>(on columnID0: ColumnID<T0>, _ columnID1: ColumnID<T1>, _ columnID2: ColumnID<T2>, by proportion: Double, randomSeed: Int? = nil) -> (DataFrame, DataFrame) where T0 : Hashable, T1 : Hashable, T2 : Hashable
```

## Parameters

- `columnID0`: A column identifier.
- `columnID1`: A second column identifier.
- `columnID2`: A third column identifier.
- `proportion`: A proportion in the range `[0.0, 1.0]`.
- `randomSeed`: A seed number for a random-number generator.

<a id="return-value"></a>

## Return Value

A tuple of two data frames.

## See Also

### Creating Two Data Frames by Splitting Rows

- [stratifiedSplit(on:by:randomSeed:)](stratifiedsplit%28on_by_randomseed_%29-9iauf.md): Generates two data frames by randomly splitting the rows of a column, which you select by its name, into strata.
- [stratifiedSplit(on:by:randomSeed:)](stratifiedsplit%28on_by_randomseed_%29-8szu1.md): Generates two data frames by randomly splitting the rows of multiple columns, which you select by their names, into strata.
- [stratifiedSplit(on:by:randomSeed:)](stratifiedsplit%28on_by_randomseed_%29-714jk.md): Generates two data frames by randomly splitting the rows of a column, which you select by column identifier, into strata.
- [stratifiedSplit(on:\_:by:randomSeed:)](stratifiedsplit%28on___by_randomseed_%29.md): Generates two data frames by randomly splitting the rows of two columns, which you select by column identifiers, into strata.
