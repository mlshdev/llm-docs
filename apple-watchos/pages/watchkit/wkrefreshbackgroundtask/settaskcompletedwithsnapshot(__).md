> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkrefreshbackgroundtask/settaskcompletedwithsnapshot(_:)](https://developer.apple.com/documentation/watchkit/wkrefreshbackgroundtask/settaskcompletedwithsnapshot(_:))

# setTaskCompletedWithSnapshot(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 4.0+

Marks the task as complete and indicates whether the system should take a new snapshot of the app.

## Declaration

```swift
func setTaskCompletedWithSnapshot(_ refreshSnapshot: Bool)
```

## Parameters

- `refreshSnapshot`: A Boolean value that indicates whether the system should take a new snapshot of the app.

## Mentioned In

- [Using background tasks](../using-background-tasks.md)
- [Preparing to take your watchOS app’s snapshot](../preparing-to-take-your-watchos-app-s-snapshot.md)

<a id="Discussion"></a>

## Discussion

Call this method as soon as a nonsnapshot background task (any [WKRefreshBackgroundTask](../wkrefreshbackgroundtask.md) subclass except the [WKSnapshotRefreshBackgroundTask](../wksnapshotrefreshbackgroundtask.md) class) is complete.

To update the app’s snapshot in response to the current task, pass [true](https://developer.apple.com/documentation/swift/true), and the system schedules an immediate snapshot. This request counts against the standard snapshot budget and overwrites any requests made using the [scheduleSnapshotRefresh(withPreferredDate:userInfo:scheduledCompletion:)](../wkextension/schedulesnapshotrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md) method. As with all snapshots, your app receives a [WKSnapshotRefreshBackgroundTask](../wksnapshotrefreshbackgroundtask.md) before the snapshot is taken.

The system provides your extension with a limited amount of time (on the order of seconds) to finish this task. If you do not call [setTaskCompletedWithSnapshot(\_:)](settaskcompletedwithsnapshot%28__%29.md) on the task, the system continues to run in the background until all available time is consumed, wasting battery power.

The system suspends the extension as soon as all background tasks are complete.

When completing a snapshot background task, you generally call the [setTaskCompleted(restoredDefaultState:estimatedSnapshotExpiration:userInfo:)](../wksnapshotrefreshbackgroundtask/settaskcompleted%28restoreddefaultstate_estimatedsnapshotexpiration_userinfo_%29.md)method and explicitly set the date for the next snapshot. You can call [setTaskCompletedWithSnapshot(\_:)](settaskcompletedwithsnapshot%28__%29.md) as a simpler alternative. If you pass [true](https://developer.apple.com/documentation/swift/true), the system schedules a new snapshot task in one hour. If you pass [false](https://developer.apple.com/documentation/swift/false), no snapshot is scheduled.

## See Also

### Completing the background task

- [expirationHandler](expirationhandler.md): A block that the system calls when the available runtime for a background task is about to expire.
- [setTaskCompleted()](settaskcompleted%28%29.md): Deprecated. Marks the task as complete.

# setTaskCompletedWithSnapshot: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 4.0+

Marks the task as complete and indicates whether the system should take a new snapshot of the app.

## Declaration

```objectivec
- (void) setTaskCompletedWithSnapshot:(BOOL) refreshSnapshot;
```

## Parameters

- `refreshSnapshot`: A Boolean value that indicates whether the system should take a new snapshot of the app.

## Mentioned In

- [Using background tasks](../using-background-tasks.md)
- [Preparing to take your watchOS app’s snapshot](../preparing-to-take-your-watchos-app-s-snapshot.md)

<a id="Discussion"></a>

## Discussion

Call this method as soon as a nonsnapshot background task (any [WKRefreshBackgroundTask](../wkrefreshbackgroundtask.md) subclass except the [WKSnapshotRefreshBackgroundTask](../wksnapshotrefreshbackgroundtask.md) class) is complete.

To update the app’s snapshot in response to the current task, pass [true](https://developer.apple.com/documentation/swift/true), and the system schedules an immediate snapshot. This request counts against the standard snapshot budget and overwrites any requests made using the [scheduleSnapshotRefreshWithPreferredDate:userInfo:scheduledCompletion:](../wkextension/schedulesnapshotrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md) method. As with all snapshots, your app receives a [WKSnapshotRefreshBackgroundTask](../wksnapshotrefreshbackgroundtask.md) before the snapshot is taken.

The system provides your extension with a limited amount of time (on the order of seconds) to finish this task. If you do not call [setTaskCompletedWithSnapshot:](settaskcompletedwithsnapshot%28__%29.md) on the task, the system continues to run in the background until all available time is consumed, wasting battery power.

The system suspends the extension as soon as all background tasks are complete.

When completing a snapshot background task, you generally call the [setTaskCompletedWithDefaultStateRestored:estimatedSnapshotExpiration:userInfo:](../wksnapshotrefreshbackgroundtask/settaskcompleted%28restoreddefaultstate_estimatedsnapshotexpiration_userinfo_%29.md)method and explicitly set the date for the next snapshot. You can call [setTaskCompletedWithSnapshot:](settaskcompletedwithsnapshot%28__%29.md) as a simpler alternative. If you pass [true](https://developer.apple.com/documentation/swift/true), the system schedules a new snapshot task in one hour. If you pass [false](https://developer.apple.com/documentation/swift/false), no snapshot is scheduled.

## See Also

### Completing the background task

- [expirationHandler](expirationhandler.md): A block that the system calls when the available runtime for a background task is about to expire.
- [setTaskCompleted](settaskcompleted%28%29.md): Deprecated. Marks the task as complete.
