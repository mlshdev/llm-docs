> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnsphere/init(radius:)](https://developer.apple.com/documentation/scenekit/scnsphere/init(radius:))

# init(radius:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a sphere geometry with the specified radius.

## Declaration

```swift
convenience init(radius: CGFloat)
```

## Parameters

- `radius`: The radius of the sphere in its local coordinate space.

<a id="return-value"></a>

## Return Value

A new sphere geometry.

<a id="Discussion"></a>

## Discussion

The sphere is centered in its local coordinate system. For example, if you create a sphere whose radius is `5.0`, it extends from `-5.0` to `5.0` along each of the the x, y, and z-axes.

# sphereWithRadius: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a sphere geometry with the specified radius.

## Declaration

```objectivec
+ (instancetype) sphereWithRadius:(CGFloat) radius;
```

## Parameters

- `radius`: The radius of the sphere in its local coordinate space.

<a id="return-value"></a>

## Return Value

A new sphere geometry.

<a id="Discussion"></a>

## Discussion

The sphere is centered in its local coordinate system. For example, if you create a sphere whose radius is `5.0`, it extends from `-5.0` to `5.0` along each of the the x, y, and z-axes.
