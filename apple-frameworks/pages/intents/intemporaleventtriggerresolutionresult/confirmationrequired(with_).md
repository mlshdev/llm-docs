> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intemporaleventtriggerresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/intemporaleventtriggerresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution requires confirmation from the user before proceeding.

## Declaration

```swift
class func confirmationRequired(with temporalEventTriggerToConfirm: INTemporalEventTrigger?) -> Self
```

## Parameters

- `temporalEventTriggerToConfirm`: The object that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INTemporalEventTriggerResolutionResult](../intemporaleventtriggerresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you have to make assumptions about the time information specified by the user. Provide an [INTemporalEventTrigger](../intemporaleventtrigger.md) object with the trigger details as you intend to apply them.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# confirmationRequiredWithTemporalEventTriggerToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution requires confirmation from the user before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithTemporalEventTriggerToConfirm:(INTemporalEventTrigger *) temporalEventTriggerToConfirm;
```

## Parameters

- `temporalEventTriggerToConfirm`: The object that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INTemporalEventTriggerResolutionResult](../intemporaleventtriggerresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you have to make assumptions about the time information specified by the user. Provide an [INTemporalEventTrigger](../intemporaleventtrigger.md) object with the trigger details as you intend to apply them.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedTemporalEventTrigger:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguationWithTemporalEventTriggersToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
