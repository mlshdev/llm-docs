> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/doubleclickinterval](https://developer.apple.com/documentation/appkit/nsevent/doubleclickinterval)

# doubleClickInterval (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

The maximum number of seconds in which a second mouse click must occur for an event to be a double-click event.

## Declaration

```swift
class var doubleClickInterval: TimeInterval { get }
```

<a id="return-value"></a>

## Return Value

The double-click time interval, in seconds.

<a id="Discussion"></a>

## Discussion

This is a system setting. You can’t change the value by overriding this method.

## See Also

### Getting mouse event information

- [pressedMouseButtons](pressedmousebuttons.md): The indices of the currently pressed mouse buttons.
- [mouseLocation](mouselocation.md): Reports the current mouse position in screen coordinates.
- [buttonNumber](buttonnumber.md): The button number for a mouse event.
- [clickCount](clickcount.md): The number of mouse clicks associated with a mouse-down or mouse-up event.
- [associatedEventsMask](associatedeventsmask.md): The associated events mask of a mouse event.

# doubleClickInterval (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

The maximum number of seconds in which a second mouse click must occur for an event to be a double-click event.

## Declaration

```objectivec
@property (class, readonly) NSTimeInterval doubleClickInterval;
```

<a id="return-value"></a>

## Return Value

The double-click time interval, in seconds.

<a id="Discussion"></a>

## Discussion

This is a system setting. You can’t change the value by overriding this method.

## See Also

### Getting mouse event information

- [pressedMouseButtons](pressedmousebuttons.md): The indices of the currently pressed mouse buttons.
- [mouseLocation](mouselocation.md): Reports the current mouse position in screen coordinates.
- [buttonNumber](buttonnumber.md): The button number for a mouse event.
- [clickCount](clickcount.md): The number of mouse clicks associated with a mouse-down or mouse-up event.
- [associatedEventsMask](associatedeventsmask.md): The associated events mask of a mouse event.
