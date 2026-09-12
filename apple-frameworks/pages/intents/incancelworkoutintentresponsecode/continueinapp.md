> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incancelworkoutintentresponsecode/continueinapp](https://developer.apple.com/documentation/intents/incancelworkoutintentresponsecode/continueinapp)

# INCancelWorkoutIntentResponseCode.continueInApp (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates your app extension is ready to transfer control to the app to start the workout.

> Use [INCancelWorkoutIntentResponseCode.handleInApp](handleinapp.md) instead.

## Declaration

```swift
case continueInApp
```

<a id="Discussion"></a>

## Discussion

Upon returning this code, SiriKit launches your app and passes it the [NSUserActivity](../../foundation/nsuseractivity.md) object you provided at initialization time. (If you did not provide a user activity object, SiriKit creates one for you). SiriKit adds an [INInteraction](../ininteraction.md) object with the intent and your response to the user activity object before delivering it. Your app should use the information in the user activity object to cancel the workout.

## See Also

### Response State

- [INCancelWorkoutIntentResponseCode.unspecified](unspecified.md): A response code that indicates an unknown state.
- [INCancelWorkoutIntentResponseCode.ready](ready.md): A response code that indicates app readiness.
- [INCancelWorkoutIntentResponseCode.success](success.md): A response code that indicates your app succeeded.
- [INCancelWorkoutIntentResponseCode.handleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INCancelWorkoutIntentResponseCode.failure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INCancelWorkoutIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INCancelWorkoutIntentResponseCode.failureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

# INCancelWorkoutIntentResponseCodeContinueInApp (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates your app extension is ready to transfer control to the app to start the workout.

> Use [INCancelWorkoutIntentResponseCodeHandleInApp](handleinapp.md) instead.

## Declaration

```objectivec
INCancelWorkoutIntentResponseCodeContinueInApp
```

<a id="Discussion"></a>

## Discussion

Upon returning this code, SiriKit launches your app and passes it the [NSUserActivity](../../foundation/nsuseractivity.md) object you provided at initialization time. (If you did not provide a user activity object, SiriKit creates one for you). SiriKit adds an [INInteraction](../ininteraction.md) object with the intent and your response to the user activity object before delivering it. Your app should use the information in the user activity object to cancel the workout.

## See Also

### Response State

- [INCancelWorkoutIntentResponseCodeUnspecified](unspecified.md): A response code that indicates an unknown state.
- [INCancelWorkoutIntentResponseCodeReady](ready.md): A response code that indicates app readiness.
- [INCancelWorkoutIntentResponseCodeSuccess](success.md): A response code that indicates your app succeeded.
- [INCancelWorkoutIntentResponseCodeHandleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INCancelWorkoutIntentResponseCodeFailure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INCancelWorkoutIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INCancelWorkoutIntentResponseCodeFailureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.
