> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring](https://developer.apple.com/documentation/foundation/nsmutableattributedstring)

# NSMutableAttributedString (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mutable string with associated attributes (such as visual style, hyperlinks, or accessibility data) for portions of its text.

## Declaration

```swift
class NSMutableAttributedString
```

<a id="overview"></a>

## Overview

The `NSMutableAttributedString` class declares additional methods for mutating the content of an attributed string. You can add and remove characters (raw strings) and attributes separately or together as attributed strings. See the class description for [NSAttributedString](nsattributedstring.md) for more information about attributed strings.

`NSMutableAttributedString` adds two primitive methods to those of `NSAttributedString`. These primitive methods provide the basis for all the other methods in its class. The primitive [replaceCharacters(in:with:)](nsmutableattributedstring/replacecharacters%28in_with_%29-6oq9r.md) method replaces a range of characters with those from a string, leaving all attribute information outside that range intact. The primitive [setAttributes(\_:range:)](nsmutableattributedstring/setattributes%28__range_%29.md) method sets attributes and values for a given range of characters, replacing any previous attributes and values for that range.

In macOS, AppKit also uses [NSParagraphStyle](https://developer.apple.com/documentation/appkit/nsparagraphstyle) and its subclass [NSMutableParagraphStyle](https://developer.apple.com/documentation/appkit/nsmutableparagraphstyle) to encapsulate the paragraph or ruler attributes used by the `NSAttributedString` classes.

Note that the default font for `NSAttributedString` objects is Helvetica 12-point, which may differ from the macOS system font, so you may wish to create the string with non-default attributes suitable for your application using, for example, [init(string:attributes:)](nsattributedstring/init%28string_attributes_%29.md).

> **I OS Note**

>  In iOS, this class is used primarily in conjunction with the Core Text framework.

`NSMutableAttributedString` is “toll-free bridged” with its Core Foundation counterpart, [CFMutableAttributedString](../corefoundation/cfmutableattributedstring.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information.

## Topics

### Retrieving Character Information

- [mutableString](nsmutableattributedstring/mutablestring.md): The character contents of the receiver as a mutable string object.

### Changing Characters

- [replaceCharacters(in:with:)](nsmutableattributedstring/replacecharacters%28in_with_%29-6oq9r.md): Replaces the characters in the given range with the characters of the given string.
- [deleteCharacters(in:)](nsmutableattributedstring/deletecharacters%28in_%29.md): Deletes the characters in the given range along with their associated attributes.

### Changing Attributes

- [setAttributes(\_:range:)](nsmutableattributedstring/setattributes%28__range_%29.md): Sets the attributes for the characters in the specified range to the specified attributes.
- [addAttribute(\_:value:range:)](nsmutableattributedstring/addattribute%28__value_range_%29.md): Adds an attribute with the given name and value to the characters in the specified range.
- [addAttributes(\_:range:)](nsmutableattributedstring/addattributes%28__range_%29.md): Adds the given collection of attributes to the characters in the specified range.
- [removeAttribute(\_:range:)](nsmutableattributedstring/removeattribute%28__range_%29.md): Removes the named attribute from the characters in the specified range.
- [applyFontTraits(\_:range:)](nsmutableattributedstring/applyfonttraits%28__range_%29.md): Applies the specified font-related attributes to characters in the string.
- [setAlignment(\_:range:)](nsmutableattributedstring/setalignment%28__range_%29.md): Sets the alignment characteristic of the paragraph style attribute for the specified range of text.
- [setBaseWritingDirection(\_:range:)](nsmutableattributedstring/setbasewritingdirection%28__range_%29.md): Sets the base writing direction for the characters to the specified direction.
- [subscriptRange(\_:)](nsmutableattributedstring/subscriptrange%28__%29.md): Decrements the value of the superscript attribute for characters in the specified range by one.
- [superscriptRange(\_:)](nsmutableattributedstring/superscriptrange%28__%29.md): Increments the value of the superscript attribute for characters in the specified range by one.
- [unscriptRange(\_:)](nsmutableattributedstring/unscriptrange%28__%29.md): Removes the superscript attribute from the characters in the specified range.

### Changing Characters and Attributes

- [append(\_:)](nsmutableattributedstring/append%28__%29.md): Adds the characters and attributes of a given attributed string to the end of the receiver.
- [insert(\_:at:)](nsmutableattributedstring/insert%28__at_%29.md): Inserts the characters and attributes of the given attributed string into the receiver at the given index.
- [replaceCharacters(in:with:)](nsmutableattributedstring/replacecharacters%28in_with_%29-1uaw7.md): Replaces the characters and attributes in a given range with the characters and attributes of the given attributed string.
- [setAttributedString(\_:)](nsmutableattributedstring/setattributedstring%28__%29.md): Replaces the receiver’s entire contents with the characters and attributes of the given attributed string.

### Grouping Changes

- [beginEditing()](nsmutableattributedstring/beginediting%28%29.md): Begins the buffering of changes to the string’s characters and attributes.
- [endEditing()](nsmutableattributedstring/endediting%28%29.md): Ends the buffering of changes to the string’s characters and attributes.

### Updating Attachment Contents

- [updateAttachments(fromPath:)](nsmutableattributedstring/updateattachments%28frompath_%29.md): Updates all attachments based on files contained in the RTFD file package at the specified file path.

### Fixing Attributes After Changes

- [fixAttributes(in:)](nsmutableattributedstring/fixattributes%28in_%29.md): Cleans up font, paragraph style, and attachment attributes within the given range.
- [fixAttachmentAttribute(in:)](nsmutableattributedstring/fixattachmentattribute%28in_%29.md): Cleans up attachment attributes in the specified range and removes all attachment attributes assigned to characters except the designated attachment character.
- [fixFontAttribute(in:)](nsmutableattributedstring/fixfontattribute%28in_%29.md): Fixes the font attribute in the specified range and assigns default fonts where appropriate.
- [fixParagraphStyleAttribute(in:)](nsmutableattributedstring/fixparagraphstyleattribute%28in_%29.md): Fixes the paragraph style attributes in the specified range and assigns a paragraph style to all characters in the paragraph.

### Reading Content

- [read(from:options:documentAttributes:)](nsmutableattributedstring/read%28from_options_documentattributes_%29-5mbcx.md): Sets the contents of the attributed string using the specified data object`.`
- [read(from:options:documentAttributes:)](nsmutableattributedstring/read%28from_options_documentattributes_%29-54wth.md): Sets the contents of attributed string using the contents of the specified file.

### Deprecated

- [read(from:options:documentAttributes:)](nsmutableattributedstring/read%28from_options_documentattributes_%29-967j7.md): Deprecated. Sets the contents of the receiver from the specified data object`.`
- [read(from:options:documentAttributes:)](nsmutableattributedstring/read%28from_options_documentattributes_%29-85y1d.md): Deprecated. Sets the contents of receiver from the file at the specified URL.
- [read(fromFileURL:options:documentAttributes:)](nsmutableattributedstring/read%28fromfileurl_options_documentattributes_%29.md): Deprecated. Sets the contents of the receiver from the file at the given URL.

## Relationships

### Inherits From

- [NSAttributedString](nsattributedstring.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Strings with Metadata

- [AttributedString](attributedstring.md): A value type for a string with associated attributes for portions of its text.
- [AttributedSubstring](attributedsubstring.md): A portion of an attributed string.
- [Attributed String Supporting Types](attributed-string-supporting-types.md): Types that the attributed string, attributed substring, and helper types extend or conform to, for sharing common functionality.
- [NSAttributedString](nsattributedstring.md): A string of text that manages data, layout, and stylistic information for ranges of characters to support rendering.

# NSMutableAttributedString (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mutable string with associated attributes (such as visual style, hyperlinks, or accessibility data) for portions of its text.

## Declaration

```objectivec
@interface NSMutableAttributedString : NSAttributedString
```

<a id="overview"></a>

## Overview

The `NSMutableAttributedString` class declares additional methods for mutating the content of an attributed string. You can add and remove characters (raw strings) and attributes separately or together as attributed strings. See the class description for [NSAttributedString](nsattributedstring.md) for more information about attributed strings.

`NSMutableAttributedString` adds two primitive methods to those of `NSAttributedString`. These primitive methods provide the basis for all the other methods in its class. The primitive [replaceCharactersInRange:withString:](nsmutableattributedstring/replacecharacters%28in_with_%29-6oq9r.md) method replaces a range of characters with those from a string, leaving all attribute information outside that range intact. The primitive [setAttributes:range:](nsmutableattributedstring/setattributes%28__range_%29.md) method sets attributes and values for a given range of characters, replacing any previous attributes and values for that range.

In macOS, AppKit also uses [NSParagraphStyle](https://developer.apple.com/documentation/appkit/nsparagraphstyle) and its subclass [NSMutableParagraphStyle](https://developer.apple.com/documentation/appkit/nsmutableparagraphstyle) to encapsulate the paragraph or ruler attributes used by the `NSAttributedString` classes.

Note that the default font for `NSAttributedString` objects is Helvetica 12-point, which may differ from the macOS system font, so you may wish to create the string with non-default attributes suitable for your application using, for example, [initWithString:attributes:](nsattributedstring/init%28string_attributes_%29.md).

> **I OS Note**

>  In iOS, this class is used primarily in conjunction with the Core Text framework.

`NSMutableAttributedString` is “toll-free bridged” with its Core Foundation counterpart, [CFMutableAttributedStringRef](../corefoundation/cfmutableattributedstring.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information.

## Topics

### Retrieving Character Information

- [mutableString](nsmutableattributedstring/mutablestring.md): The character contents of the receiver as a mutable string object.

### Changing Characters

- [replaceCharactersInRange:withString:](nsmutableattributedstring/replacecharacters%28in_with_%29-6oq9r.md): Replaces the characters in the given range with the characters of the given string.
- [deleteCharactersInRange:](nsmutableattributedstring/deletecharacters%28in_%29.md): Deletes the characters in the given range along with their associated attributes.

### Changing Attributes

- [setAttributes:range:](nsmutableattributedstring/setattributes%28__range_%29.md): Sets the attributes for the characters in the specified range to the specified attributes.
- [addAttribute:value:range:](nsmutableattributedstring/addattribute%28__value_range_%29.md): Adds an attribute with the given name and value to the characters in the specified range.
- [addAttributes:range:](nsmutableattributedstring/addattributes%28__range_%29.md): Adds the given collection of attributes to the characters in the specified range.
- [removeAttribute:range:](nsmutableattributedstring/removeattribute%28__range_%29.md): Removes the named attribute from the characters in the specified range.
- [applyFontTraits:range:](nsmutableattributedstring/applyfonttraits%28__range_%29.md): Applies the specified font-related attributes to characters in the string.
- [setAlignment:range:](nsmutableattributedstring/setalignment%28__range_%29.md): Sets the alignment characteristic of the paragraph style attribute for the specified range of text.
- [setBaseWritingDirection:range:](nsmutableattributedstring/setbasewritingdirection%28__range_%29.md): Sets the base writing direction for the characters to the specified direction.
- [subscriptRange:](nsmutableattributedstring/subscriptrange%28__%29.md): Decrements the value of the superscript attribute for characters in the specified range by one.
- [superscriptRange:](nsmutableattributedstring/superscriptrange%28__%29.md): Increments the value of the superscript attribute for characters in the specified range by one.
- [unscriptRange:](nsmutableattributedstring/unscriptrange%28__%29.md): Removes the superscript attribute from the characters in the specified range.

### Changing Characters and Attributes

- [appendAttributedString:](nsmutableattributedstring/append%28__%29.md): Adds the characters and attributes of a given attributed string to the end of the receiver.
- [appendLocalizedFormat:](nsmutableattributedstring/appendlocalizedformat_.md): Formats the specified string and arguments with the current locale, then appends the result to the receiver.
- [insertAttributedString:atIndex:](nsmutableattributedstring/insert%28__at_%29.md): Inserts the characters and attributes of the given attributed string into the receiver at the given index.
- [replaceCharactersInRange:withAttributedString:](nsmutableattributedstring/replacecharacters%28in_with_%29-1uaw7.md): Replaces the characters and attributes in a given range with the characters and attributes of the given attributed string.
- [setAttributedString:](nsmutableattributedstring/setattributedstring%28__%29.md): Replaces the receiver’s entire contents with the characters and attributes of the given attributed string.

### Grouping Changes

- [beginEditing](nsmutableattributedstring/beginediting%28%29.md): Begins the buffering of changes to the string’s characters and attributes.
- [endEditing](nsmutableattributedstring/endediting%28%29.md): Ends the buffering of changes to the string’s characters and attributes.

### Updating Attachment Contents

- [updateAttachmentsFromPath:](nsmutableattributedstring/updateattachments%28frompath_%29.md): Updates all attachments based on files contained in the RTFD file package at the specified file path.

### Fixing Attributes After Changes

- [fixAttributesInRange:](nsmutableattributedstring/fixattributes%28in_%29.md): Cleans up font, paragraph style, and attachment attributes within the given range.
- [fixAttachmentAttributeInRange:](nsmutableattributedstring/fixattachmentattribute%28in_%29.md): Cleans up attachment attributes in the specified range and removes all attachment attributes assigned to characters except the designated attachment character.
- [fixFontAttributeInRange:](nsmutableattributedstring/fixfontattribute%28in_%29.md): Fixes the font attribute in the specified range and assigns default fonts where appropriate.
- [fixParagraphStyleAttributeInRange:](nsmutableattributedstring/fixparagraphstyleattribute%28in_%29.md): Fixes the paragraph style attributes in the specified range and assigns a paragraph style to all characters in the paragraph.

### Reading Content

- [readFromData:options:documentAttributes:error:](nsmutableattributedstring/read%28from_options_documentattributes_%29-5mbcx.md): Sets the contents of the attributed string using the specified data object`.`
- [readFromURL:options:documentAttributes:error:](nsmutableattributedstring/read%28from_options_documentattributes_%29-54wth.md): Sets the contents of attributed string using the contents of the specified file.

### Deprecated

- [readFromData:options:documentAttributes:](nsmutableattributedstring/read%28from_options_documentattributes_%29-967j7.md): Deprecated. Sets the contents of the receiver from the specified data object`.`
- [readFromURL:options:documentAttributes:](nsmutableattributedstring/read%28from_options_documentattributes_%29-85y1d.md): Deprecated. Sets the contents of receiver from the file at the specified URL.
- [readFromFileURL:options:documentAttributes:error:](nsmutableattributedstring/read%28fromfileurl_options_documentattributes_%29.md): Deprecated. Sets the contents of the receiver from the file at the given URL.

## Relationships

### Inherits From

- [NSAttributedString](nsattributedstring.md)

## See Also

### Strings with Metadata

- [NSAttributedString](nsattributedstring.md): A string of text that manages data, layout, and stylistic information for ranges of characters to support rendering.
