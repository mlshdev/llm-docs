> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/arview/scene

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
