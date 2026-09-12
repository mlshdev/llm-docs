> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/axtextattributedstring_h](https://developer.apple.com/documentation/applicationservices/axtextattributedstring_h)

# AXTextAttributedString.h

**Interface languages:** Swift, Objective-C

**Framework:** Application Services  
**Kind:** API Collection

This header file contains definitions of constants used with accessibility objects that represent attributed strings. An attributed string is an association of a range of characters and their attributes, such as color and font. If an accessibility object represents an attributed string, the value of its `kAXParameterizedAttributeStringAttribute` attribute is an attributed string object (a `CFAttributedStringRef` or an `NSAttributedString`) that uses the constants defined in this header file to define its attributes.

<a id="overview"></a>

## Overview

<a id="1678825"></a>

### Included Headers

- \<CoreFoundation/CoreFoundation.h\>

## Topics

### Constants

- [Global Variables](axtextattributedstring_h/global_variables.md)
- [AXUnderlineStyle](axunderlinestyle.md): Values that describe the style of underlining (used with the [kAXUnderlineTextAttribute](kaxunderlinetextattribute.md) attribute).
