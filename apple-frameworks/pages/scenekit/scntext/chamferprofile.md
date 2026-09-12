> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntext/chamferprofile](https://developer.apple.com/documentation/scenekit/scntext/chamferprofile)

# chamferProfile (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A path that determines the cross-sectional contour of each chamfered edge.

## Declaration

```swift
@NSCopying var chamferProfile: UIBezierPath? { get set }
```

```swift
@NSCopying var chamferProfile: NSBezierPath? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property must be a two-dimensional path starting at the point `{1, 0}` and ending at the point `{0, 1}`, determining the contour of the shape along its extruded sides. If the value of this property is `nil` and the value of the [chamferRadius](chamferradius.md) property is greater than zero, SceneKit uses a chamfer profile in the shape of a quarter circle. [Figure 1](https://developer.apple.com/documentation/scenekit/scntext/1523334-chamferprofile#1965884) illustrates various chamfer profiles applied to the shape of a tilde (~) character.

![](https://developer.apple.com/images/com.apple.scenekit/media-1965884@2x.png)

## See Also

### Managing the Text’s 3D Representation

- [flatness](flatness.md): A number that determines the accuracy or smoothness of the text geometry.
- [extrusionDepth](extrusiondepth.md): The extent of the extruded text in the z-axis direction. Animatable.
- [chamferRadius](chamferradius.md): The width or depth of each chamfered edge. Animatable.

# chamferProfile (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS 10.9+ · tvOS · visionOS · watchOS

A path that determines the cross-sectional contour of each chamfered edge.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIBezierPath * chamferProfile;
```

```objectivec
@property (nonatomic, copy, nullable) NSBezierPath * chamferProfile;
```

<a id="Discussion"></a>

## Discussion

The value of this property must be a two-dimensional path starting at the point `{1, 0}` and ending at the point `{0, 1}`, determining the contour of the shape along its extruded sides. If the value of this property is `nil` and the value of the [chamferRadius](chamferradius.md) property is greater than zero, SceneKit uses a chamfer profile in the shape of a quarter circle. [Figure 1](https://developer.apple.com/documentation/scenekit/scntext/1523334-chamferprofile#1965884) illustrates various chamfer profiles applied to the shape of a tilde (~) character.

![](https://developer.apple.com/images/com.apple.scenekit/media-1965884@2x.png)

## See Also

### Related Documentation

- [chamferSegmentCount](chamfersegmentcount.md): Deprecated. The number of divisions SceneKit uses to create each chamfered edge of the text geometry. Animatable.

### Managing the Text’s 3D Representation

- [flatness](flatness.md): A number that determines the accuracy or smoothness of the text geometry.
- [extrusionDepth](extrusiondepth.md): The extent of the extruded text in the z-axis direction. Animatable.
- [chamferRadius](chamferradius.md): The width or depth of each chamfered edge. Animatable.
- [chamferSegmentCount](chamfersegmentcount.md): Deprecated. The number of divisions SceneKit uses to create each chamfered edge of the text geometry. Animatable.
