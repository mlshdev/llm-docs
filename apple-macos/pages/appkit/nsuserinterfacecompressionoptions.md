> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfacecompressionoptions](https://developer.apple.com/documentation/appkit/nsuserinterfacecompressionoptions)

# NSUserInterfaceCompressionOptions (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.13+

An object that specifies how user interface elements resize themselves when space is constrained.

## Declaration

```swift
class NSUserInterfaceCompressionOptions
```

<a id="overview"></a>

## Overview

An instance of [NSUserInterfaceCompressionOptions](nsuserinterfacecompressionoptions.md) contains zero or more options. Because a compression options object behaves like a set, you can use common operations like intersection, union and subtraction to interact with instances and their members.

You can access system-defined options through the class methods detailed in Creating standard options, or you can create your own custom options with the [init(identifier:)](nsuserinterfacecompressionoptions/init%28identifier_%29.md) initializer.

To compare two different compression options objects, use the methods described in the Comparing compression options section.

## Topics

### Creating a compression option

- [init()](nsuserinterfacecompressionoptions/init%28%29.md): Creates an option object containing no options.
- [init(options:)](nsuserinterfacecompressionoptions/init%28options_%29.md): Creates an option object that represents the union of the supplied options.
- [init(identifier:)](nsuserinterfacecompressionoptions/init%28identifier_%29.md): Creates an option object with the given identifier string.
- [init(coder:)](nsuserinterfacecompressionoptions/init%28coder_%29.md): Creates an option object from data in an unarchiver.

### Creating standard options

- [hideImages](nsuserinterfacecompressionoptions/hideimages.md): An option specifying that views should hide their images.
- [hideText](nsuserinterfacecompressionoptions/hidetext.md): An option specifying that views should hide their text.
- [reduceMetrics](nsuserinterfacecompressionoptions/reducemetrics.md): An option specifying that views should reduce their internal metrics.
- [breakEqualWidths](nsuserinterfacecompressionoptions/breakequalwidths.md): An option specifying that views should no longer maintain equal width constraints.
- [standardOptions](nsuserinterfacecompressionoptions/standardoptions.md): An option that represents the union of all standard compression options.

### Comparing compression options

- [isEmpty](nsuserinterfacecompressionoptions/isempty.md): A Boolean value that denotes whether the option is empty.
- [contains(\_:)](nsuserinterfacecompressionoptions/contains%28__%29.md): Determines whether the supplied compression options are all present in the current instance.
- [intersects(\_:)](nsuserinterfacecompressionoptions/intersects%28__%29.md): Determines whether the supplied compression options intersect with the current instance’s options.

### Combining compression options

- [union(\_:)](nsuserinterfacecompressionoptions/union%28__%29.md): Creates a new compression options object representing the union with the provided options.
- [subtracting(\_:)](nsuserinterfacecompressionoptions/subtracting%28__%29.md): Creates a new compression options object with the supplied options removed.

### Initializers

- [init(compressionOptions:)](nsuserinterfacecompressionoptions/init%28compressionoptions_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Touch Bar items

- [NSTouchBarItem](nstouchbaritem.md): A UI control shown in the Touch Bar on supported models of MacBook Pro.
- [NSCandidateListTouchBarItem](nscandidatelisttouchbaritem.md): A bar item that, along with its delegate, provides a list of textual suggestions for the current text view.
- [NSColorPickerTouchBarItem](nscolorpickertouchbaritem.md): A bar item that provides a system-defined color picker.
- [NSCustomTouchBarItem](nscustomtouchbaritem.md): A bar item that contains a responder of your choice, such as a view, a button, or a scrubber.
- [NSGroupTouchBarItem](nsgrouptouchbaritem.md): A bar item that provides a bar to contain other items.
- [NSPopoverTouchBarItem](nspopovertouchbaritem.md): A bar item that provides a two-state control that can expand into its second state, showing the contents of a bar that it owns.
- [NSSharingServicePickerTouchBarItem](nssharingservicepickertouchbaritem.md): A bar item that, along with its delegate, provides a list of objects eligible for sharing.
- [NSSliderTouchBarItem](nsslidertouchbaritem.md): A bar item that provides a slider control for choosing a value in a range.
- [NSStepperTouchBarItem](nssteppertouchbaritem.md): A bar item that provides a stepper control for incrementing or decrementing a value.
- [NSButtonTouchBarItem](nsbuttontouchbaritem.md): A bar item that provides a button.
- [NSPickerTouchBarItem](nspickertouchbaritem.md): A bar item that provides a picker control with multiple options.
- [NSPickerTouchBarItem.ControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
- [NSPickerTouchBarItem.SelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.

# NSUserInterfaceCompressionOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.13+

An object that specifies how user interface elements resize themselves when space is constrained.

## Declaration

```objectivec
@interface NSUserInterfaceCompressionOptions : NSObject
```

<a id="overview"></a>

## Overview

An instance of [NSUserInterfaceCompressionOptions](nsuserinterfacecompressionoptions.md) contains zero or more options. Because a compression options object behaves like a set, you can use common operations like intersection, union and subtraction to interact with instances and their members.

You can access system-defined options through the class methods detailed in Creating standard options, or you can create your own custom options with the [initWithIdentifier:](nsuserinterfacecompressionoptions/init%28identifier_%29.md) initializer.

To compare two different compression options objects, use the methods described in the Comparing compression options section.

## Topics

### Creating a compression option

- [init](nsuserinterfacecompressionoptions/init%28%29.md): Creates an option object containing no options.
- [initWithCompressionOptions:](nsuserinterfacecompressionoptions/init%28options_%29.md): Creates an option object that represents the union of the supplied options.
- [initWithIdentifier:](nsuserinterfacecompressionoptions/init%28identifier_%29.md): Creates an option object with the given identifier string.
- [initWithCoder:](nsuserinterfacecompressionoptions/init%28coder_%29.md): Creates an option object from data in an unarchiver.

### Creating standard options

- [hideImagesOption](nsuserinterfacecompressionoptions/hideimages.md): An option specifying that views should hide their images.
- [hideTextOption](nsuserinterfacecompressionoptions/hidetext.md): An option specifying that views should hide their text.
- [reduceMetricsOption](nsuserinterfacecompressionoptions/reducemetrics.md): An option specifying that views should reduce their internal metrics.
- [breakEqualWidthsOption](nsuserinterfacecompressionoptions/breakequalwidths.md): An option specifying that views should no longer maintain equal width constraints.
- [standardOptions](nsuserinterfacecompressionoptions/standardoptions.md): An option that represents the union of all standard compression options.

### Comparing compression options

- [empty](nsuserinterfacecompressionoptions/isempty.md): A Boolean value that denotes whether the option is empty.
- [containsOptions:](nsuserinterfacecompressionoptions/contains%28__%29.md): Determines whether the supplied compression options are all present in the current instance.
- [intersectsOptions:](nsuserinterfacecompressionoptions/intersects%28__%29.md): Determines whether the supplied compression options intersect with the current instance’s options.

### Combining compression options

- [optionsByAddingOptions:](nsuserinterfacecompressionoptions/union%28__%29.md): Creates a new compression options object representing the union with the provided options.
- [optionsByRemovingOptions:](nsuserinterfacecompressionoptions/subtracting%28__%29.md): Creates a new compression options object with the supplied options removed.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Touch Bar items

- [NSTouchBarItem](nstouchbaritem.md): A UI control shown in the Touch Bar on supported models of MacBook Pro.
- [NSCandidateListTouchBarItem](nscandidatelisttouchbaritem.md): A bar item that, along with its delegate, provides a list of textual suggestions for the current text view.
- [NSColorPickerTouchBarItem](nscolorpickertouchbaritem.md): A bar item that provides a system-defined color picker.
- [NSCustomTouchBarItem](nscustomtouchbaritem.md): A bar item that contains a responder of your choice, such as a view, a button, or a scrubber.
- [NSGroupTouchBarItem](nsgrouptouchbaritem.md): A bar item that provides a bar to contain other items.
- [NSPopoverTouchBarItem](nspopovertouchbaritem.md): A bar item that provides a two-state control that can expand into its second state, showing the contents of a bar that it owns.
- [NSSharingServicePickerTouchBarItem](nssharingservicepickertouchbaritem.md): A bar item that, along with its delegate, provides a list of objects eligible for sharing.
- [NSSliderTouchBarItem](nsslidertouchbaritem.md): A bar item that provides a slider control for choosing a value in a range.
- [NSStepperTouchBarItem](nssteppertouchbaritem.md): A bar item that provides a stepper control for incrementing or decrementing a value.
- [NSButtonTouchBarItem](nsbuttontouchbaritem.md): A bar item that provides a button.
- [NSPickerTouchBarItem](nspickertouchbaritem.md): A bar item that provides a picker control with multiple options.
- [NSPickerTouchBarItemControlRepresentation](nspickertouchbaritem/controlrepresentation-swift.enum.md): Constants that specify display styles for picker bar items.
- [NSPickerTouchBarItemSelectionMode](nspickertouchbaritem/selectionmode-swift.enum.md): Constants that specify selection modes for picker bar items.
