> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin](https://developer.apple.com/documentation/quartz/qcplugin)

# QCPlugIn (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.15)

A base class to subclass for writing custom patches.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class QCPlugIn
```

<a id="overview"></a>

## Overview

The `QCPlugIn` class provides the base class to subclass for writing custom  Quartz Composer patches. You implement a custom patch by subclassing `QCPlugIn`, overriding the appropriate methods, packaging the code as an `NSBundle` object, and installing the bundle in the appropriate location. A bundle can contain more than one subclass  of `QCPlugIn`, allowing you to provide a suite of custom patches in one bundle. [Quartz Composer Custom Patch Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/QuartzComposer_Patch_PlugIn_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004787) provides detailed instructions on how to create and package a custom patch. *QCPlugIn Class Reference* supplements the information in the programming guide.

The methods related to the executing the custom patch (called when the Quartz Composer engine is rendering) are passed an opaque object that conforms to the [QCPlugInContext](qcplugincontext.md) protocol. This object represents the execution context of the `QCPlugIn` object. You should not retain the execution context or use it outside of the scope of the execution method that it is passed to.

## Topics

### Defining the Characteristics of a Custom Patch

- [executionMode()](qcplugin/executionmode%28%29.md): Deprecated. Returns the execution mode of the custom patch.
- [timeMode()](qcplugin/timemode%28%29.md): Deprecated. Returns the time mode for the custom patch.

### Executing a Custom Patch

- [execute(\_:atTime:withArguments:)](qcplugin/execute%28__attime_witharguments_%29.md): Deprecated. Performs the processing or rendering tasks appropriate for the custom patch.

### Performing Custom Tasks During Execution

- [startExecution(\_:)](qcplugin/startexecution%28__%29.md): Deprecated. Allows you to perform custom setup tasks before the Quartz Composer engine starts rendering.
- [enableExecution(\_:)](qcplugin/enableexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the execution of the `QCPlugIn` object is resumed.
- [disableExecution(\_:)](qcplugin/disableexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the execution of the `QCPlugIn` object is paused.
- [stopExecution(\_:)](qcplugin/stopexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the `QCPlugIn` object stops executing.

### Defining Patch and Property Port Attributes

- [attributes()](qcplugin/attributes%28%29.md): Deprecated. Returns a dictionary that contains strings for the user interface that describe the custom patch.
- [attributesForPropertyPort(withKey:)](qcplugin/attributesforpropertyport%28withkey_%29.md): Deprecated. Returns a dictionary that contains strings for the user interface that describe the optional attributes for ports created from properties.

### Defining Internal Settings

- [createViewController()](qcplugin/createviewcontroller%28%29.md): Deprecated. Creates and returns a view controller for the Settings pane of a custom patch.
- [plugInKeys()](qcplugin/pluginkeys%28%29.md): Deprecated. Returns the keys for the internal settings of a custom patch.

### Supporting Saving and Retrieving Internal Settings

- [serializedValue(forKey:)](qcplugin/serializedvalue%28forkey_%29.md): Deprecated. A method implemented to override serialization.
- [setSerializedValue(\_:forKey:)](qcplugin/setserializedvalue%28__forkey_%29.md): Deprecated. Provides custom deserialization for patch internal settings that were previously serialized using the method [serializedValue(forKey:)](qcplugin/serializedvalue%28forkey_%29.md).

### Adding Ports Dynamically

- [addInputPort(withType:forKey:withAttributes:)](qcplugin/addinputport%28withtype_forkey_withattributes_%29.md): Deprecated. Adds an input port of the specified type and associates a key and attributes with the port.
- [removeInputPort(forKey:)](qcplugin/removeinputport%28forkey_%29.md): Deprecated. Removes the input port for a given key.
- [addOutputPort(withType:forKey:withAttributes:)](qcplugin/addoutputport%28withtype_forkey_withattributes_%29.md): Deprecated. Adds an output port of the specified type and associates a key and attributes with the port.
- [removeOutputPort(forKey:)](qcplugin/removeoutputport%28forkey_%29.md): Deprecated. Removes the output port for a given key.

### Getting and Setting Port Values

- [didValue(forInputKeyChange:)](qcplugin/didvalue%28forinputkeychange_%29.md): Deprecated. Returns whether the input port value changed since the last execution of the custom patch.
- [value(forInputKey:)](qcplugin/value%28forinputkey_%29.md): Deprecated. Returns the current value for an input port.
- [setValue(\_:forOutputKey:)](qcplugin/setvalue%28__foroutputkey_%29.md): Deprecated. Sets the value of an output port.

### Loading Bundle and Custom Patches Manually

- [load(atPath:)](qcplugin/load%28atpath_%29.md): Deprecated. Loads a Quartz Composer plug-in bundle from the specified path.
- [registerClass(\_:)](qcplugin/registerclass%28__%29.md): Deprecated. Registers a `QCPlugIn` subclass.

### Ordering Property Ports

- [sortedPropertyPortKeys()](qcplugin/sortedpropertyportkeys%28%29.md): Deprecated. Returns and array of property port keys in the order you want them to appear in the user interface.

### Constants

- [Patch Attributes](patch-attributes.md): Attributes for custom patches.
- [Input and Output Port Attributes](input-and-output-port-attributes.md): Attributes for input and output ports.
- [Port Input and Output Types](port-input-and-output-types.md): Data types for input and output ports.
- [Pixel Formats](pixel-formats.md): Supported image pixel formats.
- [Execution Arguments](execution-arguments.md): Arguments to the method [execute(\_:atTime:withArguments:)](qcplugin/execute%28__attime_witharguments_%29.md).
- [QCPlugInExecutionMode](qcpluginexecutionmode.md): Deprecated. Execution modes for custom patches.
- [QCPlugInTimeMode](qcplugintimemode.md): Deprecated. Time modes for custom patches.

### Instance Methods

- [executionTime(for:atTime:withArguments:)](qcplugin/executiontime%28for_attime_witharguments_%29.md): Deprecated.

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

## See Also

### Related Documentation

- [Quartz Composer Custom Patch Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/QuartzComposer_Patch_PlugIn_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004787)

### Classes

- [QCComposition](qccomposition.md): Deprecated. The `QCComposition` class represents a Quartz Composer composition that either:
- [QCCompositionLayer](qccompositionlayer.md): Deprecated. A layer that loads, plays, and controls Quartz Composer compositions in a Core Animation layer hierarchy.
- [QCCompositionParameterView](qccompositionparameterview.md): Deprecated. A class that allows users to edit the input parameters of a composition in real time. The composition can be rendering in any of the following objects: [QCRenderer](qcrenderer.md), [QCView](qcview.md), or [QCCompositionLayer](qccompositionlayer.md).
- [QCCompositionPickerPanel](qccompositionpickerpanel.md): Deprecated. The `QCCompositionPickerPanel` class represents a utility window that allows users to browse compositions that are in the Quartz Composer composition repository and, if supported, preview the composition. The `QCCompositionPickerPanel` class cannot be subclassed.
- [QCCompositionPickerView](qccompositionpickerview.md): Deprecated. The `QCCompositionPickerView` class allows users to browse compositions that are in the Quartz Composer composition repository, and to preview them. You can set the default input parameters for a composition preview by using the method setDefaultValue:forInputKey:.
- [QCCompositionRepository](qccompositionrepository.md): Deprecated. The `QCCompositionRepository` class represents a system-wide centralized repository of built-in and installed Quartz Composer compositions (`/Library/Compositions` and `~/Library/Compositions`). The `QCCompositionRepository` class cannot be subclassed.
- [QCPatchController](qcpatchcontroller.md): Deprecated.
- [QCPlugInViewController](qcpluginviewcontroller.md): Deprecated. The `QCPlugInViewController` class communicates (through Cocoa bindings) between a custom patch and the view used for the internal settings of the custom patch. Only custom patches that use internal settings exposed to the user need to use the `QCPlugInViewController` class.
- [QCRenderer](qcrenderer.md): Deprecated. A base class for low-level rendering.
- [QCView](qcview.md): Deprecated. The `QCView` class is a custom `NSView` class that loads, plays, and controls Quartz Composer compositions. It is an autonomous view that is driven by an internal timer running on the main thread.

# QCPlugIn (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.15)

A base class to subclass for writing custom patches.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface QCPlugIn : NSObject
```

<a id="overview"></a>

## Overview

The `QCPlugIn` class provides the base class to subclass for writing custom  Quartz Composer patches. You implement a custom patch by subclassing `QCPlugIn`, overriding the appropriate methods, packaging the code as an `NSBundle` object, and installing the bundle in the appropriate location. A bundle can contain more than one subclass  of `QCPlugIn`, allowing you to provide a suite of custom patches in one bundle. [Quartz Composer Custom Patch Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/QuartzComposer_Patch_PlugIn_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004787) provides detailed instructions on how to create and package a custom patch. *QCPlugIn Class Reference* supplements the information in the programming guide.

The methods related to the executing the custom patch (called when the Quartz Composer engine is rendering) are passed an opaque object that conforms to the [QCPlugInContext](qcplugincontext.md) protocol. This object represents the execution context of the `QCPlugIn` object. You should not retain the execution context or use it outside of the scope of the execution method that it is passed to.

## Topics

### Defining the Characteristics of a Custom Patch

- [executionMode](qcplugin/executionmode%28%29.md): Deprecated. Returns the execution mode of the custom patch.
- [timeMode](qcplugin/timemode%28%29.md): Deprecated. Returns the time mode for the custom patch.

### Executing a Custom Patch

- [execute:atTime:withArguments:](qcplugin/execute%28__attime_witharguments_%29.md): Deprecated. Performs the processing or rendering tasks appropriate for the custom patch.

### Performing Custom Tasks During Execution

- [startExecution:](qcplugin/startexecution%28__%29.md): Deprecated. Allows you to perform custom setup tasks before the Quartz Composer engine starts rendering.
- [enableExecution:](qcplugin/enableexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the execution of the `QCPlugIn` object is resumed.
- [disableExecution:](qcplugin/disableexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the execution of the `QCPlugIn` object is paused.
- [stopExecution:](qcplugin/stopexecution%28__%29.md): Deprecated. Allows you to perform custom tasks when the `QCPlugIn` object stops executing.

### Defining Patch and Property Port Attributes

- [attributes](qcplugin/attributes%28%29.md): Deprecated. Returns a dictionary that contains strings for the user interface that describe the custom patch.
- [attributesForPropertyPortWithKey:](qcplugin/attributesforpropertyport%28withkey_%29.md): Deprecated. Returns a dictionary that contains strings for the user interface that describe the optional attributes for ports created from properties.

### Defining Internal Settings

- [createViewController](qcplugin/createviewcontroller%28%29.md): Deprecated. Creates and returns a view controller for the Settings pane of a custom patch.
- [plugInKeys](qcplugin/pluginkeys%28%29.md): Deprecated. Returns the keys for the internal settings of a custom patch.

### Supporting Saving and Retrieving Internal Settings

- [serializedValueForKey:](qcplugin/serializedvalue%28forkey_%29.md): Deprecated. A method implemented to override serialization.
- [setSerializedValue:forKey:](qcplugin/setserializedvalue%28__forkey_%29.md): Deprecated. Provides custom deserialization for patch internal settings that were previously serialized using the method [serializedValueForKey:](qcplugin/serializedvalue%28forkey_%29.md).

### Adding Ports Dynamically

- [addInputPortWithType:forKey:withAttributes:](qcplugin/addinputport%28withtype_forkey_withattributes_%29.md): Deprecated. Adds an input port of the specified type and associates a key and attributes with the port.
- [removeInputPortForKey:](qcplugin/removeinputport%28forkey_%29.md): Deprecated. Removes the input port for a given key.
- [addOutputPortWithType:forKey:withAttributes:](qcplugin/addoutputport%28withtype_forkey_withattributes_%29.md): Deprecated. Adds an output port of the specified type and associates a key and attributes with the port.
- [removeOutputPortForKey:](qcplugin/removeoutputport%28forkey_%29.md): Deprecated. Removes the output port for a given key.

### Getting and Setting Port Values

- [didValueForInputKeyChange:](qcplugin/didvalue%28forinputkeychange_%29.md): Deprecated. Returns whether the input port value changed since the last execution of the custom patch.
- [valueForInputKey:](qcplugin/value%28forinputkey_%29.md): Deprecated. Returns the current value for an input port.
- [setValue:forOutputKey:](qcplugin/setvalue%28__foroutputkey_%29.md): Deprecated. Sets the value of an output port.

### Loading Bundle and Custom Patches Manually

- [loadPlugInAtPath:](qcplugin/load%28atpath_%29.md): Deprecated. Loads a Quartz Composer plug-in bundle from the specified path.
- [registerPlugInClass:](qcplugin/registerclass%28__%29.md): Deprecated. Registers a `QCPlugIn` subclass.

### Ordering Property Ports

- [sortedPropertyPortKeys](qcplugin/sortedpropertyportkeys%28%29.md): Deprecated. Returns and array of property port keys in the order you want them to appear in the user interface.

### Constants

- [Patch Attributes](patch-attributes.md): Attributes for custom patches.
- [Input and Output Port Attributes](input-and-output-port-attributes.md): Attributes for input and output ports.
- [Port Input and Output Types](port-input-and-output-types.md): Data types for input and output ports.
- [Pixel Formats](pixel-formats.md): Supported image pixel formats.
- [Execution Arguments](execution-arguments.md): Arguments to the method [execute:atTime:withArguments:](qcplugin/execute%28__attime_witharguments_%29.md).
- [QCPlugInExecutionMode](qcpluginexecutionmode.md): Deprecated. Execution modes for custom patches.
- [QCPlugInTimeMode](qcplugintimemode.md): Deprecated. Time modes for custom patches.

### Instance Methods

- [executionTimeForContext:atTime:withArguments:](qcplugin/executiontime%28for_attime_witharguments_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Related Documentation

- [Quartz Composer Custom Patch Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/QuartzComposer_Patch_PlugIn_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004787)

### Classes

- [QCComposition](qccomposition.md): Deprecated. The `QCComposition` class represents a Quartz Composer composition that either:
- [QCCompositionLayer](qccompositionlayer.md): Deprecated. A layer that loads, plays, and controls Quartz Composer compositions in a Core Animation layer hierarchy.
- [QCCompositionParameterView](qccompositionparameterview.md): Deprecated. A class that allows users to edit the input parameters of a composition in real time. The composition can be rendering in any of the following objects: [QCRenderer](qcrenderer.md), [QCView](qcview.md), or [QCCompositionLayer](qccompositionlayer.md).
- [QCCompositionPickerPanel](qccompositionpickerpanel.md): Deprecated. The `QCCompositionPickerPanel` class represents a utility window that allows users to browse compositions that are in the Quartz Composer composition repository and, if supported, preview the composition. The `QCCompositionPickerPanel` class cannot be subclassed.
- [QCCompositionPickerView](qccompositionpickerview.md): Deprecated. The `QCCompositionPickerView` class allows users to browse compositions that are in the Quartz Composer composition repository, and to preview them. You can set the default input parameters for a composition preview by using the method setDefaultValue:forInputKey:.
- [QCCompositionRepository](qccompositionrepository.md): Deprecated. The `QCCompositionRepository` class represents a system-wide centralized repository of built-in and installed Quartz Composer compositions (`/Library/Compositions` and `~/Library/Compositions`). The `QCCompositionRepository` class cannot be subclassed.
- [QCPatchController](qcpatchcontroller.md): Deprecated.
- [QCPlugInViewController](qcpluginviewcontroller.md): Deprecated. The `QCPlugInViewController` class communicates (through Cocoa bindings) between a custom patch and the view used for the internal settings of the custom patch. Only custom patches that use internal settings exposed to the user need to use the `QCPlugInViewController` class.
- [QCRenderer](qcrenderer.md): Deprecated. A base class for low-level rendering.
- [QCView](qcview.md): Deprecated. The `QCView` class is a custom `NSView` class that loads, plays, and controls Quartz Composer compositions. It is an autonomous view that is driven by an internal timer running on the main thread.
