> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncone/height](https://developer.apple.com/documentation/scenekit/scncone/height)

# height (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The extent of the cylinder along its y-axis. Animatable.

## Declaration

```swift
var height: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The cone is centered in its local coordinate system. For example, if a cone has a height of `10.0`, its base lies in the plane whose y-coordinate is `-5.0` and its top has a y-coordinate of `5.0`. The default height is `1.0`. A height of zero or less creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Cone’s Dimensions

- [topRadius](topradius.md): The radius of the cone’s circular top. Animatable.
- [bottomRadius](bottomradius.md): The radius of the cone’s circular base. Animatable.

# height (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The extent of the cylinder along its y-axis. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat height;
```

<a id="Discussion"></a>

## Discussion

The cone is centered in its local coordinate system. For example, if a cone has a height of `10.0`, its base lies in the plane whose y-coordinate is `-5.0` and its top has a y-coordinate of `5.0`. The default height is `1.0`. A height of zero or less creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Cone’s Dimensions

- [topRadius](topradius.md): The radius of the cone’s circular top. Animatable.
- [bottomRadius](bottomradius.md): The radius of the cone’s circular base. Animatable.
