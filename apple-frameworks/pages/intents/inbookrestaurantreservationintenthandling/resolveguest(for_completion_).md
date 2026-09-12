> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintenthandling/resolveguest(for:completion:)](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintenthandling/resolveguest(for:completion:))

# resolveGuest(for:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Resolves the identity of the guest associated with the reservation.

## Declaration

```swift
optional func resolveGuest(for intent: INBookRestaurantReservationIntent, completion: @escaping @Sendable (INRestaurantGuestResolutionResult) -> Void)
```

```swift
optional func resolveGuest(for intent: INBookRestaurantReservationIntent) async -> INRestaurantGuestResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value contains the [INRestaurantGuest](../inrestaurantguest.md) object you plan to use when creating the reservation.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the contact person for the reservation. The resolved guess is not necessarily the person who created the reservation.

## See Also

### Resolving the Intent Parameters

- [resolveRestaurant(for:completion:)](resolverestaurant%28for_completion_%29.md): Resolves the restaurant associated with the reservation.
- [resolveBookingDateComponents(for:completion:)](resolvebookingdatecomponents%28for_completion_%29.md): Resolves the date of the reservation.
- [resolvePartySize(for:completion:)](resolvepartysize%28for_completion_%29.md): Resolves the number of people in the user’s party.
- [resolveGuestProvidedSpecialRequestText(for:completion:)](resolveguestprovidedspecialrequesttext%28for_completion_%29.md): Resolves any special requests made in connection with the reservation.

# resolveGuestForBookRestaurantReservation:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Resolves the identity of the guest associated with the reservation.

## Declaration

```objectivec
- (void) resolveGuestForBookRestaurantReservation:(INBookRestaurantReservationIntent *) intent withCompletion:(void (^)(INRestaurantGuestResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value contains the [INRestaurantGuest](../inrestaurantguest.md) object you plan to use when creating the reservation.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the contact person for the reservation. The resolved guess is not necessarily the person who created the reservation.

## See Also

### Resolving the Intent Parameters

- [resolveRestaurantForBookRestaurantReservation:withCompletion:](resolverestaurant%28for_completion_%29.md): Resolves the restaurant associated with the reservation.
- [resolveBookingDateComponentsForBookRestaurantReservation:withCompletion:](resolvebookingdatecomponents%28for_completion_%29.md): Resolves the date of the reservation.
- [resolvePartySizeForBookRestaurantReservation:withCompletion:](resolvepartysize%28for_completion_%29.md): Resolves the number of people in the user’s party.
- [resolveGuestProvidedSpecialRequestTextForBookRestaurantReservation:withCompletion:](resolveguestprovidedspecialrequesttext%28for_completion_%29.md): Resolves any special requests made in connection with the reservation.
