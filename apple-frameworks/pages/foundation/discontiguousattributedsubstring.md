> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/discontiguousattributedsubstring](https://developer.apple.com/documentation/foundation/discontiguousattributedsubstring)

# DiscontiguousAttributedSubstring

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A discontiguous portion of an attributed string.

## Declaration

```swift
@dynamicMemberLookup struct DiscontiguousAttributedSubstring
```

## Topics

### Instance Properties

- [base](discontiguousattributedsubstring/base.md): The underlying attributed string that the discontiguous attributed substring derives from.
- [characters](discontiguousattributedsubstring/characters.md): The characters of the discontiguous attributed string, as a view into the underlying string.
- [runs](discontiguousattributedsubstring/runs.md): The attributed runs of the discontiguous attributed string, as a view into the underlying string.
- [unicodeScalars](discontiguousattributedsubstring/unicodescalars.md): The Unicode scalars of the discontiguous attributed string, as a view into the underlying string.

### Subscripts

- [subscript(\_:)](discontiguousattributedsubstring/subscript%28__%29-1bcls.md): Returns an attribute value that corresponds to an attributed string key.
- [subscript(\_:)](discontiguousattributedsubstring/subscript%28__%29-6j670.md): Returns a discontiguous substring of this discontiguous attributed string using a range to indicate the discontiguous substring bounds.
- [subscript(\_:)](discontiguousattributedsubstring/subscript%28__%29-6p2b.md): Returns a discontiguous substring of this discontiguous attributed string using a set of ranges to indicate the discontiguous substring bounds.
- [subscript(dynamicMember:)](discontiguousattributedsubstring/subscript%28dynamicmember_%29-5i1c9.md): Returns an attribute value that a key path indicates.
- [subscript(dynamicMember:)](discontiguousattributedsubstring/subscript%28dynamicmember_%29-89pug.md): Returns a scoped attribute container that a key path indicates.

## Relationships

### Conforms To

- [AttributedStringAttributeMutation](attributedstringattributemutation.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
