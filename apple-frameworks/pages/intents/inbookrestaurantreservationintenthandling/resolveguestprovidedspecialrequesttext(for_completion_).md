> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintenthandling/resolveguestprovidedspecialrequesttext(for:completion:)](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintenthandling/resolveguestprovidedspecialrequesttext(for:completion:))

# resolveGuestProvidedSpecialRequestText(for:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Resolves any special requests made in connection with the reservation.

## Declaration

```swift
optional func resolveGuestProvidedSpecialRequestText(for intent: INBookRestaurantReservationIntent, completion: @escaping @Sendable (INStringResolutionResult) -> Void)
```

```swift
optional func resolveGuestProvidedSpecialRequestText(for intent: INBookRestaurantReservationIntent) async -> INStringResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value contains a string with the text you plan to send to the restaurant when communicating special requests.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve any special requests for the reservation. For example, the guest requires a booster seat for a child or one of the guests has a food allergy.

## See Also

### Resolving the Intent Parameters

- [resolveRestaurant(for:completion:)](resolverestaurant%28for_completion_%29.md): Resolves the restaurant associated with the reservation.
- [resolveBookingDateComponents(for:completion:)](resolvebookingdatecomponents%28for_completion_%29.md): Resolves the date of the reservation.
- [resolvePartySize(for:completion:)](resolvepartysize%28for_completion_%29.md): Resolves the number of people in the user’s party.
- [resolveGuest(for:completion:)](resolveguest%28for_completion_%29.md): Resolves the identity of the guest associated with the reservation.

# resolveGuestProvidedSpecialRequestTextForBookRestaurantReservation:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Resolves any special requests made in connection with the reservation.

## Declaration

```objectivec
- (void) resolveGuestProvidedSpecialRequestTextForBookRestaurantReservation:(INBookRestaurantReservationIntent *) intent withCompletion:(void (^)(INStringResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value contains a string with the text you plan to send to the restaurant when communicating special requests.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve any special requests for the reservation. For example, the guest requires a booster seat for a child or one of the guests has a food allergy.

## See Also

### Resolving the Intent Parameters

- [resolveRestaurantForBookRestaurantReservation:withCompletion:](resolverestaurant%28for_completion_%29.md): Resolves the restaurant associated with the reservation.
- [resolveBookingDateComponentsForBookRestaurantReservation:withCompletion:](resolvebookingdatecomponents%28for_completion_%29.md): Resolves the date of the reservation.
- [resolvePartySizeForBookRestaurantReservation:withCompletion:](resolvepartysize%28for_completion_%29.md): Resolves the number of people in the user’s party.
- [resolveGuestForBookRestaurantReservation:withCompletion:](resolveguest%28for_completion_%29.md): Resolves the identity of the guest associated with the reservation.
