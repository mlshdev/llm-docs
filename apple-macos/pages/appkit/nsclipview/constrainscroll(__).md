> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsclipview/constrainscroll(_:)](https://developer.apple.com/documentation/appkit/nsclipview/constrainscroll(_:))

# constrainScroll(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns a scroll point adjusted from the proposed new origin, if necessary, to guarantee the view will lie within its document view.

> Use [constrainBoundsRect(\_:)](constrainboundsrect%28__%29.md) instead.

## Declaration

```swift
func constrainScroll(_ newOrigin: NSPoint) -> NSPoint
```

## Parameters

- `newOrigin`: Origin proposed.

<a id="return-value"></a>

## Return Value

A point which will guarantee the view will lie within its document view.

<a id="Discussion"></a>

## Discussion

For example, if the x-coordinate of `newOrigin` lies to the left of the document view’s origin, then the x-coordinate returned is set to that of the x-coordinate of the document view’s origin.

## See Also

### Scrolling

- [scroll(to:)](scroll%28to_%29.md): Changes the origin of the clip view’s bounds rectangle to `newOrigin`.
- [autoscroll(with:)](autoscroll%28with_%29.md): Scrolls the clip view proportionally to `theEvent`’s distance outside of it.
- [constrainBoundsRect(\_:)](constrainboundsrect%28__%29.md): Constrains the bounds of the clip view while the user is magnifying and scrolling.

# constrainScrollPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Returns a scroll point adjusted from the proposed new origin, if necessary, to guarantee the view will lie within its document view.

> Use [constrainBoundsRect:](constrainboundsrect%28__%29.md) instead.

## Declaration

```objectivec
- (NSPoint) constrainScrollPoint:(NSPoint) newOrigin;
```

## Parameters

- `newOrigin`: Origin proposed.

<a id="return-value"></a>

## Return Value

A point which will guarantee the view will lie within its document view.

<a id="Discussion"></a>

## Discussion

For example, if the x-coordinate of `newOrigin` lies to the left of the document view’s origin, then the x-coordinate returned is set to that of the x-coordinate of the document view’s origin.

## See Also

### Scrolling

- [scrollToPoint:](scroll%28to_%29.md): Changes the origin of the clip view’s bounds rectangle to `newOrigin`.
- [autoscroll:](autoscroll%28with_%29.md): Scrolls the clip view proportionally to `theEvent`’s distance outside of it.
- [constrainBoundsRect:](constrainboundsrect%28__%29.md): Constrains the bounds of the clip view while the user is magnifying and scrolling.
