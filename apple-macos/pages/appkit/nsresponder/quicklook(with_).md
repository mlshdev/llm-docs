> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/quicklook(with:)](https://developer.apple.com/documentation/appkit/nsresponder/quicklook(with:))

# quickLook(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Performs a Quick Look on the content at the location specified by the supplied event.

## Declaration

```swift
func quickLook(with event: NSEvent)
```

## Parameters

- `event`: An event object containing the location of the Quick Look content.

<a id="Discussion"></a>

## Discussion

The [NSEvent.EventType.quickLook](../nsevent/eventtype/quicklook.md) event type supports this method. The only valid properties of an [NSEvent.EventType.quickLook](../nsevent/eventtype/quicklook.md) event are [locationInWindow](../nsevent/locationinwindow.md) and [modifierFlags](../nsevent/modifierflags-swift.property.md). A Quick Look event does not come in through the normal event mechanism; therefore, there is no corresponding event mask for it, nor should you attempt to look for it in a [sendEvent(\_:)](../nswindow/sendevent%28__%29.md) message or with the [nextEvent(matching:)](../nswindow/nextevent%28matching_%29.md) methods.

If there are no Quick Look items at the location, call super.

`NSResponder` declares but doesn’t implement this method.

## See Also

### Related Documentation

- [NSEvent.EventType.quickLook](../nsevent/eventtype/quicklook.md): An event that initiates a Quick Look request.

### Responding to Other Kinds of Events

- [cursorUpdate(with:)](cursorupdate%28with_%29.md): Informs the receiver that the mouse cursor has moved into a cursor rectangle.
- [flagsChanged(with:)](flagschanged%28with_%29.md): Informs the receiver that the user has pressed or released a modifier key (Shift, Control, and so on).
- [tabletPoint(with:)](tabletpoint%28with_%29.md): Informs the receiver that a tablet-point event has occurred.
- [tabletProximity(with:)](tabletproximity%28with_%29.md): Informs the receiver that a tablet-proximity event has occurred.
- [helpRequested(\_:)](helprequested%28__%29.md): Displays context-sensitive help for the receiver if help has been registered.
- [scrollWheel(with:)](scrollwheel%28with_%29.md): Informs the receiver that the mouse’s scroll wheel has moved.
- [changeMode(with:)](changemode%28with_%29.md): Informs the responder that performed a double-tap on the side of an Apple Pencil.

# quickLookWithEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Performs a Quick Look on the content at the location specified by the supplied event.

## Declaration

```objectivec
- (void) quickLookWithEvent:(NSEvent *) event;
```

## Parameters

- `event`: An event object containing the location of the Quick Look content.

<a id="Discussion"></a>

## Discussion

The [NSEventTypeQuickLook](../nsevent/eventtype/quicklook.md) event type supports this method. The only valid properties of an [NSEventTypeQuickLook](../nsevent/eventtype/quicklook.md) event are [locationInWindow](../nsevent/locationinwindow.md) and [modifierFlags](../nsevent/modifierflags-swift.property.md). A Quick Look event does not come in through the normal event mechanism; therefore, there is no corresponding event mask for it, nor should you attempt to look for it in a [sendEvent:](../nswindow/sendevent%28__%29.md) message or with the [nextEventMatchingMask:](../nswindow/nextevent%28matching_%29.md) methods.

If there are no Quick Look items at the location, call super.

`NSResponder` declares but doesn’t implement this method.

## See Also

### Related Documentation

- [NSEventTypeQuickLook](../nsevent/eventtype/quicklook.md): An event that initiates a Quick Look request.

### Responding to Other Kinds of Events

- [cursorUpdate:](cursorupdate%28with_%29.md): Informs the receiver that the mouse cursor has moved into a cursor rectangle.
- [flagsChanged:](flagschanged%28with_%29.md): Informs the receiver that the user has pressed or released a modifier key (Shift, Control, and so on).
- [tabletPoint:](tabletpoint%28with_%29.md): Informs the receiver that a tablet-point event has occurred.
- [tabletProximity:](tabletproximity%28with_%29.md): Informs the receiver that a tablet-proximity event has occurred.
- [helpRequested:](helprequested%28__%29.md): Displays context-sensitive help for the receiver if help has been registered.
- [scrollWheel:](scrollwheel%28with_%29.md): Informs the receiver that the mouse’s scroll wheel has moved.
- [changeModeWithEvent:](changemode%28with_%29.md): Informs the responder that performed a double-tap on the side of an Apple Pencil.
