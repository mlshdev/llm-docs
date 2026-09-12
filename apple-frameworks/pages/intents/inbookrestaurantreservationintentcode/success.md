> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintentcode/success](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintentcode/success)

# INBookRestaurantReservationIntentCode.success (Swift)

**Framework:** Intents  
**Kind:** Case

You successfully handled the intent.

## Declaration

```swift
case success
```

<a id="Discussion"></a>

## Discussion

Use this code if your app successfully created the reservation object in your system. Use this code even if the restaurant itself has not yet confirmed the reservation. You can always update the status of the reservation later.

## See Also

### Constants

- [INBookRestaurantReservationIntentCode.denied](denied.md): The restaurant declined the reservation.
- [INBookRestaurantReservationIntentCode.failure](failure.md): You were unable to create the reservation object in your system.
- [INBookRestaurantReservationIntentCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to make the reservation.
- [INBookRestaurantReservationIntentCode.failureRequiringAppLaunchMustVerifyCredentials](failurerequiringapplaunchmustverifycredentials.md): Your app failed to create the reservation because the user’s credentials were invalid or missing.
- [INBookRestaurantReservationIntentCode.failureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.

# INBookRestaurantReservationIntentCodeSuccess (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case

You successfully handled the intent.

## Declaration

```objectivec
INBookRestaurantReservationIntentCodeSuccess
```

<a id="Discussion"></a>

## Discussion

Use this code if your app successfully created the reservation object in your system. Use this code even if the restaurant itself has not yet confirmed the reservation. You can always update the status of the reservation later.

## See Also

### Constants

- [INBookRestaurantReservationIntentCodeDenied](denied.md): The restaurant declined the reservation.
- [INBookRestaurantReservationIntentCodeFailure](failure.md): You were unable to create the reservation object in your system.
- [INBookRestaurantReservationIntentCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to make the reservation.
- [INBookRestaurantReservationIntentCodeFailureRequiringAppLaunchMustVerifyCredentials](failurerequiringapplaunchmustverifycredentials.md): Your app failed to create the reservation because the user’s credentials were invalid or missing.
- [INBookRestaurantReservationIntentCodeFailureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.
