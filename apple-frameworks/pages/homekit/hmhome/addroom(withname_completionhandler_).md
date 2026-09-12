> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/addroom(withname:completionhandler:)](https://developer.apple.com/documentation/homekit/hmhome/addroom(withname:completionhandler:))

# addRoom(withName:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates a new room with the specified name.

## Declaration

```swift
func addRoom(withName roomName: String, completionHandler completion: @escaping @Sendable (HMRoom?, (any Error)?) -> Void)
```

```swift
func addRoom(named roomName: String) async throws -> HMRoom
```

## Parameters

- `roomName`: The name of the new room. Must not be `nil`, and must not be the name of a room already in the home.
- `completion`: The block executed after the request is processed.

  - **room**: The newly created room.
  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Dividing a house into rooms

- [rooms](rooms.md): An array of the rooms created and managed by the user.
- [roomForEntireHome()](roomforentirehome%28%29.md): A room that represents all parts of the home that don’t have a more specific room to represent them.
- [removeRoom(\_:completionHandler:)](removeroom%28__completionhandler_%29.md): Removes a room from the home.
- [HMRoom](../hmroom.md): The smallest subdivision of a home’s space.

# addRoomWithName:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates a new room with the specified name.

## Declaration

```objectivec
- (void) addRoomWithName:(NSString *) roomName completionHandler:(void (^)(HMRoom *room, NSError *error)) completion;
```

## Parameters

- `roomName`: The name of the new room. Must not be `nil`, and must not be the name of a room already in the home.
- `completion`: The block executed after the request is processed.

  - **room**: The newly created room.
  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Dividing a house into rooms

- [rooms](rooms.md): An array of the rooms created and managed by the user.
- [roomForEntireHome](roomforentirehome%28%29.md): A room that represents all parts of the home that don’t have a more specific room to represent them.
- [removeRoom:completionHandler:](removeroom%28__completionhandler_%29.md): Removes a room from the home.
- [HMRoom](../hmroom.md): The smallest subdivision of a home’s space.
