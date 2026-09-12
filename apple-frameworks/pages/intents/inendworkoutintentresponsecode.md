> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inendworkoutintentresponsecode](https://developer.apple.com/documentation/intents/inendworkoutintentresponsecode)

# INEndWorkoutIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate the response state.

## Declaration

```swift
enum INEndWorkoutIntentResponseCode
```

## Topics

### Response State

- [INEndWorkoutIntentResponseCode.unspecified](inendworkoutintentresponsecode/unspecified.md): A response code that indicates an unknown state.
- [INEndWorkoutIntentResponseCode.ready](inendworkoutintentresponsecode/ready.md): A response code that indicates app readiness.
- [INEndWorkoutIntentResponseCode.continueInApp](inendworkoutintentresponsecode/continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INEndWorkoutIntentResponseCode.success](inendworkoutintentresponsecode/success.md): A response code that indicates your app succeeded.
- [INEndWorkoutIntentResponseCode.handleInApp](inendworkoutintentresponsecode/handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INEndWorkoutIntentResponseCode.failure](inendworkoutintentresponsecode/failure.md): A response code that indicates you were unable to start the specified workout.
- [INEndWorkoutIntentResponseCode.failureRequiringAppLaunch](inendworkoutintentresponsecode/failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INEndWorkoutIntentResponseCode.failureNoMatchingWorkout](inendworkoutintentresponsecode/failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

### Initializers

- [init(rawValue:)](inendworkoutintentresponsecode/init%28rawvalue_%29.md)

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

- [code](inendworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.

# INEndWorkoutIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate the response state.

## Declaration

```objectivec
enum INEndWorkoutIntentResponseCode : NSInteger;
```

## Topics

### Response State

- [INEndWorkoutIntentResponseCodeUnspecified](inendworkoutintentresponsecode/unspecified.md): A response code that indicates an unknown state.
- [INEndWorkoutIntentResponseCodeReady](inendworkoutintentresponsecode/ready.md): A response code that indicates app readiness.
- [INEndWorkoutIntentResponseCodeContinueInApp](inendworkoutintentresponsecode/continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INEndWorkoutIntentResponseCodeSuccess](inendworkoutintentresponsecode/success.md): A response code that indicates your app succeeded.
- [INEndWorkoutIntentResponseCodeHandleInApp](inendworkoutintentresponsecode/handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INEndWorkoutIntentResponseCodeFailure](inendworkoutintentresponsecode/failure.md): A response code that indicates you were unable to start the specified workout.
- [INEndWorkoutIntentResponseCodeFailureRequiringAppLaunch](inendworkoutintentresponsecode/failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INEndWorkoutIntentResponseCodeFailureNoMatchingWorkout](inendworkoutintentresponsecode/failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

## See Also

### Getting the Response Code

- [code](inendworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.
