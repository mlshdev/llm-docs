> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxpathapi_v3](https://developer.apple.com/documentation/professional_video_applications/fxpathapi_v3)

# FxPathAPI_v3 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.0+

An API that defines the methods to retrieve information about paths, shapes, and masks the user has drawn on an object.

## Declaration

```swift
protocol FxPathAPI_v3
```

<a id="overview"></a>

## Overview

This API is used to get information about a path that the user has drawn on an object in the canvas. You can get the number of paths applied to the object, and then enumerate through them, or pick a specific one. You can use this API to retrieve the control points along the path and use that information to guide the rendering of your plug-in.

> **Note**

>  This API does not inherit from the `FxPathAPI`. It is a new API for FxPlug 4 that uses [CMTime](../coremedia/cmtime.md) and handles `NSErrors` consistently with other familiar APIs.

## Topics

### Getting Path Information

- [numberOfPaths(at:)](fxpathapi_v3/numberofpaths%28at_%29.md): Provides the number of paths on the object to which your filter is applied, or on your generator.
- [pathID(\_:for:)](fxpathapi_v3/pathid%28__for_%29.md): Gets the unique ID of the path at the index requested.
- [name(\_:ofPath:)](fxpathapi_v3/name%28__ofpath_%29.md): Provides the name the user has entered for the path with the given ID.
- [isPath(\_:open:at:)](fxpathapi_v3/ispath%28__open_at_%29.md): Tells whether the path is opened or closed.
- [isPath(\_:inverted:at:)](fxpathapi_v3/ispath%28__inverted_at_%29.md): Tells whether the path is inverted or not.
- [style(\_:ofPath:)](fxpathapi_v3/style%28__ofpath_%29.md): Provides the style of the path — linear, bezier, or b-spline.
- [length(\_:ofPath:at:)](fxpathapi_v3/length%28__ofpath_at_%29.md): Provides you the length of the entire path.
- [length(\_:ofSegment:ofPath:at:)](fxpathapi_v3/length%28__ofsegment_ofpath_at_%29.md): Provides the length of one segment of the entire path.
- [number(ofVertices:inPath:at:)](fxpathapi_v3/number%28ofvertices_inpath_at_%29.md): Provides the number of vertices in the given path at the given time.
- [vertex(\_:at:ofPath:at:)](fxpathapi_v3/vertex%28__at_ofpath_at_%29.md): Provides information about a single vertex on the path at the given time.
- [point(\_:atPercentageOfDistance:alongPath:at:)](fxpathapi_v3/point%28__atpercentageofdistance_alongpath_at_%29.md): Provides a 2D point that contains the location of the point on the path, at a distance along the path’s length equal to the value of `percentDist`.
- [point(\_:atPercentageOfParameter:alongPath:at:)](fxpathapi_v3/point%28__atpercentageofparameter_alongpath_at_%29.md): Provides a 2D point that contains the location of the point on the path, at a distance along the path’s parametric distance equal to the percent value of `percentParameter`.
- [blendMode(\_:ofPath:)](fxpathapi_v3/blendmode%28__ofpath_%29.md): Gets the blending mode for a given path.
- [pathGeometryInfo(\_:forPath:at:)](fxpathapi_v3/pathgeometryinfo%28__forpath_at_%29.md): Gets geometry information about a given path.

### Setting Path Information

- [setPath(\_:toColor:)](fxpathapi_v3/setpath%28__tocolor_%29.md): Sets the color the host app uses to draw the path with the given ID.

### Structuring Path Information

- [FxPathGeometryInfo](fxpathgeometryinfo.md): A structure that defines the geometry information of the path.
- [FxVertex](fxvertex.md): The properties of one vertex in a path.

### Constants

- [FxPathBlendMode](fxpathblendmode.md): The type of blending the user selects for the mask that a particular path describes.
- [FxPathColor](fxpathcolor.md): The colors that the host app uses to display a path.
- [FxPathID](fxpathid.md): The unique identifier for a path.
- [FxPathStyle](fxpathstyle.md): The style of the path, which is linear, bezier, or b-spline.

## See Also

### User interface

- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md): Create standard and custom user-facing parameters for your plug-in that will appear in the inspector.
- [Adding onscreen controls to plug-ins](../professional-video-applications/adding-onscreen-controls-to-plug-ins.md): Simplify user interaction by using onscreen controls for your FxPlug plug-in.
- [FxUndoAPI](fxundoapi.md): An API that defines the methods that the host app implements to handle plug-in management of the host app’s undo queue.
- [FxCommandAPI](fxcommandapi.md): Commands that you can tell the host to perform.
- [FxCommandAPI_v2](fxcommandapi_v2.md): Adds functionality to move the playhead to a specific timeline time.
- [FxRemoteWindowAPI](fxremotewindowapi.md): A protocol that allows the plug-in to request that the host create a window.
- [FxRemoteWindowAPI_v2](fxremotewindowapi_v2.md): A protocol that allows the plug-in to request that the host create a window with a defined minimum and maximum size.

# FxPathAPI_v3 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

An API that defines the methods to retrieve information about paths, shapes, and masks the user has drawn on an object.

## Declaration

```objectivec
@protocol FxPathAPI_v3
```

<a id="overview"></a>

## Overview

This API is used to get information about a path that the user has drawn on an object in the canvas. You can get the number of paths applied to the object, and then enumerate through them, or pick a specific one. You can use this API to retrieve the control points along the path and use that information to guide the rendering of your plug-in.

> **Note**

>  This API does not inherit from the `FxPathAPI`. It is a new API for FxPlug 4 that uses [CMTime](../coremedia/cmtime.md) and handles `NSErrors` consistently with other familiar APIs.

## Topics

### Getting Path Information

- [numberOfPathsAtTime:](fxpathapi_v3/numberofpaths%28at_%29.md): Provides the number of paths on the object to which your filter is applied, or on your generator.
- [pathID:forIndex:error:](fxpathapi_v3/pathid%28__for_%29.md): Gets the unique ID of the path at the index requested.
- [name:ofPath:error:](fxpathapi_v3/name%28__ofpath_%29.md): Provides the name the user has entered for the path with the given ID.
- [isPath:open:atTime:error:](fxpathapi_v3/ispath%28__open_at_%29.md): Tells whether the path is opened or closed.
- [isPath:inverted:atTime:error:](fxpathapi_v3/ispath%28__inverted_at_%29.md): Tells whether the path is inverted or not.
- [style:ofPath:error:](fxpathapi_v3/style%28__ofpath_%29.md): Provides the style of the path — linear, bezier, or b-spline.
- [length:ofPath:atTime:error:](fxpathapi_v3/length%28__ofpath_at_%29.md): Provides you the length of the entire path.
- [length:ofSegment:ofPath:atTime:error:](fxpathapi_v3/length%28__ofsegment_ofpath_at_%29.md): Provides the length of one segment of the entire path.
- [numberOfVertices:inPath:atTime:error:](fxpathapi_v3/number%28ofvertices_inpath_at_%29.md): Provides the number of vertices in the given path at the given time.
- [vertex:atIndex:ofPath:atTime:error:](fxpathapi_v3/vertex%28__at_ofpath_at_%29.md): Provides information about a single vertex on the path at the given time.
- [point:atPercentageOfDistance:alongPath:atTime:error:](fxpathapi_v3/point%28__atpercentageofdistance_alongpath_at_%29.md): Provides a 2D point that contains the location of the point on the path, at a distance along the path’s length equal to the value of `percentDist`.
- [point:atPercentageOfParameter:alongPath:atTime:error:](fxpathapi_v3/point%28__atpercentageofparameter_alongpath_at_%29.md): Provides a 2D point that contains the location of the point on the path, at a distance along the path’s parametric distance equal to the percent value of `percentParameter`.
- [blendMode:ofPath:error:](fxpathapi_v3/blendmode%28__ofpath_%29.md): Gets the blending mode for a given path.
- [pathGeometryInfo:forPath:atTime:error:](fxpathapi_v3/pathgeometryinfo%28__forpath_at_%29.md): Gets geometry information about a given path.

### Setting Path Information

- [setPath:toColor:error:](fxpathapi_v3/setpath%28__tocolor_%29.md): Sets the color the host app uses to draw the path with the given ID.

### Structuring Path Information

- [FxPathGeometryInfo](fxpathgeometryinfo.md): A structure that defines the geometry information of the path.
- [FxVertex](fxvertex.md): The properties of one vertex in a path.

### Constants

- [FxPathBlendMode](fxpathblendmode.md): The type of blending the user selects for the mask that a particular path describes.
- [FxPathColor](fxpathcolor.md): The colors that the host app uses to display a path.
- [FxPathID](fxpathid.md): The unique identifier for a path.
- [FxPathStyle](fxpathstyle.md): The style of the path, which is linear, bezier, or b-spline.

## See Also

### User interface

- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md): Create standard and custom user-facing parameters for your plug-in that will appear in the inspector.
- [Adding onscreen controls to plug-ins](../professional-video-applications/adding-onscreen-controls-to-plug-ins.md): Simplify user interaction by using onscreen controls for your FxPlug plug-in.
- [FxUndoAPI](fxundoapi.md): An API that defines the methods that the host app implements to handle plug-in management of the host app’s undo queue.
- [FxCommandAPI](fxcommandapi.md): Commands that you can tell the host to perform.
- [FxCommandAPI_v2](fxcommandapi_v2.md): Adds functionality to move the playhead to a specific timeline time.
- [FxRemoteWindowAPI](fxremotewindowapi.md): A protocol that allows the plug-in to request that the host create a window.
- [FxRemoteWindowAPI_v2](fxremotewindowapi_v2.md): A protocol that allows the plug-in to request that the host create a window with a defined minimum and maximum size.
