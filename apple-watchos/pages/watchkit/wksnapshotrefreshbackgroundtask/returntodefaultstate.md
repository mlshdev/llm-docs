> Snapshot-pinned source payload for Apple watchOS snapshot-4bff84466040; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wksnapshotrefreshbackgroundtask/returntodefaultstate

# returnToDefaultState (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+ (deprecated in 4.0)

A Boolean value indicating that the app should return to its default state.

> Use [reasonForSnapshot](reasonforsnapshot.md) instead.

## Declaration

```swift
var returnToDefaultState: Bool { get }
```

## See Also

### Instance properties

- [reasonForSnapshot](reasonforsnapshot.md): The reason for taking the upcoming snapshot.
- [WKSnapshotReason](../wksnapshotreason.md): The reason for a background snapshot task.

# returnToDefaultState (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+ (deprecated in 4.0)

A Boolean value indicating that the app should return to its default state.

> Use [reasonForSnapshot](reasonforsnapshot.md) instead.

## Declaration

```objectivec
@property (readonly) BOOL returnToDefaultState;
```

## See Also

### Instance properties

- [reasonForSnapshot](reasonforsnapshot.md): The reason for taking the upcoming snapshot.
- [WKSnapshotReason](../wksnapshotreason.md): The reason for a background snapshot task.
