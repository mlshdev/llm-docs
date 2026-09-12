> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncone/bottomradius](https://developer.apple.com/documentation/scenekit/scncone/bottomradius)

# bottomRadius (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The radius of the cone’s circular base. Animatable.

## Declaration

```swift
var bottomRadius: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The cone is centered in its local coordinate system. For example, the base of a cone whose bottom radius is `5.0` extends from `-5.0` to `5.0` along the x- and z-axes.

If either the top or bottom radius is zero, the geometry forms a cone that tapers to an apex point at that end. If both top and bottom radii are nonzero, the geometry forms a frustum that tapers (or expands) from a circular base to a circular top. If both top and bottom radii are zero or less, or either if the top or bottom radius is less than zero, the geometry is empty. The default bottom radius is `0.5`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Cone’s Dimensions

- [topRadius](topradius.md): The radius of the cone’s circular top. Animatable.
- [height](height.md): The extent of the cylinder along its y-axis. Animatable.

# bottomRadius (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The radius of the cone’s circular base. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat bottomRadius;
```

<a id="Discussion"></a>

## Discussion

The cone is centered in its local coordinate system. For example, the base of a cone whose bottom radius is `5.0` extends from `-5.0` to `5.0` along the x- and z-axes.

If either the top or bottom radius is zero, the geometry forms a cone that tapers to an apex point at that end. If both top and bottom radii are nonzero, the geometry forms a frustum that tapers (or expands) from a circular base to a circular top. If both top and bottom radii are zero or less, or either if the top or bottom radius is less than zero, the geometry is empty. The default bottom radius is `0.5`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Cone’s Dimensions

- [topRadius](topradius.md): The radius of the cone’s circular top. Animatable.
- [height](height.md): The extent of the cylinder along its y-axis. Animatable.
