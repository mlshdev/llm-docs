> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/objecttrackingprovider](https://developer.apple.com/documentation/arkit/objecttrackingprovider)

# ObjectTrackingProvider

**Framework:** ARKit  
**Kind:** Class  
**Availability:** visionOS 2.0+

A source of real-time position of reference objects in a person’s environment.

## Declaration

```swift
final class ObjectTrackingProvider
```

<a id="overview"></a>

## Overview

Use this class to configure ARKIt to track reference objects in a person’s environment and receive a stream of updates that contains [ObjectAnchor](objectanchor.md) structures that describe them.

## Topics

### Creating an object-tracking provider

- [init(referenceObjects:trackingConfiguration:)](objecttrackingprovider/init%28referenceobjects_trackingconfiguration_%29.md): Creates an object-tracking provider.

### Checking availability

- [isSupported](objecttrackingprovider/issupported.md): A Boolean value that indicates whether a device supports the object-tracking provider.
- [requiredAuthorizations](objecttrackingprovider/requiredauthorizations.md): An array of authorization types the object-tracking provider requires.

### Configuring object-tracking

- [trackingConfiguration](objecttrackingprovider/trackingconfiguration-swift.property.md): Returns the current parameters that are being used to configure object tracking.
- [ObjectTrackingProvider.TrackingConfiguration](objecttrackingprovider/trackingconfiguration-swift.struct.md): Parameters for changing object-tracking behavior.

### Inspecting an object-tracking provider

- [state](objecttrackingprovider/state.md): The state of an object-tracking provider.
- [allAnchors](objecttrackingprovider/allanchors.md): An array of all the object anchors the object-tracking provider is tracking.
- [anchorUpdates](objecttrackingprovider/anchorupdates.md): An asynchronous sequence of anchors the framework updates.
- [ObjectTrackingProvider.Error](objecttrackingprovider/error.md): Values that represent an object-tracking error.
- [description](objecttrackingprovider/description.md): A textual representation of this object tracking provider.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProvider](dataprovider.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Object tracking

- [ObjectAnchor](objectanchor.md): A reference object ARKit is tracking.
- [Exploring object tracking with ARKit](../visionos/exploring_object_tracking_with_arkit.md): Find and track real-world objects in visionOS using reference objects you train with Create ML.
- [Implementing object tracking in your app](../visionos/implementing-object-tracking-in-your-app.md): Create engaging interactions by training models to recognize and track real-world objects in people’s surroundings.
