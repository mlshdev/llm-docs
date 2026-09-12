> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/isgeometryflipped](https://developer.apple.com/documentation/quartzcore/calayer/isgeometryflipped)

# isGeometryFlipped (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A Boolean that indicates whether the geometry of the layer and its sublayers is flipped vertically.

## Declaration

```swift
var isGeometryFlipped: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the layer is providing the backing for a layer-backed view, the view is responsible for managing the value in this property. For standalone layers, this property controls whether geometry values for the layer are interpreted using the standard or flipped coordinate system. The value of this property does not affect the rendering of the layer’s content.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the layer’s rendering behavior

- [isOpaque](isopaque.md): A Boolean value indicating whether the layer contains completely opaque content.
- [edgeAntialiasingMask](edgeantialiasingmask.md): A bitmask defining how the edges of the receiver are rasterized.
- [contentsAreFlipped()](contentsareflipped%28%29.md): Returns a Boolean indicating whether the layer content is implicitly flipped when rendered.
- [drawsAsynchronously](drawsasynchronously.md): A Boolean indicating whether drawing commands are deferred and processed asynchronously in a background thread.
- [shouldRasterize](shouldrasterize.md): A Boolean that indicates whether the layer is rendered as a bitmap before compositing. Animatable
- [rasterizationScale](rasterizationscale.md): The scale at which to rasterize content, relative to the coordinate space of the layer. Animatable
- [contentsFormat](contentsformat.md): A hint for the desired storage format of the layer contents.
- [render(in:)](render%28in_%29.md): Renders the layer and its sublayers into the specified context.

# geometryFlipped (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A Boolean that indicates whether the geometry of the layer and its sublayers is flipped vertically.

## Declaration

```objectivec
@property (getter=isGeometryFlipped) BOOL geometryFlipped;
```

<a id="Discussion"></a>

## Discussion

If the layer is providing the backing for a layer-backed view, the view is responsible for managing the value in this property. For standalone layers, this property controls whether geometry values for the layer are interpreted using the standard or flipped coordinate system. The value of this property does not affect the rendering of the layer’s content.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the layer’s rendering behavior

- [opaque](isopaque.md): A Boolean value indicating whether the layer contains completely opaque content.
- [edgeAntialiasingMask](edgeantialiasingmask.md): A bitmask defining how the edges of the receiver are rasterized.
- [contentsAreFlipped](contentsareflipped%28%29.md): Returns a Boolean indicating whether the layer content is implicitly flipped when rendered.
- [drawsAsynchronously](drawsasynchronously.md): A Boolean indicating whether drawing commands are deferred and processed asynchronously in a background thread.
- [shouldRasterize](shouldrasterize.md): A Boolean that indicates whether the layer is rendered as a bitmap before compositing. Animatable
- [rasterizationScale](rasterizationscale.md): The scale at which to rasterize content, relative to the coordinate space of the layer. Animatable
- [contentsFormat](contentsformat.md): A hint for the desired storage format of the layer contents.
- [renderInContext:](render%28in_%29.md): Renders the layer and its sublayers into the specified context.
