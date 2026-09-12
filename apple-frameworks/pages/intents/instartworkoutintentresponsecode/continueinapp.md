> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintentresponsecode/continueinapp](https://developer.apple.com/documentation/intents/instartworkoutintentresponsecode/continueinapp)

# INStartWorkoutIntentResponseCode.continueInApp (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates your app extension is ready to transfer control to the app to start the workout.

> Use [INStartWorkoutIntentResponseCode.handleInApp](handleinapp.md) instead.

## Declaration

```swift
case continueInApp
```

<a id="Discussion"></a>

## Discussion

Upon returning this code, SiriKit launches your app in the foreground and passes it the [NSUserActivity](../../foundation/nsuseractivity.md) object you provided at initialization time. (If you didn’t provide a user activity object, SiriKit creates one for you). SiriKit adds an [INInteraction](../ininteraction.md) object with the intent and your response to the user activity object before delivering it. Your app should use the information in the user activity object to start the workout.

## See Also

### Response State

- [INStartWorkoutIntentResponseCode.unspecified](unspecified.md): A response code that indicates an unknown state.
- [INStartWorkoutIntentResponseCode.ready](ready.md): A response code that indicates app readiness.
- [INStartWorkoutIntentResponseCode.success](success.md): A response code that indicates your app succeeded.
- [INStartWorkoutIntentResponseCode.handleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INStartWorkoutIntentResponseCode.failure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INStartWorkoutIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INStartWorkoutIntentResponseCode.failureOngoingWorkout](failureongoingworkout.md): A response code that indicates a workout is already in progress, so another can’t start.
- [INStartWorkoutIntentResponseCode.failureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

# INStartWorkoutIntentResponseCodeContinueInApp (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates your app extension is ready to transfer control to the app to start the workout.

> Use [INStartWorkoutIntentResponseCodeHandleInApp](handleinapp.md) instead.

## Declaration

```objectivec
INStartWorkoutIntentResponseCodeContinueInApp
```

<a id="Discussion"></a>

## Discussion

Upon returning this code, SiriKit launches your app in the foreground and passes it the [NSUserActivity](../../foundation/nsuseractivity.md) object you provided at initialization time. (If you didn’t provide a user activity object, SiriKit creates one for you). SiriKit adds an [INInteraction](../ininteraction.md) object with the intent and your response to the user activity object before delivering it. Your app should use the information in the user activity object to start the workout.

## See Also

### Response State

- [INStartWorkoutIntentResponseCodeUnspecified](unspecified.md): A response code that indicates an unknown state.
- [INStartWorkoutIntentResponseCodeReady](ready.md): A response code that indicates app readiness.
- [INStartWorkoutIntentResponseCodeSuccess](success.md): A response code that indicates your app succeeded.
- [INStartWorkoutIntentResponseCodeHandleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INStartWorkoutIntentResponseCodeFailure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INStartWorkoutIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INStartWorkoutIntentResponseCodeFailureOngoingWorkout](failureongoingworkout.md): A response code that indicates a workout is already in progress, so another can’t start.
- [INStartWorkoutIntentResponseCodeFailureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.
