> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/removeduplicates/init(upstream:predicate:)

# init(upstream:predicate:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that publishes only elements that don’t match the previous element, as evaluated by a provided closure.

## Declaration

```swift
init(upstream: Upstream, predicate: @escaping (Publishers.RemoveDuplicates<Upstream>.Output, Publishers.RemoveDuplicates<Upstream>.Output) -> Bool)
```

## Parameters

- `upstream`: The publisher from which this publisher receives elements.
- `predicate`: A closure to evaluate whether two elements are equivalent, for purposes of filtering. Return `true` from this closure to indicate that the second element is a duplicate of the first.
