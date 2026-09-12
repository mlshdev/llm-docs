> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/cachedisplay(in:to:)](https://developer.apple.com/documentation/appkit/nsview/cachedisplay(in:to:))

# cacheDisplay(in:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the specified area of the view, and its descendants, into a provided bitmap-representation object.

## Declaration

```swift
func cacheDisplay(in rect: NSRect, to bitmapImageRep: NSBitmapImageRep)
```

## Parameters

- `rect`: A rectangle defining the region to be drawn into `bitmapImageRep`.
- `bitmapImageRep`: An [NSBitmapImageRep](../nsbitmapimagerep.md) object. For pixel-format compatibility, `bitmapImageRep` should have been obtained from [bitmapImageRepForCachingDisplay(in:)](bitmapimagerepforcachingdisplay%28in_%29.md).

<a id="Discussion"></a>

## Discussion

You are responsible for initializing the bitmap to the desired configuration before calling this method. However, once initialized, you can reuse the same bitmap multiple times to refresh the cached copy of your view’s contents.

The bitmap produced by this method is transparent (that is, has an alpha value of 0) wherever the view and its descendants do not draw any content.

## See Also

### Drawing the View’s Content

- [updateLayer()](updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.
- [draw(\_:)](draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [clipsToBounds](clipstobounds.md): A Boolean value that indicates whether the view, and its subviews, confine their drawing areas to the bounds of the view.
- [canDrawConcurrently](candrawconcurrently.md): A Boolean value indicating whether the view can draw its contents on a background thread.
- [visibleRect](visiblerect.md): The portion of the view that isn’t clipped by its superviews.
- [getRectsBeingDrawn(\_:count:)](getrectsbeingdrawn%28__count_%29.md): Returns by indirection a list of nonoverlapping rectangles that define the area the view is being asked to draw in [draw(\_:)](draw%28__%29.md).
- [needsToDraw(\_:)](needstodraw%28__%29.md): Returns a Boolean value indicating whether the specified rectangle intersects any part of the area that the view is being asked to draw.
- [wantsDefaultClipping](wantsdefaultclipping.md): A Boolean value indicating whether AppKit’s default clipping behavior is in effect.
- [bitmapImageRepForCachingDisplay(in:)](bitmapimagerepforcachingdisplay%28in_%29.md): Returns a bitmap-representation object suitable for caching the specified portion of the view.
- [NSBorderType](../nsbordertype.md): These constants specify the type of a view’s border.

# cacheDisplayInRect:toBitmapImageRep: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the specified area of the view, and its descendants, into a provided bitmap-representation object.

## Declaration

```objectivec
- (void) cacheDisplayInRect:(NSRect) rect toBitmapImageRep:(NSBitmapImageRep *) bitmapImageRep;
```

## Parameters

- `rect`: A rectangle defining the region to be drawn into `bitmapImageRep`.
- `bitmapImageRep`: An [NSBitmapImageRep](../nsbitmapimagerep.md) object. For pixel-format compatibility, `bitmapImageRep` should have been obtained from [bitmapImageRepForCachingDisplayInRect:](bitmapimagerepforcachingdisplay%28in_%29.md).

<a id="Discussion"></a>

## Discussion

You are responsible for initializing the bitmap to the desired configuration before calling this method. However, once initialized, you can reuse the same bitmap multiple times to refresh the cached copy of your view’s contents.

The bitmap produced by this method is transparent (that is, has an alpha value of 0) wherever the view and its descendants do not draw any content.

## See Also

### Drawing the View’s Content

- [updateLayer](updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.
- [drawRect:](draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [clipsToBounds](clipstobounds.md): A Boolean value that indicates whether the view, and its subviews, confine their drawing areas to the bounds of the view.
- [canDrawConcurrently](candrawconcurrently.md): A Boolean value indicating whether the view can draw its contents on a background thread.
- [visibleRect](visiblerect.md): The portion of the view that isn’t clipped by its superviews.
- [getRectsBeingDrawn:count:](getrectsbeingdrawn%28__count_%29.md): Returns by indirection a list of nonoverlapping rectangles that define the area the view is being asked to draw in [drawRect:](draw%28__%29.md).
- [needsToDrawRect:](needstodraw%28__%29.md): Returns a Boolean value indicating whether the specified rectangle intersects any part of the area that the view is being asked to draw.
- [wantsDefaultClipping](wantsdefaultclipping.md): A Boolean value indicating whether AppKit’s default clipping behavior is in effect.
- [bitmapImageRepForCachingDisplayInRect:](bitmapimagerepforcachingdisplay%28in_%29.md): Returns a bitmap-representation object suitable for caching the specified portion of the view.
- [NSBorderType](../nsbordertype.md): These constants specify the type of a view’s border.
