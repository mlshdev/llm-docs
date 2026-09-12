> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxappexitmetric](https://developer.apple.com/documentation/metrickit/mxappexitmetric)

# MXAppExitMetric (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about the types of foreground and background app exits.

> Use [MetricResult](metricresult.md), and read the [ForegroundTerminationMetric](foregroundterminationmetric.md) or [BackgroundTerminationMetric](backgroundterminationmetric.md) cases instead.

## Declaration

```swift
class MXAppExitMetric
```

## Topics

### Reading the foreground exit data

- [foregroundExitData](mxappexitmetric/foregroundexitdata.md): Deprecated. The metrics for the foreground app exits.
- [MXForegroundExitData](mxforegroundexitdata.md): Deprecated. An object representing counts for the different types of foreground app exits.

### Reading the background exit data

- [backgroundExitData](mxappexitmetric/backgroundexitdata.md): Deprecated. The metrics for the background app exits.
- [MXBackgroundExitData](mxbackgroundexitdata.md): Deprecated. An object representing counts for the different types of background app exits.

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
- [MXForegroundExitData](mxforegroundexitdata.md): Deprecated. An object representing counts for the different types of foreground app exits.
- [MXBackgroundExitData](mxbackgroundexitdata.md): Deprecated. An object representing counts for the different types of background app exits.
- [MXMemoryMetric](mxmemorymetric.md): Deprecated. An object representing metrics about the app’s memory use.

# MXAppExitMetric (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about the types of foreground and background app exits.

> Use [MetricResult](metricresult.md), and read the [ForegroundTerminationMetric](foregroundterminationmetric.md) or [BackgroundTerminationMetric](backgroundterminationmetric.md) cases instead.

## Declaration

```objectivec
@interface MXAppExitMetric : MXMetric
```

## Topics

### Reading the foreground exit data

- [foregroundExitData](mxappexitmetric/foregroundexitdata.md): Deprecated. The metrics for the foreground app exits.
- [MXForegroundExitData](mxforegroundexitdata.md): Deprecated. An object representing counts for the different types of foreground app exits.

### Reading the background exit data

- [backgroundExitData](mxappexitmetric/backgroundexitdata.md): Deprecated. The metrics for the background app exits.
- [MXBackgroundExitData](mxbackgroundexitdata.md): Deprecated. An object representing counts for the different types of background app exits.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

## See Also

### App performance metrics

- [MXAppRunTimeMetric](mxappruntimemetric.md): Deprecated. An object representing metrics about the amount of time the app is active.
- [MXForegroundExitData](mxforegroundexitdata.md): Deprecated. An object representing counts for the different types of foreground app exits.
- [MXBackgroundExitData](mxbackgroundexitdata.md): Deprecated. An object representing counts for the different types of background app exits.
- [MXMemoryMetric](mxmemorymetric.md): Deprecated. An object representing metrics about the app’s memory use.
