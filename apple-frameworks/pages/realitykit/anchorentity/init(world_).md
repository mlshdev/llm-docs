> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchorentity/init(world:)](https://developer.apple.com/documentation/realitykit/anchorentity/init(world:))

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
