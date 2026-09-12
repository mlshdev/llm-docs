> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/setkeyboardfocusringneedsdisplay(_:)](https://developer.apple.com/documentation/appkit/nsview/setkeyboardfocusringneedsdisplay(_:))

# setKeyboardFocusRingNeedsDisplay(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invalidates the area around the focus ring.

## Declaration

```swift
func setKeyboardFocusRingNeedsDisplay(_ rect: NSRect)
```

## Parameters

- `rect`: The rectangle of the control or cell defining the area around the focus ring. `rect` will be expanded to include the focus ring for invalidation.

## See Also

### Drawing the Focus Ring

- [focusRingType](focusringtype.md): The type of focus ring drawn around the view.
- [focusRingMaskBounds](focusringmaskbounds.md): The focus ring mask bounds, specified in the view’s coordinate space.
- [drawFocusRingMask()](drawfocusringmask%28%29.md): Draws the focus ring mask for the view.
- [noteFocusRingMaskChanged()](notefocusringmaskchanged%28%29.md): Invoked to notify the view that the focus ring mask requires updating.
- [defaultFocusRingType](defaultfocusringtype.md): Returns the default focus ring type.

# setKeyboardFocusRingNeedsDisplayInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invalidates the area around the focus ring.

## Declaration

```objectivec
- (void) setKeyboardFocusRingNeedsDisplayInRect:(NSRect) rect;
```

## Parameters

- `rect`: The rectangle of the control or cell defining the area around the focus ring. `rect` will be expanded to include the focus ring for invalidation.

## See Also

### Drawing the Focus Ring

- [focusRingType](focusringtype.md): The type of focus ring drawn around the view.
- [focusRingMaskBounds](focusringmaskbounds.md): The focus ring mask bounds, specified in the view’s coordinate space.
- [drawFocusRingMask](drawfocusringmask%28%29.md): Draws the focus ring mask for the view.
- [noteFocusRingMaskChanged](notefocusringmaskchanged%28%29.md): Invoked to notify the view that the focus ring mask requires updating.
- [defaultFocusRingType](defaultfocusringtype.md): Returns the default focus ring type.
