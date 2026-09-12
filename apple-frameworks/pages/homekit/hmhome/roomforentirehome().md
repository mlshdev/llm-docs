> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/roomforentirehome()](https://developer.apple.com/documentation/homekit/hmhome/roomforentirehome())

# roomForEntireHome() (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A room that represents all parts of the home that don’t have a more specific room to represent them.

## Declaration

```swift
func roomForEntireHome() -> HMRoom
```

<a id="return-value"></a>

## Return Value

The room that represents all parts of the home that don’t have a more specific room to represent them.

<a id="Discussion"></a>

## Discussion

HomeKit assigns new accessories to this room until you assign them to a more specific room with [assignAccessory(\_:to:completionHandler:)](assignaccessory%28__to_completionhandler_%29.md), or until the user assigns them to a room using the Home app.

You can’t rename this room, add it to a zone, or remove it from the home. It also doesn’t appear in the home’s [rooms](rooms.md) array.

## See Also

### Dividing a house into rooms

- [rooms](rooms.md): An array of the rooms created and managed by the user.
- [addRoom(withName:completionHandler:)](addroom%28withname_completionhandler_%29.md): Creates a new room with the specified name.
- [removeRoom(\_:completionHandler:)](removeroom%28__completionhandler_%29.md): Removes a room from the home.
- [HMRoom](../hmroom.md): The smallest subdivision of a home’s space.

# roomForEntireHome (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A room that represents all parts of the home that don’t have a more specific room to represent them.

## Declaration

```objectivec
- (HMRoom *) roomForEntireHome;
```

<a id="return-value"></a>

## Return Value

The room that represents all parts of the home that don’t have a more specific room to represent them.

<a id="Discussion"></a>

## Discussion

HomeKit assigns new accessories to this room until you assign them to a more specific room with [assignAccessory:toRoom:completionHandler:](assignaccessory%28__to_completionhandler_%29.md), or until the user assigns them to a room using the Home app.

You can’t rename this room, add it to a zone, or remove it from the home. It also doesn’t appear in the home’s [rooms](rooms.md) array.

## See Also

### Dividing a house into rooms

- [rooms](rooms.md): An array of the rooms created and managed by the user.
- [addRoomWithName:completionHandler:](addroom%28withname_completionhandler_%29.md): Creates a new room with the specified name.
- [removeRoom:completionHandler:](removeroom%28__completionhandler_%29.md): Removes a room from the home.
- [HMRoom](../hmroom.md): The smallest subdivision of a home’s space.
