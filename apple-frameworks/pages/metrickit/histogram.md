> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/histogram](https://developer.apple.com/documentation/metrickit/histogram)

# Histogram

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A distribution of values organized into buckets.

## Declaration

```swift
struct Histogram<DimensionType> where DimensionType : Dimension
```

## Mentioned In

- [Analyzing app performance with MetricKit](analyzing-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

Each [Histogram.Bucket](histogram/bucket.md) in the [buckets](histogram/buckets.md) array covers a range from [lowerBound](histogram/bucket/lowerbound.md) to [upperBound](histogram/bucket/upperbound.md) and reports the number of samples in that range via [count](histogram/bucket/count.md).

You encounter `Histogram` as the type of properties on various metric structs, such as [histogram](hangtimemetric/histogram.md) and [histogram](timetofirstdrawmetric/histogram.md):

```swift
let histogram = metric.histogram // Histogram<UnitDuration>
for bucket in histogram.buckets {
    let lower = bucket.lowerBound
    let upper = bucket.upperBound
    let count = bucket.count
}
```

## Topics

### Buckets

- [buckets](histogram/buckets.md)

### Structures

- [Histogram.Bucket](histogram/bucket.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [AverageStatistics](averagestatistics.md): A value that encapsulates an average measurement with supporting statistical data.
- [SignalBars](signalbars.md): A unit for cellular signal strength measurements in bars.
- [HitchTimeRatio](hitchtimeratio.md): A unit for animation hitch time ratio measurements.
- [OSVersion](osversion.md): The version of the operating system on the device.
