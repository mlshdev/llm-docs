> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/attributemergepolicy](https://developer.apple.com/documentation/foundation/attributedstring/attributemergepolicy)

# AttributedString.AttributeMergePolicy

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An enumeration of behaviors to apply when merging attributes.

## Declaration

```swift
enum AttributeMergePolicy
```

<a id="overview"></a>

## Overview

Use an [AttributedString.AttributeMergePolicy](attributemergepolicy.md) when working with methods like [mergeAttributes(\_:mergePolicy:)](mergeattributes%28__mergepolicy_%29.md) to indicate how to resolve conflicts between multiple sets of attributes. When a source string and a merging attribute container both contain a given attribute with different values, the merge policy determines how to resolve the conflict.

## Topics

### Merge Policies

- [AttributedString.AttributeMergePolicy.keepCurrent](attributemergepolicy/keepcurrent.md): A policy to keep the string’s current attribute value when merging multiple sets of attributes.
- [AttributedString.AttributeMergePolicy.keepNew](attributemergepolicy/keepnew.md): A policy to keep the newly-merged attribute value when merging multiple sets of attributes.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Applying and Modifying Attributes

- [setAttributes(\_:)](setattributes%28__%29.md): Sets the attributed string’s attributes to those in a specified attribute container.
- [mergeAttributes(\_:mergePolicy:)](mergeattributes%28__mergepolicy_%29.md): Merges the attributed string’s attributes with those in a specified attribute container.
- [replaceAttributes(\_:with:)](replaceattributes%28__with_%29.md): Replaces occurrences of attributes in one attribute container with those in another attribute container.
- [AttributedStringAttributeMutation](../attributedstringattributemutation.md): A protocol that defines in-place mutations for attributes in an attributed string.
