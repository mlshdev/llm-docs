> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/clickcount](https://developer.apple.com/documentation/appkit/nsevent/clickcount)

# clickCount (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of mouse clicks associated with a mouse-down or mouse-up event.

## Declaration

```swift
var clickCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

Raises an `NSInternalInconsistencyException` if accessed on a non-mouse event.

This property is set to `0` for a mouse-up event if a time threshold has passed since the corresponding mouse-down event. This is because if this time threshold passes before the mouse button is released, it is no longer considered a mouse click, but a mouse-down event followed by a mouse-up event.

The return value of this method is meaningless for events other than mouse-down or mouse-up events.

## See Also

### Related Documentation

- [mouseEvent(with:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:)](mouseevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_clickcount_pressure_%29.md): Creates and returns a new event object that describes a mouse-down, -up, -moved, or -dragged event.

### Getting mouse event information

- [pressedMouseButtons](pressedmousebuttons.md): The indices of the currently pressed mouse buttons.
- [doubleClickInterval](doubleclickinterval.md): The maximum number of seconds in which a second mouse click must occur for an event to be a double-click event.
- [mouseLocation](mouselocation.md): Reports the current mouse position in screen coordinates.
- [buttonNumber](buttonnumber.md): The button number for a mouse event.
- [associatedEventsMask](associatedeventsmask.md): The associated events mask of a mouse event.

# clickCount (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of mouse clicks associated with a mouse-down or mouse-up event.

## Declaration

```objectivec
@property (readonly) NSInteger clickCount;
```

<a id="Discussion"></a>

## Discussion

Raises an `NSInternalInconsistencyException` if accessed on a non-mouse event.

This property is set to `0` for a mouse-up event if a time threshold has passed since the corresponding mouse-down event. This is because if this time threshold passes before the mouse button is released, it is no longer considered a mouse click, but a mouse-down event followed by a mouse-up event.

The return value of this method is meaningless for events other than mouse-down or mouse-up events.

## See Also

### Related Documentation

- [mouseEventWithType:location:modifierFlags:timestamp:windowNumber:context:eventNumber:clickCount:pressure:](mouseevent%28with_location_modifierflags_timestamp_windownumber_context_eventnumber_clickcount_pressure_%29.md): Creates and returns a new event object that describes a mouse-down, -up, -moved, or -dragged event.

### Getting mouse event information

- [pressedMouseButtons](pressedmousebuttons.md): The indices of the currently pressed mouse buttons.
- [doubleClickInterval](doubleclickinterval.md): The maximum number of seconds in which a second mouse click must occur for an event to be a double-click event.
- [mouseLocation](mouselocation.md): Reports the current mouse position in screen coordinates.
- [buttonNumber](buttonnumber.md): The button number for a mouse event.
- [associatedEventsMask](associatedeventsmask.md): The associated events mask of a mouse event.
