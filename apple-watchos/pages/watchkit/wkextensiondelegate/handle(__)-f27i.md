> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextensiondelegate/handle(_:)-f27i](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handle(_:)-f27i)

# handle(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+ (deprecated in 9.2)

Tells the delegate that the user started a workout session on the paired iPhone.

## Declaration

```swift
optional func handle(_ workoutConfiguration: HKWorkoutConfiguration)
```

## Parameters

- `workoutConfiguration`: The workout configuration data. You can use this information to start a workout session on the user’s Apple Watch.

<a id="Discussion"></a>

## Discussion

When your iPhone app starts a workout session using the HealthKit store’s `startWatchAppWithWorkoutConfiguration:completion:` method, the system launches or wakes the corresponding Watch app in the background and calls this method. Use this method to configure an [HKWorkoutSession](https://developer.apple.com/documentation/healthkit/hkworkoutsession) object in your Watch app, and then call [start(\_:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/start%28_:%29) to start the session.

## See Also

### Handling a workout session

- [handleActiveWorkoutRecovery()](handleactiveworkoutrecovery%28%29.md): Deprecated. Tells the delegate when the app relaunches after crashing during an active workout session.

# handleWorkoutConfiguration: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+ (deprecated in 9.2)

Tells the delegate that the user started a workout session on the paired iPhone.

## Declaration

```objectivec
- (void) handleWorkoutConfiguration:(HKWorkoutConfiguration *) workoutConfiguration;
```

## Parameters

- `workoutConfiguration`: The workout configuration data. You can use this information to start a workout session on the user’s Apple Watch.

<a id="Discussion"></a>

## Discussion

When your iPhone app starts a workout session using the HealthKit store’s `startWatchAppWithWorkoutConfiguration:completion:` method, the system launches or wakes the corresponding Watch app in the background and calls this method. Use this method to configure an [HKWorkoutSession](https://developer.apple.com/documentation/healthkit/hkworkoutsession) object in your Watch app, and then call [startWorkoutSession:](https://developer.apple.com/documentation/healthkit/hkhealthstore/start%28_:%29) to start the session.

## See Also

### Handling a workout session

- [handleActiveWorkoutRecovery](handleactiveworkoutrecovery%28%29.md): Deprecated. Tells the delegate when the app relaunches after crashing during an active workout session.
