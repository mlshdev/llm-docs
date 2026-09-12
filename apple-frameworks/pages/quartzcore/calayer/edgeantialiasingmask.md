> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/edgeantialiasingmask](https://developer.apple.com/documentation/quartzcore/calayer/edgeantialiasingmask)

# edgeAntialiasingMask (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A bitmask defining how the edges of the receiver are rasterized.

## Declaration

```swift
var edgeAntialiasingMask: CAEdgeAntialiasingMask { get set }
```

<a id="Discussion"></a>

## Discussion

This property specifies which edges of the layer are antialiased and is a combination of the constants defined in [CAEdgeAntialiasingMask](../caedgeantialiasingmask.md). You can enable or disable antialiasing for each edge (top, left, bottom, right) separately. By default antialiasing is enabled for all edges.

Typically, you would use this property to disable antialiasing for edges that abut edges of other layers, to eliminate the seams that would otherwise occur.

## See Also

### Configuring the layer’s rendering behavior

- [isOpaque](isopaque.md): A Boolean value indicating whether the layer contains completely opaque content.
- [contentsAreFlipped()](contentsareflipped%28%29.md): Returns a Boolean indicating whether the layer content is implicitly flipped when rendered.
- [isGeometryFlipped](isgeometryflipped.md): A Boolean that indicates whether the geometry of the layer and its sublayers is flipped vertically.
- [drawsAsynchronously](drawsasynchronously.md): A Boolean indicating whether drawing commands are deferred and processed asynchronously in a background thread.
- [shouldRasterize](shouldrasterize.md): A Boolean that indicates whether the layer is rendered as a bitmap before compositing. Animatable
- [rasterizationScale](rasterizationscale.md): The scale at which to rasterize content, relative to the coordinate space of the layer. Animatable
- [contentsFormat](contentsformat.md): A hint for the desired storage format of the layer contents.
- [render(in:)](render%28in_%29.md): Renders the layer and its sublayers into the specified context.

# edgeAntialiasingMask (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A bitmask defining how the edges of the receiver are rasterized.

## Declaration

```objectivec
@property CAEdgeAntialiasingMask edgeAntialiasingMask;
```

<a id="Discussion"></a>

## Discussion

This property specifies which edges of the layer are antialiased and is a combination of the constants defined in [CAEdgeAntialiasingMask](../caedgeantialiasingmask.md). You can enable or disable antialiasing for each edge (top, left, bottom, right) separately. By default antialiasing is enabled for all edges.

Typically, you would use this property to disable antialiasing for edges that abut edges of other layers, to eliminate the seams that would otherwise occur.

## See Also

### Configuring the layer’s rendering behavior

- [opaque](isopaque.md): A Boolean value indicating whether the layer contains completely opaque content.
- [contentsAreFlipped](contentsareflipped%28%29.md): Returns a Boolean indicating whether the layer content is implicitly flipped when rendered.
- [geometryFlipped](isgeometryflipped.md): A Boolean that indicates whether the geometry of the layer and its sublayers is flipped vertically.
- [drawsAsynchronously](drawsasynchronously.md): A Boolean indicating whether drawing commands are deferred and processed asynchronously in a background thread.
- [shouldRasterize](shouldrasterize.md): A Boolean that indicates whether the layer is rendered as a bitmap before compositing. Animatable
- [rasterizationScale](rasterizationscale.md): The scale at which to rasterize content, relative to the coordinate space of the layer. Animatable
- [contentsFormat](contentsformat.md): A hint for the desired storage format of the layer contents.
- [renderInContext:](render%28in_%29.md): Renders the layer and its sublayers into the specified context.
