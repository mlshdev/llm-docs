> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/automaticallyadjustszrange](https://developer.apple.com/documentation/scenekit/scncamera/automaticallyadjustszrange)

# automaticallyAdjustsZRange (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether the camera automatically adjusts its [zNear](znear.md) and [zFar](zfar.md) depth limits.

## Declaration

```swift
var automaticallyAdjustsZRange: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), specifying that the camera’s [zNear](znear.md) and [zFar](zfar.md) properties control its depth limits. If you change this property’s value to [true](https://developer.apple.com/documentation/swift/true), SceneKit automatically adjusts the depth limits at render time to fit the bounding box of the scene. Changing the values of the [zNear](znear.md) and [zFar](zfar.md) properties automatically resets this property’s value to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Adjusting Camera Perspective

- [zNear](znear.md): The camera’s near depth limit. Animatable.
- [zFar](zfar.md): The camera’s far depth limit. Animatable.

# automaticallyAdjustsZRange (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

A Boolean value that determines whether the camera automatically adjusts its [zNear](znear.md) and [zFar](zfar.md) depth limits.

## Declaration

```objectivec
@property (nonatomic) BOOL automaticallyAdjustsZRange;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), specifying that the camera’s [zNear](znear.md) and [zFar](zfar.md) properties control its depth limits. If you change this property’s value to [true](https://developer.apple.com/documentation/swift/true), SceneKit automatically adjusts the depth limits at render time to fit the bounding box of the scene. Changing the values of the [zNear](znear.md) and [zFar](zfar.md) properties automatically resets this property’s value to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Adjusting Camera Perspective

- [zNear](znear.md): The camera’s near depth limit. Animatable.
- [zFar](zfar.md): The camera’s far depth limit. Animatable.
