> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartworkoutintentresponsecode](https://developer.apple.com/documentation/intents/instartworkoutintentresponsecode)

# INStartWorkoutIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate the response state.

## Declaration

```swift
enum INStartWorkoutIntentResponseCode
```

## Topics

### Response State

- [INStartWorkoutIntentResponseCode.unspecified](instartworkoutintentresponsecode/unspecified.md): A response code that indicates an unknown state.
- [INStartWorkoutIntentResponseCode.ready](instartworkoutintentresponsecode/ready.md): A response code that indicates app readiness.
- [INStartWorkoutIntentResponseCode.continueInApp](instartworkoutintentresponsecode/continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INStartWorkoutIntentResponseCode.success](instartworkoutintentresponsecode/success.md): A response code that indicates your app succeeded.
- [INStartWorkoutIntentResponseCode.handleInApp](instartworkoutintentresponsecode/handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INStartWorkoutIntentResponseCode.failure](instartworkoutintentresponsecode/failure.md): A response code that indicates you were unable to start the specified workout.
- [INStartWorkoutIntentResponseCode.failureRequiringAppLaunch](instartworkoutintentresponsecode/failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INStartWorkoutIntentResponseCode.failureOngoingWorkout](instartworkoutintentresponsecode/failureongoingworkout.md): A response code that indicates a workout is already in progress, so another can’t start.
- [INStartWorkoutIntentResponseCode.failureNoMatchingWorkout](instartworkoutintentresponsecode/failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

### Initializers

- [init(rawValue:)](instartworkoutintentresponsecode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Response Code

- [code](instartworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.

# INStartWorkoutIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate the response state.

## Declaration

```objectivec
enum INStartWorkoutIntentResponseCode : NSInteger;
```

## Topics

### Response State

- [INStartWorkoutIntentResponseCodeUnspecified](instartworkoutintentresponsecode/unspecified.md): A response code that indicates an unknown state.
- [INStartWorkoutIntentResponseCodeReady](instartworkoutintentresponsecode/ready.md): A response code that indicates app readiness.
- [INStartWorkoutIntentResponseCodeContinueInApp](instartworkoutintentresponsecode/continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INStartWorkoutIntentResponseCodeSuccess](instartworkoutintentresponsecode/success.md): A response code that indicates your app succeeded.
- [INStartWorkoutIntentResponseCodeHandleInApp](instartworkoutintentresponsecode/handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INStartWorkoutIntentResponseCodeFailure](instartworkoutintentresponsecode/failure.md): A response code that indicates you were unable to start the specified workout.
- [INStartWorkoutIntentResponseCodeFailureRequiringAppLaunch](instartworkoutintentresponsecode/failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INStartWorkoutIntentResponseCodeFailureOngoingWorkout](instartworkoutintentresponsecode/failureongoingworkout.md): A response code that indicates a workout is already in progress, so another can’t start.
- [INStartWorkoutIntentResponseCodeFailureNoMatchingWorkout](instartworkoutintentresponsecode/failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

## See Also

### Getting the Response Code

- [code](instartworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.
