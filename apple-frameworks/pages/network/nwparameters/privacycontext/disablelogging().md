> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparameters/privacycontext/disablelogging()](https://developer.apple.com/documentation/network/nwparameters/privacycontext/disablelogging())

# disableLogging()

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Disables system logging of connection activity.

## Declaration

```swift
func disableLogging()
```

## See Also

### Configuring Custom Privacy Settings

- [init(description:)](init%28description_%29.md): Initializes a privacy context with a description string.
- [default](default.md): The privacy context that applies to all connections that do not use a custom context.
- [flushCache()](flushcache%28%29.md): Flushes all cached data, such as TLS session state, created by connections associated with the privacy context.
