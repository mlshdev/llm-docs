> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_message_t/event](https://developer.apple.com/documentation/endpointsecurity/es_message_t/event)

# event (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The event that triggered this message.

## Declaration

```swift
var event: es_events_t
```

<a id="Discussion"></a>

## Discussion

Use the [event_type](event_type.md) property to determine which member of this [es_events_t](../es_events_t.md) union is available. For example, if the type is [ES_EVENT_TYPE_NOTIFY_FORK](../es_event_type_notify_fork.md), use the [fork](../es_events_t/fork.md) member.

## See Also

### Identifying the Matched Event

- [es_events_t](../es_events_t.md): A C union of event-specific types.
- [event_type](event_type.md): The type of the message’s event.
- [es_event_type_t](../es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.

# event (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The event that triggered this message.

## Declaration

```objectivec
es_events_t event;
```

<a id="Discussion"></a>

## Discussion

Use the [event_type](event_type.md) property to determine which member of this [es_events_t](../es_events_t.md) union is available. For example, if the type is [ES_EVENT_TYPE_NOTIFY_FORK](../es_event_type_notify_fork.md), use the [fork](../es_events_t/fork.md) member.

## See Also

### Identifying the Matched Event

- [es_events_t](../es_events_t.md): A C union of event-specific types.
- [event_type](event_type.md): The type of the message’s event.
- [es_event_type_t](../es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.
