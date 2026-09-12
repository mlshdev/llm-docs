> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcrenderer](https://developer.apple.com/documentation/quartz/qcrenderer)

# QCRenderer (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.15)

A base class for low-level rendering.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class QCRenderer
```

<a id="overview"></a>

## Overview

A `QCRenderer` class is designed for low-level rendering of Quartz Composer compositions. This is the class to use if you want to be in charge of rendering a composition to a specific OpenGL context—either using the [NSOpenGLContext](../appkit/nsopenglcontext.md) class or a `CGLContextObj` object. `QCRenderer` also allows you to load, play, and control a composition.

To render a composition to a specific OpenGL context:

- Create an instance of `QCRenderer` using one of the initialization methods, such as [init(openGLContext:pixelFormat:file:)](qcrenderer/init%28openglcontext_pixelformat_file_%29.md).
- Render frames by calling the method [render(atTime:arguments:)](qcrenderer/render%28attime_arguments_%29.md)
- If you use double buffering in OpenGL, you must swap the OpenGL buffers.
- Release the renderer when you no longer need it.

This code snippet shows how to implement these tasks:

```objc
NSOpenGLContext*     context = [myNSOpenGLView openGLContext];
NSOpenGLPixelFormat*  format = [myNSOpenGLView pixelFormat];
NSString*               path = @"/Users/MyName/MyComposition.qtz";
QCRenderer* myRenderer;
// Create a Quartz Composer renderer.
myRenderer = [[QCRenderer alloc] initWithOpenGLContext:context
                                           pixelFormat:format
                                                  file:path];
// Render the first 10 seconds of the composition with steps of 1/25s.
for(double t = 0.0; t <= 10.0; t += 1.0/25.0)
{
  [myRenderer renderAtTime:t arguments:nil];
  [context flushBuffer]; //Required on double-buffered contexts
}
// Clean up
 [renderer release];
```

## Topics

### Creating and Initializing a Renderer

- [init(composition:colorSpace:)](qcrenderer/init%28composition_colorspace_%29.md): Deprecated. Creates a renderer object with a composition object and a color space.
- [init(openGLContext:pixelFormat:file:)](qcrenderer/init%28openglcontext_pixelformat_file_%29.md): Deprecated. Creates a renderer object with an `NSOpenGLContext` object and a composition file.
- [init(cglContext:pixelFormat:colorSpace:composition:)](qcrenderer/init%28cglcontext_pixelformat_colorspace_composition_%29-7at42.md): Deprecated. Creates a renderer object with a `CGLContextObj` object, a pixel format, a color space, and a composition object.
- [init(offScreenWith:colorSpace:composition:)](qcrenderer/init%28offscreenwith_colorspace_composition_%29.md): Deprecated. Creates an offscreen renderer of a given size with the provided color space and composition object.

### Rendering a Composition

- [render(atTime:arguments:)](qcrenderer/render%28attime_arguments_%29.md): Deprecated. Renders a frame of a composition at the specified time.

### Getting the Composition Object

- [composition()](qcrenderer/composition%28%29.md): Deprecated. Returns the composition object associated with the renderer.

### Taking Snapshot Images

- [snapshotImage()](qcrenderer/snapshotimage%28%29.md): Deprecated. Returns an `NSImage` object of the current image in the OpenGL context associated with the renderer.
- [createSnapshotImage(ofType:)](qcrenderer/createsnapshotimage%28oftype_%29.md): Deprecated. Returns the current image in the OpenGL context associated with the renderer, as an image object of the provided image type.

### Constants

- [Rendering Arguments](rendering-arguments.md): Arguments that you can pass to the [render(atTime:arguments:)](qcrenderer/render%28attime_arguments_%29.md) method.

### Initializers

- [init(CGLContext:pixelFormat:colorSpace:composition:)](qcrenderer/init%28cglcontext_pixelformat_colorspace_composition_%29-8rq7j.md): Deprecated.
- [init(offScreenWithSize:colorSpace:composition:)](qcrenderer/init%28offscreenwithsize_colorspace_composition_%29.md): Deprecated.

### Instance Methods

- [renderingTime(forTime:arguments:)](qcrenderer/renderingtime%28fortime_arguments_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
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
- [QCView](qcview.md): Deprecated. The `QCView` class is a custom `NSView` class that loads, plays, and controls Quartz Composer compositions. It is an autonomous view that is driven by an internal timer running on the main thread.

# QCRenderer (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.15)

A base class for low-level rendering.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface QCRenderer : NSObject
```

<a id="overview"></a>

## Overview

A `QCRenderer` class is designed for low-level rendering of Quartz Composer compositions. This is the class to use if you want to be in charge of rendering a composition to a specific OpenGL context—either using the [NSOpenGLContext](../appkit/nsopenglcontext.md) class or a `CGLContextObj` object. `QCRenderer` also allows you to load, play, and control a composition.

To render a composition to a specific OpenGL context:

- Create an instance of `QCRenderer` using one of the initialization methods, such as [initWithOpenGLContext:pixelFormat:file:](qcrenderer/init%28openglcontext_pixelformat_file_%29.md).
- Render frames by calling the method [renderAtTime:arguments:](qcrenderer/render%28attime_arguments_%29.md)
- If you use double buffering in OpenGL, you must swap the OpenGL buffers.
- Release the renderer when you no longer need it.

This code snippet shows how to implement these tasks:

```objc
NSOpenGLContext*     context = [myNSOpenGLView openGLContext];
NSOpenGLPixelFormat*  format = [myNSOpenGLView pixelFormat];
NSString*               path = @"/Users/MyName/MyComposition.qtz";
QCRenderer* myRenderer;
// Create a Quartz Composer renderer.
myRenderer = [[QCRenderer alloc] initWithOpenGLContext:context
                                           pixelFormat:format
                                                  file:path];
// Render the first 10 seconds of the composition with steps of 1/25s.
for(double t = 0.0; t <= 10.0; t += 1.0/25.0)
{
  [myRenderer renderAtTime:t arguments:nil];
  [context flushBuffer]; //Required on double-buffered contexts
}
// Clean up
 [renderer release];
```

## Topics

### Creating and Initializing a Renderer

- [initWithComposition:colorSpace:](qcrenderer/init%28composition_colorspace_%29.md): Deprecated. Creates a renderer object with a composition object and a color space.
- [initWithOpenGLContext:pixelFormat:file:](qcrenderer/init%28openglcontext_pixelformat_file_%29.md): Deprecated. Creates a renderer object with an `NSOpenGLContext` object and a composition file.
- [initWithCGLContext:pixelFormat:colorSpace:composition:](qcrenderer/init%28cglcontext_pixelformat_colorspace_composition_%29-7at42.md): Deprecated. Creates a renderer object with a `CGLContextObj` object, a pixel format, a color space, and a composition object.
- [initOffScreenWithSize:colorSpace:composition:](qcrenderer/init%28offscreenwith_colorspace_composition_%29.md): Deprecated. Creates an offscreen renderer of a given size with the provided color space and composition object.

### Rendering a Composition

- [renderAtTime:arguments:](qcrenderer/render%28attime_arguments_%29.md): Deprecated. Renders a frame of a composition at the specified time.

### Getting the Composition Object

- [composition](qcrenderer/composition%28%29.md): Deprecated. Returns the composition object associated with the renderer.

### Taking Snapshot Images

- [snapshotImage](qcrenderer/snapshotimage%28%29.md): Deprecated. Returns an `NSImage` object of the current image in the OpenGL context associated with the renderer.
- [createSnapshotImageOfType:](qcrenderer/createsnapshotimage%28oftype_%29.md): Deprecated. Returns the current image in the OpenGL context associated with the renderer, as an image object of the provided image type.

### Constants

- [Rendering Arguments](rendering-arguments.md): Arguments that you can pass to the [renderAtTime:arguments:](qcrenderer/render%28attime_arguments_%29.md) method.

### Instance Methods

- [renderingTimeForTime:arguments:](qcrenderer/renderingtime%28fortime_arguments_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

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
- [QCView](qcview.md): Deprecated. The `QCView` class is a custom `NSView` class that loads, plays, and controls Quartz Composer compositions. It is an autonomous view that is driven by an internal timer running on the main thread.
