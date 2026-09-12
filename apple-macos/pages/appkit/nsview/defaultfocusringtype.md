> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/defaultfocusringtype](https://developer.apple.com/documentation/appkit/nsview/defaultfocusringtype)

# defaultFocusRingType (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the default focus ring type.

## Declaration

```swift
class var defaultFocusRingType: NSFocusRingType { get }
```

<a id="return-value"></a>

## Return Value

The default type of focus ring for objects of the view’s class. Possible return values are listed in [NSFocusRingType](../nsfocusringtype.md).

<a id="Discussion"></a>

## Discussion

If the value in the [focusRingType](focusringtype.md) property is [NSFocusRingType.default](../nsfocusringtype/default.md), the view can call this class method to find out what type of focus ring is the default. The view is free to ignore the default setting.

## See Also

### Drawing the Focus Ring

- [focusRingType](focusringtype.md): The type of focus ring drawn around the view.
- [focusRingMaskBounds](focusringmaskbounds.md): The focus ring mask bounds, specified in the view’s coordinate space.
- [drawFocusRingMask()](drawfocusringmask%28%29.md): Draws the focus ring mask for the view.
- [noteFocusRingMaskChanged()](notefocusringmaskchanged%28%29.md): Invoked to notify the view that the focus ring mask requires updating.
- [setKeyboardFocusRingNeedsDisplay(\_:)](setkeyboardfocusringneedsdisplay%28__%29.md): Invalidates the area around the focus ring.

# defaultFocusRingType (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the default focus ring type.

## Declaration

```objectivec
@property (class, readonly) NSFocusRingType defaultFocusRingType;
```

<a id="return-value"></a>

## Return Value

The default type of focus ring for objects of the view’s class. Possible return values are listed in [NSFocusRingType](../nsfocusringtype.md).

<a id="Discussion"></a>

## Discussion

If the value in the [focusRingType](focusringtype.md) property is [NSFocusRingTypeDefault](../nsfocusringtype/default.md), the view can call this class method to find out what type of focus ring is the default. The view is free to ignore the default setting.

## See Also

### Drawing the Focus Ring

- [focusRingType](focusringtype.md): The type of focus ring drawn around the view.
- [focusRingMaskBounds](focusringmaskbounds.md): The focus ring mask bounds, specified in the view’s coordinate space.
- [drawFocusRingMask](drawfocusringmask%28%29.md): Draws the focus ring mask for the view.
- [noteFocusRingMaskChanged](notefocusringmaskchanged%28%29.md): Invoked to notify the view that the focus ring mask requires updating.
- [setKeyboardFocusRingNeedsDisplayInRect:](setkeyboardfocusringneedsdisplay%28__%29.md): Invalidates the area around the focus ring.
