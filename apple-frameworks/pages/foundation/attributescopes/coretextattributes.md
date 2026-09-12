> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescopes/coretextattributes](https://developer.apple.com/documentation/foundation/attributescopes/coretextattributes)

# AttributeScopes.CoreTextAttributes

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A namespace for attributes defined by CoreText.

## Declaration

```swift
struct CoreTextAttributes
```

<a id="overview"></a>

## Overview

Note that this is *not* an [AttributeScope](../attributescope.md), but merely a namespace for [AttributedStringKey](../attributedstringkey.md)s that describe CoreText concepts. Those attributes may be used by *other frameworks* to describe those concepts. Unless documented otherwise, frameworks generally inidcate support for a certain attribute by adding it to the framework’s [AttributeScope](../attributescope.md).

CoreText specifically does not support Swift [AttributedStringKey](../attributedstringkey.md), and will not recognize the attributes nested in this namespace when used directly with CoreText API, no matter if used in an `AttributedString` or `NSAttributedString`.

## Topics

### Enumerations

- [AttributeScopes.CoreTextAttributes.LineHeightAttribute](coretextattributes/lineheightattribute.md): An attribute for defining the height of lines in a text.
- [AttributeScopes.CoreTextAttributes.TextAlignmentAttribute](coretextattributes/textalignmentattribute.md): An attribute defining the explicit horizontal alignment of a paragraph.
