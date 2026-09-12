> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccomposition](https://developer.apple.com/documentation/quartz/qccomposition)

# QCComposition (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.15)

The `QCComposition` class represents a Quartz Composer composition that either:

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class QCComposition
```

<a id="overview"></a>

## Overview

- comes from the system-wide composition repository  (`/Library/Compositions` and `~/Library/Compositions`) where it can be accessed by any application through the methods of the [QCCompositionRepository](qccompositionrepository.md) class
- is created from an arbitrary source (typically a file on disk) using one of its methods

This class cannot be subclassed.

A `QCComposition` object has the following information associated with it and that you can obtain by using the appropriate method of the `QCComposition` class:

- Attributes include the name and description of the composition, copyright information, and whether or not its provided by macOS (built-in).
- The protocols that the composition conforms to. A *composition protocol*  defines a set of required and optional input parameters and output results.

Many methods of the [QCRenderer](qcrenderer.md), [QCCompositionLayer](qccompositionlayer.md), and [QCView](qcview.md) classes take a `QCComposition` object as a parameter.

## Topics

### Creating a Composition

- [init(file:)](qccomposition/init%28file_%29.md): Deprecated. Returns a composition object initialized with a Quartz Composer composition file.
- [init(data:)](qccomposition/init%28data_%29.md): Deprecated. Returns a composition object initialized with the contents of a Quartz Composer composition file.

### Getting Information About a Composition

- [attributes()](qccomposition/attributes%28%29.md): Deprecated. Returns the attributes of the composition.
- [protocols()](qccomposition/protocols%28%29.md): Deprecated. Returns the list of protocols to which the composition conforms.
- [identifier()](qccomposition/identifier%28%29.md): Deprecated. Returns the unique and persistent identifier for the composition from the composition repository.

### Getting Port Keys

- [inputKeys()](qccomposition/inputkeys%28%29.md): Deprecated. Returns an array listing the keys that identify the input ports of the root patch of the composition.
- [outputKeys()](qccomposition/outputkeys%28%29.md): Deprecated. Returns an array listing the keys that identify the output ports of the root patch of the composition.

### Constants

- [Attribute Keys](attribute-keys.md): Attributes of a composition.
- [Composition Categories](composition-categories.md): Categories for compositions.
- [Standard Protocol Input Keys](standard-protocol-input-keys.md): Input ports of a composition.
- [Standard Protocol Output Keys](standard-protocol-output-keys.md): Output ports of a composition.
- [Standard Protocols](standard-protocols.md): Protocols for a composition.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Classes

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

# QCComposition (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.15)

The `QCComposition` class represents a Quartz Composer composition that either:

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface QCComposition : NSObject
```

<a id="overview"></a>

## Overview

- comes from the system-wide composition repository  (`/Library/Compositions` and `~/Library/Compositions`) where it can be accessed by any application through the methods of the [QCCompositionRepository](qccompositionrepository.md) class
- is created from an arbitrary source (typically a file on disk) using one of its methods

This class cannot be subclassed.

A `QCComposition` object has the following information associated with it and that you can obtain by using the appropriate method of the `QCComposition` class:

- Attributes include the name and description of the composition, copyright information, and whether or not its provided by macOS (built-in).
- The protocols that the composition conforms to. A *composition protocol*  defines a set of required and optional input parameters and output results.

Many methods of the [QCRenderer](qcrenderer.md), [QCCompositionLayer](qccompositionlayer.md), and [QCView](qcview.md) classes take a `QCComposition` object as a parameter.

## Topics

### Creating a Composition

- [compositionWithFile:](qccomposition/init%28file_%29.md): Deprecated. Returns a composition object initialized with a Quartz Composer composition file.
- [compositionWithData:](qccomposition/init%28data_%29.md): Deprecated. Returns a composition object initialized with the contents of a Quartz Composer composition file.

### Getting Information About a Composition

- [attributes](qccomposition/attributes%28%29.md): Deprecated. Returns the attributes of the composition.
- [protocols](qccomposition/protocols%28%29.md): Deprecated. Returns the list of protocols to which the composition conforms.
- [identifier](qccomposition/identifier%28%29.md): Deprecated. Returns the unique and persistent identifier for the composition from the composition repository.

### Getting Port Keys

- [inputKeys](qccomposition/inputkeys%28%29.md): Deprecated. Returns an array listing the keys that identify the input ports of the root patch of the composition.
- [outputKeys](qccomposition/outputkeys%28%29.md): Deprecated. Returns an array listing the keys that identify the output ports of the root patch of the composition.

### Constants

- [Attribute Keys](attribute-keys.md): Attributes of a composition.
- [Composition Categories](composition-categories.md): Categories for compositions.
- [Standard Protocol Input Keys](standard-protocol-input-keys.md): Input ports of a composition.
- [Standard Protocol Output Keys](standard-protocol-output-keys.md): Output ports of a composition.
- [Standard Protocols](standard-protocols.md): Protocols for a composition.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Classes

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
