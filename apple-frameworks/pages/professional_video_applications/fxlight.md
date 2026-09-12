> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxlight](https://developer.apple.com/documentation/professional_video_applications/fxlight)

# FxLight (Swift)

**Framework:** Professional Video Applications  
**Kind:** Structure  
**Availability:** FxPlug 4.0+

A structure that contains lighting information.

## Declaration

```swift
struct FxLight
```

<a id="overview"></a>

## Overview

Note that the FxLight structure uses [CMTime](../coremedia/cmtime.md) in FxPlug 4, and replaces `FxLightInfo` from `FxLightingAPI` and `FxLightInfo_V1` from `FxLightingAPI_v2`.

## Topics

### Properties

- [version](fxlight/version.md): The version of a lighting information structure.
- [time](fxlight/time.md): The time of the lighting information.
- [lightType](fxlight/lighttype.md): The type of light, whether ambient, directional, point, or spot.
- [color](fxlight/color.md): The color of the light.
- [intensity](fxlight/intensity.md): The brightness with which the light illuminates objects.
- [constantAttenuation](fxlight/constantattenuation.md): The constant term of the lighting falloff equation.
- [linearAttenuation](fxlight/linearattenuation.md): The linear component of the lighting falloff equation.
- [quadraticAttenuation](fxlight/quadraticattenuation.md): The quadratic component of the lighting falloff equation.
- [castsShadows](fxlight/castsshadows.md): A Boolean value that indicates whether a light casts shadows.
- [spotCutoff](fxlight/spotcutoff.md): The angle, in radians, of the cone cutoff for spotlights.
- [spotPenumbraCutoff](fxlight/spotpenumbracutoff.md): The angle, in radians, of the cone penumbra cutoff for spotlights.
- [position](fxlight/position.md): The location of the light.
- [direction](fxlight/direction.md): The direction in which the light points.

### Initializers

- [init()](fxlight/init%28%29.md): Initializes an FxLight lighting information structure.
- [init(version:time:lightType:color:intensity:constantAttenuation:linearAttenuation:quadraticAttenuation:castsShadows:spotCutoff:spotPenumbraCutoff:position:direction:)](fxlight/init%28version_time_lighttype_color_intensity_constantattenuation_linearattenuation_quadraticattenuation_castsshadows_spotcutoff_spotpenumbracutoff_position_direction_%29.md): Initializes an FxLight lighting information structure with parameters.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Getting Lighting Information

- [lightInfo(\_:forLight:at:)](fxlightingapi_v3/lightinfo%28__forlight_at_%29.md): Provides information about a light at a particular time.
- [numberOfLights(at:)](fxlightingapi_v3/numberoflights%28at_%29.md): Retrieves the number of lights at the passed-in time.

# FxLight (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Structure

A structure that contains lighting information.

## Declaration

```objectivec
typedef struct FxLight { ... } FxLight;
```

<a id="overview"></a>

## Overview

Note that the FxLight structure uses [CMTime](../coremedia/cmtime.md) in FxPlug 4, and replaces `FxLightInfo` from `FxLightingAPI` and `FxLightInfo_V1` from `FxLightingAPI_v2`.

## Topics

### Properties

- [version](fxlight/version.md): The version of a lighting information structure.
- [time](fxlight/time.md): The time of the lighting information.
- [lightType](fxlight/lighttype.md): The type of light, whether ambient, directional, point, or spot.
- [color](fxlight/color.md): The color of the light.
- [intensity](fxlight/intensity.md): The brightness with which the light illuminates objects.
- [constantAttenuation](fxlight/constantattenuation.md): The constant term of the lighting falloff equation.
- [linearAttenuation](fxlight/linearattenuation.md): The linear component of the lighting falloff equation.
- [quadraticAttenuation](fxlight/quadraticattenuation.md): The quadratic component of the lighting falloff equation.
- [castsShadows](fxlight/castsshadows.md): A Boolean value that indicates whether a light casts shadows.
- [spotCutoff](fxlight/spotcutoff.md): The angle, in radians, of the cone cutoff for spotlights.
- [spotPenumbraCutoff](fxlight/spotpenumbracutoff.md): The angle, in radians, of the cone penumbra cutoff for spotlights.
- [position](fxlight/position.md): The location of the light.
- [direction](fxlight/direction.md): The direction in which the light points.

## See Also

### Getting Lighting Information

- [lightInfo:forLight:atTime:error:](fxlightingapi_v3/lightinfo%28__forlight_at_%29.md): Provides information about a light at a particular time.
- [numberOfLightsAtTime:](fxlightingapi_v3/numberoflights%28at_%29.md): Retrieves the number of lights at the passed-in time.
