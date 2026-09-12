> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/visiblerect](https://developer.apple.com/documentation/appkit/nsview/visiblerect)

# visibleRect (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The portion of the view that isn’t clipped by its superviews.

## Declaration

```swift
var visibleRect: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

Visibility, as reflected by this property, doesn’t account for whether other view or window objects overlap the current view or whether the current view is installed in a window at all. This value of this property is `NSZeroRect` if the current view is effectively hidden.

During a printing operation the visible rectangle is further clipped to the page being imaged.

[clipsToBounds](clipstobounds.md) affects this property.

## See Also

### Related Documentation

- [isHidden](ishidden.md): A Boolean value indicating whether the view is hidden.
- [documentVisibleRect](../nsscrollview/documentvisiblerect.md): The portion of the document view, in its own coordinate system, visible through the scroll view’s content view.
- [documentVisibleRect](../nsclipview/documentvisiblerect.md): The exposed rectangle of the clip view’s document view, in the document view’s own coordinate system.
- [isVisible](../nswindow/isvisible.md): A Boolean value that indicates whether the window is visible onscreen (even when it’s obscured by other windows).

### Drawing the View’s Content

- [updateLayer()](updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.
- [draw(\_:)](draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [clipsToBounds](clipstobounds.md): A Boolean value that indicates whether the view, and its subviews, confine their drawing areas to the bounds of the view.
- [canDrawConcurrently](candrawconcurrently.md): A Boolean value indicating whether the view can draw its contents on a background thread.
- [getRectsBeingDrawn(\_:count:)](getrectsbeingdrawn%28__count_%29.md): Returns by indirection a list of nonoverlapping rectangles that define the area the view is being asked to draw in [draw(\_:)](draw%28__%29.md).
- [needsToDraw(\_:)](needstodraw%28__%29.md): Returns a Boolean value indicating whether the specified rectangle intersects any part of the area that the view is being asked to draw.
- [wantsDefaultClipping](wantsdefaultclipping.md): A Boolean value indicating whether AppKit’s default clipping behavior is in effect.
- [bitmapImageRepForCachingDisplay(in:)](bitmapimagerepforcachingdisplay%28in_%29.md): Returns a bitmap-representation object suitable for caching the specified portion of the view.
- [cacheDisplay(in:to:)](cachedisplay%28in_to_%29.md): Draws the specified area of the view, and its descendants, into a provided bitmap-representation object.
- [NSBorderType](../nsbordertype.md): These constants specify the type of a view’s border.

# visibleRect (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The portion of the view that isn’t clipped by its superviews.

## Declaration

```objectivec
@property (readonly) NSRect visibleRect;
```

<a id="Discussion"></a>

## Discussion

Visibility, as reflected by this property, doesn’t account for whether other view or window objects overlap the current view or whether the current view is installed in a window at all. This value of this property is `NSZeroRect` if the current view is effectively hidden.

During a printing operation the visible rectangle is further clipped to the page being imaged.

[clipsToBounds](clipstobounds.md) affects this property.

## See Also

### Related Documentation

- [hidden](ishidden.md): A Boolean value indicating whether the view is hidden.
- [documentVisibleRect](../nsscrollview/documentvisiblerect.md): The portion of the document view, in its own coordinate system, visible through the scroll view’s content view.
- [documentVisibleRect](../nsclipview/documentvisiblerect.md): The exposed rectangle of the clip view’s document view, in the document view’s own coordinate system.
- [visible](../nswindow/isvisible.md): A Boolean value that indicates whether the window is visible onscreen (even when it’s obscured by other windows).

### Drawing the View’s Content

- [updateLayer](updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.
- [drawRect:](draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [clipsToBounds](clipstobounds.md): A Boolean value that indicates whether the view, and its subviews, confine their drawing areas to the bounds of the view.
- [canDrawConcurrently](candrawconcurrently.md): A Boolean value indicating whether the view can draw its contents on a background thread.
- [getRectsBeingDrawn:count:](getrectsbeingdrawn%28__count_%29.md): Returns by indirection a list of nonoverlapping rectangles that define the area the view is being asked to draw in [drawRect:](draw%28__%29.md).
- [needsToDrawRect:](needstodraw%28__%29.md): Returns a Boolean value indicating whether the specified rectangle intersects any part of the area that the view is being asked to draw.
- [wantsDefaultClipping](wantsdefaultclipping.md): A Boolean value indicating whether AppKit’s default clipping behavior is in effect.
- [bitmapImageRepForCachingDisplayInRect:](bitmapimagerepforcachingdisplay%28in_%29.md): Returns a bitmap-representation object suitable for caching the specified portion of the view.
- [cacheDisplayInRect:toBitmapImageRep:](cachedisplay%28in_to_%29.md): Draws the specified area of the view, and its descendants, into a provided bitmap-representation object.
- [NSBorderType](../nsbordertype.md): These constants specify the type of a view’s border.
