> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintentresponsecode/ready](https://developer.apple.com/documentation/intents/instartworkoutintentresponsecode/ready)

# INStartWorkoutIntentResponseCode.ready (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates app readiness.

## Declaration

```swift
case ready
```

## Mentioned In

- [Confirming the Details of an Intent](../../sirikit/confirming-the-details-of-an-intent.md)

<a id="Discussion"></a>

## Discussion

During the confirmation phase of an intent, use this code to signal that your app is ready and able to act on the intent.

## See Also

### Response State

- [INStartWorkoutIntentResponseCode.unspecified](unspecified.md): A response code that indicates an unknown state.
- [INStartWorkoutIntentResponseCode.continueInApp](continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INStartWorkoutIntentResponseCode.success](success.md): A response code that indicates your app succeeded.
- [INStartWorkoutIntentResponseCode.handleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INStartWorkoutIntentResponseCode.failure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INStartWorkoutIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INStartWorkoutIntentResponseCode.failureOngoingWorkout](failureongoingworkout.md): A response code that indicates a workout is already in progress, so another can’t start.
- [INStartWorkoutIntentResponseCode.failureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

# INStartWorkoutIntentResponseCodeReady (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A response code that indicates app readiness.

## Declaration

```objectivec
INStartWorkoutIntentResponseCodeReady
```

## Mentioned In

- [Confirming the Details of an Intent](../../sirikit/confirming-the-details-of-an-intent.md)

<a id="Discussion"></a>

## Discussion

During the confirmation phase of an intent, use this code to signal that your app is ready and able to act on the intent.

## See Also

### Response State

- [INStartWorkoutIntentResponseCodeUnspecified](unspecified.md): A response code that indicates an unknown state.
- [INStartWorkoutIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INStartWorkoutIntentResponseCodeSuccess](success.md): A response code that indicates your app succeeded.
- [INStartWorkoutIntentResponseCodeHandleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INStartWorkoutIntentResponseCodeFailure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INStartWorkoutIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INStartWorkoutIntentResponseCodeFailureOngoingWorkout](failureongoingworkout.md): A response code that indicates a workout is already in progress, so another can’t start.
- [INStartWorkoutIntentResponseCodeFailureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.
