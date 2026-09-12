> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inendworkoutintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/inendworkoutintentresponsecode/failurerequiringapplaunch)

# INEndWorkoutIntentResponseCode.failureRequiringAppLaunch (Swift)

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

Use this code only when you can’t end the workout because of extenuating circumstances. For example, use this code if the user must log into your app before ending workouts and the user is not currently logged in. Do not use this response code for general errors or to force the user to launch your app.

## See Also

### Response State

- [INEndWorkoutIntentResponseCode.unspecified](unspecified.md): A response code that indicates an unknown state.
- [INEndWorkoutIntentResponseCode.ready](ready.md): A response code that indicates app readiness.
- [INEndWorkoutIntentResponseCode.continueInApp](continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INEndWorkoutIntentResponseCode.success](success.md): A response code that indicates your app succeeded.
- [INEndWorkoutIntentResponseCode.handleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INEndWorkoutIntentResponseCode.failure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INEndWorkoutIntentResponseCode.failureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

# INEndWorkoutIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates the user must launch your app to start the workout.

## Declaration

```objectivec
INEndWorkoutIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this code only when you can’t end the workout because of extenuating circumstances. For example, use this code if the user must log into your app before ending workouts and the user is not currently logged in. Do not use this response code for general errors or to force the user to launch your app.

## See Also

### Response State

- [INEndWorkoutIntentResponseCodeUnspecified](unspecified.md): A response code that indicates an unknown state.
- [INEndWorkoutIntentResponseCodeReady](ready.md): A response code that indicates app readiness.
- [INEndWorkoutIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INEndWorkoutIntentResponseCodeSuccess](success.md): A response code that indicates your app succeeded.
- [INEndWorkoutIntentResponseCodeHandleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INEndWorkoutIntentResponseCodeFailure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INEndWorkoutIntentResponseCodeFailureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.
