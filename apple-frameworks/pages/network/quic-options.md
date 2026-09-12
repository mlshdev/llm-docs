> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/quic-options](https://developer.apple.com/documentation/network/quic-options)

# QUIC Options

**Interface language:** Objective-C

**Framework:** Network  
**Kind:** API Collection

Configure options for connections that use the QUIC transport protocol.

## Topics

### Creating QUIC Connections

- [nw_protocol_copy_quic_definition](nw_protocol_copy_quic_definition%28%29.md): Accesses the system definition of the QUIC transport protocol.
- [nw_quic_create_options](nw_quic_create_options%28%29.md): Initializes a default set of QUIC connection options.
- [nw_protocol_options_is_quic](nw_protocol_options_is_quic%28__%29.md): Checks whether an options object uses the QUIC protocol.

### Customizing Connection Options

- [nw_quic_add_tls_application_protocol](nw_quic_add_tls_application_protocol%28____%29.md): Adds a supported Application-Layer Protocol Negotiation value.
- [nw_quic_set_idle_timeout](nw_quic_set_idle_timeout%28____%29.md): Sets the idle timeout for the QUIC connection, in milliseconds.
- [nw_quic_get_idle_timeout](nw_quic_get_idle_timeout%28__%29.md): Accesses the idle timeout for the QUIC connection, in milliseconds.
- [nw_quic_set_initial_max_data](nw_quic_set_initial_max_data%28____%29.md): Sets a QUIC connection’s initial maximum data transport parameter.
- [nw_quic_get_initial_max_data](nw_quic_get_initial_max_data%28__%29.md): Accesses a QUIC connection’s initial maximum data transport parameter.
- [nw_quic_set_initial_max_stream_data_bidirectional_local](nw_quic_set_initial_max_stream_data_bidirectional_local%28____%29.md): Sets a QUIC connection’s initial maximum stream data limit for locally-initiated bidirectional streams.
- [nw_quic_get_initial_max_stream_data_bidirectional_local](nw_quic_get_initial_max_stream_data_bidirectional_local%28__%29.md): Accesses a QUIC connection’s initial maximum stream data limit for locally-initiated bidirectional streams.
- [nw_quic_set_initial_max_stream_data_bidirectional_remote](nw_quic_set_initial_max_stream_data_bidirectional_remote%28____%29.md): Sets a QUIC connection’s initial maximum stream data limit for remote-initiated bidirectional streams.
- [nw_quic_get_initial_max_stream_data_bidirectional_remote](nw_quic_get_initial_max_stream_data_bidirectional_remote%28__%29.md): Accesses a QUIC connection’s initial maximum stream data limit for remote-initiated bidirectional streams.
- [nw_quic_set_initial_max_stream_data_unidirectional](nw_quic_set_initial_max_stream_data_unidirectional%28____%29.md): Sets a QUIC connection’s initial maximum stream data limit for unidirectional streams.
- [nw_quic_get_initial_max_stream_data_unidirectional](nw_quic_get_initial_max_stream_data_unidirectional%28__%29.md): Accesses a QUIC connection’s initial maximum stream data limit for unidirectional streams.
- [nw_quic_set_initial_max_streams_bidirectional](nw_quic_set_initial_max_streams_bidirectional%28____%29.md): Sets a QUIC connection’s initial maximum number of bidirectional streams.
- [nw_quic_get_initial_max_streams_bidirectional](nw_quic_get_initial_max_streams_bidirectional%28__%29.md): Accesses a QUIC connection’s initial maximum number of bidirectional streams.
- [nw_quic_set_initial_max_streams_unidirectional](nw_quic_set_initial_max_streams_unidirectional%28____%29.md): Sets a QUIC connection’s initial maximum number of unidirectional streams.
- [nw_quic_get_initial_max_streams_unidirectional](nw_quic_get_initial_max_streams_unidirectional%28__%29.md): Accesses a QUIC connection’s initial maximum number of unidirectional streams.
- [nw_quic_set_max_datagram_frame_size](nw_quic_set_max_datagram_frame_size%28____%29.md): Sets a QUIC connection’s maximum DATAGRAM frame size.
- [nw_quic_get_max_datagram_frame_size](nw_quic_get_max_datagram_frame_size%28__%29.md): Accesses a QUIC connection’s maximum DATAGRAM frame size.
- [nw_quic_set_max_udp_payload_size](nw_quic_set_max_udp_payload_size%28____%29.md): Sets the maximum length of a QUIC packet that can be received on a connection, in bytes.
- [nw_quic_get_max_udp_payload_size](nw_quic_get_max_udp_payload_size%28__%29.md): Accesses the maximum length of a QUIC packet that can be received on a connection, in bytes.
- [nw_quic_copy_sec_protocol_options](nw_quic_copy_sec_protocol_options%28__%29.md): Accesses the handshake security options QUIC will use.

### Customizing Stream Options

- [nw_quic_set_stream_is_unidirectional](nw_quic_set_stream_is_unidirectional%28____%29.md): Configures a QUIC stream as unidirectional, instead of bidirectional.
- [nw_quic_get_stream_is_unidirectional](nw_quic_get_stream_is_unidirectional%28__%29.md): Checks if a QUIC stream is unidirectional, instead of bidirectional.
- [nw_quic_set_stream_is_datagram](nw_quic_set_stream_is_datagram%28____%29.md): Configures a QUIC stream as a datagram flow, instead of a byte stream.
- [nw_quic_get_stream_is_datagram](nw_quic_get_stream_is_datagram%28__%29.md): Checks if a QUIC stream is a datagram flow, instead of a byte stream.

### Inspecting Connection State

- [nw_protocol_metadata_is_quic](nw_protocol_metadata_is_quic%28__%29.md): Checks whether a metadata object contains QUIC connection state.
- [nw_quic_set_local_max_streams_bidirectional](nw_quic_set_local_max_streams_bidirectional%28____%29.md): Sets the maximum number of bidirectional streams that the peer can create on a QUIC connection.
- [nw_quic_get_local_max_streams_bidirectional](nw_quic_get_local_max_streams_bidirectional%28__%29.md): Accesses the maximum number of bidirectional streams that the peer can create on a QUIC connection.
- [nw_quic_set_local_max_streams_unidirectional](nw_quic_set_local_max_streams_unidirectional%28____%29.md): Sets the maximum number of unidirectional streams that the peer can create on a QUIC connection.
- [nw_quic_get_local_max_streams_unidirectional](nw_quic_get_local_max_streams_unidirectional%28__%29.md): Accesses the maximum number of unidirectional streams that the peer can create on a QUIC connection.
- [nw_quic_get_remote_max_streams_bidirectional](nw_quic_get_remote_max_streams_bidirectional%28__%29.md): Accesses the maximum number of bidirectional streams advertised by peer that the connection is allowed to create.
- [nw_quic_get_remote_max_streams_unidirectional](nw_quic_get_remote_max_streams_unidirectional%28__%29.md): Accesses the maximum number of unidirectional streams advertised by peer that the connection is allowed to create.
- [nw_quic_get_remote_idle_timeout](nw_quic_get_remote_idle_timeout%28__%29.md): Accesses the idle timeout value from the peer’s transport parameters, in milliseconds.
- [nw_quic_copy_sec_protocol_metadata](nw_quic_copy_sec_protocol_metadata%28__%29.md): Accesses the result of the QUIC handshake.

### Inspecting Stream State

- [nw_quic_get_stream_id](nw_quic_get_stream_id%28__%29.md): Accesses the QUIC stream identifier.
- [nw_quic_get_stream_type](nw_quic_get_stream_type%28__%29.md): Accesses the stream type of the QUIC stream.
- [nw_quic_get_stream_usable_datagram_frame_size](nw_quic_get_stream_usable_datagram_frame_size%28__%29.md): Accesses the maximum usable size of a datagram frame on a QUIC datagram flow.

### Handling Errors

- [nw_quic_set_application_error](nw_quic_set_application_error%28______%29.md): Sets the QUIC application error code to send for the connection.
- [nw_quic_get_application_error](nw_quic_get_application_error%28__%29.md): Accesses the QUIC application error code received from the peer.
- [nw_quic_get_application_error_reason](nw_quic_get_application_error_reason%28__%29.md): Accesses the QUIC application error reason received from the peer.
- [nw_quic_set_stream_application_error](nw_quic_set_stream_application_error%28____%29.md): Sets the QUIC application error code to send for the stream.
- [nw_quic_get_stream_application_error](nw_quic_get_stream_application_error%28__%29.md): Accesses the QUIC application error code received from the peer for the stream.

### Configuring Keepalives

- [nw_quic_set_keepalive_interval](nw_quic_set_keepalive_interval%28____%29.md): Sets the keepalive interval for the QUIC connection, in seconds.
- [nw_quic_get_keepalive_interval](nw_quic_get_keepalive_interval%28__%29.md): Accesses the keepalive interval for the QUIC connection, in seconds.

## See Also

### Network Protocols

- [TCP Options](tcp-options.md): Configure options for connections that use the Transmission Control Protocol.
- [TLS Options](tls-options.md): Configure options for connections that use Transport Layer Security.
- [UDP Options](udp-options.md): Configure options for connections that use the User Datagram Protocol.
- [IP Options](ip-options.md): Configure Internet Protocol options on connections.
- [WebSocket Options](websocket-options.md): Configure options for connections that use WebSocket.
- [Framer Protocol Options](framer-protocol-options.md): Create custom protocols to frame applications messages over a connection.
