> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/imagepresentationcomponent/supportedviewingmodes(for:)-7za1y](https://developer.apple.com/documentation/realitykit/imagepresentationcomponent/supportedviewingmodes(for:)-7za1y)

# supportedViewingModes(for:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** visionOS 26.0+

The viewing modes supported by the provided image source.

## Declaration

```swift
static func supportedViewingModes(for imageSource: CGImageSource) -> Set<ImagePresentationComponent.ViewingMode>
```

<a id="discussion"></a>

## Discussion

> **Note**

> This method returns the viewing modes that will be supported if you initialize an `ImagePresentationComponent` with this image source directly via `init(imageSource: CGImageSource)`.

The returned set of viewing modes will never include the `.spatial3D` or `.spatial3DImmersive` viewing modes, which are only supported when initializing an `ImagePresentationComponent` with a `Spatial3DImage`.

## See Also

### Setting and discovering viewing modes

- [ImagePresentationComponent.ViewingMode](viewingmode-swift.struct.md): Image content’s rendering mode.
- [viewingMode](viewingmode-swift.property.md): The currently active viewing mode of the presented image.
- [desiredViewingMode](desiredviewingmode.md): The user-selected preferred content viewing mode.
- [availableViewingModes](availableviewingmodes.md): The currently valid viewing modes for the image being presented.
