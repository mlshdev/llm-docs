> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintentcode/failure](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintentcode/failure)

# INBookRestaurantReservationIntentCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case

You were unable to create the reservation object in your system.

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that prevented you from creating the reservation.

## See Also

### Constants

- [INBookRestaurantReservationIntentCode.success](success.md): You successfully handled the intent.
- [INBookRestaurantReservationIntentCode.denied](denied.md): The restaurant declined the reservation.
- [INBookRestaurantReservationIntentCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to make the reservation.
- [INBookRestaurantReservationIntentCode.failureRequiringAppLaunchMustVerifyCredentials](failurerequiringapplaunchmustverifycredentials.md): Your app failed to create the reservation because the user’s credentials were invalid or missing.
- [INBookRestaurantReservationIntentCode.failureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.

# INBookRestaurantReservationIntentCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case

You were unable to create the reservation object in your system.

## Declaration

```objectivec
INBookRestaurantReservationIntentCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that prevented you from creating the reservation.

## See Also

### Constants

- [INBookRestaurantReservationIntentCodeSuccess](success.md): You successfully handled the intent.
- [INBookRestaurantReservationIntentCodeDenied](denied.md): The restaurant declined the reservation.
- [INBookRestaurantReservationIntentCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to make the reservation.
- [INBookRestaurantReservationIntentCodeFailureRequiringAppLaunchMustVerifyCredentials](failurerequiringapplaunchmustverifycredentials.md): Your app failed to create the reservation because the user’s credentials were invalid or missing.
- [INBookRestaurantReservationIntentCodeFailureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.
