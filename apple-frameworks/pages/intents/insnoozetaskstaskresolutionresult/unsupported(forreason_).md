> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insnoozetaskstaskresolutionresult/unsupported(forreason:)](https://developer.apple.com/documentation/intents/insnoozetaskstaskresolutionresult/unsupported(forreason:))

# unsupported(forReason:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution requires the user to confirm the task to be snoozed before continuing.

## Declaration

```swift
class func unsupported(forReason reason: INSnoozeTasksTaskUnsupportedReason) -> Self
```

<a id="return-value"></a>

## Return Value

A new [INSnoozeTasksTaskResolutionResult](../insnoozetaskstaskresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

## See Also

### Creating a Resolution Result

- [init(taskResolutionResult:)](init%28taskresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully snoozing a task.
- [INSnoozeTasksTaskUnsupportedReason](../insnoozetaskstaskunsupportedreason.md): Deprecated. Constants that indicates the reason the app can’t support the snooze task request.

# unsupportedForReason: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution requires the user to confirm the task to be snoozed before continuing.

## Declaration

```objectivec
+ (instancetype) unsupportedForReason:(INSnoozeTasksTaskUnsupportedReason) reason;
```

<a id="return-value"></a>

## Return Value

A new [INSnoozeTasksTaskResolutionResult](../insnoozetaskstaskresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

## See Also

### Creating a Resolution Result

- [initWithTaskResolutionResult:](init%28taskresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully snoozing a task.
- [INSnoozeTasksTaskUnsupportedReason](../insnoozetaskstaskunsupportedreason.md): Deprecated. Constants that indicates the reason the app can’t support the snooze task request.
