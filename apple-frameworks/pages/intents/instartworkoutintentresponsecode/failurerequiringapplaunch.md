> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/instartworkoutintentresponsecode/failurerequiringapplaunch)

# INStartWorkoutIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates the user must launch your app to start the workout.

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this code only when you can’t start the workout through SiriKit because of extenuating circumstances. For example, you might use this code if the user must log into your app before starting workouts and isn’t currently logged in. Don’t use this response code for general errors or to force the user to launch your app.

## See Also

### Response State

- [INStartWorkoutIntentResponseCode.unspecified](unspecified.md): A response code that indicates an unknown state.
- [INStartWorkoutIntentResponseCode.ready](ready.md): A response code that indicates app readiness.
- [INStartWorkoutIntentResponseCode.continueInApp](continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INStartWorkoutIntentResponseCode.success](success.md): A response code that indicates your app succeeded.
- [INStartWorkoutIntentResponseCode.handleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INStartWorkoutIntentResponseCode.failure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INStartWorkoutIntentResponseCode.failureOngoingWorkout](failureongoingworkout.md): A response code that indicates a workout is already in progress, so another can’t start.
- [INStartWorkoutIntentResponseCode.failureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

# INStartWorkoutIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates the user must launch your app to start the workout.

## Declaration

```objectivec
INStartWorkoutIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this code only when you can’t start the workout through SiriKit because of extenuating circumstances. For example, you might use this code if the user must log into your app before starting workouts and isn’t currently logged in. Don’t use this response code for general errors or to force the user to launch your app.

## See Also

### Response State

- [INStartWorkoutIntentResponseCodeUnspecified](unspecified.md): A response code that indicates an unknown state.
- [INStartWorkoutIntentResponseCodeReady](ready.md): A response code that indicates app readiness.
- [INStartWorkoutIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INStartWorkoutIntentResponseCodeSuccess](success.md): A response code that indicates your app succeeded.
- [INStartWorkoutIntentResponseCodeHandleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INStartWorkoutIntentResponseCodeFailure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INStartWorkoutIntentResponseCodeFailureOngoingWorkout](failureongoingworkout.md): A response code that indicates a workout is already in progress, so another can’t start.
- [INStartWorkoutIntentResponseCodeFailureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.
