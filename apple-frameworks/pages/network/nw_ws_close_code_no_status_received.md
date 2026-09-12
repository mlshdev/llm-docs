> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_ws_close_code_no_status_received](https://developer.apple.com/documentation/network/nw_ws_close_code_no_status_received)

# nw_ws_close_code_no_status_received (Swift)

**Framework:** Network  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

This value is reserved for local errors and indicates that no Close code was received.

## Declaration

```swift
var nw_ws_close_code_no_status_received: nw_ws_close_code_t { get }
```

## See Also

### Defined Close Codes

- [nw_ws_close_code_normal_closure](nw_ws_close_code_normal_closure.md): A normal closure occurred with no errors.
- [nw_ws_close_code_going_away](nw_ws_close_code_going_away.md): An endpoint is no longer available, such as when a server is down.
- [nw_ws_close_code_protocol_error](nw_ws_close_code_protocol_error.md): An endpoint is terminating the connection due to a protocol error.
- [nw_ws_close_code_unsupported_data](nw_ws_close_code_unsupported_data.md): An endpoint is terminating the connection because it received a type of data it cannot accept.
- [nw_ws_close_code_abnormal_closure](nw_ws_close_code_abnormal_closure.md): This value is reserved for local errors and indicates that no Close message was received.
- [nw_ws_close_code_invalid_frame_payload_data](nw_ws_close_code_invalid_frame_payload_data.md): An endpoint is terminating the connection because it received data within a message that was inconsistent with the message type.
- [nw_ws_close_code_policy_violation](nw_ws_close_code_policy_violation.md): An endpoint is terminating the connection because it received a message that violates its policy.
- [nw_ws_close_code_message_too_big](nw_ws_close_code_message_too_big.md): An endpoint is terminating the connection because it received a message that is too big for it to process.
- [nw_ws_close_code_mandatory_extension](nw_ws_close_code_mandatory_extension.md): The WebSocket client expected the server to negotiate one or more extensions that were not negotiated.
- [nw_ws_close_code_internal_server_error](nw_ws_close_code_internal_server_error.md): The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.
- [nw_ws_close_code_tls_handshake](nw_ws_close_code_tls_handshake.md): This value is reserved for local errors and indicates that the TLS handshake failed.

# nw_ws_close_code_no_status_received (Objective-C)

**Framework:** Network  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

This value is reserved for local errors and indicates that no Close code was received.

## Declaration

```objectivec
nw_ws_close_code_no_status_received
```

## See Also

### Defined Close Codes

- [nw_ws_close_code_normal_closure](nw_ws_close_code_normal_closure.md): A normal closure occurred with no errors.
- [nw_ws_close_code_going_away](nw_ws_close_code_going_away.md): An endpoint is no longer available, such as when a server is down.
- [nw_ws_close_code_protocol_error](nw_ws_close_code_protocol_error.md): An endpoint is terminating the connection due to a protocol error.
- [nw_ws_close_code_unsupported_data](nw_ws_close_code_unsupported_data.md): An endpoint is terminating the connection because it received a type of data it cannot accept.
- [nw_ws_close_code_abnormal_closure](nw_ws_close_code_abnormal_closure.md): This value is reserved for local errors and indicates that no Close message was received.
- [nw_ws_close_code_invalid_frame_payload_data](nw_ws_close_code_invalid_frame_payload_data.md): An endpoint is terminating the connection because it received data within a message that was inconsistent with the message type.
- [nw_ws_close_code_policy_violation](nw_ws_close_code_policy_violation.md): An endpoint is terminating the connection because it received a message that violates its policy.
- [nw_ws_close_code_message_too_big](nw_ws_close_code_message_too_big.md): An endpoint is terminating the connection because it received a message that is too big for it to process.
- [nw_ws_close_code_mandatory_extension](nw_ws_close_code_mandatory_extension.md): The WebSocket client expected the server to negotiate one or more extensions that were not negotiated.
- [nw_ws_close_code_internal_server_error](nw_ws_close_code_internal_server_error.md): The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.
- [nw_ws_close_code_tls_handshake](nw_ws_close_code_tls_handshake.md): This value is reserved for local errors and indicates that the TLS handshake failed.
