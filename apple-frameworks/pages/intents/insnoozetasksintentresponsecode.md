> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insnoozetasksintentresponsecode](https://developer.apple.com/documentation/intents/insnoozetasksintentresponsecode)

# INSnoozeTasksIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Constants that indicate the response state.

> INSnoozeTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
enum INSnoozeTasksIntentResponseCode
```

## Topics

### Response State

- [INSnoozeTasksIntentResponseCode.unspecified](insnoozetasksintentresponsecode/unspecified.md): Deprecated. A response code that indicates an unknown state.
- [INSnoozeTasksIntentResponseCode.ready](insnoozetasksintentresponsecode/ready.md): Deprecated. A response code that indicates app readiness.
- [INSnoozeTasksIntentResponseCode.inProgress](insnoozetasksintentresponsecode/inprogress.md): Deprecated. A response code that indicates deletion is still in progress.
- [INSnoozeTasksIntentResponseCode.success](insnoozetasksintentresponsecode/success.md): Deprecated. A response code that indicates your app succeeded.
- [INSnoozeTasksIntentResponseCode.failure](insnoozetasksintentresponsecode/failure.md): Deprecated. A response code that indicates you were unable to snooze the task.
- [INSnoozeTasksIntentResponseCode.failureRequiringAppLaunch](insnoozetasksintentresponsecode/failurerequiringapplaunch.md): Deprecated. A response code that indicates the user must launch your app to snooze the tasks.

### Initializers

- [init(rawValue:)](insnoozetasksintentresponsecode/init%28rawvalue_%29.md): Deprecated.

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

- [code](insnoozetasksintentresponse/code.md): Deprecated. The code that indicates whether you successfully handled the intent.

# INSnoozeTasksIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Constants that indicate the response state.

> INSnoozeTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
enum INSnoozeTasksIntentResponseCode : NSInteger;
```

## Topics

### Response State

- [INSnoozeTasksIntentResponseCodeUnspecified](insnoozetasksintentresponsecode/unspecified.md): Deprecated. A response code that indicates an unknown state.
- [INSnoozeTasksIntentResponseCodeReady](insnoozetasksintentresponsecode/ready.md): Deprecated. A response code that indicates app readiness.
- [INSnoozeTasksIntentResponseCodeInProgress](insnoozetasksintentresponsecode/inprogress.md): Deprecated. A response code that indicates deletion is still in progress.
- [INSnoozeTasksIntentResponseCodeSuccess](insnoozetasksintentresponsecode/success.md): Deprecated. A response code that indicates your app succeeded.
- [INSnoozeTasksIntentResponseCodeFailure](insnoozetasksintentresponsecode/failure.md): Deprecated. A response code that indicates you were unable to snooze the task.
- [INSnoozeTasksIntentResponseCodeFailureRequiringAppLaunch](insnoozetasksintentresponsecode/failurerequiringapplaunch.md): Deprecated. A response code that indicates the user must launch your app to snooze the tasks.

## See Also

### Getting the Response Code

- [code](insnoozetasksintentresponse/code.md): Deprecated. The code that indicates whether you successfully handled the intent.
