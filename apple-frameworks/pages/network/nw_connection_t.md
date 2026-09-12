> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_connection_t](https://developer.apple.com/documentation/network/nw_connection_t)

# nw_connection_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A bidirectional data connection between a local endpoint and a remote endpoint.

## Declaration

```swift
typealias nw_connection_t = any OS_nw_connection
```

## Topics

### Creating Connections

- [nw_connection_create(\_:\_:)](nw_connection_create%28____%29.md): Initializes a new connection to a remote endpoint.
- [nw_connection_set_queue(\_:\_:)](nw_connection_set_queue%28____%29.md): Sets the queue on which all connection events are delivered.
- [nw_connection_start(\_:)](nw_connection_start%28__%29.md): Starts establishing a connection.
- [nw_connection_restart(\_:)](nw_connection_restart%28__%29.md): Restarts a connection that is in the waiting state.

### Handling State Updates

- [nw_connection_state_t](nw_connection_state_t.md): States indicating whether a connection can be used to send and receive data.
- [nw_connection_set_state_changed_handler(\_:\_:)](nw_connection_set_state_changed_handler%28____%29.md): Sets a handler to receive connection state updates.
- [nw_connection_state_changed_handler_t](nw_connection_state_changed_handler_t.md): A handler that delivers connection state updates with associated errors.

### Sending and Receiving Data

- [nw_connection_send(\_:\_:\_:\_:\_:)](nw_connection_send%28__________%29.md): Sends data on a connection.
- [nw_connection_send_completion_t](nw_connection_send_completion_t.md): A completion handler that indicates when the connection has finished processing sent content.
- [nw_content_context_t](nw_content_context_t.md): A representation of a message to send or receive, containing protocol metadata and send properties.
- [nw_connection_receive(\_:\_:\_:\_:)](nw_connection_receive%28________%29.md): Schedules a single receive completion handler, with a range indicating how many bytes the handler can receive at one time.
- [nw_connection_receive_completion_t](nw_connection_receive_completion_t.md): A completion handler that indicates when content has been received by the connection, or that an error was encountered.
- [nw_connection_receive_message(\_:\_:)](nw_connection_receive_message%28____%29.md): Schedules a single receive completion handler for a complete message, as opposed to a range of bytes.
- [nw_connection_batch(\_:\_:)](nw_connection_batch%28____%29.md): Defines a block in which calls to send and receive are processed as a batch to improve performance.
- [nw_connection_get_maximum_datagram_size(\_:)](nw_connection_get_maximum_datagram_size%28__%29.md): Accesses the maximum size of a datagram message that can be sent on a connection.

### Canceling Connections

- [nw_connection_cancel(\_:)](nw_connection_cancel%28__%29.md): Cancels the connection and gracefully disconnects any established network protocols.
- [nw_connection_force_cancel(\_:)](nw_connection_force_cancel%28__%29.md): Cancels the connection and immediately disconnects any established network protocols.
- [nw_connection_cancel_current_endpoint(\_:)](nw_connection_cancel_current_endpoint%28__%29.md): Causes the current endpoint to be rejected, allowing the connection to try another resolved address.

### Handling Path Updates

- [nw_connection_copy_current_path(\_:)](nw_connection_copy_current_path%28__%29.md): Accesses the network path the connection is using.
- [nw_connection_set_path_changed_handler(\_:\_:)](nw_connection_set_path_changed_handler%28____%29.md): Sets a handler that receives network path updates.
- [nw_connection_path_event_handler_t](nw_connection_path_event_handler_t.md): A handler that delivers network path updates.
- [nw_connection_set_viability_changed_handler(\_:\_:)](nw_connection_set_viability_changed_handler%28____%29.md): Sets a handler that receives updates when data can be sent and received.
- [nw_connection_set_better_path_available_handler(\_:\_:)](nw_connection_set_better_path_available_handler%28____%29.md): Sets a handler that receives updates when an alternative network path is preferred over the current path.
- [nw_connection_boolean_event_handler_t](nw_connection_boolean_event_handler_t.md): A handler that receives Boolean state updates from a connection, such as viability and better path state.

### Collecting Connection Metrics

- [nw_establishment_report_t](nw_establishment_report_t.md): A report that provides metrics about how a connection was established.
- [nw_connection_access_establishment_report(\_:\_:\_:)](nw_connection_access_establishment_report%28______%29.md): Requests a copy of the connection’s establishment report once the connection is in the ready state.
- [nw_establishment_report_access_block_t](nw_establishment_report_access_block_t.md): A block that delivers a connection’s establishment report when it’s in the ready state.
- [nw_data_transfer_report_t](nw_data_transfer_report_t.md): A report that provides metrics about data being sent and received on a connection.
- [nw_connection_create_new_data_transfer_report(\_:)](nw_connection_create_new_data_transfer_report%28__%29.md): Begins a new data transfer report, which can later be collected.

### Copying Connection State

- [nw_connection_copy_protocol_metadata(\_:\_:)](nw_connection_copy_protocol_metadata%28____%29.md): Retrieves the connection-wide metadata for a specific protocol.
- [nw_connection_copy_endpoint(\_:)](nw_connection_copy_endpoint%28__%29.md): Accesses the endpoint with which the connection was created.
- [nw_connection_copy_parameters(\_:)](nw_connection_copy_parameters%28__%29.md): Accesses the parameters with which the connection was created.
- [nw_connection_copy_description(\_:)](nw_connection_copy_description%28__%29.md): Copies the description of the connection as a string.

# nw_connection_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A bidirectional data connection between a local endpoint and a remote endpoint.

## Declaration

```objectivec
typedef NSObject<OS_nw_connection> * nw_connection_t;
```

## Topics

### Creating Connections

- [nw_connection_create](nw_connection_create%28____%29.md): Initializes a new connection to a remote endpoint.
- [nw_connection_set_queue](nw_connection_set_queue%28____%29.md): Sets the queue on which all connection events are delivered.
- [nw_connection_start](nw_connection_start%28__%29.md): Starts establishing a connection.
- [nw_connection_restart](nw_connection_restart%28__%29.md): Restarts a connection that is in the waiting state.

### Handling State Updates

- [nw_connection_state_t](nw_connection_state_t.md): States indicating whether a connection can be used to send and receive data.
- [nw_connection_set_state_changed_handler](nw_connection_set_state_changed_handler%28____%29.md): Sets a handler to receive connection state updates.
- [nw_connection_state_changed_handler_t](nw_connection_state_changed_handler_t.md): A handler that delivers connection state updates with associated errors.

### Sending and Receiving Data

- [nw_connection_send](nw_connection_send%28__________%29.md): Sends data on a connection.
- [nw_connection_send_completion_t](nw_connection_send_completion_t.md): A completion handler that indicates when the connection has finished processing sent content.
- [nw_content_context_t](nw_content_context_t.md): A representation of a message to send or receive, containing protocol metadata and send properties.
- [nw_connection_receive](nw_connection_receive%28________%29.md): Schedules a single receive completion handler, with a range indicating how many bytes the handler can receive at one time.
- [nw_connection_receive_completion_t](nw_connection_receive_completion_t.md): A completion handler that indicates when content has been received by the connection, or that an error was encountered.
- [nw_connection_receive_message](nw_connection_receive_message%28____%29.md): Schedules a single receive completion handler for a complete message, as opposed to a range of bytes.
- [nw_connection_batch](nw_connection_batch%28____%29.md): Defines a block in which calls to send and receive are processed as a batch to improve performance.
- [nw_connection_get_maximum_datagram_size](nw_connection_get_maximum_datagram_size%28__%29.md): Accesses the maximum size of a datagram message that can be sent on a connection.

### Canceling Connections

- [nw_connection_cancel](nw_connection_cancel%28__%29.md): Cancels the connection and gracefully disconnects any established network protocols.
- [nw_connection_force_cancel](nw_connection_force_cancel%28__%29.md): Cancels the connection and immediately disconnects any established network protocols.
- [nw_connection_cancel_current_endpoint](nw_connection_cancel_current_endpoint%28__%29.md): Causes the current endpoint to be rejected, allowing the connection to try another resolved address.

### Handling Path Updates

- [nw_connection_copy_current_path](nw_connection_copy_current_path%28__%29.md): Accesses the network path the connection is using.
- [nw_connection_set_path_changed_handler](nw_connection_set_path_changed_handler%28____%29.md): Sets a handler that receives network path updates.
- [nw_connection_path_event_handler_t](nw_connection_path_event_handler_t.md): A handler that delivers network path updates.
- [nw_connection_set_viability_changed_handler](nw_connection_set_viability_changed_handler%28____%29.md): Sets a handler that receives updates when data can be sent and received.
- [nw_connection_set_better_path_available_handler](nw_connection_set_better_path_available_handler%28____%29.md): Sets a handler that receives updates when an alternative network path is preferred over the current path.
- [nw_connection_boolean_event_handler_t](nw_connection_boolean_event_handler_t.md): A handler that receives Boolean state updates from a connection, such as viability and better path state.

### Collecting Connection Metrics

- [nw_establishment_report_t](nw_establishment_report_t.md): A report that provides metrics about how a connection was established.
- [nw_connection_access_establishment_report](nw_connection_access_establishment_report%28______%29.md): Requests a copy of the connection’s establishment report once the connection is in the ready state.
- [nw_establishment_report_access_block_t](nw_establishment_report_access_block_t.md): A block that delivers a connection’s establishment report when it’s in the ready state.
- [nw_data_transfer_report_t](nw_data_transfer_report_t.md): A report that provides metrics about data being sent and received on a connection.
- [nw_connection_create_new_data_transfer_report](nw_connection_create_new_data_transfer_report%28__%29.md): Begins a new data transfer report, which can later be collected.

### Copying Connection State

- [nw_connection_copy_protocol_metadata](nw_connection_copy_protocol_metadata%28____%29.md): Retrieves the connection-wide metadata for a specific protocol.
- [nw_connection_copy_endpoint](nw_connection_copy_endpoint%28__%29.md): Accesses the endpoint with which the connection was created.
- [nw_connection_copy_parameters](nw_connection_copy_parameters%28__%29.md): Accesses the parameters with which the connection was created.
- [nw_connection_copy_description](nw_connection_copy_description%28__%29.md): Copies the description of the connection as a string.

## See Also

### Connections and Listeners

- [Implementing netcat with Network Framework](implementing-netcat-with-network-framework.md): Build a simple `netcat` tool that establishes network connections and transfers data.
- [nw_listener_t](nw_listener_t.md): An object you use to listen for incoming network connections.
- [nw_browser_t](nw_browser_t.md): An object you use to browse for available network services.
- [nw_connection_group_t](nw_connection_group_t.md): An object you use to communicate with a group of endpoints, such as an IP multicast group on a local network.
- [nw_ethernet_channel_t](nw_ethernet_channel_t.md): An object you use to send and receive custom Ethernet frames.
