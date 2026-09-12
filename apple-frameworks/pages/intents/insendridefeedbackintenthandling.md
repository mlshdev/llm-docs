> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendridefeedbackintenthandling](https://developer.apple.com/documentation/intents/insendridefeedbackintenthandling)

# INSendRideFeedbackIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The handler interface for sending ride feedback to your service.

## Declaration

```swift
protocol INSendRideFeedbackIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INSendRideFeedbackIntentHandling](insendridefeedbackintenthandling.md) protocol to confirm and handle requests to send feedback about a ride to your service. Adopt this protocol in an object of your Intents extension that is capable of conveying the feedback to your service.

To initiate the delivery of an [INSendRideFeedbackIntent](insendridefeedbackintent.md), the user must have previously completed a ride in Maps or Siri and asked the user to provide feedback. Specifically, the [INRideCompletionStatus](inridecompletionstatus.md) object that you created must indicate that it requires feedback before beginning a new ride. (Maps also gives the user a chance to provide feedback proactively). After the user provides feedback, Siri delivers the feedback intent to your Intents extension.

## Topics

### Confirming the Intent

- [confirm(sendRideFeedback:completion:)](insendridefeedbackintenthandling/confirm%28sendridefeedback_completion_%29.md): Confirms that you can apply the feedback to the specified ride.

### Handling the Intent

- [handle(sendRideFeedback:completion:)](insendridefeedbackintenthandling/handle%28sendridefeedback_completion_%29.md): Handles the recording of feedback for the specified ride.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INRidesharingDomainHandling](inridesharingdomainhandling.md)

## See Also

### Send Ride Feedback

- [INSendRideFeedbackIntent](insendridefeedbackintent.md): An intent indicating that the user provided feedback for a completed ride.
- [INSendRideFeedbackIntentResponse](insendridefeedbackintentresponse.md): Your app’s response to a send ride feedback intent.

# INSendRideFeedbackIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The handler interface for sending ride feedback to your service.

## Declaration

```objectivec
@protocol INSendRideFeedbackIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INSendRideFeedbackIntentHandling](insendridefeedbackintenthandling.md) protocol to confirm and handle requests to send feedback about a ride to your service. Adopt this protocol in an object of your Intents extension that is capable of conveying the feedback to your service.

To initiate the delivery of an [INSendRideFeedbackIntent](insendridefeedbackintent.md), the user must have previously completed a ride in Maps or Siri and asked the user to provide feedback. Specifically, the [INRideCompletionStatus](inridecompletionstatus.md) object that you created must indicate that it requires feedback before beginning a new ride. (Maps also gives the user a chance to provide feedback proactively). After the user provides feedback, Siri delivers the feedback intent to your Intents extension.

## Topics

### Confirming the Intent

- [confirmSendRideFeedback:completion:](insendridefeedbackintenthandling/confirm%28sendridefeedback_completion_%29.md): Confirms that you can apply the feedback to the specified ride.

### Handling the Intent

- [handleSendRideFeedback:completion:](insendridefeedbackintenthandling/handle%28sendridefeedback_completion_%29.md): Handles the recording of feedback for the specified ride.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INRidesharingDomainHandling](inridesharingdomainhandling.md)

## See Also

### Send Ride Feedback

- [INSendRideFeedbackIntent](insendridefeedbackintent.md): An intent indicating that the user provided feedback for a completed ride.
- [INSendRideFeedbackIntentResponse](insendridefeedbackintentresponse.md): Your app’s response to a send ride feedback intent.
