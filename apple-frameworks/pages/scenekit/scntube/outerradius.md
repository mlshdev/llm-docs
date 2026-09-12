> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntube/outerradius](https://developer.apple.com/documentation/scenekit/scntube/outerradius)

# outerRadius (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The radius of the tube’s outer circular cross section. Animatable.

## Declaration

```swift
var outerRadius: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The tube is centered in its local coordinate system. For example, a tube whose outer radius is  `5.0` extends from `-5.0` to `5.0` along the x- and z-axes. The default outer radius is `0.5`.

An outer radius of zero or less, or equal to or smaller than the inner radius, creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Tube’s Dimensions

- [innerRadius](innerradius.md): The radius of the circular hole through the tube. Animatable.
- [height](height.md): The extent of the tube along its y-axis. Animatable.

# outerRadius (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The radius of the tube’s outer circular cross section. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat outerRadius;
```

<a id="Discussion"></a>

## Discussion

The tube is centered in its local coordinate system. For example, a tube whose outer radius is  `5.0` extends from `-5.0` to `5.0` along the x- and z-axes. The default outer radius is `0.5`.

An outer radius of zero or less, or equal to or smaller than the inner radius, creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Tube’s Dimensions

- [innerRadius](innerradius.md): The radius of the circular hole through the tube. Animatable.
- [height](height.md): The extent of the tube along its y-axis. Animatable.
