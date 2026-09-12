> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncapsule/height](https://developer.apple.com/documentation/scenekit/scncapsule/height)

# height (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The extent of the capsule along its y-axis. Animatable.

## Declaration

```swift
var height: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The capsule is centered in its local coordinate system. For example, if a capsule has a height of `10.0`, it extends from `-5.0` to `5.0` along the y-axis. This property measures the total height of the capsule, including its hemispherical ends.

If the height is zero or less, or less than twice the cap radius, the geometry is empty. The default height is `2.0`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Capsule’s Dimensions

- [capRadius](capradius.md): The radius both of the capsule’s circular center cross section and of its hemispherical ends. Animatable.

# height (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The extent of the capsule along its y-axis. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat height;
```

<a id="Discussion"></a>

## Discussion

The capsule is centered in its local coordinate system. For example, if a capsule has a height of `10.0`, it extends from `-5.0` to `5.0` along the y-axis. This property measures the total height of the capsule, including its hemispherical ends.

If the height is zero or less, or less than twice the cap radius, the geometry is empty. The default height is `2.0`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Capsule’s Dimensions

- [capRadius](capradius.md): The radius both of the capsule’s circular center cross section and of its hemispherical ends. Animatable.
