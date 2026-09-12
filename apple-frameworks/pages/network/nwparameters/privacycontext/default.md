> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/privacycontext/default](https://developer.apple.com/documentation/network/nwparameters/privacycontext/default)

# default

**Framework:** Network  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The privacy context that applies to all connections that do not use a custom context.

## Declaration

```swift
static let `default`: NWParameters.PrivacyContext
```

<a id="Discussion"></a>

## Discussion

You cannot disable logging on the default privacy context.

Flushing the cache on the default privacy context will not affect other privacy contexts.

Changing name resolution settings will only affect privacy contexts that did not already explicitly configure resolution requirements.

## See Also

### Configuring Custom Privacy Settings

- [init(description:)](init%28description_%29.md): Initializes a privacy context with a description string.
- [disableLogging()](disablelogging%28%29.md): Disables system logging of connection activity.
- [flushCache()](flushcache%28%29.md): Flushes all cached data, such as TLS session state, created by connections associated with the privacy context.
