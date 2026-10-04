> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/shaperesource/hash(into:)

# hash(into:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Hashes the essential components of the shape by feeding them into the given hash function.

## Declaration

```swift
nonisolated func hash(into hasher: inout Hasher)
```

## Parameters

- `hasher`: The hash function to use when combining the components of the shape.
