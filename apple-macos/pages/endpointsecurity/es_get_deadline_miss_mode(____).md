> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_get_deadline_miss_mode(_:_:)](https://developer.apple.com/documentation/endpointsecurity/es_get_deadline_miss_mode(_:_:))

# es_get_deadline_miss_mode(\_:\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 27.0+

Get the current deadline miss mode for the specified client

## Declaration

```swift
func es_get_deadline_miss_mode(_ client: OpaquePointer, _ mode: UnsafeMutablePointer<es_deadline_miss_mode_t>) -> es_return_t
```

## Parameters

- `client`: The client to query
- `mode`: Output parameter for the current deadline miss mode

<a id="return-value"></a>

## Return Value

ES_RETURN_SUCCESS on success, ES_RETURN_ERROR on failure

# es_get_deadline_miss_mode (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 27.0+

Get the current deadline miss mode for the specified client

## Declaration

```objectivec
extern es_return_t es_get_deadline_miss_mode(es_client_t *client, es_deadline_miss_mode_t *mode);
```

## Parameters

- `client`: The client to query
- `mode`: Output parameter for the current deadline miss mode

<a id="return-value"></a>

## Return Value

ES_RETURN_SUCCESS on success, ES_RETURN_ERROR on failure
