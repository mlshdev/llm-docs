> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontextdrawlayerinrect](https://developer.apple.com/documentation/coregraphics/cgcontextdrawlayerinrect)

# CGContextDrawLayerInRect

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Draws the contents of a layer object into the specified rectangle.

## Declaration

```objectivec
extern void CGContextDrawLayerInRect(CGContextRef context, CGRect rect, CGLayerRef layer);
```

## Parameters

- `context`: The graphics context associated with the layer.
- `rect`: The rectangle, in current user space coordinates, to draw to.
- `layer`: The layer whose contents you want to draw.

<a id="Discussion"></a>

## Discussion

The contents are scaled, if necessary, to fit into the rectangle.

## See Also

### Drawing Core Graphics Layers

- [CGContextDrawLayerAtPoint](cgcontextdrawlayeratpoint.md): Draws the contents of a CGLayer object at the specified point.
