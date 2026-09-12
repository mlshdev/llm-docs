> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/notefocusringmaskchanged()](https://developer.apple.com/documentation/appkit/nsview/notefocusringmaskchanged())

# noteFocusRingMaskChanged() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invoked to notify the view that the focus ring mask requires updating.

## Declaration

```swift
func noteFocusRingMaskChanged()
```

<a id="Discussion"></a>

## Discussion

It is important to note that it is only necessary for developers to invoke this method when some internal state change of their application, that AppKit can’t determine, affects the shape of the focus ring mask.

It is assumed that if the view is marked as needing display, or is resized, its focus ring shape is likely to have changed, and there is no need for clients to explicitly send this message in such cases, they are handled automatically.

If, however, a view is showing a focus ring around some part of its content (an `NSImage`, perhaps), and that content changes, the client must provide notification by invoking this method so that [focusRingMaskBounds](focusringmaskbounds.md) and [drawFocusRingMask()](drawfocusringmask%28%29.md) will be invoked to redraw the focus ring.

## See Also

### Drawing the Focus Ring

- [focusRingType](focusringtype.md): The type of focus ring drawn around the view.
- [focusRingMaskBounds](focusringmaskbounds.md): The focus ring mask bounds, specified in the view’s coordinate space.
- [drawFocusRingMask()](drawfocusringmask%28%29.md): Draws the focus ring mask for the view.
- [setKeyboardFocusRingNeedsDisplay(\_:)](setkeyboardfocusringneedsdisplay%28__%29.md): Invalidates the area around the focus ring.
- [defaultFocusRingType](defaultfocusringtype.md): Returns the default focus ring type.

# noteFocusRingMaskChanged (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invoked to notify the view that the focus ring mask requires updating.

## Declaration

```objectivec
- (void) noteFocusRingMaskChanged;
```

<a id="Discussion"></a>

## Discussion

It is important to note that it is only necessary for developers to invoke this method when some internal state change of their application, that AppKit can’t determine, affects the shape of the focus ring mask.

It is assumed that if the view is marked as needing display, or is resized, its focus ring shape is likely to have changed, and there is no need for clients to explicitly send this message in such cases, they are handled automatically.

If, however, a view is showing a focus ring around some part of its content (an `NSImage`, perhaps), and that content changes, the client must provide notification by invoking this method so that [focusRingMaskBounds](focusringmaskbounds.md) and [drawFocusRingMask](drawfocusringmask%28%29.md) will be invoked to redraw the focus ring.

## See Also

### Drawing the Focus Ring

- [focusRingType](focusringtype.md): The type of focus ring drawn around the view.
- [focusRingMaskBounds](focusringmaskbounds.md): The focus ring mask bounds, specified in the view’s coordinate space.
- [drawFocusRingMask](drawfocusringmask%28%29.md): Draws the focus ring mask for the view.
- [setKeyboardFocusRingNeedsDisplayInRect:](setkeyboardfocusringneedsdisplay%28__%29.md): Invalidates the area around the focus ring.
- [defaultFocusRingType](defaultfocusringtype.md): Returns the default focus ring type.
