> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/squareazimuth](https://developer.apple.com/documentation/swiftui/squareazimuth)

# SquareAzimuth

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** visionOS 2.0+

A type describing what direction something is being viewed from along the horizontal plane and snapped to 4 directions.

## Declaration

```swift
@frozen enum SquareAzimuth
```

## Topics

### Structures

- [SquareAzimuth.Set](squareazimuth/set.md)

### Enumeration Cases

- [SquareAzimuth.back](squareazimuth/back.md): Has an orientation with an horizontal angle equal to `180°`
- [SquareAzimuth.front](squareazimuth/front.md): Has an orientation with an horizontal angle equal to `0°`.
- [SquareAzimuth.left](squareazimuth/left.md): Has an orientation with an horizontal angle equal to `270°`.
- [SquareAzimuth.right](squareazimuth/right.md): Has an orientation with an horizontal angle equal to `90°`.

### Initializers

- [init(closestToAzimuth:)](squareazimuth/init%28closesttoazimuth_%29.md): Creates a [SquareAzimuth](squareazimuth.md) case with an orientation that has a horizontal angle closest to the provided azimuth.

### Instance Properties

- [orientation](squareazimuth/orientation.md): A 3D rotation that is snapped to the center of one of the four sides.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
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
- [WorldAlignmentBehavior](worldalignmentbehavior.md): A type representing the world alignment behavior for a scene.
- [volumeWorldAlignment(\_:)](scene/volumeworldalignment%28__%29.md): Specifies how a volume should be aligned when moved in the world.
- [WorldScalingBehavior](worldscalingbehavior.md): Specifies the scaling behavior a window should have within the world.
- [defaultWorldScaling(\_:)](scene/defaultworldscaling%28__%29.md): Specify the world scaling behavior for the window.
- [WorldScalingCompensation](worldscalingcompensation.md): Indicates whether returned metrics will take dynamic scaling into account.
- [worldTrackingLimitations](environmentvalues/worldtrackinglimitations.md): The current limitations of the device tracking the user’s surroundings.
- [WorldTrackingLimitation](worldtrackinglimitation.md): A structure to represent limitations of tracking the user’s surroundings.
- [SurfaceSnappingInfo](surfacesnappinginfo.md): A type representing information about the window scenes snap state.
