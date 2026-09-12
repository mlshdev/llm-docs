> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/objectanchor](https://developer.apple.com/documentation/arkit/objectanchor)

# ObjectAnchor

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A reference object ARKit is tracking.

## Declaration

```swift
struct ObjectAnchor
```

<a id="overview"></a>

## Overview

You use object anchors to learn about the position and orientation of a real-world object.

## Topics

### Inspecting an object anchor

- [boundingBox](objectanchor/boundingbox.md): The bounding box of an anchor.
- [ObjectAnchor.AxisAlignedBoundingBox](objectanchor/axisalignedboundingbox.md): Values that describe an axis-aligned bounding box.
- [description](objectanchor/description.md): A textual representation of this anchor.
- [isTracked](objectanchor/istracked.md): A Boolean value that indicates whether the framework is currently tracking an object anchor.
- [originFromAnchorTransform](objectanchor/originfromanchortransform.md): The transform from the object anchor to the origin coordinate system.
- [referenceObject](objectanchor/referenceobject.md): The reference object that an anchor corresponds to.
- [inputFile](referenceobject/inputfile.md): The input file the framework uses for loading a reference object.
- [usdzFile](referenceobject/usdzfile.md): The trained USDZ file, if the reference object includes one.
- [ReferenceObject](referenceobject.md): An object the framework can track.

### Inspecting and comparing anchors

- [id](objectanchor/id-swift.property.md): The unique identifier of this anchor.
- [ObjectAnchor.ID](objectanchor/id-swift.typealias.md): A type representing the stable identity of the entity associated with an instance.

### Operators

- [==(\_:\_:)](objectanchor/==%28____%29.md): Returns a Boolean value indicating whether two object anchors are equal.

### Default Implementations

- [ARKitCoordinateSpaceProviding Implementations](objectanchor/arkitcoordinatespaceproviding-implementations.md)

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

### Object tracking

- [ObjectTrackingProvider](objecttrackingprovider.md): A source of real-time position of reference objects in a person’s environment.
- [Exploring object tracking with ARKit](../visionos/exploring_object_tracking_with_arkit.md): Find and track real-world objects in visionOS using reference objects you train with Create ML.
- [Implementing object tracking in your app](../visionos/implementing-object-tracking-in-your-app.md): Create engaging interactions by training models to recognize and track real-world objects in people’s surroundings.
