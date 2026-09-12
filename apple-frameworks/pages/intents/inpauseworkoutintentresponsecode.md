> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpauseworkoutintentresponsecode](https://developer.apple.com/documentation/intents/inpauseworkoutintentresponsecode)

# INPauseWorkoutIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate the response state.

## Declaration

```swift
enum INPauseWorkoutIntentResponseCode
```

## Topics

### Response State

- [INPauseWorkoutIntentResponseCode.unspecified](inpauseworkoutintentresponsecode/unspecified.md): A response code that indicates an unknown state.
- [INPauseWorkoutIntentResponseCode.ready](inpauseworkoutintentresponsecode/ready.md): A response code that indicates app readiness.
- [INPauseWorkoutIntentResponseCode.continueInApp](inpauseworkoutintentresponsecode/continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INPauseWorkoutIntentResponseCode.success](inpauseworkoutintentresponsecode/success.md): A response code that indicates your app succeeded.
- [INPauseWorkoutIntentResponseCode.handleInApp](inpauseworkoutintentresponsecode/handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INPauseWorkoutIntentResponseCode.failure](inpauseworkoutintentresponsecode/failure.md): A response code that indicates you were unable to start the specified workout.
- [INPauseWorkoutIntentResponseCode.failureRequiringAppLaunch](inpauseworkoutintentresponsecode/failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INPauseWorkoutIntentResponseCode.failureNoMatchingWorkout](inpauseworkoutintentresponsecode/failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

### Initializers

- [init(rawValue:)](inpauseworkoutintentresponsecode/init%28rawvalue_%29.md)

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

- [code](inpauseworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.

# INPauseWorkoutIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate the response state.

## Declaration

```objectivec
enum INPauseWorkoutIntentResponseCode : NSInteger;
```

## Topics

### Response State

- [INPauseWorkoutIntentResponseCodeUnspecified](inpauseworkoutintentresponsecode/unspecified.md): A response code that indicates an unknown state.
- [INPauseWorkoutIntentResponseCodeReady](inpauseworkoutintentresponsecode/ready.md): A response code that indicates app readiness.
- [INPauseWorkoutIntentResponseCodeContinueInApp](inpauseworkoutintentresponsecode/continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INPauseWorkoutIntentResponseCodeSuccess](inpauseworkoutintentresponsecode/success.md): A response code that indicates your app succeeded.
- [INPauseWorkoutIntentResponseCodeHandleInApp](inpauseworkoutintentresponsecode/handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INPauseWorkoutIntentResponseCodeFailure](inpauseworkoutintentresponsecode/failure.md): A response code that indicates you were unable to start the specified workout.
- [INPauseWorkoutIntentResponseCodeFailureRequiringAppLaunch](inpauseworkoutintentresponsecode/failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INPauseWorkoutIntentResponseCodeFailureNoMatchingWorkout](inpauseworkoutintentresponsecode/failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

## See Also

### Getting the Response Code

- [code](inpauseworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.
