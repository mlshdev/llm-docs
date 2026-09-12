> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspatialeventtriggerresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inspatialeventtriggerresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution requires confirmation from the user before proceeding.

## Declaration

```swift
class func confirmationRequired(with spatialEventTriggerToConfirm: INSpatialEventTrigger?) -> Self
```

## Parameters

- `spatialEventTriggerToConfirm`: The object that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INSpatialEventTriggerResolutionResult](../inspatialeventtriggerresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you have to make assumptions about the location details specified by the user. Provide an [INSpatialEventTrigger](../inspatialeventtrigger.md) object with the trigger details as you intend to apply them.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# confirmationRequiredWithSpatialEventTriggerToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution requires confirmation from the user before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithSpatialEventTriggerToConfirm:(INSpatialEventTrigger *) spatialEventTriggerToConfirm;
```

## Parameters

- `spatialEventTriggerToConfirm`: The object that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INSpatialEventTriggerResolutionResult](../inspatialeventtriggerresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you have to make assumptions about the location details specified by the user. Provide an [INSpatialEventTrigger](../inspatialeventtrigger.md) object with the trigger details as you intend to apply them.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedSpatialEventTrigger:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguationWithSpatialEventTriggersToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
