> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/referenceimage](https://developer.apple.com/documentation/arkit/referenceimage)

# ReferenceImage

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A 2D image the system uses as a reference to find the same image in a person’s surroundings.

## Declaration

```swift
struct ReferenceImage
```

## Topics

### Creating a reference image

- [init(cgimage:physicalSize:orientation:)](referenceimage/init%28cgimage_physicalsize_orientation_%29.md): Creates a reference image from a Core Graphics image.
- [init(pixelBuffer:physicalSize:orientation:)](referenceimage/init%28pixelbuffer_physicalsize_orientation_%29.md): Creates a reference image from a pixel buffer.
- [loadReferenceImages(inGroupNamed:bundle:)](referenceimage/loadreferenceimages%28ingroupnamed_bundle_%29.md): Creates multiple reference images based on their group name in an asset catalog.

### Inspecting a reference image

- [physicalSize](referenceimage/physicalsize.md): The size, in meters, of a reference image in the real world.
- [name](referenceimage/name.md): The name of a reference image.
- [resourceGroupName](referenceimage/resourcegroupname.md): A string value the represents the name of the resource group the framework loads an image from.
- [description](referenceimage/description.md): A textual representation of this reference image.

### Default Implementations

- [Equatable Implementations](referenceimage/equatable-implementations.md)

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Image tracking

- [Tracking and altering images](tracking-and-altering-images.md): Create images from rectangular shapes found in the user’s environment, and augment their appearance.
- [Detecting Images in an AR Experience](detecting-images-in-an-ar-experience.md): React to known 2D images in the user’s environment, and use their positions to place AR content.
- [Tracking preregistered images in 3D space](../visionos/tracking-images-in-3d-space.md): Place content based on the current position of a known image in a person’s surroundings.
- [ImageTrackingProvider](imagetrackingprovider.md): A source of live data about a 2D image’s position in a person’s surroundings.
- [ImageAnchor](imageanchor.md): A 2D image’s position in a person’s surroundings.
