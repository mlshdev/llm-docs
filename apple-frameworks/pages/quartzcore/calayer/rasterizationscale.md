> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/rasterizationscale](https://developer.apple.com/documentation/quartzcore/calayer/rasterizationscale)

# rasterizationScale (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The scale at which to rasterize content, relative to the coordinate space of the layer. Animatable

## Declaration

```swift
var rasterizationScale: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

When the value in the [shouldRasterize](shouldrasterize.md) property is [true](https://developer.apple.com/documentation/swift/true), the layer uses this property to determine whether to scale the rasterized content (and by how much). The default value of this property is `1.0`, which indicates that the layer should be rasterized at its current size. Larger values magnify the content and smaller values shrink it.

## See Also

### Configuring the layer’s rendering behavior

- [isOpaque](isopaque.md): A Boolean value indicating whether the layer contains completely opaque content.
- [edgeAntialiasingMask](edgeantialiasingmask.md): A bitmask defining how the edges of the receiver are rasterized.
- [contentsAreFlipped()](contentsareflipped%28%29.md): Returns a Boolean indicating whether the layer content is implicitly flipped when rendered.
- [isGeometryFlipped](isgeometryflipped.md): A Boolean that indicates whether the geometry of the layer and its sublayers is flipped vertically.
- [drawsAsynchronously](drawsasynchronously.md): A Boolean indicating whether drawing commands are deferred and processed asynchronously in a background thread.
- [shouldRasterize](shouldrasterize.md): A Boolean that indicates whether the layer is rendered as a bitmap before compositing. Animatable
- [contentsFormat](contentsformat.md): A hint for the desired storage format of the layer contents.
- [render(in:)](render%28in_%29.md): Renders the layer and its sublayers into the specified context.

# rasterizationScale (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The scale at which to rasterize content, relative to the coordinate space of the layer. Animatable

## Declaration

```objectivec
@property CGFloat rasterizationScale;
```

<a id="Discussion"></a>

## Discussion

When the value in the [shouldRasterize](shouldrasterize.md) property is [true](https://developer.apple.com/documentation/swift/true), the layer uses this property to determine whether to scale the rasterized content (and by how much). The default value of this property is `1.0`, which indicates that the layer should be rasterized at its current size. Larger values magnify the content and smaller values shrink it.

## See Also

### Configuring the layer’s rendering behavior

- [opaque](isopaque.md): A Boolean value indicating whether the layer contains completely opaque content.
- [edgeAntialiasingMask](edgeantialiasingmask.md): A bitmask defining how the edges of the receiver are rasterized.
- [contentsAreFlipped](contentsareflipped%28%29.md): Returns a Boolean indicating whether the layer content is implicitly flipped when rendered.
- [geometryFlipped](isgeometryflipped.md): A Boolean that indicates whether the geometry of the layer and its sublayers is flipped vertically.
- [drawsAsynchronously](drawsasynchronously.md): A Boolean indicating whether drawing commands are deferred and processed asynchronously in a background thread.
- [shouldRasterize](shouldrasterize.md): A Boolean that indicates whether the layer is rendered as a bitmap before compositing. Animatable
- [contentsFormat](contentsformat.md): A hint for the desired storage format of the layer contents.
- [renderInContext:](render%28in_%29.md): Renders the layer and its sublayers into the specified context.
