> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/mergeattributes(_:mergepolicy:)](https://developer.apple.com/documentation/foundation/attributedstring/mergeattributes(_:mergepolicy:))

# mergeAttributes(\_:mergePolicy:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Merges the attributed string’s attributes with those in a specified attribute container.

## Declaration

```swift
mutating func mergeAttributes(_ attributes: AttributeContainer, mergePolicy: AttributedString.AttributeMergePolicy = .keepNew)
```

## Parameters

- `attributes`: The attribute container with the attributes to merge.
- `mergePolicy`: A policy to use when resolving conflicts between this string’s attributes and those in `attributes`.

## See Also

### Applying and Modifying Attributes

- [setAttributes(\_:)](setattributes%28__%29.md): Sets the attributed string’s attributes to those in a specified attribute container.
- [AttributedString.AttributeMergePolicy](attributemergepolicy.md): An enumeration of behaviors to apply when merging attributes.
- [replaceAttributes(\_:with:)](replaceattributes%28__with_%29.md): Replaces occurrences of attributes in one attribute container with those in another attribute container.
- [AttributedStringAttributeMutation](../attributedstringattributemutation.md): A protocol that defines in-place mutations for attributes in an attributed string.
