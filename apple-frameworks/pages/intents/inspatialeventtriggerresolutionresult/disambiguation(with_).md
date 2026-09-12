> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspatialeventtriggerresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/inspatialeventtriggerresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```swift
class func disambiguation(with spatialEventTriggersToDisambiguate: [INSpatialEventTrigger]) -> Self
```

## Parameters

- `spatialEventTriggersToDisambiguate`: An array of [INSpatialEventTrigger](../inspatialeventtrigger.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INSpatialEventTriggerResolutionResult](../inspatialeventtriggerresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one trigger condition matches the provided information and you cannot pick one definitively. Ask the user to select from among the triggers that you specify.

For each [INSpatialEventTrigger](../inspatialeventtrigger.md) object that you provide, include enough information to be able to resolve that trigger uniquely later.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires confirmation from the user before proceeding.

# disambiguationWithSpatialEventTriggersToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```objectivec
+ (instancetype) disambiguationWithSpatialEventTriggersToDisambiguate:(NSArray<INSpatialEventTrigger *> *) spatialEventTriggersToDisambiguate;
```

## Parameters

- `spatialEventTriggersToDisambiguate`: An array of [INSpatialEventTrigger](../inspatialeventtrigger.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INSpatialEventTriggerResolutionResult](../inspatialeventtriggerresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one trigger condition matches the provided information and you cannot pick one definitively. Ask the user to select from among the triggers that you specify.

For each [INSpatialEventTrigger](../inspatialeventtrigger.md) object that you provide, include enough information to be able to resolve that trigger uniquely later.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedSpatialEventTrigger:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithSpatialEventTriggerToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires confirmation from the user before proceeding.
