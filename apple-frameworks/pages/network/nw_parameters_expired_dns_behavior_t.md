> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_parameters_expired_dns_behavior_t](https://developer.apple.com/documentation/network/nw_parameters_expired_dns_behavior_t)

# nw_parameters_expired_dns_behavior_t (Swift)

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Options for configuring how expired DNS answers should be used.

## Declaration

```swift
struct nw_parameters_expired_dns_behavior_t
```

## Topics

### Creating an expired DNS behavior instance

- [init(\_:)](nw_parameters_expired_dns_behavior_t/init%28__%29.md): Creates an instance of the expired DNS behavior structure.
- [init(rawValue:)](nw_parameters_expired_dns_behavior_t/init%28rawvalue_%29.md): Creates an instance of the expired DNS behavior structure.

### Expired DNS behaviors

- [nw_parameters_expired_dns_behavior_default](nw_parameters_expired_dns_behavior_default.md): Let the system determine whether or not to allow expired DNS answers.
- [nw_parameters_expired_dns_behavior_allow](nw_parameters_expired_dns_behavior_allow.md): Explicitly allow the use of expired DNS answers.
- [nw_parameters_expired_dns_behavior_prohibit](nw_parameters_expired_dns_behavior_prohibit.md): Explicitly prohibit the use of expired DNS answers.

### Accessing the raw value

- [rawValue](nw_parameters_expired_dns_behavior_t/rawvalue.md): The raw value of this instance.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### C Network Structures

- [nw_connection_group_state_t](nw_connection_group_state_t.md): States that indicate whether you can use a connection group to send and receive messages.
- [nw_browser_state_t](nw_browser_state_t.md): States indicating whether a browser is able to discover services.
- [nw_connection_state_t](nw_connection_state_t.md): States indicating whether a connection can be used to send and receive data.
- [nw_data_transfer_report_state_t](nw_data_transfer_report_state_t.md): States indicating whether a data transfer report is collected yet.
- [nw_endpoint_type_t](nw_endpoint_type_t.md): The type of a network endpoint, such as a host or a service.
- [nw_error_domain_t](nw_error_domain_t.md): The error domain for errors used by the Network framework.
- [nw_ethernet_channel_state_t](nw_ethernet_channel_state_t.md): States indicating whether an Ethernet channel is able to send and receive frames.
- [nw_framer_start_result_t](nw_framer_start_result_t.md): Results that you send to indicate the disposition of your protocol after the start handler is invoked.
- [nw_interface_type_t](nw_interface_type_t.md): Types of network interfaces, based on their link layer media types.
- [nw_ip_ecn_flag_t](nw_ip_ecn_flag_t.md): Flag values for Explicit Congestion Notifications in IP packets.
- [nw_ip_local_address_preference_t](nw_ip_local_address_preference_t.md): Types of local addresses that can be selected, such as temporary or stable.
- [nw_ip_version_t](nw_ip_version_t.md): IP versions to require on connections and listeners.
- [nw_listener_state_t](nw_listener_state_t.md): States indicating whether a listener is able to accept incoming connections.
- [nw_multipath_service_t](nw_multipath_service_t.md): Modes in which a connection can support multipath protocols.
- [nw_path_status_t](nw_path_status_t.md): Status values indicating whether a path can be used by connections.

# nw_parameters_expired_dns_behavior_t (Objective-C)

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

Options for configuring how expired DNS answers should be used.

## Declaration

```objectivec
typedef enum { ... } nw_parameters_expired_dns_behavior_t;
```

## Topics

### Expired DNS behaviors

- [nw_parameters_expired_dns_behavior_default](nw_parameters_expired_dns_behavior_default.md): Let the system determine whether or not to allow expired DNS answers.
- [nw_parameters_expired_dns_behavior_allow](nw_parameters_expired_dns_behavior_allow.md): Explicitly allow the use of expired DNS answers.
- [nw_parameters_expired_dns_behavior_prohibit](nw_parameters_expired_dns_behavior_prohibit.md): Explicitly prohibit the use of expired DNS answers.

## See Also

### C Network Structures

- [nw_connection_group_state_t](nw_connection_group_state_t.md): States that indicate whether you can use a connection group to send and receive messages.
- [nw_browser_state_t](nw_browser_state_t.md): States indicating whether a browser is able to discover services.
- [nw_connection_state_t](nw_connection_state_t.md): States indicating whether a connection can be used to send and receive data.
- [nw_data_transfer_report_state_t](nw_data_transfer_report_state_t.md): States indicating whether a data transfer report is collected yet.
- [nw_endpoint_type_t](nw_endpoint_type_t.md): The type of a network endpoint, such as a host or a service.
- [nw_error_domain_t](nw_error_domain_t.md): The error domain for errors used by the Network framework.
- [nw_ethernet_channel_state_t](nw_ethernet_channel_state_t.md): States indicating whether an Ethernet channel is able to send and receive frames.
- [nw_framer_start_result_t](nw_framer_start_result_t.md): Results that you send to indicate the disposition of your protocol after the start handler is invoked.
- [nw_interface_type_t](nw_interface_type_t.md): Types of network interfaces, based on their link layer media types.
- [nw_ip_ecn_flag_t](nw_ip_ecn_flag_t.md): Flag values for Explicit Congestion Notifications in IP packets.
- [nw_ip_local_address_preference_t](nw_ip_local_address_preference_t.md): Types of local addresses that can be selected, such as temporary or stable.
- [nw_ip_version_t](nw_ip_version_t.md): IP versions to require on connections and listeners.
- [nw_listener_state_t](nw_listener_state_t.md): States indicating whether a listener is able to accept incoming connections.
- [nw_multipath_service_t](nw_multipath_service_t.md): Modes in which a connection can support multipath protocols.
- [nw_path_status_t](nw_path_status_t.md): Status values indicating whether a path can be used by connections.
