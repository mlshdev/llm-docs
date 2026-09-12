> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/index](https://developer.apple.com/documentation/foundation/attributedstring/index)

# AttributedString.Index

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that represents the position of a character or code unit within an attributed string.

## Declaration

```swift
struct Index
```

## Topics

### Initializers

- [init(\_:within:)](index/init%28__within_%29.md)

### Instance Methods

- [isValid(within:)](index/isvalid%28within_%29-6wjr6.md): Indicates whether the index is valid for use with the provided discontiguous attributed string.
- [isValid(within:)](index/isvalid%28within_%29-8fw50.md): Indicates whether the index is valid for use with the provided attributed string.

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Modifying an Attributed String

- [insert(\_:at:)](insert%28__at_%29.md): Inserts the specified string at a specific index in the attributed string.
- [removeSubrange(\_:)](removesubrange%28__%29.md): Removes a range of characters from the attributed string.
- [replaceSubrange(\_:with:)](replacesubrange%28__with_%29.md): Replaces the contents in a range of the attributed string.
