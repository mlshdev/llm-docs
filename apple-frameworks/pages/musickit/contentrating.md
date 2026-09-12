> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/contentrating](https://developer.apple.com/documentation/musickit/contentrating)

# ContentRating

**Framework:** MusicKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The rating of the content that potentially plays while playing a resource.

## Declaration

```swift
enum ContentRating
```

<a id="overview"></a>

## Overview

A nil value means no rating is available for this resource.

## Topics

### Enumeration Cases

- [ContentRating.clean](contentrating/clean.md)
- [ContentRating.explicit](contentrating/explicit.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Music Item Attributes

- [EditorialNotes](editorialnotes.md): An object that represents editorial notes.
- [PreviewAsset](previewasset.md): An object that represents a preview for resources.
