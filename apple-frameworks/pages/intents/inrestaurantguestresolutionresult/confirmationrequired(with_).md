> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantguestresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inrestaurantguestresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with restaurantGuestToConfirm: INRestaurantGuest?) -> Self
```

## Parameters

- `restaurantGuestToConfirm`: The guest identity for the user to confirm.

<a id="return-value"></a>

## Return Value

A new [INRestaurantGuestResolutionResult](../inrestaurantguestresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the guest to a single user of your app, but you want the user to confirm that value before proceeding. You might ask for confirmation when there is some doubt that the specified guest is who the user intended.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# confirmationRequiredWithRestaurantGuestToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithRestaurantGuestToConfirm:(INRestaurantGuest *) restaurantGuestToConfirm;
```

## Parameters

- `restaurantGuestToConfirm`: The guest identity for the user to confirm.

<a id="return-value"></a>

## Return Value

A new [INRestaurantGuestResolutionResult](../inrestaurantguestresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the guest to a single user of your app, but you want the user to confirm that value before proceeding. You might ask for confirmation when there is some doubt that the specified guest is who the user intended.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedRestaurantGuest:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguationWithRestaurantGuestsToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
