> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/mouselocation](https://developer.apple.com/documentation/appkit/nsevent/mouselocation)

# mouseLocation (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Reports the current mouse position in screen coordinates.

## Declaration

```swift
class var mouseLocation: NSPoint { get }
```

<a id="return-value"></a>

## Return Value

The current mouse location in screen coordinates.

<a id="Discussion"></a>

## Discussion

This method is similar to the [mouseLocationOutsideOfEventStream](../nswindow/mouselocationoutsideofeventstream.md) method of [NSWindow](../nswindow.md). It returns the location regardless of the current event or pending events. The difference between these methods is that [mouseLocationOutsideOfEventStream](../nswindow/mouselocationoutsideofeventstream.md) returns a point in the receiving window’s coordinates, and [mouseLocation](mouselocation.md) returns the same information in screen coordinates.

## See Also

### Getting mouse event information

- [pressedMouseButtons](pressedmousebuttons.md): The indices of the currently pressed mouse buttons.
- [doubleClickInterval](doubleclickinterval.md): The maximum number of seconds in which a second mouse click must occur for an event to be a double-click event.
- [buttonNumber](buttonnumber.md): The button number for a mouse event.
- [clickCount](clickcount.md): The number of mouse clicks associated with a mouse-down or mouse-up event.
- [associatedEventsMask](associatedeventsmask.md): The associated events mask of a mouse event.

# mouseLocation (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Reports the current mouse position in screen coordinates.

## Declaration

```objectivec
@property (class, readonly) NSPoint mouseLocation;
```

<a id="return-value"></a>

## Return Value

The current mouse location in screen coordinates.

<a id="Discussion"></a>

## Discussion

This method is similar to the [mouseLocationOutsideOfEventStream](../nswindow/mouselocationoutsideofeventstream.md) method of [NSWindow](../nswindow.md). It returns the location regardless of the current event or pending events. The difference between these methods is that [mouseLocationOutsideOfEventStream](../nswindow/mouselocationoutsideofeventstream.md) returns a point in the receiving window’s coordinates, and [mouseLocation](mouselocation.md) returns the same information in screen coordinates.

## See Also

### Getting mouse event information

- [pressedMouseButtons](pressedmousebuttons.md): The indices of the currently pressed mouse buttons.
- [doubleClickInterval](doubleclickinterval.md): The maximum number of seconds in which a second mouse click must occur for an event to be a double-click event.
- [buttonNumber](buttonnumber.md): The button number for a mouse event.
- [clickCount](clickcount.md): The number of mouse clicks associated with a mouse-down or mouse-up event.
- [associatedEventsMask](associatedeventsmask.md): The associated events mask of a mouse event.
