> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinsertionindicator](https://developer.apple.com/documentation/appkit/nstextinsertionindicator)

# NSTextInsertionIndicator (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 14.0+

A view that represents the insertion indicator in text.

## Declaration

```swift
class NSTextInsertionIndicator
```

## Mentioned In

- [Adopting the system text cursor in custom text views](adopting-the-system-text-cursor-in-custom-text-views.md)

<a id="overview"></a>

## Overview

[NSTextView](nstextview.md) and [NSTextField](nstextfield.md) both use [NSTextInsertionIndicator](nstextinsertionindicator.md) to display the insertion indicator. You can use this indicator if you have your own text engine or need to display an indicator elsewhere.

To use the indicator, instantiate an [NSTextInsertionIndicator](nstextinsertionindicator.md), then add the view to your view hierarchy. Set the indicator view’s frame to where you want to display a text insertion indicator. The indicator has the same height as the indicator view’s frame, and centers horizontally within the indicator view’s frame.

The [NSTextInsertionIndicator.DisplayMode](nstextinsertionindicator/displaymode-swift.enum.md) specifies whether the indicator hides, remains visible, or blinks (automatic).

When set to [NSTextInsertionIndicator.DisplayMode.automatic](nstextinsertionindicator/displaymode-swift.enum/automatic.md), the indicator stops blinking when you set the frame. The indicator starts blinking when the frame doesn’t change for a period of time. When the user dictates, the indicator displays a trailing glow when it is moved.

Set the [NSTextInsertionIndicator.DisplayMode](nstextinsertionindicator/displaymode-swift.enum.md) to [NSTextInsertionIndicator.DisplayMode.automatic](nstextinsertionindicator/displaymode-swift.enum/automatic.md) when your custom view becomes the first responder. When your custom view resigns first responder, set the [displayMode](nstextinsertionindicator/displaymode-swift.property.md) to [NSTextInsertionIndicator.DisplayMode.hidden](nstextinsertionindicator/displaymode-swift.enum/hidden.md) to indicate that key events aren’t sent to your view.

By default the indicator’s color is [textInsertionPointColor](nscolor/textinsertionpointcolor.md). You can set a different color.

## Topics

### Configuring indicators

- [color](nstextinsertionindicator/color.md): The color of this indicator.
- [effectsViewInserter](nstextinsertionindicator/effectsviewinserter.md): An optional closure the system calls during dictation.

### Setting the display mode

- [displayMode](nstextinsertionindicator/displaymode-swift.property.md): A value that describes the display mode of an indicator.
- [automaticModeOptions](nstextinsertionindicator/automaticmodeoptions-swift.property.md): Options that affect the automatic display mode.
- [NSTextInsertionIndicator.AutomaticModeOptions](nstextinsertionindicator/automaticmodeoptions-swift.struct.md): Options that affect the automatic display mode.
- [NSTextInsertionIndicator.DisplayMode](nstextinsertionindicator/displaymode-swift.enum.md): Constants that determine how to display the system text cursor in a custom text UI.

## Relationships

### Inherits From

- [NSView](nsview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Text input

- [Adopting the system text cursor in custom text views](adopting-the-system-text-cursor-in-custom-text-views.md): Incorporate the system text cursor into your custom text UI in AppKit.
- [NSTextInputContext](nstextinputcontext.md): An object that represents the Cocoa text input system.
- [NSTextInputClient](nstextinputclient.md): A set of methods that text views need to implement to interact properly with the text input management system.
- [NSTextAlternatives](nstextalternatives.md): A list of alternative strings for a piece of text.
- [NSTextContent](nstextcontent.md): A protocol that describes specific kinds of input content types.
- [NSTextInsertionIndicator.DisplayMode](nstextinsertionindicator/displaymode-swift.enum.md): Constants that determine how to display the system text cursor in a custom text UI.
- [NSTextInsertionIndicator.AutomaticModeOptions](nstextinsertionindicator/automaticmodeoptions-swift.struct.md): Options that affect the automatic display mode.

# NSTextInsertionIndicator (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 14.0+

A view that represents the insertion indicator in text.

## Declaration

```objectivec
@interface NSTextInsertionIndicator : NSView
```

## Mentioned In

- [Adopting the system text cursor in custom text views](adopting-the-system-text-cursor-in-custom-text-views.md)

<a id="overview"></a>

## Overview

[NSTextView](nstextview.md) and [NSTextField](nstextfield.md) both use [NSTextInsertionIndicator](nstextinsertionindicator.md) to display the insertion indicator. You can use this indicator if you have your own text engine or need to display an indicator elsewhere.

To use the indicator, instantiate an [NSTextInsertionIndicator](nstextinsertionindicator.md), then add the view to your view hierarchy. Set the indicator view’s frame to where you want to display a text insertion indicator. The indicator has the same height as the indicator view’s frame, and centers horizontally within the indicator view’s frame.

The [NSTextInsertionIndicatorDisplayMode](nstextinsertionindicator/displaymode-swift.enum.md) specifies whether the indicator hides, remains visible, or blinks (automatic).

When set to [NSTextInsertionIndicatorDisplayModeAutomatic](nstextinsertionindicator/displaymode-swift.enum/automatic.md), the indicator stops blinking when you set the frame. The indicator starts blinking when the frame doesn’t change for a period of time. When the user dictates, the indicator displays a trailing glow when it is moved.

Set the [NSTextInsertionIndicatorDisplayMode](nstextinsertionindicator/displaymode-swift.enum.md) to [NSTextInsertionIndicatorDisplayModeAutomatic](nstextinsertionindicator/displaymode-swift.enum/automatic.md) when your custom view becomes the first responder. When your custom view resigns first responder, set the [displayMode](nstextinsertionindicator/displaymode-swift.property.md) to [NSTextInsertionIndicatorDisplayModeHidden](nstextinsertionindicator/displaymode-swift.enum/hidden.md) to indicate that key events aren’t sent to your view.

By default the indicator’s color is [textInsertionPointColor](nscolor/textinsertionpointcolor.md). You can set a different color.

## Topics

### Configuring indicators

- [color](nstextinsertionindicator/color.md): The color of this indicator.
- [effectsViewInserter](nstextinsertionindicator/effectsviewinserter.md): An optional closure the system calls during dictation.

### Setting the display mode

- [displayMode](nstextinsertionindicator/displaymode-swift.property.md): A value that describes the display mode of an indicator.
- [automaticModeOptions](nstextinsertionindicator/automaticmodeoptions-swift.property.md): Options that affect the automatic display mode.
- [NSTextInsertionIndicatorAutomaticModeOptions](nstextinsertionindicator/automaticmodeoptions-swift.struct.md): Options that affect the automatic display mode.
- [NSTextInsertionIndicatorDisplayMode](nstextinsertionindicator/displaymode-swift.enum.md): Constants that determine how to display the system text cursor in a custom text UI.

## Relationships

### Inherits From

- [NSView](nsview.md)

## See Also

### Text input

- [Adopting the system text cursor in custom text views](adopting-the-system-text-cursor-in-custom-text-views.md): Incorporate the system text cursor into your custom text UI in AppKit.
- [NSTextInputContext](nstextinputcontext.md): An object that represents the Cocoa text input system.
- [NSTextInputClient](nstextinputclient.md): A set of methods that text views need to implement to interact properly with the text input management system.
- [NSTextAlternatives](nstextalternatives.md): A list of alternative strings for a piece of text.
- [NSTextContent](nstextcontent.md): A protocol that describes specific kinds of input content types.
- [NSTextInsertionIndicatorDisplayMode](nstextinsertionindicator/displaymode-swift.enum.md): Constants that determine how to display the system text cursor in a custom text UI.
- [NSTextInsertionIndicatorAutomaticModeOptions](nstextinsertionindicator/automaticmodeoptions-swift.struct.md): Options that affect the automatic display mode.
