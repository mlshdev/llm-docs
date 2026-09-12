> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/focusdistance](https://developer.apple.com/documentation/scenekit/scncamera/focusdistance)

# focusDistance (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The distance from the camera at which objects appear in sharp focus. Animatable.

## Declaration

```swift
var focusDistance: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Objects at this distance from the camera appear perfectly focused. Objects nearer to or farther from the camera than this distance appear increasingly blurred, with the behavior of the blur effect depending on the [fStop](fstop.md), [apertureBladeCount](aperturebladecount.md) and [focalBlurSampleCount](focalblursamplecount.md) properties. The default focus distance is `2.5`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adding Depth-of-Field Effects

- [wantsDepthOfField](wantsdepthoffield.md): A Boolean value that determines whether SceneKit renders depth-of-field blur effects for the camera.
- [fStop](fstop.md): The physical camera aperture simulated by SceneKit for depth-of-field effects. Animatable.
- [apertureBladeCount](aperturebladecount.md): The number of physical camera aperture blades simulated by SceneKit for depth-of-field effects.
- [focalBlurSampleCount](focalblursamplecount.md): The number of pixel samples SceneKit uses to create depth-of-field blur effects.

# focusDistance (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The distance from the camera at which objects appear in sharp focus. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat focusDistance;
```

<a id="Discussion"></a>

## Discussion

Objects at this distance from the camera appear perfectly focused. Objects nearer to or farther from the camera than this distance appear increasingly blurred, with the behavior of the blur effect depending on the [fStop](fstop.md), [apertureBladeCount](aperturebladecount.md) and [focalBlurSampleCount](focalblursamplecount.md) properties. The default focus distance is `2.5`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adding Depth-of-Field Effects

- [wantsDepthOfField](wantsdepthoffield.md): A Boolean value that determines whether SceneKit renders depth-of-field blur effects for the camera.
- [fStop](fstop.md): The physical camera aperture simulated by SceneKit for depth-of-field effects. Animatable.
- [apertureBladeCount](aperturebladecount.md): The number of physical camera aperture blades simulated by SceneKit for depth-of-field effects.
- [focalBlurSampleCount](focalblursamplecount.md): The number of pixel samples SceneKit uses to create depth-of-field blur effects.
