> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundtasks/bgtaskscheduler/error/toomanypendingtaskrequests

# tooManyPendingTaskRequests

**Framework:** Background Tasks  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A task scheduling error that indicates there are too many pending tasks of the type requested.

## Declaration

```swift
static var tooManyPendingTaskRequests: BGTaskScheduler.Error.Code { get }
```

<a id="Discussion"></a>

## Discussion

Try canceling some existing task requests and then resubmit the request that failed.

## See Also

### Getting the error codes

- [BGTaskScheduler.Error.Code](code.md): An enumeration of the task scheduling errors.
- [notPermitted](notpermitted.md): A task scheduling error that indicates the app isn’t permitted to launch the task.
- [unavailable](unavailable.md): A task scheduling error that indicates the app or extension can’t schedule background work.
