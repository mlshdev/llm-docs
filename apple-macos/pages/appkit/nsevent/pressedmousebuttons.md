> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/pressedmousebuttons](https://developer.apple.com/documentation/appkit/nsevent/pressedmousebuttons)

# pressedMouseButtons (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

The indices of the currently pressed mouse buttons.

## Declaration

```swift
class var pressedMouseButtons: Int { get }
```

<a id="return-value"></a>

## Return Value

The indices of the currently depressed mouse buttons.

<a id="Discussion"></a>

## Discussion

A return value of `1 << 0` corresponds to the left mouse button, `1 << 1` corresponds to the right mouse button, `1<< n`, `n >=2` correspond to other mouse buttons.

This returns the state of devices combined with synthesized events at the moment, independent of which events have been delivered via the event stream, so this method is not suitable for tracking.

## See Also

### Getting mouse event information

- [doubleClickInterval](doubleclickinterval.md): The maximum number of seconds in which a second mouse click must occur for an event to be a double-click event.
- [mouseLocation](mouselocation.md): Reports the current mouse position in screen coordinates.
- [buttonNumber](buttonnumber.md): The button number for a mouse event.
- [clickCount](clickcount.md): The number of mouse clicks associated with a mouse-down or mouse-up event.
- [associatedEventsMask](associatedeventsmask.md): The associated events mask of a mouse event.

# pressedMouseButtons (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

The indices of the currently pressed mouse buttons.

## Declaration

```objectivec
@property (class, readonly) NSUInteger pressedMouseButtons;
```

<a id="return-value"></a>

## Return Value

The indices of the currently depressed mouse buttons.

<a id="Discussion"></a>

## Discussion

A return value of `1 << 0` corresponds to the left mouse button, `1 << 1` corresponds to the right mouse button, `1<< n`, `n >=2` correspond to other mouse buttons.

This returns the state of devices combined with synthesized events at the moment, independent of which events have been delivered via the event stream, so this method is not suitable for tracking.

## See Also

### Getting mouse event information

- [doubleClickInterval](doubleclickinterval.md): The maximum number of seconds in which a second mouse click must occur for an event to be a double-click event.
- [mouseLocation](mouselocation.md): Reports the current mouse position in screen coordinates.
- [buttonNumber](buttonnumber.md): The button number for a mouse event.
- [clickCount](clickcount.md): The number of mouse clicks associated with a mouse-down or mouse-up event.
- [associatedEventsMask](associatedeventsmask.md): The associated events mask of a mouse event.
