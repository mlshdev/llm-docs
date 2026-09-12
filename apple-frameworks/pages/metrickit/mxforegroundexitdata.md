> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxforegroundexitdata](https://developer.apple.com/documentation/metrickit/mxforegroundexitdata)

# MXForegroundExitData (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing counts for the different types of foreground app exits.

> Use [ForegroundTerminationMetric](foregroundterminationmetric.md) instead.

## Declaration

```swift
class MXForegroundExitData
```

## Topics

### Reading the Normal Exit Count

- [cumulativeNormalAppExitCount](mxforegroundexitdata/cumulativenormalappexitcount.md): Deprecated. The number of times the app exited normally from the foreground.

### Reading the Abnormal Exit Count

- [cumulativeAbnormalExitCount](mxforegroundexitdata/cumulativeabnormalexitcount.md): Deprecated. The number of times the app exited abnormally from the foreground.

### Reading the System Termination Count

- [cumulativeAppWatchdogExitCount](mxforegroundexitdata/cumulativeappwatchdogexitcount.md): Deprecated. The number of times the system watchdog terminated the app from the foreground.
- [cumulativeMemoryResourceLimitExitCount](mxforegroundexitdata/cumulativememoryresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the foreground for using too much memory.

### Reading the Crash Count

- [cumulativeBadAccessExitCount](mxforegroundexitdata/cumulativebadaccessexitcount.md): Deprecated. The number of times the system terminated the app from the foreground for attempting an invalid memory access.
- [cumulativeIllegalInstructionExitCount](mxforegroundexitdata/cumulativeillegalinstructionexitcount.md): Deprecated. The number of times the system terminated the app from the foreground for attempting to execute an illegal or undefined instruction.

### Initializers

- [init(coder:)](mxforegroundexitdata/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [MXBackgroundExitData](mxbackgroundexitdata.md): Deprecated. An object representing counts for the different types of background app exits.
- [MXMemoryMetric](mxmemorymetric.md): Deprecated. An object representing metrics about the app’s memory use.

# MXForegroundExitData (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing counts for the different types of foreground app exits.

> Use [ForegroundTerminationMetric](foregroundterminationmetric.md) instead.

## Declaration

```objectivec
@interface MXForegroundExitData : NSObject
```

## Topics

### Reading the Normal Exit Count

- [cumulativeNormalAppExitCount](mxforegroundexitdata/cumulativenormalappexitcount.md): Deprecated. The number of times the app exited normally from the foreground.

### Reading the Abnormal Exit Count

- [cumulativeAbnormalExitCount](mxforegroundexitdata/cumulativeabnormalexitcount.md): Deprecated. The number of times the app exited abnormally from the foreground.

### Reading the System Termination Count

- [cumulativeAppWatchdogExitCount](mxforegroundexitdata/cumulativeappwatchdogexitcount.md): Deprecated. The number of times the system watchdog terminated the app from the foreground.
- [cumulativeMemoryResourceLimitExitCount](mxforegroundexitdata/cumulativememoryresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the foreground for using too much memory.

### Reading the Crash Count

- [cumulativeBadAccessExitCount](mxforegroundexitdata/cumulativebadaccessexitcount.md): Deprecated. The number of times the system terminated the app from the foreground for attempting an invalid memory access.
- [cumulativeIllegalInstructionExitCount](mxforegroundexitdata/cumulativeillegalinstructionexitcount.md): Deprecated. The number of times the system terminated the app from the foreground for attempting to execute an illegal or undefined instruction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### App performance metrics

- [MXAppRunTimeMetric](mxappruntimemetric.md): Deprecated. An object representing metrics about the amount of time the app is active.
- [MXAppExitMetric](mxappexitmetric.md): Deprecated. An object representing metrics about the types of foreground and background app exits.
- [MXBackgroundExitData](mxbackgroundexitdata.md): Deprecated. An object representing counts for the different types of background app exits.
- [MXMemoryMetric](mxmemorymetric.md): Deprecated. An object representing metrics about the app’s memory use.
