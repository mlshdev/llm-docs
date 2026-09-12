> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera/wantsdepthoffield](https://developer.apple.com/documentation/scenekit/scncamera/wantsdepthoffield)

# wantsDepthOfField (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether SceneKit renders depth-of-field blur effects for the camera.

## Declaration

```swift
var wantsDepthOfField: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This value is [false](https://developer.apple.com/documentation/swift/false) by default, disabling depth-of-field effects.

Enabling this property causes SceneKit to render blur effects that model those created by a physical camera device (also known as *bokeh*). That is, objects in the scene appear more or less blurry depending on their distance from the camera and the camera’s [focusDistance](focusdistance.md), and the intensity and style of the blur effect depend on the [fStop](fstop.md) and [apertureBladeCount](aperturebladecount.md) properties.

> **Note**

>  For best results, also enable the [wantsHDR](wantshdr.md) property when using depth-of-field effects. High Dynamic Range rendering provides high contrast for distant bright points in the scene, creating more pronounced bokeh effects.

## See Also

### Adding Depth-of-Field Effects

- [focusDistance](focusdistance.md): The distance from the camera at which objects appear in sharp focus. Animatable.
- [fStop](fstop.md): The physical camera aperture simulated by SceneKit for depth-of-field effects. Animatable.
- [apertureBladeCount](aperturebladecount.md): The number of physical camera aperture blades simulated by SceneKit for depth-of-field effects.
- [focalBlurSampleCount](focalblursamplecount.md): The number of pixel samples SceneKit uses to create depth-of-field blur effects.

# wantsDepthOfField (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value that determines whether SceneKit renders depth-of-field blur effects for the camera.

## Declaration

```objectivec
@property (nonatomic) BOOL wantsDepthOfField;
```

<a id="Discussion"></a>

## Discussion

This value is [false](https://developer.apple.com/documentation/swift/false) by default, disabling depth-of-field effects.

Enabling this property causes SceneKit to render blur effects that model those created by a physical camera device (also known as *bokeh*). That is, objects in the scene appear more or less blurry depending on their distance from the camera and the camera’s [focusDistance](focusdistance.md), and the intensity and style of the blur effect depend on the [fStop](fstop.md) and [apertureBladeCount](aperturebladecount.md) properties.

> **Note**

>  For best results, also enable the [wantsHDR](wantshdr.md) property when using depth-of-field effects. High Dynamic Range rendering provides high contrast for distant bright points in the scene, creating more pronounced bokeh effects.

## See Also

### Adding Depth-of-Field Effects

- [focusDistance](focusdistance.md): The distance from the camera at which objects appear in sharp focus. Animatable.
- [fStop](fstop.md): The physical camera aperture simulated by SceneKit for depth-of-field effects. Animatable.
- [apertureBladeCount](aperturebladecount.md): The number of physical camera aperture blades simulated by SceneKit for depth-of-field effects.
- [focalBlurSampleCount](focalblursamplecount.md): The number of pixel samples SceneKit uses to create depth-of-field blur effects.
