> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/focusringtype](https://developer.apple.com/documentation/appkit/nscell/focusringtype)

# focusRingType (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The type of focus ring to use with the associated view.

## Declaration

```swift
var focusRingType: NSFocusRingType { get set }
```

<a id="Discussion"></a>

## Discussion

You can disable a view’s focus ring drawing by setting this property to [NSFocusRingType.none](../nsfocusringtype/none.md). The only times you should disable focus ring drawing are when you want to draw your own focus ring or when there is insufficient space to display a focus ring in the default location.

## See Also

### Managing Focus Rings

- [drawFocusRingMask(withFrame:in:)](drawfocusringmask%28withframe_in_%29.md): Draws the focus ring for the control.
- [focusRingMaskBounds(forFrame:in:)](focusringmaskbounds%28forframe_in_%29.md): Returns the bounds of the focus ring mask.
- [defaultFocusRingType](defaultfocusringtype.md): Returns the default type of focus ring for the receiver.

# focusRingType (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The type of focus ring to use with the associated view.

## Declaration

```objectivec
@property NSFocusRingType focusRingType;
```

<a id="Discussion"></a>

## Discussion

You can disable a view’s focus ring drawing by setting this property to [NSFocusRingTypeNone](../nsfocusringtype/none.md). The only times you should disable focus ring drawing are when you want to draw your own focus ring or when there is insufficient space to display a focus ring in the default location.

## See Also

### Managing Focus Rings

- [drawFocusRingMaskWithFrame:inView:](drawfocusringmask%28withframe_in_%29.md): Draws the focus ring for the control.
- [focusRingMaskBoundsForFrame:inView:](focusringmaskbounds%28forframe_in_%29.md): Returns the bounds of the focus ring mask.
- [defaultFocusRingType](defaultfocusringtype.md): Returns the default type of focus ring for the receiver.
