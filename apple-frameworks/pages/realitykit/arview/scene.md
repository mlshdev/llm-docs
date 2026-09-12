> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/scene](https://developer.apple.com/documentation/realitykit/arview/scene)

# scene

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+

The scene that the view renders and simulates.

## Declaration

```swift
@MainActor @preconcurrency var scene: Scene { get }
```

<a id="discussion"></a>

## Discussion

When you initialize a view, it comes with a single [Scene](../scene.md) instance that you access through the view’s [scene](scene.md) property. Add [AnchorEntity](../anchorentity.md) instances to the scene’s [anchors](../scene/anchors.md) collection to provide content for the scene.
