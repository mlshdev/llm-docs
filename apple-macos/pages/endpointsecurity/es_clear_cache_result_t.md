> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_clear_cache_result_t](https://developer.apple.com/documentation/endpointsecurity/es_clear_cache_result_t)

# es_clear_cache_result_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

Values that indicate the result of clearing a cache.

## Declaration

```swift
struct es_clear_cache_result_t
```

## Topics

### Success

- [ES_CLEAR_CACHE_RESULT_SUCCESS](es_clear_cache_result_success.md): Clearing the cache succeeded.

### Errors

- [ES_CLEAR_CACHE_RESULT_ERR_INTERNAL](es_clear_cache_result_err_internal.md): Communication with the Endpoint Security system failed.
- [ES_CLEAR_CACHE_RESULT_ERR_THROTTLE](es_clear_cache_result_err_throttle.md): Clearing the cache failed because the rate of calls was too high.

### Initializers

- [init(\_:)](es_clear_cache_result_t/init%28__%29.md)
- [init(rawValue:)](es_clear_cache_result_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_clear_cache_result_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Managing Cached Results

- [es_clear_cache(\_:)](es_clear_cache%28__%29.md): Clears all cached results for all clients.

# es_clear_cache_result_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

Values that indicate the result of clearing a cache.

## Declaration

```objectivec
typedef enum { ... } es_clear_cache_result_t;
```

## Topics

### Success

- [ES_CLEAR_CACHE_RESULT_SUCCESS](es_clear_cache_result_success.md): Clearing the cache succeeded.

### Errors

- [ES_CLEAR_CACHE_RESULT_ERR_INTERNAL](es_clear_cache_result_err_internal.md): Communication with the Endpoint Security system failed.
- [ES_CLEAR_CACHE_RESULT_ERR_THROTTLE](es_clear_cache_result_err_throttle.md): Clearing the cache failed because the rate of calls was too high.

## See Also

### Managing Cached Results

- [es_clear_cache](es_clear_cache%28__%29.md): Clears all cached results for all clients.
