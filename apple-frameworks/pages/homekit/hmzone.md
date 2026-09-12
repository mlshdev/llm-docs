> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmzone](https://developer.apple.com/documentation/homekit/hmzone)

# HMZone (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A collection of rooms that users think of as a single area, like upstairs or downstairs.

## Declaration

```swift
class HMZone
```

<a id="overview"></a>

## Overview

An [HMZone](hmzone.md) instance is an optional grouping of rooms in a home, with names like “upstairs” and “downstairs”. Zones are optional—rooms don’t need to be in a zone. By adding rooms to a zone, the user can give commands to Siri like “Siri, turn on all of the lights downstairs.” A single room can be in multiple zones—for example, “kitchen” might be in both the “downstairs” and “entertainment area” zones.

You create new zones using the [addZone(withName:completionHandler:)](hmhome/addzone%28withname_completionhandler_%29.md) method of [HMHome](hmhome.md). A zone can’t span homes—that is, you can’t create a zone that includes rooms from more than one home.

## Topics

### Identifying a Zone

- [name](hmzone/name.md): The name of the zone.
- [updateName(\_:completionHandler:)](hmzone/updatename%28__completionhandler_%29.md): Updates the name of the zone.
- [uniqueIdentifier](hmzone/uniqueidentifier.md): The unique identifier for a zone.

### Assigning Rooms to a Zone

- [rooms](hmzone/rooms.md): Array of rooms in the zone.
- [addRoom(\_:completionHandler:)](hmzone/addroom%28__completionhandler_%29.md): Adds a room to the zone.
- [removeRoom(\_:completionHandler:)](hmzone/removeroom%28__completionhandler_%29.md): Removes a room from the zone.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Grouping rooms into zones

- [zones](hmhome/zones.md): An array of all the zones in the home.
- [addZone(withName:completionHandler:)](hmhome/addzone%28withname_completionhandler_%29.md): Adds a new zone to the home.
- [removeZone(\_:completionHandler:)](hmhome/removezone%28__completionhandler_%29.md): Removes a zone from the home.

# HMZone (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A collection of rooms that users think of as a single area, like upstairs or downstairs.

## Declaration

```objectivec
@interface HMZone : NSObject
```

<a id="overview"></a>

## Overview

An [HMZone](hmzone.md) instance is an optional grouping of rooms in a home, with names like “upstairs” and “downstairs”. Zones are optional—rooms don’t need to be in a zone. By adding rooms to a zone, the user can give commands to Siri like “Siri, turn on all of the lights downstairs.” A single room can be in multiple zones—for example, “kitchen” might be in both the “downstairs” and “entertainment area” zones.

You create new zones using the [addZoneWithName:completionHandler:](hmhome/addzone%28withname_completionhandler_%29.md) method of [HMHome](hmhome.md). A zone can’t span homes—that is, you can’t create a zone that includes rooms from more than one home.

## Topics

### Identifying a Zone

- [name](hmzone/name.md): The name of the zone.
- [updateName:completionHandler:](hmzone/updatename%28__completionhandler_%29.md): Updates the name of the zone.
- [uniqueIdentifier](hmzone/uniqueidentifier.md): The unique identifier for a zone.

### Assigning Rooms to a Zone

- [rooms](hmzone/rooms.md): Array of rooms in the zone.
- [addRoom:completionHandler:](hmzone/addroom%28__completionhandler_%29.md): Adds a room to the zone.
- [removeRoom:completionHandler:](hmzone/removeroom%28__completionhandler_%29.md): Removes a room from the zone.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Grouping rooms into zones

- [zones](hmhome/zones.md): An array of all the zones in the home.
- [addZoneWithName:completionHandler:](hmhome/addzone%28withname_completionhandler_%29.md): Adds a new zone to the home.
- [removeZone:completionHandler:](hmhome/removezone%28__completionhandler_%29.md): Removes a zone from the home.
