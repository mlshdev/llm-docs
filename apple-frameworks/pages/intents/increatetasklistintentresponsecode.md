> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatetasklistintentresponsecode](https://developer.apple.com/documentation/intents/increatetasklistintentresponsecode)

# INCreateTaskListIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
enum INCreateTaskListIntentResponseCode
```

## Topics

### Constants

- [INCreateTaskListIntentResponseCode.unspecified](increatetasklistintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a response code.
- [INCreateTaskListIntentResponseCode.ready](increatetasklistintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INCreateTaskListIntentResponseCode.inProgress](increatetasklistintentresponsecode/inprogress.md): Deprecated. Task list creation is still in progress.
- [INCreateTaskListIntentResponseCode.success](increatetasklistintentresponsecode/success.md): Deprecated. You successfully created the task list.
- [INCreateTaskListIntentResponseCode.failure](increatetasklistintentresponsecode/failure.md): Deprecated. You were unable to create the task list.
- [INCreateTaskListIntentResponseCode.failureRequiringAppLaunch](increatetasklistintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must create the task list from within your app.

### Initializers

- [init(rawValue:)](increatetasklistintentresponsecode/init%28rawvalue_%29.md): Deprecated.

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

- [code](increatetasklistintentresponse/code.md): Deprecated. The code indicating whether your app successfully handled the intent.

# INCreateTaskListIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Constants indicating the state of the response.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
enum INCreateTaskListIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INCreateTaskListIntentResponseCodeUnspecified](increatetasklistintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a response code.
- [INCreateTaskListIntentResponseCodeReady](increatetasklistintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INCreateTaskListIntentResponseCodeInProgress](increatetasklistintentresponsecode/inprogress.md): Deprecated. Task list creation is still in progress.
- [INCreateTaskListIntentResponseCodeSuccess](increatetasklistintentresponsecode/success.md): Deprecated. You successfully created the task list.
- [INCreateTaskListIntentResponseCodeFailure](increatetasklistintentresponsecode/failure.md): Deprecated. You were unable to create the task list.
- [INCreateTaskListIntentResponseCodeFailureRequiringAppLaunch](increatetasklistintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must create the task list from within your app.

## See Also

### Getting the Response Code

- [code](increatetasklistintentresponse/code.md): Deprecated. The code indicating whether your app successfully handled the intent.
