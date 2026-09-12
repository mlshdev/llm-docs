> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_message_t/event_type](https://developer.apple.com/documentation/endpointsecurity/es_message_t/event_type)

# event_type (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The type of the message’s event.

## Declaration

```swift
var event_type: es_event_type_t
```

<a id="Discussion"></a>

## Discussion

Use this value to determine how to access the [event](event.md) field, which is a union of all the possible event types.

## See Also

### Identifying the Matched Event

- [event](event.md): The event that triggered this message.
- [es_events_t](../es_events_t.md): A C union of event-specific types.
- [es_event_type_t](../es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.

# event_type (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The type of the message’s event.

## Declaration

```objectivec
es_event_type_t event_type;
```

<a id="Discussion"></a>

## Discussion

Use this value to determine how to access the [event](event.md) field, which is a union of all the possible event types.

## See Also

### Identifying the Matched Event

- [event](event.md): The event that triggered this message.
- [es_events_t](../es_events_t.md): A C union of event-specific types.
- [es_event_type_t](../es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.
