> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncamera](https://developer.apple.com/documentation/scenekit/scncamera)

# SCNCamera (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A set of camera attributes that can be attached to a node to provide a point of view for displaying the scene.

## Declaration

```swift
class SCNCamera
```

<a id="overview"></a>

## Overview

To display a scene, you must designate a node whose [camera](scncamera/camera.md) property contains a camera object as the point of view.

The [SCNNode](scnnode.md) object containing a camera defines a point of view—that is, the position and orientation of the camera. A camera’s direction of view is always along the negative z-axis of the node’s local coordinate system. To point the camera at different parts of your scene, use the [position](scnnode/position.md), [rotation](scnnode/rotation.md), or [transform](scnnode/transform.md) property of the node containing it. (Alternatively, to ensure that a camera always points at a particular element of your scene even when that element moves, attach a [SCNLookAtConstraint](scnlookatconstraint.md) object to the node containing the camera.)

An [SCNCamera](scncamera.md) object itself defines the shape and, in part, the appearance of the rendered scene as seen from its point of view. By default, a camera defines a perspective projection, whose field of view (FOV) and near and far visibility limits you control using the properties listed in Adjusting Camera Perspective and illustrated below.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929769@2x.png)

## Topics

### Managing Camera Attributes

- [name](scncamera/name.md): A name associated with the camera object.

### Adjusting Camera Perspective

- [zNear](scncamera/znear.md): The camera’s near depth limit. Animatable.
- [zFar](scncamera/zfar.md): The camera’s far depth limit. Animatable.
- [automaticallyAdjustsZRange](scncamera/automaticallyadjustszrange.md): A Boolean value that determines whether the camera automatically adjusts its [zNear](scncamera/znear.md) and [zFar](scncamera/zfar.md) depth limits.

### Managing Field of View

- [fieldOfView](scncamera/fieldofview.md): The vertical or horizontal viewing angle of the camera.
- [focalLength](scncamera/focallength.md): The camera’s focal length, in millimeters.
- [sensorHeight](scncamera/sensorheight.md): The vertical size of the camera’s imaging plane, in millimeters.
- [projectionDirection](scncamera/projectiondirection.md): The axis used to determine field of view or orthographic scale.
- [SCNCameraProjectionDirection](scncameraprojectiondirection.md): Options for the axis used to determine field of view or orthographic projection.

### Managing the Projection Transform

- [projectionTransform](scncamera/projectiontransform.md): The camera’s projection transformation.
- [usesOrthographicProjection](scncamera/usesorthographicprojection.md): A Boolean value that determines whether the camera uses an orthographic projection.
- [orthographicScale](scncamera/orthographicscale.md): Specifies the camera’s magnification factor when using an orthographic projection.

### Choosing Nodes to Be Visible to the Camera

- [categoryBitMask](scncamera/categorybitmask.md): A mask that defines which categories this camera belongs to.

### Adding Depth-of-Field Effects

- [wantsDepthOfField](scncamera/wantsdepthoffield.md): A Boolean value that determines whether SceneKit renders depth-of-field blur effects for the camera.
- [focusDistance](scncamera/focusdistance.md): The distance from the camera at which objects appear in sharp focus. Animatable.
- [fStop](scncamera/fstop.md): The physical camera aperture simulated by SceneKit for depth-of-field effects. Animatable.
- [apertureBladeCount](scncamera/aperturebladecount.md): The number of physical camera aperture blades simulated by SceneKit for depth-of-field effects.
- [focalBlurSampleCount](scncamera/focalblursamplecount.md): The number of pixel samples SceneKit uses to create depth-of-field blur effects.

### Adding Motion Blur Effects

- [motionBlurIntensity](scncamera/motionblurintensity.md): A factor that determines the intensity of motion blur effects. Animatable.

### Adding High Dynamic Range Effects

- [wantsHDR](scncamera/wantshdr.md): A Boolean value that determines whether SceneKit applies High Dynamic Range (HDR) postprocessing effects to a scene.
- [exposureOffset](scncamera/exposureoffset.md): A logarithmic bias that adjusts the results of SceneKit’s tone mapping operation, brightening or darkening the visible scene.
- [averageGray](scncamera/averagegray.md): The luminance level to use as the midpoint of a tone mapping curve.
- [whitePoint](scncamera/whitepoint.md): The luminance level to use as the upper end of a tone mapping curve.
- [minimumExposure](scncamera/minimumexposure.md): The minimum exposure value to use in tone mapping.
- [maximumExposure](scncamera/maximumexposure.md): The minimum exposure value to use in tone mapping.

### Adding Automatic HDR Exposure Adaptation

- [wantsExposureAdaptation](scncamera/wantsexposureadaptation.md): A Boolean value that determines whether SceneKit automatically adjusts the exposure level.
- [exposureAdaptationBrighteningSpeedFactor](scncamera/exposureadaptationbrighteningspeedfactor.md): The relative duration of automatically animated exposure transitions from dark to bright areas.
- [exposureAdaptationDarkeningSpeedFactor](scncamera/exposureadaptationdarkeningspeedfactor.md): The relative duration of automatically animated exposure transitions from bright to dark areas.

### Adjusting Rendered Colors

- [contrast](scncamera/contrast.md): An adjustment factor to apply to the overall visual contrast of the rendered scene.
- [saturation](scncamera/saturation.md): An adjustment factor to apply to the overall color saturation of the rendered scene.
- [colorGrading](scncamera/colorgrading.md): A texture for applying color grading effects to the entire rendered scene.

### Adding Stylistic Visual Effects

- [bloomIntensity](scncamera/bloomintensity.md): The magnitude of bloom effect to apply to highlights in the rendered scene. Animatable.
- [bloomThreshold](scncamera/bloomthreshold.md): The brightness threshold at which to apply a bloom effect to highlights in the rendered scene. Animatable.
- [bloomBlurRadius](scncamera/bloomblurradius.md): The radius, in pixels, for the blurring portion of the bloom effect applied to highlights in the rendered scene. Animatable.
- [colorFringeIntensity](scncamera/colorfringeintensity.md): The blend factor for fading the color fringing effect applied to the rendered scene.
- [colorFringeStrength](scncamera/colorfringestrength.md): The magnitude of color fringing effect to apply to the rendered scene.
- [vignettingIntensity](scncamera/vignettingintensity.md): The magnitude of vignette (darkening around edges) effect to apply to the rendered scene.
- [vignettingPower](scncamera/vignettingpower.md): The amount of the rendered scene to darken with a vignette effect.

### Adding Screen-Space Ambient Occlusion

- [screenSpaceAmbientOcclusionIntensity](scncamera/screenspaceambientocclusionintensity.md): The intensity of the screen-space ambient occlusion effect applied in camera rendering.
- [screenSpaceAmbientOcclusionRadius](scncamera/screenspaceambientocclusionradius.md): The distance, in units of scene space, at which ambient occlusion takes effect.
- [screenSpaceAmbientOcclusionBias](scncamera/screenspaceambientocclusionbias.md): An offset for modulating ambient occlusion effects.
- [screenSpaceAmbientOcclusionDepthThreshold](scncamera/screenspaceambientocclusiondepththreshold.md): The maximum depth difference, in units of scene space, at which to apply ambient occlusion effects.
- [screenSpaceAmbientOcclusionNormalThreshold](scncamera/screenspaceambientocclusionnormalthreshold.md): The magnitude of the blur effect applied to create ambient occlusion shadows.

### Deprecated

- [yFov](scncamera/yfov.md): Deprecated. The camera’s field of view, in degrees, on the vertical axis. Animatable.
- [xFov](scncamera/xfov.md): Deprecated. The camera’s field of view, in degrees, on the horizontal axis. Animatable.
- [focalDistance](scncamera/focaldistance.md): Deprecated. The distance from the camera at which objects appear in sharp focus. Animatable.
- [focalSize](scncamera/focalsize.md): Deprecated. The width of the distance range at which objects appear in sharp focus. Animatable.
- [focalBlurRadius](scncamera/focalblurradius.md): Deprecated. The maximum amount of blurring, in pixels, applied to areas outside the camera’s depth of field. Animatable.
- [aperture](scncamera/aperture.md): Deprecated. A factor that determines the transition between in-focus and out-of-focus areas. Animatable.

### Initializers

- [init(coder:)](scncamera/init%28coder_%29.md)

### Instance Properties

- [bloomIterationCount](scncamera/bloomiterationcount.md)
- [bloomIterationSpread](scncamera/bloomiterationspread.md)
- [grainIntensity](scncamera/grainintensity.md)
- [grainIsColored](scncamera/grainiscolored.md)
- [grainScale](scncamera/grainscale.md)
- [whiteBalanceTemperature](scncamera/whitebalancetemperature.md)
- [whiteBalanceTint](scncamera/whitebalancetint.md)

### Instance Methods

- [projectionTransform(withViewportSize:)](scncamera/projectiontransform%28withviewportsize_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimatable](scnanimatable.md)
- [SCNTechniqueSupport](scntechniquesupport.md)

## See Also

### Lighting, Cameras, and Shading

- [SCNLight](scnlight.md): A light source that can be attached to a node to illuminate the scene.
- [SCNMaterial](scnmaterial.md): A set of shading attributes that define the appearance of a geometry’s surface when rendered.
- [SCNMaterialProperty](scnmaterialproperty.md): A container for the color or texture of one of a material’s visual properties.

# SCNCamera (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of camera attributes that can be attached to a node to provide a point of view for displaying the scene.

## Declaration

```objectivec
@interface SCNCamera : NSObject
```

<a id="overview"></a>

## Overview

To display a scene, you must designate a node whose [camera](scncamera/camera.md) property contains a camera object as the point of view.

The [SCNNode](scnnode.md) object containing a camera defines a point of view—that is, the position and orientation of the camera. A camera’s direction of view is always along the negative z-axis of the node’s local coordinate system. To point the camera at different parts of your scene, use the [position](scnnode/position.md), [rotation](scnnode/rotation.md), or [transform](scnnode/transform.md) property of the node containing it. (Alternatively, to ensure that a camera always points at a particular element of your scene even when that element moves, attach a [SCNLookAtConstraint](scnlookatconstraint.md) object to the node containing the camera.)

An [SCNCamera](scncamera.md) object itself defines the shape and, in part, the appearance of the rendered scene as seen from its point of view. By default, a camera defines a perspective projection, whose field of view (FOV) and near and far visibility limits you control using the properties listed in Adjusting Camera Perspective and illustrated below.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929769@2x.png)

## Topics

### Creating a Camera

- [camera](scncamera/camera.md): Deprecated. Creates a new camera object.
- [cameraWithMDLCamera:](scncamera/camerawithmdlcamera_.md): Deprecated. Creates a camera from the specified Model I/O camera object.

### Managing Camera Attributes

- [name](scncamera/name.md): A name associated with the camera object.

### Adjusting Camera Perspective

- [zNear](scncamera/znear.md): The camera’s near depth limit. Animatable.
- [zFar](scncamera/zfar.md): The camera’s far depth limit. Animatable.
- [automaticallyAdjustsZRange](scncamera/automaticallyadjustszrange.md): A Boolean value that determines whether the camera automatically adjusts its [zNear](scncamera/znear.md) and [zFar](scncamera/zfar.md) depth limits.

### Managing Field of View

- [fieldOfView](scncamera/fieldofview.md): The vertical or horizontal viewing angle of the camera.
- [focalLength](scncamera/focallength.md): The camera’s focal length, in millimeters.
- [sensorHeight](scncamera/sensorheight.md): The vertical size of the camera’s imaging plane, in millimeters.
- [projectionDirection](scncamera/projectiondirection.md): The axis used to determine field of view or orthographic scale.
- [SCNCameraProjectionDirection](scncameraprojectiondirection.md): Options for the axis used to determine field of view or orthographic projection.

### Managing the Projection Transform

- [projectionTransform](scncamera/projectiontransform.md): The camera’s projection transformation.
- [usesOrthographicProjection](scncamera/usesorthographicprojection.md): A Boolean value that determines whether the camera uses an orthographic projection.
- [orthographicScale](scncamera/orthographicscale.md): Specifies the camera’s magnification factor when using an orthographic projection.

### Choosing Nodes to Be Visible to the Camera

- [categoryBitMask](scncamera/categorybitmask.md): A mask that defines which categories this camera belongs to.

### Adding Depth-of-Field Effects

- [wantsDepthOfField](scncamera/wantsdepthoffield.md): A Boolean value that determines whether SceneKit renders depth-of-field blur effects for the camera.
- [focusDistance](scncamera/focusdistance.md): The distance from the camera at which objects appear in sharp focus. Animatable.
- [fStop](scncamera/fstop.md): The physical camera aperture simulated by SceneKit for depth-of-field effects. Animatable.
- [apertureBladeCount](scncamera/aperturebladecount.md): The number of physical camera aperture blades simulated by SceneKit for depth-of-field effects.
- [focalBlurSampleCount](scncamera/focalblursamplecount.md): The number of pixel samples SceneKit uses to create depth-of-field blur effects.

### Adding Motion Blur Effects

- [motionBlurIntensity](scncamera/motionblurintensity.md): A factor that determines the intensity of motion blur effects. Animatable.

### Adding High Dynamic Range Effects

- [wantsHDR](scncamera/wantshdr.md): A Boolean value that determines whether SceneKit applies High Dynamic Range (HDR) postprocessing effects to a scene.
- [exposureOffset](scncamera/exposureoffset.md): A logarithmic bias that adjusts the results of SceneKit’s tone mapping operation, brightening or darkening the visible scene.
- [averageGray](scncamera/averagegray.md): The luminance level to use as the midpoint of a tone mapping curve.
- [whitePoint](scncamera/whitepoint.md): The luminance level to use as the upper end of a tone mapping curve.
- [minimumExposure](scncamera/minimumexposure.md): The minimum exposure value to use in tone mapping.
- [maximumExposure](scncamera/maximumexposure.md): The minimum exposure value to use in tone mapping.

### Adding Automatic HDR Exposure Adaptation

- [wantsExposureAdaptation](scncamera/wantsexposureadaptation.md): A Boolean value that determines whether SceneKit automatically adjusts the exposure level.
- [exposureAdaptationBrighteningSpeedFactor](scncamera/exposureadaptationbrighteningspeedfactor.md): The relative duration of automatically animated exposure transitions from dark to bright areas.
- [exposureAdaptationDarkeningSpeedFactor](scncamera/exposureadaptationdarkeningspeedfactor.md): The relative duration of automatically animated exposure transitions from bright to dark areas.

### Adjusting Rendered Colors

- [contrast](scncamera/contrast.md): An adjustment factor to apply to the overall visual contrast of the rendered scene.
- [saturation](scncamera/saturation.md): An adjustment factor to apply to the overall color saturation of the rendered scene.
- [colorGrading](scncamera/colorgrading.md): A texture for applying color grading effects to the entire rendered scene.

### Adding Stylistic Visual Effects

- [bloomIntensity](scncamera/bloomintensity.md): The magnitude of bloom effect to apply to highlights in the rendered scene. Animatable.
- [bloomThreshold](scncamera/bloomthreshold.md): The brightness threshold at which to apply a bloom effect to highlights in the rendered scene. Animatable.
- [bloomBlurRadius](scncamera/bloomblurradius.md): The radius, in pixels, for the blurring portion of the bloom effect applied to highlights in the rendered scene. Animatable.
- [colorFringeIntensity](scncamera/colorfringeintensity.md): The blend factor for fading the color fringing effect applied to the rendered scene.
- [colorFringeStrength](scncamera/colorfringestrength.md): The magnitude of color fringing effect to apply to the rendered scene.
- [vignettingIntensity](scncamera/vignettingintensity.md): The magnitude of vignette (darkening around edges) effect to apply to the rendered scene.
- [vignettingPower](scncamera/vignettingpower.md): The amount of the rendered scene to darken with a vignette effect.

### Adding Screen-Space Ambient Occlusion

- [screenSpaceAmbientOcclusionIntensity](scncamera/screenspaceambientocclusionintensity.md): The intensity of the screen-space ambient occlusion effect applied in camera rendering.
- [screenSpaceAmbientOcclusionRadius](scncamera/screenspaceambientocclusionradius.md): The distance, in units of scene space, at which ambient occlusion takes effect.
- [screenSpaceAmbientOcclusionBias](scncamera/screenspaceambientocclusionbias.md): An offset for modulating ambient occlusion effects.
- [screenSpaceAmbientOcclusionDepthThreshold](scncamera/screenspaceambientocclusiondepththreshold.md): The maximum depth difference, in units of scene space, at which to apply ambient occlusion effects.
- [screenSpaceAmbientOcclusionNormalThreshold](scncamera/screenspaceambientocclusionnormalthreshold.md): The magnitude of the blur effect applied to create ambient occlusion shadows.

### Deprecated

- [yFov](scncamera/yfov.md): Deprecated. The camera’s field of view, in degrees, on the vertical axis. Animatable.
- [xFov](scncamera/xfov.md): Deprecated. The camera’s field of view, in degrees, on the horizontal axis. Animatable.
- [focalDistance](scncamera/focaldistance.md): Deprecated. The distance from the camera at which objects appear in sharp focus. Animatable.
- [focalSize](scncamera/focalsize.md): Deprecated. The width of the distance range at which objects appear in sharp focus. Animatable.
- [focalBlurRadius](scncamera/focalblurradius.md): Deprecated. The maximum amount of blurring, in pixels, applied to areas outside the camera’s depth of field. Animatable.
- [aperture](scncamera/aperture.md): Deprecated. A factor that determines the transition between in-focus and out-of-focus areas. Animatable.

### Instance Properties

- [bloomIterationCount](scncamera/bloomiterationcount.md)
- [bloomIterationSpread](scncamera/bloomiterationspread.md)
- [grainIntensity](scncamera/grainintensity.md)
- [grainIsColored](scncamera/grainiscolored.md)
- [grainScale](scncamera/grainscale.md)
- [whiteBalanceTemperature](scncamera/whitebalancetemperature.md)
- [whiteBalanceTint](scncamera/whitebalancetint.md)

### Instance Methods

- [projectionTransformWithViewportSize:](scncamera/projectiontransform%28withviewportsize_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimatable](scnanimatable.md)
- [SCNTechniqueSupport](scntechniquesupport.md)

## See Also

### Lighting, Cameras, and Shading

- [SCNLight](scnlight.md): A light source that can be attached to a node to illuminate the scene.
- [SCNMaterial](scnmaterial.md): A set of shading attributes that define the appearance of a geometry’s surface when rendered.
- [SCNMaterialProperty](scnmaterialproperty.md): A container for the color or texture of one of a material’s visual properties.
