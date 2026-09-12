> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/impulseaction/init(targetentity:linearimpulse:)](https://developer.apple.com/documentation/realitykit/impulseaction/init(targetentity:linearimpulse:))

# init(targetEntity:linearImpulse:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a new impulse action.

## Declaration

```swift
init(targetEntity: ActionEntityResolution = .sourceEntity, linearImpulse: SIMD3<Float> = [0, 1, 0])
```

## Parameters

- `targetEntity`: The entity that the impulse acts upon.
- `linearImpulse`: The impulse in newton seconds (in physics simulation space).
