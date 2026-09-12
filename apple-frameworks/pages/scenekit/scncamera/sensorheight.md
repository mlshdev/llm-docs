> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/sensorheight](https://developer.apple.com/documentation/scenekit/scncamera/sensorheight)

# sensorHeight (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The vertical size of the camera’s imaging plane, in millimeters.

## Declaration

```swift
var sensorHeight: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The [sensorHeight](sensorheight.md) and [focalLength](focallength.md) properties determine the camera’s horizontal and vertical viewing angles using terms that model physical camera devices. (Alternatively, you can work with viewing angle directly though the [fieldOfView](fieldofview.md) property.) For example, with the default sensor height of 24 mm and default focal length of 50 mm, the vertical field of view is 60°.

Setting the [fieldOfView](fieldofview.md) property causes SceneKit to automatically recalculate the [focalLength](focallength.md) value, and setting the [sensorHeight](sensorheight.md) or [focalLength](focallength.md) property recalculates [fieldOfView](fieldofview.md).

## See Also

### Managing Field of View

- [fieldOfView](fieldofview.md): The vertical or horizontal viewing angle of the camera.
- [focalLength](focallength.md): The camera’s focal length, in millimeters.
- [projectionDirection](projectiondirection.md): The axis used to determine field of view or orthographic scale.
- [SCNCameraProjectionDirection](../scncameraprojectiondirection.md): Options for the axis used to determine field of view or orthographic projection.

# sensorHeight (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The vertical size of the camera’s imaging plane, in millimeters.

## Declaration

```objectivec
@property (nonatomic) CGFloat sensorHeight;
```

<a id="Discussion"></a>

## Discussion

The [sensorHeight](sensorheight.md) and [focalLength](focallength.md) properties determine the camera’s horizontal and vertical viewing angles using terms that model physical camera devices. (Alternatively, you can work with viewing angle directly though the [fieldOfView](fieldofview.md) property.) For example, with the default sensor height of 24 mm and default focal length of 50 mm, the vertical field of view is 60°.

Setting the [fieldOfView](fieldofview.md) property causes SceneKit to automatically recalculate the [focalLength](focallength.md) value, and setting the [sensorHeight](sensorheight.md) or [focalLength](focallength.md) property recalculates [fieldOfView](fieldofview.md).

## See Also

### Managing Field of View

- [fieldOfView](fieldofview.md): The vertical or horizontal viewing angle of the camera.
- [focalLength](focallength.md): The camera’s focal length, in millimeters.
- [projectionDirection](projectiondirection.md): The axis used to determine field of view or orthographic scale.
- [SCNCameraProjectionDirection](../scncameraprojectiondirection.md): Options for the axis used to determine field of view or orthographic projection.
