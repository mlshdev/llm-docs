> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/needstodraw(_:)](https://developer.apple.com/documentation/appkit/nsview/needstodraw(_:))

# needsToDraw(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether the specified rectangle intersects any part of the area that the view is being asked to draw.

## Declaration

```swift
func needsToDraw(_ rect: NSRect) -> Bool
```

## Parameters

- `rect`: A rectangle defining a region of the view.

<a id="Discussion"></a>

## Discussion

You typically send this message from within a [draw(\_:)](draw%28__%29.md) implementation. It gives you a convenient way to determine whether any part of a given graphical entity might need to be drawn. It is optimized to efficiently reject any rectangle that lies outside the bounding box of the area that the view is being asked to draw in [draw(\_:)](draw%28__%29.md).

## See Also

### Drawing the View’s Content

- [updateLayer()](updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.
- [draw(\_:)](draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [clipsToBounds](clipstobounds.md): A Boolean value that indicates whether the view, and its subviews, confine their drawing areas to the bounds of the view.
- [canDrawConcurrently](candrawconcurrently.md): A Boolean value indicating whether the view can draw its contents on a background thread.
- [visibleRect](visiblerect.md): The portion of the view that isn’t clipped by its superviews.
- [getRectsBeingDrawn(\_:count:)](getrectsbeingdrawn%28__count_%29.md): Returns by indirection a list of nonoverlapping rectangles that define the area the view is being asked to draw in [draw(\_:)](draw%28__%29.md).
- [wantsDefaultClipping](wantsdefaultclipping.md): A Boolean value indicating whether AppKit’s default clipping behavior is in effect.
- [bitmapImageRepForCachingDisplay(in:)](bitmapimagerepforcachingdisplay%28in_%29.md): Returns a bitmap-representation object suitable for caching the specified portion of the view.
- [cacheDisplay(in:to:)](cachedisplay%28in_to_%29.md): Draws the specified area of the view, and its descendants, into a provided bitmap-representation object.
- [NSBorderType](../nsbordertype.md): These constants specify the type of a view’s border.

# needsToDrawRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether the specified rectangle intersects any part of the area that the view is being asked to draw.

## Declaration

```objectivec
- (BOOL) needsToDrawRect:(NSRect) rect;
```

## Parameters

- `rect`: A rectangle defining a region of the view.

<a id="Discussion"></a>

## Discussion

You typically send this message from within a [drawRect:](draw%28__%29.md) implementation. It gives you a convenient way to determine whether any part of a given graphical entity might need to be drawn. It is optimized to efficiently reject any rectangle that lies outside the bounding box of the area that the view is being asked to draw in [drawRect:](draw%28__%29.md).

## See Also

### Drawing the View’s Content

- [updateLayer](updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.
- [drawRect:](draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [clipsToBounds](clipstobounds.md): A Boolean value that indicates whether the view, and its subviews, confine their drawing areas to the bounds of the view.
- [canDrawConcurrently](candrawconcurrently.md): A Boolean value indicating whether the view can draw its contents on a background thread.
- [visibleRect](visiblerect.md): The portion of the view that isn’t clipped by its superviews.
- [getRectsBeingDrawn:count:](getrectsbeingdrawn%28__count_%29.md): Returns by indirection a list of nonoverlapping rectangles that define the area the view is being asked to draw in [drawRect:](draw%28__%29.md).
- [wantsDefaultClipping](wantsdefaultclipping.md): A Boolean value indicating whether AppKit’s default clipping behavior is in effect.
- [bitmapImageRepForCachingDisplayInRect:](bitmapimagerepforcachingdisplay%28in_%29.md): Returns a bitmap-representation object suitable for caching the specified portion of the view.
- [cacheDisplayInRect:toBitmapImageRep:](cachedisplay%28in_to_%29.md): Draws the specified area of the view, and its descendants, into a provided bitmap-representation object.
- [NSBorderType](../nsbordertype.md): These constants specify the type of a view’s border.
