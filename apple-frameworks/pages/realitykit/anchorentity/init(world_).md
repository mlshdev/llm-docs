> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/anchorentity/init(world:)

# init(world:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates an anchor entity with a target fixed at the given position in the scene.

## Declaration

```swift
@MainActor @preconcurrency convenience init(world position: SIMD3<Float>)
```

## Parameters

- `position`: The position with which to initialize the world target.
