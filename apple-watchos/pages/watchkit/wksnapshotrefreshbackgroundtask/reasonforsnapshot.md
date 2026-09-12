> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wksnapshotrefreshbackgroundtask/reasonforsnapshot](https://developer.apple.com/documentation/watchkit/wksnapshotrefreshbackgroundtask/reasonforsnapshot)

# reasonForSnapshot (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 4.0+

The reason for taking the upcoming snapshot.

## Declaration

```swift
var reasonForSnapshot: WKSnapshotReason { get }
```

<a id="Discussion"></a>

## Discussion

You can use this property to change your application’s appearance before a snapshot is taken. For example, if the property contains an [WKSnapshotReason.appBackgrounded](../wksnapshotreason/appbackgrounded.md) value, you’d probably want to capture the app’s current state, and no changes are necessary. However, if the property contains a [WKSnapshotReason.returnToDefaultState](../wksnapshotreason/returntodefaultstate.md) value, you may want to navigate back to the root view controller before taking the snapshot.

For a list of possible reasons for taking the snapshot, see [WKSnapshotReason](../wksnapshotreason.md).

## See Also

### Instance properties

- [WKSnapshotReason](../wksnapshotreason.md): The reason for a background snapshot task.
- [returnToDefaultState](returntodefaultstate.md): Deprecated. A Boolean value indicating that the app should return to its default state.

# reasonForSnapshot (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 4.0+

The reason for taking the upcoming snapshot.

## Declaration

```objectivec
@property (readonly) WKSnapshotReason reasonForSnapshot;
```

<a id="Discussion"></a>

## Discussion

You can use this property to change your application’s appearance before a snapshot is taken. For example, if the property contains an [WKSnapshotReasonAppBackgrounded](../wksnapshotreason/appbackgrounded.md) value, you’d probably want to capture the app’s current state, and no changes are necessary. However, if the property contains a [WKSnapshotReasonReturnToDefaultState](../wksnapshotreason/returntodefaultstate.md) value, you may want to navigate back to the root view controller before taking the snapshot.

For a list of possible reasons for taking the snapshot, see [WKSnapshotReason](../wksnapshotreason.md).

## See Also

### Instance properties

- [WKSnapshotReason](../wksnapshotreason.md): The reason for a background snapshot task.
- [returnToDefaultState](returntodefaultstate.md): Deprecated. A Boolean value indicating that the app should return to its default state.
