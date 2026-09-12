> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_privacy_context_flush_cache(_:)](https://developer.apple.com/documentation/network/nw_privacy_context_flush_cache(_:))

# nw_privacy_context_flush_cache(\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Flushes all cached data, such as TLS session state, created by connections associated with the privacy context.

## Declaration

```swift
func nw_privacy_context_flush_cache(_ privacy_context: nw_privacy_context_t)
```

<a id="Discussion"></a>

## Discussion

Flushing the cache may be asynchronous, which means that it will take effect shortly after you invoke the function.

## See Also

### Configuring Custom Privacy Settings

- [nw_privacy_context_create(\_:)](nw_privacy_context_create%28__%29.md): Initializes a privacy context with a description string.
- [nw_privacy_context_disable_logging(\_:)](nw_privacy_context_disable_logging%28__%29.md): Disables system logging of connection activity.

# nw_privacy_context_flush_cache (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Flushes all cached data, such as TLS session state, created by connections associated with the privacy context.

## Declaration

```objectivec
void nw_privacy_context_flush_cache(nw_privacy_context_t privacy_context);
```

<a id="Discussion"></a>

## Discussion

Flushing the cache may be asynchronous, which means that it will take effect shortly after you invoke the function.

## See Also

### Configuring Custom Privacy Settings

- [nw_privacy_context_create](nw_privacy_context_create%28__%29.md): Initializes a privacy context with a description string.
- [nw_privacy_context_disable_logging](nw_privacy_context_disable_logging%28__%29.md): Disables system logging of connection activity.
