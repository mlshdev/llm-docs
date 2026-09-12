> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/subtype](https://developer.apple.com/documentation/appkit/nsevent/subtype)

# subtype (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The event’s subtype.

## Declaration

```swift
var subtype: NSEvent.EventSubtype { get }
```

<a id="Discussion"></a>

## Discussion

Access this property only if the event is a mouse event or if the [type](type.md) property contains [NSAppKitDefined](../nsappkitdefined.md), [NSSystemDefined](../nssystemdefined.md), [NSApplicationDefined](../nsapplicationdefined.md), or [NSPeriodic](../nsperiodic.md). If you access this property for other types, AppKit raises [internalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception). For information about predefined mouse and tablet subtypes, see `Getting Unicode Values`.

[NSPeriodic](../nsperiodic.md) events don’t use this property.

## See Also

### Related Documentation

- [data1](data1.md): Additional data associated with this event.
- [data2](data2.md): Additional data associated with this event.
- [otherEvent(with:location:modifierFlags:timestamp:windowNumber:context:subtype:data1:data2:)](otherevent%28with_location_modifierflags_timestamp_windownumber_context_subtype_data1_data2_%29.md): Creates and returns a new event object that describes a custom event.

### Getting the event type

- [type](type.md): The event’s type.
- [NSEvent.EventType](eventtype.md): Constants for the types of events that responder objects can handle.
- [NSEvent.EventTypeMask](eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [NSEvent.EventSubtype](eventsubtype.md): Subtypes for various types of events.

# subtype (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The event’s subtype.

## Declaration

```objectivec
@property (readonly) NSEventSubtype subtype;
```

<a id="Discussion"></a>

## Discussion

Access this property only if the event is a mouse event or if the [type](type.md) property contains [NSAppKitDefined](../nsappkitdefined.md), [NSSystemDefined](../nssystemdefined.md), [NSApplicationDefined](../nsapplicationdefined.md), or [NSPeriodic](../nsperiodic.md). If you access this property for other types, AppKit raises [NSInternalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception). For information about predefined mouse and tablet subtypes, see `Getting Unicode Values`.

[NSPeriodic](../nsperiodic.md) events don’t use this property.

## See Also

### Related Documentation

- [data1](data1.md): Additional data associated with this event.
- [data2](data2.md): Additional data associated with this event.
- [otherEventWithType:location:modifierFlags:timestamp:windowNumber:context:subtype:data1:data2:](otherevent%28with_location_modifierflags_timestamp_windownumber_context_subtype_data1_data2_%29.md): Creates and returns a new event object that describes a custom event.

### Getting the event type

- [type](type.md): The event’s type.
- [NSEventType](eventtype.md): Constants for the types of events that responder objects can handle.
- [NSEventMask](eventtypemask.md): Constants that you use to filter out specific event types from the stream of incoming events.
- [NSEventSubtype](eventsubtype.md): Subtypes for various types of events.
