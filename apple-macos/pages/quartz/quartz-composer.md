> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/quartz-composer](https://developer.apple.com/documentation/quartz/quartz-composer)

# Quartz Composer (Swift)

**Framework:** Quartz  
**Kind:** API Collection  
**Availability:** macOS 10.4+ (deprecated in 10.15)

## Topics

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
- [QCView](qcview.md): Deprecated. The `QCView` class is a custom `NSView` class that loads, plays, and controls Quartz Composer compositions. It is an autonomous view that is driven by an internal timer running on the main thread.

### Protocols

- [QCCompositionParameterViewDelegate](qccompositionparameterviewdelegate.md): A protocol for composition parameter view’s delegate.
- [QCCompositionPickerViewDelegate](qccompositionpickerviewdelegate.md): The `QCCompositionPickerViewDelegate` informal protocol defines methods that allow your application to respond to changes in a composition picker view (a [QCCompositionPickerView](qccompositionpickerview.md) object).
- [QCCompositionRenderer](qccompositionrenderer.md): Deprecated. The `QCRenderer` protocol defines the methods used to pass data to the input ports or retrieve data from the output ports of the root patch of a Quartz Composer composition. This protocol is adopted by the [QCRenderer](qcrenderer.md), [QCView](qcview.md), and [QCCompositionLayer](qccompositionlayer.md) classes.
- [QCPlugInContext](qcplugincontext.md): Deprecated. The `QCPlugInContext` protocol defines methods that you use only from within the execution method ([execute(\_:atTime:withArguments:)](qcplugin/execute%28__attime_witharguments_%29.md)) of a `QCPlugIn` object.
- [QCPlugInInputImageSource](qcplugininputimagesource.md): Deprecated. The `QCPlugInInputImageSource` protocol eliminates the need to use explicit image types for the image input ports on your custom patch. Not only does using the protocol avoid restrictions of a specific image type, but it avoids impedance mismatches, and provides better performance by deferring pixel computation until it is needed. When you need to access the pixels in an image, you simply convert the image to a representation (texture or buffer) using one of the methods defined by the `QCPlugInInputImageSource` protocol. Use a texture representation when you want to use input images on the GPU. Use a buffer representation when you want to use input images on the CPU.
- [QCPlugInOutputImageProvider](qcpluginoutputimageprovider.md): Deprecated. The `QCPlugInOuputImageProvider` protocol eliminates the need to use explicit image types for the image output ports on a custom patch. The methods in this protocol are called by the Quartz Composer engine when the output image is needed. If your custom patch has an image output port, you need to implement the appropriate methods for rendering image data and to supply information about the rendering destination and the image bounds.

### Structures

- [QCPlugInExecutionMode](qcpluginexecutionmode.md): Deprecated. Execution modes for custom patches.
- [QCPlugInTimeMode](qcplugintimemode.md): Deprecated. Time modes for custom patches.

### Reference

- [Quartz Data Types](quartz-data-types.md)
- [Quartz Constants](quartz-constants.md)
- [Quartz Enumerations](quartz-enumerations.md)
- [Quartz Composer Constants](quartz-composer-constants.md)
- [Quartz Composer Enumerations](quartz-composer-enumerations.md)

# Quartz Composer (Objective-C)

**Framework:** Quartz  
**Kind:** API Collection  
**Availability:** macOS 10.4+ (deprecated in 10.15)

## Topics

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
- [QCView](qcview.md): Deprecated. The `QCView` class is a custom `NSView` class that loads, plays, and controls Quartz Composer compositions. It is an autonomous view that is driven by an internal timer running on the main thread.

### Protocols

- [QCCompositionParameterViewDelegate](qccompositionparameterviewdelegate.md): A protocol for composition parameter view’s delegate.
- [QCCompositionPickerViewDelegate](qccompositionpickerviewdelegate.md): The `QCCompositionPickerViewDelegate` informal protocol defines methods that allow your application to respond to changes in a composition picker view (a [QCCompositionPickerView](qccompositionpickerview.md) object).
- [QCCompositionRenderer](qccompositionrenderer.md): Deprecated. The `QCRenderer` protocol defines the methods used to pass data to the input ports or retrieve data from the output ports of the root patch of a Quartz Composer composition. This protocol is adopted by the [QCRenderer](qcrenderer.md), [QCView](qcview.md), and [QCCompositionLayer](qccompositionlayer.md) classes.
- [QCPlugInContext](qcplugincontext.md): Deprecated. The `QCPlugInContext` protocol defines methods that you use only from within the execution method ([execute:atTime:withArguments:](qcplugin/execute%28__attime_witharguments_%29.md)) of a `QCPlugIn` object.
- [QCPlugInInputImageSource](qcplugininputimagesource.md): Deprecated. The `QCPlugInInputImageSource` protocol eliminates the need to use explicit image types for the image input ports on your custom patch. Not only does using the protocol avoid restrictions of a specific image type, but it avoids impedance mismatches, and provides better performance by deferring pixel computation until it is needed. When you need to access the pixels in an image, you simply convert the image to a representation (texture or buffer) using one of the methods defined by the `QCPlugInInputImageSource` protocol. Use a texture representation when you want to use input images on the GPU. Use a buffer representation when you want to use input images on the CPU.
- [QCPlugInOutputImageProvider](qcpluginoutputimageprovider.md): Deprecated. The `QCPlugInOuputImageProvider` protocol eliminates the need to use explicit image types for the image output ports on a custom patch. The methods in this protocol are called by the Quartz Composer engine when the output image is needed. If your custom patch has an image output port, you need to implement the appropriate methods for rendering image data and to supply information about the rendering destination and the image bounds.

### Structures

- [QCPlugInExecutionMode](qcpluginexecutionmode.md): Deprecated. Execution modes for custom patches.
- [QCPlugInTimeMode](qcplugintimemode.md): Deprecated. Time modes for custom patches.

### Reference

- [Quartz Data Types](quartz-data-types.md)
- [Quartz Constants](quartz-constants.md)
- [Quartz Enumerations](quartz-enumerations.md)
- [Quartz Composer Constants](quartz-composer-constants.md)
- [Quartz Composer Enumerations](quartz-composer-enumerations.md)
