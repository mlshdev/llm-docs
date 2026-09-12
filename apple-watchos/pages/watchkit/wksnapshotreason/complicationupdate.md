> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wksnapshotreason/complicationupdate](https://developer.apple.com/documentation/watchkit/wksnapshotreason/complicationupdate)

# WKSnapshotReason.complicationUpdate (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 4.0+

The app updated the complication timeline.

## Declaration

```swift
case complicationUpdate
```

<a id="Discussion"></a>

## Discussion

These snapshot refresh tasks are only triggered when the WatchKit extension has a complication on the current watch face.

## See Also

### Enumeration Cases

- [WKSnapshotReason.appBackgrounded](appbackgrounded.md): The app transitioned from the foreground to the background.
- [WKSnapshotReason.appScheduled](appscheduled.md): The app scheduled this snapshot.
- [WKSnapshotReason.prelaunch](prelaunch.md): The system needs a snapshot for the dock, but the app has not been launched yet.
- [WKSnapshotReason.returnToDefaultState](returntodefaultstate.md): It has been more than an hour since the user’s last interaction with the app; the app’s snapshot should return to its default state.

# WKSnapshotReasonComplicationUpdate (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 4.0+

The app updated the complication timeline.

## Declaration

```objectivec
WKSnapshotReasonComplicationUpdate
```

<a id="Discussion"></a>

## Discussion

These snapshot refresh tasks are only triggered when the WatchKit extension has a complication on the current watch face.

## See Also

### Enumeration Cases

- [WKSnapshotReasonAppBackgrounded](appbackgrounded.md): The app transitioned from the foreground to the background.
- [WKSnapshotReasonAppScheduled](appscheduled.md): The app scheduled this snapshot.
- [WKSnapshotReasonPrelaunch](prelaunch.md): The system needs a snapshot for the dock, but the app has not been launched yet.
- [WKSnapshotReasonReturnToDefaultState](returntodefaultstate.md): It has been more than an hour since the user’s last interaction with the app; the app’s snapshot should return to its default state.
