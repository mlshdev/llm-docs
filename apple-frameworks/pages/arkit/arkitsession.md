> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arkitsession](https://developer.apple.com/documentation/arkit/arkitsession)

# ARKitSession

**Framework:** ARKit  
**Kind:** Class  
**Availability:** macOS 26.0+ · visionOS 1.0+

The main entry point for receiving data from ARKit.

## Declaration

```swift
final class ARKitSession
```

<a id="overview"></a>

## Overview

Sessions in ARKit require either implicit or explicit authorization. To explicitly ask for permission for a particular kind of data and choose when a person is prompted for that permission, call [requestAuthorization(for:)](arkitsession/requestauthorization%28for_%29.md) before [run(\_:)](arkitsession/run%28__%29.md).

The following shows a session that starts by requesting implicit authorization to use world sensing:

```swift
let planeData = PlaneDetectionProvider(alignments: [.horizontal, .vertical])

Task {
    do {
        try await self.session.run([planeData])
        // Update app based on the planeData.anchorUpdates async sequence.
    } catch {
        print("ARKitSession error:", error)
    }
}
```

Because a [PlaneDetectionProvider](planedetectionprovider.md) instance’s required authorizations include [ARKitSession.AuthorizationType.worldSensing](arkitsession/authorizationtype/worldsensing.md), the system asks someone using your app to permit world sensing before ARKit supplies any of that kind of data.

> **Note**

>  ARKit stops sessions when they’re deinitialized; keep a reference to a session instance for as long as the session needs to run.

## Topics

### Starting and stopping a session

- [init()](arkitsession/init%28%29.md): Creates a new session.
- [run(\_:)](arkitsession/run%28__%29.md): Runs a session with the data providers you supply.
- [stop()](arkitsession/stop%28%29.md): Stops all data providers running in this session.
- [ARKitSession.Error](arkitsession/error.md): An error that might occur when running data providers on an ARKit session.

### Getting authorization

- [requestAuthorization(for:)](arkitsession/requestauthorization%28for_%29.md): Requests authorization from the user to use the specified kinds of ARKit data.
- [ARKitSession.AuthorizationType](arkitsession/authorizationtype.md): The authorization types you can request from ARKit.
- [queryAuthorization(for:)](arkitsession/queryauthorization%28for_%29.md): Checks whether the current session is authorized for particular authorization types without requesting authorization.
- [ARKitSession.AuthorizationStatus](arkitsession/authorizationstatus.md): The authorization states for a type of ARKit data.

### Observing a session

- [events](arkitsession/events-swift.property.md): An asynchronous sequence of events that provide updates to the current authorization status of the session.
- [ARKitSession.Events](arkitsession/events-swift.struct.md): A sequence of events.
- [ARKitSession.Event](arkitsession/event.md): Enumeration of possible session events.
- [description](arkitsession/description.md): A textual representation of this session.

### Initializers

- [init(device:)](arkitsession/init%28device_%29.md): Create a new session connected to the specified device.

### Instance Properties

- [dataProviders](arkitsession/dataproviders.md): A list of all data providers on this session.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### visionOS

- [Setting up access to ARKit data](../visionos/setting-up-access-to-arkit-data.md): Check whether your app can use ARKit and respect people’s privacy.
- [DataProvider](dataprovider.md): A source of live data from ARKit.
- [Anchor](anchor.md): The identity, location, and orientation of an object in world space.
- [ARKit in visionOS](arkit-in-visionos.md): Create immersive augmented reality experiences.
