> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_browse_result_t](https://developer.apple.com/documentation/network/nw_browse_result_t)

# nw_browse_result_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A discovered service and metadata about the service.

## Declaration

```swift
typealias nw_browse_result_t = any OS_nw_browse_result
```

## Topics

### Evaluating Browser Results

- [nw_browse_result_copy_endpoint(\_:)](nw_browse_result_copy_endpoint%28__%29.md): The discovered service endpoint.
- [nw_browse_result_enumerate_interfaces(\_:\_:)](nw_browse_result_enumerate_interfaces%28____%29.md): Enumerates the list of interfaces on which the service was discovered.
- [nw_browse_result_enumerate_interface_t](nw_browse_result_enumerate_interface_t.md): A handler that enumerates the interfaces associated with a discovered service.
- [nw_browse_result_get_interfaces_count(\_:)](nw_browse_result_get_interfaces_count%28__%29.md): Accesses the number of interfaces associated with a discovered service.

### Handling TXT Records

- [nw_browse_result_copy_txt_record_object(\_:)](nw_browse_result_copy_txt_record_object%28__%29.md): Accesses the TXT record associated with a discovered service.
- [nw_txt_record_t](nw_txt_record_t.md): A dictionary representing a TXT record in a DNS packet.

### Tracking Result Changes

- [nw_browse_result_get_changes(\_:\_:)](nw_browse_result_get_changes%28____%29.md): Compares two discovered services and calculates changes between them.
- [nw_browse_result_change_t](nw_browse_result_change_t.md): Flags describing ways in which discovered services can change between specific results.

## See Also

### Data Types

- [nw_advertise_descriptor_t](nw_advertise_descriptor_t.md): A description used to advertise the Bonjour service that a listener provides.
- [nw_browse_descriptor_t](nw_browse_descriptor_t.md): A service description used to discover Bonjour services.
- [nw_browse_result_change_t](nw_browse_result_change_t.md): Flags describing ways in which discovered services can change between specific results.
- [nw_browse_result_enumerate_interface_t](nw_browse_result_enumerate_interface_t.md): A handler that enumerates the interfaces associated with a discovered service.
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
- [nw_connection_receive_completion_t](nw_connection_receive_completion_t.md): A completion handler that indicates when content has been received by the connection, or that an error was encountered.

# nw_browse_result_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A discovered service and metadata about the service.

## Declaration

```objectivec
typedef NSObject<OS_nw_browse_result> * nw_browse_result_t;
```

## Topics

### Evaluating Browser Results

- [nw_browse_result_copy_endpoint](nw_browse_result_copy_endpoint%28__%29.md): The discovered service endpoint.
- [nw_browse_result_enumerate_interfaces](nw_browse_result_enumerate_interfaces%28____%29.md): Enumerates the list of interfaces on which the service was discovered.
- [nw_browse_result_enumerate_interface_t](nw_browse_result_enumerate_interface_t.md): A handler that enumerates the interfaces associated with a discovered service.
- [nw_browse_result_get_interfaces_count](nw_browse_result_get_interfaces_count%28__%29.md): Accesses the number of interfaces associated with a discovered service.

### Handling TXT Records

- [nw_browse_result_copy_txt_record_object](nw_browse_result_copy_txt_record_object%28__%29.md): Accesses the TXT record associated with a discovered service.
- [nw_txt_record_t](nw_txt_record_t.md): A dictionary representing a TXT record in a DNS packet.

### Tracking Result Changes

- [nw_browse_result_get_changes](nw_browse_result_get_changes%28____%29.md): Compares two discovered services and calculates changes between them.
- [nw_browse_result_change_t](nw_browse_result_change_t.md): Flags describing ways in which discovered services can change between specific results.
