> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/focusringtype](https://developer.apple.com/documentation/appkit/nsview/focusringtype)

# focusRingType (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The type of focus ring drawn around the view.

## Declaration

```swift
var focusRingType: NSFocusRingType { get set }
```

<a id="return-value"></a>

## Return Value

An `enum` constant identifying a type of focus ring. Possible values are listed in [NSFocusRingType](../nsfocusringtype.md).

<a id="Discussion"></a>

## Discussion

Use this property to specify the type of focus ring to draw. For a list of possible values, see [NSFocusRingType](../nsfocusringtype.md).

To disable drawing of a view’s focus ring, set the value of this property to [NSFocusRingType.none](../nsfocusringtype/none.md). You should only disable the default drawing of a view’s focus ring when you want the view to draw its own focus ring. For example, you might disable focus ring drawing when the view uses its background color to indicate focus or when the view does not have sufficient space to display a focus ring.

Changing the value in this property does not cause the view to draw the actual focus ring. You are responsible for drawing the focus ring in your view’s [draw(\_:)](draw%28__%29.md) method whenever your view is made the first responder.

To ensure the correct redrawing of focus rings, note that AppKit may automatically draw parts of a window in addition to those that are marked as needing display. For example, AppKit may redraw parts of the first responder view in an app’s key window, if that view’s [focusRingType](focusringtype.md) property is set to a value other than [NSFocusRingType.none](../nsfocusringtype/none.md). If your view can become first responder, but doesn’t draw a focus ring, set [focusRingType](focusringtype.md) to [NSFocusRingType.none](../nsfocusringtype/none.md) to prevent AppKit from unnecessarily redrawing the view’s focus ring.

## See Also

### Drawing the Focus Ring

- [focusRingMaskBounds](focusringmaskbounds.md): The focus ring mask bounds, specified in the view’s coordinate space.
- [drawFocusRingMask()](drawfocusringmask%28%29.md): Draws the focus ring mask for the view.
- [noteFocusRingMaskChanged()](notefocusringmaskchanged%28%29.md): Invoked to notify the view that the focus ring mask requires updating.
- [setKeyboardFocusRingNeedsDisplay(\_:)](setkeyboardfocusringneedsdisplay%28__%29.md): Invalidates the area around the focus ring.
- [defaultFocusRingType](defaultfocusringtype.md): Returns the default focus ring type.

# focusRingType (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The type of focus ring drawn around the view.

## Declaration

```objectivec
@property NSFocusRingType focusRingType;
```

<a id="return-value"></a>

## Return Value

An `enum` constant identifying a type of focus ring. Possible values are listed in [NSFocusRingType](../nsfocusringtype.md).

<a id="Discussion"></a>

## Discussion

Use this property to specify the type of focus ring to draw. For a list of possible values, see [NSFocusRingType](../nsfocusringtype.md).

To disable drawing of a view’s focus ring, set the value of this property to [NSFocusRingTypeNone](../nsfocusringtype/none.md). You should only disable the default drawing of a view’s focus ring when you want the view to draw its own focus ring. For example, you might disable focus ring drawing when the view uses its background color to indicate focus or when the view does not have sufficient space to display a focus ring.

Changing the value in this property does not cause the view to draw the actual focus ring. You are responsible for drawing the focus ring in your view’s [drawRect:](draw%28__%29.md) method whenever your view is made the first responder.

To ensure the correct redrawing of focus rings, note that AppKit may automatically draw parts of a window in addition to those that are marked as needing display. For example, AppKit may redraw parts of the first responder view in an app’s key window, if that view’s [focusRingType](focusringtype.md) property is set to a value other than [NSFocusRingTypeNone](../nsfocusringtype/none.md). If your view can become first responder, but doesn’t draw a focus ring, set [focusRingType](focusringtype.md) to [NSFocusRingTypeNone](../nsfocusringtype/none.md) to prevent AppKit from unnecessarily redrawing the view’s focus ring.

## See Also

### Drawing the Focus Ring

- [focusRingMaskBounds](focusringmaskbounds.md): The focus ring mask bounds, specified in the view’s coordinate space.
- [drawFocusRingMask](drawfocusringmask%28%29.md): Draws the focus ring mask for the view.
- [noteFocusRingMaskChanged](notefocusringmaskchanged%28%29.md): Invoked to notify the view that the focus ring mask requires updating.
- [setKeyboardFocusRingNeedsDisplayInRect:](setkeyboardfocusringneedsdisplay%28__%29.md): Invalidates the area around the focus ring.
- [defaultFocusRingType](defaultfocusringtype.md): Returns the default focus ring type.
