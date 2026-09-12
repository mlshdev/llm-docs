> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/zfar](https://developer.apple.com/documentation/scenekit/scncamera/zfar)

# zFar (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The camera’s far depth limit. Animatable.

## Declaration

```swift
var zFar: Double { get set }
```

<a id="Discussion"></a>

## Discussion

The far value determines the maximal distance between the camera and a visible surface. If a surface is farther from the camera than this  distance, the surface is clipped and does not appear. The default far value is `100.0`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting Camera Perspective

- [zNear](znear.md): The camera’s near depth limit. Animatable.
- [automaticallyAdjustsZRange](automaticallyadjustszrange.md): A Boolean value that determines whether the camera automatically adjusts its [zNear](znear.md) and [zFar](zfar.md) depth limits.

# zFar (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The camera’s far depth limit. Animatable.

## Declaration

```objectivec
@property (nonatomic) double zFar;
```

<a id="Discussion"></a>

## Discussion

The far value determines the maximal distance between the camera and a visible surface. If a surface is farther from the camera than this  distance, the surface is clipped and does not appear. The default far value is `100.0`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting Camera Perspective

- [zNear](znear.md): The camera’s near depth limit. Animatable.
- [automaticallyAdjustsZRange](automaticallyadjustszrange.md): A Boolean value that determines whether the camera automatically adjusts its [zNear](znear.md) and [zFar](zfar.md) depth limits.
