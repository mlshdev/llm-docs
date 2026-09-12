> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingsintenthandling/confirm(getavailablerestaurantreservationbookings:completion:)](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintenthandling/confirm(getavailablerestaurantreservationbookings:completion:))

# confirm(getAvailableRestaurantReservationBookings:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Confirms whether you can provide a set of potential reservation times.

## Declaration

```swift
optional func confirm(getAvailableRestaurantReservationBookings intent: INGetAvailableRestaurantReservationBookingsIntent, completion: @escaping @Sendable (INGetAvailableRestaurantReservationBookingsIntentResponse) -> Void)
```

```swift
optional func confirm(getAvailableRestaurantReservationBookings intent: INGetAvailableRestaurantReservationBookingsIntent) async -> INGetAvailableRestaurantReservationBookingsIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INGetAvailableRestaurantReservationBookingsIntentResponse](../ingetavailablerestaurantreservationbookingsintentresponse.md) object containing the status of whether your app is able to provide the potential reservation times. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can generate a set of potential reservation times. For example, you might use this method to verify the user’s account information. At some point in your implementation, execute the provided completion block with a response object indicating your app’s readiness to generate the reservation details.

# confirmGetAvailableRestaurantReservationBookings:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Confirms whether you can provide a set of potential reservation times.

## Declaration

```objectivec
- (void) confirmGetAvailableRestaurantReservationBookings:(INGetAvailableRestaurantReservationBookingsIntent *) intent completion:(void (^)(INGetAvailableRestaurantReservationBookingsIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INGetAvailableRestaurantReservationBookingsIntentResponse](../ingetavailablerestaurantreservationbookingsintentresponse.md) object containing the status of whether your app is able to provide the potential reservation times. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that you can generate a set of potential reservation times. For example, you might use this method to verify the user’s account information. At some point in your implementation, execute the provided completion block with a response object indicating your app’s readiness to generate the reservation details.
