> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxbackgroundexitdata/cumulativesuspendedwithlockedfileexitcount](https://developer.apple.com/documentation/metrickit/mxbackgroundexitdata/cumulativesuspendedwithlockedfileexitcount)

# cumulativeSuspendedWithLockedFileExitCount (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The number of times the system terminated the app from the background while being suspended and having file locks.

> Use [fileLockTerminationCount](../backgroundterminationmetric/filelockterminationcount.md) instead.

## Declaration

```swift
var cumulativeSuspendedWithLockedFileExitCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

A common cause for this kind of exit is writing to an SQLite database as the system is suspending the app. For information on what to do with open files and databases when transitioning to the background, see [Preparing your UI to run in the background](../../uikit/preparing-your-ui-to-run-in-the-background.md).

## See Also

### Reading the System Termination Count

- [cumulativeAppWatchdogExitCount](cumulativeappwatchdogexitcount.md): Deprecated. The number of times the system watchdog terminated the app from the background.
- [cumulativeCPUResourceLimitExitCount](cumulativecpuresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the background for using too much CPU time.
- [cumulativeMemoryResourceLimitExitCount](cumulativememoryresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the background for using too much memory.
- [cumulativeMemoryPressureExitCount](cumulativememorypressureexitcount.md): Deprecated. The number of times the system terminated the app from the background to free up memory.

# cumulativeSuspendedWithLockedFileExitCount (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The number of times the system terminated the app from the background while being suspended and having file locks.

> Use [fileLockTerminationCount](../backgroundterminationmetric/filelockterminationcount.md) instead.

## Declaration

```objectivec
@property (readonly) NSUInteger cumulativeSuspendedWithLockedFileExitCount;
```

<a id="Discussion"></a>

## Discussion

A common cause for this kind of exit is writing to an SQLite database as the system is suspending the app. For information on what to do with open files and databases when transitioning to the background, see [Preparing your UI to run in the background](../../uikit/preparing-your-ui-to-run-in-the-background.md).

## See Also

### Reading the System Termination Count

- [cumulativeAppWatchdogExitCount](cumulativeappwatchdogexitcount.md): Deprecated. The number of times the system watchdog terminated the app from the background.
- [cumulativeCPUResourceLimitExitCount](cumulativecpuresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the background for using too much CPU time.
- [cumulativeMemoryResourceLimitExitCount](cumulativememoryresourcelimitexitcount.md): Deprecated. The number of times the system terminated the app from the background for using too much memory.
- [cumulativeMemoryPressureExitCount](cumulativememorypressureexitcount.md): Deprecated. The number of times the system terminated the app from the background to free up memory.
