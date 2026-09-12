> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/textkit-string-attributes](https://developer.apple.com/documentation/appkit/textkit-string-attributes)

# TextKit string attributes

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** API Collection

AppKit-specific keys and values for displaying text and managing documents.

<a id="overview"></a>

## Overview

AppKit defines these attributes and attribute keys you use to specify attribute values in [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) and [NSMutableAttributedString](https://developer.apple.com/documentation/foundation/nsmutableattributedstring).

## Topics

### Getting text content attributes

- [TextKit string attribute keys](textkit-string-attribute-keys.md): AppKit-specific keys you use to apply attributes to ranges of characters in an attributed string.
- [NSTextHighlightStyle](nstexthighlightstyle.md): Constants that specify the type of highlight to apply to text.
- [NSTextHighlightColorScheme](nstexthighlightcolorscheme.md): Constants that specify the highlight color to use with the text.
- [NSTextEffectStyle](nstexteffectstyle.md): Constants for the type of effect to apply to the text.
- [NSSpellingState](nsspellingstate.md): Constants for the spelling state attribute key.
- [NSUnderlineStyle](nsunderlinestyle.md): Constants for the underline style and strikethrough style attribute keys.
- [NSWritingDirectionFormatType](nswritingdirectionformattype.md): Constants for the writing direction attribute key.

### Getting document-wide attributes

- [NSAttributedStringDocumentAttributeKey](nsattributedstringdocumentattributekey.md): The attributes you apply to an entire document.
- [Document reading option keys](document-reading-option-keys.md): Keys for constructing an attributed string from data on disk.
- [NSAttributedStringDocumentType](nsattributedstringdocumenttype.md): Constants for the document type document attribute key.
- [NSTextLayoutSectionKey](nstextlayoutsectionkey.md): Constants for the text layout sections document attribute key.
- [NSTextScalingType](nstextscalingtype.md): Constants that specify the text scaling.

### Deprecated constants

- [NSUnderlineByWordMask](nsunderlinebywordmask.md): Deprecated. Draw the underline only underneath words, not underneath whitespace.

## See Also

### Text management

- [NSTextContentStorage](nstextcontentstorage.md): A concrete object for managing your view’s text content and generating the text elements necessary for layout.
- [NSTextContentManager](nstextcontentmanager.md): An abstract class that defines the interface and a default implementation for managing the text document contents.
- [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring): A string of text that manages data, layout, and stylistic information for ranges of characters to support rendering.
- [NSMutableAttributedString](https://developer.apple.com/documentation/foundation/nsmutableattributedstring): A mutable string with associated attributes (such as visual style, hyperlinks, or accessibility data) for portions of its text.
