> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraphmaterial/program-swift.struct/descriptor-swift.struct/lightingmodel](https://developer.apple.com/documentation/realitykit/shadergraphmaterial/program-swift.struct/descriptor-swift.struct/lightingmodel)

# lightingModel

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The lighting model to use when rendering this material.

## Declaration

```swift
var lightingModel: LightingModel
```

<a id="discussion"></a>

## Discussion

Must match the type of the surface output node in [shaderGraph](shadergraph.md).

## See Also

### Configuring rendering

- [blendMode](blendmode.md): How materials using this program blend with content behind them.
- [isColorDitheringEnabled](iscolorditheringenabled.md): Whether to dither color values before writing to the frame buffer.
