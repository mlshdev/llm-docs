> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediadestinationresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inmediadestinationresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution involves successfully matching the specified parameter.

## Declaration

```swift
class func success(with resolvedMediaDestination: INMediaDestination) -> Self
```

## Parameters

- `resolvedMediaDestination`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INMediaDestinationResolutionResult](../inmediadestinationresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to add a media item to the specified destination.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the value before proceeding.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# successWithResolvedMediaDestination: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution involves successfully matching the specified parameter.

## Declaration

```objectivec
+ (instancetype) successWithResolvedMediaDestination:(INMediaDestination *) resolvedMediaDestination;
```

## Parameters

- `resolvedMediaDestination`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INMediaDestinationResolutionResult](../inmediadestinationresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to add a media item to the specified destination.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithMediaDestinationToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the value before proceeding.
- [disambiguationWithMediaDestinationsToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
