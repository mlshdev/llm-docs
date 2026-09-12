> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdocumentproxy](https://developer.apple.com/documentation/uikit/uitextdocumentproxy)

# UITextDocumentProxy (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An object that provides textual context to a custom keyboard.

## Declaration

```swift
@MainActor protocol UITextDocumentProxy : UIKeyInput
```

## Mentioned In

- [Handling text interactions in custom keyboards](handling-text-interactions-in-custom-keyboards.md)

<a id="overview"></a>

## Overview

Through conformance to the [UIKeyInput](uikeyinput.md) protocol, a text document proxy enables a custom keyboard (which is based on the [UIInputViewController](uiinputviewcontroller.md) class) to insert and delete text, to adjust the position of the insertion point, and to determine whether a text input object is empty. The text document proxy uses the keyboard’s [textDocumentProxy](uiinputviewcontroller/textdocumentproxy.md) property to do this.

For more about using a text document proxy, see [UIInputViewController](uiinputviewcontroller.md) and [Creating a custom keyboard](creating-a-custom-keyboard.md).

## Topics

### Getting the text-input mode

- [documentInputMode](uitextdocumentproxy/documentinputmode.md): The text-input mode for the keyboard.

### Obtaining textual context around the insertion point

- [documentContextAfterInput](uitextdocumentproxy/documentcontextafterinput.md): Textual context after the insertion point in the current text input object.
- [documentContextBeforeInput](uitextdocumentproxy/documentcontextbeforeinput.md): Textual context before the insertion point in the current text input object.

### Adjusting the insertion point position

- [adjustTextPosition(byCharacterOffset:)](uitextdocumentproxy/adjusttextposition%28bycharacteroffset_%29.md): Moves the insertion point forward or backward in the current text input object.

### Getting the selected text

- [selectedText](uitextdocumentproxy/selectedtext.md): The currently selected text in the document.

### Managing marked text

- [setMarkedText(\_:selectedRange:)](uitextdocumentproxy/setmarkedtext%28__selectedrange_%29.md): Inserts the provided text and marks it to indicate that it’s part of an active input session.
- [unmarkText()](uitextdocumentproxy/unmarktext%28%29.md): Unmarks the currently marked text.

### Distinguishing changes in the document

- [documentIdentifier](uitextdocumentproxy/documentidentifier.md): The unique identifier for the document.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIKeyInput](uikeyinput.md)
- [UITextInputTraits](uitextinputtraits.md)

## See Also

### Custom keyboard

- [UIInputViewAudioFeedback](uiinputviewaudiofeedback.md): A property that enables a custom input or keyboard accessory view to play standard keyboard input clicks.
- [UIInputViewController](uiinputviewcontroller.md): The primary view controller for a custom keyboard app extension.
- [UILexicon](uilexicon.md): A read-only array of term pairs, each in a lexicon entry object, for a custom keyboard.
- [UILexiconEntry](uilexiconentry.md): A read-only term pair, available within a lexicon object, for a custom keyboard.

# UITextDocumentProxy (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An object that provides textual context to a custom keyboard.

## Declaration

```objectivec
@protocol UITextDocumentProxy <UIKeyInput>
```

## Mentioned In

- [Handling text interactions in custom keyboards](handling-text-interactions-in-custom-keyboards.md)

<a id="overview"></a>

## Overview

Through conformance to the [UIKeyInput](uikeyinput.md) protocol, a text document proxy enables a custom keyboard (which is based on the [UIInputViewController](uiinputviewcontroller.md) class) to insert and delete text, to adjust the position of the insertion point, and to determine whether a text input object is empty. The text document proxy uses the keyboard’s [textDocumentProxy](uiinputviewcontroller/textdocumentproxy.md) property to do this.

For more about using a text document proxy, see [UIInputViewController](uiinputviewcontroller.md) and [Creating a custom keyboard](creating-a-custom-keyboard.md).

## Topics

### Getting the text-input mode

- [documentInputMode](uitextdocumentproxy/documentinputmode.md): The text-input mode for the keyboard.

### Obtaining textual context around the insertion point

- [documentContextAfterInput](uitextdocumentproxy/documentcontextafterinput.md): Textual context after the insertion point in the current text input object.
- [documentContextBeforeInput](uitextdocumentproxy/documentcontextbeforeinput.md): Textual context before the insertion point in the current text input object.

### Adjusting the insertion point position

- [adjustTextPositionByCharacterOffset:](uitextdocumentproxy/adjusttextposition%28bycharacteroffset_%29.md): Moves the insertion point forward or backward in the current text input object.

### Getting the selected text

- [selectedText](uitextdocumentproxy/selectedtext.md): The currently selected text in the document.

### Managing marked text

- [setMarkedText:selectedRange:](uitextdocumentproxy/setmarkedtext%28__selectedrange_%29.md): Inserts the provided text and marks it to indicate that it’s part of an active input session.
- [unmarkText](uitextdocumentproxy/unmarktext%28%29.md): Unmarks the currently marked text.

### Distinguishing changes in the document

- [documentIdentifier](uitextdocumentproxy/documentidentifier.md): The unique identifier for the document.

## Relationships

### Inherits From

- [UIKeyInput](uikeyinput.md)

## See Also

### Custom keyboard

- [UIInputViewAudioFeedback](uiinputviewaudiofeedback.md): A property that enables a custom input or keyboard accessory view to play standard keyboard input clicks.
- [UIInputViewController](uiinputviewcontroller.md): The primary view controller for a custom keyboard app extension.
- [UILexicon](uilexicon.md): A read-only array of term pairs, each in a lexicon entry object, for a custom keyboard.
- [UILexiconEntry](uilexiconentry.md): A read-only term pair, available within a lexicon object, for a custom keyboard.
