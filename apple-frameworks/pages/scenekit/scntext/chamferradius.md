> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntext/chamferradius](https://developer.apple.com/documentation/scenekit/scntext/chamferradius)

# chamferRadius (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The width or depth of each chamfered edge. Animatable.

## Declaration

```swift
var chamferRadius: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

A value of `0.0` (the default) or less specifies no chamfer—the extruded sides of each character end at right angles to its front and back.

The maximum chamfer radius is half the value of the [extrusionDepth](extrusiondepth.md) property. At this radius, the front chamfer ends where the back chamfer begins. However, SceneKit may automatically reduce the chamfer radius for character shapes with thin strokes.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing the Text’s 3D Representation

- [flatness](flatness.md): A number that determines the accuracy or smoothness of the text geometry.
- [extrusionDepth](extrusiondepth.md): The extent of the extruded text in the z-axis direction. Animatable.
- [chamferProfile](chamferprofile.md): A path that determines the cross-sectional contour of each chamfered edge.

# chamferRadius (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The width or depth of each chamfered edge. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat chamferRadius;
```

<a id="Discussion"></a>

## Discussion

A value of `0.0` (the default) or less specifies no chamfer—the extruded sides of each character end at right angles to its front and back.

The maximum chamfer radius is half the value of the [extrusionDepth](extrusiondepth.md) property. At this radius, the front chamfer ends where the back chamfer begins. However, SceneKit may automatically reduce the chamfer radius for character shapes with thin strokes.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [chamferSegmentCount](chamfersegmentcount.md): Deprecated. The number of divisions SceneKit uses to create each chamfered edge of the text geometry. Animatable.

### Managing the Text’s 3D Representation

- [flatness](flatness.md): A number that determines the accuracy or smoothness of the text geometry.
- [extrusionDepth](extrusiondepth.md): The extent of the extruded text in the z-axis direction. Animatable.
- [chamferSegmentCount](chamfersegmentcount.md): Deprecated. The number of divisions SceneKit uses to create each chamfered edge of the text geometry. Animatable.
- [chamferProfile](chamferprofile.md): A path that determines the cross-sectional contour of each chamfered edge.
