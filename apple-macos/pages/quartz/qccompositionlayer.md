> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionlayer](https://developer.apple.com/documentation/quartz/qccompositionlayer)

# QCCompositionLayer (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.5+ (deprecated in 10.14)

A layer that loads, plays, and controls Quartz Composer compositions in a Core Animation layer hierarchy.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
class QCCompositionLayer
```

<a id="overview"></a>

## Overview

The composition tracks the Core Animation layer time and is rendered directly at the current dimensions of the [QCCompositionLayer](qccompositionlayer.md) object.

An archived `QCCompositionLayer` object saves the composition that’s loaded at the time the layer is archived. It detects layer usage and pauses or resumes the composition appropriately. A `QCCompositionLayer` object starts rendering the composition automatically when the layer is placed in a visible layer hierarchy. The layer stops rendering when it is hidden or removed from the visible layer hierarchy.

You can pass data to the input ports, or retrieve data from the output ports, of the root patch of a composition by accessing the `patch` attribute of the `QCCompositionLayer` instance using methods provided by the [QCCompositionRenderer](qccompositionrenderer.md) protocol.

> **Note**

>  You must not modify the `asynchronous` property of the superclass [CAOpenGLLayer](https://developer.apple.com/documentation/quartzcore/caopengllayer).

## Topics

### Creating a Composition Layer

- [init(file:)](qccompositionlayer/init%28file_%29.md): Deprecated. Initializes and returns a composition layer using the Quartz Composer composition in the specified file.
- [init(composition:)](qccompositionlayer/init%28composition_%29.md): Deprecated. Initializes and returns a composition layer using the provided Quartz Composer composition.

### Getting the Composition

- [composition()](qccompositionlayer/composition%28%29.md): Deprecated. Returns the composition associated with the layer.

## Relationships

### Inherits From

- [CAOpenGLLayer](https://developer.apple.com/documentation/quartzcore/caopengllayer)

### Conforms To

- [CAMediaTiming](https://developer.apple.com/documentation/quartzcore/camediatiming)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [QCCompositionRenderer](qccompositionrenderer.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [QCComposition](qccomposition.md): Deprecated. The `QCComposition` class represents a Quartz Composer composition that either:
- [QCCompositionParameterView](qccompositionparameterview.md): Deprecated. A class that allows users to edit the input parameters of a composition in real time. The composition can be rendering in any of the following objects: [QCRenderer](qcrenderer.md), [QCView](qcview.md), or [QCCompositionLayer](qccompositionlayer.md).
- [QCCompositionPickerPanel](qccompositionpickerpanel.md): Deprecated. The `QCCompositionPickerPanel` class represents a utility window that allows users to browse compositions that are in the Quartz Composer composition repository and, if supported, preview the composition. The `QCCompositionPickerPanel` class cannot be subclassed.
- [QCCompositionPickerView](qccompositionpickerview.md): Deprecated. The `QCCompositionPickerView` class allows users to browse compositions that are in the Quartz Composer composition repository, and to preview them. You can set the default input parameters for a composition preview by using the method setDefaultValue:forInputKey:.
- [QCCompositionRepository](qccompositionrepository.md): Deprecated. The `QCCompositionRepository` class represents a system-wide centralized repository of built-in and installed Quartz Composer compositions (`/Library/Compositions` and `~/Library/Compositions`). The `QCCompositionRepository` class cannot be subclassed.
- [QCPatchController](qcpatchcontroller.md): Deprecated.
- [QCPlugIn](qcplugin.md): Deprecated. A base class to subclass for writing custom patches.
- [QCPlugInViewController](qcpluginviewcontroller.md): Deprecated. The `QCPlugInViewController` class communicates (through Cocoa bindings) between a custom patch and the view used for the internal settings of the custom patch. Only custom patches that use internal settings exposed to the user need to use the `QCPlugInViewController` class.
- [QCRenderer](qcrenderer.md): Deprecated. A base class for low-level rendering.
- [QCView](qcview.md): Deprecated. The `QCView` class is a custom `NSView` class that loads, plays, and controls Quartz Composer compositions. It is an autonomous view that is driven by an internal timer running on the main thread.

# QCCompositionLayer (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.5+ (deprecated in 10.14)

A layer that loads, plays, and controls Quartz Composer compositions in a Core Animation layer hierarchy.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface QCCompositionLayer : CAOpenGLLayer
```

<a id="overview"></a>

## Overview

The composition tracks the Core Animation layer time and is rendered directly at the current dimensions of the [QCCompositionLayer](qccompositionlayer.md) object.

An archived `QCCompositionLayer` object saves the composition that’s loaded at the time the layer is archived. It detects layer usage and pauses or resumes the composition appropriately. A `QCCompositionLayer` object starts rendering the composition automatically when the layer is placed in a visible layer hierarchy. The layer stops rendering when it is hidden or removed from the visible layer hierarchy.

You can pass data to the input ports, or retrieve data from the output ports, of the root patch of a composition by accessing the `patch` attribute of the `QCCompositionLayer` instance using methods provided by the [QCCompositionRenderer](qccompositionrenderer.md) protocol.

> **Note**

>  You must not modify the `asynchronous` property of the superclass [CAOpenGLLayer](https://developer.apple.com/documentation/quartzcore/caopengllayer).

## Topics

### Creating a Composition Layer

- [compositionLayerWithFile:](qccompositionlayer/compositionlayerwithfile_.md): Deprecated. Creates and returns an instance of a composition layer using the Quartz Composer composition in the specified file.
- [compositionLayerWithComposition:](qccompositionlayer/compositionlayerwithcomposition_.md): Deprecated. Creates and returns an instance of a composition layer using the provided Quartz Composer composition.
- [initWithFile:](qccompositionlayer/init%28file_%29.md): Deprecated. Initializes and returns a composition layer using the Quartz Composer composition in the specified file.
- [initWithComposition:](qccompositionlayer/init%28composition_%29.md): Deprecated. Initializes and returns a composition layer using the provided Quartz Composer composition.

### Getting the Composition

- [composition](qccompositionlayer/composition%28%29.md): Deprecated. Returns the composition associated with the layer.

## Relationships

### Inherits From

- [CAOpenGLLayer](https://developer.apple.com/documentation/quartzcore/caopengllayer)

### Conforms To

- [QCCompositionRenderer](qccompositionrenderer.md)

## See Also

### Classes

- [QCComposition](qccomposition.md): Deprecated. The `QCComposition` class represents a Quartz Composer composition that either:
- [QCCompositionParameterView](qccompositionparameterview.md): Deprecated. A class that allows users to edit the input parameters of a composition in real time. The composition can be rendering in any of the following objects: [QCRenderer](qcrenderer.md), [QCView](qcview.md), or [QCCompositionLayer](qccompositionlayer.md).
- [QCCompositionPickerPanel](qccompositionpickerpanel.md): Deprecated. The `QCCompositionPickerPanel` class represents a utility window that allows users to browse compositions that are in the Quartz Composer composition repository and, if supported, preview the composition. The `QCCompositionPickerPanel` class cannot be subclassed.
- [QCCompositionPickerView](qccompositionpickerview.md): Deprecated. The `QCCompositionPickerView` class allows users to browse compositions that are in the Quartz Composer composition repository, and to preview them. You can set the default input parameters for a composition preview by using the method setDefaultValue:forInputKey:.
- [QCCompositionRepository](qccompositionrepository.md): Deprecated. The `QCCompositionRepository` class represents a system-wide centralized repository of built-in and installed Quartz Composer compositions (`/Library/Compositions` and `~/Library/Compositions`). The `QCCompositionRepository` class cannot be subclassed.
- [QCPatchController](qcpatchcontroller.md): Deprecated.
- [QCPlugIn](qcplugin.md): Deprecated. A base class to subclass for writing custom patches.
- [QCPlugInViewController](qcpluginviewcontroller.md): Deprecated. The `QCPlugInViewController` class communicates (through Cocoa bindings) between a custom patch and the view used for the internal settings of the custom patch. Only custom patches that use internal settings exposed to the user need to use the `QCPlugInViewController` class.
- [QCRenderer](qcrenderer.md): Deprecated. A base class for low-level rendering.
- [QCView](qcview.md): Deprecated. The `QCView` class is a custom `NSView` class that loads, plays, and controls Quartz Composer compositions. It is an autonomous view that is driven by an internal timer running on the main thread.
