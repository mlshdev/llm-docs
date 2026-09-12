> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxremotewindowapi](https://developer.apple.com/documentation/professional_video_applications/fxremotewindowapi)

# FxRemoteWindowAPI (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.2.1+

A protocol that allows the plug-in to request that the host create a window.

## Declaration

```swift
protocol FxRemoteWindowAPI
```

## Topics

### Creating a Window

- [remoteWindow(of:reply:)](fxremotewindowapi/remotewindow%28of_reply_%29.md): Requests that the host application creates a window to display custom UI.

## Relationships

### Inherited By

- [FxRemoteWindowAPI_v2](fxremotewindowapi_v2.md)

## See Also

### User interface

- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md): Create standard and custom user-facing parameters for your plug-in that will appear in the inspector.
- [Adding onscreen controls to plug-ins](../professional-video-applications/adding-onscreen-controls-to-plug-ins.md): Simplify user interaction by using onscreen controls for your FxPlug plug-in.
- [FxPathAPI_v3](fxpathapi_v3.md): An API that defines the methods to retrieve information about paths, shapes, and masks the user has drawn on an object.
- [FxUndoAPI](fxundoapi.md): An API that defines the methods that the host app implements to handle plug-in management of the host app’s undo queue.
- [FxCommandAPI](fxcommandapi.md): Commands that you can tell the host to perform.
- [FxCommandAPI_v2](fxcommandapi_v2.md): Adds functionality to move the playhead to a specific timeline time.
- [FxRemoteWindowAPI_v2](fxremotewindowapi_v2.md): A protocol that allows the plug-in to request that the host create a window with a defined minimum and maximum size.

# FxRemoteWindowAPI (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

A protocol that allows the plug-in to request that the host create a window.

## Declaration

```objectivec
@protocol FxRemoteWindowAPI
```

## Topics

### Creating a Window

- [remoteWindowOfSize:reply:](fxremotewindowapi/remotewindow%28of_reply_%29.md): Requests that the host application creates a window to display custom UI.

## Relationships

### Inherited By

- [FxRemoteWindowAPI_v2](fxremotewindowapi_v2.md)

## See Also

### User interface

- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md): Create standard and custom user-facing parameters for your plug-in that will appear in the inspector.
- [Adding onscreen controls to plug-ins](../professional-video-applications/adding-onscreen-controls-to-plug-ins.md): Simplify user interaction by using onscreen controls for your FxPlug plug-in.
- [FxPathAPI_v3](fxpathapi_v3.md): An API that defines the methods to retrieve information about paths, shapes, and masks the user has drawn on an object.
- [FxUndoAPI](fxundoapi.md): An API that defines the methods that the host app implements to handle plug-in management of the host app’s undo queue.
- [FxCommandAPI](fxcommandapi.md): Commands that you can tell the host to perform.
- [FxCommandAPI_v2](fxcommandapi_v2.md): Adds functionality to move the playhead to a specific timeline time.
- [FxRemoteWindowAPI_v2](fxremotewindowapi_v2.md): A protocol that allows the plug-in to request that the host create a window with a defined minimum and maximum size.
