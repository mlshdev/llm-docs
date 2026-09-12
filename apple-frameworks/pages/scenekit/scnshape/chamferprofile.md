> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnshape/chamferprofile](https://developer.apple.com/documentation/scenekit/scnshape/chamferprofile)

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

The value of this property must be a two-dimensional path starting at the point `{1, 0}` and ending at the point `{0, 1}`, determining the contour of the shape along its extruded sides, as illustrated in the figure below. If the value of this property is `nil` and the value of the [chamferRadius](chamferradius.md) property is greater than zero, SceneKit uses a chamfer profile in the shape of a quarter circle.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929770@2x.png)

## See Also

### Chamfering a Shape

- [chamferMode](chamfermode.md): A constant specifying which ends of the extruded shape’s profile are chamfered.
- [SCNChamferMode](../scnchamfermode.md): Options for which edges of an extruded shape are chamfered, used by the [chamferMode](chamfermode.md) property.
- [chamferRadius](chamferradius.md): The width or depth of each chamfered edge. Animatable.

# chamferProfile (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

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

The value of this property must be a two-dimensional path starting at the point `{1, 0}` and ending at the point `{0, 1}`, determining the contour of the shape along its extruded sides, as illustrated in the figure below. If the value of this property is `nil` and the value of the [chamferRadius](chamferradius.md) property is greater than zero, SceneKit uses a chamfer profile in the shape of a quarter circle.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929770@2x.png)

## See Also

### Chamfering a Shape

- [chamferMode](chamfermode.md): A constant specifying which ends of the extruded shape’s profile are chamfered.
- [SCNChamferMode](../scnchamfermode.md): Options for which edges of an extruded shape are chamfered, used by the [chamferMode](chamfermode.md) property.
- [chamferRadius](chamferradius.md): The width or depth of each chamfered edge. Animatable.
