> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncylinder/init(radius:height:)](https://developer.apple.com/documentation/scenekit/scncylinder/init(radius:height:))

# init(radius:height:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a cylinder geometry with the specified radius and height.

## Declaration

```swift
convenience init(radius: CGFloat, height: CGFloat)
```

## Parameters

- `radius`: The radius of the cylinder’s circular cross section in the x- and z-axis dimensions of its local coordinate space.
- `height`: The height of the cylinder along the y-axis of its local coordinate space.

<a id="return-value"></a>

## Return Value

A new cylinder geometry.

<a id="Discussion"></a>

## Discussion

The cylinder is centered in its local coordinate system. For example, if you create a cylinder whose radius is `5.0` and height is `10.0`, its circular cross section extends from `-5.0` to `5.0` along the x- and z-axes, and the y-coordinates of its base and top are `-5.0` and `5.0`, respectively.

# cylinderWithRadius:height: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a cylinder geometry with the specified radius and height.

## Declaration

```objectivec
+ (instancetype) cylinderWithRadius:(CGFloat) radius height:(CGFloat) height;
```

## Parameters

- `radius`: The radius of the cylinder’s circular cross section in the x- and z-axis dimensions of its local coordinate space.
- `height`: The height of the cylinder along the y-axis of its local coordinate space.

<a id="return-value"></a>

## Return Value

A new cylinder geometry.

<a id="Discussion"></a>

## Discussion

The cylinder is centered in its local coordinate system. For example, if you create a cylinder whose radius is `5.0` and height is `10.0`, its circular cross section extends from `-5.0` to `5.0` along the x- and z-axes, and the y-coordinates of its base and top are `-5.0` and `5.0`, respectively.
