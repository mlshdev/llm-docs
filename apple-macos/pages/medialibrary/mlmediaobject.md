> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediaobject](https://developer.apple.com/documentation/medialibrary/mlmediaobject)

# MLMediaObject (Swift)

**Framework:** Media Library  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

The `MLMediaObject` class describes a single media file, such as a photo, song, or movie. Each media object contains basic metadata including a name, media type, URL, and so on. Additional information about each object is stored in its list of attributes. For a list of possible object attribute keys, see [Media Object Attribute Keys](media-object-attribute-keys.md).

## Declaration

```swift
class MLMediaObject
```

<a id="overview"></a>

## Overview

A media object belongs to a single media source but can be referenced by several groups within that source. In other words, an object can appear in multiple places in the group hierarchy under a single media source. In iTunes, a movie that was purchased through the iTunes Store is referenced by both the Purchased playlist and the Movies playlist. If a user adds the movie to his own playlist, the group respresenting that playlist will also reference the movie. All three groups reference the same media object.

All `MLMediaObject` properties are read-only, so this information can be accessed but not altered.

## Topics

### Identifying the Object

- [identifier](mlmediaobject/identifier.md): Deprecated. An identifier for the media object.
- [mediaSourceIdentifier](mlmediaobject/mediasourceidentifier.md): Deprecated. An identifier for the source that loaded the media object.
- [mediaLibrary](mlmediaobject/medialibrary.md): Deprecated. A pointer to the media library instance that loaded the media object’s source.

### Accessing Object Attributes

- [attributes](mlmediaobject/attributes.md): Deprecated. A dictionary of attributes describing the media object.
- [mediaType](mlmediaobject/mediatype.md): Deprecated. The media object’s type of media (image, audio, or movie).
- [contentType](mlmediaobject/contenttype.md): Deprecated. The UTI associated with the media object.
- [name](mlmediaobject/name.md): Deprecated. The name of the media object.
- [url](mlmediaobject/url.md): Deprecated. The location of the media object.
- [originalURL](mlmediaobject/originalurl.md): Deprecated. The location of the original media object, if [url](mlmediaobject/url.md) is not the original location.
- [fileSize](mlmediaobject/filesize.md): Deprecated. The size, in bytes, of the media object.
- [modificationDate](mlmediaobject/modificationdate.md): Deprecated. The date and time when the media object was last altered.
- [thumbnailURL](mlmediaobject/thumbnailurl.md): Deprecated. The location of the media object’s thumbnail image.
- [artworkImage](mlmediaobject/artworkimage.md): Deprecated. Album artwork associated with the media object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Classes

- [MLMediaGroup](mlmediagroup.md): Deprecated. The `MLMediaGroup` class provides groupings for media objects from a single source of media, such as iTunes or Aperture. The media objects—individual files containing a piece of media such as a photo, song, or movie—are referenced by one or more groups within each media source. These groupings serve as filters, providing hierarchical structure to the collection of objects in each source.
- [MLMediaLibrary](mlmedialibrary.md): Deprecated. The `MLMediaLibrary` class provides an interface for accessing a collection of media objects from various sources. It serves as the initial access point of the Media Library framework.
- [MLMediaSource](mlmediasource.md): Deprecated. The `MLMediaSource` class identifies a specific provider of media. Conceptually, a media source respresents a single app, such as iTunes or Aperture. Each media source contains multiple groups of media objects—individual files containing a piece of media such as a photo, song, or movie.

# MLMediaObject (Objective-C)

**Framework:** Media Library  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

The `MLMediaObject` class describes a single media file, such as a photo, song, or movie. Each media object contains basic metadata including a name, media type, URL, and so on. Additional information about each object is stored in its list of attributes. For a list of possible object attribute keys, see [Media Object Attribute Keys](media-object-attribute-keys.md).

## Declaration

```objectivec
@interface MLMediaObject : NSObject
```

<a id="overview"></a>

## Overview

A media object belongs to a single media source but can be referenced by several groups within that source. In other words, an object can appear in multiple places in the group hierarchy under a single media source. In iTunes, a movie that was purchased through the iTunes Store is referenced by both the Purchased playlist and the Movies playlist. If a user adds the movie to his own playlist, the group respresenting that playlist will also reference the movie. All three groups reference the same media object.

All `MLMediaObject` properties are read-only, so this information can be accessed but not altered.

## Topics

### Identifying the Object

- [identifier](mlmediaobject/identifier.md): Deprecated. An identifier for the media object.
- [mediaSourceIdentifier](mlmediaobject/mediasourceidentifier.md): Deprecated. An identifier for the source that loaded the media object.
- [mediaLibrary](mlmediaobject/medialibrary.md): Deprecated. A pointer to the media library instance that loaded the media object’s source.

### Accessing Object Attributes

- [attributes](mlmediaobject/attributes.md): Deprecated. A dictionary of attributes describing the media object.
- [mediaType](mlmediaobject/mediatype.md): Deprecated. The media object’s type of media (image, audio, or movie).
- [contentType](mlmediaobject/contenttype.md): Deprecated. The UTI associated with the media object.
- [name](mlmediaobject/name.md): Deprecated. The name of the media object.
- [URL](mlmediaobject/url.md): Deprecated. The location of the media object.
- [originalURL](mlmediaobject/originalurl.md): Deprecated. The location of the original media object, if [URL](mlmediaobject/url.md) is not the original location.
- [fileSize](mlmediaobject/filesize.md): Deprecated. The size, in bytes, of the media object.
- [modificationDate](mlmediaobject/modificationdate.md): Deprecated. The date and time when the media object was last altered.
- [thumbnailURL](mlmediaobject/thumbnailurl.md): Deprecated. The location of the media object’s thumbnail image.
- [artworkImage](mlmediaobject/artworkimage.md): Deprecated. Album artwork associated with the media object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [MLMediaGroup](mlmediagroup.md): Deprecated. The `MLMediaGroup` class provides groupings for media objects from a single source of media, such as iTunes or Aperture. The media objects—individual files containing a piece of media such as a photo, song, or movie—are referenced by one or more groups within each media source. These groupings serve as filters, providing hierarchical structure to the collection of objects in each source.
- [MLMediaLibrary](mlmedialibrary.md): Deprecated. The `MLMediaLibrary` class provides an interface for accessing a collection of media objects from various sources. It serves as the initial access point of the Media Library framework.
- [MLMediaSource](mlmediasource.md): Deprecated. The `MLMediaSource` class identifies a specific provider of media. Conceptually, a media source respresents a single app, such as iTunes or Aperture. Each media source contains multiple groups of media objects—individual files containing a piece of media such as a photo, song, or movie.
