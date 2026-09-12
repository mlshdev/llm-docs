> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintentresponsecode/failureongoingworkout](https://developer.apple.com/documentation/intents/instartworkoutintentresponsecode/failureongoingworkout)

# INStartWorkoutIntentResponseCode.failureOngoingWorkout (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates a workout is already in progress, so another can’t start.

## Declaration

```swift
case failureOngoingWorkout
```

<a id="Discussion"></a>

## Discussion

Use this code when the user is already in the middle of a workout.

## See Also

### Response State

- [INStartWorkoutIntentResponseCode.unspecified](unspecified.md): A response code that indicates an unknown state.
- [INStartWorkoutIntentResponseCode.ready](ready.md): A response code that indicates app readiness.
- [INStartWorkoutIntentResponseCode.continueInApp](continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INStartWorkoutIntentResponseCode.success](success.md): A response code that indicates your app succeeded.
- [INStartWorkoutIntentResponseCode.handleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INStartWorkoutIntentResponseCode.failure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INStartWorkoutIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INStartWorkoutIntentResponseCode.failureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

# INStartWorkoutIntentResponseCodeFailureOngoingWorkout (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates a workout is already in progress, so another can’t start.

## Declaration

```objectivec
INStartWorkoutIntentResponseCodeFailureOngoingWorkout
```

<a id="Discussion"></a>

## Discussion

Use this code when the user is already in the middle of a workout.

## See Also

### Response State

- [INStartWorkoutIntentResponseCodeUnspecified](unspecified.md): A response code that indicates an unknown state.
- [INStartWorkoutIntentResponseCodeReady](ready.md): A response code that indicates app readiness.
- [INStartWorkoutIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INStartWorkoutIntentResponseCodeSuccess](success.md): A response code that indicates your app succeeded.
- [INStartWorkoutIntentResponseCodeHandleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INStartWorkoutIntentResponseCodeFailure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INStartWorkoutIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INStartWorkoutIntentResponseCodeFailureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.
