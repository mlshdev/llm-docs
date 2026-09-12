> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnplane/init(width:height:)](https://developer.apple.com/documentation/scenekit/scnplane/init(width:height:))

# init(width:height:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a plane geometry with the specified width and height.

## Declaration

```swift
convenience init(width: CGFloat, height: CGFloat)
```

## Parameters

- `width`: The width of the plane along the x-axis of its local coordinate space.
- `height`: The height of the plane along the y-axis of its local coordinate space.

<a id="return-value"></a>

## Return Value

A new plane geometry.

<a id="Discussion"></a>

## Discussion

The plane is centered in its local coordinate system. For example, if you create a plane whose width and height are both `10.0`, it extends from `-5.0` to `5.0` along both the x- and y-axes, and the z-coordinate of all points in the plane is zero.

# planeWithWidth:height: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a plane geometry with the specified width and height.

## Declaration

```objectivec
+ (instancetype) planeWithWidth:(CGFloat) width height:(CGFloat) height;
```

## Parameters

- `width`: The width of the plane along the x-axis of its local coordinate space.
- `height`: The height of the plane along the y-axis of its local coordinate space.

<a id="return-value"></a>

## Return Value

A new plane geometry.

<a id="Discussion"></a>

## Discussion

The plane is centered in its local coordinate system. For example, if you create a plane whose width and height are both `10.0`, it extends from `-5.0` to `5.0` along both the x- and y-axes, and the z-coordinate of all points in the plane is zero.
