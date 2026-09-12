> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbordertype](https://developer.apple.com/documentation/appkit/nsbordertype)

# NSBorderType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants specify the type of a view’s border.

## Declaration

```swift
enum NSBorderType
```

## Topics

### Constants

- [NSBorderType.bezelBorder](nsbordertype/bezelborder.md): A concave border that makes the view look sunken.
- [NSBorderType.grooveBorder](nsbordertype/grooveborder.md): A thin border that looks etched around the image.
- [NSBorderType.lineBorder](nsbordertype/lineborder.md): A black line border around the view.
- [NSBorderType.noBorder](nsbordertype/noborder.md): No border.

### Initializers

- [init(rawValue:)](nsbordertype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Drawing the View’s Content

- [updateLayer()](nsview/updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.
- [draw(\_:)](nsview/draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [clipsToBounds](nsview/clipstobounds.md): A Boolean value that indicates whether the view, and its subviews, confine their drawing areas to the bounds of the view.
- [canDrawConcurrently](nsview/candrawconcurrently.md): A Boolean value indicating whether the view can draw its contents on a background thread.
- [visibleRect](nsview/visiblerect.md): The portion of the view that isn’t clipped by its superviews.
- [getRectsBeingDrawn(\_:count:)](nsview/getrectsbeingdrawn%28__count_%29.md): Returns by indirection a list of nonoverlapping rectangles that define the area the view is being asked to draw in [draw(\_:)](nsview/draw%28__%29.md).
- [needsToDraw(\_:)](nsview/needstodraw%28__%29.md): Returns a Boolean value indicating whether the specified rectangle intersects any part of the area that the view is being asked to draw.
- [wantsDefaultClipping](nsview/wantsdefaultclipping.md): A Boolean value indicating whether AppKit’s default clipping behavior is in effect.
- [bitmapImageRepForCachingDisplay(in:)](nsview/bitmapimagerepforcachingdisplay%28in_%29.md): Returns a bitmap-representation object suitable for caching the specified portion of the view.
- [cacheDisplay(in:to:)](nsview/cachedisplay%28in_to_%29.md): Draws the specified area of the view, and its descendants, into a provided bitmap-representation object.

# NSBorderType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants specify the type of a view’s border.

## Declaration

```objectivec
enum NSBorderType : NSUInteger;
```

## Topics

### Constants

- [NSBezelBorder](nsbordertype/bezelborder.md): A concave border that makes the view look sunken.
- [NSGrooveBorder](nsbordertype/grooveborder.md): A thin border that looks etched around the image.
- [NSLineBorder](nsbordertype/lineborder.md): A black line border around the view.
- [NSNoBorder](nsbordertype/noborder.md): No border.

## See Also

### Drawing the View’s Content

- [updateLayer](nsview/updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.
- [drawRect:](nsview/draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [clipsToBounds](nsview/clipstobounds.md): A Boolean value that indicates whether the view, and its subviews, confine their drawing areas to the bounds of the view.
- [canDrawConcurrently](nsview/candrawconcurrently.md): A Boolean value indicating whether the view can draw its contents on a background thread.
- [visibleRect](nsview/visiblerect.md): The portion of the view that isn’t clipped by its superviews.
- [getRectsBeingDrawn:count:](nsview/getrectsbeingdrawn%28__count_%29.md): Returns by indirection a list of nonoverlapping rectangles that define the area the view is being asked to draw in [drawRect:](nsview/draw%28__%29.md).
- [needsToDrawRect:](nsview/needstodraw%28__%29.md): Returns a Boolean value indicating whether the specified rectangle intersects any part of the area that the view is being asked to draw.
- [wantsDefaultClipping](nsview/wantsdefaultclipping.md): A Boolean value indicating whether AppKit’s default clipping behavior is in effect.
- [bitmapImageRepForCachingDisplayInRect:](nsview/bitmapimagerepforcachingdisplay%28in_%29.md): Returns a bitmap-representation object suitable for caching the specified portion of the view.
- [cacheDisplayInRect:toBitmapImageRep:](nsview/cachedisplay%28in_to_%29.md): Draws the specified area of the view, and its descendants, into a provided bitmap-representation object.
