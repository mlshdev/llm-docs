> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insnoozetaskstaskresolutionresult/init(taskresolutionresult:)

# init(taskResolutionResult:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution involves successfully snoozing a task.

## Declaration

```swift
init(taskResolutionResult: INTaskResolutionResult)
```

## Parameters

- `taskResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INSnoozeTasksTaskResolutionResult](../insnoozetaskstaskresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to snooze a task.

## See Also

### Creating a Resolution Result

- [unsupported(forReason:)](unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the task to be snoozed before continuing.
- [INSnoozeTasksTaskUnsupportedReason](../insnoozetaskstaskunsupportedreason.md): Deprecated. Constants that indicates the reason the app can’t support the snooze task request.

# initWithTaskResolutionResult: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution involves successfully snoozing a task.

## Declaration

```objectivec
- (instancetype) initWithTaskResolutionResult:(INTaskResolutionResult *) taskResolutionResult;
```

## Parameters

- `taskResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INSnoozeTasksTaskResolutionResult](../insnoozetaskstaskresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to snooze a task.

## See Also

### Creating a Resolution Result

- [unsupportedForReason:](unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the task to be snoozed before continuing.
- [INSnoozeTasksTaskUnsupportedReason](../insnoozetaskstaskunsupportedreason.md): Deprecated. Constants that indicates the reason the app can’t support the snooze task request.
