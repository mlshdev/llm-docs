> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inendworkoutintentresponsecode/continueinapp](https://developer.apple.com/documentation/intents/inendworkoutintentresponsecode/continueinapp)

# INEndWorkoutIntentResponseCode.continueInApp (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates your app extension is ready to transfer control to the app to start the workout.

> Use [INEndWorkoutIntentResponseCode.handleInApp](handleinapp.md) instead.

## Declaration

```swift
case continueInApp
```

<a id="Discussion"></a>

## Discussion

Upon returning this code, SiriKit launches your app and passes it the [NSUserActivity](../../foundation/nsuseractivity.md) object you provided at initialization time. (If you did not provide a user activity object, SiriKit creates one for you). SiriKit adds an [INInteraction](../ininteraction.md) object with the intent and your response to the user activity object before delivering it. Your app should use the information in the user activity object to end the workout.

## See Also

### Response State

- [INEndWorkoutIntentResponseCode.unspecified](unspecified.md): A response code that indicates an unknown state.
- [INEndWorkoutIntentResponseCode.ready](ready.md): A response code that indicates app readiness.
- [INEndWorkoutIntentResponseCode.success](success.md): A response code that indicates your app succeeded.
- [INEndWorkoutIntentResponseCode.handleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INEndWorkoutIntentResponseCode.failure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INEndWorkoutIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INEndWorkoutIntentResponseCode.failureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

# INEndWorkoutIntentResponseCodeContinueInApp (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates your app extension is ready to transfer control to the app to start the workout.

> Use [INEndWorkoutIntentResponseCodeHandleInApp](handleinapp.md) instead.

## Declaration

```objectivec
INEndWorkoutIntentResponseCodeContinueInApp
```

<a id="Discussion"></a>

## Discussion

Upon returning this code, SiriKit launches your app and passes it the [NSUserActivity](../../foundation/nsuseractivity.md) object you provided at initialization time. (If you did not provide a user activity object, SiriKit creates one for you). SiriKit adds an [INInteraction](../ininteraction.md) object with the intent and your response to the user activity object before delivering it. Your app should use the information in the user activity object to end the workout.

## See Also

### Response State

- [INEndWorkoutIntentResponseCodeUnspecified](unspecified.md): A response code that indicates an unknown state.
- [INEndWorkoutIntentResponseCodeReady](ready.md): A response code that indicates app readiness.
- [INEndWorkoutIntentResponseCodeSuccess](success.md): A response code that indicates your app succeeded.
- [INEndWorkoutIntentResponseCodeHandleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INEndWorkoutIntentResponseCodeFailure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INEndWorkoutIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INEndWorkoutIntentResponseCodeFailureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.
