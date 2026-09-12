> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hasanchoring/reanchor(_:preservingworldtransform:)](https://developer.apple.com/documentation/realitykit/hasanchoring/reanchor(_:preservingworldtransform:))

# reanchor(\_:preservingWorldTransform:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Changes the entity’s anchoring, preserving either the world transform or the local transform.

## Declaration

```swift
@MainActor @preconcurrency func reanchor(_ target: AnchoringComponent.Target, preservingWorldTransform: Bool = true)
```

## Parameters

- `target`: Describes how the entity should be anchored in AR.
- `preservingWorldTransform`: A Boolean you set to `true` to preserve the current world space position, or `false` to use the position relative to the previous anchor for the new anchor.
