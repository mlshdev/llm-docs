> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/wantsdefaultclipping](https://developer.apple.com/documentation/appkit/nsview/wantsdefaultclipping)

# wantsDefaultClipping (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether AppKit’s default clipping behavior is in effect.

## Declaration

```swift
var wantsDefaultClipping: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the default clipping is in effect, [false](https://developer.apple.com/documentation/swift/false) otherwise. By default, this method returns [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). When the value of this property is [true](https://developer.apple.com/documentation/swift/true), AppKit sets the current clipping region to the bounds of the view prior to calling that view’s [draw(\_:)](draw%28__%29.md) method. Subclasses may override this property and return [false](https://developer.apple.com/documentation/swift/false) to suppress this default clipping behavior. You might do this to avoid the cost of setting up, enforcing, and cleaning up the clipping path. If you do change the value to [false](https://developer.apple.com/documentation/swift/false), you are responsible for doing your own clipping or constraining drawing appropriately. Failure to do so could the view to corrupt the contents of other views in the window.

## See Also

### Drawing the View’s Content

- [updateLayer()](updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.
- [draw(\_:)](draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [clipsToBounds](clipstobounds.md): A Boolean value that indicates whether the view, and its subviews, confine their drawing areas to the bounds of the view.
- [canDrawConcurrently](candrawconcurrently.md): A Boolean value indicating whether the view can draw its contents on a background thread.
- [visibleRect](visiblerect.md): The portion of the view that isn’t clipped by its superviews.
- [getRectsBeingDrawn(\_:count:)](getrectsbeingdrawn%28__count_%29.md): Returns by indirection a list of nonoverlapping rectangles that define the area the view is being asked to draw in [draw(\_:)](draw%28__%29.md).
- [needsToDraw(\_:)](needstodraw%28__%29.md): Returns a Boolean value indicating whether the specified rectangle intersects any part of the area that the view is being asked to draw.
- [bitmapImageRepForCachingDisplay(in:)](bitmapimagerepforcachingdisplay%28in_%29.md): Returns a bitmap-representation object suitable for caching the specified portion of the view.
- [cacheDisplay(in:to:)](cachedisplay%28in_to_%29.md): Draws the specified area of the view, and its descendants, into a provided bitmap-representation object.
- [NSBorderType](../nsbordertype.md): These constants specify the type of a view’s border.

# wantsDefaultClipping (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether AppKit’s default clipping behavior is in effect.

## Declaration

```objectivec
@property (readonly) BOOL wantsDefaultClipping;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the default clipping is in effect, [false](https://developer.apple.com/documentation/swift/false) otherwise. By default, this method returns [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). When the value of this property is [true](https://developer.apple.com/documentation/swift/true), AppKit sets the current clipping region to the bounds of the view prior to calling that view’s [drawRect:](draw%28__%29.md) method. Subclasses may override this property and return [false](https://developer.apple.com/documentation/swift/false) to suppress this default clipping behavior. You might do this to avoid the cost of setting up, enforcing, and cleaning up the clipping path. If you do change the value to [false](https://developer.apple.com/documentation/swift/false), you are responsible for doing your own clipping or constraining drawing appropriately. Failure to do so could the view to corrupt the contents of other views in the window.

## See Also

### Drawing the View’s Content

- [updateLayer](updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.
- [drawRect:](draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [clipsToBounds](clipstobounds.md): A Boolean value that indicates whether the view, and its subviews, confine their drawing areas to the bounds of the view.
- [canDrawConcurrently](candrawconcurrently.md): A Boolean value indicating whether the view can draw its contents on a background thread.
- [visibleRect](visiblerect.md): The portion of the view that isn’t clipped by its superviews.
- [getRectsBeingDrawn:count:](getrectsbeingdrawn%28__count_%29.md): Returns by indirection a list of nonoverlapping rectangles that define the area the view is being asked to draw in [drawRect:](draw%28__%29.md).
- [needsToDrawRect:](needstodraw%28__%29.md): Returns a Boolean value indicating whether the specified rectangle intersects any part of the area that the view is being asked to draw.
- [bitmapImageRepForCachingDisplayInRect:](bitmapimagerepforcachingdisplay%28in_%29.md): Returns a bitmap-representation object suitable for caching the specified portion of the view.
- [cacheDisplayInRect:toBitmapImageRep:](cachedisplay%28in_to_%29.md): Draws the specified area of the view, and its descendants, into a provided bitmap-representation object.
- [NSBorderType](../nsbordertype.md): These constants specify the type of a view’s border.
