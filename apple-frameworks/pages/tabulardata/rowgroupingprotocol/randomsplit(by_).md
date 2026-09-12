> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/rowgroupingprotocol/randomsplit(by:)](https://developer.apple.com/documentation/tabulardata/rowgroupingprotocol/randomsplit(by:))

# randomSplit(by:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates two row groupings by randomly splitting the original with a proportion.

## Declaration

```swift
func randomSplit(by proportion: Double) -> (Self, Self)
```

<a id="return-value"></a>

## Return Value

A tuple of two row groupings.

## See Also

### Splitting a Row Grouping

- [randomSplit(by:seed:)](randomsplit%28by_seed_%29.md): Generates two row groupings by randomly splitting the original by a proportion.
