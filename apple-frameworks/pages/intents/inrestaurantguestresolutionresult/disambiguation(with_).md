> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantguestresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/inrestaurantguestresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```swift
class func disambiguation(with restaurantGuestsToDisambiguate: [INRestaurantGuest]) -> Self
```

## Parameters

- `restaurantGuestsToDisambiguate`: An array of [INRestaurantGuest](../inrestaurantguest.md) objects from which to select. Specify as few items as possible, and preferably no more than five.

<a id="return-value"></a>

## Return Value

A new [INRestaurantGuestResolutionResult](../inrestaurantguestresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you cannot resolve the guest uniquely and need the user to select from a limited set of possible guests.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

# disambiguationWithRestaurantGuestsToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```objectivec
+ (instancetype) disambiguationWithRestaurantGuestsToDisambiguate:(NSArray<INRestaurantGuest *> *) restaurantGuestsToDisambiguate;
```

## Parameters

- `restaurantGuestsToDisambiguate`: An array of [INRestaurantGuest](../inrestaurantguest.md) objects from which to select. Specify as few items as possible, and preferably no more than five.

<a id="return-value"></a>

## Return Value

A new [INRestaurantGuestResolutionResult](../inrestaurantguestresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you cannot resolve the guest uniquely and need the user to select from a limited set of possible guests.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedRestaurantGuest:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithRestaurantGuestToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
