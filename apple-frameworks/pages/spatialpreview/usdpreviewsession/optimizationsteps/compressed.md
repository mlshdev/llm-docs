> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/usdpreviewsession/optimizationsteps/compressed](https://developer.apple.com/documentation/spatialpreview/usdpreviewsession/optimizationsteps/compressed)

# compressed

**Framework:** SpatialPreview  
**Kind:** Type Property  
**Availability:** macOS 27.0+ · visionOS

Allows the USD stage’s textures and meshes to be compressed before previewing on a device. Reduces the transmission file size of the USD stage by compressing textures and meshes to minimize the data sent, and is only applied when the stage exceeds the compression threshold. Can be combined with `.optimized` — compression runs after the `.optimized` optimization step on the resulting stage.

## Declaration

```swift
static let compressed: USDPreviewSession.OptimizationSteps
```
