> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/retry/init(upstream:retries:)

# init(upstream:retries:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that attempts to recreate its subscription to a failed upstream publisher.

## Declaration

```swift
init(upstream: Upstream, retries: Int?)
```

## Parameters

- `upstream`: The publisher from which this publisher receives its elements.
- `retries`: The maximum number of retry attempts to perform. If `nil`, this publisher attempts to reconnect with the upstream publisher an unlimited number of times.
