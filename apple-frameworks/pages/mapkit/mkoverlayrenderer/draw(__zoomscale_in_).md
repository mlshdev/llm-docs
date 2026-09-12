> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlayrenderer/draw(_:zoomscale:in:)](https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/draw(_:zoomscale:in:))

# draw(\_:zoomScale:in:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Draws the overlay’s contents at the specified location on the map.

## Declaration

```swift
func draw(_ mapRect: MKMapRect, zoomScale: MKZoomScale, in context: CGContext)
```

## Parameters

- `mapRect`: The map rectangle that the renderer needs to update. Your drawing code needs to avoid drawing outside of this rectangle.
- `zoomScale`: The zoom factor to apply to the map content. You can use this value for configuring the stroke width of lines or other attributes that the scale of the map’s contents might affect.
- `context`: The graphics context to use for drawing the overlay’s contents.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override this method and use it to draw the overlay’s contents.

When determining where to draw content, make your initial calculations relative to the map itself. Compute the position and size of any overlay content using map points and map rectangles, convert those values to regular [CGPoint](../../corefoundation/cgpoint.md) and [CGRect](../../corefoundation/cgrect.md) types using the methods of this class, and then pass the converted points to any drawing primitives.

Use Core Graphics to draw any content for your overlays. If you choose to draw using UIKit classes and methods instead, push the specified graphics context onto the context stack (using the [UIGraphicsPushContext(\_:)](../../uikit/uigraphicspushcontext%28__%29.md) function) before making any drawing calls. When you finish drawing, you need to similarly pop the graphics context off the stack using the [UIGraphicsPopContext()](../../uikit/uigraphicspopcontext%28%29.md). Overlay drawing typically occurs on background threads to improve performance, so don’t manipulate UIKit views or other objects that you can only manipulate on the app’s main thread.

To improve drawing performance, the map view may divide your overlay into multiple tiles and render each one on a separate thread. Therefore, your implementation of this method needs to be capable of safely running multiple threads simultaneously. In addition, avoid drawing the entire contents of the overlay each time the overlay renderer calls this method. Instead, be sure to take the `mapRect` parameter into consideration and avoid drawing content outside that rectangle.

## See Also

### Drawing the overlay

- [canDraw(\_:zoomScale:)](candraw%28__zoomscale_%29.md): Returns a Boolean value that indicates whether the overlay view is ready to draw its content.
- [setNeedsDisplay()](setneedsdisplay%28%29.md): Invalidates the entire contents of the overlay for all zoom scales.
- [setNeedsDisplay(\_:)](setneedsdisplay%28__%29.md): Invalidates the specified portion of the overlay at all zoom scales.
- [setNeedsDisplay(\_:zoomScale:)](setneedsdisplay%28__zoomscale_%29.md): Invalidates the specified portion of the overlay, but only at the specified zoom scale.

# drawMapRect:zoomScale:inContext: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Draws the overlay’s contents at the specified location on the map.

## Declaration

```objectivec
- (void) drawMapRect:(MKMapRect) mapRect zoomScale:(MKZoomScale) zoomScale inContext:(CGContextRef) context;
```

## Parameters

- `mapRect`: The map rectangle that the renderer needs to update. Your drawing code needs to avoid drawing outside of this rectangle.
- `zoomScale`: The zoom factor to apply to the map content. You can use this value for configuring the stroke width of lines or other attributes that the scale of the map’s contents might affect.
- `context`: The graphics context to use for drawing the overlay’s contents.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override this method and use it to draw the overlay’s contents.

When determining where to draw content, make your initial calculations relative to the map itself. Compute the position and size of any overlay content using map points and map rectangles, convert those values to regular [CGPoint](../../corefoundation/cgpoint.md) and [CGRect](../../corefoundation/cgrect.md) types using the methods of this class, and then pass the converted points to any drawing primitives.

Use Core Graphics to draw any content for your overlays. If you choose to draw using UIKit classes and methods instead, push the specified graphics context onto the context stack (using the [UIGraphicsPushContext](../../uikit/uigraphicspushcontext%28__%29.md) function) before making any drawing calls. When you finish drawing, you need to similarly pop the graphics context off the stack using the [UIGraphicsPopContext](../../uikit/uigraphicspopcontext%28%29.md). Overlay drawing typically occurs on background threads to improve performance, so don’t manipulate UIKit views or other objects that you can only manipulate on the app’s main thread.

To improve drawing performance, the map view may divide your overlay into multiple tiles and render each one on a separate thread. Therefore, your implementation of this method needs to be capable of safely running multiple threads simultaneously. In addition, avoid drawing the entire contents of the overlay each time the overlay renderer calls this method. Instead, be sure to take the `mapRect` parameter into consideration and avoid drawing content outside that rectangle.

## See Also

### Drawing the overlay

- [canDrawMapRect:zoomScale:](candraw%28__zoomscale_%29.md): Returns a Boolean value that indicates whether the overlay view is ready to draw its content.
- [setNeedsDisplay](setneedsdisplay%28%29.md): Invalidates the entire contents of the overlay for all zoom scales.
- [setNeedsDisplayInMapRect:](setneedsdisplay%28__%29.md): Invalidates the specified portion of the overlay at all zoom scales.
- [setNeedsDisplayInMapRect:zoomScale:](setneedsdisplay%28__zoomscale_%29.md): Invalidates the specified portion of the overlay, but only at the specified zoom scale.
