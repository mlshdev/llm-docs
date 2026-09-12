> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmzone/removeroom(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmzone/removeroom(_:completionhandler:))

# removeRoom(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Removes a room from the zone.

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

## See Also

### Assigning Rooms to a Zone

- [rooms](rooms.md): Array of rooms in the zone.
- [addRoom(\_:completionHandler:)](addroom%28__completionhandler_%29.md): Adds a room to the zone.

# removeRoom:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Removes a room from the zone.

## Declaration

```objectivec
- (void) removeRoom:(HMRoom *) room completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `room`: The room to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Assigning Rooms to a Zone

- [rooms](rooms.md): Array of rooms in the zone.
- [addRoom:completionHandler:](addroom%28__completionhandler_%29.md): Adds a room to the zone.
