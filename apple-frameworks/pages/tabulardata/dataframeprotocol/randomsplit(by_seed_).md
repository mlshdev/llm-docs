> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/dataframeprotocol/randomsplit(by:seed:)](https://developer.apple.com/documentation/tabulardata/dataframeprotocol/randomsplit(by:seed:))

# randomSplit(by:seed:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates two data frame slices by randomly splitting the rows of the data table.

## Declaration

```swift
func randomSplit(by proportion: Double, seed: Int? = nil) -> (DataFrame.Slice, DataFrame.Slice)
```

## Parameters

- `proportion`: A proportion in the range `[0.0, 1.0]`.
- `seed`: A seed number for a random-number generator.

<a id="return-value"></a>

## Return Value

A tuple of two data frame slices.

## See Also

### Creating Two Slices by Splitting Rows

- [randomSplit(by:using:)](randomsplit%28by_using_%29.md): Generates two data frame slices by randomly splitting the rows of the data table type with a random-number generator.
