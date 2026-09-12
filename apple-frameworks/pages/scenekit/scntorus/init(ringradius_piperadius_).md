> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntorus/init(ringradius:piperadius:)](https://developer.apple.com/documentation/scenekit/scntorus/init(ringradius:piperadius:))

# init(ringRadius:pipeRadius:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a torus geometry with the specified ring radius and pipe radius.

## Declaration

```swift
convenience init(ringRadius: CGFloat, pipeRadius: CGFloat)
```

## Parameters

- `ringRadius`: The major radius of the torus, defining its circular ring in the x- and z-axis dimensions of its local coordinate space.
- `pipeRadius`: The minor radius of the torus, defining the pipe that encircles the ring.

<a id="return-value"></a>

## Return Value

A new torus geometry.

<a id="Discussion"></a>

## Discussion

The torus is centered in its local coordinate system. For example, if you create a torus whose ring radius is `5.0` and pipe radius is `1.0`, it extends from `-6.0` to `6.0` (with a hole through the center from `-4.0` to `4.0`) in the x- and z-axes and from `-1.0` to `1.0` in the y-axis.

# torusWithRingRadius:pipeRadius: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a torus geometry with the specified ring radius and pipe radius.

## Declaration

```objectivec
+ (instancetype) torusWithRingRadius:(CGFloat) ringRadius pipeRadius:(CGFloat) pipeRadius;
```

## Parameters

- `ringRadius`: The major radius of the torus, defining its circular ring in the x- and z-axis dimensions of its local coordinate space.
- `pipeRadius`: The minor radius of the torus, defining the pipe that encircles the ring.

<a id="return-value"></a>

## Return Value

A new torus geometry.

<a id="Discussion"></a>

## Discussion

The torus is centered in its local coordinate system. For example, if you create a torus whose ring radius is `5.0` and pipe radius is `1.0`, it extends from `-6.0` to `6.0` (with a hole through the center from `-4.0` to `4.0`) in the x- and z-axes and from `-1.0` to `1.0` in the y-axis.
