> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingsintenthandling/resolvepartysize(for:completion:)](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintenthandling/resolvepartysize(for:completion:))

# resolvePartySize(for:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Resolves the party size to use when generating the reservation times.

## Declaration

```swift
optional func resolvePartySize(for intent: INGetAvailableRestaurantReservationBookingsIntent, completion: @escaping @Sendable (INIntegerResolutionResult) -> Void)
```

```swift
optional func resolvePartySize(for intent: INGetAvailableRestaurantReservationBookingsIntent) async -> INIntegerResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value contains the number of people you plan to use when generating the list of reservation times. If you cannot create a reservation for the specified number of people, create a resolution object indicating that the current value is unsupported.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the party size for the reservation.

## See Also

### Resolving the Intent Parameters

- [resolveRestaurant(for:completion:)](resolverestaurant%28for_completion_%29.md): Resolves the restaurant to use when gathering reservation times.
- [resolvePreferredBookingDateComponents(for:completion:)](resolvepreferredbookingdatecomponents%28for_completion_%29.md): Resolves the date to use when generating the reservation times.

# resolvePartySizeForGetAvailableRestaurantReservationBookings:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Resolves the party size to use when generating the reservation times.

## Declaration

```objectivec
- (void) resolvePartySizeForGetAvailableRestaurantReservationBookings:(INGetAvailableRestaurantReservationBookingsIntent *) intent withCompletion:(void (^)(INIntegerResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value contains the number of people you plan to use when generating the list of reservation times. If you cannot create a reservation for the specified number of people, create a resolution object indicating that the current value is unsupported.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the party size for the reservation.

## See Also

### Resolving the Intent Parameters

- [resolveRestaurantForGetAvailableRestaurantReservationBookings:withCompletion:](resolverestaurant%28for_completion_%29.md): Resolves the restaurant to use when gathering reservation times.
- [resolvePreferredBookingDateComponentsForGetAvailableRestaurantReservationBookings:withCompletion:](resolvepreferredbookingdatecomponents%28for_completion_%29.md): Resolves the date to use when generating the reservation times.
