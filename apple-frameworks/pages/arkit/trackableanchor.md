> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/trackableanchor](https://developer.apple.com/documentation/arkit/trackableanchor)

# TrackableAnchor

**Framework:** ARKit  
**Kind:** Protocol  
**Availability:** macOS 26.0+ · visionOS 1.0+

An anchor that can gain and lose its tracking state over the course of a session.

## Declaration

```swift
protocol TrackableAnchor : Anchor
```

## Topics

### Checking an anchor’s tracking state

- [isTracked](trackableanchor/istracked.md): A Boolean value that indicates whether ARKit is tracking an anchor.

## Relationships

### Inherits From

- [Anchor](anchor.md)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [AccessoryAnchor](accessoryanchor.md)
- [DeviceAnchor](deviceanchor.md)
- [HandAnchor](handanchor.md)
- [ImageAnchor](imageanchor.md)
- [ObjectAnchor](objectanchor.md)
- [WorldAnchor](worldanchor.md)

## See Also

### Setup

- [Setting up access to ARKit data](../visionos/setting-up-access-to-arkit-data.md): Check whether your app can use ARKit and respect people’s privacy.
- [ARKitSession](arkitsession.md): The main entry point for receiving data from ARKit.
- [DataProvider](dataprovider.md): A source of live data from ARKit.
- [DataProviderState](dataproviderstate.md): The possible states of a data provider.
- [Anchor](anchor.md): The identity, location, and orientation of an object in world space.
- [ARKitCoordinateSpaceProviding](arkitcoordinatespaceproviding.md): A type that provides an ARKit coordinate space with an optional correction applied.
- [ARKitCoordinateSpace](arkitcoordinatespace.md): An object which represents an ARKit coordinate space.
