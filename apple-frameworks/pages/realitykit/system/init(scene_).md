> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/system/init(scene:)](https://developer.apple.com/documentation/realitykit/system/init(scene:))

# init(scene:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Creates a new system.

## Declaration

```swift
@MainActor @preconcurrency init(scene: Scene)
```

## Parameters

- `scene`: The scene this system affects.

## Mentioned In

- [Implementing systems for entities in a scene](../implementing-systems-for-entities-in-a-scene.md)

<a id="discussion"></a>

## Discussion

There’s no need to instantiate your own systems, so don’t call this method. Instead, register your system with RealityKit by calling [registerSystem()](registersystem%28%29.md). RealityKit automatically creates an instance of every registered system for every scene.
