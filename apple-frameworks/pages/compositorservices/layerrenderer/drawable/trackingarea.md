> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/trackingarea](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/trackingarea)

# LayerRenderer.Drawable.TrackingArea

**Framework:** Compositor Services  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
struct TrackingArea
```

## Topics

### Structures

- [LayerRenderer.Drawable.TrackingArea.HoverEffect](trackingarea/hovereffect.md): Hover effect that will be automatically rendered by CompositorServices, when the area is looked at.
- [LayerRenderer.Drawable.TrackingArea.Identifier](trackingarea/identifier-swift.struct.md): An identifier for the tracking area.
- [LayerRenderer.Drawable.TrackingArea.RenderValue](trackingarea/rendervalue-swift.struct.md): A value used when rendering a tracking area.

### Initializers

- [init()](trackingarea/init%28%29.md)

### Instance Properties

- [identifier](trackingarea/identifier-swift.property.md): Returns the identifier for the tracking area.
- [renderValue](trackingarea/rendervalue-swift.property.md): Returns the render value for the tracking area.

### Instance Methods

- [addHoverEffect(\_:)](trackingarea/addhovereffect%28__%29.md): Add an hover effect for this tracking area. No hover effect will be rendered if this isn’t called.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
