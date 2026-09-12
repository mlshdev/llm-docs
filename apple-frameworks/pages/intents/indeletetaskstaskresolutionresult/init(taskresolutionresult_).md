> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetaskstaskresolutionresult/init(taskresolutionresult:)](https://developer.apple.com/documentation/intents/indeletetaskstaskresolutionresult/init(taskresolutionresult:))

# init(taskResolutionResult:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Creates an object whose resolution involves successfully deleting a task.

> INDeleteTasksTaskResolutionResult is deprecated. There is no replacement.

## Declaration

```swift
init(taskResolutionResult: INTaskResolutionResult)
```

## Parameters

- `taskResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INDeleteTasksTaskResolutionResult](../indeletetaskstaskresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to delete a task.

## See Also

### Creating a Resolution Result

- [unsupported(forReason:)](unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the task before continuing.
- [INDeleteTasksTaskUnsupportedReason](../indeletetaskstaskunsupportedreason.md): Deprecated. Constants that indicate the reason the app can’t support the delete task request.

# initWithTaskResolutionResult: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Creates an object whose resolution involves successfully deleting a task.

> INDeleteTasksTaskResolutionResult is deprecated. There is no replacement.

## Declaration

```objectivec
- (instancetype) initWithTaskResolutionResult:(INTaskResolutionResult *) taskResolutionResult;
```

## Parameters

- `taskResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INDeleteTasksTaskResolutionResult](../indeletetaskstaskresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to delete a task.

## See Also

### Creating a Resolution Result

- [unsupportedForReason:](unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the task before continuing.
- [INDeleteTasksTaskUnsupportedReason](../indeletetaskstaskunsupportedreason.md): Deprecated. Constants that indicate the reason the app can’t support the delete task request.
