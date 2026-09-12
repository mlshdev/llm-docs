> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_message_t/version](https://developer.apple.com/documentation/endpointsecurity/es_message_t/version)

# version (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The version of the Endpoint Security message.

## Declaration

```swift
var version: UInt32
```

<a id="Discussion"></a>

## Discussion

Clients wishing to be backward-compatible with future changes to Endpoint Security should inspect the version to ensure they don’t try to access fields that aren’t available.

## See Also

### Inspecting Message Properties

- [action](action.md): The action monitored by Endpoint Security.
- [action_type](action_type.md): The type of action: authentication or notification.
- [es_action_type_t](../es_action_type_t.md): The type of the message’s action.
- [es_event_id_t](../es_event_id_t.md): An opaque identifier for events.
- [es_result_t](../es_result_t.md): The result of the Endpoint Security subsystem authorization process.

# version (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The version of the Endpoint Security message.

## Declaration

```objectivec
uint32_t version;
```

<a id="Discussion"></a>

## Discussion

Clients wishing to be backward-compatible with future changes to Endpoint Security should inspect the version to ensure they don’t try to access fields that aren’t available.

## See Also

### Inspecting Message Properties

- [action](action.md): The action monitored by Endpoint Security.
- [action_type](action_type.md): The type of action: authentication or notification.
- [es_action_type_t](../es_action_type_t.md): The type of the message’s action.
- [es_event_id_t](../es_event_id_t.md): An opaque identifier for events.
- [es_result_t](../es_result_t.md): The result of the Endpoint Security subsystem authorization process.
