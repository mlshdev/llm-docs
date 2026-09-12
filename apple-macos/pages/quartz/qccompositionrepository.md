> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionrepository](https://developer.apple.com/documentation/quartz/qccompositionrepository)

# QCCompositionRepository (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.15)

The `QCCompositionRepository` class represents a system-wide centralized repository of built-in and installed Quartz Composer compositions (`/Library/Compositions` and `~/Library/Compositions`). The `QCCompositionRepository` class cannot be subclassed.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class QCCompositionRepository
```

<a id="overview"></a>

## Overview

Compositions in the repository are represented by the [QCComposition](qccomposition.md) class. You can use the methods of the `QCCompositionRepository` class to fetch all compositions or only those that meet specific criteria.

## Topics

### Getting the Composition Repository

- [shared()](qccompositionrepository/shared%28%29.md): Deprecated. Returns the shared instance of the composition repository.

### Fetching Compositions

- [composition(withIdentifier:)](qccompositionrepository/composition%28withidentifier_%29.md): Deprecated. Returns the composition that corresponds to the identifier.
- [compositions(withProtocols:andAttributes:)](qccompositionrepository/compositions%28withprotocols_andattributes_%29.md): Deprecated. Returns an array of compositions that match a set of criteria.
- [allCompositions()](qccompositionrepository/allcompositions%28%29.md): Deprecated. Returns an array that contains all compositions currently in the composition repository.

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

### Classes

- [QCComposition](qccomposition.md): Deprecated. The `QCComposition` class represents a Quartz Composer composition that either:
- [QCCompositionLayer](qccompositionlayer.md): Deprecated. A layer that loads, plays, and controls Quartz Composer compositions in a Core Animation layer hierarchy.
- [QCCompositionParameterView](qccompositionparameterview.md): Deprecated. A class that allows users to edit the input parameters of a composition in real time. The composition can be rendering in any of the following objects: [QCRenderer](qcrenderer.md), [QCView](qcview.md), or [QCCompositionLayer](qccompositionlayer.md).
- [QCCompositionPickerPanel](qccompositionpickerpanel.md): Deprecated. The `QCCompositionPickerPanel` class represents a utility window that allows users to browse compositions that are in the Quartz Composer composition repository and, if supported, preview the composition. The `QCCompositionPickerPanel` class cannot be subclassed.
- [QCCompositionPickerView](qccompositionpickerview.md): Deprecated. The `QCCompositionPickerView` class allows users to browse compositions that are in the Quartz Composer composition repository, and to preview them. You can set the default input parameters for a composition preview by using the method setDefaultValue:forInputKey:.
- [QCPatchController](qcpatchcontroller.md): Deprecated.
- [QCPlugIn](qcplugin.md): Deprecated. A base class to subclass for writing custom patches.
- [QCPlugInViewController](qcpluginviewcontroller.md): Deprecated. The `QCPlugInViewController` class communicates (through Cocoa bindings) between a custom patch and the view used for the internal settings of the custom patch. Only custom patches that use internal settings exposed to the user need to use the `QCPlugInViewController` class.
- [QCRenderer](qcrenderer.md): Deprecated. A base class for low-level rendering.
- [QCView](qcview.md): Deprecated. The `QCView` class is a custom `NSView` class that loads, plays, and controls Quartz Composer compositions. It is an autonomous view that is driven by an internal timer running on the main thread.

# QCCompositionRepository (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.15)

The `QCCompositionRepository` class represents a system-wide centralized repository of built-in and installed Quartz Composer compositions (`/Library/Compositions` and `~/Library/Compositions`). The `QCCompositionRepository` class cannot be subclassed.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface QCCompositionRepository : NSObject
```

<a id="overview"></a>

## Overview

Compositions in the repository are represented by the [QCComposition](qccomposition.md) class. You can use the methods of the `QCCompositionRepository` class to fetch all compositions or only those that meet specific criteria.

## Topics

### Getting the Composition Repository

- [sharedCompositionRepository](qccompositionrepository/shared%28%29.md): Deprecated. Returns the shared instance of the composition repository.

### Fetching Compositions

- [compositionWithIdentifier:](qccompositionrepository/composition%28withidentifier_%29.md): Deprecated. Returns the composition that corresponds to the identifier.
- [compositionsWithProtocols:andAttributes:](qccompositionrepository/compositions%28withprotocols_andattributes_%29.md): Deprecated. Returns an array of compositions that match a set of criteria.
- [allCompositions](qccompositionrepository/allcompositions%28%29.md): Deprecated. Returns an array that contains all compositions currently in the composition repository.

### Notifications

- [QCCompositionRepositoryDidUpdateNotification](qccompositionrepositorydidupdatenotification.md): Deprecated. Posted whenever the list of compositions in the composition repository is updated.

### Instance Variables

- [cq](qccompositionrepository/cq.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [QCComposition](qccomposition.md): Deprecated. The `QCComposition` class represents a Quartz Composer composition that either:
- [QCCompositionLayer](qccompositionlayer.md): Deprecated. A layer that loads, plays, and controls Quartz Composer compositions in a Core Animation layer hierarchy.
- [QCCompositionParameterView](qccompositionparameterview.md): Deprecated. A class that allows users to edit the input parameters of a composition in real time. The composition can be rendering in any of the following objects: [QCRenderer](qcrenderer.md), [QCView](qcview.md), or [QCCompositionLayer](qccompositionlayer.md).
- [QCCompositionPickerPanel](qccompositionpickerpanel.md): Deprecated. The `QCCompositionPickerPanel` class represents a utility window that allows users to browse compositions that are in the Quartz Composer composition repository and, if supported, preview the composition. The `QCCompositionPickerPanel` class cannot be subclassed.
- [QCCompositionPickerView](qccompositionpickerview.md): Deprecated. The `QCCompositionPickerView` class allows users to browse compositions that are in the Quartz Composer composition repository, and to preview them. You can set the default input parameters for a composition preview by using the method setDefaultValue:forInputKey:.
- [QCPatchController](qcpatchcontroller.md): Deprecated.
- [QCPlugIn](qcplugin.md): Deprecated. A base class to subclass for writing custom patches.
- [QCPlugInViewController](qcpluginviewcontroller.md): Deprecated. The `QCPlugInViewController` class communicates (through Cocoa bindings) between a custom patch and the view used for the internal settings of the custom patch. Only custom patches that use internal settings exposed to the user need to use the `QCPlugInViewController` class.
- [QCRenderer](qcrenderer.md): Deprecated. A base class for low-level rendering.
- [QCView](qcview.md): Deprecated. The `QCView` class is a custom `NSView` class that loads, plays, and controls Quartz Composer compositions. It is an autonomous view that is driven by an internal timer running on the main thread.
