> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsclipview/scroll(to:)](https://developer.apple.com/documentation/appkit/nsclipview/scroll(to:))

# scroll(to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Changes the origin of the clip view’s bounds rectangle to `newOrigin`.

## Declaration

```swift
func scroll(to newOrigin: NSPoint)
```

## See Also

### Scrolling

- [autoscroll(with:)](autoscroll%28with_%29.md): Scrolls the clip view proportionally to `theEvent`’s distance outside of it.
- [constrainScroll(\_:)](constrainscroll%28__%29.md): Deprecated. Returns a scroll point adjusted from the proposed new origin, if necessary, to guarantee the view will lie within its document view.
- [constrainBoundsRect(\_:)](constrainboundsrect%28__%29.md): Constrains the bounds of the clip view while the user is magnifying and scrolling.

# scrollToPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Changes the origin of the clip view’s bounds rectangle to `newOrigin`.

## Declaration

```objectivec
- (void) scrollToPoint:(NSPoint) newOrigin;
```

## See Also

### Scrolling

- [autoscroll:](autoscroll%28with_%29.md): Scrolls the clip view proportionally to `theEvent`’s distance outside of it.
- [constrainScrollPoint:](constrainscroll%28__%29.md): Deprecated. Returns a scroll point adjusted from the proposed new origin, if necessary, to guarantee the view will lie within its document view.
- [constrainBoundsRect:](constrainboundsrect%28__%29.md): Constrains the bounds of the clip view while the user is magnifying and scrolling.
