> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inresumeworkoutintentresponsecode/continueinapp](https://developer.apple.com/documentation/intents/inresumeworkoutintentresponsecode/continueinapp)

# INResumeWorkoutIntentResponseCode.continueInApp (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates your app extension is ready to transfer control to the app to start the workout.

> Use [INResumeWorkoutIntentResponseCode.handleInApp](handleinapp.md) instead.

## Declaration

```swift
case continueInApp
```

<a id="Discussion"></a>

## Discussion

Upon returning this code, SiriKit launches your app and passes it the NSUserActivity object you provided at initialization time. (If you did not provide a user activity object, SiriKit creates one for you). SiriKit adds an INInteraction object with the intent and your response to the user activity object before delivering it. Your app should use the information in the user activity object to resume the workout.

## See Also

### Response State

- [INResumeWorkoutIntentResponseCode.unspecified](unspecified.md): A response code that indicates an unknown state.
- [INResumeWorkoutIntentResponseCode.ready](ready.md): A response code that indicates app readiness.
- [INResumeWorkoutIntentResponseCode.success](success.md): A response code that indicates your app succeeded.
- [INResumeWorkoutIntentResponseCode.handleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INResumeWorkoutIntentResponseCode.failure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INResumeWorkoutIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INResumeWorkoutIntentResponseCode.failureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

# INResumeWorkoutIntentResponseCodeContinueInApp (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates your app extension is ready to transfer control to the app to start the workout.

> Use [INResumeWorkoutIntentResponseCodeHandleInApp](handleinapp.md) instead.

## Declaration

```objectivec
INResumeWorkoutIntentResponseCodeContinueInApp
```

<a id="Discussion"></a>

## Discussion

Upon returning this code, SiriKit launches your app and passes it the NSUserActivity object you provided at initialization time. (If you did not provide a user activity object, SiriKit creates one for you). SiriKit adds an INInteraction object with the intent and your response to the user activity object before delivering it. Your app should use the information in the user activity object to resume the workout.

## See Also

### Response State

- [INResumeWorkoutIntentResponseCodeUnspecified](unspecified.md): A response code that indicates an unknown state.
- [INResumeWorkoutIntentResponseCodeReady](ready.md): A response code that indicates app readiness.
- [INResumeWorkoutIntentResponseCodeSuccess](success.md): A response code that indicates your app succeeded.
- [INResumeWorkoutIntentResponseCodeHandleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INResumeWorkoutIntentResponseCodeFailure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INResumeWorkoutIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INResumeWorkoutIntentResponseCodeFailureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.
