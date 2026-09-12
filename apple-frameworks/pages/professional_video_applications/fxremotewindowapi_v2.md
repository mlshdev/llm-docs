> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxremotewindowapi_v2](https://developer.apple.com/documentation/professional_video_applications/fxremotewindowapi_v2)

# FxRemoteWindowAPI_v2 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.2.3+

A protocol that allows the plug-in to request that the host create a window with a defined minimum and maximum size.

## Declaration

```swift
protocol FxRemoteWindowAPI_v2 : FxRemoteWindowAPI
```

## Topics

### Creating a Window

- [remoteWindow(withMinimumSize:maximumSize:reply:)](fxremotewindowapi_v2/remotewindow%28withminimumsize_maximumsize_reply_%29.md): Requests the host application to create a window with a minimum and maximum size that displays a custom UI.

## Relationships

### Inherits From

- [FxRemoteWindowAPI](fxremotewindowapi.md)

## See Also

### User interface

- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md): Create standard and custom user-facing parameters for your plug-in that will appear in the inspector.
- [Adding onscreen controls to plug-ins](../professional-video-applications/adding-onscreen-controls-to-plug-ins.md): Simplify user interaction by using onscreen controls for your FxPlug plug-in.
- [FxPathAPI_v3](fxpathapi_v3.md): An API that defines the methods to retrieve information about paths, shapes, and masks the user has drawn on an object.
- [FxUndoAPI](fxundoapi.md): An API that defines the methods that the host app implements to handle plug-in management of the host app’s undo queue.
- [FxCommandAPI](fxcommandapi.md): Commands that you can tell the host to perform.
- [FxCommandAPI_v2](fxcommandapi_v2.md): Adds functionality to move the playhead to a specific timeline time.
- [FxRemoteWindowAPI](fxremotewindowapi.md): A protocol that allows the plug-in to request that the host create a window.

# FxRemoteWindowAPI_v2 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

A protocol that allows the plug-in to request that the host create a window with a defined minimum and maximum size.

## Declaration

```objectivec
@protocol FxRemoteWindowAPI_v2 <FxRemoteWindowAPI>
```

## Topics

### Creating a Window

- [remoteWindowWithMinimumSize:maximumSize:reply:](fxremotewindowapi_v2/remotewindow%28withminimumsize_maximumsize_reply_%29.md): Requests the host application to create a window with a minimum and maximum size that displays a custom UI.

## Relationships

### Inherits From

- [FxRemoteWindowAPI](fxremotewindowapi.md)

## See Also

### User interface

- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md): Create standard and custom user-facing parameters for your plug-in that will appear in the inspector.
- [Adding onscreen controls to plug-ins](../professional-video-applications/adding-onscreen-controls-to-plug-ins.md): Simplify user interaction by using onscreen controls for your FxPlug plug-in.
- [FxPathAPI_v3](fxpathapi_v3.md): An API that defines the methods to retrieve information about paths, shapes, and masks the user has drawn on an object.
- [FxUndoAPI](fxundoapi.md): An API that defines the methods that the host app implements to handle plug-in management of the host app’s undo queue.
- [FxCommandAPI](fxcommandapi.md): Commands that you can tell the host to perform.
- [FxCommandAPI_v2](fxcommandapi_v2.md): Adds functionality to move the playhead to a specific timeline time.
- [FxRemoteWindowAPI](fxremotewindowapi.md): A protocol that allows the plug-in to request that the host create a window.
