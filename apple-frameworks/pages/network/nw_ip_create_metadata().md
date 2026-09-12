> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_ip_create_metadata()](https://developer.apple.com/documentation/network/nw_ip_create_metadata())

# nw_ip_create_metadata() (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Initializes an IP packet configuration with default settings.

## Declaration

```swift
func nw_ip_create_metadata() -> nw_protocol_metadata_t
```

## See Also

### Handling IP Packets

- [nw_protocol_metadata_is_ip(\_:)](nw_protocol_metadata_is_ip%28__%29.md): Checks whether a metadata object represents an IP packet.
- [nw_ip_metadata_set_ecn_flag(\_:\_:)](nw_ip_metadata_set_ecn_flag%28____%29.md): Sets a specific Explicit Congestion Notification flag value to set on an IP packet.
- [nw_ip_metadata_get_ecn_flag(\_:)](nw_ip_metadata_get_ecn_flag%28__%29.md): Checks the Explicit Congestion Notification flag value received on an IP packet.
- [nw_ip_ecn_flag_t](nw_ip_ecn_flag_t.md): Flag values for Explicit Congestion Notifications in IP packets.
- [nw_ip_metadata_set_service_class(\_:\_:)](nw_ip_metadata_set_service_class%28____%29.md): Sets a specific service class to mark on an IP packet.
- [nw_ip_metadata_get_service_class(\_:)](nw_ip_metadata_get_service_class%28__%29.md): Accesses a specific service class to mark on an IP packet.
- [nw_ip_metadata_get_receive_time(\_:)](nw_ip_metadata_get_receive_time%28__%29.md): Access the time at which a packet was received, in nanoseconds, based on `CLOCK_MONOTONIC_RAW`.

# nw_ip_create_metadata (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Initializes an IP packet configuration with default settings.

## Declaration

```objectivec
nw_protocol_metadata_tnw_ip_create_metadata();
```

## See Also

### Handling IP Packets

- [nw_protocol_metadata_is_ip](nw_protocol_metadata_is_ip%28__%29.md): Checks whether a metadata object represents an IP packet.
- [nw_ip_metadata_set_ecn_flag](nw_ip_metadata_set_ecn_flag%28____%29.md): Sets a specific Explicit Congestion Notification flag value to set on an IP packet.
- [nw_ip_metadata_get_ecn_flag](nw_ip_metadata_get_ecn_flag%28__%29.md): Checks the Explicit Congestion Notification flag value received on an IP packet.
- [nw_ip_ecn_flag_t](nw_ip_ecn_flag_t.md): Flag values for Explicit Congestion Notifications in IP packets.
- [nw_ip_metadata_set_service_class](nw_ip_metadata_set_service_class%28____%29.md): Sets a specific service class to mark on an IP packet.
- [nw_ip_metadata_get_service_class](nw_ip_metadata_get_service_class%28__%29.md): Accesses a specific service class to mark on an IP packet.
- [nw_ip_metadata_get_receive_time](nw_ip_metadata_get_receive_time%28__%29.md): Access the time at which a packet was received, in nanoseconds, based on `CLOCK_MONOTONIC_RAW`.
