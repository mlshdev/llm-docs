> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestrideintent](https://developer.apple.com/documentation/intents/inrequestrideintent)

# INRequestRideIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to book the specified ride from your service.

## Declaration

```swift
class INRequestRideIntent
```

<a id="overview"></a>

## Overview

SiriKit creates an [INRequestRideIntent](inrequestrideintent.md) object when the user asks to book a ride using your app. A ride request intent contains user-supplied information about the ride, such as its starting point and the number of people. Use this intent object to identify possible ride options for the user to choose from and to book the ride after the user confirms it.

To handle this intent, the handler object in your Intents extension must adopt the [INRequestRideIntentHandling](inrequestrideintenthandling.md) protocol. Your handler should confirm the request and create an [INRequestRideIntentResponse](inrequestrideintentresponse.md) object with information about whether your app successfully booked the ride.

When implementing ride-booking support, provide a GeoJSON file with the regions for which you are able to provide rides and upload that file as your app’s Routing App Coverage File in App Store Connect. When it needs to suggest apps capable of providing a ride, Maps uses your coverage information to determine whether it should suggest your app. If you do not provide a coverage file and your app is not installed on the user’s device, Maps does not suggest your app. For information about how to create and upload a Routing App Coverage File, see [iTunes Connect Developer Help](https://help.apple.com/itunes-connect/developer/#/dev4ba662442).

> **Note**

>  When implementing ride-booking support, provide a GeoJSON file with the regions for which you’re able to provide rides and upload that file as your app’s Routing App Coverage File in App Store Connect. When it needs to suggest apps capable of providing a ride, Maps uses your coverage information to determine whether it should suggest your app. If you don’t provide a coverage file and your app isn’t installed on the user’s device, Maps doesn’t suggest your app. For information about how to create and upload a Routing App Coverage File, see [iTunes Connect Developer Help](https://help.apple.com/itunes-connect/developer/#/dev4ba662442).

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Maps |
| Always requires unlocked device | Yes |

## Topics

### Initializing the Intent Object

- [init(pickupLocation:dropOffLocation:rideOptionName:partySize:paymentMethod:scheduledPickupTime:)](inrequestrideintent/init%28pickuplocation_dropofflocation_rideoptionname_partysize_paymentmethod_scheduledpickuptime_%29.md): Initializes an intent object with the specified ride information.

### Getting the Ride Details

- [rideOptionName](inrequestrideintent/rideoptionname.md): The name of the ride option selected by the user.
- [partySize](inrequestrideintent/partysize-39k7z.md): The number of passengers that the ride must accommodate.
- [pickupLocation](inrequestrideintent/pickuplocation.md): The user’s starting location.
- [scheduledPickupTime](inrequestrideintent/scheduledpickuptime.md): The time at which to pick up the user.
- [dropOffLocation](inrequestrideintent/dropofflocation.md): The user’s destination.

### Getting the Payment Information

- [paymentMethod](inrequestrideintent/paymentmethod.md): The user’s requested payment method.

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

### Request a Ride

- [INRequestRideIntentHandling](inrequestrideintenthandling.md): The handler interface for booking a ride for the user.
- [INRequestRideIntentResponse](inrequestrideintentresponse.md): Your app’s response to a request ride intent.

# INRequestRideIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A request to book the specified ride from your service.

## Declaration

```objectivec
@interface INRequestRideIntent : INIntent
```

<a id="overview"></a>

## Overview

SiriKit creates an [INRequestRideIntent](inrequestrideintent.md) object when the user asks to book a ride using your app. A ride request intent contains user-supplied information about the ride, such as its starting point and the number of people. Use this intent object to identify possible ride options for the user to choose from and to book the ride after the user confirms it.

To handle this intent, the handler object in your Intents extension must adopt the [INRequestRideIntentHandling](inrequestrideintenthandling.md) protocol. Your handler should confirm the request and create an [INRequestRideIntentResponse](inrequestrideintentresponse.md) object with information about whether your app successfully booked the ride.

When implementing ride-booking support, provide a GeoJSON file with the regions for which you are able to provide rides and upload that file as your app’s Routing App Coverage File in App Store Connect. When it needs to suggest apps capable of providing a ride, Maps uses your coverage information to determine whether it should suggest your app. If you do not provide a coverage file and your app is not installed on the user’s device, Maps does not suggest your app. For information about how to create and upload a Routing App Coverage File, see [iTunes Connect Developer Help](https://help.apple.com/itunes-connect/developer/#/dev4ba662442).

> **Note**

>  When implementing ride-booking support, provide a GeoJSON file with the regions for which you’re able to provide rides and upload that file as your app’s Routing App Coverage File in App Store Connect. When it needs to suggest apps capable of providing a ride, Maps uses your coverage information to determine whether it should suggest your app. If you don’t provide a coverage file and your app isn’t installed on the user’s device, Maps doesn’t suggest your app. For information about how to create and upload a Routing App Coverage File, see [iTunes Connect Developer Help](https://help.apple.com/itunes-connect/developer/#/dev4ba662442).

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Maps |
| Always requires unlocked device | Yes |

## Topics

### Initializing the Intent Object

- [initWithPickupLocation:dropOffLocation:rideOptionName:partySize:paymentMethod:scheduledPickupTime:](https://developer.apple.com/documentation/intents/inrequestrideintent/initwithpickuplocation:dropofflocation:rideoptionname:partysize:paymentmethod:scheduledpickuptime:): Initializes an intent object with the specified ride information.
- [initWithPickupLocation:dropOffLocation:rideOptionName:partySize:paymentMethod:](https://developer.apple.com/documentation/intents/inrequestrideintent/initwithpickuplocation:dropofflocation:rideoptionname:partysize:paymentmethod:): Deprecated. Initializes an intent object with the specified ride information.

### Getting the Ride Details

- [rideOptionName](inrequestrideintent/rideoptionname.md): The name of the ride option selected by the user.
- [partySize](https://developer.apple.com/documentation/intents/inrequestrideintent/partysize-64kfc): The number of passengers that the ride must accommodate.
- [pickupLocation](inrequestrideintent/pickuplocation.md): The user’s starting location.
- [scheduledPickupTime](inrequestrideintent/scheduledpickuptime.md): The time at which to pick up the user.
- [dropOffLocation](inrequestrideintent/dropofflocation.md): The user’s destination.

### Getting the Payment Information

- [paymentMethod](inrequestrideintent/paymentmethod.md): The user’s requested payment method.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Request a Ride

- [INRequestRideIntentHandling](inrequestrideintenthandling.md): The handler interface for booking a ride for the user.
- [INRequestRideIntentResponse](inrequestrideintentresponse.md): Your app’s response to a request ride intent.
