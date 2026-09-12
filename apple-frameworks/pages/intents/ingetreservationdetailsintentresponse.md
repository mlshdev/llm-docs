> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetreservationdetailsintentresponse](https://developer.apple.com/documentation/intents/ingetreservationdetailsintentresponse)

# INGetReservationDetailsIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Your app’s response to a request for reservation details.

## Declaration

```swift
class INGetReservationDetailsIntentResponse
```

## Mentioned In

- [Donating Reservations](../sirikit/donating-reservations.md)

<a id="overview"></a>

## Overview

Use an [INGetReservationDetailsIntentResponse](ingetreservationdetailsintentresponse.md) object to specify the results of a user requesting reservation details in your app. After getting the reservation details action using the criteria specified in the [INGetReservationDetailsIntent](ingetreservationdetailsintent.md) object, create an instance of this class with the results of the action. Siri can then use this information for system integrations, such as populating the calendar with an event.

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](ingetreservationdetailsintentresponse/init%28code_useractivity_%29.md): Creates the response object with the specified code and user activity object.

### Accessing the Reservations

- [reservations](ingetreservationdetailsintentresponse/reservations.md): An array containing reservations reqeusted by the user.

### Getting the Response Code

- [code](ingetreservationdetailsintentresponse/code.md): The code that indicates whether your app successfully handled the intent.
- [INGetReservationDetailsIntentResponseCode](ingetreservationdetailsintentresponsecode.md): Constants that indicate the status of the request for reservations details.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Reservation Details

- [INGetReservationDetailsIntent](ingetreservationdetailsintent.md): A request for details about one or more reservations.

# INGetReservationDetailsIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Your app’s response to a request for reservation details.

## Declaration

```objectivec
@interface INGetReservationDetailsIntentResponse : INIntentResponse
```

## Mentioned In

- [Donating Reservations](../sirikit/donating-reservations.md)

<a id="overview"></a>

## Overview

Use an [INGetReservationDetailsIntentResponse](ingetreservationdetailsintentresponse.md) object to specify the results of a user requesting reservation details in your app. After getting the reservation details action using the criteria specified in the [INGetReservationDetailsIntent](ingetreservationdetailsintent.md) object, create an instance of this class with the results of the action. Siri can then use this information for system integrations, such as populating the calendar with an event.

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](ingetreservationdetailsintentresponse/init%28code_useractivity_%29.md): Creates the response object with the specified code and user activity object.

### Accessing the Reservations

- [reservations](ingetreservationdetailsintentresponse/reservations.md): An array containing reservations reqeusted by the user.

### Getting the Response Code

- [code](ingetreservationdetailsintentresponse/code.md): The code that indicates whether your app successfully handled the intent.
- [INGetReservationDetailsIntentResponseCode](ingetreservationdetailsintentresponsecode.md): Constants that indicate the status of the request for reservations details.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Reservation Details

- [INGetReservationDetailsIntent](ingetreservationdetailsintent.md): A request for details about one or more reservations.
