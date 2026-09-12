> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendridefeedbackintent](https://developer.apple.com/documentation/intents/insendridefeedbackintent)

# INSendRideFeedbackIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An intent indicating that the user provided feedback for a completed ride.

## Declaration

```swift
class INSendRideFeedbackIntent
```

<a id="overview"></a>

## Overview

When the user provides feedback for a completed ride, SiriKit sends an [INSendRideFeedbackIntent](insendridefeedbackintent.md) object to your handler. SiriKit populates this intent object with the ride identifier and the feedback, including a possible driver rating and tip. Upon receiving this intent, validate the provided information and forward it along to your service. SiriKit guarantees that it provides at least one piece of feedback.

To handle this intent, the handler object in your Intents extension must adopt the [INSendRideFeedbackIntentHandling](insendridefeedbackintenthandling.md) protocol. Your handler should confirm the request and create an [INSendRideFeedbackIntentResponse](insendridefeedbackintentresponse.md) object with the status of the task.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Maps |
| Always requires unlocked device | Yes |

## Topics

### Initializing the Intent Object

- [init(rideIdentifier:)](insendridefeedbackintent/init%28rideidentifier_%29.md): Initializes the intent object with the specified ride identifier.

### Identifying the Ride

- [rideIdentifier](insendridefeedbackintent/rideidentifier.md): The unique identifier that you assigned to the ride.

### Identifying the Feedback

- [rating](insendridefeedbackintent/rating.md): The user-supplied rating for the driver.
- [tip](insendridefeedbackintent/tip.md): The tip for the driver.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Send Ride Feedback

- [INSendRideFeedbackIntentHandling](insendridefeedbackintenthandling.md): The handler interface for sending ride feedback to your service.
- [INSendRideFeedbackIntentResponse](insendridefeedbackintentresponse.md): Your app’s response to a send ride feedback intent.

# INSendRideFeedbackIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An intent indicating that the user provided feedback for a completed ride.

## Declaration

```objectivec
@interface INSendRideFeedbackIntent : INIntent
```

<a id="overview"></a>

## Overview

When the user provides feedback for a completed ride, SiriKit sends an [INSendRideFeedbackIntent](insendridefeedbackintent.md) object to your handler. SiriKit populates this intent object with the ride identifier and the feedback, including a possible driver rating and tip. Upon receiving this intent, validate the provided information and forward it along to your service. SiriKit guarantees that it provides at least one piece of feedback.

To handle this intent, the handler object in your Intents extension must adopt the [INSendRideFeedbackIntentHandling](insendridefeedbackintenthandling.md) protocol. Your handler should confirm the request and create an [INSendRideFeedbackIntentResponse](insendridefeedbackintentresponse.md) object with the status of the task.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Maps |
| Always requires unlocked device | Yes |

## Topics

### Initializing the Intent Object

- [initWithRideIdentifier:](insendridefeedbackintent/init%28rideidentifier_%29.md): Initializes the intent object with the specified ride identifier.

### Identifying the Ride

- [rideIdentifier](insendridefeedbackintent/rideidentifier.md): The unique identifier that you assigned to the ride.

### Identifying the Feedback

- [rating](insendridefeedbackintent/rating.md): The user-supplied rating for the driver.
- [tip](insendridefeedbackintent/tip.md): The tip for the driver.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Send Ride Feedback

- [INSendRideFeedbackIntentHandling](insendridefeedbackintenthandling.md): The handler interface for sending ride feedback to your service.
- [INSendRideFeedbackIntentResponse](insendridefeedbackintentresponse.md): Your app’s response to a send ride feedback intent.
