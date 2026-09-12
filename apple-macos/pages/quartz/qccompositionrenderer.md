> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionrenderer](https://developer.apple.com/documentation/quartz/qccompositionrenderer)

# QCCompositionRenderer (Swift)

**Framework:** Quartz  
**Kind:** Protocol  
**Availability:** macOS 10.4+ (deprecated in 10.15)

The `QCRenderer` protocol defines the methods used to pass data to the input ports or retrieve data from the output ports of the root patch of a Quartz Composer composition. This protocol is adopted by the [QCRenderer](qcrenderer.md), [QCView](qcview.md), and [QCCompositionLayer](qccompositionlayer.md) classes.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
protocol QCCompositionRenderer
```

## Topics

### Passing and Retrieving Values From a Composition

- [setValue(\_:forInputKey:)](qccompositionrenderer/setvalue%28__forinputkey_%29.md): Deprecated. Sets the value for an input port of a composition.
- [value(forInputKey:)](qccompositionrenderer/value%28forinputkey_%29.md): Deprecated. Returns the value for an input port of a composition.
- [value(forOutputKey:)](qccompositionrenderer/value%28foroutputkey_%29.md): Deprecated. Returns the value for an output port of a composition.
- [value(forOutputKey:ofType:)](qccompositionrenderer/value%28foroutputkey_oftype_%29.md): Deprecated. Returns the current value on an output port (identified by its key) of the root patch of the composition.

### Getting Input and Output Keys

- [inputKeys()](qccompositionrenderer/inputkeys%28%29.md): Deprecated. Returns an array that contains the keys that identify the input ports of the root patch of the composition.
- [outputKeys()](qccompositionrenderer/outputkeys%28%29.md): Deprecated. Returns an array that contains the keys that identify the output ports of the root patch of the composition.

### Getting Attributes

- [attributes()](qccompositionrenderer/attributes%28%29.md): Deprecated. Returns the attributes of the composition associated with the renderer.

### Storing Arbitrary Information

- [userInfo()](qccompositionrenderer/userinfo%28%29.md): Deprecated. Returns a mutable dictionary for storing arbitrary information.

### Saving and Restoring Input Values

- [propertyListFromInputValues()](qccompositionrenderer/propertylistfrominputvalues%28%29.md): Deprecated. Returns a property list object that represents the current values for all the input keys of the composition.
- [setInputValuesWithPropertyList(\_:)](qccompositionrenderer/setinputvalueswithpropertylist%28__%29.md): Deprecated. Sets the values for the input keys of the composition from a previously saved property list.

## Relationships

### Conforming Types

- [QCCompositionLayer](qccompositionlayer.md)
- [QCRenderer](qcrenderer.md)
- [QCView](qcview.md)

## See Also

### Protocols

- [QCCompositionParameterViewDelegate](qccompositionparameterviewdelegate.md): A protocol for composition parameter view’s delegate.
- [QCCompositionPickerViewDelegate](qccompositionpickerviewdelegate.md): The `QCCompositionPickerViewDelegate` informal protocol defines methods that allow your application to respond to changes in a composition picker view (a [QCCompositionPickerView](qccompositionpickerview.md) object).
- [QCPlugInContext](qcplugincontext.md): Deprecated. The `QCPlugInContext` protocol defines methods that you use only from within the execution method ([execute(\_:atTime:withArguments:)](qcplugin/execute%28__attime_witharguments_%29.md)) of a `QCPlugIn` object.
- [QCPlugInInputImageSource](qcplugininputimagesource.md): Deprecated. The `QCPlugInInputImageSource` protocol eliminates the need to use explicit image types for the image input ports on your custom patch. Not only does using the protocol avoid restrictions of a specific image type, but it avoids impedance mismatches, and provides better performance by deferring pixel computation until it is needed. When you need to access the pixels in an image, you simply convert the image to a representation (texture or buffer) using one of the methods defined by the `QCPlugInInputImageSource` protocol. Use a texture representation when you want to use input images on the GPU. Use a buffer representation when you want to use input images on the CPU.
- [QCPlugInOutputImageProvider](qcpluginoutputimageprovider.md): Deprecated. The `QCPlugInOuputImageProvider` protocol eliminates the need to use explicit image types for the image output ports on a custom patch. The methods in this protocol are called by the Quartz Composer engine when the output image is needed. If your custom patch has an image output port, you need to implement the appropriate methods for rendering image data and to supply information about the rendering destination and the image bounds.

# QCCompositionRenderer (Objective-C)

**Framework:** Quartz  
**Kind:** Protocol  
**Availability:** macOS 10.4+ (deprecated in 10.15)

The `QCRenderer` protocol defines the methods used to pass data to the input ports or retrieve data from the output ports of the root patch of a Quartz Composer composition. This protocol is adopted by the [QCRenderer](qcrenderer.md), [QCView](qcview.md), and [QCCompositionLayer](qccompositionlayer.md) classes.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@protocol QCCompositionRenderer
```

## Topics

### Passing and Retrieving Values From a Composition

- [setValue:forInputKey:](qccompositionrenderer/setvalue%28__forinputkey_%29.md): Deprecated. Sets the value for an input port of a composition.
- [valueForInputKey:](qccompositionrenderer/value%28forinputkey_%29.md): Deprecated. Returns the value for an input port of a composition.
- [valueForOutputKey:](qccompositionrenderer/value%28foroutputkey_%29.md): Deprecated. Returns the value for an output port of a composition.
- [valueForOutputKey:ofType:](qccompositionrenderer/value%28foroutputkey_oftype_%29.md): Deprecated. Returns the current value on an output port (identified by its key) of the root patch of the composition.

### Getting Input and Output Keys

- [inputKeys](qccompositionrenderer/inputkeys%28%29.md): Deprecated. Returns an array that contains the keys that identify the input ports of the root patch of the composition.
- [outputKeys](qccompositionrenderer/outputkeys%28%29.md): Deprecated. Returns an array that contains the keys that identify the output ports of the root patch of the composition.

### Getting Attributes

- [attributes](qccompositionrenderer/attributes%28%29.md): Deprecated. Returns the attributes of the composition associated with the renderer.

### Storing Arbitrary Information

- [userInfo](qccompositionrenderer/userinfo%28%29.md): Deprecated. Returns a mutable dictionary for storing arbitrary information.

### Saving and Restoring Input Values

- [propertyListFromInputValues](qccompositionrenderer/propertylistfrominputvalues%28%29.md): Deprecated. Returns a property list object that represents the current values for all the input keys of the composition.
- [setInputValuesWithPropertyList:](qccompositionrenderer/setinputvalueswithpropertylist%28__%29.md): Deprecated. Sets the values for the input keys of the composition from a previously saved property list.

## Relationships

### Conforming Types

- [QCCompositionLayer](qccompositionlayer.md)
- [QCRenderer](qcrenderer.md)
- [QCView](qcview.md)

## See Also

### Protocols

- [QCCompositionParameterViewDelegate](qccompositionparameterviewdelegate.md): A protocol for composition parameter view’s delegate.
- [QCCompositionPickerViewDelegate](qccompositionpickerviewdelegate.md): The `QCCompositionPickerViewDelegate` informal protocol defines methods that allow your application to respond to changes in a composition picker view (a [QCCompositionPickerView](qccompositionpickerview.md) object).
- [QCPlugInContext](qcplugincontext.md): Deprecated. The `QCPlugInContext` protocol defines methods that you use only from within the execution method ([execute:atTime:withArguments:](qcplugin/execute%28__attime_witharguments_%29.md)) of a `QCPlugIn` object.
- [QCPlugInInputImageSource](qcplugininputimagesource.md): Deprecated. The `QCPlugInInputImageSource` protocol eliminates the need to use explicit image types for the image input ports on your custom patch. Not only does using the protocol avoid restrictions of a specific image type, but it avoids impedance mismatches, and provides better performance by deferring pixel computation until it is needed. When you need to access the pixels in an image, you simply convert the image to a representation (texture or buffer) using one of the methods defined by the `QCPlugInInputImageSource` protocol. Use a texture representation when you want to use input images on the GPU. Use a buffer representation when you want to use input images on the CPU.
- [QCPlugInOutputImageProvider](qcpluginoutputimageprovider.md): Deprecated. The `QCPlugInOuputImageProvider` protocol eliminates the need to use explicit image types for the image output ports on a custom patch. The methods in this protocol are called by the Quartz Composer engine when the output image is needed. If your custom patch has an image output port, you need to implement the appropriate methods for rendering image data and to supply information about the rendering destination and the image bounds.
