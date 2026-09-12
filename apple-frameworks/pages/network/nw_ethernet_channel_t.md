> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_ethernet_channel_t](https://developer.apple.com/documentation/network/nw_ethernet_channel_t)

# nw_ethernet_channel_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An object you use to send and receive custom Ethernet frames.

## Declaration

```swift
typealias nw_ethernet_channel_t = any OS_nw_ethernet_channel
```

<a id="Discussion"></a>

## Discussion

Use Ethernet channels to send and receive custom Ethernet frame types over an interface.

Creating Ethernet channels requires the `com.apple.developer.networking.custom-protocol` entitlement.

## Topics

### Managing Ethernet Channels

- [nw_ethernet_channel_create(\_:\_:)](nw_ethernet_channel_create%28____%29.md): Initializes an Ethernet channel on a specific interface with a custom Ethernet type.
- [nw_ethernet_channel_set_queue(\_:\_:)](nw_ethernet_channel_set_queue%28____%29.md): Sets the queue on which all channel events are delivered.
- [nw_ethernet_channel_start(\_:)](nw_ethernet_channel_start%28__%29.md): Starts the process of registering the channel.
- [nw_ethernet_channel_cancel(\_:)](nw_ethernet_channel_cancel%28__%29.md): Unregisters the channel from the interface.

### Handling State Updates

- [nw_ethernet_channel_set_state_changed_handler(\_:\_:)](nw_ethernet_channel_set_state_changed_handler%28____%29.md): Sets a handler to receive channel state updates.
- [nw_ethernet_channel_state_changed_handler_t](nw_ethernet_channel_state_changed_handler_t.md): A handler that delivers Ethernet channel state updates with associated errors.
- [nw_ethernet_channel_state_t](nw_ethernet_channel_state_t.md): States indicating whether an Ethernet channel is able to send and receive frames.

### Sending and Receiving Ethernet Frames

- [nw_ethernet_channel_send(\_:\_:\_:\_:\_:)](nw_ethernet_channel_send%28__________%29.md): Sends a single Ethernet frame over a channel to a specific Ethernet address.
- [nw_ethernet_channel_send_completion_t](nw_ethernet_channel_send_completion_t.md): A handler that indicates when an Ethernet frame has been sent, or if an error was encountered.
- [nw_ethernet_channel_set_receive_handler(\_:\_:)](nw_ethernet_channel_set_receive_handler%28____%29.md): Sets a handler to receive inbound Ethernet frames.
- [nw_ethernet_channel_receive_handler_t](nw_ethernet_channel_receive_handler_t.md): A handler that delivers inbound Ethernet frames.
- [nw_ethernet_address_t](nw_ethernet_address_t.md): A 48-bit Ethernet address.

# nw_ethernet_channel_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An object you use to send and receive custom Ethernet frames.

## Declaration

```objectivec
typedef NSObject<OS_nw_ethernet_channel> * nw_ethernet_channel_t;
```

<a id="Discussion"></a>

## Discussion

Use Ethernet channels to send and receive custom Ethernet frame types over an interface.

Creating Ethernet channels requires the `com.apple.developer.networking.custom-protocol` entitlement.

## Topics

### Managing Ethernet Channels

- [nw_ethernet_channel_create](nw_ethernet_channel_create%28____%29.md): Initializes an Ethernet channel on a specific interface with a custom Ethernet type.
- [nw_ethernet_channel_set_queue](nw_ethernet_channel_set_queue%28____%29.md): Sets the queue on which all channel events are delivered.
- [nw_ethernet_channel_start](nw_ethernet_channel_start%28__%29.md): Starts the process of registering the channel.
- [nw_ethernet_channel_cancel](nw_ethernet_channel_cancel%28__%29.md): Unregisters the channel from the interface.

### Handling State Updates

- [nw_ethernet_channel_set_state_changed_handler](nw_ethernet_channel_set_state_changed_handler%28____%29.md): Sets a handler to receive channel state updates.
- [nw_ethernet_channel_state_changed_handler_t](nw_ethernet_channel_state_changed_handler_t.md): A handler that delivers Ethernet channel state updates with associated errors.
- [nw_ethernet_channel_state_t](nw_ethernet_channel_state_t.md): States indicating whether an Ethernet channel is able to send and receive frames.

### Sending and Receiving Ethernet Frames

- [nw_ethernet_channel_send](nw_ethernet_channel_send%28__________%29.md): Sends a single Ethernet frame over a channel to a specific Ethernet address.
- [nw_ethernet_channel_send_completion_t](nw_ethernet_channel_send_completion_t.md): A handler that indicates when an Ethernet frame has been sent, or if an error was encountered.
- [nw_ethernet_channel_set_receive_handler](nw_ethernet_channel_set_receive_handler%28____%29.md): Sets a handler to receive inbound Ethernet frames.
- [nw_ethernet_channel_receive_handler_t](nw_ethernet_channel_receive_handler_t.md): A handler that delivers inbound Ethernet frames.
- [nw_ethernet_address_t](nw_ethernet_address_t.md): A 48-bit Ethernet address.

## See Also

### Connections and Listeners

- [Implementing netcat with Network Framework](implementing-netcat-with-network-framework.md): Build a simple `netcat` tool that establishes network connections and transfers data.
- [nw_connection_t](nw_connection_t.md): A bidirectional data connection between a local endpoint and a remote endpoint.
- [nw_listener_t](nw_listener_t.md): An object you use to listen for incoming network connections.
- [nw_browser_t](nw_browser_t.md): An object you use to browse for available network services.
- [nw_connection_group_t](nw_connection_group_t.md): An object you use to communicate with a group of endpoints, such as an IP multicast group on a local network.
