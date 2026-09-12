> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtaskstargettasklistconfirmationreason](https://developer.apple.com/documentation/intents/inaddtaskstargettasklistconfirmationreason)

# INAddTasksTargetTaskListConfirmationReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Constants that indicate the reason for confirming a task list.

## Declaration

```swift
enum INAddTasksTargetTaskListConfirmationReason
```

## Topics

### Constants

- [INAddTasksTargetTaskListConfirmationReason.listShouldBeCreated](inaddtaskstargettasklistconfirmationreason/listshouldbecreated.md): Deprecated. A confirmation reason that indicates the app should create the task list.

### Initializers

- [init(rawValue:)](inaddtaskstargettasklistconfirmationreason/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Resolution Result

- [init(taskListResolutionResult:)](inaddtaskstargettasklistresolutionresult/init%28tasklistresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully matching the specified task list.
- [confirmationRequired(with:forReason:)](inaddtaskstargettasklistresolutionresult/confirmationrequired%28with_forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the reason for creating a new task list before proceeding.

# INAddTasksTargetTaskListConfirmationReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Constants that indicate the reason for confirming a task list.

## Declaration

```objectivec
enum INAddTasksTargetTaskListConfirmationReason : NSInteger;
```

## Topics

### Constants

- [INAddTasksTargetTaskListConfirmationReasonListShouldBeCreated](inaddtaskstargettasklistconfirmationreason/listshouldbecreated.md): Deprecated. A confirmation reason that indicates the app should create the task list.

## See Also

### Creating a Resolution Result

- [initWithTaskListResolutionResult:](inaddtaskstargettasklistresolutionresult/init%28tasklistresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully matching the specified task list.
- [confirmationRequiredWithTaskListToConfirm:forReason:](inaddtaskstargettasklistresolutionresult/confirmationrequired%28with_forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the reason for creating a new task list before proceeding.
