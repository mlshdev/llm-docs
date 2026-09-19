> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatialpreview/usdpreviewsession/optimizationsteps/optimized

# optimized

**Framework:** SpatialPreview  
**Kind:** Type Property  
**Availability:** macOS 27.0+ · visionOS

Allows the USD stage to be analyzed and potentially simplified or replaced with a proxy before previewing on a device. The USD analysis decides at runtime whether the stage can be passed as-is, simplified in place, or swapped for a lower-fidelity proxy based on scene complexity and session capabilities.

## Declaration

```swift
static let optimized: USDPreviewSession.OptimizationSteps
```
