> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmemorymetric](https://developer.apple.com/documentation/metrickit/mxmemorymetric)

# MXMemoryMetric (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about the app’s memory use.

> Use [MetricResult](metricresult.md), and read the [PeakMemoryMetric](peakmemorymetric.md) or [SuspendedMemoryMetric](suspendedmemorymetric.md) cases instead.

## Declaration

```swift
class MXMemoryMetric
```

## Topics

### Measuring memory use

- [averageSuspendedMemory](mxmemorymetric/averagesuspendedmemory.md): Deprecated. The average amount of memory in use by the app when it’s suspended.
- [peakMemoryUsage](mxmemorymetric/peakmemoryusage.md): Deprecated. The largest amount of memory used by the app.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### App performance metrics

- [MXAppRunTimeMetric](mxappruntimemetric.md): Deprecated. An object representing metrics about the amount of time the app is active.
- [MXAppExitMetric](mxappexitmetric.md): Deprecated. An object representing metrics about the types of foreground and background app exits.
- [MXForegroundExitData](mxforegroundexitdata.md): Deprecated. An object representing counts for the different types of foreground app exits.
- [MXBackgroundExitData](mxbackgroundexitdata.md): Deprecated. An object representing counts for the different types of background app exits.

# MXMemoryMetric (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about the app’s memory use.

> Use [MetricResult](metricresult.md), and read the [PeakMemoryMetric](peakmemorymetric.md) or [SuspendedMemoryMetric](suspendedmemorymetric.md) cases instead.

## Declaration

```objectivec
@interface MXMemoryMetric : MXMetric
```

## Topics

### Measuring memory use

- [averageSuspendedMemory](mxmemorymetric/averagesuspendedmemory.md): Deprecated. The average amount of memory in use by the app when it’s suspended.
- [peakMemoryUsage](mxmemorymetric/peakmemoryusage.md): Deprecated. The largest amount of memory used by the app.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

## See Also

### App performance metrics

- [MXAppRunTimeMetric](mxappruntimemetric.md): Deprecated. An object representing metrics about the amount of time the app is active.
- [MXAppExitMetric](mxappexitmetric.md): Deprecated. An object representing metrics about the types of foreground and background app exits.
- [MXForegroundExitData](mxforegroundexitdata.md): Deprecated. An object representing counts for the different types of foreground app exits.
- [MXBackgroundExitData](mxbackgroundexitdata.md): Deprecated. An object representing counts for the different types of background app exits.
