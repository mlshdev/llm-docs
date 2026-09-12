> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/imagepresentationcomponent/supportedviewingmodes(for:)](https://developer.apple.com/documentation/realitykit/imagepresentationcomponent/supportedviewingmodes(for:))

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
