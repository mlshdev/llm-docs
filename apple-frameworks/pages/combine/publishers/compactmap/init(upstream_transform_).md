> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/compactmap/init(upstream:transform:)

# init(upstream:transform:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that republishes all non-`nil` results of calling a closure with each received element.

## Declaration

```swift
init(upstream: Upstream, transform: @escaping (Upstream.Output) -> Output?)
```

## Parameters

- `upstream`: The publisher from which this publisher receives elements.
- `transform`: A closure that receives values from the upstream publisher and returns optional values.
