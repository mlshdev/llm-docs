> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/udp-options](https://developer.apple.com/documentation/network/udp-options)

# UDP Options

**Interface language:** Objective-C

**Framework:** Network  
**Kind:** API Collection

Configure options for connections that use the User Datagram Protocol.

## Topics

### Creating UDP Connections

- [nw_protocol_copy_udp_definition](nw_protocol_copy_udp_definition%28%29.md): Accesses the system definition of the User Datagram Protocol.
- [nw_udp_create_options](nw_udp_create_options%28%29.md): Initializes a default set of UDP connection options.

### Customizing UDP Connections

- [nw_udp_options_set_prefer_no_checksum](nw_udp_options_set_prefer_no_checksum%28____%29.md): Configures the connection to not send UDP checksums.

### Sending UDP Messages

- [nw_protocol_metadata_is_udp](nw_protocol_metadata_is_udp%28__%29.md): Checks whether a metadata object represents a UDP datagram.
- [nw_udp_create_metadata](nw_udp_create_metadata%28%29.md): Initializes a default UDP message.

## See Also

### Network Protocols

- [TCP Options](tcp-options.md): Configure options for connections that use the Transmission Control Protocol.
- [TLS Options](tls-options.md): Configure options for connections that use Transport Layer Security.
- [QUIC Options](quic-options.md): Configure options for connections that use the QUIC transport protocol.
- [IP Options](ip-options.md): Configure Internet Protocol options on connections.
- [WebSocket Options](websocket-options.md): Configure options for connections that use WebSocket.
- [Framer Protocol Options](framer-protocol-options.md): Create custom protocols to frame applications messages over a connection.
