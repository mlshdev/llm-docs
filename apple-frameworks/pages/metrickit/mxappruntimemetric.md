> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxappruntimemetric](https://developer.apple.com/documentation/metrickit/mxappruntimemetric)

# MXAppRunTimeMetric (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about the amount of time the app is active.

> Use [MetricResult](metricresult.md), and read the [TotalForegroundTimeMetric](totalforegroundtimemetric.md), [TotalBackgroundTimeMetric](totalbackgroundtimemetric.md), [TotalBackgroundAudioTimeMetric](totalbackgroundaudiotimemetric.md), or [TotalBackgroundLocationTimeMetric](totalbackgroundlocationtimemetric.md) cases instead.

## Declaration

```swift
class MXAppRunTimeMetric
```

## Topics

### Reading application run time

- [cumulativeForegroundTime](mxappruntimemetric/cumulativeforegroundtime.md): Deprecated. The total time the app is in the foreground.
- [cumulativeBackgroundTime](mxappruntimemetric/cumulativebackgroundtime.md): Deprecated. The total time the app is active in the background.
- [cumulativeBackgroundAudioTime](mxappruntimemetric/cumulativebackgroundaudiotime.md): Deprecated. The total time the app is in the background and playing audio.
- [cumulativeBackgroundLocationTime](mxappruntimemetric/cumulativebackgroundlocationtime.md): Deprecated. The total time the app is in the background and using location services.

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

- [MXAppExitMetric](mxappexitmetric.md): Deprecated. An object representing metrics about the types of foreground and background app exits.
- [MXForegroundExitData](mxforegroundexitdata.md): Deprecated. An object representing counts for the different types of foreground app exits.
- [MXBackgroundExitData](mxbackgroundexitdata.md): Deprecated. An object representing counts for the different types of background app exits.
- [MXMemoryMetric](mxmemorymetric.md): Deprecated. An object representing metrics about the app’s memory use.

# MXAppRunTimeMetric (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about the amount of time the app is active.

> Use [MetricResult](metricresult.md), and read the [TotalForegroundTimeMetric](totalforegroundtimemetric.md), [TotalBackgroundTimeMetric](totalbackgroundtimemetric.md), [TotalBackgroundAudioTimeMetric](totalbackgroundaudiotimemetric.md), or [TotalBackgroundLocationTimeMetric](totalbackgroundlocationtimemetric.md) cases instead.

## Declaration

```objectivec
@interface MXAppRunTimeMetric : MXMetric
```

## Topics

### Reading application run time

- [cumulativeForegroundTime](mxappruntimemetric/cumulativeforegroundtime.md): Deprecated. The total time the app is in the foreground.
- [cumulativeBackgroundTime](mxappruntimemetric/cumulativebackgroundtime.md): Deprecated. The total time the app is active in the background.
- [cumulativeBackgroundAudioTime](mxappruntimemetric/cumulativebackgroundaudiotime.md): Deprecated. The total time the app is in the background and playing audio.
- [cumulativeBackgroundLocationTime](mxappruntimemetric/cumulativebackgroundlocationtime.md): Deprecated. The total time the app is in the background and using location services.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

## See Also

### App performance metrics

- [MXAppExitMetric](mxappexitmetric.md): Deprecated. An object representing metrics about the types of foreground and background app exits.
- [MXForegroundExitData](mxforegroundexitdata.md): Deprecated. An object representing counts for the different types of foreground app exits.
- [MXBackgroundExitData](mxbackgroundexitdata.md): Deprecated. An object representing counts for the different types of background app exits.
- [MXMemoryMetric](mxmemorymetric.md): Deprecated. An object representing metrics about the app’s memory use.
