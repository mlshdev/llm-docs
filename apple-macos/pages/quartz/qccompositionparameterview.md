> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionparameterview](https://developer.apple.com/documentation/quartz/qccompositionparameterview)

# QCCompositionParameterView (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.15)

A class that allows users to edit the input parameters of a composition in real time. The composition can be rendering in any of the following objects: [QCRenderer](qcrenderer.md), [QCView](qcview.md), or [QCCompositionLayer](qccompositionlayer.md).

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class QCCompositionParameterView
```

## Topics

### Getting and Setting the Renderer

- [setCompositionRenderer(\_:)](qccompositionparameterview/setcompositionrenderer%28__%29.md): Deprecated. Sets the composition parameter view for editing the input parameters of the provided renderer object.
- [compositionRenderer()](qccompositionparameterview/compositionrenderer%28%29.md): Deprecated. Returns the renderer object associated with the composition parameter view.

### Checking for Input Parameters

- [hasParameters()](qccompositionparameterview/hasparameters%28%29.md): Deprecated. Checks whether the composition that is currently edited by the composition parameter view has any input parameters.

### Setting and Retrieving the Delegate

- [setDelegate(\_:)](qccompositionparameterview/setdelegate%28__%29.md): Deprecated. Sets the composition parameter view delegate.
- [delegate()](qccompositionparameterview/delegate%28%29.md): Deprecated. Returns the composition parameter view delegate.

### Managing Background Drawing

- [setDrawsBackground(\_:)](qccompositionparameterview/setdrawsbackground%28__%29.md): Deprecated. Sets whether the composition parameter view draws its background.
- [drawsBackground()](qccompositionparameterview/drawsbackground%28%29.md): Deprecated. Returns whether the composition parameter view draws its background.

### Setting and Getting the Background Color

- [setBackgroundColor(\_:)](qccompositionparameterview/setbackgroundcolor%28__%29.md): Deprecated. Sets the background color of the composition parameter view.
- [backgroundColor()](qccompositionparameterview/backgroundcolor%28%29.md): Deprecated. Retrieves the background color of the composition parameter view.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [QCComposition](qccomposition.md): Deprecated. The `QCComposition` class represents a Quartz Composer composition that either:
- [QCCompositionLayer](qccompositionlayer.md): Deprecated. A layer that loads, plays, and controls Quartz Composer compositions in a Core Animation layer hierarchy.
- [QCCompositionPickerPanel](qccompositionpickerpanel.md): Deprecated. The `QCCompositionPickerPanel` class represents a utility window that allows users to browse compositions that are in the Quartz Composer composition repository and, if supported, preview the composition. The `QCCompositionPickerPanel` class cannot be subclassed.
- [QCCompositionPickerView](qccompositionpickerview.md): Deprecated. The `QCCompositionPickerView` class allows users to browse compositions that are in the Quartz Composer composition repository, and to preview them. You can set the default input parameters for a composition preview by using the method setDefaultValue:forInputKey:.
- [QCCompositionRepository](qccompositionrepository.md): Deprecated. The `QCCompositionRepository` class represents a system-wide centralized repository of built-in and installed Quartz Composer compositions (`/Library/Compositions` and `~/Library/Compositions`). The `QCCompositionRepository` class cannot be subclassed.
- [QCPatchController](qcpatchcontroller.md): Deprecated.
- [QCPlugIn](qcplugin.md): Deprecated. A base class to subclass for writing custom patches.
- [QCPlugInViewController](qcpluginviewcontroller.md): Deprecated. The `QCPlugInViewController` class communicates (through Cocoa bindings) between a custom patch and the view used for the internal settings of the custom patch. Only custom patches that use internal settings exposed to the user need to use the `QCPlugInViewController` class.
- [QCRenderer](qcrenderer.md): Deprecated. A base class for low-level rendering.
- [QCView](qcview.md): Deprecated. The `QCView` class is a custom `NSView` class that loads, plays, and controls Quartz Composer compositions. It is an autonomous view that is driven by an internal timer running on the main thread.

# QCCompositionParameterView (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.15)

A class that allows users to edit the input parameters of a composition in real time. The composition can be rendering in any of the following objects: [QCRenderer](qcrenderer.md), [QCView](qcview.md), or [QCCompositionLayer](qccompositionlayer.md).

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface QCCompositionParameterView : NSView
```

## Topics

### Getting and Setting the Renderer

- [setCompositionRenderer:](qccompositionparameterview/setcompositionrenderer%28__%29.md): Deprecated. Sets the composition parameter view for editing the input parameters of the provided renderer object.
- [compositionRenderer](qccompositionparameterview/compositionrenderer%28%29.md): Deprecated. Returns the renderer object associated with the composition parameter view.

### Checking for Input Parameters

- [hasParameters](qccompositionparameterview/hasparameters%28%29.md): Deprecated. Checks whether the composition that is currently edited by the composition parameter view has any input parameters.

### Setting and Retrieving the Delegate

- [setDelegate:](qccompositionparameterview/setdelegate%28__%29.md): Deprecated. Sets the composition parameter view delegate.
- [delegate](qccompositionparameterview/delegate%28%29.md): Deprecated. Returns the composition parameter view delegate.

### Managing Background Drawing

- [setDrawsBackground:](qccompositionparameterview/setdrawsbackground%28__%29.md): Deprecated. Sets whether the composition parameter view draws its background.
- [drawsBackground](qccompositionparameterview/drawsbackground%28%29.md): Deprecated. Returns whether the composition parameter view draws its background.

### Setting and Getting the Background Color

- [setBackgroundColor:](qccompositionparameterview/setbackgroundcolor%28__%29.md): Deprecated. Sets the background color of the composition parameter view.
- [backgroundColor](qccompositionparameterview/backgroundcolor%28%29.md): Deprecated. Retrieves the background color of the composition parameter view.

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

## See Also

### Classes

- [QCComposition](qccomposition.md): Deprecated. The `QCComposition` class represents a Quartz Composer composition that either:
- [QCCompositionLayer](qccompositionlayer.md): Deprecated. A layer that loads, plays, and controls Quartz Composer compositions in a Core Animation layer hierarchy.
- [QCCompositionPickerPanel](qccompositionpickerpanel.md): Deprecated. The `QCCompositionPickerPanel` class represents a utility window that allows users to browse compositions that are in the Quartz Composer composition repository and, if supported, preview the composition. The `QCCompositionPickerPanel` class cannot be subclassed.
- [QCCompositionPickerView](qccompositionpickerview.md): Deprecated. The `QCCompositionPickerView` class allows users to browse compositions that are in the Quartz Composer composition repository, and to preview them. You can set the default input parameters for a composition preview by using the method setDefaultValue:forInputKey:.
- [QCCompositionRepository](qccompositionrepository.md): Deprecated. The `QCCompositionRepository` class represents a system-wide centralized repository of built-in and installed Quartz Composer compositions (`/Library/Compositions` and `~/Library/Compositions`). The `QCCompositionRepository` class cannot be subclassed.
- [QCPatchController](qcpatchcontroller.md): Deprecated.
- [QCPlugIn](qcplugin.md): Deprecated. A base class to subclass for writing custom patches.
- [QCPlugInViewController](qcpluginviewcontroller.md): Deprecated. The `QCPlugInViewController` class communicates (through Cocoa bindings) between a custom patch and the view used for the internal settings of the custom patch. Only custom patches that use internal settings exposed to the user need to use the `QCPlugInViewController` class.
- [QCRenderer](qcrenderer.md): Deprecated. A base class for low-level rendering.
- [QCView](qcview.md): Deprecated. The `QCView` class is a custom `NSView` class that loads, plays, and controls Quartz Composer compositions. It is an autonomous view that is driven by an internal timer running on the main thread.
