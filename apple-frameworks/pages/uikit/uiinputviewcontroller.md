> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinputviewcontroller](https://developer.apple.com/documentation/uikit/uiinputviewcontroller)

# UIInputViewController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The primary view controller for a custom keyboard app extension.

## Declaration

```swift
@MainActor class UIInputViewController
```

## Mentioned In

- [Configuring open access for a custom keyboard](configuring-open-access-for-a-custom-keyboard.md)
- [Handling text interactions in custom keyboards](handling-text-interactions-in-custom-keyboards.md)

<a id="overview"></a>

## Overview

To create a custom keyboard, first subclass the [UIInputViewController](uiinputviewcontroller.md) class, then add your keyboard’s user interface to the [inputView](uiinputviewcontroller/inputview.md) property of your subclass. In Xcode, you can start a custom keyboard by choosing the Custom Keyboard target template.

A custom keyboard can respond to user input events in the following ways:

- Add text in the form of an unattributed [NSString](../foundation/nsstring.md) object at the insertion point in the current text input object, by calling the [insertText(\_:)](uikeyinput/inserttext%28__%29.md) method on the [textDocumentProxy](uiinputviewcontroller/textdocumentproxy.md) property. This property provides that method through its conformance to the [UIKeyInput](uikeyinput.md) protocol
- Delete text in a backward direction, starting at the insertion point, by calling the [deleteBackward()](uikeyinput/deletebackward%28%29.md) method on the [textDocumentProxy](uiinputviewcontroller/textdocumentproxy.md) property.
- Switch to another keyboard in the set of user-enabled keyboards, by calling the [advanceToNextInputMode()](uiinputviewcontroller/advancetonextinputmode%28%29.md) method.
- Dismiss the keyboard, by calling the [dismissKeyboard()](uiinputviewcontroller/dismisskeyboard%28%29.md) method.

Obtain textual context around the insertion point by reading the [textDocumentProxy](uiinputviewcontroller/textdocumentproxy.md) properties [documentContextBeforeInput](uitextdocumentproxy/documentcontextbeforeinput.md) and [documentContextAfterInput](uitextdocumentproxy/documentcontextafterinput.md). To find out if the current text input object is empty, call the [hasText](uikeyinput/hastext.md) method on the [textDocumentProxy](uiinputviewcontroller/textdocumentproxy.md) property. You can employ this textual context by considering it along with user input, to offer context-sensitive output to a document from your keyboard.

An input view controller conforms to the [UITextInputDelegate](uitextinputdelegate.md) protocol, allowing you to respond to changes in document content and position of the insertion point.

To present an appropriate keyboard layout, respond to the current text input object’s [UIKeyboardType](uikeyboardtype.md) property. For each keyboard type trait you support, change the contents of your primary view accordingly.

For more about creating a custom keyboard, read [Custom Keyboard](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/CustomKeyboard.html#//apple_ref/doc/uid/TP40014214-CH16) in [App Extension Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214).

## Topics

### Providing a user interface for a custom keyboard

- [inputView](uiinputviewcontroller/inputview.md): The primary view for the input view controller.

### Controlling a custom keyboard

- [advanceToNextInputMode()](uiinputviewcontroller/advancetonextinputmode%28%29.md): Switches to the next keyboard in the list of user-enabled keyboards.
- [dismissKeyboard()](uiinputviewcontroller/dismisskeyboard%28%29.md): Dismisses the custom keyboard from the screen.
- [handleInputModeList(from:with:)](uiinputviewcontroller/handleinputmodelist%28from_with_%29.md): Supports interaction with the list of user-enabled keyboards.

### Interacting with a text input object

- [textDocumentProxy](uiinputviewcontroller/textdocumentproxy.md): A proxy to the text input object that the custom keyboard is interacting with.
- [UITextDocumentProxy](uitextdocumentproxy.md): An object that provides textual context to a custom keyboard.

### Obtaining a supplementary lexicon

- [requestSupplementaryLexicon(completion:)](uiinputviewcontroller/requestsupplementarylexicon%28completion_%29.md): Obtains a supplementary lexicon of term pairs in a custom keyboard.

### Changing the primary language of a custom keyboard

- [primaryLanguage](uiinputviewcontroller/primarylanguage.md): The primary language for a custom keyboard.

### Configuring the keyboard behaviors

- [needsInputModeSwitchKey](uiinputviewcontroller/needsinputmodeswitchkey.md): A Boolean value that indicates whether the keyboard must display an input switcher key.
- [hasFullAccess](uiinputviewcontroller/hasfullaccess.md): A Boolean value that indicates whether the keyboard has full access.
- [hasDictationKey](uiinputviewcontroller/hasdictationkey.md): A Boolean value that indicates whether the keyboard has a dictation key.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UIContentContainer](uicontentcontainer.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UIStateRestoring](uistaterestoring.md)
- [UITextInputDelegate](uitextinputdelegate.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Custom keyboard

- [UITextDocumentProxy](uitextdocumentproxy.md): An object that provides textual context to a custom keyboard.
- [UIInputViewAudioFeedback](uiinputviewaudiofeedback.md): A property that enables a custom input or keyboard accessory view to play standard keyboard input clicks.
- [UILexicon](uilexicon.md): A read-only array of term pairs, each in a lexicon entry object, for a custom keyboard.
- [UILexiconEntry](uilexiconentry.md): A read-only term pair, available within a lexicon object, for a custom keyboard.

# UIInputViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The primary view controller for a custom keyboard app extension.

## Declaration

```objectivec
@interface UIInputViewController : UIViewController
```

## Mentioned In

- [Configuring open access for a custom keyboard](configuring-open-access-for-a-custom-keyboard.md)
- [Handling text interactions in custom keyboards](handling-text-interactions-in-custom-keyboards.md)

<a id="overview"></a>

## Overview

To create a custom keyboard, first subclass the [UIInputViewController](uiinputviewcontroller.md) class, then add your keyboard’s user interface to the [inputView](uiinputviewcontroller/inputview.md) property of your subclass. In Xcode, you can start a custom keyboard by choosing the Custom Keyboard target template.

A custom keyboard can respond to user input events in the following ways:

- Add text in the form of an unattributed [NSString](../foundation/nsstring.md) object at the insertion point in the current text input object, by calling the [insertText:](uikeyinput/inserttext%28__%29.md) method on the [textDocumentProxy](uiinputviewcontroller/textdocumentproxy.md) property. This property provides that method through its conformance to the [UIKeyInput](uikeyinput.md) protocol
- Delete text in a backward direction, starting at the insertion point, by calling the [deleteBackward](uikeyinput/deletebackward%28%29.md) method on the [textDocumentProxy](uiinputviewcontroller/textdocumentproxy.md) property.
- Switch to another keyboard in the set of user-enabled keyboards, by calling the [advanceToNextInputMode](uiinputviewcontroller/advancetonextinputmode%28%29.md) method.
- Dismiss the keyboard, by calling the [dismissKeyboard](uiinputviewcontroller/dismisskeyboard%28%29.md) method.

Obtain textual context around the insertion point by reading the [textDocumentProxy](uiinputviewcontroller/textdocumentproxy.md) properties [documentContextBeforeInput](uitextdocumentproxy/documentcontextbeforeinput.md) and [documentContextAfterInput](uitextdocumentproxy/documentcontextafterinput.md). To find out if the current text input object is empty, call the [hasText](uikeyinput/hastext.md) method on the [textDocumentProxy](uiinputviewcontroller/textdocumentproxy.md) property. You can employ this textual context by considering it along with user input, to offer context-sensitive output to a document from your keyboard.

An input view controller conforms to the [UITextInputDelegate](uitextinputdelegate.md) protocol, allowing you to respond to changes in document content and position of the insertion point.

To present an appropriate keyboard layout, respond to the current text input object’s [UIKeyboardType](uikeyboardtype.md) property. For each keyboard type trait you support, change the contents of your primary view accordingly.

For more about creating a custom keyboard, read [Custom Keyboard](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/CustomKeyboard.html#//apple_ref/doc/uid/TP40014214-CH16) in [App Extension Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214).

## Topics

### Providing a user interface for a custom keyboard

- [inputView](uiinputviewcontroller/inputview.md): The primary view for the input view controller.

### Controlling a custom keyboard

- [advanceToNextInputMode](uiinputviewcontroller/advancetonextinputmode%28%29.md): Switches to the next keyboard in the list of user-enabled keyboards.
- [dismissKeyboard](uiinputviewcontroller/dismisskeyboard%28%29.md): Dismisses the custom keyboard from the screen.
- [handleInputModeListFromView:withEvent:](uiinputviewcontroller/handleinputmodelist%28from_with_%29.md): Supports interaction with the list of user-enabled keyboards.

### Interacting with a text input object

- [textDocumentProxy](uiinputviewcontroller/textdocumentproxy.md): A proxy to the text input object that the custom keyboard is interacting with.
- [UITextDocumentProxy](uitextdocumentproxy.md): An object that provides textual context to a custom keyboard.

### Obtaining a supplementary lexicon

- [requestSupplementaryLexiconWithCompletion:](uiinputviewcontroller/requestsupplementarylexicon%28completion_%29.md): Obtains a supplementary lexicon of term pairs in a custom keyboard.

### Changing the primary language of a custom keyboard

- [primaryLanguage](uiinputviewcontroller/primarylanguage.md): The primary language for a custom keyboard.

### Configuring the keyboard behaviors

- [needsInputModeSwitchKey](uiinputviewcontroller/needsinputmodeswitchkey.md): A Boolean value that indicates whether the keyboard must display an input switcher key.
- [hasFullAccess](uiinputviewcontroller/hasfullaccess.md): A Boolean value that indicates whether the keyboard has full access.
- [hasDictationKey](uiinputviewcontroller/hasdictationkey.md): A Boolean value that indicates whether the keyboard has a dictation key.

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

### Conforms To

- [UITextInputDelegate](uitextinputdelegate.md)

## See Also

### Custom keyboard

- [UITextDocumentProxy](uitextdocumentproxy.md): An object that provides textual context to a custom keyboard.
- [UIInputViewAudioFeedback](uiinputviewaudiofeedback.md): A property that enables a custom input or keyboard accessory view to play standard keyboard input clicks.
- [UILexicon](uilexicon.md): A read-only array of term pairs, each in a lexicon entry object, for a custom keyboard.
- [UILexiconEntry](uilexiconentry.md): A read-only term pair, available within a lexicon object, for a custom keyboard.
