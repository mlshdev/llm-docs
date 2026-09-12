> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplicationdelegate/handleactiveworkoutrecovery()](https://developer.apple.com/documentation/watchkit/wkapplicationdelegate/handleactiveworkoutrecovery())

# handleActiveWorkoutRecovery() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+

Tells the delegate when the app relaunches after crashing during an active workout session.

## Declaration

```swift
optional func handleActiveWorkoutRecovery()
```

<a id="Discussion"></a>

## Discussion

To recover from a crash, call your HealthKit store’s [recoverActiveWorkoutSession(completion:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/recoveractiveworkoutsession%28completion:%29) method to receive a new workout session. You can then set up your data source and delegate as described in [Running workout sessions](https://developer.apple.com/documentation/healthkit/running-workout-sessions).

## See Also

### Related Documentation

- [recoverActiveWorkoutSession(completion:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/recoveractiveworkoutsession%28completion:%29): Recovers an active workout session.

### Handling a workout session

- [handle(\_:)](handle%28__%29-1pfoc.md): Tells the delegate that the user started a workout session on the paired iPhone.

# handleActiveWorkoutRecovery (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+

Tells the delegate when the app relaunches after crashing during an active workout session.

## Declaration

```objectivec
- (void) handleActiveWorkoutRecovery;
```

<a id="Discussion"></a>

## Discussion

To recover from a crash, call your HealthKit store’s [recoverActiveWorkoutSessionWithCompletion:](https://developer.apple.com/documentation/healthkit/hkhealthstore/recoveractiveworkoutsession%28completion:%29) method to receive a new workout session. You can then set up your data source and delegate as described in [Running workout sessions](https://developer.apple.com/documentation/healthkit/running-workout-sessions).

## See Also

### Related Documentation

- [recoverActiveWorkoutSessionWithCompletion:](https://developer.apple.com/documentation/healthkit/hkhealthstore/recoveractiveworkoutsession%28completion:%29): Recovers an active workout session.

### Handling a workout session

- [handleWorkoutConfiguration:](handle%28__%29-1pfoc.md): Tells the delegate that the user started a workout session on the paired iPhone.
