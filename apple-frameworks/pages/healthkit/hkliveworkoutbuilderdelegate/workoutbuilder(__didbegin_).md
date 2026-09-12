> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkliveworkoutbuilderdelegate/workoutbuilder(_:didbegin:)](https://developer.apple.com/documentation/healthkit/hkliveworkoutbuilderdelegate/workoutbuilder(_:didbegin:))

# workoutBuilder(\_:didBegin:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+ · watchOS 9.0+

Tells the delegate that a new workout activity has started.

## Declaration

```swift
optional func workoutBuilder(_ workoutBuilder: HKLiveWorkoutBuilder, didBegin workoutActivity: HKWorkoutActivity)
```

## Parameters

- `workoutBuilder`: The workout builder that received the new activity.
- `workoutActivity`: A new workout activity, currently in progress.

## See Also

### Receiving activity updates

- [workoutBuilder(\_:didEnd:)](workoutbuilder%28__didend_%29.md): Tells the delegate that the current workout activity has ended.

# workoutBuilder:didBeginActivity: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 9.0+

Tells the delegate that a new workout activity has started.

## Declaration

```objectivec
- (void) workoutBuilder:(HKLiveWorkoutBuilder *) workoutBuilder didBeginActivity:(HKWorkoutActivity *) workoutActivity;
```

## Parameters

- `workoutBuilder`: The workout builder that received the new activity.
- `workoutActivity`: A new workout activity, currently in progress.

## See Also

### Receiving activity updates

- [workoutBuilder:didEndActivity:](workoutbuilder%28__didend_%29.md): Tells the delegate that the current workout activity has ended.
