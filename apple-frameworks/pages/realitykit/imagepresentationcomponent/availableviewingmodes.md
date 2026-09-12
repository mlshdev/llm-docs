> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/imagepresentationcomponent/availableviewingmodes](https://developer.apple.com/documentation/realitykit/imagepresentationcomponent/availableviewingmodes)

# availableViewingModes

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The currently valid viewing modes for the image being presented.

## Declaration

```swift
var availableViewingModes: Set<ImagePresentationComponent.ViewingMode> { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> This property returns the set of modes that are *currently* available. The returned set of modes will not contain spatial 3D viewing modes if the component is presenting a `Spatial3DImage` that has not yet generated its spatial 3D representation.

## See Also

### Setting and discovering viewing modes

- [ImagePresentationComponent.ViewingMode](viewingmode-swift.struct.md): Image content’s rendering mode.
- [viewingMode](viewingmode-swift.property.md): The currently active viewing mode of the presented image.
- [desiredViewingMode](desiredviewingmode.md): The user-selected preferred content viewing mode.
- [supportedViewingModes(for:)](supportedviewingmodes%28for_%29-7za1y.md): The viewing modes supported by the provided image source.
- [supportedViewingModes(for:)](supportedviewingmodes%28for_%29-7za1y.md): The viewing modes supported by the provided image source.
