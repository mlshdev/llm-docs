> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntext/extrusiondepth](https://developer.apple.com/documentation/scenekit/scntext/extrusiondepth)

# extrusionDepth (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The extent of the extruded text in the z-axis direction. Animatable.

## Declaration

```swift
var extrusionDepth: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The geometry is centered along the z-axis of its local coordinate space. For example, if its extrusion depth is is `1.0`, the geometry extends from `-0.5` to `0.5` along the z-axis.

An extrusion depth of `0.0` (the default) creates a flat, one-sided shape.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing the Text’s 3D Representation

- [flatness](flatness.md): A number that determines the accuracy or smoothness of the text geometry.
- [chamferRadius](chamferradius.md): The width or depth of each chamfered edge. Animatable.
- [chamferProfile](chamferprofile.md): A path that determines the cross-sectional contour of each chamfered edge.

# extrusionDepth (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The extent of the extruded text in the z-axis direction. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat extrusionDepth;
```

<a id="Discussion"></a>

## Discussion

The geometry is centered along the z-axis of its local coordinate space. For example, if its extrusion depth is is `1.0`, the geometry extends from `-0.5` to `0.5` along the z-axis.

An extrusion depth of `0.0` (the default) creates a flat, one-sided shape.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing the Text’s 3D Representation

- [flatness](flatness.md): A number that determines the accuracy or smoothness of the text geometry.
- [chamferRadius](chamferradius.md): The width or depth of each chamfered edge. Animatable.
- [chamferSegmentCount](chamfersegmentcount.md): Deprecated. The number of divisions SceneKit uses to create each chamfered edge of the text geometry. Animatable.
- [chamferProfile](chamferprofile.md): A path that determines the cross-sectional contour of each chamfered edge.
