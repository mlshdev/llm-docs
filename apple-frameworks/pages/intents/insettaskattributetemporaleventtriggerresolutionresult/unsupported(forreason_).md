> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributetemporaleventtriggerresolutionresult/unsupported(forreason:)](https://developer.apple.com/documentation/intents/insettaskattributetemporaleventtriggerresolutionresult/unsupported(forreason:))

# unsupported(forReason:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object with a resolution that provides a reason the temporal event trigger can’t be applied to the task the user intends to modify.

## Declaration

```swift
class func unsupported(forReason reason: INSetTaskAttributeTemporalEventTriggerUnsupportedReason) -> Self
```

## Parameters

- `reason`: The reason that the temporal event trigger is not supported.

<a id="return-value"></a>

## Return Value

A new [INSetTaskAttributeTemporalEventTriggerResolutionResult](../insettaskattributetemporaleventtriggerresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

## See Also

### Creating a Resolution Result

- [init(temporalEventTriggerResolutionResult:)](init%28temporaleventtriggerresolutionresult_%29.md): Deprecated. Creates an object with a resolution that successfully matches the specified temporal event.
- [INSetTaskAttributeTemporalEventTriggerUnsupportedReason](../insettaskattributetemporaleventtriggerunsupportedreason.md): Deprecated. Reasons the app can’t modify the temporal event trigger of the task.

# unsupportedForReason: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an object with a resolution that provides a reason the temporal event trigger can’t be applied to the task the user intends to modify.

## Declaration

```objectivec
+ (instancetype) unsupportedForReason:(INSetTaskAttributeTemporalEventTriggerUnsupportedReason) reason;
```

## Parameters

- `reason`: The reason that the temporal event trigger is not supported.

<a id="return-value"></a>

## Return Value

A new [INSetTaskAttributeTemporalEventTriggerResolutionResult](../insettaskattributetemporaleventtriggerresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

## See Also

### Creating a Resolution Result

- [initWithTemporalEventTriggerResolutionResult:](init%28temporaleventtriggerresolutionresult_%29.md): Deprecated. Creates an object with a resolution that successfully matches the specified temporal event.
- [INSetTaskAttributeTemporalEventTriggerUnsupportedReason](../insettaskattributetemporaleventtriggerunsupportedreason.md): Deprecated. Reasons the app can’t modify the temporal event trigger of the task.
