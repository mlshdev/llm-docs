> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_id_t](https://developer.apple.com/documentation/endpointsecurity/es_event_id_t)

# es_event_id_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

An opaque identifier for events.

## Declaration

```swift
struct es_event_id_t
```

## Topics

### Reserved Fields

- [reserved](es_event_id_t/reserved.md): An opaque value.

### Initializers

- [init()](es_event_id_t/init%28%29.md)
- [init(reserved:)](es_event_id_t/init%28reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Inspecting Message Properties

- [action](es_message_t/action.md): The action monitored by Endpoint Security.
- [action_type](es_message_t/action_type.md): The type of action: authentication or notification.
- [es_action_type_t](es_action_type_t.md): The type of the message’s action.
- [es_result_t](es_result_t.md): The result of the Endpoint Security subsystem authorization process.
- [version](es_message_t/version.md): The version of the Endpoint Security message.

# es_event_id_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

An opaque identifier for events.

## Declaration

```objectivec
typedef struct { ... } es_event_id_t;
```

## Topics

### Reserved Fields

- [reserved](es_event_id_t/reserved.md): An opaque value.

## See Also

### Inspecting Message Properties

- [action](es_message_t/action.md): The action monitored by Endpoint Security.
- [action_type](es_message_t/action_type.md): The type of action: authentication or notification.
- [es_action_type_t](es_action_type_t.md): The type of the message’s action.
- [es_result_t](es_result_t.md): The result of the Endpoint Security subsystem authorization process.
- [version](es_message_t/version.md): The version of the Endpoint Security message.
