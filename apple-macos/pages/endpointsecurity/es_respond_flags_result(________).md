> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_respond_flags_result(_:_:_:_:)](https://developer.apple.com/documentation/endpointsecurity/es_respond_flags_result(_:_:_:_:))

# es_respond_flags_result(\_:\_:\_:\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Responds to an event that requires authorization flags as a response.

## Declaration

```swift
func es_respond_flags_result(_ client: OpaquePointer, _ message: UnsafePointer<es_message_t>, _ authorized_flags: UInt32, _ cache: Bool) -> es_respond_result_t
```

## Parameters

- `client`: The client that produced the event.
- `message`: The message that delivered the event.
- `authorized_flags`: A `flags` value to apply as a mask on the flags in the event.
- `cache`: Indicates whether Endpoint Security should cache this result. The caching semantics depend on the specific event type.

<a id="return-value"></a>

## Return Value

A result that indicates whether the response succeeded or failed.

<a id="Discussion"></a>

## Discussion

Some events require you to respond with [es_respond_auth_result(\_:\_:\_:\_:)](es_respond_auth_result%28________%29.md). Responding to such events with this method instead fails with an error.

## See Also

### Responding to Events

- [es_respond_auth_result(\_:\_:\_:\_:)](es_respond_auth_result%28________%29.md): Responds to an event that requires an authorization response.
- [es_auth_result_t](es_auth_result_t.md): Values used when responding to an authorization event.
- [es_respond_result_t](es_respond_result_t.md): Values that indicate the result of responding to a message.

# es_respond_flags_result (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Responds to an event that requires authorization flags as a response.

## Declaration

```objectivec
extern es_respond_result_t es_respond_flags_result(es_client_t *client, const es_message_t *message, uint32_t authorized_flags, bool cache);
```

## Parameters

- `client`: The client that produced the event.
- `message`: The message that delivered the event.
- `authorized_flags`: A `flags` value to apply as a mask on the flags in the event.
- `cache`: Indicates whether Endpoint Security should cache this result. The caching semantics depend on the specific event type.

<a id="return-value"></a>

## Return Value

A result that indicates whether the response succeeded or failed.

<a id="Discussion"></a>

## Discussion

Some events require you to respond with [es_respond_auth_result](es_respond_auth_result%28________%29.md). Responding to such events with this method instead fails with an error.

## See Also

### Responding to Events

- [es_respond_auth_result](es_respond_auth_result%28________%29.md): Responds to an event that requires an authorization response.
- [es_auth_result_t](es_auth_result_t.md): Values used when responding to an authorization event.
- [es_respond_result_t](es_respond_result_t.md): Values that indicate the result of responding to a message.
