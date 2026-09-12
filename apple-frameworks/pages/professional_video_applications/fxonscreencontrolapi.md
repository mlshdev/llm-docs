> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxonscreencontrolapi](https://developer.apple.com/documentation/professional_video_applications/fxonscreencontrolapi)

# FxOnScreenControlAPI (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 3.1+

The `FxOnScreenControlAPI` protocol defines the methods the host application uses to draw controls and other user interface elements directly on the canvas where the user has applied the plug-in.

## Declaration

```swift
protocol FxOnScreenControlAPI
```

## Mentioned In

- [Adding onscreen controls to plug-ins](../professional-video-applications/adding-onscreen-controls-to-plug-ins.md)

<a id="overview"></a>

## Overview

Plug-ins use protocol to direct manipulation of the object and is an intuitive means for users to interact with a plug-in.

Use this API to transform points from the drawing space of the canvas or document to the pixel space of the object the user wants to manipulate, and vice-versa.

## Topics

### Converting Points Between Coordinate Spaces

- [convertPoint(fromSpace:fromX:fromY:toSpace:toX:toY:)](fxonscreencontrolapi/convertpoint%28fromspace_fromx_fromy_tospace_tox_toy_%29.md): Converts a position from object space to canvas space.

## Relationships

### Inherited By

- [FxOnScreenControlAPI_v2](fxonscreencontrolapi_v2.md)
- [FxOnScreenControlAPI_v3](fxonscreencontrolapi_v3.md)
- [FxOnScreenControlAPI_v4](fxonscreencontrolapi_v4.md)

## See Also

### Onscreen Control APIs

- [FxOnScreenControl_v4](fxonscreencontrol_v4.md): Defines the methods a plug-in must implement to create parameter controls.
- [FxOnScreenControlAPI_v2](fxonscreencontrolapi_v2.md): The `FxOnScreenControlAPI_v2` protocol specifies additions to the `FxOnScreenControlAPI` protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.
- [FxOnScreenControlAPI_v3](fxonscreencontrolapi_v3.md): The `FxOnScreenControlAPI_v3` protocol specifies additions to the [FxOnScreenControlAPI](fxonscreencontrolapi.md) protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.
- [FxOnScreenControlAPI_v4](fxonscreencontrolapi_v4.md): The `FxOnScreenControlAPI_v4` protocol specifies additions to the [FxOnScreenControlAPI](fxonscreencontrolapi.md) protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.

# FxOnScreenControlAPI (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

The `FxOnScreenControlAPI` protocol defines the methods the host application uses to draw controls and other user interface elements directly on the canvas where the user has applied the plug-in.

## Declaration

```objectivec
@protocol FxOnScreenControlAPI
```

## Mentioned In

- [Adding onscreen controls to plug-ins](../professional-video-applications/adding-onscreen-controls-to-plug-ins.md)

<a id="overview"></a>

## Overview

Plug-ins use protocol to direct manipulation of the object and is an intuitive means for users to interact with a plug-in.

Use this API to transform points from the drawing space of the canvas or document to the pixel space of the object the user wants to manipulate, and vice-versa.

## Topics

### Converting Points Between Coordinate Spaces

- [convertPointFromSpace:fromX:fromY:toSpace:toX:toY:](fxonscreencontrolapi/convertpoint%28fromspace_fromx_fromy_tospace_tox_toy_%29.md): Converts a position from object space to canvas space.

## Relationships

### Inherited By

- [FxOnScreenControlAPI_v2](fxonscreencontrolapi_v2.md)

## See Also

### Onscreen Control APIs

- [FxOnScreenControl_v4](fxonscreencontrol_v4.md): Defines the methods a plug-in must implement to create parameter controls.
- [FxOnScreenControlAPI_v2](fxonscreencontrolapi_v2.md): The `FxOnScreenControlAPI_v2` protocol specifies additions to the `FxOnScreenControlAPI` protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.
- [FxOnScreenControlAPI_v3](fxonscreencontrolapi_v3.md): The `FxOnScreenControlAPI_v3` protocol specifies additions to the [FxOnScreenControlAPI](fxonscreencontrolapi.md) protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.
- [FxOnScreenControlAPI_v4](fxonscreencontrolapi_v4.md): The `FxOnScreenControlAPI_v4` protocol specifies additions to the [FxOnScreenControlAPI](fxonscreencontrolapi.md) protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.
