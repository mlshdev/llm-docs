> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/dataproviderstate](https://developer.apple.com/documentation/arkit/dataproviderstate)

# DataProviderState

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** macOS 26.0+ · visionOS 1.0+

The possible states of a data provider.

## Declaration

```swift
enum DataProviderState
```

## Topics

### Getting the state of a data provider

- [DataProviderState.initialized](dataproviderstate/initialized.md): The data provider has been created.
- [DataProviderState.running](dataproviderstate/running.md): The data provider is running.
- [DataProviderState.stopped](dataproviderstate/stopped.md): The data provider is stopped.
- [DataProviderState.paused](dataproviderstate/paused.md): The data provider is paused.

### Comparing data provider states

- [description](dataproviderstate/description.md): A textual representation of the state.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setup

- [Setting up access to ARKit data](../visionos/setting-up-access-to-arkit-data.md): Check whether your app can use ARKit and respect people’s privacy.
- [ARKitSession](arkitsession.md): The main entry point for receiving data from ARKit.
- [DataProvider](dataprovider.md): A source of live data from ARKit.
- [Anchor](anchor.md): The identity, location, and orientation of an object in world space.
- [TrackableAnchor](trackableanchor.md): An anchor that can gain and lose its tracking state over the course of a session.
- [ARKitCoordinateSpaceProviding](arkitcoordinatespaceproviding.md): A type that provides an ARKit coordinate space with an optional correction applied.
- [ARKitCoordinateSpace](arkitcoordinatespace.md): An object which represents an ARKit coordinate space.
