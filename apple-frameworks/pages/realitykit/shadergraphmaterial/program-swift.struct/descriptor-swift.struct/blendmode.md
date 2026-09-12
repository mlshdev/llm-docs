> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraphmaterial/program-swift.struct/descriptor-swift.struct/blendmode](https://developer.apple.com/documentation/realitykit/shadergraphmaterial/program-swift.struct/descriptor-swift.struct/blendmode)

# blendMode

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

How materials using this program blend with content behind them.

## Declaration

```swift
var blendMode: MaterialParameterTypes.BlendMode?
```

<a id="discussion"></a>

## Discussion

When `nil`, the material renders opaque.

## See Also

### Configuring rendering

- [lightingModel](lightingmodel.md): The lighting model to use when rendering this material.
- [isColorDitheringEnabled](iscolorditheringenabled.md): Whether to dither color values before writing to the frame buffer.
