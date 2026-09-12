> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/buttonnumber](https://developer.apple.com/documentation/appkit/nsevent/buttonnumber)

# buttonNumber (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The button number for a mouse event.

## Declaration

```swift
var buttonNumber: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property is intended for use with the `NSOtherMouseDown`, `NSOtherMouseUp`, and `NSOtherMouseDragged` events, but will return values for `NSLeftMouse...` and `NSRightMouse...` events also. If this event is not a mouse event, the property is set to `0`.

## See Also

### Getting mouse event information

- [pressedMouseButtons](pressedmousebuttons.md): The indices of the currently pressed mouse buttons.
- [doubleClickInterval](doubleclickinterval.md): The maximum number of seconds in which a second mouse click must occur for an event to be a double-click event.
- [mouseLocation](mouselocation.md): Reports the current mouse position in screen coordinates.
- [clickCount](clickcount.md): The number of mouse clicks associated with a mouse-down or mouse-up event.
- [associatedEventsMask](associatedeventsmask.md): The associated events mask of a mouse event.

# buttonNumber (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The button number for a mouse event.

## Declaration

```objectivec
@property (readonly) NSInteger buttonNumber;
```

<a id="Discussion"></a>

## Discussion

This property is intended for use with the `NSOtherMouseDown`, `NSOtherMouseUp`, and `NSOtherMouseDragged` events, but will return values for `NSLeftMouse...` and `NSRightMouse...` events also. If this event is not a mouse event, the property is set to `0`.

## See Also

### Getting mouse event information

- [pressedMouseButtons](pressedmousebuttons.md): The indices of the currently pressed mouse buttons.
- [doubleClickInterval](doubleclickinterval.md): The maximum number of seconds in which a second mouse click must occur for an event to be a double-click event.
- [mouseLocation](mouselocation.md): Reports the current mouse position in screen coordinates.
- [clickCount](clickcount.md): The number of mouse clicks associated with a mouse-down or mouse-up event.
- [associatedEventsMask](associatedeventsmask.md): The associated events mask of a mouse event.
