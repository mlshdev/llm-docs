> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/aperture](https://developer.apple.com/documentation/scenekit/scncamera/aperture)

# aperture (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A factor that determines the transition between in-focus and out-of-focus areas. Animatable.

> Use [fStop](fstop.md) instead. Note [fStop](fstop.md) `=` [sensorHeight](sensorheight.md) `/` [aperture](aperture.md).

## Declaration

```swift
var aperture: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Objects at distances from the camera outside its depth of field (specified by the [focalDistance](focaldistance.md) and [focalSize](focalsize.md) properties) appear increasingly blurred (up to the value of the [focalBlurRadius](focalblurradius.md) property). Aperture controls the abruptness of the transition between sharp and blurred—a low value specifies an abrupt transition, and a higher value specifies a gradual transition. The default aperture is `0.125` (or 1/8).

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Deprecated

- [yFov](yfov.md): Deprecated. The camera’s field of view, in degrees, on the vertical axis. Animatable.
- [xFov](xfov.md): Deprecated. The camera’s field of view, in degrees, on the horizontal axis. Animatable.
- [focalDistance](focaldistance.md): Deprecated. The distance from the camera at which objects appear in sharp focus. Animatable.
- [focalSize](focalsize.md): Deprecated. The width of the distance range at which objects appear in sharp focus. Animatable.
- [focalBlurRadius](focalblurradius.md): Deprecated. The maximum amount of blurring, in pixels, applied to areas outside the camera’s depth of field. Animatable.

# aperture (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

A factor that determines the transition between in-focus and out-of-focus areas. Animatable.

> Use [fStop](fstop.md) instead. Note [fStop](fstop.md) `=` [sensorHeight](sensorheight.md) `/` [aperture](aperture.md).

## Declaration

```objectivec
@property (nonatomic) CGFloat aperture;
```

<a id="Discussion"></a>

## Discussion

Objects at distances from the camera outside its depth of field (specified by the [focalDistance](focaldistance.md) and [focalSize](focalsize.md) properties) appear increasingly blurred (up to the value of the [focalBlurRadius](focalblurradius.md) property). Aperture controls the abruptness of the transition between sharp and blurred—a low value specifies an abrupt transition, and a higher value specifies a gradual transition. The default aperture is `0.125` (or 1/8).

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Deprecated

- [yFov](yfov.md): Deprecated. The camera’s field of view, in degrees, on the vertical axis. Animatable.
- [xFov](xfov.md): Deprecated. The camera’s field of view, in degrees, on the horizontal axis. Animatable.
- [focalDistance](focaldistance.md): Deprecated. The distance from the camera at which objects appear in sharp focus. Animatable.
- [focalSize](focalsize.md): Deprecated. The width of the distance range at which objects appear in sharp focus. Animatable.
- [focalBlurRadius](focalblurradius.md): Deprecated. The maximum amount of blurring, in pixels, applied to areas outside the camera’s depth of field. Animatable.
