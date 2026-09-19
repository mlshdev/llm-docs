> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/measureinterval/init(upstream:scheduler:)

# init(upstream:scheduler:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that measures and emits the time interval between events received from an upstream publisher.

## Declaration

```swift
init(upstream: Upstream, scheduler: Context)
```

## Parameters

- `upstream`: The publisher from which this publisher receives elements.
- `scheduler`: A scheduler to use for tracking the timing of events.
