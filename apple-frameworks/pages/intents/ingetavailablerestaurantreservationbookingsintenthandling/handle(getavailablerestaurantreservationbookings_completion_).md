> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingsintenthandling/handle(getavailablerestaurantreservationbookings:completion:)](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintenthandling/handle(getavailablerestaurantreservationbookings:completion:))

# handle(getAvailableRestaurantReservationBookings:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handles generating the list of potential reservation times.

## Declaration

```swift
func handle(getAvailableRestaurantReservationBookings intent: INGetAvailableRestaurantReservationBookingsIntent, completion: @escaping @Sendable (INGetAvailableRestaurantReservationBookingsIntentResponse) -> Void)
```

```swift
func handle(getAvailableRestaurantReservationBookings intent: INGetAvailableRestaurantReservationBookingsIntent) async -> INGetAvailableRestaurantReservationBookingsIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the request. The information in this object has already been resolved and confirmed.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INGetAvailableRestaurantReservationBookingsIntentResponse](../ingetavailablerestaurantreservationbookingsintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must create one or more [INRestaurantReservationBooking](../inrestaurantreservationbooking.md) objects representing the potential reservations from which the user can choose. Each reservation booking object contains the time of the reservation along with special offers and any requirements for making the reservation. When done, execute the provided block with a response object that contains your reservation booking objects.

# handleGetAvailableRestaurantReservationBookings:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handles generating the list of potential reservation times.

## Declaration

```objectivec
- (void) handleGetAvailableRestaurantReservationBookings:(INGetAvailableRestaurantReservationBookingsIntent *) intent completion:(void (^)(INGetAvailableRestaurantReservationBookingsIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the request. The information in this object has already been resolved and confirmed.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INGetAvailableRestaurantReservationBookingsIntentResponse](../ingetavailablerestaurantreservationbookingsintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must create one or more [INRestaurantReservationBooking](../inrestaurantreservationbooking.md) objects representing the potential reservations from which the user can choose. Each reservation booking object contains the time of the reservation along with special offers and any requirements for making the reservation. When done, execute the provided block with a response object that contains your reservation booking objects.
