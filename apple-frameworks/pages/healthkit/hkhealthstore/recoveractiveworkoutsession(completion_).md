> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/recoveractiveworkoutsession(completion:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/recoveractiveworkoutsession(completion:))

# recoverActiveWorkoutSession(completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · watchOS 5.0+

Recovers an active workout session.

## Declaration

```swift
func recoverActiveWorkoutSession(completion: @escaping @Sendable (HKWorkoutSession?, (any Error)?) -> Void)
```

```swift
func recoverActiveWorkoutSession() async throws -> HKWorkoutSession?
```

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)

<a id="Discussion"></a>

## Discussion

If your app crashes during an active workout session, the system calls your extension delegate’s [handleActiveWorkoutRecovery()](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handleactiveworkoutrecovery%28%29) method the next time your app launches. To recover the workout session, call [recoverActiveWorkoutSession(completion:)](recoveractiveworkoutsession%28completion_%29.md) from your extension delegate’s [handleActiveWorkoutRecovery()](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handleactiveworkoutrecovery%28%29) method. HealthKit then attempts to restore the previous workout session, returning either a new session object or an error to the completion block.

As soon as you receive the session object, you must access its builder and set up your data source and delegates again, as described in [Start a session](../running-workout-sessions.md#Start-a-session).

## See Also

### Managing workouts

- [splitTotalEnergy(\_:start:end:resultsHandler:)](splittotalenergy%28__start_end_resultshandler_%29.md): Deprecated. Calculates the active and resting energy burned based on the total energy burned over the given duration.

# recoverActiveWorkoutSessionWithCompletion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · watchOS 5.0+

Recovers an active workout session.

## Declaration

```objectivec
- (void) recoverActiveWorkoutSessionWithCompletion:(void (^)(HKWorkoutSession *session, NSError *error)) completion;
```

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)

<a id="Discussion"></a>

## Discussion

If your app crashes during an active workout session, the system calls your extension delegate’s [handleActiveWorkoutRecovery](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handleactiveworkoutrecovery%28%29) method the next time your app launches. To recover the workout session, call [recoverActiveWorkoutSessionWithCompletion:](recoveractiveworkoutsession%28completion_%29.md) from your extension delegate’s [handleActiveWorkoutRecovery](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handleactiveworkoutrecovery%28%29) method. HealthKit then attempts to restore the previous workout session, returning either a new session object or an error to the completion block.

As soon as you receive the session object, you must access its builder and set up your data source and delegates again, as described in [Start a session](../running-workout-sessions.md#Start-a-session).

## See Also

### Managing workouts

- [splitTotalEnergy:startDate:endDate:resultsHandler:](splittotalenergy%28__start_end_resultshandler_%29.md): Deprecated. Calculates the active and resting energy burned based on the total energy burned over the given duration.
