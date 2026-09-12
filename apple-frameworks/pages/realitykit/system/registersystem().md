> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/system/registersystem()](https://developer.apple.com/documentation/realitykit/system/registersystem())

# registerSystem()

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Registers a system with RealityKit.

## Declaration

```swift
@MainActor @preconcurrency static func registerSystem()
```

## Mentioned In

- [Implementing systems for entities in a scene](../implementing-systems-for-entities-in-a-scene.md)

<a id="discussion"></a>

## Discussion

Calling this method informs RealityKit of a system of defined behavior for its scenes. RealityKit automatically creates an instance of all registered systems for every scene and calls every registered system’s [update(context:)](update%28context_%29-3d0qz.md) method on every scene update.

If you call [registerSystem()](registersystem%28%29.md) multiple times, RealityKit ignores additional calls after the first.
