> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inresumeworkoutintentresponsecode](https://developer.apple.com/documentation/intents/inresumeworkoutintentresponsecode)

# INResumeWorkoutIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate the response state.

## Declaration

```swift
enum INResumeWorkoutIntentResponseCode
```

## Topics

### Response State

- [INResumeWorkoutIntentResponseCode.unspecified](inresumeworkoutintentresponsecode/unspecified.md): A response code that indicates an unknown state.
- [INResumeWorkoutIntentResponseCode.ready](inresumeworkoutintentresponsecode/ready.md): A response code that indicates app readiness.
- [INResumeWorkoutIntentResponseCode.continueInApp](inresumeworkoutintentresponsecode/continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INResumeWorkoutIntentResponseCode.success](inresumeworkoutintentresponsecode/success.md): A response code that indicates your app succeeded.
- [INResumeWorkoutIntentResponseCode.handleInApp](inresumeworkoutintentresponsecode/handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INResumeWorkoutIntentResponseCode.failure](inresumeworkoutintentresponsecode/failure.md): A response code that indicates you were unable to start the specified workout.
- [INResumeWorkoutIntentResponseCode.failureRequiringAppLaunch](inresumeworkoutintentresponsecode/failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INResumeWorkoutIntentResponseCode.failureNoMatchingWorkout](inresumeworkoutintentresponsecode/failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

### Initializers

- [init(rawValue:)](inresumeworkoutintentresponsecode/init%28rawvalue_%29.md)

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

- [code](inresumeworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.

# INResumeWorkoutIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate the response state.

## Declaration

```objectivec
enum INResumeWorkoutIntentResponseCode : NSInteger;
```

## Topics

### Response State

- [INResumeWorkoutIntentResponseCodeUnspecified](inresumeworkoutintentresponsecode/unspecified.md): A response code that indicates an unknown state.
- [INResumeWorkoutIntentResponseCodeReady](inresumeworkoutintentresponsecode/ready.md): A response code that indicates app readiness.
- [INResumeWorkoutIntentResponseCodeContinueInApp](inresumeworkoutintentresponsecode/continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INResumeWorkoutIntentResponseCodeSuccess](inresumeworkoutintentresponsecode/success.md): A response code that indicates your app succeeded.
- [INResumeWorkoutIntentResponseCodeHandleInApp](inresumeworkoutintentresponsecode/handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INResumeWorkoutIntentResponseCodeFailure](inresumeworkoutintentresponsecode/failure.md): A response code that indicates you were unable to start the specified workout.
- [INResumeWorkoutIntentResponseCodeFailureRequiringAppLaunch](inresumeworkoutintentresponsecode/failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INResumeWorkoutIntentResponseCodeFailureNoMatchingWorkout](inresumeworkoutintentresponsecode/failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

## See Also

### Getting the Response Code

- [code](inresumeworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.
