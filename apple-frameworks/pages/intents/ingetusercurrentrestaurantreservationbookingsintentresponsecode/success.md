> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetusercurrentrestaurantreservationbookingsintentresponsecode/success](https://developer.apple.com/documentation/intents/ingetusercurrentrestaurantreservationbookingsintentresponsecode/success)

# INGetUserCurrentRestaurantReservationBookingsIntentResponseCode.success (Swift)

**Framework:** Intents  
**Kind:** Case

You successfully handled the intent.

## Declaration

```swift
case success
```

<a id="Discussion"></a>

## Discussion

Use this code if your app was successful in fetching the user’s reservations, even if the fetch returned no results. Include all of the reservations that match the search criteria in the [userCurrentBookings](../ingetusercurrentrestaurantreservationbookingsintentresponse/usercurrentbookings.md) property of your response object.

## See Also

### Constants

- [INGetUserCurrentRestaurantReservationBookingsIntentResponseCode.failure](failure.md): You were unable to fetch the user’s reservations.
- [INGetUserCurrentRestaurantReservationBookingsIntentResponseCode.failureRequestUnsatisfiable](failurerequestunsatisfiable.md): The intent object contained conflicting information.
- [INGetUserCurrentRestaurantReservationBookingsIntentResponseCode.unspecified](unspecified.md): The request did not contain enough information for you to proceed.

# INGetUserCurrentRestaurantReservationBookingsIntentResponseCodeSuccess (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case

You successfully handled the intent.

## Declaration

```objectivec
INGetUserCurrentRestaurantReservationBookingsIntentResponseCodeSuccess
```

<a id="Discussion"></a>

## Discussion

Use this code if your app was successful in fetching the user’s reservations, even if the fetch returned no results. Include all of the reservations that match the search criteria in the [userCurrentBookings](../ingetusercurrentrestaurantreservationbookingsintentresponse/usercurrentbookings.md) property of your response object.

## See Also

### Constants

- [INGetUserCurrentRestaurantReservationBookingsIntentResponseCodeFailure](failure.md): You were unable to fetch the user’s reservations.
- [INGetUserCurrentRestaurantReservationBookingsIntentResponseCodeFailureRequestUnsatisfiable](failurerequestunsatisfiable.md): The intent object contained conflicting information.
- [INGetUserCurrentRestaurantReservationBookingsIntentResponseCodeUnspecified](unspecified.md): The request did not contain enough information for you to proceed.
