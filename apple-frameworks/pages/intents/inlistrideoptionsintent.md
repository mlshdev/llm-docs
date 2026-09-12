> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistrideoptionsintent](https://developer.apple.com/documentation/intents/inlistrideoptionsintent)

# INListRideOptionsIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An intent for getting the types of rides available from a ride-booking service.

## Declaration

```swift
class INListRideOptionsIntent
```

## Mentioned In

- [Generating a List of Ride Options](../sirikit/generating-a-list-of-ride-options.md)

<a id="overview"></a>

## Overview

Maps creates an [INListRideOptionsIntent](inlistrideoptionsintent.md) object when it needs to display the types of vehicles that your service offers. Use the information in this intent to identify the possible vehicles that you can provide to the user right now. The intent contains information about the user’s pickup and drop-off locations, which you can use to determine ride availability, pricing, and estimated pickup times. This intent object represents a request for information and is not a commitment from the user to book any of the specified rides.

To handle this intent, the handler object in your Intents extension must adopt the [INListRideOptionsIntentHandling](inlistrideoptionsintenthandling.md) protocol. Your handler should resolve and confirm the request parameters and create an [INListRideOptionsIntentResponse](inlistrideoptionsintentresponse.md) object with the list of options.

> **Note**

>  When implementing ride-booking support, provide a GeoJSON file with the regions for which you are able to provide rides and upload that file as your app’s Routing App Coverage File in App Store Connect. When it needs to suggest apps capable of providing a ride, Maps uses your coverage information to determine whether it should suggest your app. If you do not provide a coverage file and your app is not installed on the user’s device, Maps does not suggest your app. For information about how to create and upload a Routing App Coverage File, see [iTunes Connect Developer Help](https://help.apple.com/itunes-connect/developer/#/dev4ba662442).

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Maps |
| Always requires unlocked device | Yes |

## Topics

### Creating the Intent Object

- [init(pickupLocation:dropOffLocation:)](inlistrideoptionsintent/init%28pickuplocation_dropofflocation_%29.md): Initializes the intent object with the specified pickup and drop-off locations.

### Getting the Pickup and Drop Off Locations

- [pickupLocation](inlistrideoptionsintent/pickuplocation.md): The user’s starting location.
- [dropOffLocation](inlistrideoptionsintent/dropofflocation.md): The user’s destination.

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

### List Ride Options

- [Generating a List of Ride Options](../sirikit/generating-a-list-of-ride-options.md): Generate ride options for Maps to display to the user.
- [INListRideOptionsIntentHandling](inlistrideoptionsintenthandling.md): The handler interface for fetching the list of rides currently available from your ride-booking service.
- [INListRideOptionsIntentResponse](inlistrideoptionsintentresponse.md): Your app’s response to a list ride options intent.

# INListRideOptionsIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

An intent for getting the types of rides available from a ride-booking service.

## Declaration

```objectivec
@interface INListRideOptionsIntent : INIntent
```

## Mentioned In

- [Generating a List of Ride Options](../sirikit/generating-a-list-of-ride-options.md)

<a id="overview"></a>

## Overview

Maps creates an [INListRideOptionsIntent](inlistrideoptionsintent.md) object when it needs to display the types of vehicles that your service offers. Use the information in this intent to identify the possible vehicles that you can provide to the user right now. The intent contains information about the user’s pickup and drop-off locations, which you can use to determine ride availability, pricing, and estimated pickup times. This intent object represents a request for information and is not a commitment from the user to book any of the specified rides.

To handle this intent, the handler object in your Intents extension must adopt the [INListRideOptionsIntentHandling](inlistrideoptionsintenthandling.md) protocol. Your handler should resolve and confirm the request parameters and create an [INListRideOptionsIntentResponse](inlistrideoptionsintentresponse.md) object with the list of options.

> **Note**

>  When implementing ride-booking support, provide a GeoJSON file with the regions for which you are able to provide rides and upload that file as your app’s Routing App Coverage File in App Store Connect. When it needs to suggest apps capable of providing a ride, Maps uses your coverage information to determine whether it should suggest your app. If you do not provide a coverage file and your app is not installed on the user’s device, Maps does not suggest your app. For information about how to create and upload a Routing App Coverage File, see [iTunes Connect Developer Help](https://help.apple.com/itunes-connect/developer/#/dev4ba662442).

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Maps |
| Always requires unlocked device | Yes |

## Topics

### Creating the Intent Object

- [initWithPickupLocation:dropOffLocation:](inlistrideoptionsintent/init%28pickuplocation_dropofflocation_%29.md): Initializes the intent object with the specified pickup and drop-off locations.

### Getting the Pickup and Drop Off Locations

- [pickupLocation](inlistrideoptionsintent/pickuplocation.md): The user’s starting location.
- [dropOffLocation](inlistrideoptionsintent/dropofflocation.md): The user’s destination.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### List Ride Options

- [Generating a List of Ride Options](../sirikit/generating-a-list-of-ride-options.md): Generate ride options for Maps to display to the user.
- [INListRideOptionsIntentHandling](inlistrideoptionsintenthandling.md): The handler interface for fetching the list of rides currently available from your ride-booking service.
- [INListRideOptionsIntentResponse](inlistrideoptionsintentresponse.md): Your app’s response to a list ride options intent.
