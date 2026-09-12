> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/scrollerstyle](https://developer.apple.com/documentation/appkit/nsscrollview/scrollerstyle)

# scrollerStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The scroller style used by the scroll view.

## Declaration

```swift
var scrollerStyle: NSScroller.Style { get set }
```

<a id="Discussion"></a>

## Discussion

See [NSScroller.Style](../nsscroller/style.md) for possible values.

This setting is automatically set at runtime, based on the user’s preference setting and, if relevant, the set of connected pointing devices and their configured scroll capabilities, as determined by the [NSScroller](../nsscroller.md) method [preferredScrollerStyle](../nsscroller/preferredscrollerstyle.md).

Setting an scroll view’s scroller style sets the style of both the horizontal and vertical scrollers.  If the scroll view subsequently creates or is assigned a new horizontal or vertical scroller, they are assigned the same scroller style assigned to the scroll view.

## See Also

### Scroller Style

- [scrollerKnobStyle](scrollerknobstyle.md): The knob style of scroll views that use the overlay scroller style.

# scrollerStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The scroller style used by the scroll view.

## Declaration

```objectivec
@property NSScrollerStyle scrollerStyle;
```

<a id="Discussion"></a>

## Discussion

See [NSScrollerStyle](../nsscroller/style.md) for possible values.

This setting is automatically set at runtime, based on the user’s preference setting and, if relevant, the set of connected pointing devices and their configured scroll capabilities, as determined by the [NSScroller](../nsscroller.md) method [preferredScrollerStyle](../nsscroller/preferredscrollerstyle.md).

Setting an scroll view’s scroller style sets the style of both the horizontal and vertical scrollers.  If the scroll view subsequently creates or is assigned a new horizontal or vertical scroller, they are assigned the same scroller style assigned to the scroll view.

## See Also

### Scroller Style

- [scrollerKnobStyle](scrollerknobstyle.md): The knob style of scroll views that use the overlay scroller style.
