> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinputviewaudiofeedback](https://developer.apple.com/documentation/uikit/uiinputviewaudiofeedback)

# UIInputViewAudioFeedback (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A property that enables a custom input or keyboard accessory view to play standard keyboard input clicks.

## Declaration

```swift
@MainActor protocol UIInputViewAudioFeedback : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Implement this protocol in your custom subclass of [UIView](uiview.md) that you associate with your custom input nib file. For more information, see [Text Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/StringsTextFonts/Conceptual/TextAndWebiPhoneOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009542).

Implementation of this protocol is optional but expected.

## Topics

### Enabling input clicks

- [enableInputClicksWhenVisible](uiinputviewaudiofeedback/enableinputclickswhenvisible.md): Specifies whether or not an input view enables input clicks.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Custom keyboard

- [UITextDocumentProxy](uitextdocumentproxy.md): An object that provides textual context to a custom keyboard.
- [UIInputViewController](uiinputviewcontroller.md): The primary view controller for a custom keyboard app extension.
- [UILexicon](uilexicon.md): A read-only array of term pairs, each in a lexicon entry object, for a custom keyboard.
- [UILexiconEntry](uilexiconentry.md): A read-only term pair, available within a lexicon object, for a custom keyboard.

# UIInputViewAudioFeedback (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A property that enables a custom input or keyboard accessory view to play standard keyboard input clicks.

## Declaration

```objectivec
@protocol UIInputViewAudioFeedback <NSObject>
```

<a id="overview"></a>

## Overview

Implement this protocol in your custom subclass of [UIView](uiview.md) that you associate with your custom input nib file. For more information, see [Text Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/StringsTextFonts/Conceptual/TextAndWebiPhoneOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009542).

Implementation of this protocol is optional but expected.

## Topics

### Enabling input clicks

- [enableInputClicksWhenVisible](uiinputviewaudiofeedback/enableinputclickswhenvisible.md): Specifies whether or not an input view enables input clicks.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Custom keyboard

- [UITextDocumentProxy](uitextdocumentproxy.md): An object that provides textual context to a custom keyboard.
- [UIInputViewController](uiinputviewcontroller.md): The primary view controller for a custom keyboard app extension.
- [UILexicon](uilexicon.md): A read-only array of term pairs, each in a lexicon entry object, for a custom keyboard.
- [UILexiconEntry](uilexiconentry.md): A read-only term pair, available within a lexicon object, for a custom keyboard.
