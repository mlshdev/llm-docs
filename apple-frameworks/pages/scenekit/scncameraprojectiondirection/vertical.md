> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncameraprojectiondirection/vertical](https://developer.apple.com/documentation/scenekit/scncameraprojectiondirection/vertical)

# SCNCameraProjectionDirection.vertical (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The camera’s field of view or orthographic scale are measured vertically.

## Declaration

```swift
case vertical
```

<a id="Discussion"></a>

## Discussion

If a camera’s [projectionDirection](../scncamera/projectiondirection.md) property has this value:

- The [fieldOfView](../scncamera/fieldofview.md) property measures the vertical viewing angle, and SceneKit automatically calculates the horizontal angle according to the aspect ratio of the view presenting the scene.
- Or, if the camera uses an orthographic projection, the [orthographicScale](../scncamera/orthographicscale.md) property measures the vertical scale factor, and SceneKit automatically calculates the horizontal factor according to  aspect ratio.

## See Also

### Projection Directions

- [SCNCameraProjectionDirection.horizontal](horizontal.md): The camera’s field of view or orthographic scale are measured horizontally.

# SCNCameraProjectionDirectionVertical (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The camera’s field of view or orthographic scale are measured vertically.

## Declaration

```objectivec
SCNCameraProjectionDirectionVertical
```

<a id="Discussion"></a>

## Discussion

If a camera’s [projectionDirection](../scncamera/projectiondirection.md) property has this value:

- The [fieldOfView](../scncamera/fieldofview.md) property measures the vertical viewing angle, and SceneKit automatically calculates the horizontal angle according to the aspect ratio of the view presenting the scene.
- Or, if the camera uses an orthographic projection, the [orthographicScale](../scncamera/orthographicscale.md) property measures the vertical scale factor, and SceneKit automatically calculates the horizontal factor according to  aspect ratio.

## See Also

### Projection Directions

- [SCNCameraProjectionDirectionHorizontal](horizontal.md): The camera’s field of view or orthographic scale are measured horizontally.
