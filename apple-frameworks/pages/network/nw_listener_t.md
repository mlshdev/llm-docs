> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_listener_t](https://developer.apple.com/documentation/network/nw_listener_t)

# nw_listener_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An object you use to listen for incoming network connections.

## Declaration

```swift
typealias nw_listener_t = any OS_nw_listener
```

## Topics

### Creating Listeners

- [nw_listener_create(\_:)](nw_listener_create%28__%29.md): Initializes a network listener, which will select a random port.
- [nw_listener_create_with_port(\_:\_:)](nw_listener_create_with_port%28____%29.md): Initializes a network listener with a specified local port.
- [nw_listener_create_with_connection(\_:\_:)](nw_listener_create_with_connection%28____%29.md): Initializes a network listener to receive new streams on a multiplexed connection.
- [nw_listener_set_queue(\_:\_:)](nw_listener_set_queue%28____%29.md): Sets the queue on which all listener events are delivered.
- [nw_listener_start(\_:)](nw_listener_start%28__%29.md): Registers for listening for inbound connections.
- [nw_listener_get_port(\_:)](nw_listener_get_port%28__%29.md): The port on which the listener can accept connections.
- [nw_listener_cancel(\_:)](nw_listener_cancel%28__%29.md): Stops listening for inbound connections.

### Receiving Connections

- [nw_listener_set_new_connection_handler(\_:\_:)](nw_listener_set_new_connection_handler%28____%29.md): Sets a handler that receives inbound connections.
- [nw_listener_new_connection_handler_t](nw_listener_new_connection_handler_t.md): A handler that delivers inbound connections.
- [nw_listener_set_new_connection_limit(\_:\_:)](nw_listener_set_new_connection_limit%28____%29.md): Resets the number of inbound connections to deliver before rejecting connections.
- [nw_listener_get_new_connection_limit(\_:)](nw_listener_get_new_connection_limit%28__%29.md): Checks the remaining number of inbound connections to deliver before rejecting connections.
- [NW_LISTENER_INFINITE_CONNECTION_LIMIT](nw_listener_infinite_connection_limit.md): A static value that indicates that inbound connections should not be limited.

### Advertising Bonjour Services

- [NSBonjourServices](../bundleresources/information-property-list/nsbonjourservices.md): Bonjour service types browsed by the app.
- [NSLocalNetworkUsageDescription](../bundleresources/information-property-list/nslocalnetworkusagedescription.md): A message that tells people why the app is requesting access to the local network.
- [nw_listener_set_advertise_descriptor(\_:\_:)](nw_listener_set_advertise_descriptor%28____%29.md): Sets a Bonjour service that advertises the listener on the local network.
- [nw_advertise_descriptor_t](nw_advertise_descriptor_t.md): A description used to advertise the Bonjour service that a listener provides.
- [nw_listener_set_advertised_endpoint_changed_handler(\_:\_:)](nw_listener_set_advertised_endpoint_changed_handler%28____%29.md): Sets a handler that receives updates for the service endpoint being advertised.
- [nw_listener_advertised_endpoint_changed_handler_t](nw_listener_advertised_endpoint_changed_handler_t.md): A handler that indicates changes to the service endpoints being advertised as they are added and removed.

### Handling State Updates

- [nw_listener_set_state_changed_handler(\_:\_:)](nw_listener_set_state_changed_handler%28____%29.md): Sets a handler to receive listener state updates.
- [nw_listener_state_changed_handler_t](nw_listener_state_changed_handler_t.md): A handler that delivers listener state updates with associated errors.
- [nw_listener_state_t](nw_listener_state_t.md): States indicating whether a listener is able to accept incoming connections.

# nw_listener_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An object you use to listen for incoming network connections.

## Declaration

```objectivec
typedef NSObject<OS_nw_listener> * nw_listener_t;
```

## Topics

### Creating Listeners

- [nw_listener_create](nw_listener_create%28__%29.md): Initializes a network listener, which will select a random port.
- [nw_listener_create_with_port](nw_listener_create_with_port%28____%29.md): Initializes a network listener with a specified local port.
- [nw_listener_create_with_connection](nw_listener_create_with_connection%28____%29.md): Initializes a network listener to receive new streams on a multiplexed connection.
- [nw_listener_set_queue](nw_listener_set_queue%28____%29.md): Sets the queue on which all listener events are delivered.
- [nw_listener_start](nw_listener_start%28__%29.md): Registers for listening for inbound connections.
- [nw_listener_get_port](nw_listener_get_port%28__%29.md): The port on which the listener can accept connections.
- [nw_listener_cancel](nw_listener_cancel%28__%29.md): Stops listening for inbound connections.

### Receiving Connections

- [nw_listener_set_new_connection_handler](nw_listener_set_new_connection_handler%28____%29.md): Sets a handler that receives inbound connections.
- [nw_listener_new_connection_handler_t](nw_listener_new_connection_handler_t.md): A handler that delivers inbound connections.
- [nw_listener_set_new_connection_limit](nw_listener_set_new_connection_limit%28____%29.md): Resets the number of inbound connections to deliver before rejecting connections.
- [nw_listener_get_new_connection_limit](nw_listener_get_new_connection_limit%28__%29.md): Checks the remaining number of inbound connections to deliver before rejecting connections.
- [NW_LISTENER_INFINITE_CONNECTION_LIMIT](nw_listener_infinite_connection_limit.md): A static value that indicates that inbound connections should not be limited.

### Advertising Bonjour Services

- [NSBonjourServices](../bundleresources/information-property-list/nsbonjourservices.md): Bonjour service types browsed by the app.
- [NSLocalNetworkUsageDescription](../bundleresources/information-property-list/nslocalnetworkusagedescription.md): A message that tells people why the app is requesting access to the local network.
- [nw_listener_set_advertise_descriptor](nw_listener_set_advertise_descriptor%28____%29.md): Sets a Bonjour service that advertises the listener on the local network.
- [nw_advertise_descriptor_t](nw_advertise_descriptor_t.md): A description used to advertise the Bonjour service that a listener provides.
- [nw_listener_set_advertised_endpoint_changed_handler](nw_listener_set_advertised_endpoint_changed_handler%28____%29.md): Sets a handler that receives updates for the service endpoint being advertised.
- [nw_listener_advertised_endpoint_changed_handler_t](nw_listener_advertised_endpoint_changed_handler_t.md): A handler that indicates changes to the service endpoints being advertised as they are added and removed.

### Handling State Updates

- [nw_listener_set_state_changed_handler](nw_listener_set_state_changed_handler%28____%29.md): Sets a handler to receive listener state updates.
- [nw_listener_state_changed_handler_t](nw_listener_state_changed_handler_t.md): A handler that delivers listener state updates with associated errors.
- [nw_listener_state_t](nw_listener_state_t.md): States indicating whether a listener is able to accept incoming connections.

## See Also

### Connections and Listeners

- [Implementing netcat with Network Framework](implementing-netcat-with-network-framework.md): Build a simple `netcat` tool that establishes network connections and transfers data.
- [nw_connection_t](nw_connection_t.md): A bidirectional data connection between a local endpoint and a remote endpoint.
- [nw_browser_t](nw_browser_t.md): An object you use to browse for available network services.
- [nw_connection_group_t](nw_connection_group_t.md): An object you use to communicate with a group of endpoints, such as an IP multicast group on a local network.
- [nw_ethernet_channel_t](nw_ethernet_channel_t.md): An object you use to send and receive custom Ethernet frames.
