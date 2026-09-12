> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/framer-protocol-options](https://developer.apple.com/documentation/network/framer-protocol-options)

# Framer Protocol Options

**Interface language:** Objective-C

**Framework:** Network  
**Kind:** API Collection

Create custom protocols to frame applications messages over a connection.

## Topics

### Adding Framers to Connections

- [nw_framer_create_definition](nw_framer_create_definition%28______%29.md): Initializes a new protocol definition based on your protocol implementation.
- [nw_framer_start_handler_t](nw_framer_start_handler_t.md): A handler that represents the entry point into your custom protocol.
- [nw_framer_t](nw_framer_t.md): An object that represents a single instance of your custom protocol running in a connection.
- [nw_framer_start_result_t](nw_framer_start_result_t.md): Results that you send to indicate the disposition of your protocol after the start handler is invoked.
- [NW_FRAMER_CREATE_FLAGS_DEFAULT](nw_framer_create_flags_default.md): A constant flag value that indicates that the default framer protocol behavior should be used.
- [nw_framer_create_options](nw_framer_create_options%28__%29.md): Initializes a set of protocol options with a custom framer definition.

### Handling Output Data

- [nw_framer_set_output_handler](nw_framer_set_output_handler%28____%29.md): Sets a block to handle new outbound messages.
- [nw_framer_output_handler_t](nw_framer_output_handler_t.md): A handler that notifies your protocol about a new outbound message.
- [nw_framer_parse_output](nw_framer_parse_output%28__________%29.md): Examines the content of output data while inside your output handler.
- [nw_framer_parse_completion_t](nw_framer_parse_completion_t.md): A handler that examines a range of data being sent or received.
- [nw_framer_write_output](nw_framer_write_output%28______%29.md): Sends arbitrary output data in a buffer from your protocol to the next protocol.
- [nw_framer_write_output_data](nw_framer_write_output_data%28____%29.md): Sends arbitrary output data from your protocol to the next protocol.
- [nw_framer_write_output_no_copy](nw_framer_write_output_no_copy%28____%29.md): Sends a specific number of bytes from a message while inside your output handler.
- [nw_framer_pass_through_output](nw_framer_pass_through_output%28__%29.md): Indicates that your protocol no longer needs to handle output data.

### Handling Input Data

- [nw_framer_set_input_handler](nw_framer_set_input_handler%28____%29.md): Sets a block to handle new inbound data.
- [nw_framer_input_handler_t](nw_framer_input_handler_t.md): A handler that notifies your protocol that new inbound data is available to parse.
- [nw_framer_parse_input](nw_framer_parse_input%28__________%29.md): Examines the content of input data while inside your input handler block.
- [nw_framer_parse_completion_t](nw_framer_parse_completion_t.md): A handler that examines a range of data being sent or received.
- [nw_framer_deliver_input](nw_framer_deliver_input%28__________%29.md): Delivers an inbound message containing arbitrary data from your protocol to the application.
- [nw_framer_deliver_input_no_copy](nw_framer_deliver_input_no_copy%28________%29.md): Delivers an inbound message containing a specific number of next received bytes.
- [nw_framer_pass_through_input](nw_framer_pass_through_input%28__%29.md): Indicates that your protocol no longer needs to handle input data.

### Customizing Framer Messages

- [nw_framer_message_t](nw_framer_message_t.md): A message for a custom protocol, in which you can store arbitrary key-value pairs.
- [nw_protocol_metadata_is_framer_message](nw_protocol_metadata_is_framer_message%28__%29.md): Checks if a metadata object represents a custom framer protocol message.
- [nw_framer_protocol_create_message](nw_framer_protocol_create_message%28__%29.md): Initializes an empty message for a custom framer definition.
- [nw_framer_message_create](nw_framer_message_create%28__%29.md): Initializes an empty message from within a framer implementation.
- [nw_framer_message_set_value](nw_framer_message_set_value%28________%29.md): Sets a value to be stored in a framer message, with a completion to call to disposed the stored value when the message is released.
- [nw_framer_message_dispose_value_t](nw_framer_message_dispose_value_t.md): A handler that’s invoked when your custom value needs to be released due to a message being released or the value being replaced.
- [nw_framer_message_set_object_value](nw_framer_message_set_object_value%28______%29.md): Sets an NSObject value to be stored in a framer message.
- [nw_framer_message_access_value](nw_framer_message_access_value%28______%29.md): Accesses a custom value stored in a framer message.
- [nw_framer_message_copy_object_value](nw_framer_message_copy_object_value%28____%29.md): Accesses an NSObject value stored in a framer message.

### Managing Instance Lifetime

- [nw_framer_mark_ready](nw_framer_mark_ready%28__%29.md): Indicates to a connection that your protocol’s handshake is complete.
- [nw_framer_mark_failed_with_error](nw_framer_mark_failed_with_error%28____%29.md): Indicates to a connection that your protocol has encountered an error, or has gracefully closed.
- [nw_framer_prepend_application_protocol](nw_framer_prepend_application_protocol%28____%29.md): Dynamically adds another protocol that will run above your protocol after your protocol calls [nw_framer_mark_ready](nw_framer_mark_ready%28__%29.md).
- [nw_framer_set_stop_handler](nw_framer_set_stop_handler%28____%29.md): Sets a block to handle when the connection is being closed.
- [nw_framer_stop_handler_t](nw_framer_stop_handler_t.md): A handler that requests that your protocol send any final messages to close the connection.
- [nw_framer_set_cleanup_handler](nw_framer_set_cleanup_handler%28____%29.md): Sets a block to handle the final cleanup of allocations made by your protocol instance.
- [nw_framer_cleanup_handler_t](nw_framer_cleanup_handler_t.md): A handler that tells your protocol to clean up all allocations before being deallocated.

### Inspecting Instance Properties

- [nw_framer_copy_remote_endpoint](nw_framer_copy_remote_endpoint%28__%29.md): Accesses the remote endpoint of the connection in which your protocol is running.
- [nw_framer_copy_local_endpoint](nw_framer_copy_local_endpoint%28__%29.md): Accesses the local endpoint of the connection in which your protocol is running.
- [nw_framer_copy_parameters](nw_framer_copy_parameters%28__%29.md): Accesses the parameters of the connection in which your protocol is running.

### Handling Asynchronous Events

- [nw_framer_schedule_wakeup](nw_framer_schedule_wakeup%28____%29.md): Requests that the [nw_framer_wakeup_handler_t](nw_framer_wakeup_handler_t.md) be called on your protocol at a specific time in the future.
- [NW_FRAMER_WAKEUP_TIME_FOREVER](nw_framer_wakeup_time_forever.md): A sentinel value that indicates that no wakeup should be delivered.
- [nw_framer_set_wakeup_handler](nw_framer_set_wakeup_handler%28____%29.md): Sets a handler to receive scheduled wakeup events.
- [nw_framer_wakeup_handler_t](nw_framer_wakeup_handler_t.md): A handler that delivers a scheduled wakeup event.
- [nw_framer_async](nw_framer_async%28____%29.md): Requests that a block be executed on the connection’s internal scheduling context.
- [nw_framer_block_t](nw_framer_block_t.md): A block to be invoked asynchronously on your framer protocol’s scheduling context.

## See Also

### Network Protocols

- [TCP Options](tcp-options.md): Configure options for connections that use the Transmission Control Protocol.
- [TLS Options](tls-options.md): Configure options for connections that use Transport Layer Security.
- [QUIC Options](quic-options.md): Configure options for connections that use the QUIC transport protocol.
- [UDP Options](udp-options.md): Configure options for connections that use the User Datagram Protocol.
- [IP Options](ip-options.md): Configure Internet Protocol options on connections.
- [WebSocket Options](websocket-options.md): Configure options for connections that use WebSocket.
