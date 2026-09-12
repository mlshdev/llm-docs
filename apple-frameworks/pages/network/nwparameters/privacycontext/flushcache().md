> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/privacycontext/flushcache()](https://developer.apple.com/documentation/network/nwparameters/privacycontext/flushcache())

# flushCache()

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Flushes all cached data, such as TLS session state, created by connections associated with the privacy context.

## Declaration

```swift
func flushCache()
```

<a id="Discussion"></a>

## Discussion

Flushing the cache may be asynchronous, which means that it will take effect shortly after you invoke the function.

## See Also

### Configuring Custom Privacy Settings

- [init(description:)](init%28description_%29.md): Initializes a privacy context with a description string.
- [default](default.md): The privacy context that applies to all connections that do not use a custom context.
- [disableLogging()](disablelogging%28%29.md): Disables system logging of connection activity.
