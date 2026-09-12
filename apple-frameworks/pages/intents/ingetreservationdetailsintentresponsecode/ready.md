> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetreservationdetailsintentresponsecode/ready](https://developer.apple.com/documentation/intents/ingetreservationdetailsintentresponsecode/ready)

# INGetReservationDetailsIntentResponseCode.ready (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Your app is ready to handle the intent.

## Declaration

```swift
case ready
```

<a id="Discussion"></a>

## Discussion

During the confirmation phase of an intent, use this code to signal that your app is ready and able to act on the intent.

## See Also

### Request Status

- [INGetReservationDetailsIntentResponseCode.unspecified](unspecified.md): The response code is unspecified.
- [INGetReservationDetailsIntentResponseCode.inProgress](inprogress.md): Your app is processing the request for reservation details.
- [INGetReservationDetailsIntentResponseCode.success](success.md): Your app successfully handled the intent.
- [INGetReservationDetailsIntentResponseCode.failure](failure.md): Your app is unable to retrieve the reservation details.
- [INGetReservationDetailsIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to retrieve the reservation details.

# INGetReservationDetailsIntentResponseCodeReady (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Your app is ready to handle the intent.

## Declaration

```objectivec
INGetReservationDetailsIntentResponseCodeReady
```

<a id="Discussion"></a>

## Discussion

During the confirmation phase of an intent, use this code to signal that your app is ready and able to act on the intent.

## See Also

### Request Status

- [INGetReservationDetailsIntentResponseCodeUnspecified](unspecified.md): The response code is unspecified.
- [INGetReservationDetailsIntentResponseCodeInProgress](inprogress.md): Your app is processing the request for reservation details.
- [INGetReservationDetailsIntentResponseCodeSuccess](success.md): Your app successfully handled the intent.
- [INGetReservationDetailsIntentResponseCodeFailure](failure.md): Your app is unable to retrieve the reservation details.
- [INGetReservationDetailsIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to retrieve the reservation details.
