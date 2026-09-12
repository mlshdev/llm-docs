> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wksnapshotreason/appbackgrounded](https://developer.apple.com/documentation/watchkit/wksnapshotreason/appbackgrounded)

# WKSnapshotReason.appBackgrounded (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 4.0+

The app transitioned from the foreground to the background.

## Declaration

```swift
case appBackgrounded
```

## See Also

### Enumeration Cases

- [WKSnapshotReason.appScheduled](appscheduled.md): The app scheduled this snapshot.
- [WKSnapshotReason.complicationUpdate](complicationupdate.md): The app updated the complication timeline.
- [WKSnapshotReason.prelaunch](prelaunch.md): The system needs a snapshot for the dock, but the app has not been launched yet.
- [WKSnapshotReason.returnToDefaultState](returntodefaultstate.md): It has been more than an hour since the user’s last interaction with the app; the app’s snapshot should return to its default state.

# WKSnapshotReasonAppBackgrounded (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 4.0+

The app transitioned from the foreground to the background.

## Declaration

```objectivec
WKSnapshotReasonAppBackgrounded
```

## See Also

### Enumeration Cases

- [WKSnapshotReasonAppScheduled](appscheduled.md): The app scheduled this snapshot.
- [WKSnapshotReasonComplicationUpdate](complicationupdate.md): The app updated the complication timeline.
- [WKSnapshotReasonPrelaunch](prelaunch.md): The system needs a snapshot for the dock, but the app has not been launched yet.
- [WKSnapshotReasonReturnToDefaultState](returntodefaultstate.md): It has been more than an hour since the user’s last interaction with the app; the app’s snapshot should return to its default state.
