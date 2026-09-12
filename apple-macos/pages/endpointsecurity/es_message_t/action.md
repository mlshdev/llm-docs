> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_message_t/action](https://developer.apple.com/documentation/endpointsecurity/es_message_t/action)

# action (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The action monitored by Endpoint Security.

## Declaration

```swift
var action: es_message_t.__Unnamed_union_action
```

<a id="Discussion"></a>

## Discussion

The action is a `union` of an [es_event_id_t](../es_event_id_t.md) named `auth` and an [es_result_t](../es_result_t.md) named `notify`. Use the [action_type](action_type.md) field to determine which kind of action this message represents.

## See Also

### Inspecting Message Properties

- [action_type](action_type.md): The type of action: authentication or notification.
- [es_action_type_t](../es_action_type_t.md): The type of the message’s action.
- [es_event_id_t](../es_event_id_t.md): An opaque identifier for events.
- [es_result_t](../es_result_t.md): The result of the Endpoint Security subsystem authorization process.
- [version](version.md): The version of the Endpoint Security message.

# action (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The action monitored by Endpoint Security.

## Declaration

```objectivec
union { ... } action;
```

<a id="Discussion"></a>

## Discussion

The action is a `union` of an [es_event_id_t](../es_event_id_t.md) named `auth` and an [es_result_t](../es_result_t.md) named `notify`. Use the [action_type](action_type.md) field to determine which kind of action this message represents.

## Topics

### Instance Properties

- [auth](action/auth.md)
- [notify](action/notify.md)

## See Also

### Inspecting Message Properties

- [action_type](action_type.md): The type of action: authentication or notification.
- [es_action_type_t](../es_action_type_t.md): The type of the message’s action.
- [es_event_id_t](../es_event_id_t.md): An opaque identifier for events.
- [es_result_t](../es_result_t.md): The result of the Endpoint Security subsystem authorization process.
- [version](version.md): The version of the Endpoint Security message.
