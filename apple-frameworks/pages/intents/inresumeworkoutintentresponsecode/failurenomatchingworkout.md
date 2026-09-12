> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inresumeworkoutintentresponsecode/failurenomatchingworkout](https://developer.apple.com/documentation/intents/inresumeworkoutintentresponsecode/failurenomatchingworkout)

# INResumeWorkoutIntentResponseCode.failureNoMatchingWorkout (Swift)

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

Use this code when the user specifies a workout name that your app does not recognize.

## See Also

### Response State

- [INResumeWorkoutIntentResponseCode.unspecified](unspecified.md): A response code that indicates an unknown state.
- [INResumeWorkoutIntentResponseCode.ready](ready.md): A response code that indicates app readiness.
- [INResumeWorkoutIntentResponseCode.continueInApp](continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INResumeWorkoutIntentResponseCode.success](success.md): A response code that indicates your app succeeded.
- [INResumeWorkoutIntentResponseCode.handleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INResumeWorkoutIntentResponseCode.failure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INResumeWorkoutIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.

# INResumeWorkoutIntentResponseCodeFailureNoMatchingWorkout (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates you didn’t find the specified workout.

## Declaration

```objectivec
INResumeWorkoutIntentResponseCodeFailureNoMatchingWorkout
```

<a id="Discussion"></a>

## Discussion

Use this code when the user specifies a workout name that your app does not recognize.

## See Also

### Response State

- [INResumeWorkoutIntentResponseCodeUnspecified](unspecified.md): A response code that indicates an unknown state.
- [INResumeWorkoutIntentResponseCodeReady](ready.md): A response code that indicates app readiness.
- [INResumeWorkoutIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INResumeWorkoutIntentResponseCodeSuccess](success.md): A response code that indicates your app succeeded.
- [INResumeWorkoutIntentResponseCodeHandleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INResumeWorkoutIntentResponseCodeFailure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INResumeWorkoutIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
