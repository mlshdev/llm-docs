> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintentcode](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintentcode)

# INBookRestaurantReservationIntentCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration

Constants indicating the state of the response.

## Declaration

```swift
enum INBookRestaurantReservationIntentCode
```

## Topics

### Constants

- [INBookRestaurantReservationIntentCode.success](inbookrestaurantreservationintentcode/success.md): You successfully handled the intent.
- [INBookRestaurantReservationIntentCode.denied](inbookrestaurantreservationintentcode/denied.md): The restaurant declined the reservation.
- [INBookRestaurantReservationIntentCode.failure](inbookrestaurantreservationintentcode/failure.md): You were unable to create the reservation object in your system.
- [INBookRestaurantReservationIntentCode.failureRequiringAppLaunch](inbookrestaurantreservationintentcode/failurerequiringapplaunch.md): The user must launch your app to make the reservation.
- [INBookRestaurantReservationIntentCode.failureRequiringAppLaunchMustVerifyCredentials](inbookrestaurantreservationintentcode/failurerequiringapplaunchmustverifycredentials.md): Your app failed to create the reservation because the user’s credentials were invalid or missing.
- [INBookRestaurantReservationIntentCode.failureRequiringAppLaunchServiceTemporarilyUnavailable](inbookrestaurantreservationintentcode/failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.

### Initializers

- [init(rawValue:)](inbookrestaurantreservationintentcode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the Response Information

- [code](inbookrestaurantreservationintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [userBooking](inbookrestaurantreservationintentresponse/userbooking.md): The detailed information about the reservation.

# INBookRestaurantReservationIntentCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration

Constants indicating the state of the response.

## Declaration

```objectivec
enum INBookRestaurantReservationIntentCode : NSInteger;
```

## Topics

### Constants

- [INBookRestaurantReservationIntentCodeSuccess](inbookrestaurantreservationintentcode/success.md): You successfully handled the intent.
- [INBookRestaurantReservationIntentCodeDenied](inbookrestaurantreservationintentcode/denied.md): The restaurant declined the reservation.
- [INBookRestaurantReservationIntentCodeFailure](inbookrestaurantreservationintentcode/failure.md): You were unable to create the reservation object in your system.
- [INBookRestaurantReservationIntentCodeFailureRequiringAppLaunch](inbookrestaurantreservationintentcode/failurerequiringapplaunch.md): The user must launch your app to make the reservation.
- [INBookRestaurantReservationIntentCodeFailureRequiringAppLaunchMustVerifyCredentials](inbookrestaurantreservationintentcode/failurerequiringapplaunchmustverifycredentials.md): Your app failed to create the reservation because the user’s credentials were invalid or missing.
- [INBookRestaurantReservationIntentCodeFailureRequiringAppLaunchServiceTemporarilyUnavailable](inbookrestaurantreservationintentcode/failurerequiringapplaunchservicetemporarilyunavailable.md): Your service is temporarily unavailable.

## See Also

### Accessing the Response Information

- [code](inbookrestaurantreservationintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [userBooking](inbookrestaurantreservationintentresponse/userbooking.md): The detailed information about the reservation.
