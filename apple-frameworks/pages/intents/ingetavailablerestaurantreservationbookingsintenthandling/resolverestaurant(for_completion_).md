> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingsintenthandling/resolverestaurant(for:completion:)](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintenthandling/resolverestaurant(for:completion:))

# resolveRestaurant(for:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Resolves the restaurant to use when gathering reservation times.

## Declaration

```swift
optional func resolveRestaurant(for intent: INGetAvailableRestaurantReservationBookingsIntent, completion: @escaping @Sendable (INRestaurantResolutionResult) -> Void)
```

```swift
optional func resolveRestaurant(for intent: INGetAvailableRestaurantReservationBookingsIntent) async -> INRestaurantResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value contains the restaurant you plan to use when generating the reservation times. If you located more than one restaurant that matches the provided information, create a resolution result that asks the user to choose from among the possible options.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the restaurant to use when gathering reservation time.

## See Also

### Resolving the Intent Parameters

- [resolvePartySize(for:completion:)](resolvepartysize%28for_completion_%29.md): Resolves the party size to use when generating the reservation times.
- [resolvePreferredBookingDateComponents(for:completion:)](resolvepreferredbookingdatecomponents%28for_completion_%29.md): Resolves the date to use when generating the reservation times.

# resolveRestaurantForGetAvailableRestaurantReservationBookings:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Resolves the restaurant to use when gathering reservation times.

## Declaration

```objectivec
- (void) resolveRestaurantForGetAvailableRestaurantReservationBookings:(INGetAvailableRestaurantReservationBookingsIntent *) intent withCompletion:(void (^)(INRestaurantResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value contains the restaurant you plan to use when generating the reservation times. If you located more than one restaurant that matches the provided information, create a resolution result that asks the user to choose from among the possible options.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the restaurant to use when gathering reservation time.

## See Also

### Resolving the Intent Parameters

- [resolvePartySizeForGetAvailableRestaurantReservationBookings:withCompletion:](resolvepartysize%28for_completion_%29.md): Resolves the party size to use when generating the reservation times.
- [resolvePreferredBookingDateComponentsForGetAvailableRestaurantReservationBookings:withCompletion:](resolvepreferredbookingdatecomponents%28for_completion_%29.md): Resolves the date to use when generating the reservation times.
