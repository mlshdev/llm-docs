> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmzone/addroom(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmzone/addroom(_:completionhandler:))

# addRoom(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Adds a room to the zone.

## Declaration

```swift
func addRoom(_ room: HMRoom, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func addRoom(_ room: HMRoom) async throws
```

## Parameters

- `room`: The room to add; must be in the same home as the zone.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Assigning Rooms to a Zone

- [rooms](rooms.md): Array of rooms in the zone.
- [removeRoom(\_:completionHandler:)](removeroom%28__completionhandler_%29.md): Removes a room from the zone.

# addRoom:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Adds a room to the zone.

## Declaration

```objectivec
- (void) addRoom:(HMRoom *) room completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `room`: The room to add; must be in the same home as the zone.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Assigning Rooms to a Zone

- [rooms](rooms.md): Array of rooms in the zone.
- [removeRoom:completionHandler:](removeroom%28__completionhandler_%29.md): Removes a room from the zone.
