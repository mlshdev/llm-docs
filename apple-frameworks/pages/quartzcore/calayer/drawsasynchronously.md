> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/drawsasynchronously](https://developer.apple.com/documentation/quartzcore/calayer/drawsasynchronously)

# drawsAsynchronously (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

A Boolean indicating whether drawing commands are deferred and processed asynchronously in a background thread.

## Declaration

```swift
var drawsAsynchronously: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the graphics context used to draw the layer’s contents queues drawing commands and executes them on a background thread rather than executing them synchronously. Performing these commands asynchronously can improve performance in some apps. However, you should always measure the actual performance benefits before enabling this capability.

The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the layer’s rendering behavior

- [isOpaque](isopaque.md): A Boolean value indicating whether the layer contains completely opaque content.
- [edgeAntialiasingMask](edgeantialiasingmask.md): A bitmask defining how the edges of the receiver are rasterized.
- [contentsAreFlipped()](contentsareflipped%28%29.md): Returns a Boolean indicating whether the layer content is implicitly flipped when rendered.
- [isGeometryFlipped](isgeometryflipped.md): A Boolean that indicates whether the geometry of the layer and its sublayers is flipped vertically.
- [shouldRasterize](shouldrasterize.md): A Boolean that indicates whether the layer is rendered as a bitmap before compositing. Animatable
- [rasterizationScale](rasterizationscale.md): The scale at which to rasterize content, relative to the coordinate space of the layer. Animatable
- [contentsFormat](contentsformat.md): A hint for the desired storage format of the layer contents.
- [render(in:)](render%28in_%29.md): Renders the layer and its sublayers into the specified context.

# drawsAsynchronously (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

A Boolean indicating whether drawing commands are deferred and processed asynchronously in a background thread.

## Declaration

```objectivec
@property BOOL drawsAsynchronously;
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the graphics context used to draw the layer’s contents queues drawing commands and executes them on a background thread rather than executing them synchronously. Performing these commands asynchronously can improve performance in some apps. However, you should always measure the actual performance benefits before enabling this capability.

The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the layer’s rendering behavior

- [opaque](isopaque.md): A Boolean value indicating whether the layer contains completely opaque content.
- [edgeAntialiasingMask](edgeantialiasingmask.md): A bitmask defining how the edges of the receiver are rasterized.
- [contentsAreFlipped](contentsareflipped%28%29.md): Returns a Boolean indicating whether the layer content is implicitly flipped when rendered.
- [geometryFlipped](isgeometryflipped.md): A Boolean that indicates whether the geometry of the layer and its sublayers is flipped vertically.
- [shouldRasterize](shouldrasterize.md): A Boolean that indicates whether the layer is rendered as a bitmap before compositing. Animatable
- [rasterizationScale](rasterizationscale.md): The scale at which to rasterize content, relative to the coordinate space of the layer. Animatable
- [contentsFormat](contentsformat.md): A hint for the desired storage format of the layer contents.
- [renderInContext:](render%28in_%29.md): Renders the layer and its sublayers into the specified context.
