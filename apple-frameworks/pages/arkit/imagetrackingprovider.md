> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/imagetrackingprovider](https://developer.apple.com/documentation/arkit/imagetrackingprovider)

# ImageTrackingProvider

**Framework:** ARKit  
**Kind:** Class  
**Availability:** visionOS 1.0+

A source of live data about a 2D image’s position in a person’s surroundings.

## Declaration

```swift
final class ImageTrackingProvider
```

## Topics

### Creating an image-tracking provider

- [init(referenceImages:)](imagetrackingprovider/init%28referenceimages_%29.md): Creates an image-tracking provider that tracks the reference images you supply.
- [isSupported](imagetrackingprovider/issupported.md): A Boolean value that indicates whether the current runtime environment supports image-tracking providers.
- [requiredAuthorizations](imagetrackingprovider/requiredauthorizations.md): The types of authorizations necessary for tracking images.

### Tracking images

- [anchorUpdates](imagetrackingprovider/anchorupdates.md): A sequence of updates that provide information about images a provider tracks.

### Inspecting an image-tracking provider

- [state](imagetrackingprovider/state.md): The current status of data coming from a provider.
- [description](imagetrackingprovider/description.md): A textual representation of this image tracking provider.
- [allAnchors](imagetrackingprovider/allanchors.md): An array of all the image anchors the provider is tracking.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProvider](dataprovider.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Image tracking

- [Tracking and altering images](tracking-and-altering-images.md): Create images from rectangular shapes found in the user’s environment, and augment their appearance.
- [Detecting Images in an AR Experience](detecting-images-in-an-ar-experience.md): React to known 2D images in the user’s environment, and use their positions to place AR content.
- [Tracking preregistered images in 3D space](../visionos/tracking-images-in-3d-space.md): Place content based on the current position of a known image in a person’s surroundings.
- [ImageAnchor](imageanchor.md): A 2D image’s position in a person’s surroundings.
- [ReferenceImage](referenceimage.md): A 2D image the system uses as a reference to find the same image in a person’s surroundings.
