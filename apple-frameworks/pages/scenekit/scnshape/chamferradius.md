> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnshape/chamferradius](https://developer.apple.com/documentation/scenekit/scnshape/chamferradius)

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

The default value of zero specifies no chamfer (the extruded sides end at right angles to the front and back of the shape). Allowed values range from zero to half the extrusion depth. (At the maximum chamfer radius, the front chamfer ends where the back chamfer begins, as shown on the right in the figure below.)

![](https://developer.apple.com/images/com.apple.scenekit/media-2929772@2x.png)

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Chamfering a Shape

- [chamferMode](chamfermode.md): A constant specifying which ends of the extruded shape’s profile are chamfered.
- [SCNChamferMode](../scnchamfermode.md): Options for which edges of an extruded shape are chamfered, used by the [chamferMode](chamfermode.md) property.
- [chamferProfile](chamferprofile.md): A path that determines the cross-sectional contour of each chamfered edge.

# chamferRadius (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

The width or depth of each chamfered edge. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat chamferRadius;
```

<a id="Discussion"></a>

## Discussion

The default value of zero specifies no chamfer (the extruded sides end at right angles to the front and back of the shape). Allowed values range from zero to half the extrusion depth. (At the maximum chamfer radius, the front chamfer ends where the back chamfer begins, as shown on the right in the figure below.)

![](https://developer.apple.com/images/com.apple.scenekit/media-2929772@2x.png)

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Chamfering a Shape

- [chamferMode](chamfermode.md): A constant specifying which ends of the extruded shape’s profile are chamfered.
- [SCNChamferMode](../scnchamfermode.md): Options for which edges of an extruded shape are chamfered, used by the [chamferMode](chamfermode.md) property.
- [chamferProfile](chamferprofile.md): A path that determines the cross-sectional contour of each chamfered edge.
