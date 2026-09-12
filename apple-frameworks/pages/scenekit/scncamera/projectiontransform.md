> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/projectiontransform](https://developer.apple.com/documentation/scenekit/scncamera/projectiontransform)

# projectionTransform (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The camera’s projection transformation.

## Declaration

```swift
var projectionTransform: SCNMatrix4 { get set }
```

```swift
var projectionTransform: SCNMatrix4 { get set }
```

<a id="Discussion"></a>

## Discussion

This transformation expresses the combination of all the camera’s geometric properties: projection type (perspective or orthographic), field of view, depth limits, and orthographic scale (if applicable). SceneKit uses this transformation to convert points in the camera node’s coordinate space to the renderer’s 2D space when rendering and processing events.

You can use this transformation directly if your app needs to convert between view and renderer coordinates for other purposes. Alternatively, if you compute your own projection transform matrix, you can set this property to override the transformation synthesized from the camera’s geometric properties.

> **Important**

>  If you set this property to a custom value, properties such as [zFar](zfar.md), [zNear](znear.md), and [fieldOfView](fieldofview.md) no longer reflect the current camera projection. (The mathematical process that derives a projection matrix from those properties cannot be reversed.)
>
> When you use SceneKit for an ARKit app with the [ARSCNView](../../arkit/arscnview.md) class, ARKit overrides the camera’s projection matrix.

## See Also

### Managing the Projection Transform

- [usesOrthographicProjection](usesorthographicprojection.md): A Boolean value that determines whether the camera uses an orthographic projection.
- [orthographicScale](orthographicscale.md): Specifies the camera’s magnification factor when using an orthographic projection.

# projectionTransform (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The camera’s projection transformation.

## Declaration

```objectivec
@property (nonatomic) SCNMatrix4 projectionTransform;
```

```objectivec
@property (nonatomic) SCNMatrix4 projectionTransform;
```

<a id="Discussion"></a>

## Discussion

This transformation expresses the combination of all the camera’s geometric properties: projection type (perspective or orthographic), field of view, depth limits, and orthographic scale (if applicable). SceneKit uses this transformation to convert points in the camera node’s coordinate space to the renderer’s 2D space when rendering and processing events.

You can use this transformation directly if your app needs to convert between view and renderer coordinates for other purposes. Alternatively, if you compute your own projection transform matrix, you can set this property to override the transformation synthesized from the camera’s geometric properties.

> **Important**

>  If you set this property to a custom value, properties such as [zFar](zfar.md), [zNear](znear.md), and [fieldOfView](fieldofview.md) no longer reflect the current camera projection. (The mathematical process that derives a projection matrix from those properties cannot be reversed.)
>
> When you use SceneKit for an ARKit app with the [ARSCNView](../../arkit/arscnview.md) class, ARKit overrides the camera’s projection matrix.

## See Also

### Managing the Projection Transform

- [usesOrthographicProjection](usesorthographicprojection.md): A Boolean value that determines whether the camera uses an orthographic projection.
- [orthographicScale](orthographicscale.md): Specifies the camera’s magnification factor when using an orthographic projection.
