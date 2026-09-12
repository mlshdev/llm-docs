> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring](https://developer.apple.com/documentation/foundation/nsattributedstring)

# NSAttributedString (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string of text that manages data, layout, and stylistic information for ranges of characters to support rendering.

## Declaration

```swift
class NSAttributedString
```

<a id="overview"></a>

## Overview

[NSAttributedString](nsattributedstring.md) is a type you use to manage strings of stylized Unicode text. In addition to text, an attributed string contains key-value pairs known as *attributes* that specify additional information to apply to ranges of characters within the string. Attributed strings support many different kinds of attributes, including:

- Rendering attributes that specify font, color, kern, ligature, and other details
- Attributes for attachments and adaptive image glyphs
- Semantic attributes such as link URLs or tool-tip information
- Language attributes to support automatic gender agreement and text layout
- Accessibility attributes that provide information for assistive technologies
- Attributes that summarize details of the Markdown import process
- Custom attributes you define for your app

Use attributed strings anywhere you need styled text, or when you need to associate additional information with your text. Because [NSAttributedString](nsattributedstring.md) is an immutable type, you specify all of the text and attributes for it at creation time and can’t change them later. You can create attributed strings directly from a string of characters and a dictionary of attributes. You can also create attributed strings from the contents of a file, including files that contain RTF, RTFD, HTML, Markdown, or other file formats. If you need to modify the contents of an attributed string later, use the [NSMutableAttributedString](nsmutableattributedstring.md) type instead.

If you create an [NSAttributedString](nsattributedstring.md) without any font information, the string’s default font is Helvetica 12-point, which might differ from the default system font for the platform. To change the font, specify a font attribute at creation time.

<a id="Persistence"></a>

### Persistence

Be aware of how you persist attributed strings to and from the disk. RTF and RTFD are the preferred format for attributed strings because they offer the best fidelity for reading and writing attribute data. The RTF formats support a large number of standard attributes, and Apple extends the formats to support many Apple-specific attributes. If you define custom attributes for ranges of characters, store them separately alongside the RTF file for your text.

If you work extensively with HTML content, validate the results and performance of import and export operations during testing. WebKit handles the conversion between HTML markup and attributed strings. If an HTML file contains tags or constructs that attributed strings don’t support, the import process ignores them and imports what it can.

> **Note**

>  Apple discourages the use of the synchronous `initWithHTML:` initializers, which parse HTML in-process. Use the WebKit-based [loadFromHTML(request:options:completionHandler:)](nsattributedstring/loadfromhtml%28request_options_completionhandler_%29.md) family of methods instead, which parse HTML out-of-process for improved security, stability, and code isolation.

When you create an attributed string from Markdown, the system adds presentation intent attributes with information about the original Markdown content. The system doesn’t add style attributes to match the Markdown elements, but the system applies default style information when it renders a string with intent attributes. To change the rendering behavior of your Markdown content, remove the intent attributes and add the style attributes you prefer.

> **Important**

>  When reading or writing attributed strings, choose methods that return or throw an error, and check any errors you receive. Handling errors is the best way to detect issues with the import or export process and take corrective action.

The methods for reading and writing common file formats also support document attributes. Document attributes aren’t part of the attributed string itself, but accompany the text when you save it to a file. When you read a file, the system returns any document attributes that it finds. Similarly, when you write an attributed string to a file, you can specify the attributes to include. For more information about document attributes, see [NSAttributedString.DocumentAttributeKey](nsattributedstring/documentattributekey.md) and [NSAttributedString.DocumentReadingOptionKey](nsattributedstring/documentreadingoptionkey.md).

<a id="System-framework-interoperability"></a>

### System framework interoperability

[TextKit](../uikit/textkit.md) and [Core Text](../coretext.md) use attributed strings extensively during the layout and rendering processes. These technologies use the string’s text and rendering-related attributes to calculate the text metrics needed during layout. Similarly, these technologies apply those same attributes during rendering to give the text its styled appearance. The technologies use only attributes that directly affect the appearance of the text, and ignore most other attributes. For some attributes, the text system adds attributes during rendering as needed. For example, the text system provides default style attributes for text with the [link](nsattributedstring/key/link.md) attribute.

[AppKit](https://developer.apple.com/documentation/appkit) and [UIKit](../uikit.md) also support attributed strings in several ways. Some views and controls in these frameworks have APIs that accept attributed strings, and render the string with its style information. The frameworks also add methods to the [NSAttributedString](nsattributedstring.md) class that let you draw a styled string directly in one of your custom views. Because these methods use TextKit to draw the string, they recognize the same rendering-related attributes as that technology.

The [NSAttributedString](nsattributedstring.md) class and its Core Foundation counterpart, [CFAttributedString](../corefoundation/cfattributedstring.md), are toll-free bridged, which means you can use the two types interchangeably in your code without losing any text or attribute information.

## Topics

### Creating attributed strings

- [Creation methods](creation-methods.md): Create attributed strings from existing content or raw text and apply the initial attributes.

### Exporting the string as data

- [data(from:documentAttributes:)](nsattributedstring/data%28from_documentattributes_%29.md): Returns a data object that contains a text stream corresponding to the characters and attributes within the specified range.
- [fileWrapper(from:documentAttributes:)](nsattributedstring/filewrapper%28from_documentattributes_%29.md): Returns a file wrapper object that contains a text stream corresponding to the characters and attributes within the specified range.
- [docFormat(from:documentAttributes:)](nsattributedstring/docformat%28from_documentattributes_%29.md): Returns a data object that contains a Microsoft Word–format stream corresponding to the characters and attributes within the specified range.
- [rtf(from:documentAttributes:)](nsattributedstring/rtf%28from_documentattributes_%29.md): Returns a data object that contains an RTF stream corresponding to the characters and attributes within the specified range, omitting all attachment attributes.
- [rtfd(from:documentAttributes:)](nsattributedstring/rtfd%28from_documentattributes_%29.md): Returns a data object that contains an RTFD stream corresponding to the characters and attributes within the specified range.
- [rtfdFileWrapper(from:documentAttributes:)](nsattributedstring/rtfdfilewrapper%28from_documentattributes_%29.md): Returns a file wrapper object that contains an RTFD document corresponding to the characters and attributes within the specified range.

### Getting the characters

- [string](nsattributedstring/string.md): The character contents of the attributed string as a string.
- [length](nsattributedstring/length.md): The length of the attributed string.
- [attributedSubstring(from:)](nsattributedstring/attributedsubstring%28from_%29.md): Returns an attributed string consisting of the characters and attributes within the specified range in the attributed string.

### Getting font attribute information

- [fontAttributes(in:)](nsattributedstring/fontattributes%28in_%29.md): Returns the font attributes in effect for the character at the specified location.
- [rulerAttributes(in:)](nsattributedstring/rulerattributes%28in_%29.md): Returns the ruler (paragraph) attributes in effect for the characters within the specified range.

### Getting attributes for a range of text

- [attributes(at:effectiveRange:)](nsattributedstring/attributes%28at_effectiverange_%29.md): Returns the attributes for the character at the specified index.
- [attributes(at:longestEffectiveRange:in:)](nsattributedstring/attributes%28at_longesteffectiverange_in_%29.md): Returns the attributes for the character at the specified index and, by reference, the range where the attributes apply.
- [attribute(\_:at:effectiveRange:)](nsattributedstring/attribute%28__at_effectiverange_%29.md): Returns the value for an attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [attribute(\_:at:longestEffectiveRange:in:)](nsattributedstring/attribute%28__at_longesteffectiverange_in_%29.md): Returns the value for the attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [enumerateAttribute(\_:in:options:using:)](nsattributedstring/enumerateattribute%28__in_options_using_%29.md): Executes the specified closure or block for each range of a particular attribute in the attributed string.
- [enumerateAttributes(in:options:using:)](nsattributedstring/enumerateattributes%28in_options_using_%29.md): Executes the specified closure or block for each range of attributes in the attributed string.
- [NSAttributedString.EnumerationOptions](nsattributedstring/enumerationoptions.md): Options for enumerating attributes.

### Getting text content attributes

- [NSAttributedString.Key](nsattributedstring/key.md): The attributes you apply to ranges of characters in an attributed string.
- [NSAttributedString.TextHighlightStyle](nsattributedstring/texthighlightstyle.md): Constants that specify the type of highlight to apply to text.
- [NSAttributedString.TextHighlightColorScheme](nsattributedstring/texthighlightcolorscheme.md): Constants that specify the highlight color to use with the text.
- [NSAttributedString.TextEffectStyle](nsattributedstring/texteffectstyle.md): Constants for the type of effect to apply to the text.
- [NSAttributedString.SpellingState](nsattributedstring/spellingstate.md): Constants for the spelling state attribute key.
- [NSUnderlineStyle](../uikit/nsunderlinestyle.md): Constants for the underline style and strikethrough style attribute keys.
- [NSWritingDirectionFormatType](../uikit/nswritingdirectionformattype.md): Constants for the writing direction attribute key.

### Getting document-wide attributes

- [NSAttributedString.DocumentAttributeKey](nsattributedstring/documentattributekey.md): The attributes you apply to an entire document.
- [NSAttributedString.DocumentReadingOptionKey](nsattributedstring/documentreadingoptionkey.md): Options for constructing an attributed string from data you read from disk.
- [HTML attributes](html-attributes.md): Documentwide attributes that provide control over the form of generated HTML.
- [NSAttributedString.DocumentType](nsattributedstring/documenttype.md): Constants for the document type document attribute key.
- [NSAttributedString.TextLayoutSectionKey](nsattributedstring/textlayoutsectionkey.md): Constants for the text layout sections document attribute key.
- [NSTextScalingType](../uikit/nstextscalingtype.md): Constants that specify the text scaling.

### Representing markdown attributes

- [InlinePresentationIntent](inlinepresentationintent.md): A type that defines presentation intent for runs of characters for traits like emphasis, strikethrough, and code voice.

### Comparing strings

- [isEqual(to:)](nsattributedstring/isequal%28to_%29.md): Returns a Boolean value that indicates whether the attributed string is equal to the specified string.

### Getting the supported text-file formats

- [prefersRTFD(in:)](nsattributedstring/prefersrtfd%28in_%29.md): Returns a Boolean value that indicates whether the specified range of text prefers RTFD formatting.
- [textTypes](nsattributedstring/texttypes.md): An array of UTI strings that identify the file types that attributed strings support, either directly or through a user-installed filter service.
- [textUnfilteredTypes](nsattributedstring/textunfilteredtypes.md): An array of UTI strings that identify the file types that attributed strings support directly.

### Calculating linguistic units

- [doubleClick(at:)](nsattributedstring/doubleclick%28at_%29.md): Returns the range of characters that form a word (or other linguistic unit) surrounding the specified index, taking language characteristics into account.
- [lineBreak(before:within:)](nsattributedstring/linebreak%28before_within_%29.md): Returns the appropriate line break when the character at the index doesn’t fit on the same line as the character at the beginning of the range.
- [lineBreakByHyphenating(before:within:)](nsattributedstring/linebreakbyhyphenating%28before_within_%29.md): Returns the index of the closest character before the specified index, and within the specified range, that can fit on a new line by hyphenating.
- [nextWord(from:forward:)](nsattributedstring/nextword%28from_forward_%29.md): Returns the index of the first character of the word after or before the specified index.

### Performing automatic grammar agreement

- [inflecting()](nsattributedstring/inflecting%28%29.md): If the string has portions tagged with NSInflectionRuleAttributeName that have no format specifiers, create a new string with those portions inflected by following the rule in the attribute.

### Calculating ranges for common elements

- [itemNumber(in:at:)](nsattributedstring/itemnumber%28in_at_%29.md): Returns the index of the item at the specified location within the list.
- [range(of:at:)](nsattributedstring/range%28of_at_%29-1wrcp.md): Returns the range of the individual text block that contains the specified location.
- [range(of:at:)](nsattributedstring/range%28of_at_%29-6um0x.md): Returns the range of the specified text list that contains the specified location.
- [range(of:at:)](nsattributedstring/range%28of_at_%29-3fevu.md): Returns the range of the specified text table that contains the specified location.

### Drawing the attributed string

- [draw(at:)](nsattributedstring/draw%28at_%29.md): Draws the attributed string starting at the specified point in the current graphics context.
- [draw(in:)](nsattributedstring/draw%28in_%29.md): Draws the attributed string inside the specified bounding rectangle in the current graphics context.
- [draw(with:options:context:)](nsattributedstring/draw%28with_options_context_%29.md): Draws the attributed string in the specified bounding rectangle using the provided options.

### Getting metrics for the string

- [size()](nsattributedstring/size%28%29.md): Returns the size necessary to draw the string.
- [boundingRect(with:options:context:)](nsattributedstring/boundingrect%28with_options_context_%29.md): Returns the bounding rectangle necessary to draw the string.
- [containsAttachments(in:)](nsattributedstring/containsattachments%28in_%29.md): Returns a Boolean value that indicates if the attributed string contains an attachment in the specified range.

### Deprecated

- [Deprecated Symbols](deprecated-symbols.md): Migrate your code away from using these symbols.

### Initializers

- [init(coder:)](nsattributedstring/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableAttributedString](nsmutableattributedstring.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSItemProviderReading](nsitemproviderreading.md)
- [NSItemProviderWriting](nsitemproviderwriting.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSPasteboardReading](https://developer.apple.com/documentation/appkit/nspasteboardreading)
- [NSPasteboardWriting](https://developer.apple.com/documentation/appkit/nspasteboardwriting)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Strings with Metadata

- [AttributedString](attributedstring.md): A value type for a string with associated attributes for portions of its text.
- [AttributedSubstring](attributedsubstring.md): A portion of an attributed string.
- [Attributed String Supporting Types](attributed-string-supporting-types.md): Types that the attributed string, attributed substring, and helper types extend or conform to, for sharing common functionality.
- [NSMutableAttributedString](nsmutableattributedstring.md): A mutable string with associated attributes (such as visual style, hyperlinks, or accessibility data) for portions of its text.

# NSAttributedString (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string of text that manages data, layout, and stylistic information for ranges of characters to support rendering.

## Declaration

```objectivec
@interface NSAttributedString : NSObject
```

<a id="overview"></a>

## Overview

[NSAttributedString](nsattributedstring.md) is a type you use to manage strings of stylized Unicode text. In addition to text, an attributed string contains key-value pairs known as *attributes* that specify additional information to apply to ranges of characters within the string. Attributed strings support many different kinds of attributes, including:

- Rendering attributes that specify font, color, kern, ligature, and other details
- Attributes for attachments and adaptive image glyphs
- Semantic attributes such as link URLs or tool-tip information
- Language attributes to support automatic gender agreement and text layout
- Accessibility attributes that provide information for assistive technologies
- Attributes that summarize details of the Markdown import process
- Custom attributes you define for your app

Use attributed strings anywhere you need styled text, or when you need to associate additional information with your text. Because [NSAttributedString](nsattributedstring.md) is an immutable type, you specify all of the text and attributes for it at creation time and can’t change them later. You can create attributed strings directly from a string of characters and a dictionary of attributes. You can also create attributed strings from the contents of a file, including files that contain RTF, RTFD, HTML, Markdown, or other file formats. If you need to modify the contents of an attributed string later, use the [NSMutableAttributedString](nsmutableattributedstring.md) type instead.

If you create an [NSAttributedString](nsattributedstring.md) without any font information, the string’s default font is Helvetica 12-point, which might differ from the default system font for the platform. To change the font, specify a font attribute at creation time.

<a id="Persistence"></a>

### Persistence

Be aware of how you persist attributed strings to and from the disk. RTF and RTFD are the preferred format for attributed strings because they offer the best fidelity for reading and writing attribute data. The RTF formats support a large number of standard attributes, and Apple extends the formats to support many Apple-specific attributes. If you define custom attributes for ranges of characters, store them separately alongside the RTF file for your text.

If you work extensively with HTML content, validate the results and performance of import and export operations during testing. WebKit handles the conversion between HTML markup and attributed strings. If an HTML file contains tags or constructs that attributed strings don’t support, the import process ignores them and imports what it can.

> **Note**

>  Apple discourages the use of the synchronous `initWithHTML:` initializers, which parse HTML in-process. Use the WebKit-based [loadFromHTMLWithRequest:options:completionHandler:](nsattributedstring/loadfromhtml%28request_options_completionhandler_%29.md) family of methods instead, which parse HTML out-of-process for improved security, stability, and code isolation.

When you create an attributed string from Markdown, the system adds presentation intent attributes with information about the original Markdown content. The system doesn’t add style attributes to match the Markdown elements, but the system applies default style information when it renders a string with intent attributes. To change the rendering behavior of your Markdown content, remove the intent attributes and add the style attributes you prefer.

> **Important**

>  When reading or writing attributed strings, choose methods that return or throw an error, and check any errors you receive. Handling errors is the best way to detect issues with the import or export process and take corrective action.

The methods for reading and writing common file formats also support document attributes. Document attributes aren’t part of the attributed string itself, but accompany the text when you save it to a file. When you read a file, the system returns any document attributes that it finds. Similarly, when you write an attributed string to a file, you can specify the attributes to include. For more information about document attributes, see [NSAttributedString.DocumentAttributeKey](nsattributedstring/documentattributekey.md) and [NSAttributedString.DocumentReadingOptionKey](nsattributedstring/documentreadingoptionkey.md).

<a id="System-framework-interoperability"></a>

### System framework interoperability

[TextKit](../uikit/textkit.md) and [Core Text](../coretext.md) use attributed strings extensively during the layout and rendering processes. These technologies use the string’s text and rendering-related attributes to calculate the text metrics needed during layout. Similarly, these technologies apply those same attributes during rendering to give the text its styled appearance. The technologies use only attributes that directly affect the appearance of the text, and ignore most other attributes. For some attributes, the text system adds attributes during rendering as needed. For example, the text system provides default style attributes for text with the [link](nsattributedstring/key/link.md) attribute.

[AppKit](https://developer.apple.com/documentation/appkit) and [UIKit](../uikit.md) also support attributed strings in several ways. Some views and controls in these frameworks have APIs that accept attributed strings, and render the string with its style information. The frameworks also add methods to the [NSAttributedString](nsattributedstring.md) class that let you draw a styled string directly in one of your custom views. Because these methods use TextKit to draw the string, they recognize the same rendering-related attributes as that technology.

The [NSAttributedString](nsattributedstring.md) class and its Core Foundation counterpart, [CFAttributedStringRef](../corefoundation/cfattributedstring.md), are toll-free bridged, which means you can use the two types interchangeably in your code without losing any text or attribute information.

## Topics

### Creating attributed strings

- [Creation methods](creation-methods.md): Create attributed strings from existing content or raw text and apply the initial attributes.

### Exporting the string as data

- [dataFromRange:documentAttributes:error:](nsattributedstring/data%28from_documentattributes_%29.md): Returns a data object that contains a text stream corresponding to the characters and attributes within the specified range.
- [fileWrapperFromRange:documentAttributes:error:](nsattributedstring/filewrapper%28from_documentattributes_%29.md): Returns a file wrapper object that contains a text stream corresponding to the characters and attributes within the specified range.
- [docFormatFromRange:documentAttributes:](nsattributedstring/docformat%28from_documentattributes_%29.md): Returns a data object that contains a Microsoft Word–format stream corresponding to the characters and attributes within the specified range.
- [RTFFromRange:documentAttributes:](nsattributedstring/rtf%28from_documentattributes_%29.md): Returns a data object that contains an RTF stream corresponding to the characters and attributes within the specified range, omitting all attachment attributes.
- [RTFDFromRange:documentAttributes:](nsattributedstring/rtfd%28from_documentattributes_%29.md): Returns a data object that contains an RTFD stream corresponding to the characters and attributes within the specified range.
- [RTFDFileWrapperFromRange:documentAttributes:](nsattributedstring/rtfdfilewrapper%28from_documentattributes_%29.md): Returns a file wrapper object that contains an RTFD document corresponding to the characters and attributes within the specified range.

### Getting the characters

- [string](nsattributedstring/string.md): The character contents of the attributed string as a string.
- [length](nsattributedstring/length.md): The length of the attributed string.
- [attributedSubstringFromRange:](nsattributedstring/attributedsubstring%28from_%29.md): Returns an attributed string consisting of the characters and attributes within the specified range in the attributed string.

### Getting font attribute information

- [fontAttributesInRange:](nsattributedstring/fontattributes%28in_%29.md): Returns the font attributes in effect for the character at the specified location.
- [rulerAttributesInRange:](nsattributedstring/rulerattributes%28in_%29.md): Returns the ruler (paragraph) attributes in effect for the characters within the specified range.

### Getting attributes for a range of text

- [attributesAtIndex:effectiveRange:](nsattributedstring/attributes%28at_effectiverange_%29.md): Returns the attributes for the character at the specified index.
- [attributesAtIndex:longestEffectiveRange:inRange:](nsattributedstring/attributes%28at_longesteffectiverange_in_%29.md): Returns the attributes for the character at the specified index and, by reference, the range where the attributes apply.
- [attribute:atIndex:effectiveRange:](nsattributedstring/attribute%28__at_effectiverange_%29.md): Returns the value for an attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [attribute:atIndex:longestEffectiveRange:inRange:](nsattributedstring/attribute%28__at_longesteffectiverange_in_%29.md): Returns the value for the attribute with the specified name of the character at the specified index and, by reference, the range where the attribute applies.
- [enumerateAttribute:inRange:options:usingBlock:](nsattributedstring/enumerateattribute%28__in_options_using_%29.md): Executes the specified closure or block for each range of a particular attribute in the attributed string.
- [enumerateAttributesInRange:options:usingBlock:](nsattributedstring/enumerateattributes%28in_options_using_%29.md): Executes the specified closure or block for each range of attributes in the attributed string.
- [NSAttributedStringEnumerationOptions](nsattributedstring/enumerationoptions.md): Options for enumerating attributes.

### Getting text content attributes

- [NSAttributedStringKey](nsattributedstring/key.md): The attributes you apply to ranges of characters in an attributed string.
- [NSTextHighlightStyle](../uikit/nstexthighlightstyle.md): Constants that specify the type of highlight to apply to text.
- [NSTextHighlightColorScheme](../uikit/nstexthighlightcolorscheme.md): Constants that specify the highlight color to use with the text.
- [NSTextEffectStyle](../uikit/nstexteffectstyle.md): Constants for the type of effect to apply to the text.
- [NSSpellingState](https://developer.apple.com/documentation/appkit/nsspellingstate): Constants for the spelling state attribute key.
- [NSUnderlineStyle](../uikit/nsunderlinestyle.md): Constants for the underline style and strikethrough style attribute keys.
- [NSWritingDirectionFormatType](../uikit/nswritingdirectionformattype.md): Constants for the writing direction attribute key.

### Getting document-wide attributes

- [NSAttributedStringDocumentAttributeKey](../uikit/nsattributedstringdocumentattributekey.md): The attributes you apply to an entire document.
- [Document reading option keys](document-reading-option-keys.md): Keys for constructing an attributed string from data on disk.
- [HTML attributes](html-attributes.md): Documentwide attributes that provide control over the form of generated HTML.
- [NSAttributedStringDocumentType](../uikit/nsattributedstringdocumenttype.md): Constants for the document type document attribute key.
- [NSTextLayoutSectionKey](../uikit/nstextlayoutsectionkey.md): Constants for the text layout sections document attribute key.
- [NSTextScalingType](../uikit/nstextscalingtype.md): Constants that specify the text scaling.

### Representing markdown attributes

- [NSInlinePresentationIntent](inlinepresentationintent.md): A type that defines presentation intent for runs of characters for traits like emphasis, strikethrough, and code voice.
- [NSPresentationIntent](nspresentationintent.md): A type that contains the Markdown formatting for blocks of text, like paragraphs, lists, code blocks, and parts of tables.
- [NSAttributedStringMarkdownSourcePosition](nsattributedstringmarkdownsourceposition.md): The position of attributed string text in its original Markdown source string.
- [NSPresentationIntentKind](nspresentationintentkind.md): An enumeration of intended display styles for blocks of text like paragraphs, lists, and code blocks.
- [NSPresentationIntentTableColumnAlignment](nspresentationintenttablecolumnalignment.md): An enumeration of values for aligning the contents of table columns.

### Comparing strings

- [isEqualToAttributedString:](nsattributedstring/isequal%28to_%29.md): Returns a Boolean value that indicates whether the attributed string is equal to the specified string.

### Getting the supported text-file formats

- [prefersRTFDInRange:](nsattributedstring/prefersrtfd%28in_%29.md): Returns a Boolean value that indicates whether the specified range of text prefers RTFD formatting.
- [textTypes](nsattributedstring/texttypes.md): An array of UTI strings that identify the file types that attributed strings support, either directly or through a user-installed filter service.
- [textUnfilteredTypes](nsattributedstring/textunfilteredtypes.md): An array of UTI strings that identify the file types that attributed strings support directly.

### Calculating linguistic units

- [doubleClickAtIndex:](nsattributedstring/doubleclick%28at_%29.md): Returns the range of characters that form a word (or other linguistic unit) surrounding the specified index, taking language characteristics into account.
- [lineBreakBeforeIndex:withinRange:](nsattributedstring/linebreak%28before_within_%29.md): Returns the appropriate line break when the character at the index doesn’t fit on the same line as the character at the beginning of the range.
- [lineBreakByHyphenatingBeforeIndex:withinRange:](nsattributedstring/linebreakbyhyphenating%28before_within_%29.md): Returns the index of the closest character before the specified index, and within the specified range, that can fit on a new line by hyphenating.
- [nextWordFromIndex:forward:](nsattributedstring/nextword%28from_forward_%29.md): Returns the index of the first character of the word after or before the specified index.

### Performing automatic grammar agreement

- [attributedStringByInflectingString](nsattributedstring/inflecting%28%29.md): If the string has portions tagged with NSInflectionRuleAttributeName that have no format specifiers, create a new string with those portions inflected by following the rule in the attribute.

### Calculating ranges for common elements

- [itemNumberInTextList:atIndex:](nsattributedstring/itemnumber%28in_at_%29.md): Returns the index of the item at the specified location within the list.
- [rangeOfTextBlock:atIndex:](nsattributedstring/range%28of_at_%29-1wrcp.md): Returns the range of the individual text block that contains the specified location.
- [rangeOfTextList:atIndex:](nsattributedstring/range%28of_at_%29-6um0x.md): Returns the range of the specified text list that contains the specified location.
- [rangeOfTextTable:atIndex:](nsattributedstring/range%28of_at_%29-3fevu.md): Returns the range of the specified text table that contains the specified location.

### Drawing the attributed string

- [drawAtPoint:](nsattributedstring/draw%28at_%29.md): Draws the attributed string starting at the specified point in the current graphics context.
- [drawInRect:](nsattributedstring/draw%28in_%29.md): Draws the attributed string inside the specified bounding rectangle in the current graphics context.
- [drawWithRect:options:context:](nsattributedstring/draw%28with_options_context_%29.md): Draws the attributed string in the specified bounding rectangle using the provided options.

### Getting metrics for the string

- [size](nsattributedstring/size%28%29.md): Returns the size necessary to draw the string.
- [boundingRectWithSize:options:context:](nsattributedstring/boundingrect%28with_options_context_%29.md): Returns the bounding rectangle necessary to draw the string.
- [containsAttachmentsInRange:](nsattributedstring/containsattachments%28in_%29.md): Returns a Boolean value that indicates if the attributed string contains an attachment in the specified range.

### Deprecated

- [Deprecated Symbols](deprecated-symbols.md): Migrate your code away from using these symbols.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMutableAttributedString](nsmutableattributedstring.md)

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NSCopying](nscopying.md)
- [NSItemProviderReading](nsitemproviderreading.md)
- [NSItemProviderWriting](nsitemproviderwriting.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)
- [NSPasteboardReading](https://developer.apple.com/documentation/appkit/nspasteboardreading)
- [NSPasteboardWriting](https://developer.apple.com/documentation/appkit/nspasteboardwriting)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Strings with Metadata

- [NSMutableAttributedString](nsmutableattributedstring.md): A mutable string with associated attributes (such as visual style, hyperlinks, or accessibility data) for portions of its text.
