> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetreservationdetailsintentresponsecode/failure](https://developer.apple.com/documentation/intents/ingetreservationdetailsintentresponsecode/failure)

# INGetReservationDetailsIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Your app is unable to retrieve the reservation details.

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that would prevent your app from retrieving the reservation details.

## See Also

### Request Status

- [INGetReservationDetailsIntentResponseCode.unspecified](unspecified.md): The response code is unspecified.
- [INGetReservationDetailsIntentResponseCode.ready](ready.md): Your app is ready to handle the intent.
- [INGetReservationDetailsIntentResponseCode.inProgress](inprogress.md): Your app is processing the request for reservation details.
- [INGetReservationDetailsIntentResponseCode.success](success.md): Your app successfully handled the intent.
- [INGetReservationDetailsIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to retrieve the reservation details.

# INGetReservationDetailsIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Your app is unable to retrieve the reservation details.

## Declaration

```objectivec
INGetReservationDetailsIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that would prevent your app from retrieving the reservation details.

## See Also

### Request Status

- [INGetReservationDetailsIntentResponseCodeUnspecified](unspecified.md): The response code is unspecified.
- [INGetReservationDetailsIntentResponseCodeReady](ready.md): Your app is ready to handle the intent.
- [INGetReservationDetailsIntentResponseCodeInProgress](inprogress.md): Your app is processing the request for reservation details.
- [INGetReservationDetailsIntentResponseCodeSuccess](success.md): Your app successfully handled the intent.
- [INGetReservationDetailsIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to retrieve the reservation details.
