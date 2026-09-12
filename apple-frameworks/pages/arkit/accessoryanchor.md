> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/accessoryanchor](https://developer.apple.com/documentation/arkit/accessoryanchor)

# AccessoryAnchor

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

Represents a tracked accessory.

## Declaration

```swift
struct AccessoryAnchor
```

## Topics

### Operators

- [==(\_:\_:)](accessoryanchor/==%28____%29.md): Returns a Boolean value indicating whether two accessory anchors are equal.

### Instance Properties

- [accessory](accessoryanchor/accessory.md): Accessory tracked by this anchor.
- [angularVelocity](accessoryanchor/angularvelocity.md): Angular velocity of the accessory in the local coordinate system \[rad/s\].
- [description](accessoryanchor/description.md): A textual representation of this anchor.
- [heldChirality](accessoryanchor/heldchirality.md): Which hand the accessory is currently held in. Returns nil if the accessory is not held.
- [id](accessoryanchor/id.md): The unique identifier of this anchor.
- [isTracked](accessoryanchor/istracked.md): Whether this anchor is currently tracked or not.
- [originFromAnchorTransform](accessoryanchor/originfromanchortransform.md): The transform from the accessory anchor to the origin coordinate system.
- [trackingState](accessoryanchor/trackingstate-swift.property.md): Tracking state of this anchor.
- [velocity](accessoryanchor/velocity.md): Velocity of the accessory in the local coordinate system \[m/s\].

### Instance Methods

- [coordinateSpace(correction:)](accessoryanchor/coordinatespace%28correction_%29.md): The anchor’s coordinate space.
- [coordinateSpace(for:correction:)](accessoryanchor/coordinatespace%28for_correction_%29.md): The coordinate space of a location on this accessory.

### Enumerations

- [AccessoryAnchor.TrackingState](accessoryanchor/trackingstate-swift.enum.md): Tracking state of accessory anchors.

## Relationships

### Conforms To

- [ARKitCoordinateSpaceProviding](arkitcoordinatespaceproviding.md)
- [Anchor](anchor.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TrackableAnchor](trackableanchor.md)

## See Also

### Accessory tracking

- [Preparing spatial accessories for tracking in your visionOS app](preparing-spatial-accessories-for-tracking-in-your-visionos-app.md): Prepare a spatial accessory for tracking by training a reference accessory file and integrating it into your visionOS app.
- [Working with generic spatial accessories](../visionos/working-with-generic-spatial-accessories.md): Let people place digital replicas of a generic spatial accessory by tracking the accessory with ARKit.
- [AccessoryTrackingProvider](accessorytrackingprovider.md): Provides the real time position of accessories in the user’s environment.
- [Accessory](accessory.md): Represents an accessory to be tracked.
- [Tracking accessories in volumetric windows](tracking-accessories-in-volumetric-windows.md): Translate the position and velocity of tracked handheld accessories to throw virtual balls at a stack of cans.
- [Tracking a handheld accessory as a virtual sculpting tool](tracking-a-handheld-accessory-as-a-virtual-sculpting-tool.md): Use a tracked accessory with Apple Vision Pro to create a virtual sculpture.
