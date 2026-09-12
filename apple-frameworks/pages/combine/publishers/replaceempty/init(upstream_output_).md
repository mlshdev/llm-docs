> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/replaceempty/init(upstream:output:)](https://developer.apple.com/documentation/combine/publishers/replaceempty/init(upstream:output:))

# init(upstream:output:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that replaces an empty stream with a provided element.

## Declaration

```swift
init(upstream: Upstream, output: Publishers.ReplaceEmpty<Upstream>.Output)
```

## Parameters

- `upstream`: The element to deliver when the upstream publisher finishes without delivering any elements.
- `output`: The publisher from which this publisher receives elements.
