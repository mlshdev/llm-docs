> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/dataframeprotocol/randomsplit(by:using:)

# randomSplit(by:using:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates two data frame slices by randomly splitting the rows of the data table type with a random-number generator.

## Declaration

```swift
func randomSplit<G>(by proportion: Double, using generator: inout G) -> (DataFrame.Slice, DataFrame.Slice) where G : RandomNumberGenerator
```

## Parameters

- `proportion`: A proportion in the range `[0.0, 1.0]`.
- `generator`: A random-number generator.

<a id="return-value"></a>

## Return Value

A tuple of two data frame slices.

## See Also

### Creating Two Slices by Splitting Rows

- [randomSplit(by:seed:)](randomsplit%28by_seed_%29.md): Generates two data frame slices by randomly splitting the rows of the data table.
