> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/collectbycount/init(upstream:count:)

# init(upstream:count:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that buffers a maximum number of items.

## Declaration

```swift
init(upstream: Upstream, count: Int)
```

## Parameters

- `upstream`: The publisher that this publisher receives elements from.
- `count`: The maximum number of received elements to buffer before publishing.
