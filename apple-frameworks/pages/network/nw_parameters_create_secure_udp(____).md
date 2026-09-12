> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_parameters_create_secure_udp(_:_:)](https://developer.apple.com/documentation/network/nw_parameters_create_secure_udp(_:_:))

# nw_parameters_create_secure_udp(\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Initializes parameters for DTLS or UDP connections and listeners.

## Declaration

```swift
func nw_parameters_create_secure_udp(_ configure_dtls: @escaping nw_parameters_configure_protocol_block_t, _ configure_udp: @escaping nw_parameters_configure_protocol_block_t) -> nw_parameters_t
```

<a id="Discussion"></a>

## Discussion

This function allows you to either use the default configurations for DTLS and UDP, or use customized protocol options. If you want to use the default configuration, pass NW_PARAMETERS_DEFAULT_CONFIGURATION. If you want to customize the options for a protocol, pass a block to modify the options.

If you need to disable DTLS, pass NW_PARAMETERS_DISABLE_PROTOCOL.

## See Also

### Creating Parameters

- [nw_parameters_create_secure_tcp(\_:\_:)](nw_parameters_create_secure_tcp%28____%29.md): Initializes parameters for TLS or TCP connections and listeners.
- [nw_parameters_create_quic(\_:)](nw_parameters_create_quic%28__%29.md): Initializes parameters for QUIC connections and listeners.
- [nw_parameters_configure_protocol_block_t](nw_parameters_configure_protocol_block_t.md): A block to configure protocol options during the creation of a parameters object.
- [nw_parameters_create()](nw_parameters_create%28%29.md): Initializes parameters for connections, listeners, and browsers with no protocols specified.
- [nw_parameters_create_custom_ip(\_:\_:)](nw_parameters_create_custom_ip%28____%29.md): Initializes parameters for connections and listeners using a custom IP protocol.
- [nw_parameters_copy(\_:)](nw_parameters_copy%28__%29.md): Peforms a deep copy of a parameters object.

# nw_parameters_create_secure_udp (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Initializes parameters for DTLS or UDP connections and listeners.

## Declaration

```objectivec
nw_parameters_tnw_parameters_create_secure_udp(nw_parameters_configure_protocol_block_t configure_dtls, nw_parameters_configure_protocol_block_t configure_udp);
```

<a id="Discussion"></a>

## Discussion

This function allows you to either use the default configurations for DTLS and UDP, or use customized protocol options. If you want to use the default configuration, pass NW_PARAMETERS_DEFAULT_CONFIGURATION. If you want to customize the options for a protocol, pass a block to modify the options.

If you need to disable DTLS, pass NW_PARAMETERS_DISABLE_PROTOCOL.

## See Also

### Creating Parameters

- [nw_parameters_create_secure_tcp](nw_parameters_create_secure_tcp%28____%29.md): Initializes parameters for TLS or TCP connections and listeners.
- [nw_parameters_create_quic](nw_parameters_create_quic%28__%29.md): Initializes parameters for QUIC connections and listeners.
- [nw_parameters_configure_protocol_block_t](nw_parameters_configure_protocol_block_t.md): A block to configure protocol options during the creation of a parameters object.
- [nw_parameters_create](nw_parameters_create%28%29.md): Initializes parameters for connections, listeners, and browsers with no protocols specified.
- [nw_parameters_create_custom_ip](nw_parameters_create_custom_ip%28____%29.md): Initializes parameters for connections and listeners using a custom IP protocol.
- [nw_parameters_copy](nw_parameters_copy%28__%29.md): Peforms a deep copy of a parameters object.
