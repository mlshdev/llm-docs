> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/sendcompletion/contentprocessed(_:)](https://developer.apple.com/documentation/network/nwconnection/sendcompletion/contentprocessed(_:))

# NWConnection.SendCompletion.contentProcessed(\_:)

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Provide a completion handler that’s invoked when the sent data is processed by the stack.

## Declaration

```swift
@preconcurrency case contentProcessed(@Sendable (NWError?) -> Void)
```

## See Also

### Completions

- [NWConnection.SendCompletion.idempotent](idempotent.md): Mark the sent data as idempotent—data that can be sent multiple times.
