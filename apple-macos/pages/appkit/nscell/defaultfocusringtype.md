> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscell/defaultfocusringtype

# defaultFocusRingType (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the default type of focus ring for the receiver.

## Declaration

```swift
class var defaultFocusRingType: NSFocusRingType { get }
```

<a id="return-value"></a>

## Return Value

The default type of focus ring for the receiver (one of the values listed in [NSFocusRingType](../nsfocusringtype.md)).

## See Also

### Managing Focus Rings

- [drawFocusRingMask(withFrame:in:)](drawfocusringmask%28withframe_in_%29.md): Draws the focus ring for the control.
- [focusRingMaskBounds(forFrame:in:)](focusringmaskbounds%28forframe_in_%29.md): Returns the bounds of the focus ring mask.
- [focusRingType](focusringtype.md): The type of focus ring to use with the associated view.

# defaultFocusRingType (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the default type of focus ring for the receiver.

## Declaration

```objectivec
@property (class, readonly) NSFocusRingType defaultFocusRingType;
```

<a id="return-value"></a>

## Return Value

The default type of focus ring for the receiver (one of the values listed in [NSFocusRingType](../nsfocusringtype.md)).

## See Also

### Managing Focus Rings

- [drawFocusRingMaskWithFrame:inView:](drawfocusringmask%28withframe_in_%29.md): Draws the focus ring for the control.
- [focusRingMaskBoundsForFrame:inView:](focusringmaskbounds%28forframe_in_%29.md): Returns the bounds of the focus ring mask.
- [focusRingType](focusringtype.md): The type of focus ring to use with the associated view.
