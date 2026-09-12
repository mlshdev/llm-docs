> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxbackgroundexitdata/cumulativeappwatchdogexitcount](https://developer.apple.com/documentation/metrickit/mxbackgroundexitdata/cumulativeappwatchdogexitcount)

# cumulativeAppWatchdogExitCount (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The number of times the system watchdog terminated the app from the background.

> Use [watchdogTerminationCount](../backgroundterminationmetric/watchdogterminationcount.md) instead.

## Declaration

```swift
var cumulativeAppWatchdogExitCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

The most common reasons the system watchdog terminates an app are taking too long to:

- Launch
- Terminate
- Respond to system events

## See Also

### Reading the System Termination Count

- [cumulativeCPUResourceLimitExitCount](cumulativecpuresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the background for using too much CPU time.
- [cumulativeMemoryResourceLimitExitCount](cumulativememoryresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the background for using too much memory.
- [cumulativeMemoryPressureExitCount](cumulativememorypressureexitcount.md): Deprecated. The number of times the system terminated the app from the background to free up memory.
- [cumulativeSuspendedWithLockedFileExitCount](cumulativesuspendedwithlockedfileexitcount.md): Deprecated. The number of times the system terminated the app from the background while being suspended and having file locks.

# cumulativeAppWatchdogExitCount (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The number of times the system watchdog terminated the app from the background.

> Use [watchdogTerminationCount](../backgroundterminationmetric/watchdogterminationcount.md) instead.

## Declaration

```objectivec
@property (readonly) NSUInteger cumulativeAppWatchdogExitCount;
```

<a id="Discussion"></a>

## Discussion

The most common reasons the system watchdog terminates an app are taking too long to:

- Launch
- Terminate
- Respond to system events

## See Also

### Reading the System Termination Count

- [cumulativeCPUResourceLimitExitCount](cumulativecpuresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the background for using too much CPU time.
- [cumulativeMemoryResourceLimitExitCount](cumulativememoryresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the background for using too much memory.
- [cumulativeMemoryPressureExitCount](cumulativememorypressureexitcount.md): Deprecated. The number of times the system terminated the app from the background to free up memory.
- [cumulativeSuspendedWithLockedFileExitCount](cumulativesuspendedwithlockedfileexitcount.md): Deprecated. The number of times the system terminated the app from the background while being suspended and having file locks.
