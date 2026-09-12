> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inresumeworkoutintentresponsecode/ready](https://developer.apple.com/documentation/intents/inresumeworkoutintentresponsecode/ready)

# INResumeWorkoutIntentResponseCode.ready (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates app readiness.

## Declaration

```swift
case ready
```

<a id="Discussion"></a>

## Discussion

During the confirmation phase of an intent, use this code to signal that your app is ready and able to act on the intent.

## See Also

### Response State

- [INResumeWorkoutIntentResponseCode.unspecified](unspecified.md): A response code that indicates an unknown state.
- [INResumeWorkoutIntentResponseCode.continueInApp](continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INResumeWorkoutIntentResponseCode.success](success.md): A response code that indicates your app succeeded.
- [INResumeWorkoutIntentResponseCode.handleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INResumeWorkoutIntentResponseCode.failure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INResumeWorkoutIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INResumeWorkoutIntentResponseCode.failureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

# INResumeWorkoutIntentResponseCodeReady (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates app readiness.

## Declaration

```objectivec
INResumeWorkoutIntentResponseCodeReady
```

<a id="Discussion"></a>

## Discussion

During the confirmation phase of an intent, use this code to signal that your app is ready and able to act on the intent.

## See Also

### Response State

- [INResumeWorkoutIntentResponseCodeUnspecified](unspecified.md): A response code that indicates an unknown state.
- [INResumeWorkoutIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INResumeWorkoutIntentResponseCodeSuccess](success.md): A response code that indicates your app succeeded.
- [INResumeWorkoutIntentResponseCodeHandleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INResumeWorkoutIntentResponseCodeFailure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INResumeWorkoutIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INResumeWorkoutIntentResponseCodeFailureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.
