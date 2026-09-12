> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/worldscalingbehavior](https://developer.apple.com/documentation/swiftui/worldscalingbehavior)

# WorldScalingBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 2.0+

Specifies the scaling behavior a window should have within the world.

## Declaration

```swift
struct WorldScalingBehavior
```

<a id="overview"></a>

## Overview

By default, a regular [WindowGroup](windowgroup.md) uses a scaling behavior of [dynamic](worldscalingbehavior/dynamic.md), and a window with [volumetric](windowstyle/volumetric.md) has a fixed scale.

Dynamic scale means the window will scale larger as it moves further away, maintaining the same angular size. Fixed scale means the window will keep its physical size in the world.

For further information, see [Spatial layout](https://developer.apple.com/design/human-interface-guidelines/spatial-layout) in the Human Interface Guidelines.

## Topics

### Type Properties

- [automatic](worldscalingbehavior/automatic.md): The scaling behavior that is standard for the window’s style.
- [dynamic](worldscalingbehavior/dynamic.md): The window will scale up as it moves further away, maintaining the same angular size.

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
- [defaultWorldScaling(\_:)](scene/defaultworldscaling%28__%29.md): Specify the world scaling behavior for the window.
- [WorldScalingCompensation](worldscalingcompensation.md): Indicates whether returned metrics will take dynamic scaling into account.
- [worldTrackingLimitations](environmentvalues/worldtrackinglimitations.md): The current limitations of the device tracking the user’s surroundings.
- [WorldTrackingLimitation](worldtrackinglimitation.md): A structure to represent limitations of tracking the user’s surroundings.
- [SurfaceSnappingInfo](surfacesnappinginfo.md): A type representing information about the window scenes snap state.
