> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnpyramid/init(width:height:length:)](https://developer.apple.com/documentation/scenekit/scnpyramid/init(width:height:length:))

# init(width:height:length:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a pyramid geometry with the specified width, height, and length.

## Declaration

```swift
convenience init(width: CGFloat, height: CGFloat, length: CGFloat)
```

## Parameters

- `width`: The width of the pyramid along the x-axis of its local coordinate space.
- `height`: The height of the pyramid along the y-axis of its local coordinate space.
- `length`: The length of the pyramid along the z-axis of its local coordinate space.

<a id="return-value"></a>

## Return Value

A new pyramid geometry.

<a id="Discussion"></a>

## Discussion

The pyramid’s base is centered in its local coordinate system. For example, if you create a pyramid whose width, height and length are all `10.0`, its apex is at the point `{0, 10.0, 0}`, and its base lies in the plane whose y-coordinate is `0.0`, extending from `-5.0` to `5.0` along both the x- and z-axes.

# pyramidWithWidth:height:length: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a pyramid geometry with the specified width, height, and length.

## Declaration

```objectivec
+ (instancetype) pyramidWithWidth:(CGFloat) width height:(CGFloat) height length:(CGFloat) length;
```

## Parameters

- `width`: The width of the pyramid along the x-axis of its local coordinate space.
- `height`: The height of the pyramid along the y-axis of its local coordinate space.
- `length`: The length of the pyramid along the z-axis of its local coordinate space.

<a id="return-value"></a>

## Return Value

A new pyramid geometry.

<a id="Discussion"></a>

## Discussion

The pyramid’s base is centered in its local coordinate system. For example, if you create a pyramid whose width, height and length are all `10.0`, its apex is at the point `{0, 10.0, 0}`, and its base lies in the plane whose y-coordinate is `0.0`, extending from `-5.0` to `5.0` along both the x- and z-axes.
