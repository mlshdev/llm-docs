> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/worldtrackingprovider](https://developer.apple.com/documentation/arkit/worldtrackingprovider)

# WorldTrackingProvider

**Framework:** ARKit  
**Kind:** Class  
**Availability:** macOS 26.0+ · visionOS 1.0+

A source of live data about the device pose and anchors in a person’s surroundings.

## Declaration

```swift
final class WorldTrackingProvider
```

## Topics

### Tracking objects

- [init()](worldtrackingprovider/init%28%29.md): Creates a world-tracking provider.
- [anchorUpdates](worldtrackingprovider/anchorupdates.md): A sequence of updates to anchors a provider tracks.
- [requiredAuthorizations](worldtrackingprovider/requiredauthorizations.md): The types of authorizations necessary for tracking world anchors.
- [isSupported](worldtrackingprovider/issupported.md): A Boolean value that indicates whether the current runtime environment supports world-tracking providers.
- [allAnchors](worldtrackingprovider/allanchors.md): An array of all known world anchors from the world-tracking provider.
- [addAnchor(\_:)](worldtrackingprovider/addanchor%28__%29.md): Adds a world anchor you supply to the set of currently tracked anchors.
- [WorldTrackingProvider.Error](worldtrackingprovider/error.md): An error that can occur during a world-tracking session.

### Stopping object tracking

- [removeAnchor(\_:)](worldtrackingprovider/removeanchor%28__%29.md): Removes a world anchor from a world-tracking provider.
- [removeAnchor(forID:)](worldtrackingprovider/removeanchor%28forid_%29.md): Removes a world anchor from a world-tracking provider based on its ID.

### Predicting device pose

- [queryDeviceAnchor(atTimestamp:)](worldtrackingprovider/querydeviceanchor%28attimestamp_%29.md): The predicted pose of the current device at a given time.

### Inspecting a world-tracking provider

- [state](worldtrackingprovider/state.md): The current status of data coming from a provider.
- [description](worldtrackingprovider/description.md): A textual description of a world-tracking provider.

### Instance Properties

- [worldAnchorSharingAvailability](worldtrackingprovider/worldanchorsharingavailability-swift.property.md): A sequence of world anchor sharing availability changes.

### Instance Methods

- [removeAllAnchors()](worldtrackingprovider/removeallanchors%28%29.md): Removes all known world anchors from world tracking.

### Enumerations

- [WorldTrackingProvider.WorldAnchorSharingAvailability](worldtrackingprovider/worldanchorsharingavailability-swift.enum.md): Enumeration indicating the availability of world anchor sharing.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProvider](dataprovider.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### World tracking

- [Tracking specific points in world space](../visionos/tracking-points-in-world-space.md): Retrieve the position and orientation of anchors your app stores in ARKit.
- [Placing entities using head and device transform](../visionos/placing-entities-using-head-and-device-transform.md): Query and react to changes in the position and rotation of Apple Vision Pro.
- [WorldAnchor](worldanchor.md): A fixed location in a person’s surroundings.
- [DeviceAnchor](deviceanchor.md): The position and orientation of Apple Vision Pro.
