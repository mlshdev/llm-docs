> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartbinrange](https://developer.apple.com/documentation/charts/chartbinrange)

# ChartBinRange

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The range of data that a single bin of a chart represents.

## Declaration

```swift
struct ChartBinRange<Bound> where Bound : Comparable
```

<a id="overview"></a>

## Overview

All bins except the last for a particular chart represent an open range, meaning that the range doesn’t include the upper bound. The last range of the last bin is closed, so that it does include the upper bound. The system keeps track of the open or closed state of a particular range.

## Topics

### Instance Properties

- [lowerBound](chartbinrange/lowerbound.md)
- [upperBound](chartbinrange/upperbound.md)

## Relationships

### Conforms To

- [RangeExpression](https://developer.apple.com/documentation/swift/rangeexpression)

## See Also

### Data bins

- [NumberBins](numberbins.md): A collection of bins for a chart that plots data against numbers.
- [DateBins](datebins.md): A collection of bins for a chart that plots data against dates.
