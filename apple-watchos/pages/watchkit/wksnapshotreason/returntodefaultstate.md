> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wksnapshotreason/returntodefaultstate](https://developer.apple.com/documentation/watchkit/wksnapshotreason/returntodefaultstate)

# WKSnapshotReason.returnToDefaultState (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 4.0+

It has been more than an hour since the user’s last interaction with the app; the app’s snapshot should return to its default state.

## Declaration

```swift
case returnToDefaultState
```

## See Also

### Enumeration Cases

- [WKSnapshotReason.appBackgrounded](appbackgrounded.md): The app transitioned from the foreground to the background.
- [WKSnapshotReason.appScheduled](appscheduled.md): The app scheduled this snapshot.
- [WKSnapshotReason.complicationUpdate](complicationupdate.md): The app updated the complication timeline.
- [WKSnapshotReason.prelaunch](prelaunch.md): The system needs a snapshot for the dock, but the app has not been launched yet.

# WKSnapshotReasonReturnToDefaultState (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 4.0+

It has been more than an hour since the user’s last interaction with the app; the app’s snapshot should return to its default state.

## Declaration

```objectivec
WKSnapshotReasonReturnToDefaultState
```

## See Also

### Enumeration Cases

- [WKSnapshotReasonAppBackgrounded](appbackgrounded.md): The app transitioned from the foreground to the background.
- [WKSnapshotReasonAppScheduled](appscheduled.md): The app scheduled this snapshot.
- [WKSnapshotReasonComplicationUpdate](complicationupdate.md): The app updated the complication timeline.
- [WKSnapshotReasonPrelaunch](prelaunch.md): The system needs a snapshot for the dock, but the app has not been launched yet.
