> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/collectbytime/init(upstream:strategy:options:)](https://developer.apple.com/documentation/combine/publishers/collectbytime/init(upstream:strategy:options:))

# init(upstream:strategy:options:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that buffers and periodically publishes its items.

## Declaration

```swift
init(upstream: Upstream, strategy: Publishers.TimeGroupingStrategy<Context>, options: Context.SchedulerOptions?)
```

## Parameters

- `upstream`: The publisher that this publisher receives elements from.
- `strategy`: The strategy with which to collect and publish elements.
- `options`: `Scheduler` options to use for the strategy.
