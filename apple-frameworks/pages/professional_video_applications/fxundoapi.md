> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxundoapi](https://developer.apple.com/documentation/professional_video_applications/fxundoapi)

# FxUndoAPI (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 3.1+

An API that defines the methods that the host app implements to handle plug-in management of the host app’s undo queue.

## Declaration

```swift
protocol FxUndoAPI
```

<a id="overview"></a>

## Overview

Note that not all host apps implement this protocol.

## Topics

### Creating Undo Groups

- [startUndoGroup(\_:)](fxundoapi/startundogroup%28__%29.md): Begins a new undo group.
- [endUndoGroup()](fxundoapi/endundogroup%28%29.md): Closes the current undo group.

## See Also

### User interface

- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md): Create standard and custom user-facing parameters for your plug-in that will appear in the inspector.
- [Adding onscreen controls to plug-ins](../professional-video-applications/adding-onscreen-controls-to-plug-ins.md): Simplify user interaction by using onscreen controls for your FxPlug plug-in.
- [FxPathAPI_v3](fxpathapi_v3.md): An API that defines the methods to retrieve information about paths, shapes, and masks the user has drawn on an object.
- [FxCommandAPI](fxcommandapi.md): Commands that you can tell the host to perform.
- [FxCommandAPI_v2](fxcommandapi_v2.md): Adds functionality to move the playhead to a specific timeline time.
- [FxRemoteWindowAPI](fxremotewindowapi.md): A protocol that allows the plug-in to request that the host create a window.
- [FxRemoteWindowAPI_v2](fxremotewindowapi_v2.md): A protocol that allows the plug-in to request that the host create a window with a defined minimum and maximum size.

# FxUndoAPI (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

An API that defines the methods that the host app implements to handle plug-in management of the host app’s undo queue.

## Declaration

```objectivec
@protocol FxUndoAPI
```

<a id="overview"></a>

## Overview

Note that not all host apps implement this protocol.

## Topics

### Creating Undo Groups

- [startUndoGroup:](fxundoapi/startundogroup%28__%29.md): Begins a new undo group.
- [endUndoGroup](fxundoapi/endundogroup%28%29.md): Closes the current undo group.

## See Also

### User interface

- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md): Create standard and custom user-facing parameters for your plug-in that will appear in the inspector.
- [Adding onscreen controls to plug-ins](../professional-video-applications/adding-onscreen-controls-to-plug-ins.md): Simplify user interaction by using onscreen controls for your FxPlug plug-in.
- [FxPathAPI_v3](fxpathapi_v3.md): An API that defines the methods to retrieve information about paths, shapes, and masks the user has drawn on an object.
- [FxCommandAPI](fxcommandapi.md): Commands that you can tell the host to perform.
- [FxCommandAPI_v2](fxcommandapi_v2.md): Adds functionality to move the playhead to a specific timeline time.
- [FxRemoteWindowAPI](fxremotewindowapi.md): A protocol that allows the plug-in to request that the host create a window.
- [FxRemoteWindowAPI_v2](fxremotewindowapi_v2.md): A protocol that allows the plug-in to request that the host create a window with a defined minimum and maximum size.
