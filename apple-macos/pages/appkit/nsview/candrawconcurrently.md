> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/candrawconcurrently](https://developer.apple.com/documentation/appkit/nsview/candrawconcurrently)

# canDrawConcurrently (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value indicating whether the view can draw its contents on a background thread.

## Declaration

```swift
var canDrawConcurrently: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If your view’s [draw(\_:)](draw%28__%29.md) implementation can draw safely on a background thread, set this property to [true](https://developer.apple.com/documentation/swift/true). Doing so gives AppKit the ability to run your view’s drawing code off the app’s main thread, which can improve performance. The view’s window must also have its [allowsConcurrentViewDrawing](../nswindow/allowsconcurrentviewdrawing.md) property set to [true](https://developer.apple.com/documentation/swift/true) (the default) for threaded view drawing to occur.

## See Also

### Drawing the View’s Content

- [updateLayer()](updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.
- [draw(\_:)](draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [clipsToBounds](clipstobounds.md): A Boolean value that indicates whether the view, and its subviews, confine their drawing areas to the bounds of the view.
- [visibleRect](visiblerect.md): The portion of the view that isn’t clipped by its superviews.
- [getRectsBeingDrawn(\_:count:)](getrectsbeingdrawn%28__count_%29.md): Returns by indirection a list of nonoverlapping rectangles that define the area the view is being asked to draw in [draw(\_:)](draw%28__%29.md).
- [needsToDraw(\_:)](needstodraw%28__%29.md): Returns a Boolean value indicating whether the specified rectangle intersects any part of the area that the view is being asked to draw.
- [wantsDefaultClipping](wantsdefaultclipping.md): A Boolean value indicating whether AppKit’s default clipping behavior is in effect.
- [bitmapImageRepForCachingDisplay(in:)](bitmapimagerepforcachingdisplay%28in_%29.md): Returns a bitmap-representation object suitable for caching the specified portion of the view.
- [cacheDisplay(in:to:)](cachedisplay%28in_to_%29.md): Draws the specified area of the view, and its descendants, into a provided bitmap-representation object.
- [NSBorderType](../nsbordertype.md): These constants specify the type of a view’s border.

# canDrawConcurrently (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value indicating whether the view can draw its contents on a background thread.

## Declaration

```objectivec
@property BOOL canDrawConcurrently;
```

<a id="Discussion"></a>

## Discussion

If your view’s [drawRect:](draw%28__%29.md) implementation can draw safely on a background thread, set this property to [true](https://developer.apple.com/documentation/swift/true). Doing so gives AppKit the ability to run your view’s drawing code off the app’s main thread, which can improve performance. The view’s window must also have its [allowsConcurrentViewDrawing](../nswindow/allowsconcurrentviewdrawing.md) property set to [true](https://developer.apple.com/documentation/swift/true) (the default) for threaded view drawing to occur.

## See Also

### Drawing the View’s Content

- [updateLayer](updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.
- [drawRect:](draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [clipsToBounds](clipstobounds.md): A Boolean value that indicates whether the view, and its subviews, confine their drawing areas to the bounds of the view.
- [visibleRect](visiblerect.md): The portion of the view that isn’t clipped by its superviews.
- [getRectsBeingDrawn:count:](getrectsbeingdrawn%28__count_%29.md): Returns by indirection a list of nonoverlapping rectangles that define the area the view is being asked to draw in [drawRect:](draw%28__%29.md).
- [needsToDrawRect:](needstodraw%28__%29.md): Returns a Boolean value indicating whether the specified rectangle intersects any part of the area that the view is being asked to draw.
- [wantsDefaultClipping](wantsdefaultclipping.md): A Boolean value indicating whether AppKit’s default clipping behavior is in effect.
- [bitmapImageRepForCachingDisplayInRect:](bitmapimagerepforcachingdisplay%28in_%29.md): Returns a bitmap-representation object suitable for caching the specified portion of the view.
- [cacheDisplayInRect:toBitmapImageRep:](cachedisplay%28in_to_%29.md): Draws the specified area of the view, and its descendants, into a provided bitmap-representation object.
- [NSBorderType](../nsbordertype.md): These constants specify the type of a view’s border.
