> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcpatchcontroller](https://developer.apple.com/documentation/quartz/qcpatchcontroller)

# QCPatchController (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.15)

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class QCPatchController
```

## Relationships

### Inherits From

- [NSController](../appkit/nscontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSEditor](../appkit/nseditor.md)
- [NSEditorRegistration](../appkit/nseditorregistration.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
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
- [QCPlugIn](qcplugin.md): Deprecated. A base class to subclass for writing custom patches.
- [QCPlugInViewController](qcpluginviewcontroller.md): Deprecated. The `QCPlugInViewController` class communicates (through Cocoa bindings) between a custom patch and the view used for the internal settings of the custom patch. Only custom patches that use internal settings exposed to the user need to use the `QCPlugInViewController` class.
- [QCRenderer](qcrenderer.md): Deprecated. A base class for low-level rendering.
- [QCView](qcview.md): Deprecated. The `QCView` class is a custom `NSView` class that loads, plays, and controls Quartz Composer compositions. It is an autonomous view that is driven by an internal timer running on the main thread.

# QCPatchController (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.15)

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface QCPatchController : NSController
```

## Relationships

### Inherits From

- [NSController](../appkit/nscontroller.md)

## See Also

### Classes

- [QCComposition](qccomposition.md): Deprecated. The `QCComposition` class represents a Quartz Composer composition that either:
- [QCCompositionLayer](qccompositionlayer.md): Deprecated. A layer that loads, plays, and controls Quartz Composer compositions in a Core Animation layer hierarchy.
- [QCCompositionParameterView](qccompositionparameterview.md): Deprecated. A class that allows users to edit the input parameters of a composition in real time. The composition can be rendering in any of the following objects: [QCRenderer](qcrenderer.md), [QCView](qcview.md), or [QCCompositionLayer](qccompositionlayer.md).
- [QCCompositionPickerPanel](qccompositionpickerpanel.md): Deprecated. The `QCCompositionPickerPanel` class represents a utility window that allows users to browse compositions that are in the Quartz Composer composition repository and, if supported, preview the composition. The `QCCompositionPickerPanel` class cannot be subclassed.
- [QCCompositionPickerView](qccompositionpickerview.md): Deprecated. The `QCCompositionPickerView` class allows users to browse compositions that are in the Quartz Composer composition repository, and to preview them. You can set the default input parameters for a composition preview by using the method setDefaultValue:forInputKey:.
- [QCCompositionRepository](qccompositionrepository.md): Deprecated. The `QCCompositionRepository` class represents a system-wide centralized repository of built-in and installed Quartz Composer compositions (`/Library/Compositions` and `~/Library/Compositions`). The `QCCompositionRepository` class cannot be subclassed.
- [QCPlugIn](qcplugin.md): Deprecated. A base class to subclass for writing custom patches.
- [QCPlugInViewController](qcpluginviewcontroller.md): Deprecated. The `QCPlugInViewController` class communicates (through Cocoa bindings) between a custom patch and the view used for the internal settings of the custom patch. Only custom patches that use internal settings exposed to the user need to use the `QCPlugInViewController` class.
- [QCRenderer](qcrenderer.md): Deprecated. A base class for low-level rendering.
- [QCView](qcview.md): Deprecated. The `QCView` class is a custom `NSView` class that loads, plays, and controls Quartz Composer compositions. It is an autonomous view that is driven by an internal timer running on the main thread.
