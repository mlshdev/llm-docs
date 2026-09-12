> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetasksintentresponsecode](https://developer.apple.com/documentation/intents/indeletetasksintentresponsecode)

# INDeleteTasksIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Constants that indicate the response state.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
enum INDeleteTasksIntentResponseCode
```

## Topics

### Response state

- [INDeleteTasksIntentResponseCode.unspecified](indeletetasksintentresponsecode/unspecified.md): Deprecated. A response code that indicates an unknown state.
- [INDeleteTasksIntentResponseCode.ready](indeletetasksintentresponsecode/ready.md): Deprecated. A response code that indicates app readiness.
- [INDeleteTasksIntentResponseCode.inProgress](indeletetasksintentresponsecode/inprogress.md): Deprecated. A response code that indicates deletion is still in progress.
- [INDeleteTasksIntentResponseCode.success](indeletetasksintentresponsecode/success.md): Deprecated. A response code that indicates your app succeeded.
- [INDeleteTasksIntentResponseCode.failure](indeletetasksintentresponsecode/failure.md): Deprecated. A response code that indicates you were unable to delete the task.
- [INDeleteTasksIntentResponseCode.failureRequiringAppLaunch](indeletetasksintentresponsecode/failurerequiringapplaunch.md): Deprecated. A response code that indicates the user must launch your app to delete the tasks.

### Initializers

- [init(rawValue:)](indeletetasksintentresponsecode/init%28rawvalue_%29.md): Deprecated.

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

- [code](indeletetasksintentresponse/code.md): Deprecated. The code that indicates whether you successfully handled the intent.

# INDeleteTasksIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Constants that indicate the response state.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INDeleteTasksIntentResponseCode : NSInteger;
```

## Topics

### Response state

- [INDeleteTasksIntentResponseCodeUnspecified](indeletetasksintentresponsecode/unspecified.md): Deprecated. A response code that indicates an unknown state.
- [INDeleteTasksIntentResponseCodeReady](indeletetasksintentresponsecode/ready.md): Deprecated. A response code that indicates app readiness.
- [INDeleteTasksIntentResponseCodeInProgress](indeletetasksintentresponsecode/inprogress.md): Deprecated. A response code that indicates deletion is still in progress.
- [INDeleteTasksIntentResponseCodeSuccess](indeletetasksintentresponsecode/success.md): Deprecated. A response code that indicates your app succeeded.
- [INDeleteTasksIntentResponseCodeFailure](indeletetasksintentresponsecode/failure.md): Deprecated. A response code that indicates you were unable to delete the task.
- [INDeleteTasksIntentResponseCodeFailureRequiringAppLaunch](indeletetasksintentresponsecode/failurerequiringapplaunch.md): Deprecated. A response code that indicates the user must launch your app to delete the tasks.

## See Also

### Getting the Response Code

- [code](indeletetasksintentresponse/code.md): Deprecated. The code that indicates whether you successfully handled the intent.
