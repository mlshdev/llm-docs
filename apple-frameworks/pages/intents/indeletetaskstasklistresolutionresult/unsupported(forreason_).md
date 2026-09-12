> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetaskstasklistresolutionresult/unsupported(forreason:)](https://developer.apple.com/documentation/intents/indeletetaskstasklistresolutionresult/unsupported(forreason:))

# unsupported(forReason:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Creates an object whose resolution requires the user to confirm the task list before continuing.

> INDeleteTasksTaskListResolutionResult is deprecated. There is no replacement.

## Declaration

```swift
class func unsupported(forReason reason: INDeleteTasksTaskListUnsupportedReason) -> Self
```

## Parameters

- `reason`: The reason that deletion isn’t supported.

<a id="return-value"></a>

## Return Value

A new [INDeleteTasksTaskListResolutionResult](../indeletetaskstasklistresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

## See Also

### Creating a Resolution Result

- [init(taskListResolutionResult:)](init%28tasklistresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully deleting a task from a task list.
- [INDeleteTasksTaskListUnsupportedReason](../indeletetaskstasklistunsupportedreason.md): Deprecated. Constants that indicate the reason an app can’t support the delete task request.

# unsupportedForReason: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Creates an object whose resolution requires the user to confirm the task list before continuing.

> INDeleteTasksTaskListResolutionResult is deprecated. There is no replacement.

## Declaration

```objectivec
+ (instancetype) unsupportedForReason:(INDeleteTasksTaskListUnsupportedReason) reason;
```

## Parameters

- `reason`: The reason that deletion isn’t supported.

<a id="return-value"></a>

## Return Value

A new [INDeleteTasksTaskListResolutionResult](../indeletetaskstasklistresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

## See Also

### Creating a Resolution Result

- [initWithTaskListResolutionResult:](init%28tasklistresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully deleting a task from a task list.
- [INDeleteTasksTaskListUnsupportedReason](../indeletetaskstasklistunsupportedreason.md): Deprecated. Constants that indicate the reason an app can’t support the delete task request.
