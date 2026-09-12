> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/drawfocusringmask()](https://developer.apple.com/documentation/appkit/nsview/drawfocusringmask())

# drawFocusRingMask() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Draws the focus ring mask for the view.

## Declaration

```swift
func drawFocusRingMask()
```

<a id="Discussion"></a>

## Discussion

This method provides the shape of the focus ring mask by drawing the focus ring mask. An implementation of this method should draw in the view’s interior (bounds) coordinate space, that the focus ring style has been set (it will be set it to [NSFocusRingPlacement.only](../nsfocusringplacement/only.md) to capture the focus ring itself), and that the fill and stroke colors have been set to an arbitrary fully opaque color.

Subclasses that find the default behavior insufficient should only draw the focus ring shape.

The `NSView` implementation of this method simply fills `[self bounds]`.

## See Also

### Drawing the Focus Ring

- [focusRingType](focusringtype.md): The type of focus ring drawn around the view.
- [focusRingMaskBounds](focusringmaskbounds.md): The focus ring mask bounds, specified in the view’s coordinate space.
- [noteFocusRingMaskChanged()](notefocusringmaskchanged%28%29.md): Invoked to notify the view that the focus ring mask requires updating.
- [setKeyboardFocusRingNeedsDisplay(\_:)](setkeyboardfocusringneedsdisplay%28__%29.md): Invalidates the area around the focus ring.
- [defaultFocusRingType](defaultfocusringtype.md): Returns the default focus ring type.

# drawFocusRingMask (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Draws the focus ring mask for the view.

## Declaration

```objectivec
- (void) drawFocusRingMask;
```

<a id="Discussion"></a>

## Discussion

This method provides the shape of the focus ring mask by drawing the focus ring mask. An implementation of this method should draw in the view’s interior (bounds) coordinate space, that the focus ring style has been set (it will be set it to [NSFocusRingOnly](../nsfocusringplacement/only.md) to capture the focus ring itself), and that the fill and stroke colors have been set to an arbitrary fully opaque color.

Subclasses that find the default behavior insufficient should only draw the focus ring shape.

The `NSView` implementation of this method simply fills `[self bounds]`.

## See Also

### Drawing the Focus Ring

- [focusRingType](focusringtype.md): The type of focus ring drawn around the view.
- [focusRingMaskBounds](focusringmaskbounds.md): The focus ring mask bounds, specified in the view’s coordinate space.
- [noteFocusRingMaskChanged](notefocusringmaskchanged%28%29.md): Invoked to notify the view that the focus ring mask requires updating.
- [setKeyboardFocusRingNeedsDisplayInRect:](setkeyboardfocusringneedsdisplay%28__%29.md): Invalidates the area around the focus ring.
- [defaultFocusRingType](defaultfocusringtype.md): Returns the default focus ring type.
