> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingsintentcode/failurerequestunspecified](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintentcode/failurerequestunspecified)

# INGetAvailableRestaurantReservationBookingsIntentCode.failureRequestUnspecified (Swift)

**Framework:** Intents  
**Kind:** Case

There was a failure in getting the requested booking times and the cause of the failure is unknown.

## Declaration

```swift
case failureRequestUnspecified
```

<a id="Discussion"></a>

## Discussion

Maps launches your app and passes it to the [NSUserActivity](../../foundation/nsuseractivity.md) object from your response so that you can try to get the information there.

## See Also

### Constants

- [INGetAvailableRestaurantReservationBookingsIntentCode.success](success.md): You successfully handled the intent.
- [INGetAvailableRestaurantReservationBookingsIntentCode.failure](failure.md): You were unable to provide a list of possible reservation times.
- [INGetAvailableRestaurantReservationBookingsIntentCode.failureRequestUnsatisfiable](failurerequestunsatisfiable.md): You could not complete the request because the data you received from Maps was invalid.

# INGetAvailableRestaurantReservationBookingsIntentCodeFailureRequestUnspecified (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case

There was a failure in getting the requested booking times and the cause of the failure is unknown.

## Declaration

```objectivec
INGetAvailableRestaurantReservationBookingsIntentCodeFailureRequestUnspecified
```

<a id="Discussion"></a>

## Discussion

Maps launches your app and passes it to the [NSUserActivity](../../foundation/nsuseractivity.md) object from your response so that you can try to get the information there.

## See Also

### Constants

- [INGetAvailableRestaurantReservationBookingsIntentCodeSuccess](success.md): You successfully handled the intent.
- [INGetAvailableRestaurantReservationBookingsIntentCodeFailure](failure.md): You were unable to provide a list of possible reservation times.
- [INGetAvailableRestaurantReservationBookingsIntentCodeFailureRequestUnsatisfiable](failurerequestunsatisfiable.md): You could not complete the request because the data you received from Maps was invalid.
