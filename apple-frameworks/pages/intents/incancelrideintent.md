> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incancelrideintent](https://developer.apple.com/documentation/intents/incancelrideintent)

# INCancelRideIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An intent requesting the cancellation of a previously booked ride.

## Declaration

```swift
class INCancelRideIntent
```

<a id="overview"></a>

## Overview

When the user cancels a ride that was previously booked through Siri or Maps, SiriKit sends an [INCancelRideIntent](incancelrideintent.md) object to your handler. SiriKit populates this intent object with the ride identifier that you provided when originally booking the ride. Upon receiving this intent, verify the ride information and cancel the ride accordingly.

To handle this intent, the handler object in your Intents extension must adopt the [INCancelRideIntentHandling](incancelrideintenthandling.md) protocol. Your handler should confirm the request and create an [INCancelRideIntentResponse](incancelrideintentresponse.md) object with the status of the ride.

SiriKit prefers sending this intent object to your extension over canceling a ride by other means. So when responding to an [INRequestRideIntent](inrequestrideintent.md) object, you can continue to set the [userActivityForCancelingInApplication](inridestatus/useractivityforcancelinginapplication.md) property of your response’s [INRideStatus](inridestatus.md) object to allow cancellation of the ride in your app. SiriKit uses that [NSUserActivity](../foundation/nsuseractivity.md) object only on systems where this intent is unavailable or not supported by your extension.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Maps |
| Always requires unlocked device | Yes |

## Topics

### Initializing an Intent Object

- [init(rideIdentifier:)](incancelrideintent/init%28rideidentifier_%29.md): Initializes the intent object with the specified ride identifier.

### Identifying the Ride

- [rideIdentifier](incancelrideintent/rideidentifier.md): The unique identifier that you assigned to the ride.

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

### Cancel Ride

- [INCancelRideIntentHandling](incancelrideintenthandling.md): The handler interface for canceling a previously booked ride.
- [INCancelRideIntentResponse](incancelrideintentresponse.md): Your app’s response to a cancel ride intent.

# INCancelRideIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An intent requesting the cancellation of a previously booked ride.

## Declaration

```objectivec
@interface INCancelRideIntent : INIntent
```

<a id="overview"></a>

## Overview

When the user cancels a ride that was previously booked through Siri or Maps, SiriKit sends an [INCancelRideIntent](incancelrideintent.md) object to your handler. SiriKit populates this intent object with the ride identifier that you provided when originally booking the ride. Upon receiving this intent, verify the ride information and cancel the ride accordingly.

To handle this intent, the handler object in your Intents extension must adopt the [INCancelRideIntentHandling](incancelrideintenthandling.md) protocol. Your handler should confirm the request and create an [INCancelRideIntentResponse](incancelrideintentresponse.md) object with the status of the ride.

SiriKit prefers sending this intent object to your extension over canceling a ride by other means. So when responding to an [INRequestRideIntent](inrequestrideintent.md) object, you can continue to set the [userActivityForCancelingInApplication](inridestatus/useractivityforcancelinginapplication.md) property of your response’s [INRideStatus](inridestatus.md) object to allow cancellation of the ride in your app. SiriKit uses that [NSUserActivity](../foundation/nsuseractivity.md) object only on systems where this intent is unavailable or not supported by your extension.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Maps |
| Always requires unlocked device | Yes |

## Topics

### Initializing an Intent Object

- [initWithRideIdentifier:](incancelrideintent/init%28rideidentifier_%29.md): Initializes the intent object with the specified ride identifier.

### Identifying the Ride

- [rideIdentifier](incancelrideintent/rideidentifier.md): The unique identifier that you assigned to the ride.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Cancel Ride

- [INCancelRideIntentHandling](incancelrideintenthandling.md): The handler interface for canceling a previously booked ride.
- [INCancelRideIntentResponse](incancelrideintentresponse.md): Your app’s response to a cancel ride intent.
