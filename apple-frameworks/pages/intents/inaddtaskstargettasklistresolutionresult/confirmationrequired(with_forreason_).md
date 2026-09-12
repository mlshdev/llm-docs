> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtaskstargettasklistresolutionresult/confirmationrequired(with:forreason:)](https://developer.apple.com/documentation/intents/inaddtaskstargettasklistresolutionresult/confirmationrequired(with:forreason:))

# confirmationRequired(with:forReason:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution requires the user to confirm the reason for creating a new task list before proceeding.

## Declaration

```swift
class func confirmationRequired(with taskListToConfirm: INTaskList?, forReason reason: INAddTasksTargetTaskListConfirmationReason) -> Self
```

## Parameters

- `taskListToConfirm`: The task list to confirm.
- `reason`: The reason for confirming the task list.

<a id="return-value"></a>

## Return Value

A new [INAddTasksTargetTaskListResolutionResult](../inaddtaskstargettasklistresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t resolve the parameter to a similar but not equal temporal event type than the one specified in the intent. Don’t use this method to resolve task list types your app doesn’t support.

## See Also

### Creating a Resolution Result

- [init(taskListResolutionResult:)](init%28tasklistresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully matching the specified task list.
- [INAddTasksTargetTaskListConfirmationReason](../inaddtaskstargettasklistconfirmationreason.md): Deprecated. Constants that indicate the reason for confirming a task list.

# confirmationRequiredWithTaskListToConfirm:forReason: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution requires the user to confirm the reason for creating a new task list before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithTaskListToConfirm:(INTaskList *) taskListToConfirm forReason:(INAddTasksTargetTaskListConfirmationReason) reason;
```

## Parameters

- `taskListToConfirm`: The task list to confirm.
- `reason`: The reason for confirming the task list.

<a id="return-value"></a>

## Return Value

A new [INAddTasksTargetTaskListResolutionResult](../inaddtaskstargettasklistresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t resolve the parameter to a similar but not equal temporal event type than the one specified in the intent. Don’t use this method to resolve task list types your app doesn’t support.

## See Also

### Creating a Resolution Result

- [initWithTaskListResolutionResult:](init%28tasklistresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully matching the specified task list.
- [INAddTasksTargetTaskListConfirmationReason](../inaddtaskstargettasklistconfirmationreason.md): Deprecated. Constants that indicate the reason for confirming a task list.
