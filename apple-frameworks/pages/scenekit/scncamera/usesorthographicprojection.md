> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/usesorthographicprojection](https://developer.apple.com/documentation/scenekit/scncamera/usesorthographicprojection)

# usesOrthographicProjection (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether the camera uses an orthographic projection.

## Declaration

```swift
var usesOrthographicProjection: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), specifying a perspective projection. In a perspective projection, equally sized objects nearer to the camera appear larger than those farther away.

Set the value of this property to [true](https://developer.apple.com/documentation/swift/true) to specify an orthographic projection. In an orthographic projection, equally sized objects appear equally sized regardless of distance from the camera.

To control the magnification factor of an orthographic camera, use its [orthographicScale](orthographicscale.md) property.

## See Also

### Managing the Projection Transform

- [projectionTransform](projectiontransform.md): The camera’s projection transformation.
- [orthographicScale](orthographicscale.md): Specifies the camera’s magnification factor when using an orthographic projection.

# usesOrthographicProjection (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether the camera uses an orthographic projection.

## Declaration

```objectivec
@property (nonatomic) BOOL usesOrthographicProjection;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), specifying a perspective projection. In a perspective projection, equally sized objects nearer to the camera appear larger than those farther away.

Set the value of this property to [true](https://developer.apple.com/documentation/swift/true) to specify an orthographic projection. In an orthographic projection, equally sized objects appear equally sized regardless of distance from the camera.

To control the magnification factor of an orthographic camera, use its [orthographicScale](orthographicscale.md) property.

## See Also

### Managing the Projection Transform

- [projectionTransform](projectiontransform.md): The camera’s projection transformation.
- [orthographicScale](orthographicscale.md): Specifies the camera’s magnification factor when using an orthographic projection.
