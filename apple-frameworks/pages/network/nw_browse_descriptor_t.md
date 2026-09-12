> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_browse_descriptor_t](https://developer.apple.com/documentation/network/nw_browse_descriptor_t)

# nw_browse_descriptor_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A service description used to discover Bonjour services.

## Declaration

```swift
typealias nw_browse_descriptor_t = any OS_nw_browse_descriptor
```

## Topics

### Creating Browse Descriptors

- [nw_browse_descriptor_create_bonjour_service(\_:\_:)](nw_browse_descriptor_create_bonjour_service%28____%29.md): Initializes a service descriptor used to discover a Bonjour service.
- [nw_browse_descriptor_set_include_txt_record(\_:\_:)](nw_browse_descriptor_set_include_txt_record%28____%29.md): Requires including associated TXT records with all results generated for this service descriptor.

### Inspecting Browse Descriptors

- [nw_browse_descriptor_get_bonjour_service_type(\_:)](nw_browse_descriptor_get_bonjour_service_type%28__%29.md): Accesses the Bonjour service type set on a browse descriptor.
- [nw_browse_descriptor_get_bonjour_service_domain(\_:)](nw_browse_descriptor_get_bonjour_service_domain%28__%29.md): Accesses the Bonjour service domain set on a browse descriptor.
- [nw_browse_descriptor_get_include_txt_record(\_:)](nw_browse_descriptor_get_include_txt_record%28__%29.md): Checks if the browse descriptor requires including associated TXT records with all results.

## See Also

### Data Types

- [nw_advertise_descriptor_t](nw_advertise_descriptor_t.md): A description used to advertise the Bonjour service that a listener provides.
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
- [nw_connection_receive_completion_t](nw_connection_receive_completion_t.md): A completion handler that indicates when content has been received by the connection, or that an error was encountered.

# nw_browse_descriptor_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A service description used to discover Bonjour services.

## Declaration

```objectivec
typedef NSObject<OS_nw_browse_descriptor> * nw_browse_descriptor_t;
```

## Topics

### Creating Browse Descriptors

- [nw_browse_descriptor_create_bonjour_service](nw_browse_descriptor_create_bonjour_service%28____%29.md): Initializes a service descriptor used to discover a Bonjour service.
- [nw_browse_descriptor_set_include_txt_record](nw_browse_descriptor_set_include_txt_record%28____%29.md): Requires including associated TXT records with all results generated for this service descriptor.

### Inspecting Browse Descriptors

- [nw_browse_descriptor_get_bonjour_service_type](nw_browse_descriptor_get_bonjour_service_type%28__%29.md): Accesses the Bonjour service type set on a browse descriptor.
- [nw_browse_descriptor_get_bonjour_service_domain](nw_browse_descriptor_get_bonjour_service_domain%28__%29.md): Accesses the Bonjour service domain set on a browse descriptor.
- [nw_browse_descriptor_get_include_txt_record](nw_browse_descriptor_get_include_txt_record%28__%29.md): Checks if the browse descriptor requires including associated TXT records with all results.
