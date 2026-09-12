> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediasource](https://developer.apple.com/documentation/medialibrary/mlmediasource)

# MLMediaSource (Swift)

**Framework:** Media Library  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

The `MLMediaSource` class identifies a specific provider of media. Conceptually, a media source respresents a single app, such as iTunes or Aperture. Each media source contains multiple groups of media objects—individual files containing a piece of media such as a photo, song, or movie.

## Declaration

```swift
class MLMediaSource
```

<a id="overview"></a>

## Overview

The structure of the group hierarchy is specific to each media source, but all sources have certain commonalities. For example, every source has a single root media group, which contains all groups and objects within that source. It is the highest-level parent group in the hierarchy and each of its descendant groups contains its own subgroups and their objects. All groups have a reference to their parent within the hierarchy. A group with no descendants contains only its own objects. If a media group does not contain any objects, it is not visible in the hierarchy.

Every media source has a unique media source identifier within a single media library instance. For a list of possible media source identifiers, see [Media Source Identifiers](media-source-identifiers.md).

All `MLMediaSource` properties are read-only, so this information can be accessed but not altered.

## Topics

### Identifying the Source

- [mediaSourceIdentifier](mlmediasource/mediasourceidentifier.md): Deprecated. A unique identifier for the media source.
- [mediaLibrary](mlmediasource/medialibrary.md): Deprecated. A pointer to the media library instance that loaded this media source.

### Accessing Source Attributes

- [attributes](mlmediasource/attributes.md): Deprecated. A list of attributes describing the media source.

### Accessing the Root Media Group

- [rootMediaGroup](mlmediasource/rootmediagroup.md): Deprecated. The base media group in the media source that contains all other groups within the source as descendant elements.

### Accessing Media

- [mediaGroup(forIdentifier:)](mlmediasource/mediagroup%28foridentifier_%29.md): Deprecated. Returns the media group with the specified identifier.
- [mediaGroups(forIdentifiers:)](mlmediasource/mediagroups%28foridentifiers_%29.md): Deprecated. Returns the media groups with the specified identifiers.
- [mediaObject(forIdentifier:)](mlmediasource/mediaobject%28foridentifier_%29.md): Deprecated. Returns the media object with the specified identifier.
- [mediaObjects(forIdentifiers:)](mlmediasource/mediaobjects%28foridentifiers_%29.md): Deprecated. Returns the media objects with the specified identifiers.

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
- [MLMediaObject](mlmediaobject.md): Deprecated. The `MLMediaObject` class describes a single media file, such as a photo, song, or movie. Each media object contains basic metadata including a name, media type, URL, and so on. Additional information about each object is stored in its list of attributes. For a list of possible object attribute keys, see [Media Object Attribute Keys](media-object-attribute-keys.md).

# MLMediaSource (Objective-C)

**Framework:** Media Library  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

The `MLMediaSource` class identifies a specific provider of media. Conceptually, a media source respresents a single app, such as iTunes or Aperture. Each media source contains multiple groups of media objects—individual files containing a piece of media such as a photo, song, or movie.

## Declaration

```objectivec
@interface MLMediaSource : NSObject
```

<a id="overview"></a>

## Overview

The structure of the group hierarchy is specific to each media source, but all sources have certain commonalities. For example, every source has a single root media group, which contains all groups and objects within that source. It is the highest-level parent group in the hierarchy and each of its descendant groups contains its own subgroups and their objects. All groups have a reference to their parent within the hierarchy. A group with no descendants contains only its own objects. If a media group does not contain any objects, it is not visible in the hierarchy.

Every media source has a unique media source identifier within a single media library instance. For a list of possible media source identifiers, see [Media Source Identifiers](media-source-identifiers.md).

All `MLMediaSource` properties are read-only, so this information can be accessed but not altered.

## Topics

### Identifying the Source

- [mediaSourceIdentifier](mlmediasource/mediasourceidentifier.md): Deprecated. A unique identifier for the media source.
- [mediaLibrary](mlmediasource/medialibrary.md): Deprecated. A pointer to the media library instance that loaded this media source.

### Accessing Source Attributes

- [attributes](mlmediasource/attributes.md): Deprecated. A list of attributes describing the media source.

### Accessing the Root Media Group

- [rootMediaGroup](mlmediasource/rootmediagroup.md): Deprecated. The base media group in the media source that contains all other groups within the source as descendant elements.

### Accessing Media

- [mediaGroupForIdentifier:](mlmediasource/mediagroup%28foridentifier_%29.md): Deprecated. Returns the media group with the specified identifier.
- [mediaGroupsForIdentifiers:](mlmediasource/mediagroups%28foridentifiers_%29.md): Deprecated. Returns the media groups with the specified identifiers.
- [mediaObjectForIdentifier:](mlmediasource/mediaobject%28foridentifier_%29.md): Deprecated. Returns the media object with the specified identifier.
- [mediaObjectsForIdentifiers:](mlmediasource/mediaobjects%28foridentifiers_%29.md): Deprecated. Returns the media objects with the specified identifiers.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [MLMediaGroup](mlmediagroup.md): Deprecated. The `MLMediaGroup` class provides groupings for media objects from a single source of media, such as iTunes or Aperture. The media objects—individual files containing a piece of media such as a photo, song, or movie—are referenced by one or more groups within each media source. These groupings serve as filters, providing hierarchical structure to the collection of objects in each source.
- [MLMediaLibrary](mlmedialibrary.md): Deprecated. The `MLMediaLibrary` class provides an interface for accessing a collection of media objects from various sources. It serves as the initial access point of the Media Library framework.
- [MLMediaObject](mlmediaobject.md): Deprecated. The `MLMediaObject` class describes a single media file, such as a photo, song, or movie. Each media object contains basic metadata including a name, media type, URL, and so on. Additional information about each object is stored in its list of attributes. For a list of possible object attribute keys, see [Media Object Attribute Keys](media-object-attribute-keys.md).
