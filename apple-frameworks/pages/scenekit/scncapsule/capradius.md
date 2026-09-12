> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncapsule/capradius](https://developer.apple.com/documentation/scenekit/scncapsule/capradius)

# capRadius (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The radius both of the capsule’s circular center cross section and of its hemispherical ends. Animatable.

## Declaration

```swift
var capRadius: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The capsule is centered in its local coordinate system. For example, the cylindrical body of a capsule of radius `5.0` extends from `-5.0` to `5.0` along the x- and z-axes.

If the cap radius is zero or less, or greater than half the capsule’s height, the geometry is empty. The default cap radius is `0.5`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Capsule’s Dimensions

- [height](height.md): The extent of the capsule along its y-axis. Animatable.

# capRadius (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The radius both of the capsule’s circular center cross section and of its hemispherical ends. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat capRadius;
```

<a id="Discussion"></a>

## Discussion

The capsule is centered in its local coordinate system. For example, the cylindrical body of a capsule of radius `5.0` extends from `-5.0` to `5.0` along the x- and z-axes.

If the cap radius is zero or less, or greater than half the capsule’s height, the geometry is empty. The default cap radius is `0.5`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Capsule’s Dimensions

- [height](height.md): The extent of the capsule along its y-axis. Animatable.
