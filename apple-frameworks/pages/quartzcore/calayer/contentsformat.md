> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/contentsformat](https://developer.apple.com/documentation/quartzcore/calayer/contentsformat)

# contentsFormat (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A hint for the desired storage format of the layer contents.

## Declaration

```swift
var contentsFormat: CALayerContentsFormat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [RGBA8Uint](../calayercontentsformat/rgba8uint.md).

[UIView](../../uikit/uiview.md) and layer-backed [NSView](https://developer.apple.com/documentation/appkit/nsview) objects may change the value to a format appropriate for the current device.

## See Also

### Configuring the layer’s rendering behavior

- [isOpaque](isopaque.md): A Boolean value indicating whether the layer contains completely opaque content.
- [edgeAntialiasingMask](edgeantialiasingmask.md): A bitmask defining how the edges of the receiver are rasterized.
- [contentsAreFlipped()](contentsareflipped%28%29.md): Returns a Boolean indicating whether the layer content is implicitly flipped when rendered.
- [isGeometryFlipped](isgeometryflipped.md): A Boolean that indicates whether the geometry of the layer and its sublayers is flipped vertically.
- [drawsAsynchronously](drawsasynchronously.md): A Boolean indicating whether drawing commands are deferred and processed asynchronously in a background thread.
- [shouldRasterize](shouldrasterize.md): A Boolean that indicates whether the layer is rendered as a bitmap before compositing. Animatable
- [rasterizationScale](rasterizationscale.md): The scale at which to rasterize content, relative to the coordinate space of the layer. Animatable
- [render(in:)](render%28in_%29.md): Renders the layer and its sublayers into the specified context.

# contentsFormat (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A hint for the desired storage format of the layer contents.

## Declaration

```objectivec
@property (copy) CALayerContentsFormat contentsFormat;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [kCAContentsFormatRGBA8Uint](../calayercontentsformat/rgba8uint.md).

[UIView](../../uikit/uiview.md) and layer-backed [NSView](https://developer.apple.com/documentation/appkit/nsview) objects may change the value to a format appropriate for the current device.

## See Also

### Configuring the layer’s rendering behavior

- [opaque](isopaque.md): A Boolean value indicating whether the layer contains completely opaque content.
- [edgeAntialiasingMask](edgeantialiasingmask.md): A bitmask defining how the edges of the receiver are rasterized.
- [contentsAreFlipped](contentsareflipped%28%29.md): Returns a Boolean indicating whether the layer content is implicitly flipped when rendered.
- [geometryFlipped](isgeometryflipped.md): A Boolean that indicates whether the geometry of the layer and its sublayers is flipped vertically.
- [drawsAsynchronously](drawsasynchronously.md): A Boolean indicating whether drawing commands are deferred and processed asynchronously in a background thread.
- [shouldRasterize](shouldrasterize.md): A Boolean that indicates whether the layer is rendered as a bitmap before compositing. Animatable
- [rasterizationScale](rasterizationscale.md): The scale at which to rasterize content, relative to the coordinate space of the layer. Animatable
- [renderInContext:](render%28in_%29.md): Renders the layer and its sublayers into the specified context.
