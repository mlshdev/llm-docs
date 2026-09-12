> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingsintenthandling/resolvepreferredbookingdatecomponents(for:completion:)](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintenthandling/resolvepreferredbookingdatecomponents(for:completion:))

# resolvePreferredBookingDateComponents(for:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Resolves the date to use when generating the reservation times.

## Declaration

```swift
optional func resolvePreferredBookingDateComponents(for intent: INGetAvailableRestaurantReservationBookingsIntent, completion: @escaping @Sendable (INDateComponentsResolutionResult) -> Void)
```

```swift
optional func resolvePreferredBookingDateComponents(for intent: INGetAvailableRestaurantReservationBookingsIntent) async -> INDateComponentsResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value contains the date you plan to use when generating the list of reservation times. If you cannot create a reservation for the specified date, create a resolution object suggesting the nearest date that is available and ask the user for confirmation.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the date used when generating the reservation times.

## See Also

### Resolving the Intent Parameters

- [resolveRestaurant(for:completion:)](resolverestaurant%28for_completion_%29.md): Resolves the restaurant to use when gathering reservation times.
- [resolvePartySize(for:completion:)](resolvepartysize%28for_completion_%29.md): Resolves the party size to use when generating the reservation times.

# resolvePreferredBookingDateComponentsForGetAvailableRestaurantReservationBookings:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Resolves the date to use when generating the reservation times.

## Declaration

```objectivec
- (void) resolvePreferredBookingDateComponentsForGetAvailableRestaurantReservationBookings:(INGetAvailableRestaurantReservationBookingsIntent *) intent withCompletion:(void (^)(INDateComponentsResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value contains the date you plan to use when generating the list of reservation times. If you cannot create a reservation for the specified date, create a resolution object suggesting the nearest date that is available and ask the user for confirmation.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the date used when generating the reservation times.

## See Also

### Resolving the Intent Parameters

- [resolveRestaurantForGetAvailableRestaurantReservationBookings:withCompletion:](resolverestaurant%28for_completion_%29.md): Resolves the restaurant to use when gathering reservation times.
- [resolvePartySizeForGetAvailableRestaurantReservationBookings:withCompletion:](resolvepartysize%28for_completion_%29.md): Resolves the party size to use when generating the reservation times.
