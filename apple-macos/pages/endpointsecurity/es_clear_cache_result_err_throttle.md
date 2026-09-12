> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_clear_cache_result_err_throttle](https://developer.apple.com/documentation/endpointsecurity/es_clear_cache_result_err_throttle)

# ES_CLEAR_CACHE_RESULT_ERR_THROTTLE (Swift)

**Framework:** Endpoint Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst · macOS

Clearing the cache failed because the rate of calls was too high.

## Declaration

```swift
var ES_CLEAR_CACHE_RESULT_ERR_THROTTLE: es_clear_cache_result_t { get }
```

<a id="Discussion"></a>

## Discussion

If you receive this response, slow down the rate at which you make calls to [es_clear_cache(\_:)](es_clear_cache%28__%29.md).

## See Also

### Errors

- [ES_CLEAR_CACHE_RESULT_ERR_INTERNAL](es_clear_cache_result_err_internal.md): Communication with the Endpoint Security system failed.

# ES_CLEAR_CACHE_RESULT_ERR_THROTTLE (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

Clearing the cache failed because the rate of calls was too high.

## Declaration

```objectivec
ES_CLEAR_CACHE_RESULT_ERR_THROTTLE
```

<a id="Discussion"></a>

## Discussion

If you receive this response, slow down the rate at which you make calls to [es_clear_cache](es_clear_cache%28__%29.md).

## See Also

### Errors

- [ES_CLEAR_CACHE_RESULT_ERR_INTERNAL](es_clear_cache_result_err_internal.md): Communication with the Endpoint Security system failed.
