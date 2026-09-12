> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/eventtype/changemode](https://developer.apple.com/documentation/appkit/nsevent/eventtype/changemode)

# NSEvent.EventType.changeMode (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.15+

The user changed the mode of a connected device.

## Declaration

```swift
case changeMode
```

<a id="Discussion"></a>

## Discussion

In macOS 10.15 and later, you can use an iPad as an additional screen for a macOS device. A double-tap on the side of an Apple Pencil paired with that iPad results in this type of event. AppKit calls the [changeMode(with:)](../../nsresponder/changemode%28with_%29.md) method to route these events to the first responder of the key window of the frontmost process.

The object that needs to handle these types of events may not always be the first responder, or be in the active responder chain. To ensure that the events are handled in the right place, call the [addLocalMonitorForEvents(matching:handler:)](../addlocalmonitorforevents%28matching_handler_%29.md) method and handle or redirect the events in your handler block.

## See Also

### Getting Other Input Types

- [NSEvent.EventType.scrollWheel](scrollwheel.md): The scroll wheel position changed.

# NSEventTypeChangeMode (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.15+

The user changed the mode of a connected device.

## Declaration

```objectivec
NSEventTypeChangeMode
```

<a id="Discussion"></a>

## Discussion

In macOS 10.15 and later, you can use an iPad as an additional screen for a macOS device. A double-tap on the side of an Apple Pencil paired with that iPad results in this type of event. AppKit calls the [changeModeWithEvent:](../../nsresponder/changemode%28with_%29.md) method to route these events to the first responder of the key window of the frontmost process.

The object that needs to handle these types of events may not always be the first responder, or be in the active responder chain. To ensure that the events are handled in the right place, call the [addLocalMonitorForEventsMatchingMask:handler:](../addlocalmonitorforevents%28matching_handler_%29.md) method and handle or redirect the events in your handler block.

## See Also

### Getting Other Input Types

- [NSEventTypeScrollWheel](scrollwheel.md): The scroll wheel position changed.
