> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/clipstobounds](https://developer.apple.com/documentation/appkit/nsview/clipstobounds)

# clipsToBounds (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A Boolean value that indicates whether the view, and its subviews, confine their drawing areas to the bounds of the view.

## Declaration

```swift
var clipsToBounds: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this value to [true](https://developer.apple.com/documentation/swift/true) causes the view, and its subviews, to clip themselves to the bounds of the view. Setting it to [false](https://developer.apple.com/documentation/swift/false) prevents views and subviews whose frames extend beyond the visible bounds of the view from clipping themselves. A value of [false](https://developer.apple.com/documentation/swift/false) has no effect on [hitTest(\_:)](hittest%28__%29.md) but does affect [visibleRect](visiblerect.md), as well as the area drawn inside [draw(\_:)](draw%28__%29.md).

By default this value is [false](https://developer.apple.com/documentation/swift/false). In macOS 13 and earlier, the default value is [true](https://developer.apple.com/documentation/swift/true).

Because of this change in default value, views built on macOS 13 and earlier may require layout adjustments such as the following on newer versions of macOS:

- Showing or hiding UI elements by setting a parent’s frame size to zero. To hide a view hierarchy by shrinking the parent view, or positioning a child view outside a parent’s bounds, set the [clipsToBounds](clipstobounds.md) property of the parent view to [true](https://developer.apple.com/documentation/swift/true). Alternatively, set [isHidden](ishidden.md) to [true](https://developer.apple.com/documentation/swift/true) on the parent view instead.
- Filling the `dirtyRect` of a view inside [draw(\_:)](draw%28__%29.md). It’s a common practice to set the background color on a view by calling [setFill()](../nscolor/setfill%28%29.md) on a background color and then calling [fill(using:)](https://developer.apple.com/documentation/corefoundation/cgrect/fill%28using:%29) on the `dirtyRect` parameter passed into an override of [draw(\_:)](draw%28__%29.md). Because the `dirtyRect` now extends outside your view’s bounds, call [fill(using:)](https://developer.apple.com/documentation/corefoundation/cgrect/fill%28using:%29) on the view’s bounds instead of the `dirtyRect`, or set the view’s [clipsToBounds](clipstobounds.md) to [true](https://developer.apple.com/documentation/swift/true).
- Differentiating a view’s bounds from its `dirtyRect`. Use the `dirtyRect` parameter passed to [draw(\_:)](draw%28__%29.md) to determine what to draw, not where to draw it. Use the view’s [bounds](bounds.md) to determine the layout of what your view draws.

## See Also

### Drawing the View’s Content

- [updateLayer()](updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.
- [draw(\_:)](draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [canDrawConcurrently](candrawconcurrently.md): A Boolean value indicating whether the view can draw its contents on a background thread.
- [visibleRect](visiblerect.md): The portion of the view that isn’t clipped by its superviews.
- [getRectsBeingDrawn(\_:count:)](getrectsbeingdrawn%28__count_%29.md): Returns by indirection a list of nonoverlapping rectangles that define the area the view is being asked to draw in [draw(\_:)](draw%28__%29.md).
- [needsToDraw(\_:)](needstodraw%28__%29.md): Returns a Boolean value indicating whether the specified rectangle intersects any part of the area that the view is being asked to draw.
- [wantsDefaultClipping](wantsdefaultclipping.md): A Boolean value indicating whether AppKit’s default clipping behavior is in effect.
- [bitmapImageRepForCachingDisplay(in:)](bitmapimagerepforcachingdisplay%28in_%29.md): Returns a bitmap-representation object suitable for caching the specified portion of the view.
- [cacheDisplay(in:to:)](cachedisplay%28in_to_%29.md): Draws the specified area of the view, and its descendants, into a provided bitmap-representation object.
- [NSBorderType](../nsbordertype.md): These constants specify the type of a view’s border.

# clipsToBounds (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A Boolean value that indicates whether the view, and its subviews, confine their drawing areas to the bounds of the view.

## Declaration

```objectivec
@property BOOL clipsToBounds;
```

<a id="Discussion"></a>

## Discussion

Setting this value to [true](https://developer.apple.com/documentation/swift/true) causes the view, and its subviews, to clip themselves to the bounds of the view. Setting it to [false](https://developer.apple.com/documentation/swift/false) prevents views and subviews whose frames extend beyond the visible bounds of the view from clipping themselves. A value of [false](https://developer.apple.com/documentation/swift/false) has no effect on [hitTest:](hittest%28__%29.md) but does affect [visibleRect](visiblerect.md), as well as the area drawn inside [drawRect:](draw%28__%29.md).

By default this value is [false](https://developer.apple.com/documentation/swift/false). In macOS 13 and earlier, the default value is [true](https://developer.apple.com/documentation/swift/true).

Because of this change in default value, views built on macOS 13 and earlier may require layout adjustments such as the following on newer versions of macOS:

- Showing or hiding UI elements by setting a parent’s frame size to zero. To hide a view hierarchy by shrinking the parent view, or positioning a child view outside a parent’s bounds, set the [clipsToBounds](clipstobounds.md) property of the parent view to [true](https://developer.apple.com/documentation/swift/true). Alternatively, set [hidden](ishidden.md) to [true](https://developer.apple.com/documentation/swift/true) on the parent view instead.
- Filling the `dirtyRect` of a view inside [drawRect:](draw%28__%29.md). It’s a common practice to set the background color on a view by calling [setFill](../nscolor/setfill%28%29.md) on a background color and then calling [fill(using:)](https://developer.apple.com/documentation/corefoundation/cgrect/fill%28using:%29) on the `dirtyRect` parameter passed into an override of [drawRect:](draw%28__%29.md). Because the `dirtyRect` now extends outside your view’s bounds, call [fill(using:)](https://developer.apple.com/documentation/corefoundation/cgrect/fill%28using:%29) on the view’s bounds instead of the `dirtyRect`, or set the view’s [clipsToBounds](clipstobounds.md) to [true](https://developer.apple.com/documentation/swift/true).
- Differentiating a view’s bounds from its `dirtyRect`. Use the `dirtyRect` parameter passed to [drawRect:](draw%28__%29.md) to determine what to draw, not where to draw it. Use the view’s [bounds](bounds.md) to determine the layout of what your view draws.

## See Also

### Drawing the View’s Content

- [updateLayer](updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.
- [drawRect:](draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [canDrawConcurrently](candrawconcurrently.md): A Boolean value indicating whether the view can draw its contents on a background thread.
- [visibleRect](visiblerect.md): The portion of the view that isn’t clipped by its superviews.
- [getRectsBeingDrawn:count:](getrectsbeingdrawn%28__count_%29.md): Returns by indirection a list of nonoverlapping rectangles that define the area the view is being asked to draw in [drawRect:](draw%28__%29.md).
- [needsToDrawRect:](needstodraw%28__%29.md): Returns a Boolean value indicating whether the specified rectangle intersects any part of the area that the view is being asked to draw.
- [wantsDefaultClipping](wantsdefaultclipping.md): A Boolean value indicating whether AppKit’s default clipping behavior is in effect.
- [bitmapImageRepForCachingDisplayInRect:](bitmapimagerepforcachingdisplay%28in_%29.md): Returns a bitmap-representation object suitable for caching the specified portion of the view.
- [cacheDisplayInRect:toBitmapImageRep:](cachedisplay%28in_to_%29.md): Draws the specified area of the view, and its descendants, into a provided bitmap-representation object.
- [NSBorderType](../nsbordertype.md): These constants specify the type of a view’s border.
