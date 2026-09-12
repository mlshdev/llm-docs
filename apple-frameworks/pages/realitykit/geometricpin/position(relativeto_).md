> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/geometricpin/position(relativeto:)](https://developer.apple.com/documentation/realitykit/geometricpin/position(relativeto:))

# position(relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Calculates and returns the current position of the pin relative to a reference entity, adjusted by the optional offset position.

## Declaration

```swift
@MainActor func position(relativeTo referenceEntity: Entity?) -> SIMD3<Float>?
```

## Parameters

- `referenceEntity`: Reference `Entity` which defines the frame of reference for the returned position. Can be `nil`, which is equivalent to “world space”.
