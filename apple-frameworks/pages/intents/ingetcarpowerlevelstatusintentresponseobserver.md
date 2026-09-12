> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintentresponseobserver](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponseobserver)

# INGetCarPowerLevelStatusIntentResponseObserver (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The interface for providing updates of a vehicle’s power level.

## Declaration

```swift
protocol INGetCarPowerLevelStatusIntentResponseObserver : NSObjectProtocol
```

<a id="overview"></a>

## Overview

This protocol allows adopting objects to provide the system with an updated power level of a vehicle. You do not adopt this protocol in your own objects. Instead, the system provides an object that adopts this protocol, and you call its [didUpdate(getCarPowerLevelStatus:)](ingetcarpowerlevelstatusintentresponseobserver/didupdate%28getcarpowerlevelstatus_%29.md) method to provide the vehicle’s current power level.

When the system requests power level updates, it passes an object that conforms to this protocol to the [startSendingUpdates(for:to:)](ingetcarpowerlevelstatusintenthandling/startsendingupdates%28for_to_%29.md) method of your power level status handler—your custom object that adopts the [INGetCarPowerLevelStatusIntentHandling](ingetcarpowerlevelstatusintenthandling.md) protocol. Your handler must store a reference to this object and use it to deliver regular updates about the power level.

## Topics

### Updating the Power Level Status

- [didUpdate(getCarPowerLevelStatus:)](ingetcarpowerlevelstatusintentresponseobserver/didupdate%28getcarpowerlevelstatus_%29.md): Provides information about the vehicle’s power level.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Get Car Power Level Status

- [INGetCarPowerLevelStatusIntentHandling](ingetcarpowerlevelstatusintenthandling.md): The handler interface for requesting a car’s current power level.
- [INGetCarPowerLevelStatusIntent](ingetcarpowerlevelstatusintent.md): A request for the current power level of the user’s car.
- [INGetCarPowerLevelStatusIntentResponse](ingetcarpowerlevelstatusintentresponse.md): Your app’s response to a request for the vehicle power level.

# INGetCarPowerLevelStatusIntentResponseObserver (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The interface for providing updates of a vehicle’s power level.

## Declaration

```objectivec
@protocol INGetCarPowerLevelStatusIntentResponseObserver <NSObject>
```

<a id="overview"></a>

## Overview

This protocol allows adopting objects to provide the system with an updated power level of a vehicle. You do not adopt this protocol in your own objects. Instead, the system provides an object that adopts this protocol, and you call its [getCarPowerLevelStatusResponseDidUpdate:](ingetcarpowerlevelstatusintentresponseobserver/didupdate%28getcarpowerlevelstatus_%29.md) method to provide the vehicle’s current power level.

When the system requests power level updates, it passes an object that conforms to this protocol to the [startSendingUpdatesForGetCarPowerLevelStatus:toObserver:](ingetcarpowerlevelstatusintenthandling/startsendingupdates%28for_to_%29.md) method of your power level status handler—your custom object that adopts the [INGetCarPowerLevelStatusIntentHandling](ingetcarpowerlevelstatusintenthandling.md) protocol. Your handler must store a reference to this object and use it to deliver regular updates about the power level.

## Topics

### Updating the Power Level Status

- [getCarPowerLevelStatusResponseDidUpdate:](ingetcarpowerlevelstatusintentresponseobserver/didupdate%28getcarpowerlevelstatus_%29.md): Provides information about the vehicle’s power level.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Get Car Power Level Status

- [INGetCarPowerLevelStatusIntentHandling](ingetcarpowerlevelstatusintenthandling.md): The handler interface for requesting a car’s current power level.
- [INGetCarPowerLevelStatusIntent](ingetcarpowerlevelstatusintent.md): A request for the current power level of the user’s car.
- [INGetCarPowerLevelStatusIntentResponse](ingetcarpowerlevelstatusintentresponse.md): Your app’s response to a request for the vehicle power level.
