> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintenthandling/handle(bookrestaurantreservation:completion:)](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintenthandling/handle(bookrestaurantreservation:completion:))

# handle(bookRestaurantReservation:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handles completing the user’s reservation.

## Declaration

```swift
func handle(bookRestaurantReservation intent: INBookRestaurantReservationIntent, completion: @escaping @Sendable (INBookRestaurantReservationIntentResponse) -> Void)
```

```swift
func handle(bookRestaurantReservation intent: INBookRestaurantReservationIntent) async -> INBookRestaurantReservationIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the request. The information in this object has already been resolved and confirmed.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INBookRestaurantReservationIntentResponse](../inbookrestaurantreservationintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must save the reservation details to your system and communicate the information to the selected restaurant. Your response object should contain a [INRestaurantReservationUserBooking](../inrestaurantreservationuserbooking.md) object that reflects the status of creating the reservation, including whether the restaurant has received and confirmed the reservation details. When done, execute the provided block with your response object.

# handleBookRestaurantReservation:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Handles completing the user’s reservation.

## Declaration

```objectivec
- (void) handleBookRestaurantReservation:(INBookRestaurantReservationIntent *) intent completion:(void (^)(INBookRestaurantReservationIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the request. The information in this object has already been resolved and confirmed.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INBookRestaurantReservationIntentResponse](../inbookrestaurantreservationintentresponse.md) object you create to report the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must save the reservation details to your system and communicate the information to the selected restaurant. Your response object should contain a [INRestaurantReservationUserBooking](../inrestaurantreservationuserbooking.md) object that reflects the status of creating the reservation, including whether the restaurant has received and confirmed the reservation details. When done, execute the provided block with your response object.
