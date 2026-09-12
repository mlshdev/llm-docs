> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_parameters_t](https://developer.apple.com/documentation/network/nw_parameters_t)

# nw_parameters_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An object that stores the protocols to use for connections, options for sending data, and network path constraints.

## Declaration

```swift
typealias nw_parameters_t = any OS_nw_parameters
```

## Mentioned In

- [Indicating the source of network activity](indicating-the-source-of-network-activity.md)

## Topics

### Creating Parameters

- [nw_parameters_create_secure_tcp(\_:\_:)](nw_parameters_create_secure_tcp%28____%29.md): Initializes parameters for TLS or TCP connections and listeners.
- [nw_parameters_create_secure_udp(\_:\_:)](nw_parameters_create_secure_udp%28____%29.md): Initializes parameters for DTLS or UDP connections and listeners.
- [nw_parameters_create_quic(\_:)](nw_parameters_create_quic%28__%29.md): Initializes parameters for QUIC connections and listeners.
- [nw_parameters_configure_protocol_block_t](nw_parameters_configure_protocol_block_t.md): A block to configure protocol options during the creation of a parameters object.
- [nw_parameters_create()](nw_parameters_create%28%29.md): Initializes parameters for connections, listeners, and browsers with no protocols specified.
- [nw_parameters_create_custom_ip(\_:\_:)](nw_parameters_create_custom_ip%28____%29.md): Initializes parameters for connections and listeners using a custom IP protocol.
- [nw_parameters_copy(\_:)](nw_parameters_copy%28__%29.md): Peforms a deep copy of a parameters object.

### Modifying Protocol Stacks

- [nw_parameters_copy_default_protocol_stack(\_:)](nw_parameters_copy_default_protocol_stack%28__%29.md): Accesses the protocol stack used by connections and listeners.
- [nw_protocol_stack_t](nw_protocol_stack_t.md): An ordered set of protocol options that define the protocols that connections and listeners use.
- [nw_protocol_definition_t](nw_protocol_definition_t.md): The abstract superclass for identifying a network protocol.
- [nw_protocol_options_t](nw_protocol_options_t.md): The abstract superclass for configuring the options of a network protocol.

### Selecting Paths

- [nw_parameters_set_required_interface_type(\_:\_:)](nw_parameters_set_required_interface_type%28____%29.md): Sets an interface type to require on connections and listeners.
- [nw_parameters_get_required_interface_type(\_:)](nw_parameters_get_required_interface_type%28__%29.md): Accesses the interface type required on connections and listeners.
- [nw_parameters_require_interface(\_:\_:)](nw_parameters_require_interface%28____%29.md): Sets a specific interface to require on connections, listeners, and browsers.
- [nw_parameters_copy_required_interface(\_:)](nw_parameters_copy_required_interface%28__%29.md): Accesses the interface required on connections, listeners, and browsers.
- [nw_parameters_set_local_endpoint(\_:\_:)](nw_parameters_set_local_endpoint%28____%29.md): Sets a specific local IP address and port to use for connections and listeners.
- [nw_parameters_copy_local_endpoint(\_:)](nw_parameters_copy_local_endpoint%28__%29.md): Accesses the local IP address and port used for connections and listeners.
- [nw_parameters_set_prohibit_constrained(\_:\_:)](nw_parameters_set_prohibit_constrained%28____%29.md): Prevents connections, listeners, and browsers from using network paths marked as constrained by Low Data Mode.
- [nw_parameters_get_prohibit_constrained(\_:)](nw_parameters_get_prohibit_constrained%28__%29.md): Checks if connections, listeners, and browsers are prevented from using network paths marked as constrained by Low Data Mode.
- [nw_parameters_set_prohibit_expensive(\_:\_:)](nw_parameters_set_prohibit_expensive%28____%29.md): Prevents connections, listeners, and browsers from using network paths marked as expensive.
- [nw_parameters_get_prohibit_expensive(\_:)](nw_parameters_get_prohibit_expensive%28__%29.md): Checks if connections, listeners, and browsers are prevented from using network paths marked as expensive.
- [nw_parameters_prohibit_interface_type(\_:\_:)](nw_parameters_prohibit_interface_type%28____%29.md): Prevents connections, listeners, and browsers from using a specific interface type.
- [nw_parameters_clear_prohibited_interface_types(\_:)](nw_parameters_clear_prohibited_interface_types%28__%29.md): Removes all prohibited interface types.
- [nw_parameters_iterate_prohibited_interface_types(\_:\_:)](nw_parameters_iterate_prohibited_interface_types%28____%29.md): Examines the list of prohibited interface types.
- [nw_parameters_iterate_interface_types_block_t](nw_parameters_iterate_interface_types_block_t.md): A block that allows inspection of a list of interface types.
- [nw_parameters_prohibit_interface(\_:\_:)](nw_parameters_prohibit_interface%28____%29.md): Prevents connections and listeners from using a specific interface.
- [nw_parameters_clear_prohibited_interfaces(\_:)](nw_parameters_clear_prohibited_interfaces%28__%29.md): Removes all prohibited interface types.
- [nw_parameters_iterate_prohibited_interfaces(\_:\_:)](nw_parameters_iterate_prohibited_interfaces%28____%29.md): Examines the list of prohibited interfaces.
- [nw_parameters_iterate_interfaces_block_t](nw_parameters_iterate_interfaces_block_t.md): A block that allows inspection of a list of interfaces.

### Customizing Connection Options

- [nw_parameters_set_multipath_service(\_:\_:)](nw_parameters_set_multipath_service%28____%29.md): Enables multipath protocols to allow connections to use multiple interfaces.
- [nw_parameters_get_multipath_service(\_:)](nw_parameters_get_multipath_service%28__%29.md): Checks if multipath is enabled on a connection.
- [nw_multipath_service_t](nw_multipath_service_t.md): Modes in which a connection can support multipath protocols.
- [nw_parameters_set_service_class(\_:\_:)](nw_parameters_set_service_class%28____%29.md): Sets a level of service quality to use for connections.
- [nw_parameters_get_service_class(\_:)](nw_parameters_get_service_class%28__%29.md): Checks the level of service quality used for connections.
- [nw_service_class_t](nw_service_class_t.md): Levels of service quality that can be used with a connection.
- [nw_parameters_set_fast_open_enabled(\_:\_:)](nw_parameters_set_fast_open_enabled%28____%29.md): Enables sending application data with protocol handshakes.
- [nw_parameters_get_fast_open_enabled(\_:)](nw_parameters_get_fast_open_enabled%28__%29.md): Checks if sending application data with protocol handshakes is enabled.
- [nw_parameters_set_expired_dns_behavior(\_:\_:)](nw_parameters_set_expired_dns_behavior%28____%29.md): Sets the behavior for how expired DNS answers should be used.
- [nw_parameters_get_expired_dns_behavior(\_:)](nw_parameters_get_expired_dns_behavior%28__%29.md): Checks the behavior for how expired DNS answers should be used.
- [nw_parameters_expired_dns_behavior_t](nw_parameters_expired_dns_behavior_t.md): Options for configuring how expired DNS answers should be used.
- [nw_parameters_set_requires_dnssec_validation(\_:\_:)](nw_parameters_set_requires_dnssec_validation%28____%29.md): Determines whether a connection requires DNSSEC validation when resolving endpoints.
- [nw_parameters_requires_dnssec_validation(\_:)](nw_parameters_requires_dnssec_validation%28__%29.md): Checks whether a connection requires DNSSEC validation when resolving endpoints.
- [nw_parameters_set_prefer_no_proxy(\_:\_:)](nw_parameters_set_prefer_no_proxy%28____%29.md): Sets a Boolean that indicates that connections should ignore proxies when they are enabled on the system.
- [nw_parameters_get_prefer_no_proxy(\_:)](nw_parameters_get_prefer_no_proxy%28__%29.md): Checks if proxies are ignored by default.
- [nw_parameters_set_include_peer_to_peer(\_:\_:)](nw_parameters_set_include_peer_to_peer%28____%29.md): Enables peer-to-peer link technologies for connections and listeners.
- [nw_parameters_get_include_peer_to_peer(\_:)](nw_parameters_get_include_peer_to_peer%28__%29.md): Checks whether a connection is allowed to use peer-to-peer link technologies.
- [nw_parameters_set_reuse_local_address(\_:\_:)](nw_parameters_set_reuse_local_address%28____%29.md): Allows reusing local addresses and ports across connections.
- [nw_parameters_get_reuse_local_address(\_:)](nw_parameters_get_reuse_local_address%28__%29.md): Checks whether a connection allows reusing local addresses and ports.
- [nw_parameters_set_local_only(\_:\_:)](nw_parameters_set_local_only%28____%29.md): Restricts listeners to only accepting connections from the local link.
- [nw_parameters_get_local_only(\_:)](nw_parameters_get_local_only%28__%29.md): Checks if a listener is restricted to accepting connections from the local link.

### Configuring Privacy Settings

- [nw_parameters_set_privacy_context(\_:\_:)](nw_parameters_set_privacy_context%28____%29.md): Associates a privacy context with any connections or listeners that use the parameters.
- [nw_privacy_context_t](nw_privacy_context_t.md): An object that defines the privacy requirements for a set of connections.

# nw_parameters_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An object that stores the protocols to use for connections, options for sending data, and network path constraints.

## Declaration

```objectivec
typedef NSObject<OS_nw_parameters> * nw_parameters_t;
```

## Mentioned In

- [Indicating the source of network activity](indicating-the-source-of-network-activity.md)

## Topics

### Creating Parameters

- [nw_parameters_create_secure_tcp](nw_parameters_create_secure_tcp%28____%29.md): Initializes parameters for TLS or TCP connections and listeners.
- [nw_parameters_create_secure_udp](nw_parameters_create_secure_udp%28____%29.md): Initializes parameters for DTLS or UDP connections and listeners.
- [nw_parameters_create_quic](nw_parameters_create_quic%28__%29.md): Initializes parameters for QUIC connections and listeners.
- [nw_parameters_configure_protocol_block_t](nw_parameters_configure_protocol_block_t.md): A block to configure protocol options during the creation of a parameters object.
- [nw_parameters_create](nw_parameters_create%28%29.md): Initializes parameters for connections, listeners, and browsers with no protocols specified.
- [nw_parameters_create_custom_ip](nw_parameters_create_custom_ip%28____%29.md): Initializes parameters for connections and listeners using a custom IP protocol.
- [nw_parameters_copy](nw_parameters_copy%28__%29.md): Peforms a deep copy of a parameters object.

### Modifying Protocol Stacks

- [nw_parameters_copy_default_protocol_stack](nw_parameters_copy_default_protocol_stack%28__%29.md): Accesses the protocol stack used by connections and listeners.
- [nw_protocol_stack_t](nw_protocol_stack_t.md): An ordered set of protocol options that define the protocols that connections and listeners use.
- [nw_protocol_definition_t](nw_protocol_definition_t.md): The abstract superclass for identifying a network protocol.
- [nw_protocol_options_t](nw_protocol_options_t.md): The abstract superclass for configuring the options of a network protocol.

### Selecting Paths

- [nw_parameters_set_required_interface_type](nw_parameters_set_required_interface_type%28____%29.md): Sets an interface type to require on connections and listeners.
- [nw_parameters_get_required_interface_type](nw_parameters_get_required_interface_type%28__%29.md): Accesses the interface type required on connections and listeners.
- [nw_parameters_require_interface](nw_parameters_require_interface%28____%29.md): Sets a specific interface to require on connections, listeners, and browsers.
- [nw_parameters_copy_required_interface](nw_parameters_copy_required_interface%28__%29.md): Accesses the interface required on connections, listeners, and browsers.
- [nw_parameters_set_local_endpoint](nw_parameters_set_local_endpoint%28____%29.md): Sets a specific local IP address and port to use for connections and listeners.
- [nw_parameters_copy_local_endpoint](nw_parameters_copy_local_endpoint%28__%29.md): Accesses the local IP address and port used for connections and listeners.
- [nw_parameters_set_prohibit_constrained](nw_parameters_set_prohibit_constrained%28____%29.md): Prevents connections, listeners, and browsers from using network paths marked as constrained by Low Data Mode.
- [nw_parameters_get_prohibit_constrained](nw_parameters_get_prohibit_constrained%28__%29.md): Checks if connections, listeners, and browsers are prevented from using network paths marked as constrained by Low Data Mode.
- [nw_parameters_set_prohibit_expensive](nw_parameters_set_prohibit_expensive%28____%29.md): Prevents connections, listeners, and browsers from using network paths marked as expensive.
- [nw_parameters_get_prohibit_expensive](nw_parameters_get_prohibit_expensive%28__%29.md): Checks if connections, listeners, and browsers are prevented from using network paths marked as expensive.
- [nw_parameters_prohibit_interface_type](nw_parameters_prohibit_interface_type%28____%29.md): Prevents connections, listeners, and browsers from using a specific interface type.
- [nw_parameters_clear_prohibited_interface_types](nw_parameters_clear_prohibited_interface_types%28__%29.md): Removes all prohibited interface types.
- [nw_parameters_iterate_prohibited_interface_types](nw_parameters_iterate_prohibited_interface_types%28____%29.md): Examines the list of prohibited interface types.
- [nw_parameters_iterate_interface_types_block_t](nw_parameters_iterate_interface_types_block_t.md): A block that allows inspection of a list of interface types.
- [nw_parameters_prohibit_interface](nw_parameters_prohibit_interface%28____%29.md): Prevents connections and listeners from using a specific interface.
- [nw_parameters_clear_prohibited_interfaces](nw_parameters_clear_prohibited_interfaces%28__%29.md): Removes all prohibited interface types.
- [nw_parameters_iterate_prohibited_interfaces](nw_parameters_iterate_prohibited_interfaces%28____%29.md): Examines the list of prohibited interfaces.
- [nw_parameters_iterate_interfaces_block_t](nw_parameters_iterate_interfaces_block_t.md): A block that allows inspection of a list of interfaces.

### Customizing Connection Options

- [nw_parameters_set_multipath_service](nw_parameters_set_multipath_service%28____%29.md): Enables multipath protocols to allow connections to use multiple interfaces.
- [nw_parameters_get_multipath_service](nw_parameters_get_multipath_service%28__%29.md): Checks if multipath is enabled on a connection.
- [nw_multipath_service_t](nw_multipath_service_t.md): Modes in which a connection can support multipath protocols.
- [nw_parameters_set_service_class](nw_parameters_set_service_class%28____%29.md): Sets a level of service quality to use for connections.
- [nw_parameters_get_service_class](nw_parameters_get_service_class%28__%29.md): Checks the level of service quality used for connections.
- [nw_service_class_t](nw_service_class_t.md): Levels of service quality that can be used with a connection.
- [nw_parameters_set_fast_open_enabled](nw_parameters_set_fast_open_enabled%28____%29.md): Enables sending application data with protocol handshakes.
- [nw_parameters_get_fast_open_enabled](nw_parameters_get_fast_open_enabled%28__%29.md): Checks if sending application data with protocol handshakes is enabled.
- [nw_parameters_set_expired_dns_behavior](nw_parameters_set_expired_dns_behavior%28____%29.md): Sets the behavior for how expired DNS answers should be used.
- [nw_parameters_get_expired_dns_behavior](nw_parameters_get_expired_dns_behavior%28__%29.md): Checks the behavior for how expired DNS answers should be used.
- [nw_parameters_expired_dns_behavior_t](nw_parameters_expired_dns_behavior_t.md): Options for configuring how expired DNS answers should be used.
- [nw_parameters_set_requires_dnssec_validation](nw_parameters_set_requires_dnssec_validation%28____%29.md): Determines whether a connection requires DNSSEC validation when resolving endpoints.
- [nw_parameters_requires_dnssec_validation](nw_parameters_requires_dnssec_validation%28__%29.md): Checks whether a connection requires DNSSEC validation when resolving endpoints.
- [nw_parameters_set_prefer_no_proxy](nw_parameters_set_prefer_no_proxy%28____%29.md): Sets a Boolean that indicates that connections should ignore proxies when they are enabled on the system.
- [nw_parameters_get_prefer_no_proxy](nw_parameters_get_prefer_no_proxy%28__%29.md): Checks if proxies are ignored by default.
- [nw_parameters_set_include_peer_to_peer](nw_parameters_set_include_peer_to_peer%28____%29.md): Enables peer-to-peer link technologies for connections and listeners.
- [nw_parameters_get_include_peer_to_peer](nw_parameters_get_include_peer_to_peer%28__%29.md): Checks whether a connection is allowed to use peer-to-peer link technologies.
- [nw_parameters_set_reuse_local_address](nw_parameters_set_reuse_local_address%28____%29.md): Allows reusing local addresses and ports across connections.
- [nw_parameters_get_reuse_local_address](nw_parameters_get_reuse_local_address%28__%29.md): Checks whether a connection allows reusing local addresses and ports.
- [nw_parameters_set_local_only](nw_parameters_set_local_only%28____%29.md): Restricts listeners to only accepting connections from the local link.
- [nw_parameters_get_local_only](nw_parameters_get_local_only%28__%29.md): Checks if a listener is restricted to accepting connections from the local link.

### Configuring Privacy Settings

- [nw_parameters_set_privacy_context](nw_parameters_set_privacy_context%28____%29.md): Associates a privacy context with any connections or listeners that use the parameters.
- [nw_privacy_context_t](nw_privacy_context_t.md): An object that defines the privacy requirements for a set of connections.

## See Also

### Essentials

- [nw_endpoint_t](nw_endpoint_t.md): A local or remote endpoint in a network connection.
