> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlaypathrenderer/applyfillproperties(to:atzoomscale:)](https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/applyfillproperties(to:atzoomscale:))

# applyFillProperties(to:atZoomScale:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Applies the receiver’s fill-related drawing properties to the specified graphics context.

## Declaration

```swift
func applyFillProperties(to context: CGContext, atZoomScale zoomScale: MKZoomScale)
```

## Parameters

- `context`: The graphics context used to draw the view’s contents.
- `zoomScale`: The current zoom scale used for drawing.

<a id="Discussion"></a>

## Discussion

This is a convenience method for applying all of the drawing properties used when filling a path. This method applies the current fill color to the specified graphics context.

## See Also

### Drawing the path

- [applyStrokeProperties(to:atZoomScale:)](applystrokeproperties%28to_atzoomscale_%29.md): Applies the renderer’s stroke-related drawing properties to the specified graphics context.
- [strokePath(\_:in:)](strokepath%28__in_%29.md): Draws a line along the specified path.
- [fillPath(\_:in:)](fillpath%28__in_%29.md): Fills the area that the specified path encloses.
- [shouldRasterize](shouldrasterize.md): A Boolean value that determines whether the overlay path renderer renders the overlay as a bitmap before compositing.

# applyFillPropertiesToContext:atZoomScale: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Applies the receiver’s fill-related drawing properties to the specified graphics context.

## Declaration

```objectivec
- (void) applyFillPropertiesToContext:(CGContextRef) context atZoomScale:(MKZoomScale) zoomScale;
```

## Parameters

- `context`: The graphics context used to draw the view’s contents.
- `zoomScale`: The current zoom scale used for drawing.

<a id="Discussion"></a>

## Discussion

This is a convenience method for applying all of the drawing properties used when filling a path. This method applies the current fill color to the specified graphics context.

## See Also

### Drawing the path

- [applyStrokePropertiesToContext:atZoomScale:](applystrokeproperties%28to_atzoomscale_%29.md): Applies the renderer’s stroke-related drawing properties to the specified graphics context.
- [strokePath:inContext:](strokepath%28__in_%29.md): Draws a line along the specified path.
- [fillPath:inContext:](fillpath%28__in_%29.md): Fills the area that the specified path encloses.
- [shouldRasterize](shouldrasterize.md): A Boolean value that determines whether the overlay path renderer renders the overlay as a bitmap before compositing.
