> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntorus/ringradius](https://developer.apple.com/documentation/scenekit/scntorus/ringradius)

# ringRadius (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The major radius of the torus, defining a circle in the x- and z-axis dimensions. Animatable.

## Declaration

```swift
var ringRadius: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

In the definition of a torus as a surface of revolution, the ring radius is the distance from the center of a circle (defined by the [pipeRadius](piperadius.md) property) to the axis of revolution (the y-axis of the torus’s local coordinate space). Rotating the circle around the axis forms a pipe that follows a ring-shaped path.

The default ring radius is `0.5`. A ring radius of zero or less creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Torus’ Dimensions

- [pipeRadius](piperadius.md): The minor radius of the torus, defining the pipe that encircles the torus ring. Animatable.

# ringRadius (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The major radius of the torus, defining a circle in the x- and z-axis dimensions. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat ringRadius;
```

<a id="Discussion"></a>

## Discussion

In the definition of a torus as a surface of revolution, the ring radius is the distance from the center of a circle (defined by the [pipeRadius](piperadius.md) property) to the axis of revolution (the y-axis of the torus’s local coordinate space). Rotating the circle around the axis forms a pipe that follows a ring-shaped path.

The default ring radius is `0.5`. A ring radius of zero or less creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Torus’ Dimensions

- [pipeRadius](piperadius.md): The minor radius of the torus, defining the pipe that encircles the torus ring. Animatable.
