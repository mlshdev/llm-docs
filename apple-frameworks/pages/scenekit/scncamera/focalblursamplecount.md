> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/focalblursamplecount](https://developer.apple.com/documentation/scenekit/scncamera/focalblursamplecount)

# focalBlurSampleCount (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The number of pixel samples SceneKit uses to create depth-of-field blur effects.

## Declaration

```swift
var focalBlurSampleCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

When the [wantsDepthOfField](wantsdepthoffield.md) setting is enabled, SceneKit renders depth-of-field blur (also called *bokeh*) effects using a blur filter that samples multiple points in the image. Sampling a larger number of points produces a higher quality visual effect at a higher performance cost, and vice versa. The default sample count is 25.

## See Also

### Adding Depth-of-Field Effects

- [wantsDepthOfField](wantsdepthoffield.md): A Boolean value that determines whether SceneKit renders depth-of-field blur effects for the camera.
- [focusDistance](focusdistance.md): The distance from the camera at which objects appear in sharp focus. Animatable.
- [fStop](fstop.md): The physical camera aperture simulated by SceneKit for depth-of-field effects. Animatable.
- [apertureBladeCount](aperturebladecount.md): The number of physical camera aperture blades simulated by SceneKit for depth-of-field effects.

# focalBlurSampleCount (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The number of pixel samples SceneKit uses to create depth-of-field blur effects.

## Declaration

```objectivec
@property (nonatomic) NSInteger focalBlurSampleCount;
```

<a id="Discussion"></a>

## Discussion

When the [wantsDepthOfField](wantsdepthoffield.md) setting is enabled, SceneKit renders depth-of-field blur (also called *bokeh*) effects using a blur filter that samples multiple points in the image. Sampling a larger number of points produces a higher quality visual effect at a higher performance cost, and vice versa. The default sample count is 25.

## See Also

### Adding Depth-of-Field Effects

- [wantsDepthOfField](wantsdepthoffield.md): A Boolean value that determines whether SceneKit renders depth-of-field blur effects for the camera.
- [focusDistance](focusdistance.md): The distance from the camera at which objects appear in sharp focus. Animatable.
- [fStop](fstop.md): The physical camera aperture simulated by SceneKit for depth-of-field effects. Animatable.
- [apertureBladeCount](aperturebladecount.md): The number of physical camera aperture blades simulated by SceneKit for depth-of-field effects.
