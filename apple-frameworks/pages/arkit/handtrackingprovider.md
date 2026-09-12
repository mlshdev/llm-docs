> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/handtrackingprovider](https://developer.apple.com/documentation/arkit/handtrackingprovider)

# HandTrackingProvider

**Framework:** ARKit  
**Kind:** Class  
**Availability:** visionOS 1.0+

A source of live data about the position of a person’s hands and hand joints.

## Declaration

```swift
final class HandTrackingProvider
```

## Topics

### Creating a hand-tracking provider

- [init()](handtrackingprovider/init%28%29.md): Creates a hand-tracking provider.
- [isSupported](handtrackingprovider/issupported.md): A Boolean value that indicates whether the current runtime environment supports hand-tracking providers.
- [requiredAuthorizations](handtrackingprovider/requiredauthorizations.md): The types of authorizations necessary for tracking hands.

### Observing hand anchor data

- [anchorUpdates](handtrackingprovider/anchorupdates.md): A sequence of updates for all hands that a provider tracks.
- [latestAnchors](handtrackingprovider/latestanchors.md): The most recent hand anchors for each hand.

### Inspecting a hand-tracking provider

- [state](handtrackingprovider/state.md): The current status of data coming from a provider.
- [description](handtrackingprovider/description.md): A textual representation of this hand tracking provider.
- [handAnchors(at:)](handtrackingprovider/handanchors%28at_%29.md): Queries for hand anchors at the provided target timestamp.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProvider](dataprovider.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Hand tracking

- [Happy Beam](../visionos/happybeam.md): Leverage a Full Space to create a fun game using ARKit.
- [Creating a 3D painting space](../visionos/creating-a-painting-space-in-visionos.md): Implement a painting canvas entity, and update its mesh to represent a stroke.
- [Tracking and visualizing hand movement](../visionos/tracking-and-visualizing-hand-movement.md): Use hand-tracking anchors to display a visual representation of hand transforms in visionOS.
- [HandAnchor](handanchor.md): A hand’s position in a person’s surroundings.
- [HandSkeleton](handskeleton.md): A collection of joints in a hand.
