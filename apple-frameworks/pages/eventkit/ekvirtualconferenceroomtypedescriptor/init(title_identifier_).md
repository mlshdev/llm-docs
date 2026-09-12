> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekvirtualconferenceroomtypedescriptor/init(title:identifier:)](https://developer.apple.com/documentation/eventkit/ekvirtualconferenceroomtypedescriptor/init(title:identifier:))

# init(title:identifier:) (Swift)

**Framework:** EventKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an object that describes a location where a virtual conference takes place.

## Declaration

```swift
init(title: String, identifier: EKVirtualConferenceRoomTypeIdentifier)
```

## Parameters

- `title`: The user-visible name of a room where virtual conferences take place, such as Personal Room or Team Room.
- `identifier`: A unique string you choose that identifies the room.

<a id="return-value"></a>

## Return Value

An object that describes a location where a virtual conference takes place.

# initWithTitle:identifier: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an object that describes a location where a virtual conference takes place.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title identifier:(EKVirtualConferenceRoomTypeIdentifier) identifier;
```

## Parameters

- `title`: The user-visible name of a room where virtual conferences take place, such as Personal Room or Team Room.
- `identifier`: A unique string you choose that identifies the room.

<a id="return-value"></a>

## Return Value

An object that describes a location where a virtual conference takes place.
