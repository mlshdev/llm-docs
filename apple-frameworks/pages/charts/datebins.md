> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/datebins](https://developer.apple.com/documentation/charts/datebins)

# DateBins

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A collection of bins for a chart that plots data against dates.

## Declaration

```swift
struct DateBins
```

## Topics

### Initializers

- [init(data:desiredCount:calendar:)](datebins/init%28data_desiredcount_calendar_%29.md): Automatically determine the bins from data.
- [init(range:desiredCount:calendar:)](datebins/init%28range_desiredcount_calendar_%29.md): Automatically determine the bins from a range of data.
- [init(thresholds:)](datebins/init%28thresholds_%29.md): Creates N-1 bins with the given N `thresholds`.
- [init(timeInterval:range:)](datebins/init%28timeinterval_range_%29.md): Creates uniform bins covering the given range. The first bin starts at the lower bound of the range.
- [init(unit:by:range:calendar:)](datebins/init%28unit_by_range_calendar_%29.md): Creates uniform bins covering the given range.

### Instance Properties

- [thresholds](datebins/thresholds.md): Find the bin thresholds.

### Instance Methods

- [index(for:)](datebins/index%28for_%29.md): Returns the bin index for the given value.

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Data bins

- [NumberBins](numberbins.md): A collection of bins for a chart that plots data against numbers.
- [ChartBinRange](chartbinrange.md): The range of data that a single bin of a chart represents.
