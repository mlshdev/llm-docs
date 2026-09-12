> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxbackgroundexitdata](https://developer.apple.com/documentation/metrickit/mxbackgroundexitdata)

# MXBackgroundExitData (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing counts for the different types of background app exits.

> Use [BackgroundTerminationMetric](backgroundterminationmetric.md) instead.

## Declaration

```swift
class MXBackgroundExitData
```

## Topics

### Reading the Normal Exit Count

- [cumulativeNormalAppExitCount](mxbackgroundexitdata/cumulativenormalappexitcount.md): Deprecated. The number of times the app exited normally from the background.

### Reading the Abnormal Exit Count

- [cumulativeAbnormalExitCount](mxbackgroundexitdata/cumulativeabnormalexitcount.md): Deprecated. The number of times the app exited abnormally from the background.

### Reading the System Termination Count

- [cumulativeAppWatchdogExitCount](mxbackgroundexitdata/cumulativeappwatchdogexitcount.md): Deprecated. The number of times the system watchdog terminated the app from the background.
- [cumulativeCPUResourceLimitExitCount](mxbackgroundexitdata/cumulativecpuresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the background for using too much CPU time.
- [cumulativeMemoryResourceLimitExitCount](mxbackgroundexitdata/cumulativememoryresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the background for using too much memory.
- [cumulativeMemoryPressureExitCount](mxbackgroundexitdata/cumulativememorypressureexitcount.md): Deprecated. The number of times the system terminated the app from the background to free up memory.
- [cumulativeSuspendedWithLockedFileExitCount](mxbackgroundexitdata/cumulativesuspendedwithlockedfileexitcount.md): Deprecated. The number of times the system terminated the app from the background while being suspended and having file locks.

### Reading the Crash Count

- [cumulativeBadAccessExitCount](mxbackgroundexitdata/cumulativebadaccessexitcount.md): Deprecated. The number of times the system terminated the app from the background for attempting an invalid memory access.
- [cumulativeIllegalInstructionExitCount](mxbackgroundexitdata/cumulativeillegalinstructionexitcount.md): Deprecated. The number of times the system terminated the app from the background for attempting to execute an illegal or undefined instruction.

### Reading the Timeout Count

- [cumulativeBackgroundTaskAssertionTimeoutExitCount](mxbackgroundexitdata/cumulativebackgroundtaskassertiontimeoutexitcount.md): Deprecated. The number of times the system terminated the app from the background for exceeding the allocated time for a background task.

### Initializers

- [init(coder:)](mxbackgroundexitdata/init%28coder_%29.md): Deprecated.

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
- [MXForegroundExitData](mxforegroundexitdata.md): Deprecated. An object representing counts for the different types of foreground app exits.
- [MXMemoryMetric](mxmemorymetric.md): Deprecated. An object representing metrics about the app’s memory use.

# MXBackgroundExitData (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing counts for the different types of background app exits.

> Use [BackgroundTerminationMetric](backgroundterminationmetric.md) instead.

## Declaration

```objectivec
@interface MXBackgroundExitData : NSObject
```

## Topics

### Reading the Normal Exit Count

- [cumulativeNormalAppExitCount](mxbackgroundexitdata/cumulativenormalappexitcount.md): Deprecated. The number of times the app exited normally from the background.

### Reading the Abnormal Exit Count

- [cumulativeAbnormalExitCount](mxbackgroundexitdata/cumulativeabnormalexitcount.md): Deprecated. The number of times the app exited abnormally from the background.

### Reading the System Termination Count

- [cumulativeAppWatchdogExitCount](mxbackgroundexitdata/cumulativeappwatchdogexitcount.md): Deprecated. The number of times the system watchdog terminated the app from the background.
- [cumulativeCPUResourceLimitExitCount](mxbackgroundexitdata/cumulativecpuresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the background for using too much CPU time.
- [cumulativeMemoryResourceLimitExitCount](mxbackgroundexitdata/cumulativememoryresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the background for using too much memory.
- [cumulativeMemoryPressureExitCount](mxbackgroundexitdata/cumulativememorypressureexitcount.md): Deprecated. The number of times the system terminated the app from the background to free up memory.
- [cumulativeSuspendedWithLockedFileExitCount](mxbackgroundexitdata/cumulativesuspendedwithlockedfileexitcount.md): Deprecated. The number of times the system terminated the app from the background while being suspended and having file locks.

### Reading the Crash Count

- [cumulativeBadAccessExitCount](mxbackgroundexitdata/cumulativebadaccessexitcount.md): Deprecated. The number of times the system terminated the app from the background for attempting an invalid memory access.
- [cumulativeIllegalInstructionExitCount](mxbackgroundexitdata/cumulativeillegalinstructionexitcount.md): Deprecated. The number of times the system terminated the app from the background for attempting to execute an illegal or undefined instruction.

### Reading the Timeout Count

- [cumulativeBackgroundTaskAssertionTimeoutExitCount](mxbackgroundexitdata/cumulativebackgroundtaskassertiontimeoutexitcount.md): Deprecated. The number of times the system terminated the app from the background for exceeding the allocated time for a background task.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### App performance metrics

- [MXAppRunTimeMetric](mxappruntimemetric.md): Deprecated. An object representing metrics about the amount of time the app is active.
- [MXAppExitMetric](mxappexitmetric.md): Deprecated. An object representing metrics about the types of foreground and background app exits.
- [MXForegroundExitData](mxforegroundexitdata.md): Deprecated. An object representing counts for the different types of foreground app exits.
- [MXMemoryMetric](mxmemorymetric.md): Deprecated. An object representing metrics about the app’s memory use.
