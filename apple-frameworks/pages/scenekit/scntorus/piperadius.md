> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntorus/piperadius](https://developer.apple.com/documentation/scenekit/scntorus/piperadius)

# pipeRadius (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The minor radius of the torus, defining the pipe that encircles the torus ring. Animatable.

## Declaration

```swift
var pipeRadius: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

In the definition of a torus as a surface of revolution, the pipe radius defines a circle that is rotated around an axis (the Y axis of the torus’ local coordinate space). Rotating the circle around this axis makes it follow a circular path (whose radius is defined by the [ringRadius](ringradius.md) property) and creates the surface of the torus.

The default pipe radius is `0.25`. A pipe radius of zero or less creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Torus’ Dimensions

- [ringRadius](ringradius.md): The major radius of the torus, defining a circle in the x- and z-axis dimensions. Animatable.

# pipeRadius (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The minor radius of the torus, defining the pipe that encircles the torus ring. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat pipeRadius;
```

<a id="Discussion"></a>

## Discussion

In the definition of a torus as a surface of revolution, the pipe radius defines a circle that is rotated around an axis (the Y axis of the torus’ local coordinate space). Rotating the circle around this axis makes it follow a circular path (whose radius is defined by the [ringRadius](ringradius.md) property) and creates the surface of the torus.

The default pipe radius is `0.25`. A pipe radius of zero or less creates an empty geometry.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting a Torus’ Dimensions

- [ringRadius](ringradius.md): The major radius of the torus, defining a circle in the x- and z-axis dimensions. Animatable.
