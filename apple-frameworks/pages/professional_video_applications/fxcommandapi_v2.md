> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxcommandapi_v2](https://developer.apple.com/documentation/professional_video_applications/fxcommandapi_v2)

# FxCommandAPI_v2 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.2+

Adds functionality to move the playhead to a specific timeline time.

## Declaration

```swift
protocol FxCommandAPI_v2 : FxCommandAPI
```

## Topics

### Moving the Playhead

- [movePlayhead(to:)](fxcommandapi_v2/moveplayhead%28to_%29.md): Moves the playhead to the desired time.

## Relationships

### Inherits From

- [FxCommandAPI](fxcommandapi.md)

## See Also

### User interface

- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md): Create standard and custom user-facing parameters for your plug-in that will appear in the inspector.
- [Adding onscreen controls to plug-ins](../professional-video-applications/adding-onscreen-controls-to-plug-ins.md): Simplify user interaction by using onscreen controls for your FxPlug plug-in.
- [FxPathAPI_v3](fxpathapi_v3.md): An API that defines the methods to retrieve information about paths, shapes, and masks the user has drawn on an object.
- [FxUndoAPI](fxundoapi.md): An API that defines the methods that the host app implements to handle plug-in management of the host app’s undo queue.
- [FxCommandAPI](fxcommandapi.md): Commands that you can tell the host to perform.
- [FxRemoteWindowAPI](fxremotewindowapi.md): A protocol that allows the plug-in to request that the host create a window.
- [FxRemoteWindowAPI_v2](fxremotewindowapi_v2.md): A protocol that allows the plug-in to request that the host create a window with a defined minimum and maximum size.

# FxCommandAPI_v2 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

Adds functionality to move the playhead to a specific timeline time.

## Declaration

```objectivec
@protocol FxCommandAPI_v2 <FxCommandAPI>
```

## Topics

### Moving the Playhead

- [movePlayheadToTime:error:](fxcommandapi_v2/moveplayhead%28to_%29.md): Moves the playhead to the desired time.

## Relationships

### Inherits From

- [FxCommandAPI](fxcommandapi.md)

## See Also

### User interface

- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md): Create standard and custom user-facing parameters for your plug-in that will appear in the inspector.
- [Adding onscreen controls to plug-ins](../professional-video-applications/adding-onscreen-controls-to-plug-ins.md): Simplify user interaction by using onscreen controls for your FxPlug plug-in.
- [FxPathAPI_v3](fxpathapi_v3.md): An API that defines the methods to retrieve information about paths, shapes, and masks the user has drawn on an object.
- [FxUndoAPI](fxundoapi.md): An API that defines the methods that the host app implements to handle plug-in management of the host app’s undo queue.
- [FxCommandAPI](fxcommandapi.md): Commands that you can tell the host to perform.
- [FxRemoteWindowAPI](fxremotewindowapi.md): A protocol that allows the plug-in to request that the host create a window.
- [FxRemoteWindowAPI_v2](fxremotewindowapi_v2.md): A protocol that allows the plug-in to request that the host create a window with a defined minimum and maximum size.
