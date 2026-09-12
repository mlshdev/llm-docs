> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetaskstaskresolutionresult/unsupported(forreason:)](https://developer.apple.com/documentation/intents/indeletetaskstaskresolutionresult/unsupported(forreason:))

# unsupported(forReason:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Creates an object whose resolution requires the user to confirm the task before continuing.

> INDeleteTasksTaskResolutionResult is deprecated. There is no replacement.

## Declaration

```swift
class func unsupported(forReason reason: INDeleteTasksTaskUnsupportedReason) -> Self
```

<a id="return-value"></a>

## Return Value

A new [INDeleteTasksTaskResolutionResult](../indeletetaskstaskresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

## See Also

### Creating a Resolution Result

- [init(taskResolutionResult:)](init%28taskresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully deleting a task.
- [INDeleteTasksTaskUnsupportedReason](../indeletetaskstaskunsupportedreason.md): Deprecated. Constants that indicate the reason the app can’t support the delete task request.

# unsupportedForReason: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Creates an object whose resolution requires the user to confirm the task before continuing.

> INDeleteTasksTaskResolutionResult is deprecated. There is no replacement.

## Declaration

```objectivec
+ (instancetype) unsupportedForReason:(INDeleteTasksTaskUnsupportedReason) reason;
```

<a id="return-value"></a>

## Return Value

A new [INDeleteTasksTaskResolutionResult](../indeletetaskstaskresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

## See Also

### Creating a Resolution Result

- [initWithTaskResolutionResult:](init%28taskresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully deleting a task.
- [INDeleteTasksTaskUnsupportedReason](../indeletetaskstaskunsupportedreason.md): Deprecated. Constants that indicate the reason the app can’t support the delete task request.
