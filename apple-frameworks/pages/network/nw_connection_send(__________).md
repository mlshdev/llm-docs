> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_connection_send(_:_:_:_:_:)](https://developer.apple.com/documentation/network/nw_connection_send(_:_:_:_:_:))

# nw_connection_send(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Sends data on a connection.

## Declaration

```swift
func nw_connection_send(_ connection: nw_connection_t, _ content: dispatch_data_t?, _ context: nw_content_context_t, _ is_complete: Bool, _ completion: @escaping nw_connection_send_completion_t)
```

## Parameters

- `connection`: A network connection instance.
- `content`: The data to send on the connection. May be nil if this send marks its context as complete, such as by sending `NW_CONNECTION_FINAL_MESSAGE_CONTEXT` as the context and marking the send complete to send a write-close.
- `context`: The context associated with the content, which represents a logical message to be sent on the connection. All content sent within a single context will be sent as an in-order unit, up until the point that the context is marked complete. Once a context is marked complete, it may be re-used as a new logical message. Protocols like TCP that cannot send multiple independent messages at once (serial bytestreams) will only start processing a new context once the prior context has been marked complete. Defaults to `NW_CONNECTION_DEFAULT_MESSAGE_CONTEXT`.
- `is_complete`: A flag indicating if the caller’s sending context (logical message) is now complete. Until a context is marked complete, content sent for other contexts may not be sent immediately (if the protocol requires sending bytes serially, like TCP). For datagram protocols, like UDP, this flag indicates that the content represents a complete datagram.

  When sending using streaming protocols like TCP, this flag can be used to mark the end of a single message on the stream, of which there may be many. However, it can also indicate that the connection should send a “write close” (a TCP FIN) if the sending context is the final context on the connection. Specifically, to send a “write close”, pass `NW_CONNECTION_FINAL_MESSAGE_CONTEXT` or `NW_CONNECTION_DEFAULT_STREAM_CONTEXT` for the context (or create a custom context and call [nw_content_context_set_is_final(\_:\_:)](nw_content_context_set_is_final%28____%29.md)), and mark the send as complete.
- `completion`: A completion handler to notify the caller when content has been processed by the connection, or a marker that this data is idempotent (`NW_CONNECTION_SEND_IDEMPOTENT_CONTENT`) and may be sent multiple times as fast open data if [nw_parameters_set_fast_open_enabled(\_:\_:)](nw_parameters_set_fast_open_enabled%28____%29.md) was called.

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

# nw_connection_send (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Sends data on a connection.

## Declaration

```objectivec
void nw_connection_send(nw_connection_t connection, dispatch_data_t content, nw_content_context_t context, bool is_complete, nw_connection_send_completion_t completion);
```

## Parameters

- `connection`: A network connection instance.
- `content`: The data to send on the connection. May be nil if this send marks its context as complete, such as by sending `NW_CONNECTION_FINAL_MESSAGE_CONTEXT` as the context and marking the send complete to send a write-close.
- `context`: The context associated with the content, which represents a logical message to be sent on the connection. All content sent within a single context will be sent as an in-order unit, up until the point that the context is marked complete. Once a context is marked complete, it may be re-used as a new logical message. Protocols like TCP that cannot send multiple independent messages at once (serial bytestreams) will only start processing a new context once the prior context has been marked complete. Defaults to `NW_CONNECTION_DEFAULT_MESSAGE_CONTEXT`.
- `is_complete`: A flag indicating if the caller’s sending context (logical message) is now complete. Until a context is marked complete, content sent for other contexts may not be sent immediately (if the protocol requires sending bytes serially, like TCP). For datagram protocols, like UDP, this flag indicates that the content represents a complete datagram.

  When sending using streaming protocols like TCP, this flag can be used to mark the end of a single message on the stream, of which there may be many. However, it can also indicate that the connection should send a “write close” (a TCP FIN) if the sending context is the final context on the connection. Specifically, to send a “write close”, pass `NW_CONNECTION_FINAL_MESSAGE_CONTEXT` or `NW_CONNECTION_DEFAULT_STREAM_CONTEXT` for the context (or create a custom context and call [nw_content_context_set_is_final](nw_content_context_set_is_final%28____%29.md)), and mark the send as complete.
- `completion`: A completion handler to notify the caller when content has been processed by the connection, or a marker that this data is idempotent (`NW_CONNECTION_SEND_IDEMPOTENT_CONTENT`) and may be sent multiple times as fast open data if [nw_parameters_set_fast_open_enabled](nw_parameters_set_fast_open_enabled%28____%29.md) was called.
