> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/imageanchor](https://developer.apple.com/documentation/arkit/imageanchor)

# ImageAnchor

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A 2D image’s position in a person’s surroundings.

## Declaration

```swift
struct ImageAnchor
```

## Topics

### Getting image information

- [originFromAnchorTransform](imageanchor/originfromanchortransform.md): The location and orientation of the image in world space.
- [referenceImage](imageanchor/referenceimage.md): The reference image that this image anchor tracks.
- [estimatedScaleFactor](imageanchor/estimatedscalefactor.md): The estimated scale factor between the tracked image’s physical size and the reference image’s size.
- [isTracked](imageanchor/istracked.md): A Boolean value that indicates whether ARKit is currently tracking this image.
- [description](imageanchor/description.md): A textual representation of this anchor.
- [id](imageanchor/id.md): The unique identifier of this anchor.

### Default Implementations

- [ARKitCoordinateSpaceProviding Implementations](imageanchor/arkitcoordinatespaceproviding-implementations.md)
- [Equatable Implementations](imageanchor/equatable-implementations.md)

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

### Image tracking

- [Tracking and altering images](tracking-and-altering-images.md): Create images from rectangular shapes found in the user’s environment, and augment their appearance.
- [Detecting Images in an AR Experience](detecting-images-in-an-ar-experience.md): React to known 2D images in the user’s environment, and use their positions to place AR content.
- [Tracking preregistered images in 3D space](../visionos/tracking-images-in-3d-space.md): Place content based on the current position of a known image in a person’s surroundings.
- [ImageTrackingProvider](imagetrackingprovider.md): A source of live data about a 2D image’s position in a person’s surroundings.
- [ReferenceImage](referenceimage.md): A 2D image the system uses as a reference to find the same image in a person’s surroundings.
