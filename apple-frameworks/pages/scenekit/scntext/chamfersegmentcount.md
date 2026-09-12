> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntext/chamfersegmentcount](https://developer.apple.com/documentation/scenekit/scntext/chamfersegmentcount)

# chamferSegmentCount

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The number of divisions SceneKit uses to create each chamfered edge of the text geometry. Animatable.

> The [flatness](flatness.md) property controls the level of detail of both the text and its chamfer profile.

## Declaration

```objectivec
@property (nonatomic) NSInteger chamferSegmentCount;
```

<a id="Discussion"></a>

## Discussion

A larger number of segments adds more vertex data to the geometry, creating a smoother curve for chamfered edges at a cost to rendering performance.

The default segment count is `10`. Setting this property’s value to a number less than `1` results in undefined behavior.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing the Text’s 3D Representation

- [flatness](flatness.md): A number that determines the accuracy or smoothness of the text geometry.
- [extrusionDepth](extrusiondepth.md): The extent of the extruded text in the z-axis direction. Animatable.
- [chamferRadius](chamferradius.md): The width or depth of each chamfered edge. Animatable.
- [chamferProfile](chamferprofile.md): A path that determines the cross-sectional contour of each chamfered edge.
