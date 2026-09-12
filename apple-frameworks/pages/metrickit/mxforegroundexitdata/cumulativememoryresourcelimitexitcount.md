> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxforegroundexitdata/cumulativememoryresourcelimitexitcount](https://developer.apple.com/documentation/metrickit/mxforegroundexitdata/cumulativememoryresourcelimitexitcount)

# cumulativeMemoryResourceLimitExitCount (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The number of times the system terminated the app from the foreground for using too much memory.

> Use [memoryLimitTerminationCount](../foregroundterminationmetric/memorylimitterminationcount.md) instead.

## Declaration

```swift
var cumulativeMemoryResourceLimitExitCount: Int { get }
```

## See Also

### Reading the System Termination Count

- [cumulativeAppWatchdogExitCount](cumulativeappwatchdogexitcount.md): Deprecated. The number of times the system watchdog terminated the app from the foreground.

# cumulativeMemoryResourceLimitExitCount (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The number of times the system terminated the app from the foreground for using too much memory.

> Use [memoryLimitTerminationCount](../foregroundterminationmetric/memorylimitterminationcount.md) instead.

## Declaration

```objectivec
@property (readonly) NSUInteger cumulativeMemoryResourceLimitExitCount;
```

## See Also

### Reading the System Termination Count

- [cumulativeAppWatchdogExitCount](cumulativeappwatchdogexitcount.md): Deprecated. The number of times the system watchdog terminated the app from the foreground.
