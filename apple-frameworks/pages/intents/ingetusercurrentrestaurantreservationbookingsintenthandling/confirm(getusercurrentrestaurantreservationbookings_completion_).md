> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetusercurrentrestaurantreservationbookingsintenthandling/confirm(getusercurrentrestaurantreservationbookings:completion:)](https://developer.apple.com/documentation/intents/ingetusercurrentrestaurantreservationbookingsintenthandling/confirm(getusercurrentrestaurantreservationbookings:completion:))

# confirm(getUserCurrentRestaurantReservationBookings:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Confirms whether you can get the user’s current reservations.

## Declaration

```swift
optional func confirm(getUserCurrentRestaurantReservationBookings intent: INGetUserCurrentRestaurantReservationBookingsIntent, completion: @escaping @Sendable (INGetUserCurrentRestaurantReservationBookingsIntentResponse) -> Void)
```

```swift
optional func confirm(getUserCurrentRestaurantReservationBookings intent: INGetUserCurrentRestaurantReservationBookingsIntent) async -> INGetUserCurrentRestaurantReservationBookingsIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INGetUserCurrentRestaurantReservationBookingsIntentResponse](../ingetusercurrentrestaurantreservationbookingsintentresponse.md) object containing the status of whether your app is able to get the user’s current reservations. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can fetch the user’s current reservations. For example, you might use this method to verify the account information for performing the search. At some point in your implementation, execute the provided completion block with a response object indicating your app’s readiness to fetch the reservations.

# confirmGetUserCurrentRestaurantReservationBookings:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Confirms whether you can get the user’s current reservations.

## Declaration

```objectivec
- (void) confirmGetUserCurrentRestaurantReservationBookings:(INGetUserCurrentRestaurantReservationBookingsIntent *) intent completion:(void (^)(INGetUserCurrentRestaurantReservationBookingsIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INGetUserCurrentRestaurantReservationBookingsIntentResponse](../ingetusercurrentrestaurantreservationbookingsintentresponse.md) object containing the status of whether your app is able to get the user’s current reservations. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can fetch the user’s current reservations. For example, you might use this method to verify the account information for performing the search. At some point in your implementation, execute the provided completion block with a response object indicating your app’s readiness to fetch the reservations.
