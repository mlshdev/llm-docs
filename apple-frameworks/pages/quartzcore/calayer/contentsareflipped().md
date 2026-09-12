> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/contentsareflipped()](https://developer.apple.com/documentation/quartzcore/calayer/contentsareflipped())

# contentsAreFlipped() (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean indicating whether the layer content is implicitly flipped when rendered.

## Declaration

```swift
func contentsAreFlipped() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the layer contents are implicitly flipped when rendered or [false](https://developer.apple.com/documentation/swift/false) if they are not. This method returns [false](https://developer.apple.com/documentation/swift/false) by default.

<a id="Discussion"></a>

## Discussion

This method provides information about whether the layer’s contents are being flipped during drawing. You should not attempt to override this method and return a different value.

If the layer needs to flip its content, it returns [true](https://developer.apple.com/documentation/swift/true) from this method and applies a y-flip transform to the graphics context before passing it to the layer’s [draw(in:)](draw%28in_%29.md) method. Similarly, the layer converts any rectangles passed to its [setNeedsDisplay(\_:)](setneedsdisplay%28__%29.md) into the flipped coordinate space.

## See Also

### Configuring the layer’s rendering behavior

- [isOpaque](isopaque.md): A Boolean value indicating whether the layer contains completely opaque content.
- [edgeAntialiasingMask](edgeantialiasingmask.md): A bitmask defining how the edges of the receiver are rasterized.
- [isGeometryFlipped](isgeometryflipped.md): A Boolean that indicates whether the geometry of the layer and its sublayers is flipped vertically.
- [drawsAsynchronously](drawsasynchronously.md): A Boolean indicating whether drawing commands are deferred and processed asynchronously in a background thread.
- [shouldRasterize](shouldrasterize.md): A Boolean that indicates whether the layer is rendered as a bitmap before compositing. Animatable
- [rasterizationScale](rasterizationscale.md): The scale at which to rasterize content, relative to the coordinate space of the layer. Animatable
- [contentsFormat](contentsformat.md): A hint for the desired storage format of the layer contents.
- [render(in:)](render%28in_%29.md): Renders the layer and its sublayers into the specified context.

# contentsAreFlipped (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean indicating whether the layer content is implicitly flipped when rendered.

## Declaration

```objectivec
- (BOOL) contentsAreFlipped;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the layer contents are implicitly flipped when rendered or [false](https://developer.apple.com/documentation/swift/false) if they are not. This method returns [false](https://developer.apple.com/documentation/swift/false) by default.

<a id="Discussion"></a>

## Discussion

This method provides information about whether the layer’s contents are being flipped during drawing. You should not attempt to override this method and return a different value.

If the layer needs to flip its content, it returns [true](https://developer.apple.com/documentation/swift/true) from this method and applies a y-flip transform to the graphics context before passing it to the layer’s [drawInContext:](draw%28in_%29.md) method. Similarly, the layer converts any rectangles passed to its [setNeedsDisplayInRect:](setneedsdisplay%28__%29.md) into the flipped coordinate space.

## See Also

### Configuring the layer’s rendering behavior

- [opaque](isopaque.md): A Boolean value indicating whether the layer contains completely opaque content.
- [edgeAntialiasingMask](edgeantialiasingmask.md): A bitmask defining how the edges of the receiver are rasterized.
- [geometryFlipped](isgeometryflipped.md): A Boolean that indicates whether the geometry of the layer and its sublayers is flipped vertically.
- [drawsAsynchronously](drawsasynchronously.md): A Boolean indicating whether drawing commands are deferred and processed asynchronously in a background thread.
- [shouldRasterize](shouldrasterize.md): A Boolean that indicates whether the layer is rendered as a bitmap before compositing. Animatable
- [rasterizationScale](rasterizationscale.md): The scale at which to rasterize content, relative to the coordinate space of the layer. Animatable
- [contentsFormat](contentsformat.md): A hint for the desired storage format of the layer contents.
- [renderInContext:](render%28in_%29.md): Renders the layer and its sublayers into the specified context.
