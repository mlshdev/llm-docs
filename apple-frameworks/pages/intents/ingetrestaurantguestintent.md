> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetrestaurantguestintent](https://developer.apple.com/documentation/intents/ingetrestaurantguestintent)

# INGetRestaurantGuestIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A request for information about the guest who is making reservations.

## Declaration

```swift
class INGetRestaurantGuestIntent
```

<a id="overview"></a>

## Overview

An [INGetRestaurantGuestIntent](ingetrestaurantguestintent.md) object is a request for information about the person whose name should appear on reservations. Maps sends this intent to your Intents extension when it wants information about the person making reservations. Your response contains the identity of the person making the reservation. The response can also contain information about whether your service allows the user to modify the identity of the guest. For example, you can specify whether your service allows one user to book reservations on behalf of another user.

To handle this intent, the handler object in your Intents extension must adopt the [INGetRestaurantGuestIntentHandling](ingetrestaurantguestintenthandling.md) protocol. Your handler should create an [INGetRestaurantGuestIntentResponse](ingetrestaurantguestintentresponse.md) object with information about the guest and your app’s preferences for modifying that guest’s identity.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Maps |
| Always requires unlocked device | Yes |

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

### Get Restaurant Guest

- [INGetRestaurantGuestIntentHandling](ingetrestaurantguestintenthandling.md): The handler interface for fetching information about the person making a reservation.
- [INGetRestaurantGuestIntentResponse](ingetrestaurantguestintentresponse.md): Your app’s response to a get restaurant guest intent.

# INGetRestaurantGuestIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A request for information about the guest who is making reservations.

## Declaration

```objectivec
@interface INGetRestaurantGuestIntent : INIntent
```

<a id="overview"></a>

## Overview

An [INGetRestaurantGuestIntent](ingetrestaurantguestintent.md) object is a request for information about the person whose name should appear on reservations. Maps sends this intent to your Intents extension when it wants information about the person making reservations. Your response contains the identity of the person making the reservation. The response can also contain information about whether your service allows the user to modify the identity of the guest. For example, you can specify whether your service allows one user to book reservations on behalf of another user.

To handle this intent, the handler object in your Intents extension must adopt the [INGetRestaurantGuestIntentHandling](ingetrestaurantguestintenthandling.md) protocol. Your handler should create an [INGetRestaurantGuestIntentResponse](ingetrestaurantguestintentresponse.md) object with information about the guest and your app’s preferences for modifying that guest’s identity.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Maps |
| Always requires unlocked device | Yes |

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Get Restaurant Guest

- [INGetRestaurantGuestIntentHandling](ingetrestaurantguestintenthandling.md): The handler interface for fetching information about the person making a reservation.
- [INGetRestaurantGuestIntentResponse](ingetrestaurantguestintentresponse.md): Your app’s response to a get restaurant guest intent.
