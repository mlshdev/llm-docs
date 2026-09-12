> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/znear](https://developer.apple.com/documentation/scenekit/scncamera/znear)

# zNear (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The camera’s near depth limit. Animatable.

## Declaration

```swift
var zNear: Double { get set }
```

<a id="Discussion"></a>

## Discussion

The near value determines the minimal distance between the camera and a visible surface. If a surface is closer to the camera than this  distance, the surface is clipped and does not appear. The near value must not be zero. The default near value is `1.0`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting Camera Perspective

- [zFar](zfar.md): The camera’s far depth limit. Animatable.
- [automaticallyAdjustsZRange](automaticallyadjustszrange.md): A Boolean value that determines whether the camera automatically adjusts its [zNear](znear.md) and [zFar](zfar.md) depth limits.

# zNear (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The camera’s near depth limit. Animatable.

## Declaration

```objectivec
@property (nonatomic) double zNear;
```

<a id="Discussion"></a>

## Discussion

The near value determines the minimal distance between the camera and a visible surface. If a surface is closer to the camera than this  distance, the surface is clipped and does not appear. The near value must not be zero. The default near value is `1.0`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting Camera Perspective

- [zFar](zfar.md): The camera’s far depth limit. Animatable.
- [automaticallyAdjustsZRange](automaticallyadjustszrange.md): A Boolean value that determines whether the camera automatically adjusts its [zNear](znear.md) and [zFar](zfar.md) depth limits.
