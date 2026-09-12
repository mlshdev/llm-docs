> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_delete_client(_:)](https://developer.apple.com/documentation/endpointsecurity/es_delete_client(_:))

# es_delete_client(\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Destroys and disconnects a client instance from the Endpoint Security system.

## Declaration

```swift
func es_delete_client(_ client: OpaquePointer?) -> es_return_t
```

## Parameters

- `client`: The client to destroy.

<a id="return-value"></a>

## Return Value

A value indicating whether deletion succeeded. [ES_RETURN_ERROR](es_return_error.md) indicates that shutdown encountered an error, which results in a resource leak.

# es_delete_client (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Destroys and disconnects a client instance from the Endpoint Security system.

## Declaration

```objectivec
extern es_return_t es_delete_client(es_client_t *client);
```

## Parameters

- `client`: The client to destroy.

<a id="return-value"></a>

## Return Value

A value indicating whether deletion succeeded. [ES_RETURN_ERROR](es_return_error.md) indicates that shutdown encountered an error, which results in a resource leak.
