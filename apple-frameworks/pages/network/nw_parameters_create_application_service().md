> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_parameters_create_application_service()](https://developer.apple.com/documentation/network/nw_parameters_create_application_service())

# nw_parameters_create_application_service() (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
func nw_parameters_create_application_service() -> nw_parameters_t
```

## See Also

### Functions

- [nw_advertise_descriptor_copy_txt_record_object(\_:)](nw_advertise_descriptor_copy_txt_record_object%28__%29.md): Accesses the TXT record to advertise with the service.
- [nw_advertise_descriptor_create_application_service(\_:)](nw_advertise_descriptor_create_application_service%28__%29.md)
- [nw_advertise_descriptor_create_bonjour_service(\_:\_:\_:)](nw_advertise_descriptor_create_bonjour_service%28______%29.md): Initializes a Bonjour service to advertise.
- [nw_advertise_descriptor_get_application_service_name(\_:)](nw_advertise_descriptor_get_application_service_name%28__%29.md)
- [nw_advertise_descriptor_get_no_auto_rename(\_:)](nw_advertise_descriptor_get_no_auto_rename%28__%29.md): Checks whether the service prohibits automatic renaming in the event of a name conflict.
- [nw_advertise_descriptor_set_no_auto_rename(\_:\_:)](nw_advertise_descriptor_set_no_auto_rename%28____%29.md): Sets a Boolean to indicate whether the service prohibits automatic renaming in the event of a name conflict.
- [nw_advertise_descriptor_set_txt_record(\_:\_:\_:)](nw_advertise_descriptor_set_txt_record%28______%29.md): Sets the TXT record as a raw buffer to advertise with the service.
- [nw_advertise_descriptor_set_txt_record_object(\_:\_:)](nw_advertise_descriptor_set_txt_record_object%28____%29.md): Sets the TXT record to advertise with the service.
- [nw_browse_descriptor_create_application_service(\_:)](nw_browse_descriptor_create_application_service%28__%29.md)
- [nw_browse_descriptor_create_bonjour_service(\_:\_:)](nw_browse_descriptor_create_bonjour_service%28____%29.md): Initializes a service descriptor used to discover a Bonjour service.
- [nw_browse_descriptor_get_application_service_name(\_:)](nw_browse_descriptor_get_application_service_name%28__%29.md)
- [nw_browse_descriptor_get_bonjour_service_domain(\_:)](nw_browse_descriptor_get_bonjour_service_domain%28__%29.md): Accesses the Bonjour service domain set on a browse descriptor.
- [nw_browse_descriptor_get_bonjour_service_type(\_:)](nw_browse_descriptor_get_bonjour_service_type%28__%29.md): Accesses the Bonjour service type set on a browse descriptor.
- [nw_browse_descriptor_get_include_txt_record(\_:)](nw_browse_descriptor_get_include_txt_record%28__%29.md): Checks if the browse descriptor requires including associated TXT records with all results.
- [nw_browse_descriptor_set_include_txt_record(\_:\_:)](nw_browse_descriptor_set_include_txt_record%28____%29.md): Requires including associated TXT records with all results generated for this service descriptor.

# nw_parameters_create_application_service (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
nw_parameters_tnw_parameters_create_application_service();
```

## See Also

### Functions

- [nw_advertise_descriptor_create_application_service](nw_advertise_descriptor_create_application_service%28__%29.md)
- [nw_advertise_descriptor_get_application_service_name](nw_advertise_descriptor_get_application_service_name%28__%29.md)
- [nw_browse_descriptor_create_application_service](nw_browse_descriptor_create_application_service%28__%29.md)
- [nw_browse_descriptor_get_application_service_name](nw_browse_descriptor_get_application_service_name%28__%29.md)
- [nw_connection_group_copy_protocol_metadata](nw_connection_group_copy_protocol_metadata%28____%29.md)
- [nw_connection_group_copy_protocol_metadata_for_message](nw_connection_group_copy_protocol_metadata_for_message%28______%29.md)
- [nw_connection_group_extract_connection](nw_connection_group_extract_connection%28______%29.md)
- [nw_connection_group_reinsert_extracted_connection](nw_connection_group_reinsert_extracted_connection%28____%29.md)
- [nw_connection_group_set_new_connection_handler](nw_connection_group_set_new_connection_handler%28____%29.md)
- [nw_data_transfer_report_get_path_radio_type](nw_data_transfer_report_get_path_radio_type%28____%29.md)
- [nw_endpoint_copy_txt_record](nw_endpoint_copy_txt_record%28__%29.md)
- [nw_endpoint_get_signature](nw_endpoint_get_signature%28____%29.md)
- [nw_ethernet_channel_create_with_parameters](nw_ethernet_channel_create_with_parameters%28______%29.md)
- [nw_ethernet_channel_get_maximum_payload_size](nw_ethernet_channel_get_maximum_payload_size%28__%29.md)
- [nw_framer_copy_options](nw_framer_copy_options%28__%29.md)
