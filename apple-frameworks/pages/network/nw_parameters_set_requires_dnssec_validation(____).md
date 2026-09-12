> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_parameters_set_requires_dnssec_validation(_:_:)](https://developer.apple.com/documentation/network/nw_parameters_set_requires_dnssec_validation(_:_:))

# nw_parameters_set_requires_dnssec_validation(\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Determines whether a connection requires DNSSEC validation when resolving endpoints.

## Declaration

```swift
func nw_parameters_set_requires_dnssec_validation(_ parameters: nw_parameters_t, _ requires_dnssec_validation: Bool)
```

## Parameters

- `parameters`: An object that stores the protocols to use for connections, options for sending data, and network path constraints.
- `requires_dnssec_validation`: A Boolean value that determines whether a connection requires DNSSEC validation when resolving endpoints.

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

# nw_parameters_set_requires_dnssec_validation (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Determines whether a connection requires DNSSEC validation when resolving endpoints.

## Declaration

```objectivec
void nw_parameters_set_requires_dnssec_validation(nw_parameters_t parameters, bool requires_dnssec_validation);
```

## Parameters

- `parameters`: An object that stores the protocols to use for connections, options for sending data, and network path constraints.
- `requires_dnssec_validation`: A Boolean value that determines whether a connection requires DNSSEC validation when resolving endpoints.
