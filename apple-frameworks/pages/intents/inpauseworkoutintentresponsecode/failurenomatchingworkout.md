> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpauseworkoutintentresponsecode/failurenomatchingworkout](https://developer.apple.com/documentation/intents/inpauseworkoutintentresponsecode/failurenomatchingworkout)

# INPauseWorkoutIntentResponseCode.failureNoMatchingWorkout (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates you didn’t find the specified workout.

## Declaration

```swift
case failureNoMatchingWorkout
```

<a id="Discussion"></a>

## Discussion

Use this code when the user specifies a workout name that your app doesn’t recognize.

## See Also

### Response State

- [INPauseWorkoutIntentResponseCode.unspecified](unspecified.md): A response code that indicates an unknown state.
- [INPauseWorkoutIntentResponseCode.ready](ready.md): A response code that indicates app readiness.
- [INPauseWorkoutIntentResponseCode.continueInApp](continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INPauseWorkoutIntentResponseCode.success](success.md): A response code that indicates your app succeeded.
- [INPauseWorkoutIntentResponseCode.handleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INPauseWorkoutIntentResponseCode.failure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INPauseWorkoutIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.

# INPauseWorkoutIntentResponseCodeFailureNoMatchingWorkout (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates you didn’t find the specified workout.

## Declaration

```objectivec
INPauseWorkoutIntentResponseCodeFailureNoMatchingWorkout
```

<a id="Discussion"></a>

## Discussion

Use this code when the user specifies a workout name that your app doesn’t recognize.

## See Also

### Response State

- [INPauseWorkoutIntentResponseCodeUnspecified](unspecified.md): A response code that indicates an unknown state.
- [INPauseWorkoutIntentResponseCodeReady](ready.md): A response code that indicates app readiness.
- [INPauseWorkoutIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INPauseWorkoutIntentResponseCodeSuccess](success.md): A response code that indicates your app succeeded.
- [INPauseWorkoutIntentResponseCodeHandleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INPauseWorkoutIntentResponseCodeFailure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INPauseWorkoutIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
