> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcamera/fstop](https://developer.apple.com/documentation/modelio/mdlcamera/fstop)

# fStop (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The relative aperture ratio of the camera’s simulated lens.

## Declaration

```swift
var fStop: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Relative aperture, also called *f-stop* or *f-number*, is a measure of the amount of light permitted through a lens to an imaging surface, commonly thought of as the “speed” of the lens. The f-stop is the ratio of the lens’s [focalLength](focallength.md) to the diameter of the entrance pupil. It controls the amount of light that reaches the sensor, as well as the size of out-of-focus parts of the image.

The default relative aperture is is `5.6`, simulating an f/5.6 lens.

## See Also

### Modeling a Physical Lens

- [barrelDistortion](barreldistortion.md): The first coefficient for determining the radial distortion applied to pixels rendered using the camera.
- [fisheyeDistortion](fisheyedistortion.md): The second coefficient for determining the radial distortion applied to pixels rendered using the camera.
- [opticalVignetting](opticalvignetting.md): The amount of radial light attenuation around the edges of an image rendered using the camera.
- [chromaticAberration](chromaticaberration.md): The amount of radial color shift around the edges of an image rendered using the camera.
- [focalLength](focallength.md): The focal length, in millimeters, of the camera’s simulated lens.
- [apertureBladeCount](aperturebladecount.md): The number of blades in the camera’s simulated aperture.
- [bokehKernel(withSize:)](bokehkernel%28withsize_%29.md): Creates and returns a texture, based on the camera’s aperture blade count, to be used in rendering out-of-focus highlights in a scene.
- [maximumCircleOfConfusion](maximumcircleofconfusion.md): The maximum diameter, in millimeters on the imaging plane, at which light from a point source should appear in an image rendered using the camera.
- [focusDistance](focusdistance.md): The distance, in meters, at which the lens is focused.
- [shutterOpenInterval](shutteropeninterval.md): The duration, in seconds, for which the camera’s simulated shutter is open during each frame.

# fStop (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The relative aperture ratio of the camera’s simulated lens.

## Declaration

```objectivec
@property (nonatomic, assign) float fStop;
```

<a id="Discussion"></a>

## Discussion

Relative aperture, also called *f-stop* or *f-number*, is a measure of the amount of light permitted through a lens to an imaging surface, commonly thought of as the “speed” of the lens. The f-stop is the ratio of the lens’s [focalLength](focallength.md) to the diameter of the entrance pupil. It controls the amount of light that reaches the sensor, as well as the size of out-of-focus parts of the image.

The default relative aperture is is `5.6`, simulating an f/5.6 lens.

## See Also

### Modeling a Physical Lens

- [barrelDistortion](barreldistortion.md): The first coefficient for determining the radial distortion applied to pixels rendered using the camera.
- [fisheyeDistortion](fisheyedistortion.md): The second coefficient for determining the radial distortion applied to pixels rendered using the camera.
- [opticalVignetting](opticalvignetting.md): The amount of radial light attenuation around the edges of an image rendered using the camera.
- [chromaticAberration](chromaticaberration.md): The amount of radial color shift around the edges of an image rendered using the camera.
- [focalLength](focallength.md): The focal length, in millimeters, of the camera’s simulated lens.
- [apertureBladeCount](aperturebladecount.md): The number of blades in the camera’s simulated aperture.
- [bokehKernelWithSize:](bokehkernel%28withsize_%29.md): Creates and returns a texture, based on the camera’s aperture blade count, to be used in rendering out-of-focus highlights in a scene.
- [maximumCircleOfConfusion](maximumcircleofconfusion.md): The maximum diameter, in millimeters on the imaging plane, at which light from a point source should appear in an image rendered using the camera.
- [focusDistance](focusdistance.md): The distance, in meters, at which the lens is focused.
- [shutterOpenInterval](shutteropeninterval.md): The duration, in seconds, for which the camera’s simulated shutter is open during each frame.
