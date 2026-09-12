> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_unsubscribe_all(_:)](https://developer.apple.com/documentation/endpointsecurity/es_unsubscribe_all(_:))

# es_unsubscribe_all(\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Unsubscribes a client from all events.

## Declaration

```swift
func es_unsubscribe_all(_ client: OpaquePointer) -> es_return_t
```

## Parameters

- `client`: The client to unsubscribe.

<a id="return-value"></a>

## Return Value

A value that indicates whether subscribing succeeded. [ES_RETURN_ERROR](es_return_error.md) indicates that the caller couldn’t reach the Endpoint Security subsystem or that the request was invalid.

## See Also

### Subscribing to Events

- [es_subscribe(\_:\_:\_:)](es_subscribe%28______%29.md): Subscribes a client to a set of events.
- [es_subscriptions(\_:\_:\_:)](es_subscriptions%28______%29.md): Returns a list of the client’s subscriptions.
- [es_unsubscribe(\_:\_:\_:)](es_unsubscribe%28______%29.md): Unsubscribes the provided client from a set of events.
- [es_event_type_t](es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.

# es_unsubscribe_all (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Unsubscribes a client from all events.

## Declaration

```objectivec
extern es_return_t es_unsubscribe_all(es_client_t *client);
```

## Parameters

- `client`: The client to unsubscribe.

<a id="return-value"></a>

## Return Value

A value that indicates whether subscribing succeeded. [ES_RETURN_ERROR](es_return_error.md) indicates that the caller couldn’t reach the Endpoint Security subsystem or that the request was invalid.

## See Also

### Subscribing to Events

- [es_subscribe](es_subscribe%28______%29.md): Subscribes a client to a set of events.
- [es_subscriptions](es_subscriptions%28______%29.md): Returns a list of the client’s subscriptions.
- [es_unsubscribe](es_unsubscribe%28______%29.md): Unsubscribes the provided client from a set of events.
- [es_event_type_t](es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.
