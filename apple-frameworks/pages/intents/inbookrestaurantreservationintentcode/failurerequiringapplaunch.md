> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintentcode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintentcode/failurerequiringapplaunch)

# INBookRestaurantReservationIntentCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case

The user must launch your app to make the reservation.

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you cannot handle the request directly for a reason not covered by any other response code. Do not use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INBookRestaurantReservationIntentCode.success](success.md): You successfully handled the intent.
- [INBookRestaurantReservationIntentCode.denied](denied.md): The restaurant declined the reservation.
- [INBookRestaurantReservationIntentCode.failure](failure.md): You were unable to create the reservation object in your system.
- [INBookRestaurantReservationIntentCode.failureRequiringAppLaunchMustVerifyCredentials](failurerequiringapplaunchmustverifycredentials.md): Your app failed to create the reservation because the user’s credentials were invalid or missing.
- [INBookRestaurantReservationIntentCode.failureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.

# INBookRestaurantReservationIntentCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case

The user must launch your app to make the reservation.

## Declaration

```objectivec
INBookRestaurantReservationIntentCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

Use this response code when you cannot handle the request directly for a reason not covered by any other response code. Do not use it for general errors or to force the user to launch your app.

## See Also

### Constants

- [INBookRestaurantReservationIntentCodeSuccess](success.md): You successfully handled the intent.
- [INBookRestaurantReservationIntentCodeDenied](denied.md): The restaurant declined the reservation.
- [INBookRestaurantReservationIntentCodeFailure](failure.md): You were unable to create the reservation object in your system.
- [INBookRestaurantReservationIntentCodeFailureRequiringAppLaunchMustVerifyCredentials](failurerequiringapplaunchmustverifycredentials.md): Your app failed to create the reservation because the user’s credentials were invalid or missing.
- [INBookRestaurantReservationIntentCodeFailureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.
