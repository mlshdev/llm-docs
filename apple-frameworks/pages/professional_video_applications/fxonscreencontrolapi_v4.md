> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxonscreencontrolapi_v4](https://developer.apple.com/documentation/professional_video_applications/fxonscreencontrolapi_v4)

# FxOnScreenControlAPI_v4 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 3.1.1+

The `FxOnScreenControlAPI_v4` protocol specifies additions to the [FxOnScreenControlAPI](fxonscreencontrolapi.md) protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.

## Declaration

```swift
protocol FxOnScreenControlAPI_v4 : FxOnScreenControlAPI_v3
```

## Mentioned In

- [Adding onscreen controls to plug-ins](../professional-video-applications/adding-onscreen-controls-to-plug-ins.md)

<a id="overview"></a>

## Overview

This protocol inherits from, and expands on, the `FxOnScreenControlAPI_v3` protocol. It allows an FxPlug plug-in to set the cursor the users sees in the canvas.

## Topics

### Setting Canvas Cursor

- [setCursor(\_:)](fxonscreencontrolapi_v4/setcursor%28__%29.md): Sets the cursor the user sees in the canvas.

## Relationships

### Inherits From

- [FxOnScreenControlAPI](fxonscreencontrolapi.md)
- [FxOnScreenControlAPI_v2](fxonscreencontrolapi_v2.md)
- [FxOnScreenControlAPI_v3](fxonscreencontrolapi_v3.md)

## See Also

### Onscreen Control APIs

- [FxOnScreenControl_v4](fxonscreencontrol_v4.md): Defines the methods a plug-in must implement to create parameter controls.
- [FxOnScreenControlAPI](fxonscreencontrolapi.md): The `FxOnScreenControlAPI` protocol defines the methods the host application uses to draw controls and other user interface elements directly on the canvas where the user has applied the plug-in.
- [FxOnScreenControlAPI_v2](fxonscreencontrolapi_v2.md): The `FxOnScreenControlAPI_v2` protocol specifies additions to the `FxOnScreenControlAPI` protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.
- [FxOnScreenControlAPI_v3](fxonscreencontrolapi_v3.md): The `FxOnScreenControlAPI_v3` protocol specifies additions to the [FxOnScreenControlAPI](fxonscreencontrolapi.md) protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.

# FxOnScreenControlAPI_v4 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

The `FxOnScreenControlAPI_v4` protocol specifies additions to the [FxOnScreenControlAPI](fxonscreencontrolapi.md) protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.

## Declaration

```objectivec
@protocol FxOnScreenControlAPI_v4 <FxOnScreenControlAPI_v3>
```

## Mentioned In

- [Adding onscreen controls to plug-ins](../professional-video-applications/adding-onscreen-controls-to-plug-ins.md)

<a id="overview"></a>

## Overview

This protocol inherits from, and expands on, the `FxOnScreenControlAPI_v3` protocol. It allows an FxPlug plug-in to set the cursor the users sees in the canvas.

## Topics

### Setting Canvas Cursor

- [setCursor:](fxonscreencontrolapi_v4/setcursor%28__%29.md): Sets the cursor the user sees in the canvas.

## Relationships

### Inherits From

- [FxOnScreenControlAPI_v3](fxonscreencontrolapi_v3.md)

## See Also

### Onscreen Control APIs

- [FxOnScreenControl_v4](fxonscreencontrol_v4.md): Defines the methods a plug-in must implement to create parameter controls.
- [FxOnScreenControlAPI](fxonscreencontrolapi.md): The `FxOnScreenControlAPI` protocol defines the methods the host application uses to draw controls and other user interface elements directly on the canvas where the user has applied the plug-in.
- [FxOnScreenControlAPI_v2](fxonscreencontrolapi_v2.md): The `FxOnScreenControlAPI_v2` protocol specifies additions to the `FxOnScreenControlAPI` protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.
- [FxOnScreenControlAPI_v3](fxonscreencontrolapi_v3.md): The `FxOnScreenControlAPI_v3` protocol specifies additions to the [FxOnScreenControlAPI](fxonscreencontrolapi.md) protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.
