> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcamera/shutteropeninterval](https://developer.apple.com/documentation/modelio/mdlcamera/shutteropeninterval)

# shutterOpenInterval (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The duration, in seconds, for which the camera’s simulated shutter is open during each frame.

## Declaration

```swift
var shutterOpenInterval: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

In a real-world camera, the shutter speed determines both the amount of light reaching the imaging surface (film or sensor) and the severity of effects such as motion blur. Shutter time is not the same as frame rate—for example, in a cinema camera running at 24 frames per second, the shutter is open for half of each frame’s duration, so the corresponding shutter time is 1/48 second.

Because shutter time is related to visual effects, not other time-based aspects of rendering a scene, a renderer should treat this property as constant even when those other aspects (such as animation frame rate or frame processing time) vary.

## See Also

### Modeling a Physical Lens

- [barrelDistortion](barreldistortion.md): The first coefficient for determining the radial distortion applied to pixels rendered using the camera.
- [fisheyeDistortion](fisheyedistortion.md): The second coefficient for determining the radial distortion applied to pixels rendered using the camera.
- [opticalVignetting](opticalvignetting.md): The amount of radial light attenuation around the edges of an image rendered using the camera.
- [chromaticAberration](chromaticaberration.md): The amount of radial color shift around the edges of an image rendered using the camera.
- [focalLength](focallength.md): The focal length, in millimeters, of the camera’s simulated lens.
- [fStop](fstop.md): The relative aperture ratio of the camera’s simulated lens.
- [apertureBladeCount](aperturebladecount.md): The number of blades in the camera’s simulated aperture.
- [bokehKernel(withSize:)](bokehkernel%28withsize_%29.md): Creates and returns a texture, based on the camera’s aperture blade count, to be used in rendering out-of-focus highlights in a scene.
- [maximumCircleOfConfusion](maximumcircleofconfusion.md): The maximum diameter, in millimeters on the imaging plane, at which light from a point source should appear in an image rendered using the camera.
- [focusDistance](focusdistance.md): The distance, in meters, at which the lens is focused.

# shutterOpenInterval (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The duration, in seconds, for which the camera’s simulated shutter is open during each frame.

## Declaration

```objectivec
@property (nonatomic, assign) NSTimeInterval shutterOpenInterval;
```

<a id="Discussion"></a>

## Discussion

In a real-world camera, the shutter speed determines both the amount of light reaching the imaging surface (film or sensor) and the severity of effects such as motion blur. Shutter time is not the same as frame rate—for example, in a cinema camera running at 24 frames per second, the shutter is open for half of each frame’s duration, so the corresponding shutter time is 1/48 second.

Because shutter time is related to visual effects, not other time-based aspects of rendering a scene, a renderer should treat this property as constant even when those other aspects (such as animation frame rate or frame processing time) vary.

## See Also

### Modeling a Physical Lens

- [barrelDistortion](barreldistortion.md): The first coefficient for determining the radial distortion applied to pixels rendered using the camera.
- [fisheyeDistortion](fisheyedistortion.md): The second coefficient for determining the radial distortion applied to pixels rendered using the camera.
- [opticalVignetting](opticalvignetting.md): The amount of radial light attenuation around the edges of an image rendered using the camera.
- [chromaticAberration](chromaticaberration.md): The amount of radial color shift around the edges of an image rendered using the camera.
- [focalLength](focallength.md): The focal length, in millimeters, of the camera’s simulated lens.
- [fStop](fstop.md): The relative aperture ratio of the camera’s simulated lens.
- [apertureBladeCount](aperturebladecount.md): The number of blades in the camera’s simulated aperture.
- [bokehKernelWithSize:](bokehkernel%28withsize_%29.md): Creates and returns a texture, based on the camera’s aperture blade count, to be used in rendering out-of-focus highlights in a scene.
- [maximumCircleOfConfusion](maximumcircleofconfusion.md): The maximum diameter, in millimeters on the imaging plane, at which light from a point source should appear in an image rendered using the camera.
- [focusDistance](focusdistance.md): The distance, in meters, at which the lens is focused.
