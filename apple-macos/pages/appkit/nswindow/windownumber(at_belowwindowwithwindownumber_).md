> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/windownumber(at:belowwindowwithwindownumber:)](https://developer.apple.com/documentation/appkit/nswindow/windownumber(at:belowwindowwithwindownumber:))

# windowNumber(at:belowWindowWithWindowNumber:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Returns the number of the frontmost window that would be hit by a mouse-down at the specified screen location.

## Declaration

```swift
class func windowNumber(at point: NSPoint, belowWindowWithWindowNumber windowNumber: Int) -> Int
```

## Parameters

- `point`: The location of the mouse-down in screen coordinates.
- `windowNumber`: If non-0, the search will start below `windowNumber` window in z-order.

<a id="return-value"></a>

## Return Value

The window number of the window under the point. The window number returned may correspond to a window in another application.

<a id="Discussion"></a>

## Discussion

Because this method uses the same rules as mouse-down hit-testing, windows with transparency at the given point, and windows that ignore mouse events, will not be returned.

## See Also

### Handling Mouse Events

- [acceptsMouseMovedEvents](acceptsmousemovedevents.md): A Boolean value that indicates whether the window accepts mouse-moved events.
- [ignoresMouseEvents](ignoresmouseevents.md): A Boolean value that indicates whether the window is transparent to mouse events.
- [mouseLocationOutsideOfEventStream](mouselocationoutsideofeventstream.md): The current location of the pointer reckoned in the window’s base coordinate system, regardless of the current event being handled or of any events pending.
- [trackEvents(matching:timeout:mode:handler:)](trackevents%28matching_timeout_mode_handler_%29.md): Tracks events that match the specified mask using the specified tracking handler until the tracking handler explicitly terminates tracking.
- [performDrag(with:)](performdrag%28with_%29.md): Starts a window drag based on the specified mouse-down event.
- [foreverDuration](../nsevent/foreverduration.md): The longest time duration possible.

# windowNumberAtPoint:belowWindowWithWindowNumber: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Returns the number of the frontmost window that would be hit by a mouse-down at the specified screen location.

## Declaration

```objectivec
+ (NSInteger) windowNumberAtPoint:(NSPoint) point belowWindowWithWindowNumber:(NSInteger) windowNumber;
```

## Parameters

- `point`: The location of the mouse-down in screen coordinates.
- `windowNumber`: If non-0, the search will start below `windowNumber` window in z-order.

<a id="return-value"></a>

## Return Value

The window number of the window under the point. The window number returned may correspond to a window in another application.

<a id="Discussion"></a>

## Discussion

Because this method uses the same rules as mouse-down hit-testing, windows with transparency at the given point, and windows that ignore mouse events, will not be returned.

## See Also

### Handling Mouse Events

- [acceptsMouseMovedEvents](acceptsmousemovedevents.md): A Boolean value that indicates whether the window accepts mouse-moved events.
- [ignoresMouseEvents](ignoresmouseevents.md): A Boolean value that indicates whether the window is transparent to mouse events.
- [mouseLocationOutsideOfEventStream](mouselocationoutsideofeventstream.md): The current location of the pointer reckoned in the window’s base coordinate system, regardless of the current event being handled or of any events pending.
- [trackEventsMatchingMask:timeout:mode:handler:](trackevents%28matching_timeout_mode_handler_%29.md): Tracks events that match the specified mask using the specified tracking handler until the tracking handler explicitly terminates tracking.
- [performWindowDragWithEvent:](performdrag%28with_%29.md): Starts a window drag based on the specified mouse-down event.
- [NSEventDurationForever](../nsevent/foreverduration.md): The longest time duration possible.
