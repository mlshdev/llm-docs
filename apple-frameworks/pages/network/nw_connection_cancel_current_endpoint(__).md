> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_connection_cancel_current_endpoint(_:)](https://developer.apple.com/documentation/network/nw_connection_cancel_current_endpoint(_:))

# nw_connection_cancel_current_endpoint(\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Causes the current endpoint to be rejected, allowing the connection to try another resolved address.

## Declaration

```swift
func nw_connection_cancel_current_endpoint(_ connection: nw_connection_t)
```

<a id="Discussion"></a>

## Discussion

Protocols that do not have handshakes, such as UDP, do not allow connections to validate connectivity on their own. Cancelling an endpoint allows you to indicate that a certain endpoint should be rejected due to a lack of valid response. If other addresses were resolved for the remote endpoint, those will be attempted next.

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

# nw_connection_cancel_current_endpoint (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Causes the current endpoint to be rejected, allowing the connection to try another resolved address.

## Declaration

```objectivec
void nw_connection_cancel_current_endpoint(nw_connection_t connection);
```

<a id="Discussion"></a>

## Discussion

Protocols that do not have handshakes, such as UDP, do not allow connections to validate connectivity on their own. Cancelling an endpoint allows you to indicate that a certain endpoint should be rejected due to a lack of valid response. If other addresses were resolved for the remote endpoint, those will be attempted next.
