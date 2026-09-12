> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetreservationdetailsintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/ingetreservationdetailsintentresponsecode/inprogress)

# INGetReservationDetailsIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Your app is processing the request for reservation details.

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

When handling the intent, return this code if it may take more than a few seconds to get the reservation details.

## See Also

### Request Status

- [INGetReservationDetailsIntentResponseCode.unspecified](unspecified.md): The response code is unspecified.
- [INGetReservationDetailsIntentResponseCode.ready](ready.md): Your app is ready to handle the intent.
- [INGetReservationDetailsIntentResponseCode.success](success.md): Your app successfully handled the intent.
- [INGetReservationDetailsIntentResponseCode.failure](failure.md): Your app is unable to retrieve the reservation details.
- [INGetReservationDetailsIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to retrieve the reservation details.

# INGetReservationDetailsIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Your app is processing the request for reservation details.

## Declaration

```objectivec
INGetReservationDetailsIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

When handling the intent, return this code if it may take more than a few seconds to get the reservation details.

## See Also

### Request Status

- [INGetReservationDetailsIntentResponseCodeUnspecified](unspecified.md): The response code is unspecified.
- [INGetReservationDetailsIntentResponseCodeReady](ready.md): Your app is ready to handle the intent.
- [INGetReservationDetailsIntentResponseCodeSuccess](success.md): Your app successfully handled the intent.
- [INGetReservationDetailsIntentResponseCodeFailure](failure.md): Your app is unable to retrieve the reservation details.
- [INGetReservationDetailsIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): The user must launch your app to retrieve the reservation details.
