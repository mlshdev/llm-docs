> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_privacy_context_create(_:)](https://developer.apple.com/documentation/network/nw_privacy_context_create(_:))

# nw_privacy_context_create(\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Initializes a privacy context with a description string.

## Declaration

```swift
func nw_privacy_context_create(_ description: UnsafePointer<CChar>) -> nw_privacy_context_t
```

## See Also

### Configuring Custom Privacy Settings

- [nw_privacy_context_disable_logging(\_:)](nw_privacy_context_disable_logging%28__%29.md): Disables system logging of connection activity.
- [nw_privacy_context_flush_cache(\_:)](nw_privacy_context_flush_cache%28__%29.md): Flushes all cached data, such as TLS session state, created by connections associated with the privacy context.

# nw_privacy_context_create (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Initializes a privacy context with a description string.

## Declaration

```objectivec
nw_privacy_context_tnw_privacy_context_create(const char *description);
```

## See Also

### Configuring Custom Privacy Settings

- [nw_privacy_context_disable_logging](nw_privacy_context_disable_logging%28__%29.md): Disables system logging of connection activity.
- [nw_privacy_context_flush_cache](nw_privacy_context_flush_cache%28__%29.md): Flushes all cached data, such as TLS session state, created by connections associated with the privacy context.
