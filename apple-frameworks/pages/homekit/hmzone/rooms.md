> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmzone/rooms](https://developer.apple.com/documentation/homekit/hmzone/rooms)

# rooms (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Array of rooms in the zone.

## Declaration

```swift
var rooms: [HMRoom] { get }
```

## See Also

### Assigning Rooms to a Zone

- [addRoom(\_:completionHandler:)](addroom%28__completionhandler_%29.md): Adds a room to the zone.
- [removeRoom(\_:completionHandler:)](removeroom%28__completionhandler_%29.md): Removes a room from the zone.

# rooms (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Array of rooms in the zone.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<HMRoom *> * rooms;
```

## See Also

### Assigning Rooms to a Zone

- [addRoom:completionHandler:](addroom%28__completionhandler_%29.md): Adds a room to the zone.
- [removeRoom:completionHandler:](removeroom%28__completionhandler_%29.md): Removes a room from the zone.
