> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcamera/maximumcircleofconfusion](https://developer.apple.com/documentation/modelio/mdlcamera/maximumcircleofconfusion)

# maximumCircleOfConfusion (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The maximum diameter, in millimeters on the imaging plane, at which light from a point source should appear in an image rendered using the camera.

## Declaration

```swift
var maximumCircleOfConfusion: Float { get set }
```

<a id="Discussion"></a>

## Discussion

In a physically based camera simulation, the size of out-of-focus highlights that appear in images seen by the camera—commonly called *bokeh*—is a function of other camera properties, such as focal length, pupil aperture, sensor size, and distance to the subject. However, it can be useful for aesthetic reasons to limit the size of such highlights.

The default maximum circle of confusion is 0.05 mm.

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
- [focusDistance](focusdistance.md): The distance, in meters, at which the lens is focused.
- [shutterOpenInterval](shutteropeninterval.md): The duration, in seconds, for which the camera’s simulated shutter is open during each frame.

# maximumCircleOfConfusion (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The maximum diameter, in millimeters on the imaging plane, at which light from a point source should appear in an image rendered using the camera.

## Declaration

```objectivec
@property (nonatomic, assign) float maximumCircleOfConfusion;
```

<a id="Discussion"></a>

## Discussion

In a physically based camera simulation, the size of out-of-focus highlights that appear in images seen by the camera—commonly called *bokeh*—is a function of other camera properties, such as focal length, pupil aperture, sensor size, and distance to the subject. However, it can be useful for aesthetic reasons to limit the size of such highlights.

The default maximum circle of confusion is 0.05 mm.

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
- [focusDistance](focusdistance.md): The distance, in meters, at which the lens is focused.
- [shutterOpenInterval](shutteropeninterval.md): The duration, in seconds, for which the camera’s simulated shutter is open during each frame.
