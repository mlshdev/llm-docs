> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtaskscheduler/error/code/toomanypendingtaskrequests](https://developer.apple.com/documentation/backgroundtasks/bgtaskscheduler/error/code/toomanypendingtaskrequests)

# BGTaskScheduler.Error.Code.tooManyPendingTaskRequests (Swift)

**Framework:** Background Tasks  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A task scheduling error that indicates there are too many pending tasks of the type requested.

## Declaration

```swift
case tooManyPendingTaskRequests
```

<a id="Discussion"></a>

## Discussion

Try canceling some existing task requests and then resubmit the request that failed.

## See Also

### Identifying an error

- [BGTaskScheduler.Error.Code.notPermitted](notpermitted.md): A task scheduling error that indicates the app isn’t permitted to launch the task.
- [BGTaskScheduler.Error.Code.unavailable](unavailable.md): A task scheduling error that indicates the app or extension can’t schedule background work.
- [BGTaskScheduler.Error.Code.immediateRunIneligible](immediaterunineligible.md): A task scheduling error that indicates a task request didn’t run immediately due to system conditions.

# BGTaskSchedulerErrorCodeTooManyPendingTaskRequests (Objective-C)

**Framework:** Background Tasks  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A task scheduling error that indicates there are too many pending tasks of the type requested.

## Declaration

```objectivec
BGTaskSchedulerErrorCodeTooManyPendingTaskRequests
```

<a id="Discussion"></a>

## Discussion

Try canceling some existing task requests and then resubmit the request that failed.

## See Also

### Identifying an error

- [BGTaskSchedulerErrorCodeNotPermitted](notpermitted.md): A task scheduling error that indicates the app isn’t permitted to launch the task.
- [BGTaskSchedulerErrorCodeUnavailable](unavailable.md): A task scheduling error that indicates the app or extension can’t schedule background work.
- [BGTaskSchedulerErrorCodeImmediateRunIneligible](immediaterunineligible.md): A task scheduling error that indicates a task request didn’t run immediately due to system conditions.
