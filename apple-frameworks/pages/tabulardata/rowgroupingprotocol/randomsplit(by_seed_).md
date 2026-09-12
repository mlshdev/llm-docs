> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/rowgroupingprotocol/randomsplit(by:seed:)](https://developer.apple.com/documentation/tabulardata/rowgroupingprotocol/randomsplit(by:seed:))

# randomSplit(by:seed:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates two row groupings by randomly splitting the original by a proportion.

## Declaration

```swift
func randomSplit(by proportion: Double, seed: Int?) -> (Self, Self)
```

## Parameters

- `proportion`: A proportion in the range `[0.0, 1.0]`.
- `seed`: A seed number for a random-number generator.

<a id="return-value"></a>

## Return Value

A tuple of two data row grouping types.

## See Also

### Splitting a Row Grouping

- [randomSplit(by:)](randomsplit%28by_%29.md): Generates two row groupings by randomly splitting the original with a proportion.
