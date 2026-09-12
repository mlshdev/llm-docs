> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/focalblurradius](https://developer.apple.com/documentation/scenekit/scncamera/focalblurradius)

# focalBlurRadius (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The maximum amount of blurring, in pixels, applied to areas outside the camera’s depth of field. Animatable.

> Use [fStop](fstop.md) instead to define physically based variable blur effects instead of a constant radius. (Note [fStop](fstop.md) `=` [sensorHeight](sensorheight.md) `/` [aperture](aperture.md).)

## Declaration

```swift
var focalBlurRadius: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `0.0`, disabling the depth of field visual effect. Changing this property to a nonzero value enables the depth of field effect, in which only objects at a specified distance from the camera appear in sharp focus, and objects nearer to or farther from the camera appear increasingly blurred (up to the amount specified by this property).

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Deprecated

- [yFov](yfov.md): Deprecated. The camera’s field of view, in degrees, on the vertical axis. Animatable.
- [xFov](xfov.md): Deprecated. The camera’s field of view, in degrees, on the horizontal axis. Animatable.
- [focalDistance](focaldistance.md): Deprecated. The distance from the camera at which objects appear in sharp focus. Animatable.
- [focalSize](focalsize.md): Deprecated. The width of the distance range at which objects appear in sharp focus. Animatable.
- [aperture](aperture.md): Deprecated. A factor that determines the transition between in-focus and out-of-focus areas. Animatable.

# focalBlurRadius (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

The maximum amount of blurring, in pixels, applied to areas outside the camera’s depth of field. Animatable.

> Use [fStop](fstop.md) instead to define physically based variable blur effects instead of a constant radius. (Note [fStop](fstop.md) `=` [sensorHeight](sensorheight.md) `/` [aperture](aperture.md).)

## Declaration

```objectivec
@property (nonatomic) CGFloat focalBlurRadius;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `0.0`, disabling the depth of field visual effect. Changing this property to a nonzero value enables the depth of field effect, in which only objects at a specified distance from the camera appear in sharp focus, and objects nearer to or farther from the camera appear increasingly blurred (up to the amount specified by this property).

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Deprecated

- [yFov](yfov.md): Deprecated. The camera’s field of view, in degrees, on the vertical axis. Animatable.
- [xFov](xfov.md): Deprecated. The camera’s field of view, in degrees, on the horizontal axis. Animatable.
- [focalDistance](focaldistance.md): Deprecated. The distance from the camera at which objects appear in sharp focus. Animatable.
- [focalSize](focalsize.md): Deprecated. The width of the distance range at which objects appear in sharp focus. Animatable.
- [aperture](aperture.md): Deprecated. A factor that determines the transition between in-focus and out-of-focus areas. Animatable.
