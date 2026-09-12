> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_content_context_t](https://developer.apple.com/documentation/network/nw_content_context_t)

# nw_content_context_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A representation of a message to send or receive, containing protocol metadata and send properties.

## Declaration

```swift
typealias nw_content_context_t = any OS_nw_content_context
```

<a id="Discussion"></a>

## Discussion

For sending, you should use `NW_CONNECTION_DEFAULT_MESSAGE_CONTEXT` unless there is a reason to override some values.

You can pass `NW_CONNECTION_FINAL_MESSAGE_CONTEXT` to mark the final message in a connection. Once this context is used for sending, and the send is marked as complete, no more data can be sent on the connection.

If you are using a protocol that expects message content, like WebSocket or a custom framer, create a custom context and set metadata using [nw_content_context_set_metadata_for_protocol(\_:\_:)](nw_content_context_set_metadata_for_protocol%28____%29.md).

## Topics

### Creating Custom Send Contexts

- [nw_content_context_create(\_:)](nw_content_context_create%28__%29.md): Initializes a custom message context.
- [nw_content_context_set_metadata_for_protocol(\_:\_:)](nw_content_context_set_metadata_for_protocol%28____%29.md): Sets protocol metadata to configure per-message or per-packet properties.
- [nw_protocol_metadata_t](nw_protocol_metadata_t.md): The abstract superclass for specifying metadata about a network protocol.
- [nw_content_context_set_antecedent(\_:\_:)](nw_content_context_set_antecedent%28____%29.md): Set an optional message context that must be sent before the context you are sending.
- [nw_content_context_copy_antecedent(\_:)](nw_content_context_copy_antecedent%28__%29.md): Accesses the optional message context that must be sent before the context you are sending.
- [nw_content_context_set_expiration_milliseconds(\_:\_:)](nw_content_context_set_expiration_milliseconds%28____%29.md): Sets the number of milliseconds after which sending the data associated with this context must begin, otherwise the data is discarded.
- [nw_content_context_get_expiration_milliseconds(\_:)](nw_content_context_get_expiration_milliseconds%28__%29.md): Accesses the expiration set for this message context.
- [nw_content_context_set_relative_priority(\_:\_:)](nw_content_context_set_relative_priority%28____%29.md): Sets the relative value of priority used to reorder contexts when sending.
- [nw_content_context_get_relative_priority(\_:)](nw_content_context_get_relative_priority%28__%29.md): Accesses the relative value of priority used to reorder contexts when sending.
- [nw_content_context_set_is_final(\_:\_:)](nw_content_context_set_is_final%28____%29.md): Sets a Boolean indicating if this context represents the final message being sent.
- [nw_content_context_get_identifier(\_:)](nw_content_context_get_identifier%28__%29.md): Accesses the identifier used to create this message context.

### Inspecting Receive Contexts

- [nw_content_context_get_is_final(\_:)](nw_content_context_get_is_final%28__%29.md): Checks whether this context represents the final message being received.
- [nw_content_context_copy_protocol_metadata(\_:\_:)](nw_content_context_copy_protocol_metadata%28____%29.md): Retreives the metadata associated with a specific protocol.
- [nw_content_context_foreach_protocol_metadata(\_:\_:)](nw_content_context_foreach_protocol_metadata%28____%29.md): Iterates through all protocol metadata associated with the message context.

## See Also

### Data Types

- [nw_advertise_descriptor_t](nw_advertise_descriptor_t.md): A description used to advertise the Bonjour service that a listener provides.
- [nw_browse_descriptor_t](nw_browse_descriptor_t.md): A service description used to discover Bonjour services.
- [nw_browse_result_change_t](nw_browse_result_change_t.md): Flags describing ways in which discovered services can change between specific results.
- [nw_browse_result_enumerate_interface_t](nw_browse_result_enumerate_interface_t.md): A handler that enumerates the interfaces associated with a discovered service.
- [nw_browse_result_t](nw_browse_result_t.md): A discovered service and metadata about the service.
- [nw_browser_browse_results_changed_handler_t](nw_browser_browse_results_changed_handler_t.md): A handler that delivers updates about discovered services.
- [nw_browser_state_changed_handler_t](nw_browser_state_changed_handler_t.md): A handler that delivers browser state updates with associated errors.
- [nw_browser_t](nw_browser_t.md): An object you use to browse for available network services.
- [nw_connection_boolean_event_handler_t](nw_connection_boolean_event_handler_t.md): A handler that receives Boolean state updates from a connection, such as viability and better path state.
- [nw_connection_group_new_connection_handler_t](nw_connection_group_new_connection_handler_t.md)
- [nw_connection_group_receive_handler_t](nw_connection_group_receive_handler_t.md): A handler that receives inbound messages from members of the group.
- [nw_connection_group_send_completion_t](nw_connection_group_send_completion_t.md): A completion to notify you when data has been processed and sent.
- [nw_connection_group_state_changed_handler_t](nw_connection_group_state_changed_handler_t.md): A handler that receives connection group state updates.
- [nw_connection_group_t](nw_connection_group_t.md): An object you use to communicate with a group of endpoints, such as an IP multicast group on a local network.
- [nw_connection_path_event_handler_t](nw_connection_path_event_handler_t.md): A handler that delivers network path updates.

# nw_content_context_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A representation of a message to send or receive, containing protocol metadata and send properties.

## Declaration

```objectivec
typedef NSObject<OS_nw_content_context> * nw_content_context_t;
```

<a id="Discussion"></a>

## Discussion

For sending, you should use `NW_CONNECTION_DEFAULT_MESSAGE_CONTEXT` unless there is a reason to override some values.

You can pass `NW_CONNECTION_FINAL_MESSAGE_CONTEXT` to mark the final message in a connection. Once this context is used for sending, and the send is marked as complete, no more data can be sent on the connection.

If you are using a protocol that expects message content, like WebSocket or a custom framer, create a custom context and set metadata using [nw_content_context_set_metadata_for_protocol](nw_content_context_set_metadata_for_protocol%28____%29.md).

## Topics

### Creating Custom Send Contexts

- [nw_content_context_create](nw_content_context_create%28__%29.md): Initializes a custom message context.
- [nw_content_context_set_metadata_for_protocol](nw_content_context_set_metadata_for_protocol%28____%29.md): Sets protocol metadata to configure per-message or per-packet properties.
- [nw_protocol_metadata_t](nw_protocol_metadata_t.md): The abstract superclass for specifying metadata about a network protocol.
- [nw_content_context_set_antecedent](nw_content_context_set_antecedent%28____%29.md): Set an optional message context that must be sent before the context you are sending.
- [nw_content_context_copy_antecedent](nw_content_context_copy_antecedent%28__%29.md): Accesses the optional message context that must be sent before the context you are sending.
- [nw_content_context_set_expiration_milliseconds](nw_content_context_set_expiration_milliseconds%28____%29.md): Sets the number of milliseconds after which sending the data associated with this context must begin, otherwise the data is discarded.
- [nw_content_context_get_expiration_milliseconds](nw_content_context_get_expiration_milliseconds%28__%29.md): Accesses the expiration set for this message context.
- [nw_content_context_set_relative_priority](nw_content_context_set_relative_priority%28____%29.md): Sets the relative value of priority used to reorder contexts when sending.
- [nw_content_context_get_relative_priority](nw_content_context_get_relative_priority%28__%29.md): Accesses the relative value of priority used to reorder contexts when sending.
- [nw_content_context_set_is_final](nw_content_context_set_is_final%28____%29.md): Sets a Boolean indicating if this context represents the final message being sent.
- [nw_content_context_get_identifier](nw_content_context_get_identifier%28__%29.md): Accesses the identifier used to create this message context.

### Inspecting Receive Contexts

- [nw_content_context_get_is_final](nw_content_context_get_is_final%28__%29.md): Checks whether this context represents the final message being received.
- [nw_content_context_copy_protocol_metadata](nw_content_context_copy_protocol_metadata%28____%29.md): Retreives the metadata associated with a specific protocol.
- [nw_content_context_foreach_protocol_metadata](nw_content_context_foreach_protocol_metadata%28____%29.md): Iterates through all protocol metadata associated with the message context.
