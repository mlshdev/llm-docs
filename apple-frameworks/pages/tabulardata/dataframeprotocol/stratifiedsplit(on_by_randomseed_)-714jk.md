> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/stratifiedsplit(on:by:randomseed:)-714jk](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/stratifiedsplit(on:by:randomseed:)-714jk)

# stratifiedSplit(on:by:randomSeed:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates two data frames by randomly splitting the rows of a column, which you select by column identifier, into strata.

## Declaration

```swift
func stratifiedSplit<T>(on columnID: ColumnID<T>, by proportion: Double, randomSeed: Int? = nil) -> (DataFrame, DataFrame) where T : Hashable
```

## Parameters

- `columnID`: A column identifier.
- `proportion`: A proportion in the range `[0.0, 1.0]`.
- `randomSeed`: A seed number for a random-number generator.

<a id="return-value"></a>

## Return Value

A tuple of two data frames.

## See Also

### Creating Two Data Frames by Splitting Rows

- [stratifiedSplit(on:by:randomSeed:)](stratifiedsplit%28on_by_randomseed_%29-9iauf.md): Generates two data frames by randomly splitting the rows of a column, which you select by its name, into strata.
- [stratifiedSplit(on:by:randomSeed:)](stratifiedsplit%28on_by_randomseed_%29-8szu1.md): Generates two data frames by randomly splitting the rows of multiple columns, which you select by their names, into strata.
- [stratifiedSplit(on:\_:by:randomSeed:)](stratifiedsplit%28on___by_randomseed_%29.md): Generates two data frames by randomly splitting the rows of two columns, which you select by column identifiers, into strata.
- [stratifiedSplit(on:\_:\_:by:randomSeed:)](stratifiedsplit%28on_____by_randomseed_%29.md): Generates two data frames by randomly splitting the rows of three columns, which you select by column identifiers, into strata.
