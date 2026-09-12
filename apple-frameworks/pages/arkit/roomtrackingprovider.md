> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/roomtrackingprovider](https://developer.apple.com/documentation/arkit/roomtrackingprovider)

# RoomTrackingProvider

**Framework:** ARKit  
**Kind:** Class  
**Availability:** visionOS 2.0+

A source of real-time information about the room that a person is currently in.

## Declaration

```swift
final class RoomTrackingProvider
```

## Topics

### Creating a room-tracking provider

- [init()](roomtrackingprovider/init%28%29.md): Creates a room-tracking provider.

### Inspecting a room-tracking provider

- [allAnchors](roomtrackingprovider/allanchors.md): An array of the room anchors the room-tracking provider is tracking.
- [anchorUpdates](roomtrackingprovider/anchorupdates.md): An asynchronous sequence of room anchor updates.
- [currentRoomAnchor](roomtrackingprovider/currentroomanchor.md): The room a person is in currently, if any.
- [description](roomtrackingprovider/description.md): A textual representation of this room tracking provider.
- [state](roomtrackingprovider/state.md): The state of a room-tracking provider.

### Type properties

- [isSupported](roomtrackingprovider/issupported.md): A Boolean values that indicates whether a device supports the room-tracking provider.
- [requiredAuthorizations](roomtrackingprovider/requiredauthorizations.md): An array of authorization types the room-tracking provider requires.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProvider](dataprovider.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Room tracking

- [RoomAnchor](roomanchor.md): The representation of a room ARKit is currently tracking.
- [SurfaceClassification](surfaceclassification.md): A value describing the classification of a surface.
- [Building local experiences with room tracking](../visionos/building-local-experiences-with-room-tracking.md): Use room tracking in visionOS to provide custom interactions with physical spaces.
