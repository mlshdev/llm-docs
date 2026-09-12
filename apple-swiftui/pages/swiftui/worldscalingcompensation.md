> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/worldscalingcompensation](https://developer.apple.com/documentation/swiftui/worldscalingcompensation)

# WorldScalingCompensation

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 2.0+

Indicates whether returned metrics will take dynamic scaling into account.

## Declaration

```swift
struct WorldScalingCompensation
```

<a id="overview"></a>

## Overview

On visionOS, a window scene or a volume scene with the [defaultWorldScaling(\_:)](scene/defaultworldscaling%28__%29.md) modifier may scale dynamically when the user repositions it. In those cases, the metrics returned by a [PhysicalMetric](physicalmetric.md) or [PhysicalMetricsConverter](physicalmetricsconverter.md) value may or may not correspond to the units of a `RealityView`.

World scale compensation lets you specify if this scaling is taken into account. If the values are [unscaled](worldscalingcompensation/unscaled.md), they will correspond to the physical metrics of the user’s surroundings, regardless of dynamic scale. If [scaled](worldscalingcompensation/scaled.md), they will be scaled appropriately for the scene, which means they will match the default coordinate system of a `RealityView` in that scene.

## Topics

### Type Properties

- [scaled](worldscalingcompensation/scaled.md): Returns metrics that are scaled appropriately to match the coordinate system of their scene, including any world scaling behavior.
- [unscaled](worldscalingcompensation/unscaled.md): Returns metrics that match the scale of the user’s surroundings, regardless of the world scaling behavior of their scene.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interacting with volumes

- [onVolumeViewpointChange(updateStrategy:initial:\_:)](view/onvolumeviewpointchange%28updatestrategy_initial___%29.md): Adds an action to perform when the viewpoint of the volume changes.
- [supportedVolumeViewpoints(\_:)](view/supportedvolumeviewpoints%28__%29.md): Specifies which viewpoints are supported for the window bar and ornaments in a volume.
- [VolumeViewpointUpdateStrategy](volumeviewpointupdatestrategy.md): A type describing when the action provided to [onVolumeViewpointChange(updateStrategy:initial:\_:)](view/onvolumeviewpointchange%28updatestrategy_initial___%29.md) should be called.
- [Viewpoint3D](viewpoint3d.md): A type describing what direction something is being viewed from.
- [SquareAzimuth](squareazimuth.md): A type describing what direction something is being viewed from along the horizontal plane and snapped to 4 directions.
- [WorldAlignmentBehavior](worldalignmentbehavior.md): A type representing the world alignment behavior for a scene.
- [volumeWorldAlignment(\_:)](scene/volumeworldalignment%28__%29.md): Specifies how a volume should be aligned when moved in the world.
- [WorldScalingBehavior](worldscalingbehavior.md): Specifies the scaling behavior a window should have within the world.
- [defaultWorldScaling(\_:)](scene/defaultworldscaling%28__%29.md): Specify the world scaling behavior for the window.
- [worldTrackingLimitations](environmentvalues/worldtrackinglimitations.md): The current limitations of the device tracking the user’s surroundings.
- [WorldTrackingLimitation](worldtrackinglimitation.md): A structure to represent limitations of tracking the user’s surroundings.
- [SurfaceSnappingInfo](surfacesnappinginfo.md): A type representing information about the window scenes snap state.
