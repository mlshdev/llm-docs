> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxonscreencontrolapi_v3](https://developer.apple.com/documentation/professional_video_applications/fxonscreencontrolapi_v3)

# FxOnScreenControlAPI_v3 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 3.1+

The `FxOnScreenControlAPI_v3` protocol specifies additions to the [FxOnScreenControlAPI](fxonscreencontrolapi.md) protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.

## Declaration

```swift
protocol FxOnScreenControlAPI_v3 : FxOnScreenControlAPI_v2
```

<a id="overview"></a>

## Overview

This protocol inherits from, and expands on, the [FxOnScreenControlAPI_v2](fxonscreencontrolapi_v2.md) protocol. It can retrieve information about the scaling factor used to draw on screen controls to the screen.

## Topics

### Getting Scaling Factor

- [backingScaleFactor()](fxonscreencontrolapi_v3/backingscalefactor%28%29.md): Returns the scale factor for drawing the on-screen control to the current screen.

## Relationships

### Inherits From

- [FxOnScreenControlAPI](fxonscreencontrolapi.md)
- [FxOnScreenControlAPI_v2](fxonscreencontrolapi_v2.md)

### Inherited By

- [FxOnScreenControlAPI_v4](fxonscreencontrolapi_v4.md)

## See Also

### Onscreen Control APIs

- [FxOnScreenControl_v4](fxonscreencontrol_v4.md): Defines the methods a plug-in must implement to create parameter controls.
- [FxOnScreenControlAPI](fxonscreencontrolapi.md): The `FxOnScreenControlAPI` protocol defines the methods the host application uses to draw controls and other user interface elements directly on the canvas where the user has applied the plug-in.
- [FxOnScreenControlAPI_v2](fxonscreencontrolapi_v2.md): The `FxOnScreenControlAPI_v2` protocol specifies additions to the `FxOnScreenControlAPI` protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.
- [FxOnScreenControlAPI_v4](fxonscreencontrolapi_v4.md): The `FxOnScreenControlAPI_v4` protocol specifies additions to the [FxOnScreenControlAPI](fxonscreencontrolapi.md) protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.

# FxOnScreenControlAPI_v3 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

The `FxOnScreenControlAPI_v3` protocol specifies additions to the [FxOnScreenControlAPI](fxonscreencontrolapi.md) protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.

## Declaration

```objectivec
@protocol FxOnScreenControlAPI_v3 <FxOnScreenControlAPI_v2>
```

<a id="overview"></a>

## Overview

This protocol inherits from, and expands on, the [FxOnScreenControlAPI_v2](fxonscreencontrolapi_v2.md) protocol. It can retrieve information about the scaling factor used to draw on screen controls to the screen.

## Topics

### Getting Scaling Factor

- [backingScaleFactor](fxonscreencontrolapi_v3/backingscalefactor%28%29.md): Returns the scale factor for drawing the on-screen control to the current screen.

## Relationships

### Inherits From

- [FxOnScreenControlAPI_v2](fxonscreencontrolapi_v2.md)

### Inherited By

- [FxOnScreenControlAPI_v4](fxonscreencontrolapi_v4.md)

## See Also

### Onscreen Control APIs

- [FxOnScreenControl_v4](fxonscreencontrol_v4.md): Defines the methods a plug-in must implement to create parameter controls.
- [FxOnScreenControlAPI](fxonscreencontrolapi.md): The `FxOnScreenControlAPI` protocol defines the methods the host application uses to draw controls and other user interface elements directly on the canvas where the user has applied the plug-in.
- [FxOnScreenControlAPI_v2](fxonscreencontrolapi_v2.md): The `FxOnScreenControlAPI_v2` protocol specifies additions to the `FxOnScreenControlAPI` protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.
- [FxOnScreenControlAPI_v4](fxonscreencontrolapi_v4.md): The `FxOnScreenControlAPI_v4` protocol specifies additions to the [FxOnScreenControlAPI](fxonscreencontrolapi.md) protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.
