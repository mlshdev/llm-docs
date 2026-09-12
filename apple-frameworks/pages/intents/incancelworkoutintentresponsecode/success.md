> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incancelworkoutintentresponsecode/success](https://developer.apple.com/documentation/intents/incancelworkoutintentresponsecode/success)

# INCancelWorkoutIntentResponseCode.success (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A response code that indicates your app succeeded.

## Declaration

```swift
case success
```

<a id="Discussion"></a>

## Discussion

Use this code when your app extension successfully cancels the workout.

## See Also

### Response State

- [INCancelWorkoutIntentResponseCode.unspecified](unspecified.md): A response code that indicates an unknown state.
- [INCancelWorkoutIntentResponseCode.ready](ready.md): A response code that indicates app readiness.
- [INCancelWorkoutIntentResponseCode.continueInApp](continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INCancelWorkoutIntentResponseCode.handleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INCancelWorkoutIntentResponseCode.failure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INCancelWorkoutIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INCancelWorkoutIntentResponseCode.failureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

# INCancelWorkoutIntentResponseCodeSuccess (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A response code that indicates your app succeeded.

## Declaration

```objectivec
INCancelWorkoutIntentResponseCodeSuccess
```

<a id="Discussion"></a>

## Discussion

Use this code when your app extension successfully cancels the workout.

## See Also

### Response State

- [INCancelWorkoutIntentResponseCodeUnspecified](unspecified.md): A response code that indicates an unknown state.
- [INCancelWorkoutIntentResponseCodeReady](ready.md): A response code that indicates app readiness.
- [INCancelWorkoutIntentResponseCodeContinueInApp](continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INCancelWorkoutIntentResponseCodeHandleInApp](handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INCancelWorkoutIntentResponseCodeFailure](failure.md): A response code that indicates you were unable to start the specified workout.
- [INCancelWorkoutIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INCancelWorkoutIntentResponseCodeFailureNoMatchingWorkout](failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.
