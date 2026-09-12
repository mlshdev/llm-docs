> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/layout](https://developer.apple.com/documentation/compositorservices/layerrenderer/layout)

# LayerRenderer.Layout (Swift)

**Framework:** Compositor Services  
**Kind:** Enumeration  
**Availability:** macOS 26.0+ · visionOS 1.0+

Constants that specify the organization of the textures you use for drawing.

## Declaration

```swift
enum Layout
```

## Topics

### Getting the texture layouts

- [LayerRenderer.Layout.dedicated](layout/dedicated.md): A layout that assigns a separate texture to each rendered view.
- [LayerRenderer.Layout.shared](layout/shared.md): A layout that uses a single texture to store the content for all rendered views.
- [LayerRenderer.Layout.layered](layout/layered.md): A layout that specifies each view’s content as a slice of a single texture.

### Initializers

- [init(rawValue:)](layout/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the texture layout

- [layout](configuration-swift.struct/layout.md): The layout being used by the layer.

# cp_layer_renderer_layout (Objective-C)

**Framework:** Compositor Services  
**Kind:** Enumeration  
**Availability:** macOS 26.0+ · visionOS 1.0+

Constants that specify the organization of the textures you use for drawing.

## Declaration

```objectivec
enum cp_layer_renderer_layout : uint32_t;
```

## Topics

### Getting the texture layouts

- [cp_layer_renderer_layout_dedicated](layout/dedicated.md): A layout that assigns a separate texture to each rendered view.
- [cp_layer_renderer_layout_shared](layout/shared.md): A layout that uses a single texture to store the content for all rendered views.
- [cp_layer_renderer_layout_layered](layout/layered.md): A layout that specifies each view’s content as a slice of a single texture.
