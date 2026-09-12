> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintenthandling](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintenthandling)

# INGetCarPowerLevelStatusIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The handler interface for requesting a car’s current power level.

## Declaration

```swift
protocol INGetCarPowerLevelStatusIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the `INGetCarPowerLevelStatusIntentHandling` protocol to resolve, confirm, and handle requests for the current power level of one of the user’s electric vehicles. Adopt this protocol in an object of your Intents extension that can access the vehicle’s power level.

Siri delivers an [INGetCarPowerLevelStatusIntent](ingetcarpowerlevelstatusintent.md) object to your handler when the user asks for the power level of a particular vehicle. The provided intent object can contain the car’s name (if available). Maps delivers the same intent to your handler when requesting information about the electric vehicle for route planning and navigation purposes.

During an active navigation session, Maps frequently asks for the vehicle’s power level status using `INGetCarPowerLevelStatusIntent`. When the navigation session begins, Maps may ask you to notify it about abrupt changes in the vehicle’s power level by calling the [startSendingUpdates(for:to:)](ingetcarpowerlevelstatusintenthandling/startsendingupdates%28for_to_%29.md) method of your handler.

Use the observer the method provides to deliver updates to Maps. For more information on providing updates using the observer, see [INGetCarPowerLevelStatusIntentResponseObserver](ingetcarpowerlevelstatusintentresponseobserver.md).

## Topics

### Resolving the Intent Parameters

- [resolveCarName(for:with:)](ingetcarpowerlevelstatusintenthandling/resolvecarname%28for_with_%29.md): Resolves the name of the user’s car.

### Confirming the Response

- [confirm(intent:completion:)](ingetcarpowerlevelstatusintenthandling/confirm%28intent_completion_%29.md): Confirms that you can access the car’s power level.

### Handling the Intent

- [handle(intent:completion:)](ingetcarpowerlevelstatusintenthandling/handle%28intent_completion_%29.md): Accesses and returns the car’s current power level status.

### Providing Power Level Status Updates

- [startSendingUpdates(for:to:)](ingetcarpowerlevelstatusintenthandling/startsendingupdates%28for_to_%29.md): Starts the delivery of regular power level updates for a particular electric vehicle.
- [stopSendingUpdates(for:)](ingetcarpowerlevelstatusintenthandling/stopsendingupdates%28for_%29.md): Stops the delivery of regular power level updates for a particular electric vehicle.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md)

## See Also

### Get Car Power Level Status

- [INGetCarPowerLevelStatusIntent](ingetcarpowerlevelstatusintent.md): A request for the current power level of the user’s car.
- [INGetCarPowerLevelStatusIntentResponse](ingetcarpowerlevelstatusintentresponse.md): Your app’s response to a request for the vehicle power level.
- [INGetCarPowerLevelStatusIntentResponseObserver](ingetcarpowerlevelstatusintentresponseobserver.md): The interface for providing updates of a vehicle’s power level.

# INGetCarPowerLevelStatusIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The handler interface for requesting a car’s current power level.

## Declaration

```objectivec
@protocol INGetCarPowerLevelStatusIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the `INGetCarPowerLevelStatusIntentHandling` protocol to resolve, confirm, and handle requests for the current power level of one of the user’s electric vehicles. Adopt this protocol in an object of your Intents extension that can access the vehicle’s power level.

Siri delivers an [INGetCarPowerLevelStatusIntent](ingetcarpowerlevelstatusintent.md) object to your handler when the user asks for the power level of a particular vehicle. The provided intent object can contain the car’s name (if available). Maps delivers the same intent to your handler when requesting information about the electric vehicle for route planning and navigation purposes.

During an active navigation session, Maps frequently asks for the vehicle’s power level status using `INGetCarPowerLevelStatusIntent`. When the navigation session begins, Maps may ask you to notify it about abrupt changes in the vehicle’s power level by calling the [startSendingUpdatesForGetCarPowerLevelStatus:toObserver:](ingetcarpowerlevelstatusintenthandling/startsendingupdates%28for_to_%29.md) method of your handler.

Use the observer the method provides to deliver updates to Maps. For more information on providing updates using the observer, see [INGetCarPowerLevelStatusIntentResponseObserver](ingetcarpowerlevelstatusintentresponseobserver.md).

## Topics

### Resolving the Intent Parameters

- [resolveCarNameForGetCarPowerLevelStatus:withCompletion:](ingetcarpowerlevelstatusintenthandling/resolvecarname%28for_with_%29.md): Resolves the name of the user’s car.

### Confirming the Response

- [confirmGetCarPowerLevelStatus:completion:](ingetcarpowerlevelstatusintenthandling/confirm%28intent_completion_%29.md): Confirms that you can access the car’s power level.

### Handling the Intent

- [handleGetCarPowerLevelStatus:completion:](ingetcarpowerlevelstatusintenthandling/handle%28intent_completion_%29.md): Accesses and returns the car’s current power level status.

### Providing Power Level Status Updates

- [startSendingUpdatesForGetCarPowerLevelStatus:toObserver:](ingetcarpowerlevelstatusintenthandling/startsendingupdates%28for_to_%29.md): Starts the delivery of regular power level updates for a particular electric vehicle.
- [stopSendingUpdatesForGetCarPowerLevelStatus:](ingetcarpowerlevelstatusintenthandling/stopsendingupdates%28for_%29.md): Stops the delivery of regular power level updates for a particular electric vehicle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md)

## See Also

### Get Car Power Level Status

- [INGetCarPowerLevelStatusIntent](ingetcarpowerlevelstatusintent.md): A request for the current power level of the user’s car.
- [INGetCarPowerLevelStatusIntentResponse](ingetcarpowerlevelstatusintentresponse.md): Your app’s response to a request for the vehicle power level.
- [INGetCarPowerLevelStatusIntentResponseObserver](ingetcarpowerlevelstatusintentresponseobserver.md): The interface for providing updates of a vehicle’s power level.
