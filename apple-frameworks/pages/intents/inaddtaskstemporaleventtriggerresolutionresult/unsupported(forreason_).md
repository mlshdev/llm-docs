> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtaskstemporaleventtriggerresolutionresult/unsupported(forreason:)](https://developer.apple.com/documentation/intents/inaddtaskstemporaleventtriggerresolutionresult/unsupported(forreason:))

# unsupported(forReason:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution provides a reason why the temporal event trigger cannot be applied to the task the user intends to create.

## Declaration

```swift
class func unsupported(forReason reason: INAddTasksTemporalEventTriggerUnsupportedReason) -> Self
```

## Parameters

- `reason`: The reason that the temporal event trigger is not supported.

<a id="return-value"></a>

## Return Value

A new [INAddTasksTemporalEventTriggerResolutionResult](../inaddtaskstemporaleventtriggerresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

## See Also

### Creating a Resolution Result

- [init(temporalEventTriggerResolutionResult:)](init%28temporaleventtriggerresolutionresult_%29.md): Deprecated. Creates an object whose resolution successfully matches the specified temporal event.
- [INAddTasksTemporalEventTriggerUnsupportedReason](../inaddtaskstemporaleventtriggerunsupportedreason.md): Deprecated. Reasons the app can’t create a task with a particular temporal event trigger.

# unsupportedForReason: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution provides a reason why the temporal event trigger cannot be applied to the task the user intends to create.

## Declaration

```objectivec
+ (instancetype) unsupportedForReason:(INAddTasksTemporalEventTriggerUnsupportedReason) reason;
```

## Parameters

- `reason`: The reason that the temporal event trigger is not supported.

<a id="return-value"></a>

## Return Value

A new [INAddTasksTemporalEventTriggerResolutionResult](../inaddtaskstemporaleventtriggerresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

## See Also

### Creating a Resolution Result

- [initWithTemporalEventTriggerResolutionResult:](init%28temporaleventtriggerresolutionresult_%29.md): Deprecated. Creates an object whose resolution successfully matches the specified temporal event.
- [INAddTasksTemporalEventTriggerUnsupportedReason](../inaddtaskstemporaleventtriggerunsupportedreason.md): Deprecated. Reasons the app can’t create a task with a particular temporal event trigger.
