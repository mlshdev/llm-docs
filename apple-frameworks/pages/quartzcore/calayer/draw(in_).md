> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/draw(in:)](https://developer.apple.com/documentation/quartzcore/calayer/draw(in:))

# draw(in:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Draws the layer’s content using the specified graphics context.

## Declaration

```swift
func draw(in ctx: CGContext)
```

## Parameters

- `ctx`: The graphics context in which to draw the content. The context may be clipped to protect valid layer content. Subclasses that wish to find the actual region to draw can call [boundingBoxOfClipPath](../../coregraphics/cgcontext/boundingboxofclippath.md).

<a id="Discussion"></a>

## Discussion

The default implementation of this method does not do any drawing itself. If the layer’s delegate implements the  [draw(\_:in:)](../calayerdelegate/draw%28__in_%29.md) method, that method is called to do the actual drawing.

Subclasses can override this method and use it to draw the layer’s content. When drawing, all coordinates should be specified in points in the logical coordinate space.

## See Also

### Providing the layer’s content

- [contents](contents.md): An object that provides the contents of the layer. Animatable.
- [contentsRect](contentsrect.md): The rectangle, in the unit coordinate space, that defines the portion of the layer’s contents that should be used. Animatable.
- [contentsCenter](contentscenter.md): The rectangle that defines how the layer contents are scaled if the layer’s contents are resized. Animatable.
- [display()](display%28%29.md): Reloads the content of this layer.

# drawInContext: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Draws the layer’s content using the specified graphics context.

## Declaration

```objectivec
- (void) drawInContext:(CGContextRef) ctx;
```

## Parameters

- `ctx`: The graphics context in which to draw the content. The context may be clipped to protect valid layer content. Subclasses that wish to find the actual region to draw can call [CGContextGetClipBoundingBox](../../coregraphics/cgcontext/boundingboxofclippath.md).

<a id="Discussion"></a>

## Discussion

The default implementation of this method does not do any drawing itself. If the layer’s delegate implements the  [drawLayer:inContext:](../calayerdelegate/draw%28__in_%29.md) method, that method is called to do the actual drawing.

Subclasses can override this method and use it to draw the layer’s content. When drawing, all coordinates should be specified in points in the logical coordinate space.

## See Also

### Providing the layer’s content

- [contents](contents.md): An object that provides the contents of the layer. Animatable.
- [contentsRect](contentsrect.md): The rectangle, in the unit coordinate space, that defines the portion of the layer’s contents that should be used. Animatable.
- [contentsCenter](contentscenter.md): The rectangle that defines how the layer contents are scaled if the layer’s contents are resized. Animatable.
- [display](display%28%29.md): Reloads the content of this layer.
