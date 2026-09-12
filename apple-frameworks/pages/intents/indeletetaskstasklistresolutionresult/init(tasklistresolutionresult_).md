> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetaskstasklistresolutionresult/init(tasklistresolutionresult:)](https://developer.apple.com/documentation/intents/indeletetaskstasklistresolutionresult/init(tasklistresolutionresult:))

# init(taskListResolutionResult:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Creates an object whose resolution involves successfully deleting a task from a task list.

> INDeleteTasksTaskListResolutionResult is deprecated. There is no replacement.

## Declaration

```swift
init(taskListResolutionResult: INTaskListResolutionResult)
```

## Parameters

- `taskListResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INDeleteTasksTaskListResolutionResult](../indeletetaskstasklistresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to delete a task from a task list.

## See Also

### Creating a Resolution Result

- [unsupported(forReason:)](unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the task list before continuing.
- [INDeleteTasksTaskListUnsupportedReason](../indeletetaskstasklistunsupportedreason.md): Deprecated. Constants that indicate the reason an app can’t support the delete task request.

# initWithTaskListResolutionResult: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Creates an object whose resolution involves successfully deleting a task from a task list.

> INDeleteTasksTaskListResolutionResult is deprecated. There is no replacement.

## Declaration

```objectivec
- (instancetype) initWithTaskListResolutionResult:(INTaskListResolutionResult *) taskListResolutionResult;
```

## Parameters

- `taskListResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INDeleteTasksTaskListResolutionResult](../indeletetaskstasklistresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to delete a task from a task list.

## See Also

### Creating a Resolution Result

- [unsupportedForReason:](unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the task list before continuing.
- [INDeleteTasksTaskListUnsupportedReason](../indeletetaskstasklistunsupportedreason.md): Deprecated. Constants that indicate the reason an app can’t support the delete task request.
