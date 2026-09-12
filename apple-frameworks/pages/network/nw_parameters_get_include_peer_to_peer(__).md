> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_parameters_get_include_peer_to_peer(_:)](https://developer.apple.com/documentation/network/nw_parameters_get_include_peer_to_peer(_:))

# nw_parameters_get_include_peer_to_peer(\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Checks whether a connection is allowed to use peer-to-peer link technologies.

## Declaration

```swift
func nw_parameters_get_include_peer_to_peer(_ parameters: nw_parameters_t) -> Bool
```

## See Also

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

# nw_parameters_get_include_peer_to_peer (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Checks whether a connection is allowed to use peer-to-peer link technologies.

## Declaration

```objectivec
bool nw_parameters_get_include_peer_to_peer(nw_parameters_t parameters);
```

## See Also

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
