> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_respond_auth_result(_:_:_:_:)](https://developer.apple.com/documentation/endpointsecurity/es_respond_auth_result(_:_:_:_:))

# es_respond_auth_result(\_:\_:\_:\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Responds to an event that requires an authorization response.

## Declaration

```swift
func es_respond_auth_result(_ client: OpaquePointer, _ message: UnsafePointer<es_message_t>, _ result: es_auth_result_t, _ cache: Bool) -> es_respond_result_t
```

## Parameters

- `client`: The client that produced the event.
- `message`: The message that delivered the event.
- `result`: A result indicating the action the Endpoint Security subsystem should take.
- `cache`: Indicates whether Endpoint Security should cache the result. The caching semantics depend on the specific event type.

<a id="return-value"></a>

## Return Value

A result that indicates whether the response succeeded or failed.

## See Also

### Responding to Events

- [es_auth_result_t](es_auth_result_t.md): Values used when responding to an authorization event.
- [es_respond_flags_result(\_:\_:\_:\_:)](es_respond_flags_result%28________%29.md): Responds to an event that requires authorization flags as a response.
- [es_respond_result_t](es_respond_result_t.md): Values that indicate the result of responding to a message.

# es_respond_auth_result (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Responds to an event that requires an authorization response.

## Declaration

```objectivec
extern es_respond_result_t es_respond_auth_result(es_client_t *client, const es_message_t *message, es_auth_result_t result, bool cache);
```

## Parameters

- `client`: The client that produced the event.
- `message`: The message that delivered the event.
- `result`: A result indicating the action the Endpoint Security subsystem should take.
- `cache`: Indicates whether Endpoint Security should cache the result. The caching semantics depend on the specific event type.

<a id="return-value"></a>

## Return Value

A result that indicates whether the response succeeded or failed.

## See Also

### Responding to Events

- [es_auth_result_t](es_auth_result_t.md): Values used when responding to an authorization event.
- [es_respond_flags_result](es_respond_flags_result%28________%29.md): Responds to an event that requires authorization flags as a response.
- [es_respond_result_t](es_respond_result_t.md): Values that indicate the result of responding to a message.
