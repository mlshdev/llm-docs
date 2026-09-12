> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/capabilities/supportedlayoutsoptions](https://developer.apple.com/documentation/compositorservices/layerrenderer/capabilities/supportedlayoutsoptions)

# LayerRenderer.Capabilities.SupportedLayoutsOptions

**Framework:** Compositor Services  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

Options you can use to filter the supported layouts for a layer.

## Declaration

```swift
struct SupportedLayoutsOptions
```

## Topics

### Getting the options

- [foveationEnabled](supportedlayoutsoptions/foveationenabled.md): An option to request a layout that supports foveated rendering.

### Type Properties

- [progressiveImmersionEnabled](supportedlayoutsoptions/progressiveimmersionenabled.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting the supported layouts

- [supportedLayouts(options:)](supportedlayouts%28options_%29.md): Returns an array of texture layouts that the layer supports.
