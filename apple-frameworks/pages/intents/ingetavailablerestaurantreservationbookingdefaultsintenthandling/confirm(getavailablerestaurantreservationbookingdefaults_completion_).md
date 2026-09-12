> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintenthandling/confirm(getavailablerestaurantreservationbookingdefaults:completion:)](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingdefaultsintenthandling/confirm(getavailablerestaurantreservationbookingdefaults:completion:))

# confirm(getAvailableRestaurantReservationBookingDefaults:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Confirms whether you can return default values.

## Declaration

```swift
optional func confirm(getAvailableRestaurantReservationBookingDefaults intent: INGetAvailableRestaurantReservationBookingDefaultsIntent, completion: @escaping @Sendable (INGetAvailableRestaurantReservationBookingDefaultsIntentResponse) -> Void)
```

```swift
optional func confirm(getAvailableRestaurantReservationBookingDefaults intent: INGetAvailableRestaurantReservationBookingDefaultsIntent) async -> INGetAvailableRestaurantReservationBookingDefaultsIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INGetAvailableRestaurantReservationBookingDefaultsIntentResponse](../ingetavailablerestaurantreservationbookingdefaultsintentresponse.md) object containing the status of whether your app is able to return default values. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate you can provide default restaurant information.

# confirmGetAvailableRestaurantReservationBookingDefaults:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Confirms whether you can return default values.

## Declaration

```objectivec
- (void) confirmGetAvailableRestaurantReservationBookingDefaults:(INGetAvailableRestaurantReservationBookingDefaultsIntent *) intent completion:(void (^)(INGetAvailableRestaurantReservationBookingDefaultsIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INGetAvailableRestaurantReservationBookingDefaultsIntentResponse](../ingetavailablerestaurantreservationbookingdefaultsintentresponse.md) object containing the status of whether your app is able to return default values. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate you can provide default restaurant information.
