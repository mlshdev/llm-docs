> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wksnapshotreason](https://developer.apple.com/documentation/watchkit/wksnapshotreason)

# WKSnapshotReason (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 4.0+

The reason for a background snapshot task.

## Declaration

```swift
enum WKSnapshotReason
```

## Topics

### Enumeration Cases

- [WKSnapshotReason.appBackgrounded](wksnapshotreason/appbackgrounded.md): The app transitioned from the foreground to the background.
- [WKSnapshotReason.appScheduled](wksnapshotreason/appscheduled.md): The app scheduled this snapshot.
- [WKSnapshotReason.complicationUpdate](wksnapshotreason/complicationupdate.md): The app updated the complication timeline.
- [WKSnapshotReason.prelaunch](wksnapshotreason/prelaunch.md): The system needs a snapshot for the dock, but the app has not been launched yet.
- [WKSnapshotReason.returnToDefaultState](wksnapshotreason/returntodefaultstate.md): It has been more than an hour since the user’s last interaction with the app; the app’s snapshot should return to its default state.

### Initializers

- [init(rawValue:)](wksnapshotreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Instance properties

- [reasonForSnapshot](wksnapshotrefreshbackgroundtask/reasonforsnapshot.md): The reason for taking the upcoming snapshot.
- [returnToDefaultState](wksnapshotrefreshbackgroundtask/returntodefaultstate.md): Deprecated. A Boolean value indicating that the app should return to its default state.

# WKSnapshotReason (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 4.0+

The reason for a background snapshot task.

## Declaration

```objectivec
enum WKSnapshotReason : NSInteger;
```

## Topics

### Enumeration Cases

- [WKSnapshotReasonAppBackgrounded](wksnapshotreason/appbackgrounded.md): The app transitioned from the foreground to the background.
- [WKSnapshotReasonAppScheduled](wksnapshotreason/appscheduled.md): The app scheduled this snapshot.
- [WKSnapshotReasonComplicationUpdate](wksnapshotreason/complicationupdate.md): The app updated the complication timeline.
- [WKSnapshotReasonPrelaunch](wksnapshotreason/prelaunch.md): The system needs a snapshot for the dock, but the app has not been launched yet.
- [WKSnapshotReasonReturnToDefaultState](wksnapshotreason/returntodefaultstate.md): It has been more than an hour since the user’s last interaction with the app; the app’s snapshot should return to its default state.

## See Also

### Instance properties

- [reasonForSnapshot](wksnapshotrefreshbackgroundtask/reasonforsnapshot.md): The reason for taking the upcoming snapshot.
- [returnToDefaultState](wksnapshotrefreshbackgroundtask/returntodefaultstate.md): Deprecated. A Boolean value indicating that the app should return to its default state.
