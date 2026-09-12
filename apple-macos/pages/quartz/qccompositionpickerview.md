> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionpickerview](https://developer.apple.com/documentation/quartz/qccompositionpickerview)

# QCCompositionPickerView (Swift)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.15)

The `QCCompositionPickerView` class allows users to browse compositions that are in the Quartz Composer composition repository, and to preview them. You can set the default input parameters for a composition preview  by using the method setDefaultValue:forInputKey:.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class QCCompositionPickerView
```

<a id="overview"></a>

## Overview

Note that the composition picker view does not automatically refresh its content when the composition repository is updated. It’s your responsibility to perform any necessary updating.

## Topics

### Setting and Getting the Background Color

- [setBackgroundColor(\_:)](qccompositionpickerview/setbackgroundcolor%28__%29.md): Deprecated. Sets the background color for the composition picker view.
- [backgroundColor()](qccompositionpickerview/backgroundcolor%28%29.md): Deprecated. Returns the background color of the composition picker view.

### Managing Background Drawing

- [setDrawsBackground(\_:)](qccompositionpickerview/setdrawsbackground%28__%29.md): Deprecated. Sets whether the composition picker view draws its background.
- [drawsBackground()](qccompositionpickerview/drawsbackground%28%29.md): Deprecated. Returns whether the composition picker view draws its background.

### Setting Composition Input Parameters

- [setDefaultValue(\_:forInputKey:)](qccompositionpickerview/setdefaultvalue%28__forinputkey_%29.md): Deprecated. Sets the default value to use for a composition input parameter.
- [resetDefaultInputValues()](qccompositionpickerview/resetdefaultinputvalues%28%29.md): Deprecated. Clears all previously set default values for composition input parameters.

### Managing Animation

- [startAnimation(\_:)](qccompositionpickerview/startanimation%28__%29.md): Deprecated. Starts animating the composition in the composition picker view.
- [stopAnimation(\_:)](qccompositionpickerview/stopanimation%28__%29.md): Deprecated. Stops animating the composition that is currently animating in the composition picker view.
- [isAnimating()](qccompositionpickerview/isanimating%28%29.md): Deprecated. Returns whether or not the composition picker view is currently animating its composition.
- [setMaxAnimationFrameRate(\_:)](qccompositionpickerview/setmaxanimationframerate%28__%29.md): Deprecated. Sets the maximum frame rate for animating compositions.
- [maxAnimationFrameRate()](qccompositionpickerview/maxanimationframerate%28%29.md): Deprecated. Retrieves the maximum frame rate for animating compositions.

### Controlling Display of Composition Names

- [setShowsCompositionNames(\_:)](qccompositionpickerview/setshowscompositionnames%28__%29.md): Deprecated. Enables the display of composition names in the composition picker view.
- [showsCompositionNames()](qccompositionpickerview/showscompositionnames%28%29.md): Deprecated. Retrieves whether composition names can be shown in the composition picker view.

### Setting and Retrieving the View Delegate

- [setDelegate(\_:)](qccompositionpickerview/setdelegate%28__%29.md): Deprecated. Sets the composition picker view delegate.
- [delegate()](qccompositionpickerview/delegate%28%29.md): Deprecated. Retrieves the composition picker view delegate.

### Managing the Composition Picker View

- [setCompositionsFromRepositoryWithProtocol(\_:andAttributes:)](qccompositionpickerview/setcompositionsfromrepositorywithprotocol%28__andattributes_%29.md): Deprecated. Sets the compositions in the composition picker view to those that match the specified criteria.
- [compositions()](qccompositionpickerview/compositions%28%29.md): Deprecated. Returns the list of compositions that are currently in the composition picker view.
- [setAllowsEmptySelection(\_:)](qccompositionpickerview/setallowsemptyselection%28__%29.md): Deprecated. Sets whether to allow an empty selection in the composition picker view.
- [allowsEmptySelection()](qccompositionpickerview/allowsemptyselection%28%29.md): Deprecated. Retrieves the empty-selection state of the composition picker view.
- [setCompositionAspectRatio(\_:)](qccompositionpickerview/setcompositionaspectratio%28__%29.md): Deprecated. Sets the aspect ratio used to display compositions in the composition picker view.
- [compositionAspectRatio()](qccompositionpickerview/compositionaspectratio%28%29.md): Deprecated. Retrieves the aspect ratio used to display compositions in the composition picker view.
- [setSelectedComposition(\_:)](qccompositionpickerview/setselectedcomposition%28__%29.md): Deprecated. Sets a composition as selected in the composition picker view.
- [selectedComposition()](qccompositionpickerview/selectedcomposition%28%29.md): Deprecated. Returns the composition that is currently selected in the composition picker view.

### Working with Columns and Rows

- [setNumberOfColumns(\_:)](qccompositionpickerview/setnumberofcolumns%28__%29.md): Deprecated. Sets the number of columns in the composition picker view.
- [numberOfColumns()](qccompositionpickerview/numberofcolumns%28%29.md): Deprecated. Retrieves the number of columns in the composition picker view.
- [setNumberOfRows(\_:)](qccompositionpickerview/setnumberofrows%28__%29.md): Deprecated. Sets the number of rows in the composition picker view.
- [numberOfRows()](qccompositionpickerview/numberofrows%28%29.md): Deprecated. Retrieves the number of rows in the composition picker view.

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
- [QCCompositionParameterView](qccompositionparameterview.md): Deprecated. A class that allows users to edit the input parameters of a composition in real time. The composition can be rendering in any of the following objects: [QCRenderer](qcrenderer.md), [QCView](qcview.md), or [QCCompositionLayer](qccompositionlayer.md).
- [QCCompositionPickerPanel](qccompositionpickerpanel.md): Deprecated. The `QCCompositionPickerPanel` class represents a utility window that allows users to browse compositions that are in the Quartz Composer composition repository and, if supported, preview the composition. The `QCCompositionPickerPanel` class cannot be subclassed.
- [QCCompositionRepository](qccompositionrepository.md): Deprecated. The `QCCompositionRepository` class represents a system-wide centralized repository of built-in and installed Quartz Composer compositions (`/Library/Compositions` and `~/Library/Compositions`). The `QCCompositionRepository` class cannot be subclassed.
- [QCPatchController](qcpatchcontroller.md): Deprecated.
- [QCPlugIn](qcplugin.md): Deprecated. A base class to subclass for writing custom patches.
- [QCPlugInViewController](qcpluginviewcontroller.md): Deprecated. The `QCPlugInViewController` class communicates (through Cocoa bindings) between a custom patch and the view used for the internal settings of the custom patch. Only custom patches that use internal settings exposed to the user need to use the `QCPlugInViewController` class.
- [QCRenderer](qcrenderer.md): Deprecated. A base class for low-level rendering.
- [QCView](qcview.md): Deprecated. The `QCView` class is a custom `NSView` class that loads, plays, and controls Quartz Composer compositions. It is an autonomous view that is driven by an internal timer running on the main thread.

# QCCompositionPickerView (Objective-C)

**Framework:** Quartz  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.15)

The `QCCompositionPickerView` class allows users to browse compositions that are in the Quartz Composer composition repository, and to preview them. You can set the default input parameters for a composition preview  by using the method setDefaultValue:forInputKey:.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface QCCompositionPickerView : NSView
```

<a id="overview"></a>

## Overview

Note that the composition picker view does not automatically refresh its content when the composition repository is updated. It’s your responsibility to perform any necessary updating.

## Topics

### Setting and Getting the Background Color

- [setBackgroundColor:](qccompositionpickerview/setbackgroundcolor%28__%29.md): Deprecated. Sets the background color for the composition picker view.
- [backgroundColor](qccompositionpickerview/backgroundcolor%28%29.md): Deprecated. Returns the background color of the composition picker view.

### Managing Background Drawing

- [setDrawsBackground:](qccompositionpickerview/setdrawsbackground%28__%29.md): Deprecated. Sets whether the composition picker view draws its background.
- [drawsBackground](qccompositionpickerview/drawsbackground%28%29.md): Deprecated. Returns whether the composition picker view draws its background.

### Setting Composition Input Parameters

- [setDefaultValue:forInputKey:](qccompositionpickerview/setdefaultvalue%28__forinputkey_%29.md): Deprecated. Sets the default value to use for a composition input parameter.
- [resetDefaultInputValues](qccompositionpickerview/resetdefaultinputvalues%28%29.md): Deprecated. Clears all previously set default values for composition input parameters.

### Managing Animation

- [startAnimation:](qccompositionpickerview/startanimation%28__%29.md): Deprecated. Starts animating the composition in the composition picker view.
- [stopAnimation:](qccompositionpickerview/stopanimation%28__%29.md): Deprecated. Stops animating the composition that is currently animating in the composition picker view.
- [isAnimating](qccompositionpickerview/isanimating%28%29.md): Deprecated. Returns whether or not the composition picker view is currently animating its composition.
- [setMaxAnimationFrameRate:](qccompositionpickerview/setmaxanimationframerate%28__%29.md): Deprecated. Sets the maximum frame rate for animating compositions.
- [maxAnimationFrameRate](qccompositionpickerview/maxanimationframerate%28%29.md): Deprecated. Retrieves the maximum frame rate for animating compositions.

### Controlling Display of Composition Names

- [setShowsCompositionNames:](qccompositionpickerview/setshowscompositionnames%28__%29.md): Deprecated. Enables the display of composition names in the composition picker view.
- [showsCompositionNames](qccompositionpickerview/showscompositionnames%28%29.md): Deprecated. Retrieves whether composition names can be shown in the composition picker view.

### Setting and Retrieving the View Delegate

- [setDelegate:](qccompositionpickerview/setdelegate%28__%29.md): Deprecated. Sets the composition picker view delegate.
- [delegate](qccompositionpickerview/delegate%28%29.md): Deprecated. Retrieves the composition picker view delegate.

### Managing the Composition Picker View

- [setCompositionsFromRepositoryWithProtocol:andAttributes:](qccompositionpickerview/setcompositionsfromrepositorywithprotocol%28__andattributes_%29.md): Deprecated. Sets the compositions in the composition picker view to those that match the specified criteria.
- [compositions](qccompositionpickerview/compositions%28%29.md): Deprecated. Returns the list of compositions that are currently in the composition picker view.
- [setAllowsEmptySelection:](qccompositionpickerview/setallowsemptyselection%28__%29.md): Deprecated. Sets whether to allow an empty selection in the composition picker view.
- [allowsEmptySelection](qccompositionpickerview/allowsemptyselection%28%29.md): Deprecated. Retrieves the empty-selection state of the composition picker view.
- [setCompositionAspectRatio:](qccompositionpickerview/setcompositionaspectratio%28__%29.md): Deprecated. Sets the aspect ratio used to display compositions in the composition picker view.
- [compositionAspectRatio](qccompositionpickerview/compositionaspectratio%28%29.md): Deprecated. Retrieves the aspect ratio used to display compositions in the composition picker view.
- [setSelectedComposition:](qccompositionpickerview/setselectedcomposition%28__%29.md): Deprecated. Sets a composition as selected in the composition picker view.
- [selectedComposition](qccompositionpickerview/selectedcomposition%28%29.md): Deprecated. Returns the composition that is currently selected in the composition picker view.

### Working with Columns and Rows

- [setNumberOfColumns:](qccompositionpickerview/setnumberofcolumns%28__%29.md): Deprecated. Sets the number of columns in the composition picker view.
- [numberOfColumns](qccompositionpickerview/numberofcolumns%28%29.md): Deprecated. Retrieves the number of columns in the composition picker view.
- [setNumberOfRows:](qccompositionpickerview/setnumberofrows%28__%29.md): Deprecated. Sets the number of rows in the composition picker view.
- [numberOfRows](qccompositionpickerview/numberofrows%28%29.md): Deprecated. Retrieves the number of rows in the composition picker view.

### Notifications

- [QCCompositionPickerViewDidSelectCompositionNotification](qccompositionpickerviewdidselectcompositionnotification.md): Deprecated. Posted when the user selects a composition in the picker view.

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

## See Also

### Classes

- [QCComposition](qccomposition.md): Deprecated. The `QCComposition` class represents a Quartz Composer composition that either:
- [QCCompositionLayer](qccompositionlayer.md): Deprecated. A layer that loads, plays, and controls Quartz Composer compositions in a Core Animation layer hierarchy.
- [QCCompositionParameterView](qccompositionparameterview.md): Deprecated. A class that allows users to edit the input parameters of a composition in real time. The composition can be rendering in any of the following objects: [QCRenderer](qcrenderer.md), [QCView](qcview.md), or [QCCompositionLayer](qccompositionlayer.md).
- [QCCompositionPickerPanel](qccompositionpickerpanel.md): Deprecated. The `QCCompositionPickerPanel` class represents a utility window that allows users to browse compositions that are in the Quartz Composer composition repository and, if supported, preview the composition. The `QCCompositionPickerPanel` class cannot be subclassed.
- [QCCompositionRepository](qccompositionrepository.md): Deprecated. The `QCCompositionRepository` class represents a system-wide centralized repository of built-in and installed Quartz Composer compositions (`/Library/Compositions` and `~/Library/Compositions`). The `QCCompositionRepository` class cannot be subclassed.
- [QCPatchController](qcpatchcontroller.md): Deprecated.
- [QCPlugIn](qcplugin.md): Deprecated. A base class to subclass for writing custom patches.
- [QCPlugInViewController](qcpluginviewcontroller.md): Deprecated. The `QCPlugInViewController` class communicates (through Cocoa bindings) between a custom patch and the view used for the internal settings of the custom patch. Only custom patches that use internal settings exposed to the user need to use the `QCPlugInViewController` class.
- [QCRenderer](qcrenderer.md): Deprecated. A base class for low-level rendering.
- [QCView](qcview.md): Deprecated. The `QCView` class is a custom `NSView` class that loads, plays, and controls Quartz Composer compositions. It is an autonomous view that is driven by an internal timer running on the main thread.
