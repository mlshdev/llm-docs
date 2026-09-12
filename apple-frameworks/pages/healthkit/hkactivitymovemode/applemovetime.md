> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkactivitymovemode/applemovetime](https://developer.apple.com/documentation/healthkit/hkactivitymovemode/applemovetime)

# HKActivityMoveMode.appleMoveTime (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A value that indicates the Activity app’s Move ring measures Apple Move Time.

## Declaration

```swift
case appleMoveTime
```

<a id="Discussion"></a>

## Discussion

Move time measures every full minute where the watch detects the user actively moving. Apple Watch uses the accelerometer and gyroscopes to detect activities that involve full-body movements, like walking, running, or playing in the playground.

For younger users, the Activity app’s Move ring (and HealthKit’s related activity summary) can track move time instead of active energy burned:

- HealthKit automatically tracks move time for any users under 13 years old.
- Users 13 to 18 years old can choose whether to track move time or active calorie burn.
- All users over 18 years old track active calorie burn.

## See Also

### Move Modes

- [HKActivityMoveMode.activeEnergy](activeenergy.md): A value that indicates the Move ring measures active energy burned.

# HKActivityMoveModeAppleMoveTime (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A value that indicates the Activity app’s Move ring measures Apple Move Time.

## Declaration

```objectivec
HKActivityMoveModeAppleMoveTime
```

<a id="Discussion"></a>

## Discussion

Move time measures every full minute where the watch detects the user actively moving. Apple Watch uses the accelerometer and gyroscopes to detect activities that involve full-body movements, like walking, running, or playing in the playground.

For younger users, the Activity app’s Move ring (and HealthKit’s related activity summary) can track move time instead of active energy burned:

- HealthKit automatically tracks move time for any users under 13 years old.
- Users 13 to 18 years old can choose whether to track move time or active calorie burn.
- All users over 18 years old track active calorie burn.

## See Also

### Move Modes

- [HKActivityMoveModeActiveEnergy](activeenergy.md): A value that indicates the Move ring measures active energy burned.
