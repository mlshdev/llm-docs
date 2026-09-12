> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspatialeventtriggerresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inspatialeventtriggerresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution involves the successful matching of the specified parameter.

## Declaration

```swift
class func success(with resolvedSpatialEventTrigger: INSpatialEventTrigger) -> Self
```

## Parameters

- `resolvedSpatialEventTrigger`: The object that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INSpatialEventTriggerResolutionResult](../inspatialeventtriggerresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you successfully identify the trigger object to modify. Provide an [INSpatialEventTrigger](../inspatialeventtrigger.md) object with as much information about the trigger conditions as you have available.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires confirmation from the user before proceeding.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# successWithResolvedSpatialEventTrigger: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution involves the successful matching of the specified parameter.

## Declaration

```objectivec
+ (instancetype) successWithResolvedSpatialEventTrigger:(INSpatialEventTrigger *) resolvedSpatialEventTrigger;
```

## Parameters

- `resolvedSpatialEventTrigger`: The object that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INSpatialEventTriggerResolutionResult](../inspatialeventtriggerresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you successfully identify the trigger object to modify. Provide an [INSpatialEventTrigger](../inspatialeventtrigger.md) object with as much information about the trigger conditions as you have available.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithSpatialEventTriggerToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires confirmation from the user before proceeding.
- [disambiguationWithSpatialEventTriggersToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
