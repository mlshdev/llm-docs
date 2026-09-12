> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputcontext](https://developer.apple.com/documentation/appkit/nstextinputcontext)

# NSTextInputContext (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.6+

An object that represents the Cocoa text input system.

## Declaration

```swift
class NSTextInputContext
```

<a id="overview"></a>

## Overview

The text input system communicates primarily with the client of the activated input context via the [NSTextInputClient](nstextinputclient.md) protocol.

## Topics

### Creating an Input Context

- [init(client:)](nstextinputcontext/init%28client_%29.md): The designated initializer

### Getting the Input Context and Client

- [current](nstextinputcontext/current.md): Returns the current, activated, text input context object.
- [client](nstextinputcontext/client.md): The owner of this input context. (read-only)

### Configuring the Input Context

- [acceptsGlyphInfo](nstextinputcontext/acceptsglyphinfo.md): A Boolean value that indicates whether the client handles `NSGlyphInfoAttributeName` or not.
- [allowedInputSourceLocales](nstextinputcontext/allowedinputsourcelocales.md): The set of keyboard input source locales allowed when this input context is active.

### Activating the Input Context

- [activate()](nstextinputcontext/activate%28%29.md): Activates the receiver.
- [deactivate()](nstextinputcontext/deactivate%28%29.md): Deactivates the receiver.

### Handling Input Sources

- [handleEvent(\_:)](nstextinputcontext/handleevent%28__%29.md): Tells the Cocoa text input system to handle mouse or key events.
- [discardMarkedText()](nstextinputcontext/discardmarkedtext%28%29.md): Tells the Cocoa text input system to discard the current conversion session.
- [invalidateCharacterCoordinates()](nstextinputcontext/invalidatecharactercoordinates%28%29.md): Notifies the Cocoa text input system that the position information previously queried via methods like `firstRectForCharacterRange:actualRange:` needs to be updated.
- [keyboardInputSources](nstextinputcontext/keyboardinputsources.md): The array of keyboard text input source identifier strings available to the receiver. (read-only)
- [selectedKeyboardInputSource](nstextinputcontext/selectedkeyboardinputsource.md): The identifier string for the selected keyboard text input source.
- [localizedName(forInputSource:)](nstextinputcontext/localizedname%28forinputsource_%29.md): Returns the display name for the given text input source identifier.
- [NSTextInputSourceIdentifier](nstextinputsourceidentifier.md)

### Notifications

- [keyboardSelectionDidChangeNotification](nstextinputcontext/keyboardselectiondidchangenotification.md): Posted after the selected text input source changes.

### Instance Methods

- [textInputClientDidEndScrollingOrZooming()](nstextinputcontext/textinputclientdidendscrollingorzooming%28%29.md)
- [textInputClientWillStartScrollingOrZooming()](nstextinputcontext/textinputclientwillstartscrollingorzooming%28%29.md)
- [textInputClientDidScroll()](nstextinputcontext/textinputclientdidscroll%28%29.md)
- [textInputClientDidUpdateSelection()](nstextinputcontext/textinputclientdidupdateselection%28%29.md)

### Structures

- [NSTextInputContext.KeyboardSelectionDidChangeMessage](nstextinputcontext/keyboardselectiondidchangemessage.md)

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

### Text input

- [Adopting the system text cursor in custom text views](adopting-the-system-text-cursor-in-custom-text-views.md): Incorporate the system text cursor into your custom text UI in AppKit.
- [NSTextInputClient](nstextinputclient.md): A set of methods that text views need to implement to interact properly with the text input management system.
- [NSTextAlternatives](nstextalternatives.md): A list of alternative strings for a piece of text.
- [NSTextContent](nstextcontent.md): A protocol that describes specific kinds of input content types.
- [NSTextInsertionIndicator](nstextinsertionindicator.md): A view that represents the insertion indicator in text.
- [NSTextInsertionIndicator.DisplayMode](nstextinsertionindicator/displaymode-swift.enum.md): Constants that determine how to display the system text cursor in a custom text UI.
- [NSTextInsertionIndicator.AutomaticModeOptions](nstextinsertionindicator/automaticmodeoptions-swift.struct.md): Options that affect the automatic display mode.

# NSTextInputContext (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.6+

An object that represents the Cocoa text input system.

## Declaration

```objectivec
@interface NSTextInputContext : NSObject
```

<a id="overview"></a>

## Overview

The text input system communicates primarily with the client of the activated input context via the [NSTextInputClient](nstextinputclient.md) protocol.

## Topics

### Creating an Input Context

- [initWithClient:](nstextinputcontext/init%28client_%29.md): The designated initializer

### Getting the Input Context and Client

- [currentInputContext](nstextinputcontext/current.md): Returns the current, activated, text input context object.
- [client](nstextinputcontext/client.md): The owner of this input context. (read-only)

### Configuring the Input Context

- [acceptsGlyphInfo](nstextinputcontext/acceptsglyphinfo.md): A Boolean value that indicates whether the client handles `NSGlyphInfoAttributeName` or not.
- [allowedInputSourceLocales](nstextinputcontext/allowedinputsourcelocales.md): The set of keyboard input source locales allowed when this input context is active.

### Activating the Input Context

- [activate](nstextinputcontext/activate%28%29.md): Activates the receiver.
- [deactivate](nstextinputcontext/deactivate%28%29.md): Deactivates the receiver.

### Handling Input Sources

- [handleEvent:](nstextinputcontext/handleevent%28__%29.md): Tells the Cocoa text input system to handle mouse or key events.
- [discardMarkedText](nstextinputcontext/discardmarkedtext%28%29.md): Tells the Cocoa text input system to discard the current conversion session.
- [invalidateCharacterCoordinates](nstextinputcontext/invalidatecharactercoordinates%28%29.md): Notifies the Cocoa text input system that the position information previously queried via methods like `firstRectForCharacterRange:actualRange:` needs to be updated.
- [keyboardInputSources](nstextinputcontext/keyboardinputsources.md): The array of keyboard text input source identifier strings available to the receiver. (read-only)
- [selectedKeyboardInputSource](nstextinputcontext/selectedkeyboardinputsource.md): The identifier string for the selected keyboard text input source.
- [localizedNameForInputSource:](nstextinputcontext/localizedname%28forinputsource_%29.md): Returns the display name for the given text input source identifier.
- [NSTextInputSourceIdentifier](nstextinputsourceidentifier.md)

### Notifications

- [NSTextInputContextKeyboardSelectionDidChangeNotification](nstextinputcontext/keyboardselectiondidchangenotification.md): Posted after the selected text input source changes.

### Instance Methods

- [textInputClientDidEndScrollingOrZooming](nstextinputcontext/textinputclientdidendscrollingorzooming%28%29.md)
- [textInputClientWillStartScrollingOrZooming](nstextinputcontext/textinputclientwillstartscrollingorzooming%28%29.md)
- [textInputClientDidScroll](nstextinputcontext/textinputclientdidscroll%28%29.md)
- [textInputClientDidUpdateSelection](nstextinputcontext/textinputclientdidupdateselection%28%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Text input

- [Adopting the system text cursor in custom text views](adopting-the-system-text-cursor-in-custom-text-views.md): Incorporate the system text cursor into your custom text UI in AppKit.
- [NSTextInputClient](nstextinputclient.md): A set of methods that text views need to implement to interact properly with the text input management system.
- [NSTextAlternatives](nstextalternatives.md): A list of alternative strings for a piece of text.
- [NSTextContent](nstextcontent.md): A protocol that describes specific kinds of input content types.
- [NSTextInsertionIndicator](nstextinsertionindicator.md): A view that represents the insertion indicator in text.
- [NSTextInsertionIndicatorDisplayMode](nstextinsertionindicator/displaymode-swift.enum.md): Constants that determine how to display the system text cursor in a custom text UI.
- [NSTextInsertionIndicatorAutomaticModeOptions](nstextinsertionindicator/automaticmodeoptions-swift.struct.md): Options that affect the automatic display mode.
