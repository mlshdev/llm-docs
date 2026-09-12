> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_action_type_t](https://developer.apple.com/documentation/endpointsecurity/es_action_type_t)

# es_action_type_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

The type of the message’s action.

## Declaration

```swift
struct es_action_type_t
```

## Topics

### Action Types

- [ES_ACTION_TYPE_AUTH](es_action_type_auth.md): The authentication action type.
- [ES_ACTION_TYPE_NOTIFY](es_action_type_notify.md): The notification action type.

### Initializers

- [init(\_:)](es_action_type_t/init%28__%29.md)
- [init(rawValue:)](es_action_type_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_action_type_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Inspecting Message Properties

- [action](es_message_t/action.md): The action monitored by Endpoint Security.
- [action_type](es_message_t/action_type.md): The type of action: authentication or notification.
- [es_event_id_t](es_event_id_t.md): An opaque identifier for events.
- [es_result_t](es_result_t.md): The result of the Endpoint Security subsystem authorization process.
- [version](es_message_t/version.md): The version of the Endpoint Security message.

# es_action_type_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

The type of the message’s action.

## Declaration

```objectivec
typedef enum { ... } es_action_type_t;
```

## Topics

### Action Types

- [ES_ACTION_TYPE_AUTH](es_action_type_auth.md): The authentication action type.
- [ES_ACTION_TYPE_NOTIFY](es_action_type_notify.md): The notification action type.

## See Also

### Inspecting Message Properties

- [action](es_message_t/action.md): The action monitored by Endpoint Security.
- [action_type](es_message_t/action_type.md): The type of action: authentication or notification.
- [es_event_id_t](es_event_id_t.md): An opaque identifier for events.
- [es_result_t](es_result_t.md): The result of the Endpoint Security subsystem authorization process.
- [version](es_message_t/version.md): The version of the Endpoint Security message.
