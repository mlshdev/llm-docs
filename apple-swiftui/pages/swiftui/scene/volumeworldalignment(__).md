> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/volumeworldalignment(_:)](https://developer.apple.com/documentation/swiftui/scene/volumeworldalignment(_:))

# volumeWorldAlignment(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Specifies how a volume should be aligned when moved in the world.

## Declaration

```swift
nonisolated func volumeWorldAlignment(_ behavior: WorldAlignmentBehavior) -> some Scene

```

<a id="discussion"></a>

## Discussion

For example, you can create a volume that remains parallel to the floor even when lifted up high above eye level by applying a [gravityAligned](../worldalignmentbehavior/gravityaligned.md) alignment to the scene:

```swift
@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .windowStyle(.volumetric)
        .volumeWorldAlignment(.gravityAligned)
    }
}
```

The default value if you don’t apply the modifier is [automatic](../worldalignmentbehavior/automatic.md). With that strategy, volumes will tilt themselves so the front remains fully visible while being repositioned.

## See Also

### Interacting with volumes

- [onVolumeViewpointChange(updateStrategy:initial:\_:)](../view/onvolumeviewpointchange%28updatestrategy_initial___%29.md): Adds an action to perform when the viewpoint of the volume changes.
- [supportedVolumeViewpoints(\_:)](../view/supportedvolumeviewpoints%28__%29.md): Specifies which viewpoints are supported for the window bar and ornaments in a volume.
- [VolumeViewpointUpdateStrategy](../volumeviewpointupdatestrategy.md): A type describing when the action provided to [onVolumeViewpointChange(updateStrategy:initial:\_:)](../view/onvolumeviewpointchange%28updatestrategy_initial___%29.md) should be called.
- [Viewpoint3D](../viewpoint3d.md): A type describing what direction something is being viewed from.
- [SquareAzimuth](../squareazimuth.md): A type describing what direction something is being viewed from along the horizontal plane and snapped to 4 directions.
- [WorldAlignmentBehavior](../worldalignmentbehavior.md): A type representing the world alignment behavior for a scene.
- [WorldScalingBehavior](../worldscalingbehavior.md): Specifies the scaling behavior a window should have within the world.
- [defaultWorldScaling(\_:)](defaultworldscaling%28__%29.md): Specify the world scaling behavior for the window.
- [WorldScalingCompensation](../worldscalingcompensation.md): Indicates whether returned metrics will take dynamic scaling into account.
- [worldTrackingLimitations](../environmentvalues/worldtrackinglimitations.md): The current limitations of the device tracking the user’s surroundings.
- [WorldTrackingLimitation](../worldtrackinglimitation.md): A structure to represent limitations of tracking the user’s surroundings.
- [SurfaceSnappingInfo](../surfacesnappinginfo.md): A type representing information about the window scenes snap state.
