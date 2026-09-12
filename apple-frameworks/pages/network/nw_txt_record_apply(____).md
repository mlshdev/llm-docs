> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_txt_record_apply(_:_:)](https://developer.apple.com/documentation/network/nw_txt_record_apply(_:_:))

# nw_txt_record_apply(\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Iterates through all keys in a TXT record dictionary.

## Declaration

```swift
func nw_txt_record_apply(_ txt_record: nw_txt_record_t, _ applier: @escaping nw_txt_record_applier_t) -> Bool
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

# nw_txt_record_apply (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Iterates through all keys in a TXT record dictionary.

## Declaration

```objectivec
bool nw_txt_record_apply(nw_txt_record_t txt_record, nw_txt_record_applier_t applier);
```
