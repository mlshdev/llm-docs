> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/environment-swift.struct/sceneunderstanding-swift.struct/options-swift.struct/occlusion](https://developer.apple.com/documentation/realitykit/arview/environment-swift.struct/sceneunderstanding-swift.struct/options-swift.struct/occlusion)

# occlusion

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+

The `.occlusion` option means that the reconstructed geometry will be used for rendering, but only to update the depth buffer. Parts of virtual objects which are behind the reconstructed geometry are not rendered.

## Declaration

```swift
static let occlusion: ARView.Environment.SceneUnderstanding.Options
```
