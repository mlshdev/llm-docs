> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcamera/fisheyedistortion](https://developer.apple.com/documentation/modelio/mdlcamera/fisheyedistortion)

# fisheyeDistortion (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The second coefficient for determining the radial distortion applied to pixels rendered using the camera.

## Declaration

```swift
var fisheyeDistortion: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Light passing through any lens produces some amount of radial distortion, which a renderer can compute based on the [focalLength](focallength.md) property. However, some lenses or aesthetic designs introduce additional distortion. A renderer can model radial distortion using the following equation, in which `r` is the radial distance from a pixel to be rendered to the center of the projection, and `r’` is the new radial distance to that pixel accounting for distortion:

`r' = r * (1 +` [barrelDistortion](barreldistortion.md) `* r^2 +` [fisheyeDistortion](fisheyedistortion.md) `* r^4)`

A nonzero [barrelDistortion](barreldistortion.md) value sufficiently describes the distortion characteristic of most lenses. To simulate other lenses—such as security cameras, plastic toy lenses, or VR headsets—use both the [barrelDistortion](barreldistortion.md) and [fisheyeDistortion](fisheyedistortion.md) properties. The default value of both radial distortion parameters is zero, resulting in a rectilinear projection.

## See Also

### Modeling a Physical Lens

- [barrelDistortion](barreldistortion.md): The first coefficient for determining the radial distortion applied to pixels rendered using the camera.
- [opticalVignetting](opticalvignetting.md): The amount of radial light attenuation around the edges of an image rendered using the camera.
- [chromaticAberration](chromaticaberration.md): The amount of radial color shift around the edges of an image rendered using the camera.
- [focalLength](focallength.md): The focal length, in millimeters, of the camera’s simulated lens.
- [fStop](fstop.md): The relative aperture ratio of the camera’s simulated lens.
- [apertureBladeCount](aperturebladecount.md): The number of blades in the camera’s simulated aperture.
- [bokehKernel(withSize:)](bokehkernel%28withsize_%29.md): Creates and returns a texture, based on the camera’s aperture blade count, to be used in rendering out-of-focus highlights in a scene.
- [maximumCircleOfConfusion](maximumcircleofconfusion.md): The maximum diameter, in millimeters on the imaging plane, at which light from a point source should appear in an image rendered using the camera.
- [focusDistance](focusdistance.md): The distance, in meters, at which the lens is focused.
- [shutterOpenInterval](shutteropeninterval.md): The duration, in seconds, for which the camera’s simulated shutter is open during each frame.

# fisheyeDistortion (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The second coefficient for determining the radial distortion applied to pixels rendered using the camera.

## Declaration

```objectivec
@property (nonatomic, assign) float fisheyeDistortion;
```

<a id="Discussion"></a>

## Discussion

Light passing through any lens produces some amount of radial distortion, which a renderer can compute based on the [focalLength](focallength.md) property. However, some lenses or aesthetic designs introduce additional distortion. A renderer can model radial distortion using the following equation, in which `r` is the radial distance from a pixel to be rendered to the center of the projection, and `r’` is the new radial distance to that pixel accounting for distortion:

`r' = r * (1 +` [barrelDistortion](barreldistortion.md) `* r^2 +` [fisheyeDistortion](fisheyedistortion.md) `* r^4)`

A nonzero [barrelDistortion](barreldistortion.md) value sufficiently describes the distortion characteristic of most lenses. To simulate other lenses—such as security cameras, plastic toy lenses, or VR headsets—use both the [barrelDistortion](barreldistortion.md) and [fisheyeDistortion](fisheyedistortion.md) properties. The default value of both radial distortion parameters is zero, resulting in a rectilinear projection.

## See Also

### Modeling a Physical Lens

- [barrelDistortion](barreldistortion.md): The first coefficient for determining the radial distortion applied to pixels rendered using the camera.
- [opticalVignetting](opticalvignetting.md): The amount of radial light attenuation around the edges of an image rendered using the camera.
- [chromaticAberration](chromaticaberration.md): The amount of radial color shift around the edges of an image rendered using the camera.
- [focalLength](focallength.md): The focal length, in millimeters, of the camera’s simulated lens.
- [fStop](fstop.md): The relative aperture ratio of the camera’s simulated lens.
- [apertureBladeCount](aperturebladecount.md): The number of blades in the camera’s simulated aperture.
- [bokehKernelWithSize:](bokehkernel%28withsize_%29.md): Creates and returns a texture, based on the camera’s aperture blade count, to be used in rendering out-of-focus highlights in a scene.
- [maximumCircleOfConfusion](maximumcircleofconfusion.md): The maximum diameter, in millimeters on the imaging plane, at which light from a point source should appear in an image rendered using the camera.
- [focusDistance](focusdistance.md): The distance, in meters, at which the lens is focused.
- [shutterOpenInterval](shutteropeninterval.md): The duration, in seconds, for which the camera’s simulated shutter is open during each frame.
