> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/inrestaurantresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```swift
class func disambiguation(with restaurantsToDisambiguate: [INRestaurant]) -> Self
```

## Parameters

- `restaurantsToDisambiguate`: An array of restaurants from which to select. Specify as few items as possible, and preferably no more than five.

<a id="return-value"></a>

## Return Value

A new [INRestaurantResolutionResult](../inrestaurantresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you cannot resolve the restaurant uniquely and need the user to select from a limited set of possible values.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

# disambiguationWithRestaurantsToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```objectivec
+ (instancetype) disambiguationWithRestaurantsToDisambiguate:(NSArray<INRestaurant *> *) restaurantsToDisambiguate;
```

## Parameters

- `restaurantsToDisambiguate`: An array of restaurants from which to select. Specify as few items as possible, and preferably no more than five.

<a id="return-value"></a>

## Return Value

A new [INRestaurantResolutionResult](../inrestaurantresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you cannot resolve the restaurant uniquely and need the user to select from a limited set of possible values.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedRestaurant:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithRestaurantToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
