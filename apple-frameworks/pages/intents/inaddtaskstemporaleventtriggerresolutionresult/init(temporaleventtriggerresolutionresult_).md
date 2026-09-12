> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtaskstemporaleventtriggerresolutionresult/init(temporaleventtriggerresolutionresult:)](https://developer.apple.com/documentation/intents/inaddtaskstemporaleventtriggerresolutionresult/init(temporaleventtriggerresolutionresult:))

# init(temporalEventTriggerResolutionResult:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution successfully matches the specified temporal event.

## Declaration

```swift
init(temporalEventTriggerResolutionResult: INTemporalEventTriggerResolutionResult)
```

## Parameters

- `temporalEventTriggerResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INAddTasksTemporalEventTriggerResolutionResult](../inaddtaskstemporaleventtriggerresolutionresult.md) object or nil if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to resolve the temporal event trigger for the user’s intent.

## See Also

### Creating a Resolution Result

- [unsupported(forReason:)](unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution provides a reason why the temporal event trigger cannot be applied to the task the user intends to create.
- [INAddTasksTemporalEventTriggerUnsupportedReason](../inaddtaskstemporaleventtriggerunsupportedreason.md): Deprecated. Reasons the app can’t create a task with a particular temporal event trigger.

# initWithTemporalEventTriggerResolutionResult: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object whose resolution successfully matches the specified temporal event.

## Declaration

```objectivec
- (instancetype) initWithTemporalEventTriggerResolutionResult:(INTemporalEventTriggerResolutionResult *) temporalEventTriggerResolutionResult;
```

## Parameters

- `temporalEventTriggerResolutionResult`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INAddTasksTemporalEventTriggerResolutionResult](../inaddtaskstemporaleventtriggerresolutionresult.md) object or nil if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to resolve the temporal event trigger for the user’s intent.

## See Also

### Creating a Resolution Result

- [unsupportedForReason:](unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution provides a reason why the temporal event trigger cannot be applied to the task the user intends to create.
- [INAddTasksTemporalEventTriggerUnsupportedReason](../inaddtaskstemporaleventtriggerunsupportedreason.md): Deprecated. Reasons the app can’t create a task with a particular temporal event trigger.
