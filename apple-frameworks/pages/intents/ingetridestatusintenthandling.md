> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetridestatusintenthandling](https://developer.apple.com/documentation/intents/ingetridestatusintenthandling)

# INGetRideStatusIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The handler interface for fetching the status of the user’s current ride.

## Declaration

```swift
protocol INGetRideStatusIntentHandling : NSObjectProtocol
```

## Mentioned In

- [Providing Live Status Updates](../sirikit/providing-live-status-updates.md)

<a id="overview"></a>

## Overview

Use the methods of the [INGetRideStatusIntentHandling](ingetridestatusintenthandling.md) protocol to confirm and handle requests to get the status of the user’s currently booked ride. Adopt this protocol in an object of your Intents extension that is capable of retrieving the ride details from your service.

SiriKit may deliver an [INGetRideStatusIntent](ingetridestatusintent.md) object to your handler object at any time, including when the user asks explicitly for the status of that ride. The specified intent object contains no additional information. Your app must know which ride is currently active. Use the methods of this protocol to handle the request and provide an appropriate response.

Maps does not require you to confirm the contents of a get ride status intent before handling it. User interactions drive the selection of data in Maps, ensuring that the data Maps places into an intent object is already valid.

<a id="Updating-the-Ride-Status-Periodically"></a>

### Updating the Ride Status Periodically

After returning your response, SiriKit may call the [startSendingUpdates(for:to:)](ingetridestatusintenthandling/startsendingupdates%28for_to_%29.md) method to ask for further updates as the ride status changes. Implement that method and use it to begin the delivery of regular updates. Continue providing updates until SiriKit calls the [stopSendingUpdates(for:)](ingetridestatusintenthandling/stopsendingupdates%28for_%29.md) method.

After it starts observing the status of a ride, SiriKit keeps your Intents extension alive so that it can provide frequent updates. Always deliver an update at least once every 20 seconds; otherwise, provide updates with the same frequency that you use for updating your own app. Always provide updates when the ride phase or completion status changes. For example, provide an update when your vehicle is approaching the pickup location or arrives at it. SiriKit uses the updates to refresh any map interfaces displaying the location of your vehicle to the user.

Use the methods of the observer object to deliver your updates back to SiriKit. For more information about providing updates to the observer, see [INGetRideStatusIntentResponseObserver](ingetridestatusintentresponseobserver.md).

## Topics

### Confirming the Response

- [confirm(intent:completion:)](ingetridestatusintenthandling/confirm%28intent_completion_%29.md): Confirms the details of the user’s request.

### Handling the Intent

- [handle(intent:completion:)](ingetridestatusintenthandling/handle%28intent_completion_%29.md): Handles providing the current status of the user’s ride.

### Providing Ride Status Updates

- [startSendingUpdates(for:to:)](ingetridestatusintenthandling/startsendingupdates%28for_to_%29.md): Start delivering regular updates about the specified ride.
- [stopSendingUpdates(for:)](ingetridestatusintenthandling/stopsendingupdates%28for_%29.md): Stops the delivery of status updates for the specified ride.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INRidesharingDomainHandling](inridesharingdomainhandling.md)

## See Also

### Get the Ride Status

- [INGetRideStatusIntent](ingetridestatusintent.md): A request for the current status of a previously booked ride.
- [INGetRideStatusIntentResponse](ingetridestatusintentresponse.md): Your app’s response to a get ride status intent.
- [INGetRideStatusIntentResponseObserver](ingetridestatusintentresponseobserver.md): An interface for providing updated status for an active ride.

# INGetRideStatusIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The handler interface for fetching the status of the user’s current ride.

## Declaration

```objectivec
@protocol INGetRideStatusIntentHandling <NSObject>
```

## Mentioned In

- [Providing Live Status Updates](../sirikit/providing-live-status-updates.md)

<a id="overview"></a>

## Overview

Use the methods of the [INGetRideStatusIntentHandling](ingetridestatusintenthandling.md) protocol to confirm and handle requests to get the status of the user’s currently booked ride. Adopt this protocol in an object of your Intents extension that is capable of retrieving the ride details from your service.

SiriKit may deliver an [INGetRideStatusIntent](ingetridestatusintent.md) object to your handler object at any time, including when the user asks explicitly for the status of that ride. The specified intent object contains no additional information. Your app must know which ride is currently active. Use the methods of this protocol to handle the request and provide an appropriate response.

Maps does not require you to confirm the contents of a get ride status intent before handling it. User interactions drive the selection of data in Maps, ensuring that the data Maps places into an intent object is already valid.

<a id="Updating-the-Ride-Status-Periodically"></a>

### Updating the Ride Status Periodically

After returning your response, SiriKit may call the [startSendingUpdatesForGetRideStatus:toObserver:](ingetridestatusintenthandling/startsendingupdates%28for_to_%29.md) method to ask for further updates as the ride status changes. Implement that method and use it to begin the delivery of regular updates. Continue providing updates until SiriKit calls the [stopSendingUpdatesForGetRideStatus:](ingetridestatusintenthandling/stopsendingupdates%28for_%29.md) method.

After it starts observing the status of a ride, SiriKit keeps your Intents extension alive so that it can provide frequent updates. Always deliver an update at least once every 20 seconds; otherwise, provide updates with the same frequency that you use for updating your own app. Always provide updates when the ride phase or completion status changes. For example, provide an update when your vehicle is approaching the pickup location or arrives at it. SiriKit uses the updates to refresh any map interfaces displaying the location of your vehicle to the user.

Use the methods of the observer object to deliver your updates back to SiriKit. For more information about providing updates to the observer, see [INGetRideStatusIntentResponseObserver](ingetridestatusintentresponseobserver.md).

## Topics

### Confirming the Response

- [confirmGetRideStatus:completion:](ingetridestatusintenthandling/confirm%28intent_completion_%29.md): Confirms the details of the user’s request.

### Handling the Intent

- [handleGetRideStatus:completion:](ingetridestatusintenthandling/handle%28intent_completion_%29.md): Handles providing the current status of the user’s ride.

### Providing Ride Status Updates

- [startSendingUpdatesForGetRideStatus:toObserver:](ingetridestatusintenthandling/startsendingupdates%28for_to_%29.md): Start delivering regular updates about the specified ride.
- [stopSendingUpdatesForGetRideStatus:](ingetridestatusintenthandling/stopsendingupdates%28for_%29.md): Stops the delivery of status updates for the specified ride.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INRidesharingDomainHandling](inridesharingdomainhandling.md)

## See Also

### Get the Ride Status

- [INGetRideStatusIntent](ingetridestatusintent.md): A request for the current status of a previously booked ride.
- [INGetRideStatusIntentResponse](ingetridestatusintentresponse.md): Your app’s response to a get ride status intent.
- [INGetRideStatusIntentResponseObserver](ingetridestatusintentresponseobserver.md): An interface for providing updated status for an active ride.
