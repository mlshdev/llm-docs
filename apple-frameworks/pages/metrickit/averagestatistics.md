> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/averagestatistics](https://developer.apple.com/documentation/metrickit/averagestatistics)

# AverageStatistics

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A value that encapsulates an average measurement with supporting statistical data.

## Declaration

```swift
struct AverageStatistics<DimensionType> where DimensionType : Dimension
```

## Mentioned In

- [Analyzing app performance with MetricKit](analyzing-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

`AverageStatistics` provides the average value alongside a sample count and standard deviation. When statistical data is unavailable, `count` is `0` and `standardDeviation` is negative.

You encounter `AverageStatistics` as the type of certain metric properties, such as [value](suspendedmemorymetric/value.md) and [averageMemory](signpostintervalmetric/averagememory.md):

```swift
let statistics = metric.value // AverageStatistics<UnitInformationStorage>
print(statistics.average)           // Measurement<UnitInformationStorage>
print(statistics.count)             // Int — number of samples
print(statistics.standardDeviation) // Double — negative if unavailable
```

## Topics

### Statistics

- [average](averagestatistics/average.md): The average measurement value.
- [count](averagestatistics/count.md): The number of samples used to calculate the average.
- [standardDeviation](averagestatistics/standarddeviation.md): The standard deviation of the distribution of values used to calculate the average.

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

- [Histogram](histogram.md): A distribution of values organized into buckets.
- [SignalBars](signalbars.md): A unit for cellular signal strength measurements in bars.
- [HitchTimeRatio](hitchtimeratio.md): A unit for animation hitch time ratio measurements.
- [OSVersion](osversion.md): The version of the operating system on the device.
