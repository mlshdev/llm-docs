> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediaitem](https://developer.apple.com/documentation/intents/inmediaitem)

# INMediaItem (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

An object that describes a piece of media content, such as a song, TV show, artist, or podcast playlist.

## Declaration

```swift
class INMediaItem
```

## Topics

### Creating a Media Item

- [init(identifier:title:type:artwork:)](inmediaitem/init%28identifier_title_type_artwork_%29.md): Creates a media item with an identifier, title, type, and artwork.
- [init(identifier:title:type:artwork:artist:)](inmediaitem/init%28identifier_title_type_artwork_artist_%29.md): Creates a media item with an identifier, title, type, artwork, and artist.

### Describing the Media Item

- [artwork](inmediaitem/artwork.md): Artwork for the media item.
- [identifier](inmediaitem/identifier.md): The value your app uses to identify the media item.
- [title](inmediaitem/title.md): The media item title.
- [artist](inmediaitem/artist.md): The artist associated with the media item.
- [type](inmediaitem/type.md): The media item type.
- [INMediaItemType](inmediaitemtype.md): The type of content the media item describes.

### Initializers

- [init(coder:)](inmediaitem/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INMediaSearch](inmediasearch.md): An object that describes a media type to search for, such as a station name, song name, or album name.

# INMediaItem (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

An object that describes a piece of media content, such as a song, TV show, artist, or podcast playlist.

## Declaration

```objectivec
@interface INMediaItem : NSObject
```

## Topics

### Creating a Media Item

- [initWithIdentifier:title:type:artwork:](inmediaitem/init%28identifier_title_type_artwork_%29.md): Creates a media item with an identifier, title, type, and artwork.
- [initWithIdentifier:title:type:artwork:artist:](inmediaitem/init%28identifier_title_type_artwork_artist_%29.md): Creates a media item with an identifier, title, type, artwork, and artist.

### Describing the Media Item

- [artwork](inmediaitem/artwork.md): Artwork for the media item.
- [identifier](inmediaitem/identifier.md): The value your app uses to identify the media item.
- [title](inmediaitem/title.md): The media item title.
- [artist](inmediaitem/artist.md): The artist associated with the media item.
- [type](inmediaitem/type.md): The media item type.
- [INMediaItemType](inmediaitemtype.md): The type of content the media item describes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INMediaSearch](inmediasearch.md): An object that describes a media type to search for, such as a station name, song name, or album name.
