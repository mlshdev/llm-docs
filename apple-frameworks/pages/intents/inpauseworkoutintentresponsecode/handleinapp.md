> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpauseworkoutintentresponsecode/handleinapp](https://developer.apple.com/documentation/intents/inpauseworkoutintentresponsecode/handleinapp)

# INPauseWorkoutIntentResponseCode.handleInApp (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A response code that indicates you want to handle the intent in your app instead.

## Declaration

```swift
case handleInApp
```

<a id="Discussion"></a>

## Discussion

Use this code when you want SiriKit to launch your app in the background so that you can handle the intent there. With this code, the user continues to interact with Siri, but your app has an opportunity to update your workout session or any other workout information.

## See Also

### Response State

- [INPauseWorkoutIntentResponseCode.unspecified](unspecified.md): A response code that indicates an unknown state.
- [INPauseWorkoutIntentResponseCode.ready](ready.md): A response code that indicates app readiness.
- [INPauseWorkoutIntentResponseCode.continueInApp](continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INPauseWorkoutIntentResponseCode.success](success.md): A response code that indicates your app succeeded.
- [INPauseWorkoutIntentResponseCode.failure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INPauseWorkoutIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INPauseWorkoutIntentResponseCode.failureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

# INPauseWorkoutIntentResponseCodeHandleInApp (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A response code that indicates you want to handle the intent in your app instead.

## Declaration

```objectivec
INPauseWorkoutIntentResponseCodeHandleInApp
```

<a id="Discussion"></a>

## Discussion

Use this code when you want SiriKit to launch your app in the background so that you can handle the intent there. With this code, the user continues to interact with Siri, but your app has an opportunity to update your workout session or any other workout information.

## See Also

### Response State

- [INPauseWorkoutIntentResponseCodeUnspecified](unspecified.md): A response code that indicates an unknown state.
- [INPauseWorkoutIntentResponseCodeReady](ready.md): A response code that indicates app readiness.
- [INPauseWorkoutIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INPauseWorkoutIntentResponseCodeSuccess](success.md): A response code that indicates your app succeeded.
- [INPauseWorkoutIntentResponseCodeFailure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INPauseWorkoutIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INPauseWorkoutIntentResponseCodeFailureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.
