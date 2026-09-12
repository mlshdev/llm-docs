> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/activitymovemode()](https://developer.apple.com/documentation/healthkit/hkhealthstore/activitymovemode())

# activityMoveMode() (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Returns the activity move mode for the current user.

## Declaration

```swift
func activityMoveMode() throws -> HKActivityMoveModeObject
```

## See Also

### Accessing the move mode

- [HKUserPreferencesDidChange](../../foundation/nsnotification/name-swift.struct/hkuserpreferencesdidchange.md): Notifies observers whenever the user changes his or her preferred units.

# activityMoveModeWithError: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Returns the activity move mode for the current user.

## Declaration

```objectivec
- (HKActivityMoveModeObject *) activityMoveModeWithError:(NSError **) error;
```

## See Also

### Accessing the move mode

- [HKUserPreferencesDidChangeNotification](../hkuserpreferencesdidchangenotification.md): Notifies observers whenever the user changes his or her preferred units.
