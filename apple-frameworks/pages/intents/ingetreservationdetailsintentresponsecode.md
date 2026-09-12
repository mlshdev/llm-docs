> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetreservationdetailsintentresponsecode](https://developer.apple.com/documentation/intents/ingetreservationdetailsintentresponsecode)

# INGetReservationDetailsIntentResponseCode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that indicate the status of the request for reservations details.

## Declaration

```swift
enum INGetReservationDetailsIntentResponseCode
```

## Topics

### Request Status

- [INGetReservationDetailsIntentResponseCode.unspecified](ingetreservationdetailsintentresponsecode/unspecified.md): The response code is unspecified.
- [INGetReservationDetailsIntentResponseCode.ready](ingetreservationdetailsintentresponsecode/ready.md): Your app is ready to handle the intent.
- [INGetReservationDetailsIntentResponseCode.inProgress](ingetreservationdetailsintentresponsecode/inprogress.md): Your app is processing the request for reservation details.
- [INGetReservationDetailsIntentResponseCode.success](ingetreservationdetailsintentresponsecode/success.md): Your app successfully handled the intent.
- [INGetReservationDetailsIntentResponseCode.failure](ingetreservationdetailsintentresponsecode/failure.md): Your app is unable to retrieve the reservation details.
- [INGetReservationDetailsIntentResponseCode.failureRequiringAppLaunch](ingetreservationdetailsintentresponsecode/failurerequiringapplaunch.md): The user must launch your app to retrieve the reservation details.

### Initializers

- [init(rawValue:)](ingetreservationdetailsintentresponsecode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Response Code

- [code](ingetreservationdetailsintentresponse/code.md): The code that indicates whether your app successfully handled the intent.

# INGetReservationDetailsIntentResponseCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that indicate the status of the request for reservations details.

## Declaration

```objectivec
enum INGetReservationDetailsIntentResponseCode : NSInteger;
```

## Topics

### Request Status

- [INGetReservationDetailsIntentResponseCodeUnspecified](ingetreservationdetailsintentresponsecode/unspecified.md): The response code is unspecified.
- [INGetReservationDetailsIntentResponseCodeReady](ingetreservationdetailsintentresponsecode/ready.md): Your app is ready to handle the intent.
- [INGetReservationDetailsIntentResponseCodeInProgress](ingetreservationdetailsintentresponsecode/inprogress.md): Your app is processing the request for reservation details.
- [INGetReservationDetailsIntentResponseCodeSuccess](ingetreservationdetailsintentresponsecode/success.md): Your app successfully handled the intent.
- [INGetReservationDetailsIntentResponseCodeFailure](ingetreservationdetailsintentresponsecode/failure.md): Your app is unable to retrieve the reservation details.
- [INGetReservationDetailsIntentResponseCodeFailureRequiringAppLaunch](ingetreservationdetailsintentresponsecode/failurerequiringapplaunch.md): The user must launch your app to retrieve the reservation details.

## See Also

### Getting the Response Code

- [code](ingetreservationdetailsintentresponse/code.md): The code that indicates whether your app successfully handled the intent.
