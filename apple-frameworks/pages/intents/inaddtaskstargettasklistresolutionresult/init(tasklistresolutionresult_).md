> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtaskstargettasklistresolutionresult/init(tasklistresolutionresult:)](https://developer.apple.com/documentation/intents/inaddtaskstargettasklistresolutionresult/init(tasklistresolutionresult:))

# init(taskListResolutionResult:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution involves successfully matching the specified task list.

## Declaration

```swift
init(taskListResolutionResult: INTaskListResolutionResult)
```

## Parameters

- `taskListResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INTaskListResolutionResult](../intasklistresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to add a task to the specified task list.

## See Also

### Creating a Resolution Result

- [confirmationRequired(with:forReason:)](confirmationrequired%28with_forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the reason for creating a new task list before proceeding.
- [INAddTasksTargetTaskListConfirmationReason](../inaddtaskstargettasklistconfirmationreason.md): Deprecated. Constants that indicate the reason for confirming a task list.

# initWithTaskListResolutionResult: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution involves successfully matching the specified task list.

## Declaration

```objectivec
- (instancetype) initWithTaskListResolutionResult:(INTaskListResolutionResult *) taskListResolutionResult;
```

## Parameters

- `taskListResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INTaskListResolutionResult](../intasklistresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to add a task to the specified task list.

## See Also

### Creating a Resolution Result

- [confirmationRequiredWithTaskListToConfirm:forReason:](confirmationrequired%28with_forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the reason for creating a new task list before proceeding.
- [INAddTasksTargetTaskListConfirmationReason](../inaddtaskstargettasklistconfirmationreason.md): Deprecated. Constants that indicate the reason for confirming a task list.
