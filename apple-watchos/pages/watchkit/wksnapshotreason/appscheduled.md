> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wksnapshotreason/appscheduled](https://developer.apple.com/documentation/watchkit/wksnapshotreason/appscheduled)

# WKSnapshotReason.appScheduled (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 4.0+

The app scheduled this snapshot.

## Declaration

```swift
case appScheduled
```

<a id="Discussion"></a>

## Discussion

You can schedule snapshots either by calling the [scheduleSnapshotRefresh(withPreferredDate:userInfo:scheduledCompletion:)](../wkextension/schedulesnapshotrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md) method, or—when completing a background task—by calling the [setTaskCompletedWithSnapshot(\_:)](../wkrefreshbackgroundtask/settaskcompletedwithsnapshot%28__%29.md) method and passing [true](https://developer.apple.com/documentation/swift/true).

These snapshot refresh tasks are only triggered when the watchOS app is in the dock.

## See Also

### Enumeration Cases

- [WKSnapshotReason.appBackgrounded](appbackgrounded.md): The app transitioned from the foreground to the background.
- [WKSnapshotReason.complicationUpdate](complicationupdate.md): The app updated the complication timeline.
- [WKSnapshotReason.prelaunch](prelaunch.md): The system needs a snapshot for the dock, but the app has not been launched yet.
- [WKSnapshotReason.returnToDefaultState](returntodefaultstate.md): It has been more than an hour since the user’s last interaction with the app; the app’s snapshot should return to its default state.

# WKSnapshotReasonAppScheduled (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 4.0+

The app scheduled this snapshot.

## Declaration

```objectivec
WKSnapshotReasonAppScheduled
```

<a id="Discussion"></a>

## Discussion

You can schedule snapshots either by calling the [scheduleSnapshotRefreshWithPreferredDate:userInfo:scheduledCompletion:](../wkextension/schedulesnapshotrefresh%28withpreferreddate_userinfo_scheduledcompletion_%29.md) method, or—when completing a background task—by calling the [setTaskCompletedWithSnapshot:](../wkrefreshbackgroundtask/settaskcompletedwithsnapshot%28__%29.md) method and passing [true](https://developer.apple.com/documentation/swift/true).

These snapshot refresh tasks are only triggered when the watchOS app is in the dock.

## See Also

### Enumeration Cases

- [WKSnapshotReasonAppBackgrounded](appbackgrounded.md): The app transitioned from the foreground to the background.
- [WKSnapshotReasonComplicationUpdate](complicationupdate.md): The app updated the complication timeline.
- [WKSnapshotReasonPrelaunch](prelaunch.md): The system needs a snapshot for the dock, but the app has not been launched yet.
- [WKSnapshotReasonReturnToDefaultState](returntodefaultstate.md): It has been more than an hour since the user’s last interaction with the app; the app’s snapshot should return to its default state.
