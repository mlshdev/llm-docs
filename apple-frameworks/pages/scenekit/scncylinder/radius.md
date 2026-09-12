> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncylinder/radius](https://developer.apple.com/documentation/scenekit/scncylinder/radius)

# radius (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The radius of the cylinder’s circular cross section. Animatable.

## Declaration

```swift
var radius: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The cylinder is centered in its local coordinate system. For example, a cylinder of radius `5.0` extends from `-5.0` to `5.0` along the x- and z-axes. The default radius is `0.5`. A radius of zero or less creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [SCNCylinder](../scncylinder.md): A right circular cylinder geometry.

### Adjusting a Cylinder’s Dimensions

- [height](height.md): The extent of the cylinder along its y-axis. Animatable.

# radius (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The radius of the cylinder’s circular cross section. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat radius;
```

<a id="Discussion"></a>

## Discussion

The cylinder is centered in its local coordinate system. For example, a cylinder of radius `5.0` extends from `-5.0` to `5.0` along the x- and z-axes. The default radius is `0.5`. A radius of zero or less creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [SCNCylinder](../scncylinder.md): A right circular cylinder geometry.

### Adjusting a Cylinder’s Dimensions

- [height](height.md): The extent of the cylinder along its y-axis. Animatable.
