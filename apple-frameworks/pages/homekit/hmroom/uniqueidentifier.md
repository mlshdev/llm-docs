> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmroom/uniqueidentifier](https://developer.apple.com/documentation/homekit/hmroom/uniqueidentifier)

# uniqueIdentifier (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The unique identifier for a room.

## Declaration

```swift
var uniqueIdentifier: UUID { get }
```

## See Also

### Identifying a room

- [name](name.md): The name of the room.
- [updateName(\_:completionHandler:)](updatename%28__completionhandler_%29.md): Updates the name of the room.

# uniqueIdentifier (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The unique identifier for a room.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * uniqueIdentifier;
```

## See Also

### Identifying a room

- [name](name.md): The name of the room.
- [updateName:completionHandler:](updatename%28__completionhandler_%29.md): Updates the name of the room.
