> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/bitmapimagerepforcachingdisplay(in:)](https://developer.apple.com/documentation/appkit/nsview/bitmapimagerepforcachingdisplay(in:))

# bitmapImageRepForCachingDisplay(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a bitmap-representation object suitable for caching the specified portion of the view.

## Declaration

```swift
func bitmapImageRepForCachingDisplay(in rect: NSRect) -> NSBitmapImageRep?
```

## Parameters

- `rect`: A rectangle defining the area of the view to be cached.

<a id="return-value"></a>

## Return Value

An autoreleased [NSBitmapImageRep](../nsbitmapimagerep.md) object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Passing the visible rectangle of the view (`[self visibleRect]`) returns a bitmap suitable for caching the current contents of the view, including all of its descendants.

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
- [cacheDisplay(in:to:)](cachedisplay%28in_to_%29.md): Draws the specified area of the view, and its descendants, into a provided bitmap-representation object.
- [NSBorderType](../nsbordertype.md): These constants specify the type of a view’s border.

# bitmapImageRepForCachingDisplayInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a bitmap-representation object suitable for caching the specified portion of the view.

## Declaration

```objectivec
- (NSBitmapImageRep *) bitmapImageRepForCachingDisplayInRect:(NSRect) rect;
```

## Parameters

- `rect`: A rectangle defining the area of the view to be cached.

<a id="return-value"></a>

## Return Value

An autoreleased [NSBitmapImageRep](../nsbitmapimagerep.md) object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Passing the visible rectangle of the view (`[self visibleRect]`) returns a bitmap suitable for caching the current contents of the view, including all of its descendants.

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
- [cacheDisplayInRect:toBitmapImageRep:](cachedisplay%28in_to_%29.md): Draws the specified area of the view, and its descendants, into a provided bitmap-representation object.
- [NSBorderType](../nsbordertype.md): These constants specify the type of a view’s border.
