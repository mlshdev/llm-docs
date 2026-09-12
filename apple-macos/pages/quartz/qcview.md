> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcview](https://developer.apple.com/documentation/quartz/qcview)

# QCView (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.15)

The `QCView` class is a custom `NSView` class that loads, plays, and controls Quartz Composer compositions. It is an autonomous view that is driven by an internal timer running on the main thread.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class QCView
```

<a id="overview"></a>

## Overview

The view can be set to render a composition automatically when it is placed onscreen. The view stops rendering when it is placed offscreen. When not rendering, the view is filled with the current erase color. The rendered composition automatically synchronizes to the vertical retrace of the monitor.

When you archive a `QCView` object, it saves the composition that’s loaded at the time the view is archived.

If you want to perform custom operations while a composition is rendering such as setting input parameters or drawing OpenGL content, you need to subclass `QCView` and implement the [render(atTime:arguments:)](qcview/render%28attime_arguments_%29.md) method.

## Topics

### Performing Custom Operations During Rendering

- [render(atTime:arguments:)](qcview/render%28attime_arguments_%29.md): Deprecated. Overrides to perform your custom operations prior to or after rendering a frame of a composition.

### Loading a Composition

- [loadComposition(fromFile:)](qcview/loadcomposition%28fromfile_%29.md): Deprecated. Loads the composition file located at the specified path.
- [load(\_:)](qcview/load%28__%29.md): Deprecated. Loads a [QCComposition](qccomposition.md) object into the view.
- [loadedComposition()](qcview/loadedcomposition%28%29.md): Deprecated. Returns the composition loaded in the view.
- [unloadComposition()](qcview/unloadcomposition%28%29.md): Deprecated. Unloads the composition from the view.

### Managing the Erase Color

- [erase()](qcview/erase%28%29.md): Deprecated. Clears the view using the current erase color.
- [eraseColor()](qcview/erasecolor%28%29.md): Deprecated. Retrieves the current color used to erase the view.
- [setEraseColor(\_:)](qcview/seterasecolor%28__%29.md): Deprecated. Sets the color used to erase the view.

### Setting and Getting Event Masks

- [eventForwardingMask()](qcview/eventforwardingmask%28%29.md): Deprecated. Retrieves the mask used to filter which types of events are forwarded from the view to the composition during rendering.
- [setEventForwardingMask(\_:)](qcview/seteventforwardingmask%28__%29.md): Deprecated. Sets the mask used to filter which types of events are forwarded from the view to the composition during rendering.

### Setting and Getting the Maximum Frame Rate

- [maxRenderingFrameRate()](qcview/maxrenderingframerate%28%29.md): Deprecated. Returns the maximum frame rate for rendering.
- [setMaxRenderingFrameRate(\_:)](qcview/setmaxrenderingframerate%28__%29.md): Deprecated. Sets the maximum rendering frame rate.

### Managing Rendering

- [startRendering()](qcview/startrendering%28%29.md): Deprecated. Starts rendering the composition that is in the view.
- [isRendering()](qcview/isrendering%28%29.md): Deprecated. Checks whether a composition is rendering in the view.
- [autostartsRendering()](qcview/autostartsrendering%28%29.md): Deprecated. Checks whether the view is set to start rendering automatically.
- [setAutostartsRendering(\_:)](qcview/setautostartsrendering%28__%29.md): Deprecated. Sets whether the composition that is in the view starts rendering automatically when the view is put on the screen.
- [stopRendering()](qcview/stoprendering%28%29.md): Deprecated. Stops rendering the composition that is in the view.
- [pauseRendering()](qcview/pauserendering%28%29.md): Deprecated. Pauses rendering in the view.
- [isPausedRendering()](qcview/ispausedrendering%28%29.md): Deprecated. Returns whether or not the rendering in the view is paused.
- [resumeRendering()](qcview/resumerendering%28%29.md): Deprecated. Resumes rendering a paused composition.

### Using Interface Builder

- [play(\_:)](qcview/play%28__%29.md): Plays or pauses a composition in a view.
- [start(\_:)](qcview/start%28__%29.md): Starts rendering a composition in a view.
- [stop(\_:)](qcview/stop%28__%29.md): Stops rendering a composition in a view.

### Taking Snapshot Images

- [snapshotImage()](qcview/snapshotimage%28%29.md): Deprecated. Returns an `NSImage` object of the current image in the view.
- [createSnapshotImage(ofType:)](qcview/createsnapshotimage%28oftype_%29.md): Deprecated. Returns the current image in the view as an image object of the provided image type.

### Working With OpenGL

- [openGLContext()](qcview/openglcontext%28%29.md): Deprecated. Returns the OpenGL context used by the view.
- [openGLPixelFormat()](qcview/openglpixelformat%28%29.md): Deprecated. Returns the OpenGL pixel format used by the view.

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](../appkit/nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](../appkit/nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](../appkit/nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](../appkit/nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](../appkit/nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](../appkit/nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](../appkit/nstouchbarprovider.md)
- [NSUserActivityRestoring](../appkit/nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](../appkit/nsuserinterfaceitemidentification.md)
- [QCCompositionRenderer](qccompositionrenderer.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [QCComposition](qccomposition.md): Deprecated. The `QCComposition` class represents a Quartz Composer composition that either:
- [QCCompositionLayer](qccompositionlayer.md): Deprecated. A layer that loads, plays, and controls Quartz Composer compositions in a Core Animation layer hierarchy.
- [QCCompositionParameterView](qccompositionparameterview.md): Deprecated. A class that allows users to edit the input parameters of a composition in real time. The composition can be rendering in any of the following objects: [QCRenderer](qcrenderer.md), [QCView](qcview.md), or [QCCompositionLayer](qccompositionlayer.md).
- [QCCompositionPickerPanel](qccompositionpickerpanel.md): Deprecated. The `QCCompositionPickerPanel` class represents a utility window that allows users to browse compositions that are in the Quartz Composer composition repository and, if supported, preview the composition. The `QCCompositionPickerPanel` class cannot be subclassed.
- [QCCompositionPickerView](qccompositionpickerview.md): Deprecated. The `QCCompositionPickerView` class allows users to browse compositions that are in the Quartz Composer composition repository, and to preview them. You can set the default input parameters for a composition preview by using the method setDefaultValue:forInputKey:.
- [QCCompositionRepository](qccompositionrepository.md): Deprecated. The `QCCompositionRepository` class represents a system-wide centralized repository of built-in and installed Quartz Composer compositions (`/Library/Compositions` and `~/Library/Compositions`). The `QCCompositionRepository` class cannot be subclassed.
- [QCPatchController](qcpatchcontroller.md): Deprecated.
- [QCPlugIn](qcplugin.md): Deprecated. A base class to subclass for writing custom patches.
- [QCPlugInViewController](qcpluginviewcontroller.md): Deprecated. The `QCPlugInViewController` class communicates (through Cocoa bindings) between a custom patch and the view used for the internal settings of the custom patch. Only custom patches that use internal settings exposed to the user need to use the `QCPlugInViewController` class.
- [QCRenderer](qcrenderer.md): Deprecated. A base class for low-level rendering.

# QCView (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.15)

The `QCView` class is a custom `NSView` class that loads, plays, and controls Quartz Composer compositions. It is an autonomous view that is driven by an internal timer running on the main thread.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface QCView : NSView
```

<a id="overview"></a>

## Overview

The view can be set to render a composition automatically when it is placed onscreen. The view stops rendering when it is placed offscreen. When not rendering, the view is filled with the current erase color. The rendered composition automatically synchronizes to the vertical retrace of the monitor.

When you archive a `QCView` object, it saves the composition that’s loaded at the time the view is archived.

If you want to perform custom operations while a composition is rendering such as setting input parameters or drawing OpenGL content, you need to subclass `QCView` and implement the [renderAtTime:arguments:](qcview/render%28attime_arguments_%29.md) method.

## Topics

### Performing Custom Operations During Rendering

- [renderAtTime:arguments:](qcview/render%28attime_arguments_%29.md): Deprecated. Overrides to perform your custom operations prior to or after rendering a frame of a composition.

### Loading a Composition

- [loadCompositionFromFile:](qcview/loadcomposition%28fromfile_%29.md): Deprecated. Loads the composition file located at the specified path.
- [loadComposition:](qcview/load%28__%29.md): Deprecated. Loads a [QCComposition](qccomposition.md) object into the view.
- [loadedComposition](qcview/loadedcomposition%28%29.md): Deprecated. Returns the composition loaded in the view.
- [unloadComposition](qcview/unloadcomposition%28%29.md): Deprecated. Unloads the composition from the view.

### Managing the Erase Color

- [erase](qcview/erase%28%29.md): Deprecated. Clears the view using the current erase color.
- [eraseColor](qcview/erasecolor%28%29.md): Deprecated. Retrieves the current color used to erase the view.
- [setEraseColor:](qcview/seterasecolor%28__%29.md): Deprecated. Sets the color used to erase the view.

### Setting and Getting Event Masks

- [eventForwardingMask](qcview/eventforwardingmask%28%29.md): Deprecated. Retrieves the mask used to filter which types of events are forwarded from the view to the composition during rendering.
- [setEventForwardingMask:](qcview/seteventforwardingmask%28__%29.md): Deprecated. Sets the mask used to filter which types of events are forwarded from the view to the composition during rendering.

### Setting and Getting the Maximum Frame Rate

- [maxRenderingFrameRate](qcview/maxrenderingframerate%28%29.md): Deprecated. Returns the maximum frame rate for rendering.
- [setMaxRenderingFrameRate:](qcview/setmaxrenderingframerate%28__%29.md): Deprecated. Sets the maximum rendering frame rate.

### Managing Rendering

- [startRendering](qcview/startrendering%28%29.md): Deprecated. Starts rendering the composition that is in the view.
- [isRendering](qcview/isrendering%28%29.md): Deprecated. Checks whether a composition is rendering in the view.
- [autostartsRendering](qcview/autostartsrendering%28%29.md): Deprecated. Checks whether the view is set to start rendering automatically.
- [setAutostartsRendering:](qcview/setautostartsrendering%28__%29.md): Deprecated. Sets whether the composition that is in the view starts rendering automatically when the view is put on the screen.
- [stopRendering](qcview/stoprendering%28%29.md): Deprecated. Stops rendering the composition that is in the view.
- [pauseRendering](qcview/pauserendering%28%29.md): Deprecated. Pauses rendering in the view.
- [isPausedRendering](qcview/ispausedrendering%28%29.md): Deprecated. Returns whether or not the rendering in the view is paused.
- [resumeRendering](qcview/resumerendering%28%29.md): Deprecated. Resumes rendering a paused composition.

### Using Interface Builder

- [play:](qcview/play%28__%29.md): Plays or pauses a composition in a view.
- [start:](qcview/start%28__%29.md): Starts rendering a composition in a view.
- [stop:](qcview/stop%28__%29.md): Stops rendering a composition in a view.

### Taking Snapshot Images

- [snapshotImage](qcview/snapshotimage%28%29.md): Deprecated. Returns an `NSImage` object of the current image in the view.
- [createSnapshotImageOfType:](qcview/createsnapshotimage%28oftype_%29.md): Deprecated. Returns the current image in the view as an image object of the provided image type.

### Working With OpenGL

- [openGLContext](qcview/openglcontext%28%29.md): Deprecated. Returns the OpenGL context used by the view.
- [openGLPixelFormat](qcview/openglpixelformat%28%29.md): Deprecated. Returns the OpenGL pixel format used by the view.

### Notifications

- [QCViewDidStartRenderingNotification](qcviewdidstartrenderingnotification.md): Deprecated. Posted when the view starts rendering.
- [QCViewDidStopRenderingNotification](qcviewdidstoprenderingnotification.md): Deprecated. Posted when the view stops rendering.

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

### Conforms To

- [QCCompositionRenderer](qccompositionrenderer.md)

## See Also

### Classes

- [QCComposition](qccomposition.md): Deprecated. The `QCComposition` class represents a Quartz Composer composition that either:
- [QCCompositionLayer](qccompositionlayer.md): Deprecated. A layer that loads, plays, and controls Quartz Composer compositions in a Core Animation layer hierarchy.
- [QCCompositionParameterView](qccompositionparameterview.md): Deprecated. A class that allows users to edit the input parameters of a composition in real time. The composition can be rendering in any of the following objects: [QCRenderer](qcrenderer.md), [QCView](qcview.md), or [QCCompositionLayer](qccompositionlayer.md).
- [QCCompositionPickerPanel](qccompositionpickerpanel.md): Deprecated. The `QCCompositionPickerPanel` class represents a utility window that allows users to browse compositions that are in the Quartz Composer composition repository and, if supported, preview the composition. The `QCCompositionPickerPanel` class cannot be subclassed.
- [QCCompositionPickerView](qccompositionpickerview.md): Deprecated. The `QCCompositionPickerView` class allows users to browse compositions that are in the Quartz Composer composition repository, and to preview them. You can set the default input parameters for a composition preview by using the method setDefaultValue:forInputKey:.
- [QCCompositionRepository](qccompositionrepository.md): Deprecated. The `QCCompositionRepository` class represents a system-wide centralized repository of built-in and installed Quartz Composer compositions (`/Library/Compositions` and `~/Library/Compositions`). The `QCCompositionRepository` class cannot be subclassed.
- [QCPatchController](qcpatchcontroller.md): Deprecated.
- [QCPlugIn](qcplugin.md): Deprecated. A base class to subclass for writing custom patches.
- [QCPlugInViewController](qcpluginviewcontroller.md): Deprecated. The `QCPlugInViewController` class communicates (through Cocoa bindings) between a custom patch and the view used for the internal settings of the custom patch. Only custom patches that use internal settings exposed to the user need to use the `QCPlugInViewController` class.
- [QCRenderer](qcrenderer.md): Deprecated. A base class for low-level rendering.
