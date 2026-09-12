> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/orthographicscale](https://developer.apple.com/documentation/scenekit/scncamera/orthographicscale)

# orthographicScale (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Specifies the camera’s magnification factor when using an orthographic projection.

## Declaration

```swift
var orthographicScale: Double { get set }
```

<a id="Discussion"></a>

## Discussion

In an orthographic projection, equally sized objects appear equally sized regardless of their distance from the camera. To switch between orthographic and perspective projections, see the [usesOrthographicProjection](usesorthographicprojection.md) property.

## See Also

### Managing the Projection Transform

- [projectionTransform](projectiontransform.md): The camera’s projection transformation.
- [usesOrthographicProjection](usesorthographicprojection.md): A Boolean value that determines whether the camera uses an orthographic projection.

# orthographicScale (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Specifies the camera’s magnification factor when using an orthographic projection.

## Declaration

```objectivec
@property (nonatomic) double orthographicScale;
```

<a id="Discussion"></a>

## Discussion

In an orthographic projection, equally sized objects appear equally sized regardless of their distance from the camera. To switch between orthographic and perspective projections, see the [usesOrthographicProjection](usesorthographicprojection.md) property.

## See Also

### Managing the Projection Transform

- [projectionTransform](projectiontransform.md): The camera’s projection transformation.
- [usesOrthographicProjection](usesorthographicprojection.md): A Boolean value that determines whether the camera uses an orthographic projection.
