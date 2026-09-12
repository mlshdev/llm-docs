> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintentcode/failurerequiringapplaunchmustverifycredentials](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintentcode/failurerequiringapplaunchmustverifycredentials)

# INBookRestaurantReservationIntentCode.failureRequiringAppLaunchMustVerifyCredentials (Swift)

**Framework:** Intents  
**Kind:** Case

Your app failed to create the reservation because the user’s credentials were invalid or missing.

## Declaration

```swift
case failureRequiringAppLaunchMustVerifyCredentials
```

<a id="Discussion"></a>

## Discussion

Use this code when you do not have valid credentials for the user. Maps launches your app and passes it to the [NSUserActivity](../../foundation/nsuseractivity.md) object from your response so that you can try to verify the user’s credentials there.

## See Also

### Constants

- [INBookRestaurantReservationIntentCode.success](success.md): You successfully handled the intent.
- [INBookRestaurantReservationIntentCode.denied](denied.md): The restaurant declined the reservation.
- [INBookRestaurantReservationIntentCode.failure](failure.md): You were unable to create the reservation object in your system.
- [INBookRestaurantReservationIntentCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to make the reservation.
- [INBookRestaurantReservationIntentCode.failureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.

# INBookRestaurantReservationIntentCodeFailureRequiringAppLaunchMustVerifyCredentials (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case

Your app failed to create the reservation because the user’s credentials were invalid or missing.

## Declaration

```objectivec
INBookRestaurantReservationIntentCodeFailureRequiringAppLaunchMustVerifyCredentials
```

<a id="Discussion"></a>

## Discussion

Use this code when you do not have valid credentials for the user. Maps launches your app and passes it to the [NSUserActivity](../../foundation/nsuseractivity.md) object from your response so that you can try to verify the user’s credentials there.

## See Also

### Constants

- [INBookRestaurantReservationIntentCodeSuccess](success.md): You successfully handled the intent.
- [INBookRestaurantReservationIntentCodeDenied](denied.md): The restaurant declined the reservation.
- [INBookRestaurantReservationIntentCodeFailure](failure.md): You were unable to create the reservation object in your system.
- [INBookRestaurantReservationIntentCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to make the reservation.
- [INBookRestaurantReservationIntentCodeFailureRequiringAppLaunchServiceTemporarilyUnavailable](failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.
