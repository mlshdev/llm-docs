> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkliveworkoutbuilderdelegate/workoutbuilder(_:didend:)](https://developer.apple.com/documentation/healthkit/hkliveworkoutbuilderdelegate/workoutbuilder(_:didend:))

# workoutBuilder(\_:didEnd:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+ · watchOS 9.0+

Tells the delegate that the current workout activity has ended.

## Declaration

```swift
optional func workoutBuilder(_ workoutBuilder: HKLiveWorkoutBuilder, didEnd workoutActivity: HKWorkoutActivity)
```

## Parameters

- `workoutBuilder`: The workout builder that received the new activity.
- `workoutActivity`: The workout activity that just ended.

## See Also

### Receiving activity updates

- [workoutBuilder(\_:didBegin:)](workoutbuilder%28__didbegin_%29.md): Tells the delegate that a new workout activity has started.

# workoutBuilder:didEndActivity: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 9.0+

Tells the delegate that the current workout activity has ended.

## Declaration

```objectivec
- (void) workoutBuilder:(HKLiveWorkoutBuilder *) workoutBuilder didEndActivity:(HKWorkoutActivity *) workoutActivity;
```

## Parameters

- `workoutBuilder`: The workout builder that received the new activity.
- `workoutActivity`: The workout activity that just ended.

## See Also

### Receiving activity updates

- [workoutBuilder:didBeginActivity:](workoutbuilder%28__didbegin_%29.md): Tells the delegate that a new workout activity has started.
