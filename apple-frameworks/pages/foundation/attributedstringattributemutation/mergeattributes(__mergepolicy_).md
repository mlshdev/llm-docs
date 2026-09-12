> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstringattributemutation/mergeattributes(_:mergepolicy:)](https://developer.apple.com/documentation/foundation/attributedstringattributemutation/mergeattributes(_:mergepolicy:))

# mergeAttributes(\_:mergePolicy:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Merges the attributed string’s attributes with those in a specified attribute container.

## Declaration

```swift
mutating func mergeAttributes(_ attributes: AttributeContainer, mergePolicy: AttributedString.AttributeMergePolicy)
```

## Parameters

- `attributes`: The attribute container with the attributes to merge.
- `mergePolicy`: A policy to use when resolving conflicts between this string’s attributes and those in `attributes`.

## See Also

### Mutating the String’s Attributes

- [setAttributes(\_:)](setattributes%28__%29.md): Sets the attributed string’s attributes to those in a specified attribute container.
- [replaceAttributes(\_:with:)](replaceattributes%28__with_%29.md): Replaces the attributed string’s attributes with those in a specified attribute container.
