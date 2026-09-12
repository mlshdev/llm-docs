> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/usdpreviewsession/optimizationsteps](https://developer.apple.com/documentation/spatialpreview/usdpreviewsession/optimizationsteps)

# USDPreviewSession.OptimizationSteps

**Framework:** SpatialPreview  
**Kind:** Structure  
**Availability:** macOS 27.0+ · visionOS

A set of optimization steps to apply to a USD stage before previewing on a device.

## Declaration

```swift
struct OptimizationSteps
```

## Topics

### Type Properties

- [compressed](optimizationsteps/compressed.md): Allows the USD stage’s textures and meshes to be compressed before previewing on a device. Reduces the transmission file size of the USD stage by compressing textures and meshes to minimize the data sent, and is only applied when the stage exceeds the compression threshold. Can be combined with `.optimized` — compression runs after the `.optimized` optimization step on the resulting stage.
- [optimized](optimizationsteps/optimized.md): Allows the USD stage to be analyzed and potentially simplified or replaced with a proxy before previewing on a device. The USD analysis decides at runtime whether the stage can be passed as-is, simplified in place, or swapped for a lower-fidelity proxy based on scene complexity and session capabilities.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)
