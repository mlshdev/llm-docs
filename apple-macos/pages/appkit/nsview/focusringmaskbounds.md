> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/focusringmaskbounds](https://developer.apple.com/documentation/appkit/nsview/focusringmaskbounds)

# focusRingMaskBounds (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The focus ring mask bounds, specified in the view’s coordinate space.

## Declaration

```swift
var focusRingMaskBounds: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

The rectangle in this property is specified relative to the view’s interior (bounds) coordinate space. The mask bounds allows the focus ring’s overall size and position to be determined before it is drawn. Override this property if your view requires the display of a focus ring. The default value of this property is [NSZeroRect](https://developer.apple.com/documentation/foundation/nszerorect).

> **Note**

>  The information provided by this property enables Accessibility to identify selected subelements for zoom tracking, so it is important that this method provide a reasonably tight bounding box and that the [noteFocusRingMaskChanged()](notefocusringmaskchanged%28%29.md) method is called as described.

## See Also

### Drawing the Focus Ring

- [focusRingType](focusringtype.md): The type of focus ring drawn around the view.
- [drawFocusRingMask()](drawfocusringmask%28%29.md): Draws the focus ring mask for the view.
- [noteFocusRingMaskChanged()](notefocusringmaskchanged%28%29.md): Invoked to notify the view that the focus ring mask requires updating.
- [setKeyboardFocusRingNeedsDisplay(\_:)](setkeyboardfocusringneedsdisplay%28__%29.md): Invalidates the area around the focus ring.
- [defaultFocusRingType](defaultfocusringtype.md): Returns the default focus ring type.

# focusRingMaskBounds (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The focus ring mask bounds, specified in the view’s coordinate space.

## Declaration

```objectivec
@property (readonly) NSRect focusRingMaskBounds;
```

<a id="Discussion"></a>

## Discussion

The rectangle in this property is specified relative to the view’s interior (bounds) coordinate space. The mask bounds allows the focus ring’s overall size and position to be determined before it is drawn. Override this property if your view requires the display of a focus ring. The default value of this property is [NSZeroRect](https://developer.apple.com/documentation/foundation/nszerorect).

> **Note**

>  The information provided by this property enables Accessibility to identify selected subelements for zoom tracking, so it is important that this method provide a reasonably tight bounding box and that the [noteFocusRingMaskChanged](notefocusringmaskchanged%28%29.md) method is called as described.

## See Also

### Drawing the Focus Ring

- [focusRingType](focusringtype.md): The type of focus ring drawn around the view.
- [drawFocusRingMask](drawfocusringmask%28%29.md): Draws the focus ring mask for the view.
- [noteFocusRingMaskChanged](notefocusringmaskchanged%28%29.md): Invoked to notify the view that the focus ring mask requires updating.
- [setKeyboardFocusRingNeedsDisplayInRect:](setkeyboardfocusringneedsdisplay%28__%29.md): Invalidates the area around the focus ring.
- [defaultFocusRingType](defaultfocusringtype.md): Returns the default focus ring type.
