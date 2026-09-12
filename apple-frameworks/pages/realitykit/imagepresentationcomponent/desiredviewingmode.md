> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/imagepresentationcomponent/desiredviewingmode](https://developer.apple.com/documentation/realitykit/imagepresentationcomponent/desiredviewingmode)

# desiredViewingMode

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The user-selected preferred content viewing mode.

## Declaration

```swift
var desiredViewingMode: ImagePresentationComponent.ViewingMode
```

<a id="discussion"></a>

## Discussion

The `viewingMode` property will update to this value if it is valid for this component’s content, otherwise a suitable fallback will be used.

## See Also

### Setting and discovering viewing modes

- [ImagePresentationComponent.ViewingMode](viewingmode-swift.struct.md): Image content’s rendering mode.
- [viewingMode](viewingmode-swift.property.md): The currently active viewing mode of the presented image.
- [availableViewingModes](availableviewingmodes.md): The currently valid viewing modes for the image being presented.
- [supportedViewingModes(for:)](supportedviewingmodes%28for_%29-7za1y.md): The viewing modes supported by the provided image source.
- [supportedViewingModes(for:)](supportedviewingmodes%28for_%29-7za1y.md): The viewing modes supported by the provided image source.
