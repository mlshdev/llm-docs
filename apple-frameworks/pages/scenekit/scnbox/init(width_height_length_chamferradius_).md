> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnbox/init(width:height:length:chamferradius:)](https://developer.apple.com/documentation/scenekit/scnbox/init(width:height:length:chamferradius:))

# init(width:height:length:chamferRadius:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a box geometry with the specified width, height, length, and chamfer radius.

## Declaration

```swift
convenience init(width: CGFloat, height: CGFloat, length: CGFloat, chamferRadius: CGFloat)
```

## Parameters

- `width`: The width of the box along the x-axis of its local coordinate space.
- `height`: The height of the box along the y-axis of its local coordinate space.
- `length`: The length of the box along the z-axis of its local coordinate space.
- `chamferRadius`: The radius of curvature for the edges and corners of the box.

<a id="return-value"></a>

## Return Value

A new box geometry.

<a id="Discussion"></a>

## Discussion

The box is centered in its local coordinate system. For example, if you create a box whose width, height and length are all `10.0`, it extends from `-5.0` to `5.0` along in each of the x-, y-, and z-axes.

# boxWithWidth:height:length:chamferRadius: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a box geometry with the specified width, height, length, and chamfer radius.

## Declaration

```objectivec
+ (instancetype) boxWithWidth:(CGFloat) width height:(CGFloat) height length:(CGFloat) length chamferRadius:(CGFloat) chamferRadius;
```

## Parameters

- `width`: The width of the box along the x-axis of its local coordinate space.
- `height`: The height of the box along the y-axis of its local coordinate space.
- `length`: The length of the box along the z-axis of its local coordinate space.
- `chamferRadius`: The radius of curvature for the edges and corners of the box.

<a id="return-value"></a>

## Return Value

A new box geometry.

<a id="Discussion"></a>

## Discussion

The box is centered in its local coordinate system. For example, if you create a box whose width, height and length are all `10.0`, it extends from `-5.0` to `5.0` along in each of the x-, y-, and z-axes.
