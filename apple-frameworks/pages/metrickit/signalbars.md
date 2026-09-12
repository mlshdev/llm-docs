> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/signalbars](https://developer.apple.com/documentation/metrickit/signalbars)

# SignalBars

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A unit for cellular signal strength measurements in bars.

## Declaration

```swift
@objc final class SignalBars
```

## Mentioned In

- [Analyzing app performance with MetricKit](analyzing-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

This is used as the dimension type in [histogram](cellularconditiontimemetric/histogram.md), which has type `Histogram<SignalBars>`. The base unit symbol is `"bars"`.

## Topics

### Type Methods

- [baseUnit()](signalbars/baseunit%28%29.md)

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
- [HitchTimeRatio](hitchtimeratio.md): A unit for animation hitch time ratio measurements.
- [OSVersion](osversion.md): The version of the operating system on the device.
