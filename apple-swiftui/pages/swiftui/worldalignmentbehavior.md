> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/worldalignmentbehavior](https://developer.apple.com/documentation/swiftui/worldalignmentbehavior)

# WorldAlignmentBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A type representing the world alignment behavior for a scene.

## Declaration

```swift
struct WorldAlignmentBehavior
```

<a id="overview"></a>

## Overview

A value of this type can be provided to the [volumeWorldAlignment(\_:)](scene/volumeworldalignment%28__%29.md) scene modifier to control the world alignment volumes should maintain as they are repositioned. The default value is [automatic](worldalignmentbehavior/automatic.md).

## Topics

### Type Properties

- [adaptive](worldalignmentbehavior/adaptive.md): When lifted above eye level, the volume will tilt so the front remains fully visible.
- [automatic](worldalignmentbehavior/automatic.md): The world alignment behavior that is standard for the system.
- [gravityAligned](worldalignmentbehavior/gravityaligned.md): The volume will not tilt so as to remain aligned with gravity.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interacting with volumes

- [onVolumeViewpointChange(updateStrategy:initial:\_:)](view/onvolumeviewpointchange%28updatestrategy_initial___%29.md): Adds an action to perform when the viewpoint of the volume changes.
- [supportedVolumeViewpoints(\_:)](view/supportedvolumeviewpoints%28__%29.md): Specifies which viewpoints are supported for the window bar and ornaments in a volume.
- [VolumeViewpointUpdateStrategy](volumeviewpointupdatestrategy.md): A type describing when the action provided to [onVolumeViewpointChange(updateStrategy:initial:\_:)](view/onvolumeviewpointchange%28updatestrategy_initial___%29.md) should be called.
- [Viewpoint3D](viewpoint3d.md): A type describing what direction something is being viewed from.
- [SquareAzimuth](squareazimuth.md): A type describing what direction something is being viewed from along the horizontal plane and snapped to 4 directions.
- [volumeWorldAlignment(\_:)](scene/volumeworldalignment%28__%29.md): Specifies how a volume should be aligned when moved in the world.
- [WorldScalingBehavior](worldscalingbehavior.md): Specifies the scaling behavior a window should have within the world.
- [defaultWorldScaling(\_:)](scene/defaultworldscaling%28__%29.md): Specify the world scaling behavior for the window.
- [WorldScalingCompensation](worldscalingcompensation.md): Indicates whether returned metrics will take dynamic scaling into account.
- [worldTrackingLimitations](environmentvalues/worldtrackinglimitations.md): The current limitations of the device tracking the user’s surroundings.
- [WorldTrackingLimitation](worldtrackinglimitation.md): A structure to represent limitations of tracking the user’s surroundings.
- [SurfaceSnappingInfo](surfacesnappinginfo.md): A type representing information about the window scenes snap state.
