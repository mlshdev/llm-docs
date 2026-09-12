> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxbackgroundexitdata/cumulativememorypressureexitcount](https://developer.apple.com/documentation/metrickit/mxbackgroundexitdata/cumulativememorypressureexitcount)

# cumulativeMemoryPressureExitCount (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The number of times the system terminated the app from the background to free up memory.

> Use [systemPressureTerminationCount](../backgroundterminationmetric/systempressureterminationcount.md) instead.

## Declaration

```swift
var cumulativeMemoryPressureExitCount: Int { get }
```

## See Also

### Reading the System Termination Count

- [cumulativeAppWatchdogExitCount](cumulativeappwatchdogexitcount.md): Deprecated. The number of times the system watchdog terminated the app from the background.
- [cumulativeCPUResourceLimitExitCount](cumulativecpuresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the background for using too much CPU time.
- [cumulativeMemoryResourceLimitExitCount](cumulativememoryresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the background for using too much memory.
- [cumulativeSuspendedWithLockedFileExitCount](cumulativesuspendedwithlockedfileexitcount.md): Deprecated. The number of times the system terminated the app from the background while being suspended and having file locks.

# cumulativeMemoryPressureExitCount (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The number of times the system terminated the app from the background to free up memory.

> Use [systemPressureTerminationCount](../backgroundterminationmetric/systempressureterminationcount.md) instead.

## Declaration

```objectivec
@property (readonly) NSUInteger cumulativeMemoryPressureExitCount;
```

## See Also

### Reading the System Termination Count

- [cumulativeAppWatchdogExitCount](cumulativeappwatchdogexitcount.md): Deprecated. The number of times the system watchdog terminated the app from the background.
- [cumulativeCPUResourceLimitExitCount](cumulativecpuresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the background for using too much CPU time.
- [cumulativeMemoryResourceLimitExitCount](cumulativememoryresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the background for using too much memory.
- [cumulativeSuspendedWithLockedFileExitCount](cumulativesuspendedwithlockedfileexitcount.md): Deprecated. The number of times the system terminated the app from the background while being suspended and having file locks.
