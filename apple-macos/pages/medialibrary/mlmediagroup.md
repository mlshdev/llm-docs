> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediagroup](https://developer.apple.com/documentation/medialibrary/mlmediagroup)

# MLMediaGroup (Swift)

**Framework:** Media Library  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

The `MLMediaGroup` class provides groupings for media objects from a single source of media, such as iTunes or Aperture. The media objects—individual files containing a piece of media such as a photo, song, or movie—are referenced by one or more groups within each media source. These groupings serve as filters, providing hierarchical structure to the collection of objects in each source.

## Declaration

```swift
class MLMediaGroup
```

<a id="overview"></a>

## Overview

The structure of the group hierarchy is specific to each media source, but all sources have certain commonalities. For example, every source has a single root media group, which contains all groups and objects within that source. It is the highest-level parent group in the hierarchy and each of its descendant groups contains its own subgroups and their objects. All groups have a reference to their parent within the hierarchy. A group with no descendants contains only its own objects. If a media group does not contain any objects, it is not visible in the hierarchy.

A media group has an array of attributes which can change at any point. For example, a media group may have certain attributes that describe its objects, but these attributes appear only after the objects for that group have been loaded. When any media group attribute changes, observers are notified via KVO notification. For information about handling attributes that change, see [Cocoa Bindings Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaBindings/CocoaBindings.html#//apple_ref/doc/uid/10000167i).

Every media group has a unique identifier as well as a type identifier. In certain cases, multiple groups within a source can have the same type identifier. For descriptions of group type identifiers, see [MediaLibrary Constants](medialibrary-constants.md).

All `MLMediaGroup` properties are read-only, so this information can be accessed but not altered.

## Topics

### Identifying the Group

- [identifier](mlmediagroup/identifier.md): Deprecated. An identifier for the media group.
- [typeIdentifier](mlmediagroup/typeidentifier.md): Deprecated. An identifier for the media group’s type.
- [mediaSourceIdentifier](mlmediagroup/mediasourceidentifier.md): Deprecated. An identifier for the source that loaded the media group.
- [mediaLibrary](mlmediagroup/medialibrary.md): Deprecated. A pointer to the media library instance that loaded the media group’s source.

### Accessing Group Attributes

- [attributes](mlmediagroup/attributes.md): Deprecated. A dictionary of attributes describing the media group.
- [name](mlmediagroup/name.md): Deprecated. The name of the media group.
- [iconImage](mlmediagroup/iconimage.md): Deprecated. The media group’s icon.
- [url](mlmediagroup/url.md): Deprecated. The location of the media group.
- [modificationDate](mlmediagroup/modificationdate.md): Deprecated. The date and time when the media group was last altered.

### Accessing the Group Hierarchy

- [parent](mlmediagroup/parent.md): Deprecated. The media group’s parent group.
- [childGroups](mlmediagroup/childgroups.md): Deprecated. A list of child groups contained in the media group.
- [mediaObjects](mlmediagroup/mediaobjects.md): Deprecated. A list of media objects in the media group.

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

- [MLMediaLibrary](mlmedialibrary.md): Deprecated. The `MLMediaLibrary` class provides an interface for accessing a collection of media objects from various sources. It serves as the initial access point of the Media Library framework.
- [MLMediaObject](mlmediaobject.md): Deprecated. The `MLMediaObject` class describes a single media file, such as a photo, song, or movie. Each media object contains basic metadata including a name, media type, URL, and so on. Additional information about each object is stored in its list of attributes. For a list of possible object attribute keys, see [Media Object Attribute Keys](media-object-attribute-keys.md).
- [MLMediaSource](mlmediasource.md): Deprecated. The `MLMediaSource` class identifies a specific provider of media. Conceptually, a media source respresents a single app, such as iTunes or Aperture. Each media source contains multiple groups of media objects—individual files containing a piece of media such as a photo, song, or movie.

# MLMediaGroup (Objective-C)

**Framework:** Media Library  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

The `MLMediaGroup` class provides groupings for media objects from a single source of media, such as iTunes or Aperture. The media objects—individual files containing a piece of media such as a photo, song, or movie—are referenced by one or more groups within each media source. These groupings serve as filters, providing hierarchical structure to the collection of objects in each source.

## Declaration

```objectivec
@interface MLMediaGroup : NSObject
```

<a id="overview"></a>

## Overview

The structure of the group hierarchy is specific to each media source, but all sources have certain commonalities. For example, every source has a single root media group, which contains all groups and objects within that source. It is the highest-level parent group in the hierarchy and each of its descendant groups contains its own subgroups and their objects. All groups have a reference to their parent within the hierarchy. A group with no descendants contains only its own objects. If a media group does not contain any objects, it is not visible in the hierarchy.

A media group has an array of attributes which can change at any point. For example, a media group may have certain attributes that describe its objects, but these attributes appear only after the objects for that group have been loaded. When any media group attribute changes, observers are notified via KVO notification. For information about handling attributes that change, see [Cocoa Bindings Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaBindings/CocoaBindings.html#//apple_ref/doc/uid/10000167i).

Every media group has a unique identifier as well as a type identifier. In certain cases, multiple groups within a source can have the same type identifier. For descriptions of group type identifiers, see [MediaLibrary Constants](medialibrary-constants.md).

All `MLMediaGroup` properties are read-only, so this information can be accessed but not altered.

## Topics

### Identifying the Group

- [identifier](mlmediagroup/identifier.md): Deprecated. An identifier for the media group.
- [typeIdentifier](mlmediagroup/typeidentifier.md): Deprecated. An identifier for the media group’s type.
- [mediaSourceIdentifier](mlmediagroup/mediasourceidentifier.md): Deprecated. An identifier for the source that loaded the media group.
- [mediaLibrary](mlmediagroup/medialibrary.md): Deprecated. A pointer to the media library instance that loaded the media group’s source.

### Accessing Group Attributes

- [attributes](mlmediagroup/attributes.md): Deprecated. A dictionary of attributes describing the media group.
- [name](mlmediagroup/name.md): Deprecated. The name of the media group.
- [iconImage](mlmediagroup/iconimage.md): Deprecated. The media group’s icon.
- [URL](mlmediagroup/url.md): Deprecated. The location of the media group.
- [modificationDate](mlmediagroup/modificationdate.md): Deprecated. The date and time when the media group was last altered.

### Accessing the Group Hierarchy

- [parent](mlmediagroup/parent.md): Deprecated. The media group’s parent group.
- [childGroups](mlmediagroup/childgroups.md): Deprecated. A list of child groups contained in the media group.
- [mediaObjects](mlmediagroup/mediaobjects.md): Deprecated. A list of media objects in the media group.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [MLMediaLibrary](mlmedialibrary.md): Deprecated. The `MLMediaLibrary` class provides an interface for accessing a collection of media objects from various sources. It serves as the initial access point of the Media Library framework.
- [MLMediaObject](mlmediaobject.md): Deprecated. The `MLMediaObject` class describes a single media file, such as a photo, song, or movie. Each media object contains basic metadata including a name, media type, URL, and so on. Additional information about each object is stored in its list of attributes. For a list of possible object attribute keys, see [Media Object Attribute Keys](media-object-attribute-keys.md).
- [MLMediaSource](mlmediasource.md): Deprecated. The `MLMediaSource` class identifies a specific provider of media. Conceptually, a media source respresents a single app, such as iTunes or Aperture. Each media source contains multiple groups of media objects—individual files containing a piece of media such as a photo, song, or movie.
