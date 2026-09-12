> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/focaldistance](https://developer.apple.com/documentation/scenekit/scncamera/focaldistance)

# focalDistance (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The distance from the camera at which objects appear in sharp focus. Animatable.

> Use [focusDistance](focusdistance.md) instead.

## Declaration

```swift
var focalDistance: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Objects at this distance from the camera appear perfectly focused. Objects nearer to or farther from the camera than this distance appear increasingly blurred (up to the amount of blur specified by the [focalBlurRadius](focalblurradius.md) property). The default focal distance is `10.0`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Deprecated

- [yFov](yfov.md): Deprecated. The camera’s field of view, in degrees, on the vertical axis. Animatable.
- [xFov](xfov.md): Deprecated. The camera’s field of view, in degrees, on the horizontal axis. Animatable.
- [focalSize](focalsize.md): Deprecated. The width of the distance range at which objects appear in sharp focus. Animatable.
- [focalBlurRadius](focalblurradius.md): Deprecated. The maximum amount of blurring, in pixels, applied to areas outside the camera’s depth of field. Animatable.
- [aperture](aperture.md): Deprecated. A factor that determines the transition between in-focus and out-of-focus areas. Animatable.

# focalDistance (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

The distance from the camera at which objects appear in sharp focus. Animatable.

> Use [focusDistance](focusdistance.md) instead.

## Declaration

```objectivec
@property (nonatomic) CGFloat focalDistance;
```

<a id="Discussion"></a>

## Discussion

Objects at this distance from the camera appear perfectly focused. Objects nearer to or farther from the camera than this distance appear increasingly blurred (up to the amount of blur specified by the [focalBlurRadius](focalblurradius.md) property). The default focal distance is `10.0`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Deprecated

- [yFov](yfov.md): Deprecated. The camera’s field of view, in degrees, on the vertical axis. Animatable.
- [xFov](xfov.md): Deprecated. The camera’s field of view, in degrees, on the horizontal axis. Animatable.
- [focalSize](focalsize.md): Deprecated. The width of the distance range at which objects appear in sharp focus. Animatable.
- [focalBlurRadius](focalblurradius.md): Deprecated. The maximum amount of blurring, in pixels, applied to areas outside the camera’s depth of field. Animatable.
- [aperture](aperture.md): Deprecated. A factor that determines the transition between in-focus and out-of-focus areas. Animatable.
