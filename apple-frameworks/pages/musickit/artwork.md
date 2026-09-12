> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/artwork](https://developer.apple.com/documentation/musickit/artwork)

# Artwork

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents artwork for a music item.

## Declaration

```swift
struct Artwork
```

## Topics

### Instance Properties

- [alternateText](artwork/alternatetext.md): A textual description for the image.
- [backgroundColor](artwork/backgroundcolor.md): The average background color of the image.
- [maximumHeight](artwork/maximumheight.md): The maximum height available for the image.
- [maximumWidth](artwork/maximumwidth.md): The maximum width available for the image.
- [primaryTextColor](artwork/primarytextcolor.md): The primary text color to use when displaying the background color.
- [quaternaryTextColor](artwork/quaternarytextcolor.md): The final posttertiary text color to use when displaying the background color.
- [secondaryTextColor](artwork/secondarytextcolor.md): The secondary text color to use when displaying the background color.
- [tertiaryTextColor](artwork/tertiarytextcolor.md): The tertiary text color to use when displaying the background color.

### Instance Methods

- [url(width:height:)](artwork/url%28width_height_%29.md): Returns a URL to request the image asset for a specified width and height.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Artwork

- [ArtworkImage](artworkimage.md): A view that displays the image for a music item’s artwork.
