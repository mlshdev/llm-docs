> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tls-options](https://developer.apple.com/documentation/network/tls-options)

# TLS Options

**Interface language:** Objective-C

**Framework:** Network  
**Kind:** API Collection

Configure options for connections that use Transport Layer Security.

## Topics

### Creating TLS Connections

- [nw_protocol_copy_tls_definition](nw_protocol_copy_tls_definition%28%29.md): Accesses the system definition of the Transport Layer Security protocol.
- [nw_tls_create_options](nw_tls_create_options%28%29.md): Initializes a default set of TLS connection options.
- [nw_tls_copy_sec_protocol_options](nw_tls_copy_sec_protocol_options%28__%29.md): Accesses the handshake security options TLS will use.

### Inspecting TLS State

- [nw_protocol_metadata_is_tls](nw_protocol_metadata_is_tls%28__%29.md): Checks whether a metadata object contains TLS connection state.
- [nw_tls_copy_sec_protocol_metadata](nw_tls_copy_sec_protocol_metadata%28__%29.md): Accesses the result of the TLS handshake.

## See Also

### Network Protocols

- [TCP Options](tcp-options.md): Configure options for connections that use the Transmission Control Protocol.
- [QUIC Options](quic-options.md): Configure options for connections that use the QUIC transport protocol.
- [UDP Options](udp-options.md): Configure options for connections that use the User Datagram Protocol.
- [IP Options](ip-options.md): Configure Internet Protocol options on connections.
- [WebSocket Options](websocket-options.md): Configure options for connections that use WebSocket.
- [Framer Protocol Options](framer-protocol-options.md): Create custom protocols to frame applications messages over a connection.
