> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmroom](https://developer.apple.com/documentation/homekit/hmroom)

# HMRoom (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The smallest subdivision of a home’s space.

## Declaration

```swift
class HMRoom
```

<a id="overview"></a>

## Overview

An [HMRoom](hmroom.md) instance is a part of a home representing an individual room in the home. Rooms don’t have any physical characteristics like size or location. Instead, they’re names that are meaningful to the user, like “living room” or “kitchen”. Meaningful room names enable voice commands like “Siri, turn on the kitchen lights.”

You create new rooms using the [addRoom(withName:completionHandler:)](hmhome/addroom%28withname_completionhandler_%29.md) method of [HMHome](hmhome.md). You can also group rooms into zones using instances of [HMZone](hmzone.md). You can assign accessories to rooms, indicating the presence of that accessory in that room.

## Topics

### Identifying a room

- [name](hmroom/name.md): The name of the room.
- [updateName(\_:completionHandler:)](hmroom/updatename%28__completionhandler_%29.md): Updates the name of the room.
- [uniqueIdentifier](hmroom/uniqueidentifier.md): The unique identifier for a room.

### Finding accessories

- [accessories](hmroom/accessories.md): The collection of accessories in the room.

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

### Locating an accessory

- [room](hmaccessory/room.md): The room containing the accessory.

# HMRoom (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The smallest subdivision of a home’s space.

## Declaration

```objectivec
@interface HMRoom : NSObject
```

<a id="overview"></a>

## Overview

An [HMRoom](hmroom.md) instance is a part of a home representing an individual room in the home. Rooms don’t have any physical characteristics like size or location. Instead, they’re names that are meaningful to the user, like “living room” or “kitchen”. Meaningful room names enable voice commands like “Siri, turn on the kitchen lights.”

You create new rooms using the [addRoomWithName:completionHandler:](hmhome/addroom%28withname_completionhandler_%29.md) method of [HMHome](hmhome.md). You can also group rooms into zones using instances of [HMZone](hmzone.md). You can assign accessories to rooms, indicating the presence of that accessory in that room.

## Topics

### Identifying a room

- [name](hmroom/name.md): The name of the room.
- [updateName:completionHandler:](hmroom/updatename%28__completionhandler_%29.md): Updates the name of the room.
- [uniqueIdentifier](hmroom/uniqueidentifier.md): The unique identifier for a room.

### Finding accessories

- [accessories](hmroom/accessories.md): The collection of accessories in the room.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Locating an accessory

- [room](hmaccessory/room.md): The room containing the accessory.
