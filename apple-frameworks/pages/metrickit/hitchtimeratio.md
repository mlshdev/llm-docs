> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/hitchtimeratio](https://developer.apple.com/documentation/metrickit/hitchtimeratio)

# HitchTimeRatio

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A unit for animation hitch time ratio measurements.

## Declaration

```swift
@objc final class HitchTimeRatio
```

## Mentioned In

- [Analyzing app performance with MetricKit](analyzing-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

[ratio](hitchtimemetric/ratio.md) and [hitchTimeRatio](signpostintervalmetric/hitchtimeratio.md) use this dimension type, both of type `Measurement<HitchTimeRatio>`. The base unit represents the total time spent hitching over the total duration of the tracked interval, with symbol `"ms per s"`.

## Topics

### Type Methods

- [baseUnit()](hitchtimeratio/baseunit%28%29.md)

## Relationships

### Inherits From

- [Dimension](../foundation/dimension.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [Histogram](histogram.md): A distribution of values organized into buckets.
- [AverageStatistics](averagestatistics.md): A value that encapsulates an average measurement with supporting statistical data.
- [SignalBars](signalbars.md): A unit for cellular signal strength measurements in bars.
- [OSVersion](osversion.md): The version of the operating system on the device.
