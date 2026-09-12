> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/iscompatiblewithresponsivescrolling](https://developer.apple.com/documentation/appkit/nsview/iscompatiblewithresponsivescrolling)

# isCompatibleWithResponsiveScrolling (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+

A Boolean value that indicates whether views support responsive scrolling.

## Declaration

```swift
class var isCompatibleWithResponsiveScrolling: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the view class supports responsive scrolling. AppKit enables responsive scrolling when the views involved in scrolling—the [NSScrollView](../nsscrollview.md), [NSClipView](../nsclipview.md), and embedded document view—all have this property set to [true](https://developer.apple.com/documentation/swift/true). If you want to opt out of responsive scrolling, override this property and set it to [false](https://developer.apple.com/documentation/swift/false).

[NSScrollView](../nsscrollview.md), [NSClipView](../nsclipview.md), and other view subclasses override this property and perform additional checks.

## See Also

### Scrolling the View

- [prepareContent(in:)](preparecontent%28in_%29.md): Prepares the overdraw region for drawing.
- [preparedContentRect](preparedcontentrect.md): The portion of the view that has been rendered and is available for responsive scrolling.
- [scroll(\_:)](scroll%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object so a point in the view lies at the origin of the clip view’s bounds rectangle.
- [scrollToVisible(\_:)](scrolltovisible%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object the minimum distance needed so a specified region of the view becomes visible in the clip view.
- [autoscroll(with:)](autoscroll%28with_%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object proportionally to the distance of an event that occurs outside of it.
- [adjustScroll(\_:)](adjustscroll%28__%29.md): Overridden by subclasses to modify a given rectangle, returning the altered rectangle.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.
- [scroll(\_:to:)](scroll%28__to_%29.md): Notifies the superview of a clip view that the clip view needs to reset the origin of its bounds rectangle.
- [reflectScrolledClipView(\_:)](reflectscrolledclipview%28__%29.md): Notifies a clip view’s superview that either the clip view’s bounds rectangle or the document view’s frame rectangle has changed, and that any indicators of the scroll position need to be adjusted.

# compatibleWithResponsiveScrolling (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+

A Boolean value that indicates whether views support responsive scrolling.

## Declaration

```objectivec
@property (class, readonly, getter=isCompatibleWithResponsiveScrolling) BOOL compatibleWithResponsiveScrolling;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the view class supports responsive scrolling. AppKit enables responsive scrolling when the views involved in scrolling—the [NSScrollView](../nsscrollview.md), [NSClipView](../nsclipview.md), and embedded document view—all have this property set to [true](https://developer.apple.com/documentation/swift/true). If you want to opt out of responsive scrolling, override this property and set it to [false](https://developer.apple.com/documentation/swift/false).

[NSScrollView](../nsscrollview.md), [NSClipView](../nsclipview.md), and other view subclasses override this property and perform additional checks.

## See Also

### Scrolling the View

- [prepareContentInRect:](preparecontent%28in_%29.md): Prepares the overdraw region for drawing.
- [preparedContentRect](preparedcontentrect.md): The portion of the view that has been rendered and is available for responsive scrolling.
- [scrollPoint:](scroll%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object so a point in the view lies at the origin of the clip view’s bounds rectangle.
- [scrollRectToVisible:](scrolltovisible%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object the minimum distance needed so a specified region of the view becomes visible in the clip view.
- [autoscroll:](autoscroll%28with_%29.md): Scrolls the view’s closest ancestor [NSClipView](../nsclipview.md) object proportionally to the distance of an event that occurs outside of it.
- [adjustScroll:](adjustscroll%28__%29.md): Overridden by subclasses to modify a given rectangle, returning the altered rectangle.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.
- [scrollClipView:toPoint:](scroll%28__to_%29.md): Notifies the superview of a clip view that the clip view needs to reset the origin of its bounds rectangle.
- [reflectScrolledClipView:](reflectscrolledclipview%28__%29.md): Notifies a clip view’s superview that either the clip view’s bounds rectangle or the document view’s frame rectangle has changed, and that any indicators of the scroll position need to be adjusted.
