> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_get_deadline_max_milliseconds(_:_:_:)](https://developer.apple.com/documentation/endpointsecurity/es_get_deadline_max_milliseconds(_:_:_:))

# es_get_deadline_max_milliseconds(\_:\_:\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 27.0+

Get the current maximum deadline in milliseconds for a specific event type

## Declaration

```swift
func es_get_deadline_max_milliseconds(_ client: OpaquePointer, _ event: es_event_type_t, _ milliseconds: UnsafeMutablePointer<UInt32>) -> es_return_t
```

## Parameters

- `client`: The client to query
- `event`: The event type to query the deadline for
- `milliseconds`: Output parameter for the current maximum deadline in milliseconds for the specified event

<a id="return-value"></a>

## Return Value

ES_RETURN_SUCCESS on success, ES_RETURN_ERROR on failure

# es_get_deadline_max_milliseconds (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 27.0+

Get the current maximum deadline in milliseconds for a specific event type

## Declaration

```objectivec
extern es_return_t es_get_deadline_max_milliseconds(es_client_t *client, es_event_type_t event, uint32_t *milliseconds);
```

## Parameters

- `client`: The client to query
- `event`: The event type to query the deadline for
- `milliseconds`: Output parameter for the current maximum deadline in milliseconds for the specified event

<a id="return-value"></a>

## Return Value

ES_RETURN_SUCCESS on success, ES_RETURN_ERROR on failure
