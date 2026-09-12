> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/sharedcoordinatespaceprovider](https://developer.apple.com/documentation/arkit/sharedcoordinatespaceprovider)

# SharedCoordinateSpaceProvider

**Framework:** ARKit  
**Kind:** Class  
**Availability:** visionOS 26.0+

Provides ability to establish a shared coordinate space among multiple participants.

## Declaration

```swift
final class SharedCoordinateSpaceProvider
```

<a id="overview"></a>

## Overview

You may access the shared coordinate space outside the context of a FaceTime call with the  [Shared Coordinate Space access](../bundleresources/entitlements/com.apple.developer.arkit.shared-coordinate-space.allow.md) entitlement.

## Topics

### Structures

- [SharedCoordinateSpaceProvider.CoordinateSpaceData](sharedcoordinatespaceprovider/coordinatespacedata.md): A coordinate space data object.

### Initializers

- [init()](sharedcoordinatespaceprovider/init%28%29.md): Create a shared coordinate space provider.

### Instance Properties

- [description](sharedcoordinatespaceprovider/description.md): A textual representation of this SharedCoordinateSpaceProvider.
- [eventUpdates](sharedcoordinatespaceprovider/eventupdates.md): A sequence of events that have occurred.
- [isSharingEnabled](sharedcoordinatespaceprovider/issharingenabled.md): Returns true if coordinate space sharing is enabled, false otherwise.
- [nextCoordinateSpaceData](sharedcoordinatespaceprovider/nextcoordinatespacedata.md): Get the next coordinate space data to be broadcast to all participants.
- [participantIdentifier](sharedcoordinatespaceprovider/participantidentifier.md): Get the identifier of the local participant.
- [state](sharedcoordinatespaceprovider/state.md): The state of this shared coordinate space provider.

### Instance Methods

- [push(data:)](sharedcoordinatespaceprovider/push%28data_%29.md): Push data to the shared coordinate space provider.

### Type Properties

- [isSupported](sharedcoordinatespaceprovider/issupported.md): Determines whether this device supports the shared coordinate space provider.
- [requiredAuthorizations](sharedcoordinatespaceprovider/requiredauthorizations.md): The authorization type(s) required by the shared coordinate space provider.

### Enumerations

- [SharedCoordinateSpaceProvider.Event](sharedcoordinatespaceprovider/event.md): Events that can occur in a shared coordinate space.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProvider](dataprovider.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
