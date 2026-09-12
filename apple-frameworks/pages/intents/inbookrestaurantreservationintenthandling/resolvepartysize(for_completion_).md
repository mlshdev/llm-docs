> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintenthandling/resolvepartysize(for:completion:)](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintenthandling/resolvepartysize(for:completion:))

# resolvePartySize(for:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Resolves the number of people in the user’s party.

## Declaration

```swift
optional func resolvePartySize(for intent: INBookRestaurantReservationIntent, completion: @escaping @Sendable (INIntegerResolutionResult) -> Void)
```

```swift
optional func resolvePartySize(for intent: INBookRestaurantReservationIntent) async -> INIntegerResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value contains the number of people you plan to specify when booking the reservation.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the number of people associated with the reservation.

## See Also

### Resolving the Intent Parameters

- [resolveRestaurant(for:completion:)](resolverestaurant%28for_completion_%29.md): Resolves the restaurant associated with the reservation.
- [resolveBookingDateComponents(for:completion:)](resolvebookingdatecomponents%28for_completion_%29.md): Resolves the date of the reservation.
- [resolveGuest(for:completion:)](resolveguest%28for_completion_%29.md): Resolves the identity of the guest associated with the reservation.
- [resolveGuestProvidedSpecialRequestText(for:completion:)](resolveguestprovidedspecialrequesttext%28for_completion_%29.md): Resolves any special requests made in connection with the reservation.

# resolvePartySizeForBookRestaurantReservation:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Resolves the number of people in the user’s party.

## Declaration

```objectivec
- (void) resolvePartySizeForBookRestaurantReservation:(INBookRestaurantReservationIntent *) intent withCompletion:(void (^)(INIntegerResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value contains the number of people you plan to specify when booking the reservation.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the number of people associated with the reservation.

## See Also

### Resolving the Intent Parameters

- [resolveRestaurantForBookRestaurantReservation:withCompletion:](resolverestaurant%28for_completion_%29.md): Resolves the restaurant associated with the reservation.
- [resolveBookingDateComponentsForBookRestaurantReservation:withCompletion:](resolvebookingdatecomponents%28for_completion_%29.md): Resolves the date of the reservation.
- [resolveGuestForBookRestaurantReservation:withCompletion:](resolveguest%28for_completion_%29.md): Resolves the identity of the guest associated with the reservation.
- [resolveGuestProvidedSpecialRequestTextForBookRestaurantReservation:withCompletion:](resolveguestprovidedspecialrequesttext%28for_completion_%29.md): Resolves any special requests made in connection with the reservation.
