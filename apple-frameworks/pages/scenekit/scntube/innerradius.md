> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntube/innerradius](https://developer.apple.com/documentation/scenekit/scntube/innerradius)

# innerRadius (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The radius of the circular hole through the tube. Animatable.

## Declaration

```swift
var innerRadius: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The tube is centered in its local coordinate system. For example, if a tube has an inner radius of `1.0`, the cylindrical hole through its center extends from `-0.5` to `0.5` along the x- and z-axes. The default inner radius is `0.25`.

An inner radius of zero or less, or equal to or greater than the outer radius, creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Tube’s Dimensions

- [outerRadius](outerradius.md): The radius of the tube’s outer circular cross section. Animatable.
- [height](height.md): The extent of the tube along its y-axis. Animatable.

# innerRadius (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The radius of the circular hole through the tube. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat innerRadius;
```

<a id="Discussion"></a>

## Discussion

The tube is centered in its local coordinate system. For example, if a tube has an inner radius of `1.0`, the cylindrical hole through its center extends from `-0.5` to `0.5` along the x- and z-axes. The default inner radius is `0.25`.

An inner radius of zero or less, or equal to or greater than the outer radius, creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Tube’s Dimensions

- [outerRadius](outerradius.md): The radius of the tube’s outer circular cross section. Animatable.
- [height](height.md): The extent of the tube along its y-axis. Animatable.
