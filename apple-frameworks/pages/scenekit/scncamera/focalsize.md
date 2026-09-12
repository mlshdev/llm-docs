> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/focalsize](https://developer.apple.com/documentation/scenekit/scncamera/focalsize)

# focalSize (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The width of the distance range at which objects appear in sharp focus. Animatable.

> Use [focusDistance](focusdistance.md) instead; see also [fStop](fstop.md).

## Declaration

```swift
var focalSize: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The [focalDistance](focaldistance.md) property specifies how far away from the camera an object needs to be to appear in sharp focus. Focal size specifies how wide an area around that distance also appears in sharp focus. The default focus size is `0.0`, specifying that the transition from sharp to blurred begins for objects immediately nearer to or farther from the camera than the focal distance. When focal size is nonzero, it specifies the distance between the nearest an object can be to the camera and remain in sharp focus to the farthest an object can be from the camera and remain in sharp focus.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Deprecated

- [yFov](yfov.md): Deprecated. The camera’s field of view, in degrees, on the vertical axis. Animatable.
- [xFov](xfov.md): Deprecated. The camera’s field of view, in degrees, on the horizontal axis. Animatable.
- [focalDistance](focaldistance.md): Deprecated. The distance from the camera at which objects appear in sharp focus. Animatable.
- [focalBlurRadius](focalblurradius.md): Deprecated. The maximum amount of blurring, in pixels, applied to areas outside the camera’s depth of field. Animatable.
- [aperture](aperture.md): Deprecated. A factor that determines the transition between in-focus and out-of-focus areas. Animatable.

# focalSize (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

The width of the distance range at which objects appear in sharp focus. Animatable.

> Use [focusDistance](focusdistance.md) instead; see also [fStop](fstop.md).

## Declaration

```objectivec
@property (nonatomic) CGFloat focalSize;
```

<a id="Discussion"></a>

## Discussion

The [focalDistance](focaldistance.md) property specifies how far away from the camera an object needs to be to appear in sharp focus. Focal size specifies how wide an area around that distance also appears in sharp focus. The default focus size is `0.0`, specifying that the transition from sharp to blurred begins for objects immediately nearer to or farther from the camera than the focal distance. When focal size is nonzero, it specifies the distance between the nearest an object can be to the camera and remain in sharp focus to the farthest an object can be from the camera and remain in sharp focus.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Deprecated

- [yFov](yfov.md): Deprecated. The camera’s field of view, in degrees, on the vertical axis. Animatable.
- [xFov](xfov.md): Deprecated. The camera’s field of view, in degrees, on the horizontal axis. Animatable.
- [focalDistance](focaldistance.md): Deprecated. The distance from the camera at which objects appear in sharp focus. Animatable.
- [focalBlurRadius](focalblurradius.md): Deprecated. The maximum amount of blurring, in pixels, applied to areas outside the camera’s depth of field. Animatable.
- [aperture](aperture.md): Deprecated. A factor that determines the transition between in-focus and out-of-focus areas. Animatable.
