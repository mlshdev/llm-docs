> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_message_t/action_type](https://developer.apple.com/documentation/endpointsecurity/es_message_t/action_type)

# action_type (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The type of action: authentication or notification.

## Declaration

```swift
var action_type: es_action_type_t
```

<a id="Discussion"></a>

## Discussion

Use this value to determine how to access the [action](action.md) field, which is a `union` of different authentication and notification types.

## See Also

### Inspecting Message Properties

- [action](action.md): The action monitored by Endpoint Security.
- [es_action_type_t](../es_action_type_t.md): The type of the message’s action.
- [es_event_id_t](../es_event_id_t.md): An opaque identifier for events.
- [es_result_t](../es_result_t.md): The result of the Endpoint Security subsystem authorization process.
- [version](version.md): The version of the Endpoint Security message.

# action_type (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The type of action: authentication or notification.

## Declaration

```objectivec
es_action_type_t action_type;
```

<a id="Discussion"></a>

## Discussion

Use this value to determine how to access the [action](action.md) field, which is a `union` of different authentication and notification types.

## See Also

### Inspecting Message Properties

- [action](action.md): The action monitored by Endpoint Security.
- [es_action_type_t](../es_action_type_t.md): The type of the message’s action.
- [es_event_id_t](../es_event_id_t.md): An opaque identifier for events.
- [es_result_t](../es_result_t.md): The result of the Endpoint Security subsystem authorization process.
- [version](version.md): The version of the Endpoint Security message.
