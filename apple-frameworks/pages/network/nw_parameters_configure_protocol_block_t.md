> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_parameters_configure_protocol_block_t](https://developer.apple.com/documentation/network/nw_parameters_configure_protocol_block_t)

# nw_parameters_configure_protocol_block_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A block to configure protocol options during the creation of a parameters object.

## Declaration

```swift
typealias nw_parameters_configure_protocol_block_t = (nw_protocol_options_t) -> Void
```

<a id="Discussion"></a>

## Discussion

Passing in a block allows you to customize how a protocol will behave in a connection.

If you want to use the default configuration for a protocol, pass NW_PARAMETERS_DEFAULT_CONFIGURATION.

If you want to disable a protocol (such as TLS), pass NW_PARAMETERS_DISABLE_PROTOCOL. Not all protocols can be disabled.

## See Also

### Creating Parameters

- [nw_parameters_create_secure_tcp(\_:\_:)](nw_parameters_create_secure_tcp%28____%29.md): Initializes parameters for TLS or TCP connections and listeners.
- [nw_parameters_create_secure_udp(\_:\_:)](nw_parameters_create_secure_udp%28____%29.md): Initializes parameters for DTLS or UDP connections and listeners.
- [nw_parameters_create_quic(\_:)](nw_parameters_create_quic%28__%29.md): Initializes parameters for QUIC connections and listeners.
- [nw_parameters_create()](nw_parameters_create%28%29.md): Initializes parameters for connections, listeners, and browsers with no protocols specified.
- [nw_parameters_create_custom_ip(\_:\_:)](nw_parameters_create_custom_ip%28____%29.md): Initializes parameters for connections and listeners using a custom IP protocol.
- [nw_parameters_copy(\_:)](nw_parameters_copy%28__%29.md): Peforms a deep copy of a parameters object.

# nw_parameters_configure_protocol_block_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

A block to configure protocol options during the creation of a parameters object.

## Declaration

```objectivec
typedef void (^)(NSObject<OS_nw_protocol_options> *) nw_parameters_configure_protocol_block_t;
```

<a id="Discussion"></a>

## Discussion

Passing in a block allows you to customize how a protocol will behave in a connection.

If you want to use the default configuration for a protocol, pass NW_PARAMETERS_DEFAULT_CONFIGURATION.

If you want to disable a protocol (such as TLS), pass NW_PARAMETERS_DISABLE_PROTOCOL. Not all protocols can be disabled.

## See Also

### Related Documentation

- [TCP Options](tcp-options.md): Configure options for connections that use the Transmission Control Protocol.
- [TLS Options](tls-options.md): Configure options for connections that use Transport Layer Security.
- [UDP Options](udp-options.md): Configure options for connections that use the User Datagram Protocol.

### Creating Parameters

- [nw_parameters_create_secure_tcp](nw_parameters_create_secure_tcp%28____%29.md): Initializes parameters for TLS or TCP connections and listeners.
- [nw_parameters_create_secure_udp](nw_parameters_create_secure_udp%28____%29.md): Initializes parameters for DTLS or UDP connections and listeners.
- [nw_parameters_create_quic](nw_parameters_create_quic%28__%29.md): Initializes parameters for QUIC connections and listeners.
- [nw_parameters_create](nw_parameters_create%28%29.md): Initializes parameters for connections, listeners, and browsers with no protocols specified.
- [nw_parameters_create_custom_ip](nw_parameters_create_custom_ip%28____%29.md): Initializes parameters for connections and listeners using a custom IP protocol.
- [nw_parameters_copy](nw_parameters_copy%28__%29.md): Peforms a deep copy of a parameters object.
