> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetusercurrentrestaurantreservationbookingsintenthandling/handle(getusercurrentrestaurantreservationbookings:completion:)](https://developer.apple.com/documentation/intents/ingetusercurrentrestaurantreservationbookingsintenthandling/handle(getusercurrentrestaurantreservationbookings:completion:))

# handle(getUserCurrentRestaurantReservationBookings:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handles fetching the user’s current reservations.

## Declaration

```swift
func handle(getUserCurrentRestaurantReservationBookings intent: INGetUserCurrentRestaurantReservationBookingsIntent, completion: @escaping @Sendable (INGetUserCurrentRestaurantReservationBookingsIntentResponse) -> Void)
```

```swift
func handle(getUserCurrentRestaurantReservationBookings intent: INGetUserCurrentRestaurantReservationBookingsIntent) async -> INGetUserCurrentRestaurantReservationBookingsIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the request. The information in this object has already been resolved and confirmed.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INGetUserCurrentRestaurantReservationBookingsIntentResponse](../ingetusercurrentrestaurantreservationbookingsintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should fetch the user’s current reservations, using the information in the `intent` parameter to filter the search results. When done, execute the provided block with a response object that contains the appropriate set of reservations.

# handleGetUserCurrentRestaurantReservationBookings:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handles fetching the user’s current reservations.

## Declaration

```objectivec
- (void) handleGetUserCurrentRestaurantReservationBookings:(INGetUserCurrentRestaurantReservationBookingsIntent *) intent completion:(void (^)(INGetUserCurrentRestaurantReservationBookingsIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the request. The information in this object has already been resolved and confirmed.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INGetUserCurrentRestaurantReservationBookingsIntentResponse](../ingetusercurrentrestaurantreservationbookingsintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method should fetch the user’s current reservations, using the information in the `intent` parameter to filter the search results. When done, execute the provided block with a response object that contains the appropriate set of reservations.
