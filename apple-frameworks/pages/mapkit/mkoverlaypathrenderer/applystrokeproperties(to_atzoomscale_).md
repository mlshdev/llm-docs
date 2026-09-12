> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlaypathrenderer/applystrokeproperties(to:atzoomscale:)](https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/applystrokeproperties(to:atzoomscale:))

# applyStrokeProperties(to:atZoomScale:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Applies the renderer’s stroke-related drawing properties to the specified graphics context.

## Declaration

```swift
func applyStrokeProperties(to context: CGContext, atZoomScale zoomScale: MKZoomScale)
```

## Parameters

- `context`: The graphics context for drawing the view’s contents.
- `zoomScale`: The zoom scale for drawing.

<a id="Discussion"></a>

## Discussion

This is a convenience method for applying all of the drawing properties MapKit uses when stroking a path. This method applies the stroke color, line width, line join, line cap, miter limit, line dash phase, and line dash attributes to the specified graphics context. This method applies the scale factor in the `zoomScale` parameter to the line width and line dash pattern automatically so that lines scale appropriately.

This method doesn’t save the current graphics state before applying the new attributes. If you want to preserve the existing state, save it and restore it later when you finish drawing.

## See Also

### Drawing the path

- [applyFillProperties(to:atZoomScale:)](applyfillproperties%28to_atzoomscale_%29.md): Applies the receiver’s fill-related drawing properties to the specified graphics context.
- [strokePath(\_:in:)](strokepath%28__in_%29.md): Draws a line along the specified path.
- [fillPath(\_:in:)](fillpath%28__in_%29.md): Fills the area that the specified path encloses.
- [shouldRasterize](shouldrasterize.md): A Boolean value that determines whether the overlay path renderer renders the overlay as a bitmap before compositing.

# applyStrokePropertiesToContext:atZoomScale: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Applies the renderer’s stroke-related drawing properties to the specified graphics context.

## Declaration

```objectivec
- (void) applyStrokePropertiesToContext:(CGContextRef) context atZoomScale:(MKZoomScale) zoomScale;
```

## Parameters

- `context`: The graphics context for drawing the view’s contents.
- `zoomScale`: The zoom scale for drawing.

<a id="Discussion"></a>

## Discussion

This is a convenience method for applying all of the drawing properties MapKit uses when stroking a path. This method applies the stroke color, line width, line join, line cap, miter limit, line dash phase, and line dash attributes to the specified graphics context. This method applies the scale factor in the `zoomScale` parameter to the line width and line dash pattern automatically so that lines scale appropriately.

This method doesn’t save the current graphics state before applying the new attributes. If you want to preserve the existing state, save it and restore it later when you finish drawing.

## See Also

### Drawing the path

- [applyFillPropertiesToContext:atZoomScale:](applyfillproperties%28to_atzoomscale_%29.md): Applies the receiver’s fill-related drawing properties to the specified graphics context.
- [strokePath:inContext:](strokepath%28__in_%29.md): Draws a line along the specified path.
- [fillPath:inContext:](fillpath%28__in_%29.md): Fills the area that the specified path encloses.
- [shouldRasterize](shouldrasterize.md): A Boolean value that determines whether the overlay path renderer renders the overlay as a bitmap before compositing.
