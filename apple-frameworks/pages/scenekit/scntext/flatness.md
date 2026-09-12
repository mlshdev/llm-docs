> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntext/flatness](https://developer.apple.com/documentation/scenekit/scntext/flatness)

# flatness (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A number that determines the accuracy or smoothness of the text geometry.

## Declaration

```swift
var flatness: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit uses line segments to approximate the curved shapes of text characters when converting text into a three-dimensional geometry. (These segments become side polygons when SceneKit extrudes the text.) Higher flatness values result in fewer segments, reducing the smoothness of curves and improving rendering performance. Lower values result in more segments, increasing the smoothness of curves at a cost to rendering performance.

The default value of this property is `0.6`, specifying that the line segments may not deviate from the curve by more than 0.6 points.

## See Also

### Managing the Text’s 3D Representation

- [extrusionDepth](extrusiondepth.md): The extent of the extruded text in the z-axis direction. Animatable.
- [chamferRadius](chamferradius.md): The width or depth of each chamfered edge. Animatable.
- [chamferProfile](chamferprofile.md): A path that determines the cross-sectional contour of each chamfered edge.

# flatness (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

A number that determines the accuracy or smoothness of the text geometry.

## Declaration

```objectivec
@property (nonatomic) CGFloat flatness;
```

<a id="Discussion"></a>

## Discussion

SceneKit uses line segments to approximate the curved shapes of text characters when converting text into a three-dimensional geometry. (These segments become side polygons when SceneKit extrudes the text.) Higher flatness values result in fewer segments, reducing the smoothness of curves and improving rendering performance. Lower values result in more segments, increasing the smoothness of curves at a cost to rendering performance.

The default value of this property is `0.6`, specifying that the line segments may not deviate from the curve by more than 0.6 points.

## See Also

### Managing the Text’s 3D Representation

- [extrusionDepth](extrusiondepth.md): The extent of the extruded text in the z-axis direction. Animatable.
- [chamferRadius](chamferradius.md): The width or depth of each chamfered edge. Animatable.
- [chamferSegmentCount](chamfersegmentcount.md): Deprecated. The number of divisions SceneKit uses to create each chamfered edge of the text geometry. Animatable.
- [chamferProfile](chamferprofile.md): A path that determines the cross-sectional contour of each chamfered edge.
