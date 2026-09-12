> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_tcp_options_set_enable_fast_open(_:_:)](https://developer.apple.com/documentation/network/nw_tcp_options_set_enable_fast_open(_:_:))

# nw_tcp_options_set_enable_fast_open(\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Enables TCP Fast Open on a connection.

## Declaration

```swift
func nw_tcp_options_set_enable_fast_open(_ options: nw_protocol_options_t, _ enable_fast_open: Bool)
```

<a id="Discussion"></a>

## Discussion

If TCP Fast Open is enabled and TLS is running on top of TCP, the TLS handshake will automatically be used as the TCP early data. If there is no protocol running on top of TCP, you should also enable fast open on the connection parameters and send idempotent data.

## See Also

### Related Documentation

- [nw_parameters_set_fast_open_enabled(\_:\_:)](nw_parameters_set_fast_open_enabled%28____%29.md): Enables sending application data with protocol handshakes.

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

# nw_tcp_options_set_enable_fast_open (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Enables TCP Fast Open on a connection.

## Declaration

```objectivec
void nw_tcp_options_set_enable_fast_open(nw_protocol_options_t options, bool enable_fast_open);
```

<a id="Discussion"></a>

## Discussion

If TCP Fast Open is enabled and TLS is running on top of TCP, the TLS handshake will automatically be used as the TCP early data. If there is no protocol running on top of TCP, you should also enable fast open on the connection parameters and send idempotent data.

## See Also

### Related Documentation

- [nw_parameters_set_fast_open_enabled](nw_parameters_set_fast_open_enabled%28____%29.md): Enables sending application data with protocol handshakes.
