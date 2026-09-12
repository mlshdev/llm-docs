> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtasksintentresponsecode](https://developer.apple.com/documentation/intents/inaddtasksintentresponsecode)

# INAddTasksIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Constants indicating the state of the response.

> INAddTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
enum INAddTasksIntentResponseCode
```

## Topics

### Constants

- [INAddTasksIntentResponseCode.unspecified](inaddtasksintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a response code.
- [INAddTasksIntentResponseCode.ready](inaddtasksintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INAddTasksIntentResponseCode.inProgress](inaddtasksintentresponsecode/inprogress.md): Deprecated. The addition of tasks into the task list is still in progress.
- [INAddTasksIntentResponseCode.success](inaddtasksintentresponsecode/success.md): Deprecated. You successfully created the task.
- [INAddTasksIntentResponseCode.failure](inaddtasksintentresponsecode/failure.md): Deprecated. You were unable to add the tasks to the task list.
- [INAddTasksIntentResponseCode.failureRequiringAppLaunch](inaddtasksintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must add the tasks from within your app.

### Initializers

- [init(rawValue:)](inaddtasksintentresponsecode/init%28rawvalue_%29.md): Deprecated.

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

- [code](inaddtasksintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.

# INAddTasksIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Constants indicating the state of the response.

> INAddTasksIntentResponseCode is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
enum INAddTasksIntentResponseCode : NSInteger;
```

## Topics

### Constants

- [INAddTasksIntentResponseCodeUnspecified](inaddtasksintentresponsecode/unspecified.md): Deprecated. The response didn’t specify a response code.
- [INAddTasksIntentResponseCodeReady](inaddtasksintentresponsecode/ready.md): Deprecated. You’re ready to handle the intent.
- [INAddTasksIntentResponseCodeInProgress](inaddtasksintentresponsecode/inprogress.md): Deprecated. The addition of tasks into the task list is still in progress.
- [INAddTasksIntentResponseCodeSuccess](inaddtasksintentresponsecode/success.md): Deprecated. You successfully created the task.
- [INAddTasksIntentResponseCodeFailure](inaddtasksintentresponsecode/failure.md): Deprecated. You were unable to add the tasks to the task list.
- [INAddTasksIntentResponseCodeFailureRequiringAppLaunch](inaddtasksintentresponsecode/failurerequiringapplaunch.md): Deprecated. The user must add the tasks from within your app.

## See Also

### Getting the Response Code

- [code](inaddtasksintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
