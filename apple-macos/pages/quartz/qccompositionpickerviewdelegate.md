> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionpickerviewdelegate](https://developer.apple.com/documentation/quartz/qccompositionpickerviewdelegate)

# QCCompositionPickerViewDelegate (Swift)

**Framework:** Quartz

The `QCCompositionPickerViewDelegate` informal protocol defines methods that allow  your application to respond to changes in a composition picker view (a [QCCompositionPickerView](qccompositionpickerview.md) object).

## Topics

### Responding to Composition Selections

- [compositionPickerView(\_:didSelect:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/compositionpickerview%28_:didselect:%29): Deprecated. Performs custom tasks when the selected composition in the composition picker view changes.

### Responding to Animation State Changes

- [compositionPickerViewDidStartAnimating(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/compositionpickerviewdidstartanimating%28_:%29): Deprecated. Performs custom tasks when the composition picker view starts animating a composition.
- [compositionPickerViewWillStopAnimating(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/compositionpickerviewwillstopanimating%28_:%29): Deprecated. Performs custom tasks when the composition picker view stops animating a composition.

## See Also

### Protocols

- [QCCompositionParameterViewDelegate](qccompositionparameterviewdelegate.md): A protocol for composition parameter view’s delegate.
- [QCCompositionRenderer](qccompositionrenderer.md): Deprecated. The `QCRenderer` protocol defines the methods used to pass data to the input ports or retrieve data from the output ports of the root patch of a Quartz Composer composition. This protocol is adopted by the [QCRenderer](qcrenderer.md), [QCView](qcview.md), and [QCCompositionLayer](qccompositionlayer.md) classes.
- [QCPlugInContext](qcplugincontext.md): Deprecated. The `QCPlugInContext` protocol defines methods that you use only from within the execution method ([execute(\_:atTime:withArguments:)](qcplugin/execute%28__attime_witharguments_%29.md)) of a `QCPlugIn` object.
- [QCPlugInInputImageSource](qcplugininputimagesource.md): Deprecated. The `QCPlugInInputImageSource` protocol eliminates the need to use explicit image types for the image input ports on your custom patch. Not only does using the protocol avoid restrictions of a specific image type, but it avoids impedance mismatches, and provides better performance by deferring pixel computation until it is needed. When you need to access the pixels in an image, you simply convert the image to a representation (texture or buffer) using one of the methods defined by the `QCPlugInInputImageSource` protocol. Use a texture representation when you want to use input images on the GPU. Use a buffer representation when you want to use input images on the CPU.
- [QCPlugInOutputImageProvider](qcpluginoutputimageprovider.md): Deprecated. The `QCPlugInOuputImageProvider` protocol eliminates the need to use explicit image types for the image output ports on a custom patch. The methods in this protocol are called by the Quartz Composer engine when the output image is needed. If your custom patch has an image output port, you need to implement the appropriate methods for rendering image data and to supply information about the rendering destination and the image bounds.

# QCCompositionPickerViewDelegate (Objective-C)

**Framework:** Quartz

The `QCCompositionPickerViewDelegate` informal protocol defines methods that allow  your application to respond to changes in a composition picker view (a [QCCompositionPickerView](qccompositionpickerview.md) object).

## Topics

### Responding to Composition Selections

- [compositionPickerView:didSelectComposition:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/compositionpickerview%28_:didselect:%29): Deprecated. Performs custom tasks when the selected composition in the composition picker view changes.

### Responding to Animation State Changes

- [compositionPickerViewDidStartAnimating:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/compositionpickerviewdidstartanimating%28_:%29): Deprecated. Performs custom tasks when the composition picker view starts animating a composition.
- [compositionPickerViewWillStopAnimating:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/compositionpickerviewwillstopanimating%28_:%29): Deprecated. Performs custom tasks when the composition picker view stops animating a composition.

## See Also

### Protocols

- [QCCompositionParameterViewDelegate](qccompositionparameterviewdelegate.md): A protocol for composition parameter view’s delegate.
- [QCCompositionRenderer](qccompositionrenderer.md): Deprecated. The `QCRenderer` protocol defines the methods used to pass data to the input ports or retrieve data from the output ports of the root patch of a Quartz Composer composition. This protocol is adopted by the [QCRenderer](qcrenderer.md), [QCView](qcview.md), and [QCCompositionLayer](qccompositionlayer.md) classes.
- [QCPlugInContext](qcplugincontext.md): Deprecated. The `QCPlugInContext` protocol defines methods that you use only from within the execution method ([execute:atTime:withArguments:](qcplugin/execute%28__attime_witharguments_%29.md)) of a `QCPlugIn` object.
- [QCPlugInInputImageSource](qcplugininputimagesource.md): Deprecated. The `QCPlugInInputImageSource` protocol eliminates the need to use explicit image types for the image input ports on your custom patch. Not only does using the protocol avoid restrictions of a specific image type, but it avoids impedance mismatches, and provides better performance by deferring pixel computation until it is needed. When you need to access the pixels in an image, you simply convert the image to a representation (texture or buffer) using one of the methods defined by the `QCPlugInInputImageSource` protocol. Use a texture representation when you want to use input images on the GPU. Use a buffer representation when you want to use input images on the CPU.
- [QCPlugInOutputImageProvider](qcpluginoutputimageprovider.md): Deprecated. The `QCPlugInOuputImageProvider` protocol eliminates the need to use explicit image types for the image output ports on a custom patch. The methods in this protocol are called by the Quartz Composer engine when the output image is needed. If your custom patch has an image output port, you need to implement the appropriate methods for rendering image data and to supply information about the rendering destination and the image bounds.
