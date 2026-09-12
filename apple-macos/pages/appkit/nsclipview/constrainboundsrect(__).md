> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsclipview/constrainboundsrect(_:)](https://developer.apple.com/documentation/appkit/nsclipview/constrainboundsrect(_:))

# constrainBoundsRect(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Constrains the bounds of the clip view while the user is magnifying and scrolling.

## Declaration

```swift
func constrainBoundsRect(_ proposedBounds: NSRect) -> NSRect
```

## Parameters

- `proposedBounds`: The bounds to use to ensure that the view will still lie within its document view.

<a id="return-value"></a>

## Return Value

A bounds rectangle.

<a id="Discussion"></a>

## Discussion

Note that you can move an implementation of the deprecated [constrainScroll(\_:)](constrainscroll%28__%29.md) to this method by adjusting the origin of `proposedBounds` (instead of using the `newOrigin` parameter in `-constrainScrollPoint:`). To preserve compatibility, if a subclass overrides `-constrainScrollPoint:`, the default behavior of [constrainBoundsRect(\_:)](constrainboundsrect%28__%29.md) will be to use that `-constrainScrollPoint:` to adjust the origin of `proposedBounds`, and to not change the size.

## See Also

### Scrolling

- [scroll(to:)](scroll%28to_%29.md): Changes the origin of the clip view’s bounds rectangle to `newOrigin`.
- [autoscroll(with:)](autoscroll%28with_%29.md): Scrolls the clip view proportionally to `theEvent`’s distance outside of it.
- [constrainScroll(\_:)](constrainscroll%28__%29.md): Deprecated. Returns a scroll point adjusted from the proposed new origin, if necessary, to guarantee the view will lie within its document view.

# constrainBoundsRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Constrains the bounds of the clip view while the user is magnifying and scrolling.

## Declaration

```objectivec
- (NSRect) constrainBoundsRect:(NSRect) proposedBounds;
```

## Parameters

- `proposedBounds`: The bounds to use to ensure that the view will still lie within its document view.

<a id="return-value"></a>

## Return Value

A bounds rectangle.

<a id="Discussion"></a>

## Discussion

Note that you can move an implementation of the deprecated [constrainScrollPoint:](constrainscroll%28__%29.md) to this method by adjusting the origin of `proposedBounds` (instead of using the `newOrigin` parameter in `-constrainScrollPoint:`). To preserve compatibility, if a subclass overrides `-constrainScrollPoint:`, the default behavior of [constrainBoundsRect:](constrainboundsrect%28__%29.md) will be to use that `-constrainScrollPoint:` to adjust the origin of `proposedBounds`, and to not change the size.

## See Also

### Scrolling

- [scrollToPoint:](scroll%28to_%29.md): Changes the origin of the clip view’s bounds rectangle to `newOrigin`.
- [autoscroll:](autoscroll%28with_%29.md): Scrolls the clip view proportionally to `theEvent`’s distance outside of it.
- [constrainScrollPoint:](constrainscroll%28__%29.md): Deprecated. Returns a scroll point adjusted from the proposed new origin, if necessary, to guarantee the view will lie within its document view.
