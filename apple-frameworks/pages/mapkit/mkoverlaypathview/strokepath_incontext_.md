> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlaypathview/strokepath:incontext:](https://developer.apple.com/documentation/mapkit/mkoverlaypathview/strokepath:incontext:)

# strokePath:inContext:

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Draws a line along the specified path.

> Use an [MKOverlayPathRenderer](../mkoverlaypathrenderer.md) object instead.

## Declaration

```objectivec
- (void) strokePath:(CGPathRef) path inContext:(CGContextRef) context;
```

## Parameters

- `path`: The path to draw.
- `context`: The graphics context in which to draw the path.

<a id="Discussion"></a>

## Discussion

You must set the current stroke color before calling this method. Typically you do this by calling the [applyStrokePropertiesToContext:atZoomScale:](applystrokepropertiestocontext_atzoomscale_.md) method prior to drawing. If the [strokeColor](strokecolor.md) property is currently `nil`, this method does nothing.

## See Also

### Drawing the Path

- [applyStrokePropertiesToContext:atZoomScale:](applystrokepropertiestocontext_atzoomscale_.md): Deprecated. Applies the receiver’s current stroke-related drawing properties to the specified graphics context.
- [applyFillPropertiesToContext:atZoomScale:](applyfillpropertiestocontext_atzoomscale_.md): Deprecated. Applies the receiver’s current fill-related drawing properties to the specified graphics context
- [fillPath:inContext:](fillpath_incontext_.md): Deprecated. Fills the area enclosed by the specified path.
