> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncone/init(topradius:bottomradius:height:)](https://developer.apple.com/documentation/scenekit/scncone/init(topradius:bottomradius:height:))

# init(topRadius:bottomRadius:height:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a cone geometry with the given top radius, bottom radius, and height.

## Declaration

```swift
convenience init(topRadius: CGFloat, bottomRadius: CGFloat, height: CGFloat)
```

## Parameters

- `topRadius`: The radius of the cone’s top, forming a circle in the x- and z-axis dimensions of its local coordinate space.
- `bottomRadius`: The radius of the cone’s base, forming a circle in the x- and z-axis dimensions of its local coordinate space.
- `height`: The height of the cone along the y-axis of its local coordinate space.

<a id="return-value"></a>

## Return Value

A new cone geometry.

<a id="Discussion"></a>

## Discussion

The cone is centered in its local coordinate system. For example, if you create a cone whose bottom radius is `5.0`, top radius is `0.0`, and height is `10.0`, its apex is at the point `{0, 5.0, 0}`, and its base lies in the plane whose y-coordinate is `-5.0`, extending from `-5.0` to `5.0` along both the x- and z-axes.

Pass zero for `topRadius` or `bottomRadius` or parameter to create a cone whose sides taper to a single point, or a different value to create a frustum with a circular top.

# coneWithTopRadius:bottomRadius:height: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a cone geometry with the given top radius, bottom radius, and height.

## Declaration

```objectivec
+ (instancetype) coneWithTopRadius:(CGFloat) topRadius bottomRadius:(CGFloat) bottomRadius height:(CGFloat) height;
```

## Parameters

- `topRadius`: The radius of the cone’s top, forming a circle in the x- and z-axis dimensions of its local coordinate space.
- `bottomRadius`: The radius of the cone’s base, forming a circle in the x- and z-axis dimensions of its local coordinate space.
- `height`: The height of the cone along the y-axis of its local coordinate space.

<a id="return-value"></a>

## Return Value

A new cone geometry.

<a id="Discussion"></a>

## Discussion

The cone is centered in its local coordinate system. For example, if you create a cone whose bottom radius is `5.0`, top radius is `0.0`, and height is `10.0`, its apex is at the point `{0, 5.0, 0}`, and its base lies in the plane whose y-coordinate is `-5.0`, extending from `-5.0` to `5.0` along both the x- and z-axes.

Pass zero for `topRadius` or `bottomRadius` or parameter to create a cone whose sides taper to a single point, or a different value to create a frustum with a circular top.
