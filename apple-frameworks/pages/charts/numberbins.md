> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/numberbins](https://developer.apple.com/documentation/charts/numberbins)

# NumberBins

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A collection of bins for a chart that plots data against numbers.

## Declaration

```swift
struct NumberBins<Value> where Value : Comparable, Value : Numeric
```

## Topics

### Initializers

- [init(data:desiredCount:minimumStride:)](numberbins/init%28data_desiredcount_minimumstride_%29-3txi5.md): Automatically determine the bins from data.
- [init(data:desiredCount:minimumStride:)](numberbins/init%28data_desiredcount_minimumstride_%29-8pvv7.md): Automatically determine the bins from data.
- [init(range:count:)](numberbins/init%28range_count_%29-6hip8.md): Creates the given number of bins for the range. Expects that the range length is a multiple of `count` to allow uniform integer bins.
- [init(range:count:)](numberbins/init%28range_count_%29-7975l.md): Creates the given number of bins for the range.
- [init(range:desiredCount:minimumStride:)](numberbins/init%28range_desiredcount_minimumstride_%29-32ok2.md): Automatically determine the bins from a range of data.
- [init(range:desiredCount:minimumStride:)](numberbins/init%28range_desiredcount_minimumstride_%29-4qxfa.md): Automatically determine the bins from a range of data.
- [init(size:range:)](numberbins/init%28size_range_%29-3ach2.md): Creates uniform bins covering the given range.
- [init(size:range:)](numberbins/init%28size_range_%29-5me6y.md): Creates uniform bins covering the given range.
- [init(thresholds:)](numberbins/init%28thresholds_%29.md): Creates N-1 bins with the given N `thresholds`.

### Instance Properties

- [thresholds](numberbins/thresholds.md): Find the bin thresholds.

### Instance Methods

- [index(for:)](numberbins/index%28for_%29.md): Returns the bin index for the given value.

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Data bins

- [DateBins](datebins.md): A collection of bins for a chart that plots data against dates.
- [ChartBinRange](chartbinrange.md): The range of data that a single bin of a chart represents.
