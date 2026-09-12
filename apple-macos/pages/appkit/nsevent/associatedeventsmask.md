> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/associatedeventsmask](https://developer.apple.com/documentation/appkit/nsevent/associatedeventsmask)

# associatedEventsMask (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10.3+

The associated events mask of a mouse event.

## Declaration

```swift
var associatedEventsMask: NSEvent.EventTypeMask { get }
```

<a id="Discussion"></a>

## Discussion

This property pertains to mouse events. It’s used to determine whether the input device issuing the event can simultaneously issue events of type [NSEvent.EventType.pressure](eventtype/pressure.md). This can be useful if you need to determine whether to initiate or begin initiating a pressure-related action when a mouse event occurs.

For example, suppose you are writing a painting app that uses pressure to determine the size of brush stroke to apply. You can use `associatedEventsMask` to determine whether a mouse-click event is occurring simultaneously with a pressure event. If not, the user may not have pressure-sensitive hardware and you can apply a default size to the brush stroke.

Listing 1. Example usage of the associatedEventMask property

```objc
if (event.associatedEventMask & NSEventMaskPressure) {
   self.pressure = 0; // Prepare for pressure events
} else if (event.subtype == NSTabletPointEventSubtype) {
   self.pressure = event.pressure; // For tablets, the pressure value is embedded in the mouse event
} else {
   self.pressure = 1; // The input device does not support pressure sensitivity, so default to full pressure
}
```

## See Also

### Related Documentation

- [NSEvent.EventType.pressure](eventtype/pressure.md): An event that reports a change in pressure on a pressure-sensitive device.
- [pressure](pressure.md): A normalized value that indicates the degree of pressure applied to an appropriate input device.
- [NSEvent.EventTypeMask](eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.

### Getting mouse event information

- [pressedMouseButtons](pressedmousebuttons.md): The indices of the currently pressed mouse buttons.
- [doubleClickInterval](doubleclickinterval.md): The maximum number of seconds in which a second mouse click must occur for an event to be a double-click event.
- [mouseLocation](mouselocation.md): Reports the current mouse position in screen coordinates.
- [buttonNumber](buttonnumber.md): The button number for a mouse event.
- [clickCount](clickcount.md): The number of mouse clicks associated with a mouse-down or mouse-up event.

# associatedEventsMask (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10.3+

The associated events mask of a mouse event.

## Declaration

```objectivec
@property (readonly) NSEventMask associatedEventsMask;
```

<a id="Discussion"></a>

## Discussion

This property pertains to mouse events. It’s used to determine whether the input device issuing the event can simultaneously issue events of type [NSEventTypePressure](eventtype/pressure.md). This can be useful if you need to determine whether to initiate or begin initiating a pressure-related action when a mouse event occurs.

For example, suppose you are writing a painting app that uses pressure to determine the size of brush stroke to apply. You can use `associatedEventsMask` to determine whether a mouse-click event is occurring simultaneously with a pressure event. If not, the user may not have pressure-sensitive hardware and you can apply a default size to the brush stroke.

Listing 1. Example usage of the associatedEventMask property

```objc
if (event.associatedEventMask & NSEventMaskPressure) {
   self.pressure = 0; // Prepare for pressure events
} else if (event.subtype == NSTabletPointEventSubtype) {
   self.pressure = event.pressure; // For tablets, the pressure value is embedded in the mouse event
} else {
   self.pressure = 1; // The input device does not support pressure sensitivity, so default to full pressure
}
```

## See Also

### Related Documentation

- [NSEventTypePressure](eventtype/pressure.md): An event that reports a change in pressure on a pressure-sensitive device.
- [pressure](pressure.md): A normalized value that indicates the degree of pressure applied to an appropriate input device.
- [NSEventMask](eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.

### Getting mouse event information

- [pressedMouseButtons](pressedmousebuttons.md): The indices of the currently pressed mouse buttons.
- [doubleClickInterval](doubleclickinterval.md): The maximum number of seconds in which a second mouse click must occur for an event to be a double-click event.
- [mouseLocation](mouselocation.md): Reports the current mouse position in screen coordinates.
- [buttonNumber](buttonnumber.md): The button number for a mouse event.
- [clickCount](clickcount.md): The number of mouse clicks associated with a mouse-down or mouse-up event.
