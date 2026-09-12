> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_connection_group_t](https://developer.apple.com/documentation/network/nw_connection_group_t)

# nw_connection_group_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An object you use to communicate with a group of endpoints, such as an IP multicast group on a local network.

## Declaration

```swift
typealias nw_connection_group_t = any OS_nw_connection_group
```

## Topics

### Establishing Group Connectivity

- [nw_connection_group_create(\_:\_:)](nw_connection_group_create%28____%29.md): Initializes a new connection group with a group identifier.
- [nw_group_descriptor_create_multicast(\_:)](nw_group_descriptor_create_multicast%28__%29.md): Creates group descriptor you use to join an IP multicast group on a local network.
- [nw_group_descriptor_t](nw_group_descriptor_t.md): A type that defines a group of endpoints with which you can communicate, such as a multicast group.
- [nw_group_descriptor_add_endpoint(\_:\_:)](nw_group_descriptor_add_endpoint%28____%29.md): Adds a multicast address endpoint you specify to define an extra IP multicast group to join.
- [nw_group_descriptor_enumerate_endpoints(\_:\_:)](nw_group_descriptor_enumerate_endpoints%28____%29.md): Sets a handler to list all endpoints added to the group descriptor.
- [nw_group_descriptor_enumerate_endpoints_block_t](nw_group_descriptor_enumerate_endpoints_block_t.md): A handler that lists all endpoints added to the group descriptor.
- [nw_connection_group_set_queue(\_:\_:)](nw_connection_group_set_queue%28____%29.md): Sets the queue on which you handle connection group events.
- [nw_connection_group_start(\_:)](nw_connection_group_start%28__%29.md): Joins the group and registers to receive messages.

### Sending and Receiving Group Messages

- [nw_connection_group_set_receive_handler(\_:\_:\_:\_:)](nw_connection_group_set_receive_handler%28________%29.md): Sets a handler that receives inbound messages from members of the group.
- [nw_connection_group_receive_handler_t](nw_connection_group_receive_handler_t.md): A handler that receives inbound messages from members of the group.
- [nw_connection_group_copy_remote_endpoint_for_message(\_:\_:)](nw_connection_group_copy_remote_endpoint_for_message%28____%29.md): Accesses the endpoint that originates the message you receive.
- [nw_connection_group_copy_local_endpoint_for_message(\_:\_:)](nw_connection_group_copy_local_endpoint_for_message%28____%29.md): Accesses the local address and port you use to receive the message.
- [nw_connection_group_copy_path_for_message(\_:\_:)](nw_connection_group_copy_path_for_message%28____%29.md): Accesses the network path on which you receive the message.
- [nw_connection_group_reply(\_:\_:\_:\_:)](nw_connection_group_reply%28________%29.md): Sends a reply to the specific endpoint that originates a group message you receive.
- [nw_connection_group_extract_connection_for_message(\_:\_:)](nw_connection_group_extract_connection_for_message%28____%29.md): Converts a message you receive from an endpoint into a connection object that you use for long-term communication with that endpoint.
- [nw_connection_group_send_message(\_:\_:\_:\_:\_:)](nw_connection_group_send_message%28__________%29.md): Sends data to the entire group, or to a specific member of the group.
- [nw_connection_group_send_completion_t](nw_connection_group_send_completion_t.md): A completion to notify you when data has been processed and sent.

### Managing Groups

- [nw_connection_group_set_state_changed_handler(\_:\_:)](nw_connection_group_set_state_changed_handler%28____%29.md): Sets a handler that receives connection group state updates.
- [nw_connection_group_state_changed_handler_t](nw_connection_group_state_changed_handler_t.md): A handler that receives connection group state updates.
- [nw_connection_group_state_t](nw_connection_group_state_t.md): States that indicate whether you can use a connection group to send and receive messages.
- [nw_connection_group_cancel(\_:)](nw_connection_group_cancel%28__%29.md): Cancels the connection group object and leaves the network group.

### Inspecting Groups

- [nw_connection_group_copy_descriptor(\_:)](nw_connection_group_copy_descriptor%28__%29.md): Accesses the descriptor of the group you use to initialize the connection group.
- [nw_connection_group_copy_parameters(\_:)](nw_connection_group_copy_parameters%28__%29.md): Accesses the parameters with which you initialize the connection group.

# nw_connection_group_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An object you use to communicate with a group of endpoints, such as an IP multicast group on a local network.

## Declaration

```objectivec
typedef NSObject<OS_nw_connection_group> * nw_connection_group_t;
```

## Topics

### Establishing Group Connectivity

- [nw_connection_group_create](nw_connection_group_create%28____%29.md): Initializes a new connection group with a group identifier.
- [nw_group_descriptor_create_multicast](nw_group_descriptor_create_multicast%28__%29.md): Creates group descriptor you use to join an IP multicast group on a local network.
- [nw_group_descriptor_t](nw_group_descriptor_t.md): A type that defines a group of endpoints with which you can communicate, such as a multicast group.
- [nw_group_descriptor_add_endpoint](nw_group_descriptor_add_endpoint%28____%29.md): Adds a multicast address endpoint you specify to define an extra IP multicast group to join.
- [nw_group_descriptor_enumerate_endpoints](nw_group_descriptor_enumerate_endpoints%28____%29.md): Sets a handler to list all endpoints added to the group descriptor.
- [nw_group_descriptor_enumerate_endpoints_block_t](nw_group_descriptor_enumerate_endpoints_block_t.md): A handler that lists all endpoints added to the group descriptor.
- [nw_connection_group_set_queue](nw_connection_group_set_queue%28____%29.md): Sets the queue on which you handle connection group events.
- [nw_connection_group_start](nw_connection_group_start%28__%29.md): Joins the group and registers to receive messages.

### Sending and Receiving Group Messages

- [nw_connection_group_set_receive_handler](nw_connection_group_set_receive_handler%28________%29.md): Sets a handler that receives inbound messages from members of the group.
- [nw_connection_group_receive_handler_t](nw_connection_group_receive_handler_t.md): A handler that receives inbound messages from members of the group.
- [nw_connection_group_copy_remote_endpoint_for_message](nw_connection_group_copy_remote_endpoint_for_message%28____%29.md): Accesses the endpoint that originates the message you receive.
- [nw_connection_group_copy_local_endpoint_for_message](nw_connection_group_copy_local_endpoint_for_message%28____%29.md): Accesses the local address and port you use to receive the message.
- [nw_connection_group_copy_path_for_message](nw_connection_group_copy_path_for_message%28____%29.md): Accesses the network path on which you receive the message.
- [nw_connection_group_reply](nw_connection_group_reply%28________%29.md): Sends a reply to the specific endpoint that originates a group message you receive.
- [nw_connection_group_extract_connection_for_message](nw_connection_group_extract_connection_for_message%28____%29.md): Converts a message you receive from an endpoint into a connection object that you use for long-term communication with that endpoint.
- [nw_connection_group_send_message](nw_connection_group_send_message%28__________%29.md): Sends data to the entire group, or to a specific member of the group.
- [nw_connection_group_send_completion_t](nw_connection_group_send_completion_t.md): A completion to notify you when data has been processed and sent.

### Managing Groups

- [nw_connection_group_set_state_changed_handler](nw_connection_group_set_state_changed_handler%28____%29.md): Sets a handler that receives connection group state updates.
- [nw_connection_group_state_changed_handler_t](nw_connection_group_state_changed_handler_t.md): A handler that receives connection group state updates.
- [nw_connection_group_state_t](nw_connection_group_state_t.md): States that indicate whether you can use a connection group to send and receive messages.
- [nw_connection_group_cancel](nw_connection_group_cancel%28__%29.md): Cancels the connection group object and leaves the network group.

### Inspecting Groups

- [nw_connection_group_copy_descriptor](nw_connection_group_copy_descriptor%28__%29.md): Accesses the descriptor of the group you use to initialize the connection group.
- [nw_connection_group_copy_parameters](nw_connection_group_copy_parameters%28__%29.md): Accesses the parameters with which you initialize the connection group.

## See Also

### Connections and Listeners

- [Implementing netcat with Network Framework](implementing-netcat-with-network-framework.md): Build a simple `netcat` tool that establishes network connections and transfers data.
- [nw_connection_t](nw_connection_t.md): A bidirectional data connection between a local endpoint and a remote endpoint.
- [nw_listener_t](nw_listener_t.md): An object you use to listen for incoming network connections.
- [nw_browser_t](nw_browser_t.md): An object you use to browse for available network services.
- [nw_ethernet_channel_t](nw_ethernet_channel_t.md): An object you use to send and receive custom Ethernet frames.
