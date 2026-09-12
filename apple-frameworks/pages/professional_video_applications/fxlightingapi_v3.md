> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxlightingapi_v3](https://developer.apple.com/documentation/professional_video_applications/fxlightingapi_v3)

# FxLightingAPI_v3 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.0+

An API you use to get information about lights in a scene in a Motion project.

## Declaration

```swift
protocol FxLightingAPI_v3
```

<a id="overview"></a>

## Overview

This API provides a plug-in with the number of lights in a scene, as well as information about each light at a given time. A plug-in only has access to lights that are in the same group as the plug-in or a subgroup of such a group.

## Topics

### Getting Lighting Information

- [lightInfo(\_:forLight:at:)](fxlightingapi_v3/lightinfo%28__forlight_at_%29.md): Provides information about a light at a particular time.
- [numberOfLights(at:)](fxlightingapi_v3/numberoflights%28at_%29.md): Retrieves the number of lights at the passed-in time.
- [FxLight](fxlight.md): A structure that contains lighting information.

### Constants

- [kFxLight_V3](kfxlight_v3.md): The version number of the lighting information.
- [FxLight_CurrentVersion](fxlight_currentversion.md): A property used to define a lighting information structure as being the most current version.
- [FxLight](fxlight.md): A structure that contains lighting information.
- [FxLightType](fxlighttype.md): The type of lighting.

## See Also

### 3D and lighting

- [Fx3DAPI_v5](fx3dapi_v5.md): An API that defines the methods the host application provides to get information about the 3D environment, including camera and object transforms.
- [FxMatrix44](fxmatrix44.md): The `FxMatrix` class encapsulates a 4x4 matrix object and provides matrix inversion and transforming of 2D and 3D points.

# FxLightingAPI_v3 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

An API you use to get information about lights in a scene in a Motion project.

## Declaration

```objectivec
@protocol FxLightingAPI_v3
```

<a id="overview"></a>

## Overview

This API provides a plug-in with the number of lights in a scene, as well as information about each light at a given time. A plug-in only has access to lights that are in the same group as the plug-in or a subgroup of such a group.

## Topics

### Getting Lighting Information

- [lightInfo:forLight:atTime:error:](fxlightingapi_v3/lightinfo%28__forlight_at_%29.md): Provides information about a light at a particular time.
- [numberOfLightsAtTime:](fxlightingapi_v3/numberoflights%28at_%29.md): Retrieves the number of lights at the passed-in time.
- [FxLight](fxlight.md): A structure that contains lighting information.

### Constants

- [kFxLight_V3](kfxlight_v3.md): The version number of the lighting information.
- [FxLight_CurrentVersion](fxlight_currentversion.md): A property used to define a lighting information structure as being the most current version.
- [FxLight](fxlight.md): A structure that contains lighting information.
- [FxLightType](fxlighttype.md): The type of lighting.

## See Also

### 3D and lighting

- [Fx3DAPI_v5](fx3dapi_v5.md): An API that defines the methods the host application provides to get information about the 3D environment, including camera and object transforms.
- [FxMatrix44](fxmatrix44.md): The `FxMatrix` class encapsulates a 4x4 matrix object and provides matrix inversion and transforming of 2D and 3D points.
