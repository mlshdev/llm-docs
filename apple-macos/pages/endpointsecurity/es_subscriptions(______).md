> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_subscriptions(_:_:_:)](https://developer.apple.com/documentation/endpointsecurity/es_subscriptions(_:_:_:))

# es_subscriptions(\_:\_:\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Returns a list of the client’s subscriptions.

## Declaration

```swift
func es_subscriptions(_ client: OpaquePointer, _ count: UnsafeMutablePointer<Int>, _ subscriptions: UnsafeMutablePointer<UnsafeMutablePointer<es_event_type_t>>?) -> es_return_t
```

## Parameters

- `client`: The client to query.
- `count`: On return, the number of items in the `subscriptions` array.
- `subscriptions`: An array of subscribed event types.

<a id="return-value"></a>

## Return Value

A value that indicates whether the subscriptions query succeeded. [ES_RETURN_ERROR](es_return_error.md) indicates that the caller couldn’t reach the Endpoint Security subsystem or that the request was invalid.

<a id="Discussion"></a>

## Discussion

On return, the caller takes ownership of the memory pointed to by the `subscriptions` parameter, and must free it.

## See Also

### Subscribing to Events

- [es_subscribe(\_:\_:\_:)](es_subscribe%28______%29.md): Subscribes a client to a set of events.
- [es_unsubscribe(\_:\_:\_:)](es_unsubscribe%28______%29.md): Unsubscribes the provided client from a set of events.
- [es_event_type_t](es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.
- [es_unsubscribe_all(\_:)](es_unsubscribe_all%28__%29.md): Unsubscribes a client from all events.

# es_subscriptions (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Returns a list of the client’s subscriptions.

## Declaration

```objectivec
extern es_return_t es_subscriptions(es_client_t *client, size_t *count, es_event_type_t **subscriptions);
```

## Parameters

- `client`: The client to query.
- `count`: On return, the number of items in the `subscriptions` array.
- `subscriptions`: An array of subscribed event types.

<a id="return-value"></a>

## Return Value

A value that indicates whether the subscriptions query succeeded. [ES_RETURN_ERROR](es_return_error.md) indicates that the caller couldn’t reach the Endpoint Security subsystem or that the request was invalid.

<a id="Discussion"></a>

## Discussion

On return, the caller takes ownership of the memory pointed to by the `subscriptions` parameter, and must free it.

## See Also

### Subscribing to Events

- [es_subscribe](es_subscribe%28______%29.md): Subscribes a client to a set of events.
- [es_unsubscribe](es_unsubscribe%28______%29.md): Unsubscribes the provided client from a set of events.
- [es_event_type_t](es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.
- [es_unsubscribe_all](es_unsubscribe_all%28__%29.md): Unsubscribes a client from all events.
