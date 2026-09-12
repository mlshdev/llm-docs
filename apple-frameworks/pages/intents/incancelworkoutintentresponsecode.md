> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incancelworkoutintentresponsecode](https://developer.apple.com/documentation/intents/incancelworkoutintentresponsecode)

# INCancelWorkoutIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate the response state.

## Declaration

```swift
enum INCancelWorkoutIntentResponseCode
```

## Topics

### Response State

- [INCancelWorkoutIntentResponseCode.unspecified](incancelworkoutintentresponsecode/unspecified.md): A response code that indicates an unknown state.
- [INCancelWorkoutIntentResponseCode.ready](incancelworkoutintentresponsecode/ready.md): A response code that indicates app readiness.
- [INCancelWorkoutIntentResponseCode.continueInApp](incancelworkoutintentresponsecode/continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INCancelWorkoutIntentResponseCode.success](incancelworkoutintentresponsecode/success.md): A response code that indicates your app succeeded.
- [INCancelWorkoutIntentResponseCode.handleInApp](incancelworkoutintentresponsecode/handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INCancelWorkoutIntentResponseCode.failure](incancelworkoutintentresponsecode/failure.md): A response code that indicates you were unable to start the specified workout.
- [INCancelWorkoutIntentResponseCode.failureRequiringAppLaunch](incancelworkoutintentresponsecode/failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INCancelWorkoutIntentResponseCode.failureNoMatchingWorkout](incancelworkoutintentresponsecode/failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

### Initializers

- [init(rawValue:)](incancelworkoutintentresponsecode/init%28rawvalue_%29.md)

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

- [code](incancelworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.

# INCancelWorkoutIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants that indicate the response state.

## Declaration

```objectivec
enum INCancelWorkoutIntentResponseCode : NSInteger;
```

## Topics

### Response State

- [INCancelWorkoutIntentResponseCodeUnspecified](incancelworkoutintentresponsecode/unspecified.md): A response code that indicates an unknown state.
- [INCancelWorkoutIntentResponseCodeReady](incancelworkoutintentresponsecode/ready.md): A response code that indicates app readiness.
- [INCancelWorkoutIntentResponseCodeContinueInApp](incancelworkoutintentresponsecode/continueinapp.md): Deprecated. A response code that indicates your app extension is ready to transfer control to the app to start the workout.
- [INCancelWorkoutIntentResponseCodeSuccess](incancelworkoutintentresponsecode/success.md): A response code that indicates your app succeeded.
- [INCancelWorkoutIntentResponseCodeHandleInApp](incancelworkoutintentresponsecode/handleinapp.md): A response code that indicates you want to handle the intent in your app instead.
- [INCancelWorkoutIntentResponseCodeFailure](incancelworkoutintentresponsecode/failure.md): A response code that indicates you were unable to start the specified workout.
- [INCancelWorkoutIntentResponseCodeFailureRequiringAppLaunch](incancelworkoutintentresponsecode/failurerequiringapplaunch.md): A response code that indicates the user must launch your app to start the workout.
- [INCancelWorkoutIntentResponseCodeFailureNoMatchingWorkout](incancelworkoutintentresponsecode/failurenomatchingworkout.md): A response code that indicates you didn’t find the specified workout.

## See Also

### Getting the Response Code

- [code](incancelworkoutintentresponse/code.md): The code that indicates whether you successfully handled the intent.
