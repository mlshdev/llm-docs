> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/locationinwindow](https://developer.apple.com/documentation/appkit/nsevent/locationinwindow)

# locationInWindow (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The event location in the base coordinate system of the associated window.

## Declaration

```swift
var locationInWindow: NSPoint { get }
```

<a id="Discussion"></a>

## Discussion

This property applies to mouse events. For non-mouse events the value of this property is undefined.

With [NSMouseMoved](../nsmousemoved.md) and possibly other events, the event can have a `nil` window (that is, the [window](window.md) property contains nil). In this case, this property contains the event location in screen coordinates.

In a method of a custom view that handles mouse events, you commonly use this property with the [convert(\_:from:)](../nsview/convert%28__from_%29-1dq9l.md) method of [NSView](../nsview.md) to get the mouse location in the view’s coordinate system. The following code shows how to perform this conversion. The y coordinate in the returned point starts from a base of 1, and not 0.

```objc
NSPoint event_location = theEvent.locationInWindow;
NSPoint local_point = [self convertPoint:event_location fromView:nil];
```

## See Also

### Getting general event information

- [timestamp](timestamp.md): The time when the event occurred in seconds since system startup.
- [window](window.md): The window object associated with the event.
- [windowNumber](windownumber.md): The identifier for the window device associated with the event.
- [eventRef](eventref.md): An opaque Carbon type associated with this event.
- [cgEvent](cgevent.md): The Core Graphics event object corresponding to this event.
- [foreverDuration](foreverduration.md): The longest time duration possible.

# locationInWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The event location in the base coordinate system of the associated window.

## Declaration

```objectivec
@property (readonly) NSPoint locationInWindow;
```

<a id="Discussion"></a>

## Discussion

This property applies to mouse events. For non-mouse events the value of this property is undefined.

With [NSMouseMoved](../nsmousemoved.md) and possibly other events, the event can have a `nil` window (that is, the [window](window.md) property contains nil). In this case, this property contains the event location in screen coordinates.

In a method of a custom view that handles mouse events, you commonly use this property with the [convertPoint:fromView:](../nsview/convert%28__from_%29-1dq9l.md) method of [NSView](../nsview.md) to get the mouse location in the view’s coordinate system. The following code shows how to perform this conversion. The y coordinate in the returned point starts from a base of 1, and not 0.

```objc
NSPoint event_location = theEvent.locationInWindow;
NSPoint local_point = [self convertPoint:event_location fromView:nil];
```

## See Also

### Getting general event information

- [timestamp](timestamp.md): The time when the event occurred in seconds since system startup.
- [window](window.md): The window object associated with the event.
- [windowNumber](windownumber.md): The identifier for the window device associated with the event.
- [eventRef](eventref.md): An opaque Carbon type associated with this event.
- [CGEvent](cgevent.md): The Core Graphics event object corresponding to this event.
- [NSEventDurationForever](foreverduration.md): The longest time duration possible.
