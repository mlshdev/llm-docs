> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/replaceerror/init(upstream:output:)

# init(upstream:output:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that replaces any errors in the stream with a provided element.

## Declaration

```swift
init(upstream: Upstream, output: Publishers.ReplaceError<Upstream>.Output)
```

## Parameters

- `upstream`: The element with which to replace errors from the upstream publisher.
- `output`: The publisher from which this publisher receives elements.
