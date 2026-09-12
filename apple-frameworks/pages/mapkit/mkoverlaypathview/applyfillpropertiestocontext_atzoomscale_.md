> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlaypathview/applyfillpropertiestocontext:atzoomscale:](https://developer.apple.com/documentation/mapkit/mkoverlaypathview/applyfillpropertiestocontext:atzoomscale:)

# applyFillPropertiesToContext:atZoomScale:

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Applies the receiver’s current fill-related drawing properties to the specified graphics context

> Use an [MKOverlayPathRenderer](../mkoverlaypathrenderer.md) object instead.

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

### Drawing the Path

- [applyStrokePropertiesToContext:atZoomScale:](applystrokepropertiestocontext_atzoomscale_.md): Deprecated. Applies the receiver’s current stroke-related drawing properties to the specified graphics context.
- [strokePath:inContext:](strokepath_incontext_.md): Deprecated. Draws a line along the specified path.
- [fillPath:inContext:](fillpath_incontext_.md): Deprecated. Fills the area enclosed by the specified path.
