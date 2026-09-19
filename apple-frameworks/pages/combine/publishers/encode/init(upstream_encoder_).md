> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/encode/init(upstream:encoder:)

# init(upstream:encoder:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that decodes elements received from an upstream publisher, using a given decoder.

## Declaration

```swift
init(upstream: Upstream, encoder: Coder)
```

## Parameters

- `upstream`: The publisher from which this publisher receives elements.
- `encoder`: The encoder that decodes elements received from the upstream publisher.
