> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsclipview/autoscroll(with:)](https://developer.apple.com/documentation/appkit/nsclipview/autoscroll(with:))

# autoscroll(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Scrolls the clip view proportionally to `theEvent`’s distance outside of it.

## Declaration

```swift
func autoscroll(with event: NSEvent) -> Bool
```

<a id="Discussion"></a>

## Discussion

`theEvent`‘s location should be expressed in the window’s base coordinate system (which it normally is), not the receiving [NSClipView](../nsclipview.md). Returns [true](https://developer.apple.com/documentation/swift/true) if any scrolling is performed; otherwise returns [false](https://developer.apple.com/documentation/swift/false).

Never invoke this method directly; instead, the [NSScrollView](../nsscrollview.md)’s document view should repeatedly send itself [autoscroll(with:)](../nsview/autoscroll%28with_%29.md) messages when the pointer is dragged outside the [NSScrollView](../nsscrollview.md)‘s frame during a modal event loop initiated by a mouse-down event. The [NSView](../nsview.md) class implements [autoscroll(with:)](../nsview/autoscroll%28with_%29.md) to forward the message to the receiver’s superview; thus the message is ultimately forwarded to the [NSClipView](../nsclipview.md).

## See Also

### Scrolling

- [scroll(to:)](scroll%28to_%29.md): Changes the origin of the clip view’s bounds rectangle to `newOrigin`.
- [constrainScroll(\_:)](constrainscroll%28__%29.md): Deprecated. Returns a scroll point adjusted from the proposed new origin, if necessary, to guarantee the view will lie within its document view.
- [constrainBoundsRect(\_:)](constrainboundsrect%28__%29.md): Constrains the bounds of the clip view while the user is magnifying and scrolling.

# autoscroll: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Scrolls the clip view proportionally to `theEvent`’s distance outside of it.

## Declaration

```objectivec
- (BOOL) autoscroll:(NSEvent *) event;
```

<a id="Discussion"></a>

## Discussion

`theEvent`‘s location should be expressed in the window’s base coordinate system (which it normally is), not the receiving [NSClipView](../nsclipview.md). Returns [true](https://developer.apple.com/documentation/swift/true) if any scrolling is performed; otherwise returns [false](https://developer.apple.com/documentation/swift/false).

Never invoke this method directly; instead, the [NSScrollView](../nsscrollview.md)’s document view should repeatedly send itself [autoscroll:](../nsview/autoscroll%28with_%29.md) messages when the pointer is dragged outside the [NSScrollView](../nsscrollview.md)‘s frame during a modal event loop initiated by a mouse-down event. The [NSView](../nsview.md) class implements [autoscroll:](../nsview/autoscroll%28with_%29.md) to forward the message to the receiver’s superview; thus the message is ultimately forwarded to the [NSClipView](../nsclipview.md).

## See Also

### Scrolling

- [scrollToPoint:](scroll%28to_%29.md): Changes the origin of the clip view’s bounds rectangle to `newOrigin`.
- [constrainScrollPoint:](constrainscroll%28__%29.md): Deprecated. Returns a scroll point adjusted from the proposed new origin, if necessary, to guarantee the view will lie within its document view.
- [constrainBoundsRect:](constrainboundsrect%28__%29.md): Constrains the bounds of the clip view while the user is magnifying and scrolling.
