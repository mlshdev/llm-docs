> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/removeroom(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmhome/removeroom(_:completionhandler:))

# removeRoom(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Removes a room from the home.

## Declaration

```swift
func removeRoom(_ room: HMRoom, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeRoom(_ room: HMRoom) async throws
```

## Parameters

- `room`: The room to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

If the room is in a zone, this method also removes it from the zone. Any accessories in the removed room automatically move to [roomForEntireHome()](roomforentirehome%28%29.md).

## See Also

### Dividing a house into rooms

- [rooms](rooms.md): An array of the rooms created and managed by the user.
- [roomForEntireHome()](roomforentirehome%28%29.md): A room that represents all parts of the home that don’t have a more specific room to represent them.
- [addRoom(withName:completionHandler:)](addroom%28withname_completionhandler_%29.md): Creates a new room with the specified name.
- [HMRoom](../hmroom.md): The smallest subdivision of a home’s space.

# removeRoom:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Removes a room from the home.

## Declaration

```objectivec
- (void) removeRoom:(HMRoom *) room completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `room`: The room to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

If the room is in a zone, this method also removes it from the zone. Any accessories in the removed room automatically move to [roomForEntireHome](roomforentirehome%28%29.md).

## See Also

### Dividing a house into rooms

- [rooms](rooms.md): An array of the rooms created and managed by the user.
- [roomForEntireHome](roomforentirehome%28%29.md): A room that represents all parts of the home that don’t have a more specific room to represent them.
- [addRoomWithName:completionHandler:](addroom%28withname_completionhandler_%29.md): Creates a new room with the specified name.
- [HMRoom](../hmroom.md): The smallest subdivision of a home’s space.
