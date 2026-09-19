> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxbackgroundexitdata/cumulativecpuresourcelimitexitcount

# cumulativeCPUResourceLimitExitCount (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The number of times the system terminated the app from the background for using too much CPU time.

> Use [highCPUTerminationCount](../backgroundterminationmetric/highcputerminationcount.md) instead.

## Declaration

```swift
var cumulativeCPUResourceLimitExitCount: Int { get }
```

## See Also

### Reading the System Termination Count

- [cumulativeAppWatchdogExitCount](cumulativeappwatchdogexitcount.md): Deprecated. The number of times the system watchdog terminated the app from the background.
- [cumulativeMemoryResourceLimitExitCount](cumulativememoryresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the background for using too much memory.
- [cumulativeMemoryPressureExitCount](cumulativememorypressureexitcount.md): Deprecated. The number of times the system terminated the app from the background to free up memory.
- [cumulativeSuspendedWithLockedFileExitCount](cumulativesuspendedwithlockedfileexitcount.md): Deprecated. The number of times the system terminated the app from the background while being suspended and having file locks.

# cumulativeCPUResourceLimitExitCount (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The number of times the system terminated the app from the background for using too much CPU time.

> Use [highCPUTerminationCount](../backgroundterminationmetric/highcputerminationcount.md) instead.

## Declaration

```objectivec
@property (readonly) NSUInteger cumulativeCPUResourceLimitExitCount;
```

## See Also

### Reading the System Termination Count

- [cumulativeAppWatchdogExitCount](cumulativeappwatchdogexitcount.md): Deprecated. The number of times the system watchdog terminated the app from the background.
- [cumulativeMemoryResourceLimitExitCount](cumulativememoryresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the background for using too much memory.
- [cumulativeMemoryPressureExitCount](cumulativememorypressureexitcount.md): Deprecated. The number of times the system terminated the app from the background to free up memory.
- [cumulativeSuspendedWithLockedFileExitCount](cumulativesuspendedwithlockedfileexitcount.md): Deprecated. The number of times the system terminated the app from the background while being suspended and having file locks.
