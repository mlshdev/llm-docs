> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/type](https://developer.apple.com/documentation/appkit/nsevent/type)

# type (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The event’s type.

## Declaration

```swift
var type: NSEvent.EventType { get }
```

<a id="Discussion"></a>

## Discussion

For a list of possible values, see [NSEvent.EventType](eventtype.md).

## See Also

### Getting the event type

- [NSEvent.EventType](eventtype.md): Constants for the types of events that responder objects can handle.
- [NSEvent.EventTypeMask](eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [subtype](subtype.md): The event’s subtype.
- [NSEvent.EventSubtype](eventsubtype.md): Subtypes for various types of events.

# type (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The event’s type.

## Declaration

```objectivec
@property (readonly) NSEventType type;
```

<a id="Discussion"></a>

## Discussion

For a list of possible values, see [NSEventType](eventtype.md).

## See Also

### Getting the event type

- [NSEventType](eventtype.md): Constants for the types of events that responder objects can handle.
- [NSEventMask](eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [subtype](subtype.md): The event’s subtype.
- [NSEventSubtype](eventsubtype.md): Subtypes for various types of events.
