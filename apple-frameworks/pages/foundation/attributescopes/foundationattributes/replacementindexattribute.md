> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescopes/foundationattributes/replacementindexattribute](https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes/replacementindexattribute)

# AttributeScopes.FoundationAttributes.ReplacementIndexAttribute

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type for using a replacement index as an attribute.

## Declaration

```swift
@frozen enum ReplacementIndexAttribute
```

<a id="overview"></a>

## Overview

When you use the [applyReplacementIndexAttribute](../../attributedstring/formattingoptions/applyreplacementindexattribute.md) formatting option, the resulting formatted string uses this attribute to mark the location of replacement strings. This allows you to relate ranges to replacements even if localizers change the word order in format strings.

## Relationships

### Conforms To

- [AttributedStringKey](../../attributedstringkey.md)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DecodableAttributedStringKey](../../decodableattributedstringkey.md)
- [EncodableAttributedStringKey](../../encodableattributedstringkey.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using string formatting attributes

- [replacementIndex](replacementindex.md): A property for accessing a replacement index attribute.
