> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextension/schedulesnapshotrefresh(withpreferreddate:userinfo:scheduledcompletion:)](https://developer.apple.com/documentation/watchkit/wkextension/schedulesnapshotrefresh(withpreferreddate:userinfo:scheduledcompletion:))

# scheduleSnapshotRefresh(withPreferredDate:userInfo:scheduledCompletion:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Schedules a background task to refresh your app’s snapshot.

## Declaration

```swift
func scheduleSnapshotRefresh(withPreferredDate preferredFireDate: Date, userInfo: (any NSSecureCoding & NSObjectProtocol)?, scheduledCompletion: @escaping ((any Error)?) -> Void)
```

## Parameters

- `preferredFireDate`: The time of the next background snapshot refresh task. The system makes every effort to wake your app in the background at some point after the scheduled time, but the precise time is not guaranteed.

  If you pass the current date and time, the system immediately invalidates your existing snapshot, marking the snapshot as stale in the Dock. The system also schedules the earliest possible background snapshot refresh task.
- `userInfo`: A dictionary of custom information associated with the background snapshot refresh task. Pass `nil` if you do not need to associate any custom data with the task.
- `scheduledCompletion`: A block that is called by the system after the background refresh has completed. This block takes the following parameter:

  - **error**: If an error occurs, this parameter contains an object describing the error; otherwise, it is `nil`.

<a id="Discussion"></a>

## Discussion

Call this method to update your app’s snapshot in the background. When the task is triggered, the system wakes your app in the background and calls your extension delegate’s [handle(\_:)](../wkextensiondelegate/handle%28__%29-92ulv.md) method. Use this task to transition to the interface controller you want to display in the snapshot, and to update that controller’s user interface.

You can only schedule one background snapshot refresh task at a time. If a background snapshot refresh task has already been scheduled, scheduling a second task cancels the first. Additionally, background snapshot refresh tasks are budgeted. For more information, see [WKSnapshotRefreshBackgroundTask](../wksnapshotrefreshbackgroundtask.md).

The system automatically schedules background snapshot request tasks in the following situations:

- When your device starts up.
- When your app updates the complication timeline.
- When the user interacts with one of the apps notifications.
- When the app transitions from the foreground to the background.
- One hour after the user’s last interaction with the app. In this task.

These requests do not cancel or replace any of your scheduled requests.

# scheduleSnapshotRefreshWithPreferredDate:userInfo:scheduledCompletion: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Schedules a background task to refresh your app’s snapshot.

## Declaration

```objectivec
- (void) scheduleSnapshotRefreshWithPreferredDate:(NSDate *) preferredFireDate userInfo:(id<NSObject,NSSecureCoding>) userInfo scheduledCompletion:(void (^)(NSError *error)) scheduledCompletion;
```

## Parameters

- `preferredFireDate`: The time of the next background snapshot refresh task. The system makes every effort to wake your app in the background at some point after the scheduled time, but the precise time is not guaranteed.

  If you pass the current date and time, the system immediately invalidates your existing snapshot, marking the snapshot as stale in the Dock. The system also schedules the earliest possible background snapshot refresh task.
- `userInfo`: A dictionary of custom information associated with the background snapshot refresh task. Pass `nil` if you do not need to associate any custom data with the task.
- `scheduledCompletion`: A block that is called by the system after the background refresh has completed. This block takes the following parameter:

  - **error**: If an error occurs, this parameter contains an object describing the error; otherwise, it is `nil`.

<a id="Discussion"></a>

## Discussion

Call this method to update your app’s snapshot in the background. When the task is triggered, the system wakes your app in the background and calls your extension delegate’s [handleBackgroundTasks:](../wkextensiondelegate/handle%28__%29-92ulv.md) method. Use this task to transition to the interface controller you want to display in the snapshot, and to update that controller’s user interface.

You can only schedule one background snapshot refresh task at a time. If a background snapshot refresh task has already been scheduled, scheduling a second task cancels the first. Additionally, background snapshot refresh tasks are budgeted. For more information, see [WKSnapshotRefreshBackgroundTask](../wksnapshotrefreshbackgroundtask.md).

The system automatically schedules background snapshot request tasks in the following situations:

- When your device starts up.
- When your app updates the complication timeline.
- When the user interacts with one of the apps notifications.
- When the app transitions from the foreground to the background.
- One hour after the user’s last interaction with the app. In this task.

These requests do not cancel or replace any of your scheduled requests.
