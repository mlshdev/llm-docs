> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbyobject](https://developer.apple.com/documentation/nearbyinteraction/ninearbyobject)

# NINearbyObject (Swift)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Location information for a peer device in an interaction session.

## Declaration

```swift
class NINearbyObject
```

<a id="overview"></a>

## Overview

A nearby object refers to a peer Apple device or third-party accessory.

When the framework is ready to provide your app with information about a nearby object’s relative position, it calls your delegate’s [session(\_:didUpdate:)](nisessiondelegate/session%28__didupdate_%29.md) implementation.

If a session can’t provide peer direction or distance, it sets the values to `nil`. In Objective-C, the session uses the [NINearbyObjectDirectionNotAvailable](ninearbyobjectdirectionnotavailable.md) and [NINearbyObjectDistanceNotAvailable](ninearbyobjectdistancenotavailable.md) values to indicate missing direction or distance.

For more information, see [Initiating and maintaining a session](initiating-and-maintaining-a-session.md).

## Topics

### Identifying a nearby device

- [discoveryToken](ninearbyobject/discoverytoken.md): A unique identifier for a peer device in the session.

### Acquring relative distance

- [distance](ninearbyobject/distance-676dm.md): The distance from the user’s device to the peer device in meters.

### Acquiring relative direction

- [direction](ninearbyobject/direction-4qh5w.md): A vector that points from the user’s device in the direction of the peer device.
- [horizontalAngle](ninearbyobject/horizontalangle-hsg.md): An angle in radians that indicates the azimuthal direction to the nearby object.
- [verticalDirectionEstimate](ninearbyobject/verticaldirectionestimate-swift.property.md): The estimation of a nearby object’s vertical position as it relates to the user’s device.
- [NINearbyObject.VerticalDirectionEstimate](ninearbyobject/verticaldirectionestimate-swift.enum.md): Estimations of a nearby object’s vertical position in relation to the user’s device.

### Explaining participation

- [NINearbyObject.RemovalReason](ninearbyobject/removalreason.md): The reason a session removed a nearby object.

### Initializers

- [init(coder:)](ninearbyobject/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Periodic updates

- [NISessionDelegate](nisessiondelegate.md): An object that monitors and reacts to session updates.

# NINearbyObject (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

Location information for a peer device in an interaction session.

## Declaration

```objectivec
@interface NINearbyObject : NSObject
```

<a id="overview"></a>

## Overview

A nearby object refers to a peer Apple device or third-party accessory.

When the framework is ready to provide your app with information about a nearby object’s relative position, it calls your delegate’s [session:didUpdateNearbyObjects:](nisessiondelegate/session%28__didupdate_%29.md) implementation.

If a session can’t provide peer direction or distance, it sets the values to `nil`. In Objective-C, the session uses the [NINearbyObjectDirectionNotAvailable](ninearbyobjectdirectionnotavailable.md) and [NINearbyObjectDistanceNotAvailable](ninearbyobjectdistancenotavailable.md) values to indicate missing direction or distance.

For more information, see [Initiating and maintaining a session](initiating-and-maintaining-a-session.md).

## Topics

### Identifying a nearby device

- [discoveryToken](ninearbyobject/discoverytoken.md): A unique identifier for a peer device in the session.

### Acquring relative distance

- [distance](ninearbyobject/distance-9atp7.md): The distance from the user’s device to the peer device in meters.
- [NINearbyObjectDistanceNotAvailable](ninearbyobjectdistancenotavailable.md): An object that indicates the peer’s distance is unavailable.

### Acquiring relative direction

- [direction](ninearbyobject/direction-5xcld.md): A vector that points from the user’s device in the direction of the peer device.
- [NINearbyObjectDirectionNotAvailable](ninearbyobjectdirectionnotavailable.md): A value that indicates that a nearby object’s direction is unavailable.
- [horizontalAngle](ninearbyobject/horizontalangle-9ibky.md): An angle in radians that indicates the azimuthal direction to the nearby object.
- [NINearbyObjectAngleNotAvailable](ninearbyobjectanglenotavailable.md): A value that indicates that a nearby object’s horizontal angle is unavailable.
- [verticalDirectionEstimate](ninearbyobject/verticaldirectionestimate-swift.property.md): The estimation of a nearby object’s vertical position as it relates to the user’s device.
- [NINearbyObjectVerticalDirectionEstimate](ninearbyobject/verticaldirectionestimate-swift.enum.md): Estimations of a nearby object’s vertical position in relation to the user’s device.

### Explaining participation

- [NINearbyObjectRemovalReason](ninearbyobject/removalreason.md): The reason a session removed a nearby object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Periodic updates

- [NISessionDelegate](nisessiondelegate.md): An object that monitors and reacts to session updates.
