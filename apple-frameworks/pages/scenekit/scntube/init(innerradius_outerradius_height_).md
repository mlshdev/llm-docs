> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntube/init(innerradius:outerradius:height:)](https://developer.apple.com/documentation/scenekit/scntube/init(innerradius:outerradius:height:))

# init(innerRadius:outerRadius:height:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a tube geometry with the specified inner radius, outer radius, and height.

## Declaration

```swift
convenience init(innerRadius: CGFloat, outerRadius: CGFloat, height: CGFloat)
```

## Parameters

- `innerRadius`: The radius of the tube’s circular central hole in the x- and z-axes of its local coordinate space.
- `outerRadius`: The radius of the tube’s circular cross section in the x- and z-axes of its local coordinate space.
- `height`: The height of the tube along the y-axis of its local coordinate space.

<a id="return-value"></a>

## Return Value

A new tube geometry.

<a id="Discussion"></a>

## Discussion

The tube is centered in its local coordinate system. For example, if you create a tube whose outer radius is `5.0`, inner radius is `1.0`, and height is `10.0`, its circular cross section extends from `-5.0` to `5.0` along the x- and z-axes, the y-coordinates of its base and top are `-5.0` and `5.0`, and the hole through its center extends from `-0.5` to `0.5` along the x- and z-axes.

# tubeWithInnerRadius:outerRadius:height: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a tube geometry with the specified inner radius, outer radius, and height.

## Declaration

```objectivec
+ (instancetype) tubeWithInnerRadius:(CGFloat) innerRadius outerRadius:(CGFloat) outerRadius height:(CGFloat) height;
```

## Parameters

- `innerRadius`: The radius of the tube’s circular central hole in the x- and z-axes of its local coordinate space.
- `outerRadius`: The radius of the tube’s circular cross section in the x- and z-axes of its local coordinate space.
- `height`: The height of the tube along the y-axis of its local coordinate space.

<a id="return-value"></a>

## Return Value

A new tube geometry.

<a id="Discussion"></a>

## Discussion

The tube is centered in its local coordinate system. For example, if you create a tube whose outer radius is `5.0`, inner radius is `1.0`, and height is `10.0`, its circular cross section extends from `-5.0` to `5.0` along the x- and z-axes, the y-coordinates of its base and top are `-5.0` and `5.0`, and the hole through its center extends from `-0.5` to `0.5` along the x- and z-axes.
