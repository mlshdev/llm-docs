> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/setattributes(_:)](https://developer.apple.com/documentation/foundation/attributedstring/setattributes(_:))

# setAttributes(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets the attributed string’s attributes to those in a specified attribute container.

## Declaration

```swift
mutating func setAttributes(_ attributes: AttributeContainer)
```

## Parameters

- `attributes`: The attribute container with the attributes to apply.

## See Also

### Applying and Modifying Attributes

- [mergeAttributes(\_:mergePolicy:)](mergeattributes%28__mergepolicy_%29.md): Merges the attributed string’s attributes with those in a specified attribute container.
- [AttributedString.AttributeMergePolicy](attributemergepolicy.md): An enumeration of behaviors to apply when merging attributes.
- [replaceAttributes(\_:with:)](replaceattributes%28__with_%29.md): Replaces occurrences of attributes in one attribute container with those in another attribute container.
- [AttributedStringAttributeMutation](../attributedstringattributemutation.md): A protocol that defines in-place mutations for attributes in an attributed string.
