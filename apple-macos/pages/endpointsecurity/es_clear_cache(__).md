> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_clear_cache(_:)](https://developer.apple.com/documentation/endpointsecurity/es_clear_cache(_:))

# es_clear_cache(\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Clears all cached results for all clients.

## Declaration

```swift
func es_clear_cache(_ client: OpaquePointer) -> es_clear_cache_result_t
```

## Parameters

- `client`: The client that performs the request.

<a id="Discussion"></a>

## Discussion

Endpoint Security shares caches across all clients, so you can provide any valid client as the parameter to this function.

## See Also

### Managing Cached Results

- [es_clear_cache_result_t](es_clear_cache_result_t.md): Values that indicate the result of clearing a cache.

# es_clear_cache (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 10.15+

Clears all cached results for all clients.

## Declaration

```objectivec
extern es_clear_cache_result_t es_clear_cache(es_client_t *client);
```

## Parameters

- `client`: The client that performs the request.

<a id="Discussion"></a>

## Discussion

Endpoint Security shares caches across all clients, so you can provide any valid client as the parameter to this function.

## See Also

### Managing Cached Results

- [es_clear_cache_result_t](es_clear_cache_result_t.md): Values that indicate the result of clearing a cache.
