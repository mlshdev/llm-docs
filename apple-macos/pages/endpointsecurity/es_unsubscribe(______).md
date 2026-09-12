> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_unsubscribe(_:_:_:)](https://developer.apple.com/documentation/endpointsecurity/es_unsubscribe(_:_:_:))

# es_unsubscribe(\_:\_:\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Unsubscribes the provided client from a set of events.

## Declaration

```swift
func es_unsubscribe(_ client: OpaquePointer, _ events: UnsafePointer<es_event_type_t>, _ event_count: UInt32) -> es_return_t
```

## Parameters

- `client`: The client to unsubscribe.
- `events`: An array of event types to unsubscribe to.
- `event_count`: The number of event types in the array.

<a id="return-value"></a>

## Return Value

A value indicating if the unsubscribe succeeded. [ES_RETURN_ERROR](es_return_error.md) indicates that the caller couldn’t reach the Endpoint Security subsystem or that the request was invalid.

<a id="Discussion"></a>

## Discussion

After making this call successfully, Endpoint Security continues to deliver messages for any previously-subscribed events that aren’t specifically unsubscribed from. Use this function to selectively unsubscribe from some events, while remaining subscribed to others. To unsubscribe from all events, use [es_unsubscribe_all(\_:)](es_unsubscribe_all%28__%29.md).

## See Also

### Subscribing to Events

- [es_subscribe(\_:\_:\_:)](es_subscribe%28______%29.md): Subscribes a client to a set of events.
- [es_subscriptions(\_:\_:\_:)](es_subscriptions%28______%29.md): Returns a list of the client’s subscriptions.
- [es_event_type_t](es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.
- [es_unsubscribe_all(\_:)](es_unsubscribe_all%28__%29.md): Unsubscribes a client from all events.

# es_unsubscribe (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Unsubscribes the provided client from a set of events.

## Declaration

```objectivec
extern es_return_t es_unsubscribe(es_client_t *client, const es_event_type_t *events, uint32_t event_count);
```

## Parameters

- `client`: The client to unsubscribe.
- `events`: An array of event types to unsubscribe to.
- `event_count`: The number of event types in the array.

<a id="return-value"></a>

## Return Value

A value indicating if the unsubscribe succeeded. [ES_RETURN_ERROR](es_return_error.md) indicates that the caller couldn’t reach the Endpoint Security subsystem or that the request was invalid.

<a id="Discussion"></a>

## Discussion

After making this call successfully, Endpoint Security continues to deliver messages for any previously-subscribed events that aren’t specifically unsubscribed from. Use this function to selectively unsubscribe from some events, while remaining subscribed to others. To unsubscribe from all events, use [es_unsubscribe_all](es_unsubscribe_all%28__%29.md).

## See Also

### Subscribing to Events

- [es_subscribe](es_subscribe%28______%29.md): Subscribes a client to a set of events.
- [es_subscriptions](es_subscriptions%28______%29.md): Returns a list of the client’s subscriptions.
- [es_event_type_t](es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.
- [es_unsubscribe_all](es_unsubscribe_all%28__%29.md): Unsubscribes a client from all events.
