> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcamera/chromaticaberration](https://developer.apple.com/documentation/modelio/mdlcamera/chromaticaberration)

# chromaticAberration (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The amount of radial color shift around the edges of an image rendered using the camera.

## Declaration

```swift
var chromaticAberration: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Chromatic aberration occurs to some degree in all lenses. It results from a lens bringing different wavelengths of light to focus at different places on the image plane. A value of `0.0` (the default) indicates no chromatic aberration, and a value of `1.0` indicates the maximum amount. Chromatic aberration affects all locations in the image according to radial distance. Chromatic aberration also occurs in head-mounted displays, and the value here can be used as an intended amount of chromatic aberration to apply to an image.

## See Also

### Modeling a Physical Lens

- [barrelDistortion](barreldistortion.md): The first coefficient for determining the radial distortion applied to pixels rendered using the camera.
- [fisheyeDistortion](fisheyedistortion.md): The second coefficient for determining the radial distortion applied to pixels rendered using the camera.
- [opticalVignetting](opticalvignetting.md): The amount of radial light attenuation around the edges of an image rendered using the camera.
- [focalLength](focallength.md): The focal length, in millimeters, of the camera’s simulated lens.
- [fStop](fstop.md): The relative aperture ratio of the camera’s simulated lens.
- [apertureBladeCount](aperturebladecount.md): The number of blades in the camera’s simulated aperture.
- [bokehKernel(withSize:)](bokehkernel%28withsize_%29.md): Creates and returns a texture, based on the camera’s aperture blade count, to be used in rendering out-of-focus highlights in a scene.
- [maximumCircleOfConfusion](maximumcircleofconfusion.md): The maximum diameter, in millimeters on the imaging plane, at which light from a point source should appear in an image rendered using the camera.
- [focusDistance](focusdistance.md): The distance, in meters, at which the lens is focused.
- [shutterOpenInterval](shutteropeninterval.md): The duration, in seconds, for which the camera’s simulated shutter is open during each frame.

# chromaticAberration (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The amount of radial color shift around the edges of an image rendered using the camera.

## Declaration

```objectivec
@property (nonatomic, assign) float chromaticAberration;
```

<a id="Discussion"></a>

## Discussion

Chromatic aberration occurs to some degree in all lenses. It results from a lens bringing different wavelengths of light to focus at different places on the image plane. A value of `0.0` (the default) indicates no chromatic aberration, and a value of `1.0` indicates the maximum amount. Chromatic aberration affects all locations in the image according to radial distance. Chromatic aberration also occurs in head-mounted displays, and the value here can be used as an intended amount of chromatic aberration to apply to an image.

## See Also

### Modeling a Physical Lens

- [barrelDistortion](barreldistortion.md): The first coefficient for determining the radial distortion applied to pixels rendered using the camera.
- [fisheyeDistortion](fisheyedistortion.md): The second coefficient for determining the radial distortion applied to pixels rendered using the camera.
- [opticalVignetting](opticalvignetting.md): The amount of radial light attenuation around the edges of an image rendered using the camera.
- [focalLength](focallength.md): The focal length, in millimeters, of the camera’s simulated lens.
- [fStop](fstop.md): The relative aperture ratio of the camera’s simulated lens.
- [apertureBladeCount](aperturebladecount.md): The number of blades in the camera’s simulated aperture.
- [bokehKernelWithSize:](bokehkernel%28withsize_%29.md): Creates and returns a texture, based on the camera’s aperture blade count, to be used in rendering out-of-focus highlights in a scene.
- [maximumCircleOfConfusion](maximumcircleofconfusion.md): The maximum diameter, in millimeters on the imaging plane, at which light from a point source should appear in an image rendered using the camera.
- [focusDistance](focusdistance.md): The distance, in meters, at which the lens is focused.
- [shutterOpenInterval](shutteropeninterval.md): The duration, in seconds, for which the camera’s simulated shutter is open during each frame.
