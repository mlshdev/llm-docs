> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediadestinationresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inmediadestinationresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires the user to confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with mediaDestinationToConfirm: INMediaDestination?) -> Self
```

## Parameters

- `mediaDestinationToConfirm`: The value that resolves the request, but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INMediaDestinationResolutionResult](../inmediadestinationresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t resolve the parameter to a destination type that’s similar, but not equal to, the one specified in the intent. Don’t use this method to resolve date types your app doesn’t support.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves successfully matching the specified parameter.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# confirmationRequiredWithMediaDestinationToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires the user to confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithMediaDestinationToConfirm:(INMediaDestination *) mediaDestinationToConfirm;
```

## Parameters

- `mediaDestinationToConfirm`: The value that resolves the request, but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INMediaDestinationResolutionResult](../inmediadestinationresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t resolve the parameter to a destination type that’s similar, but not equal to, the one specified in the intent. Don’t use this method to resolve date types your app doesn’t support.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedMediaDestination:](success%28with_%29.md): Creates an object whose resolution involves successfully matching the specified parameter.
- [disambiguationWithMediaDestinationsToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
