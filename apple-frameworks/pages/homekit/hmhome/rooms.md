> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/rooms](https://developer.apple.com/documentation/homekit/hmhome/rooms)

# rooms (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of the rooms created and managed by the user.

## Declaration

```swift
var rooms: [HMRoom] { get }
```

<a id="Discussion"></a>

## Discussion

Each [HMHome](../hmhome.md) instance has an immutable default room — returned by the [roomForEntireHome()](roomforentirehome%28%29.md) method — to hold accessories that the user hasn’t assigned to a specific room. Unlike user-managed rooms, the default room doesn’t appear in the [rooms](rooms.md) array.

## See Also

### Dividing a house into rooms

- [roomForEntireHome()](roomforentirehome%28%29.md): A room that represents all parts of the home that don’t have a more specific room to represent them.
- [addRoom(withName:completionHandler:)](addroom%28withname_completionhandler_%29.md): Creates a new room with the specified name.
- [removeRoom(\_:completionHandler:)](removeroom%28__completionhandler_%29.md): Removes a room from the home.
- [HMRoom](../hmroom.md): The smallest subdivision of a home’s space.

# rooms (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of the rooms created and managed by the user.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<HMRoom *> * rooms;
```

<a id="Discussion"></a>

## Discussion

Each [HMHome](../hmhome.md) instance has an immutable default room — returned by the [roomForEntireHome](roomforentirehome%28%29.md) method — to hold accessories that the user hasn’t assigned to a specific room. Unlike user-managed rooms, the default room doesn’t appear in the [rooms](rooms.md) array.

## See Also

### Dividing a house into rooms

- [roomForEntireHome](roomforentirehome%28%29.md): A room that represents all parts of the home that don’t have a more specific room to represent them.
- [addRoomWithName:completionHandler:](addroom%28withname_completionhandler_%29.md): Creates a new room with the specified name.
- [removeRoom:completionHandler:](removeroom%28__completionhandler_%29.md): Removes a room from the home.
- [HMRoom](../hmroom.md): The smallest subdivision of a home’s space.
