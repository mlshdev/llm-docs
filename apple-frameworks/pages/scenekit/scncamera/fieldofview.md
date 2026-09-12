> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/fieldofview](https://developer.apple.com/documentation/scenekit/scncamera/fieldofview)

# fieldOfView (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The vertical or horizontal viewing angle of the camera.

## Declaration

```swift
var fieldOfView: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The [projectionDirection](projectiondirection.md) property determines whether this [fieldOfView](fieldofview.md) property measures the camera’s vertical or horizontal viewing angle, and SceneKit automatically calculates the viewing angle in the other direction to match the aspect ratio of the view displaying the scene. For example, a [fieldOfView](fieldofview.md) of `60` and the default [SCNCameraProjectionDirection.vertical](../scncameraprojectiondirection/vertical.md) projection, presented fullscreen on a 16:9 display in portrait orientation, results in a vertical viewing angle of 60° and a horizontal viewing angle of 33.75°.

You can choose to specify viewing angle either directly, using this [fieldOfView](fieldofview.md) property, or in terms that model a physical camera, using the [sensorHeight](sensorheight.md) and [focalLength](focallength.md) properties. Setting the [fieldOfView](fieldofview.md) property causes SceneKit to automatically recalculate the [focalLength](focallength.md) value, and setting the [sensorHeight](sensorheight.md) or [focalLength](focallength.md) property recalculates [fieldOfView](fieldofview.md).

## See Also

### Managing Field of View

- [focalLength](focallength.md): The camera’s focal length, in millimeters.
- [sensorHeight](sensorheight.md): The vertical size of the camera’s imaging plane, in millimeters.
- [projectionDirection](projectiondirection.md): The axis used to determine field of view or orthographic scale.
- [SCNCameraProjectionDirection](../scncameraprojectiondirection.md): Options for the axis used to determine field of view or orthographic projection.

# fieldOfView (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The vertical or horizontal viewing angle of the camera.

## Declaration

```objectivec
@property (nonatomic) CGFloat fieldOfView;
```

<a id="Discussion"></a>

## Discussion

The [projectionDirection](projectiondirection.md) property determines whether this [fieldOfView](fieldofview.md) property measures the camera’s vertical or horizontal viewing angle, and SceneKit automatically calculates the viewing angle in the other direction to match the aspect ratio of the view displaying the scene. For example, a [fieldOfView](fieldofview.md) of `60` and the default [SCNCameraProjectionDirectionVertical](../scncameraprojectiondirection/vertical.md) projection, presented fullscreen on a 16:9 display in portrait orientation, results in a vertical viewing angle of 60° and a horizontal viewing angle of 33.75°.

You can choose to specify viewing angle either directly, using this [fieldOfView](fieldofview.md) property, or in terms that model a physical camera, using the [sensorHeight](sensorheight.md) and [focalLength](focallength.md) properties. Setting the [fieldOfView](fieldofview.md) property causes SceneKit to automatically recalculate the [focalLength](focallength.md) value, and setting the [sensorHeight](sensorheight.md) or [focalLength](focallength.md) property recalculates [fieldOfView](fieldofview.md).

## See Also

### Managing Field of View

- [focalLength](focallength.md): The camera’s focal length, in millimeters.
- [sensorHeight](sensorheight.md): The vertical size of the camera’s imaging plane, in millimeters.
- [projectionDirection](projectiondirection.md): The axis used to determine field of view or orthographic scale.
- [SCNCameraProjectionDirection](../scncameraprojectiondirection.md): Options for the axis used to determine field of view or orthographic projection.
