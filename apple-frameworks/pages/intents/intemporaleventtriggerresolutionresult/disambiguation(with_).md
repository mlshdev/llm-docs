> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intemporaleventtriggerresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/intemporaleventtriggerresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```swift
class func disambiguation(with temporalEventTriggersToDisambiguate: [INTemporalEventTrigger]) -> Self
```

## Parameters

- `temporalEventTriggersToDisambiguate`: An array of [INTemporalEventTrigger](../intemporaleventtrigger.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INTemporalEventTriggerResolutionResult](../intemporaleventtriggerresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one trigger condition matches the provided information and you cannot pick one definitively. Ask the user to select from among the triggers that you specify.

For each [INTemporalEventTrigger](../intemporaleventtrigger.md) object that you provide, include enough information to be able to resolve that trigger uniquely later.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires confirmation from the user before proceeding.

# disambiguationWithTemporalEventTriggersToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```objectivec
+ (instancetype) disambiguationWithTemporalEventTriggersToDisambiguate:(NSArray<INTemporalEventTrigger *> *) temporalEventTriggersToDisambiguate;
```

## Parameters

- `temporalEventTriggersToDisambiguate`: An array of [INTemporalEventTrigger](../intemporaleventtrigger.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INTemporalEventTriggerResolutionResult](../intemporaleventtriggerresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one trigger condition matches the provided information and you cannot pick one definitively. Ask the user to select from among the triggers that you specify.

For each [INTemporalEventTrigger](../intemporaleventtrigger.md) object that you provide, include enough information to be able to resolve that trigger uniquely later.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedTemporalEventTrigger:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithTemporalEventTriggerToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires confirmation from the user before proceeding.
