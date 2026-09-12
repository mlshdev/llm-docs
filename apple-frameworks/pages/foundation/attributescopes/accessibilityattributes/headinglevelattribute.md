> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescopes/accessibilityattributes/headinglevelattribute](https://developer.apple.com/documentation/foundation/attributescopes/accessibilityattributes/headinglevelattribute)

# AttributeScopes.AccessibilityAttributes.HeadingLevelAttribute

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An attribute for the level of this heading.

## Declaration

```swift
@frozen enum HeadingLevelAttribute
```

<a id="overview"></a>

## Overview

Assistive technologies can use this property to improve navigation and describe the level number of levels [AttributeScopes.AccessibilityAttributes.HeadingLevelAttribute.HeadingLevel.h1](headinglevelattribute/headinglevel/h1.md) through [AttributeScopes.AccessibilityAttributes.HeadingLevelAttribute.HeadingLevel.h6](headinglevelattribute/headinglevel/h6.md) alongside the text.

For example, you can rank sections within UI using a heading level. The most important section is marked with[AttributeScopes.AccessibilityAttributes.HeadingLevelAttribute.HeadingLevel.h1](headinglevelattribute/headinglevel/h1.md). Nested sections can use subsequent heading levels. For unranked headings, use [AttributeScopes.AccessibilityAttributes.HeadingLevelAttribute.HeadingLevel.unspecified](headinglevelattribute/headinglevel/unspecified.md).

## Topics

### Enumerations

- [AttributeScopes.AccessibilityAttributes.HeadingLevelAttribute.HeadingLevel](headinglevelattribute/headinglevel.md): The hierarchy of a heading in relation other headings.

## Relationships

### Conforms To

- [AttributedStringKey](../../attributedstringkey.md)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DecodableAttributedStringKey](../../decodableattributedstringkey.md)
- [EncodableAttributedStringKey](../../encodableattributedstringkey.md)
- [MarkdownDecodableAttributedStringKey](../../markdowndecodableattributedstringkey.md)
- [ObjectiveCConvertibleAttributedStringKey](../../objectivecconvertibleattributedstringkey.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
