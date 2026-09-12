> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstringattributemutation](https://developer.apple.com/documentation/foundation/attributedstringattributemutation)

# AttributedStringAttributeMutation

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A protocol that defines in-place mutations for attributes in an attributed string.

## Declaration

```swift
protocol AttributedStringAttributeMutation
```

## Topics

### Mutating the String’s Attributes

- [setAttributes(\_:)](attributedstringattributemutation/setattributes%28__%29.md): Sets the attributed string’s attributes to those in a specified attribute container.
- [mergeAttributes(\_:mergePolicy:)](attributedstringattributemutation/mergeattributes%28__mergepolicy_%29.md): Merges the attributed string’s attributes with those in a specified attribute container.
- [replaceAttributes(\_:with:)](attributedstringattributemutation/replaceattributes%28__with_%29.md): Replaces the attributed string’s attributes with those in a specified attribute container.

## Relationships

### Inherited By

- [AttributedStringProtocol](attributedstringprotocol.md)

### Conforming Types

- [AttributedString](attributedstring.md)
- [AttributedSubstring](attributedsubstring.md)
- [DiscontiguousAttributedSubstring](discontiguousattributedsubstring.md)

## See Also

### Applying and Modifying Attributes

- [setAttributes(\_:)](attributedstring/setattributes%28__%29.md): Sets the attributed string’s attributes to those in a specified attribute container.
- [mergeAttributes(\_:mergePolicy:)](attributedstring/mergeattributes%28__mergepolicy_%29.md): Merges the attributed string’s attributes with those in a specified attribute container.
- [AttributedString.AttributeMergePolicy](attributedstring/attributemergepolicy.md): An enumeration of behaviors to apply when merging attributes.
- [replaceAttributes(\_:with:)](attributedstring/replaceattributes%28__with_%29.md): Replaces occurrences of attributes in one attribute container with those in another attribute container.
