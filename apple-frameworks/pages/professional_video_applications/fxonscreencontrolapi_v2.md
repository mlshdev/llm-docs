> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxonscreencontrolapi_v2](https://developer.apple.com/documentation/professional_video_applications/fxonscreencontrolapi_v2)

# FxOnScreenControlAPI_v2 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 3.1+

The `FxOnScreenControlAPI_v2` protocol specifies additions to the `FxOnScreenControlAPI` protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.

## Declaration

```swift
protocol FxOnScreenControlAPI_v2 : FxOnScreenControlAPI
```

<a id="overview"></a>

## Overview

This protocol inherits from, and expands on, the `FxOnScreenControlAPI` protocol It can retrieve information about the canvas, such as its pixel aspect ratio or its zoom level so that a plug-in can draw its controls at the appropriate scale. As with the `FxOnScreenControlAPI` protocol, this aids in allowing the user to directly manipulate a plug-in’s parameters.

## Topics

### Canvas Information

- [canvasZoom()](fxonscreencontrolapi_v2/canvaszoom%28%29.md): Returns the zoom factor the user has set the canvas
- [canvasPixelAspectRatio()](fxonscreencontrolapi_v2/canvaspixelaspectratio%28%29.md): Returns the pixel aspect ratio of the canvas.
- [pixelAspectRatio()](fxonscreencontrolapi_v2/pixelaspectratio%28%29.md): Returns the pixel aspect ratio for which the on-screen control applies.
- [objectBounds()](fxonscreencontrolapi_v2/objectbounds%28%29.md): Returns the bounds of the object that the on-screen control applies to.
- [objectToScreenTransform()](fxonscreencontrolapi_v2/objecttoscreentransform%28%29.md): Returns a 4x4 matrix describing the transformation from object normalized space

### Input and Output Item Geometry

- [objectWidth(\_:height:pixelAspectRatio:)](fxonscreencontrolapi_v2/objectwidth%28__height_pixelaspectratio_%29.md): Returns the width, height, and pixel aspect ratio of the object for which the on-screen control is applied.
- [inputWidth(\_:height:pixelAspectRatio:)](fxonscreencontrolapi_v2/inputwidth%28__height_pixelaspectratio_%29.md): Returns the width, height, and pixel aspect ratio of the input to the filter or transition for which the on-screen control is applied.
- [inputBounds()](fxonscreencontrolapi_v2/inputbounds%28%29.md): Returns the bounds of the input to the filter or transition.

## Relationships

### Inherits From

- [FxOnScreenControlAPI](fxonscreencontrolapi.md)

### Inherited By

- [FxOnScreenControlAPI_v3](fxonscreencontrolapi_v3.md)
- [FxOnScreenControlAPI_v4](fxonscreencontrolapi_v4.md)

## See Also

### Onscreen Control APIs

- [FxOnScreenControl_v4](fxonscreencontrol_v4.md): Defines the methods a plug-in must implement to create parameter controls.
- [FxOnScreenControlAPI](fxonscreencontrolapi.md): The `FxOnScreenControlAPI` protocol defines the methods the host application uses to draw controls and other user interface elements directly on the canvas where the user has applied the plug-in.
- [FxOnScreenControlAPI_v3](fxonscreencontrolapi_v3.md): The `FxOnScreenControlAPI_v3` protocol specifies additions to the [FxOnScreenControlAPI](fxonscreencontrolapi.md) protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.
- [FxOnScreenControlAPI_v4](fxonscreencontrolapi_v4.md): The `FxOnScreenControlAPI_v4` protocol specifies additions to the [FxOnScreenControlAPI](fxonscreencontrolapi.md) protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.

# FxOnScreenControlAPI_v2 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

The `FxOnScreenControlAPI_v2` protocol specifies additions to the `FxOnScreenControlAPI` protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.

## Declaration

```objectivec
@protocol FxOnScreenControlAPI_v2 <FxOnScreenControlAPI>
```

<a id="overview"></a>

## Overview

This protocol inherits from, and expands on, the `FxOnScreenControlAPI` protocol It can retrieve information about the canvas, such as its pixel aspect ratio or its zoom level so that a plug-in can draw its controls at the appropriate scale. As with the `FxOnScreenControlAPI` protocol, this aids in allowing the user to directly manipulate a plug-in’s parameters.

## Topics

### Canvas Information

- [canvasZoom](fxonscreencontrolapi_v2/canvaszoom%28%29.md): Returns the zoom factor the user has set the canvas
- [canvasPixelAspectRatio](fxonscreencontrolapi_v2/canvaspixelaspectratio%28%29.md): Returns the pixel aspect ratio of the canvas.
- [pixelAspectRatio](fxonscreencontrolapi_v2/pixelaspectratio%28%29.md): Returns the pixel aspect ratio for which the on-screen control applies.
- [objectBounds](fxonscreencontrolapi_v2/objectbounds%28%29.md): Returns the bounds of the object that the on-screen control applies to.
- [objectToScreenTransform](fxonscreencontrolapi_v2/objecttoscreentransform%28%29.md): Returns a 4x4 matrix describing the transformation from object normalized space

### Input and Output Item Geometry

- [objectWidth:height:pixelAspectRatio:](fxonscreencontrolapi_v2/objectwidth%28__height_pixelaspectratio_%29.md): Returns the width, height, and pixel aspect ratio of the object for which the on-screen control is applied.
- [inputWidth:height:pixelAspectRatio:](fxonscreencontrolapi_v2/inputwidth%28__height_pixelaspectratio_%29.md): Returns the width, height, and pixel aspect ratio of the input to the filter or transition for which the on-screen control is applied.
- [inputBounds](fxonscreencontrolapi_v2/inputbounds%28%29.md): Returns the bounds of the input to the filter or transition.

## Relationships

### Inherits From

- [FxOnScreenControlAPI](fxonscreencontrolapi.md)

### Inherited By

- [FxOnScreenControlAPI_v3](fxonscreencontrolapi_v3.md)

## See Also

### Onscreen Control APIs

- [FxOnScreenControl_v4](fxonscreencontrol_v4.md): Defines the methods a plug-in must implement to create parameter controls.
- [FxOnScreenControlAPI](fxonscreencontrolapi.md): The `FxOnScreenControlAPI` protocol defines the methods the host application uses to draw controls and other user interface elements directly on the canvas where the user has applied the plug-in.
- [FxOnScreenControlAPI_v3](fxonscreencontrolapi_v3.md): The `FxOnScreenControlAPI_v3` protocol specifies additions to the [FxOnScreenControlAPI](fxonscreencontrolapi.md) protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.
- [FxOnScreenControlAPI_v4](fxonscreencontrolapi_v4.md): The `FxOnScreenControlAPI_v4` protocol specifies additions to the [FxOnScreenControlAPI](fxonscreencontrolapi.md) protocol which defines the methods the host application provides to manage conversions between various on-screen coordinate spaces.
