> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediadestinationresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/inmediadestinationresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```swift
class func disambiguation(with mediaDestinationsToDisambiguate: [INMediaDestination]) -> Self
```

## Parameters

- `mediaDestinationsToDisambiguate`: An array of [INMediaDestinationReference](../inmediadestinationreference.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INMediaDestinationResolutionResult](../inmediadestinationresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one media destination matches the given information and you can’t definitevely pick one. Ask the user to select from among the notes that you specify.

For each [INMediaDestinationReference](../inmediadestinationreference.md) object you provide, include enough information to be able to locate the destination  later. When the user selects one of the destinations, SiriKit puts the details from your [INMediaDestinationReference](../inmediadestinationreference.md) object into the intent and asks you to resolve the adding of media again.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves successfully matching the specified parameter.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the value before proceeding.

# disambiguationWithMediaDestinationsToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```objectivec
+ (instancetype) disambiguationWithMediaDestinationsToDisambiguate:(NSArray<INMediaDestination *> *) mediaDestinationsToDisambiguate;
```

## Parameters

- `mediaDestinationsToDisambiguate`: An array of [INMediaDestination](../inmediadestinationreference.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INMediaDestinationResolutionResult](../inmediadestinationresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one media destination matches the given information and you can’t definitevely pick one. Ask the user to select from among the notes that you specify.

For each [INMediaDestination](../inmediadestinationreference.md) object you provide, include enough information to be able to locate the destination  later. When the user selects one of the destinations, SiriKit puts the details from your [INMediaDestination](../inmediadestinationreference.md) object into the intent and asks you to resolve the adding of media again.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedMediaDestination:](success%28with_%29.md): Creates an object whose resolution involves successfully matching the specified parameter.
- [confirmationRequiredWithMediaDestinationToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the value before proceeding.
