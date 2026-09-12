> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxbackgroundexitdata/cumulativebackgroundtaskassertiontimeoutexitcount](https://developer.apple.com/documentation/metrickit/mxbackgroundexitdata/cumulativebackgroundtaskassertiontimeoutexitcount)

# cumulativeBackgroundTaskAssertionTimeoutExitCount (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The number of times the system terminated the app from the background for exceeding the allocated time for a background task.

> Use [taskTimeoutTerminationCount](../backgroundterminationmetric/tasktimeoutterminationcount.md) instead.

## Declaration

```swift
var cumulativeBackgroundTaskAssertionTimeoutExitCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

This exit usually occurs when the app fails to call [endBackgroundTask(\_:)](../../uikit/uiapplication/endbackgroundtask%28__%29.md) as soon as a background task is complete.

# cumulativeBackgroundTaskAssertionTimeoutExitCount (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The number of times the system terminated the app from the background for exceeding the allocated time for a background task.

> Use [taskTimeoutTerminationCount](../backgroundterminationmetric/tasktimeoutterminationcount.md) instead.

## Declaration

```objectivec
@property (readonly) NSUInteger cumulativeBackgroundTaskAssertionTimeoutExitCount;
```

<a id="Discussion"></a>

## Discussion

This exit usually occurs when the app fails to call [endBackgroundTask:](../../uikit/uiapplication/endbackgroundtask%28__%29.md) as soon as a background task is complete.
