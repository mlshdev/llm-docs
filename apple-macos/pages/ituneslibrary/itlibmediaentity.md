> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibmediaentity](https://developer.apple.com/documentation/ituneslibrary/itlibmediaentity)

# ITLibMediaEntity (Swift)

**Framework:** iTunes Library  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

This class describes a media entity, which can be a media item, such as an audio track.

## Declaration

```swift
class ITLibMediaEntity
```

<a id="overview"></a>

## Overview

> **Note**

>  Entity properties are specific to each type of entity, and each specific entity class provides individual accessors for its properties.

Each media entity has a persistent unique ID and set of properties that iTunes assigns.

The `ITLibMediaEntity` class serves as the abstract superclass for [ITLibMediaItem](itlibmediaitem.md) and [ITLibPlaylist](itlibplaylist.md) instances.

## Topics

### Essentials

- [persistentID](itlibmediaentity/persistentid.md): The unique identifier of the media entity.

### Getting Media Item Properties

- [enumerateValues(forProperties:using:)](itlibmediaentity/enumeratevalues%28forproperties_using_%29.md): Executes a provided block with the fetched values for the item properties.
- [enumerateValuesExcept(forProperties:using:)](itlibmediaentity/enumeratevaluesexcept%28forproperties_using_%29.md): Executes a provided block with the fetched values for all properties in the entity except for the provided set.
- [value(forProperty:)](itlibmediaentity/value%28forproperty_%29.md): Gets the value for a specified media property key.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [ITLibMediaItem](itlibmediaitem.md)
- [ITLibPlaylist](itlibplaylist.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Media Items

- [ITLibMediaItem](itlibmediaitem.md): This class describes a media item (a track) in the iTunes library, such as a song, a video, or a podcast.
- [ITLibArtist](itlibartist.md): This class represents an artist, such as the performer of a song.
- [ITLibArtwork](itlibartwork.md): This class represents the artwork for a media item.
- [ITLibMediaItemVideoInfo](itlibmediaitemvideoinfo.md): This class encapsulates the video information of a video media item.

# ITLibMediaEntity (Objective-C)

**Framework:** iTunes Library  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

This class describes a media entity, which can be a media item, such as an audio track.

## Declaration

```objectivec
@interface ITLibMediaEntity : NSObject
```

<a id="overview"></a>

## Overview

> **Note**

>  Entity properties are specific to each type of entity, and each specific entity class provides individual accessors for its properties.

Each media entity has a persistent unique ID and set of properties that iTunes assigns.

The `ITLibMediaEntity` class serves as the abstract superclass for [ITLibMediaItem](itlibmediaitem.md) and [ITLibPlaylist](itlibplaylist.md) instances.

## Topics

### Essentials

- [persistentID](itlibmediaentity/persistentid.md): The unique identifier of the media entity.

### Getting Media Item Properties

- [enumerateValuesForProperties:usingBlock:](itlibmediaentity/enumeratevalues%28forproperties_using_%29.md): Executes a provided block with the fetched values for the item properties.
- [enumerateValuesExceptForProperties:usingBlock:](itlibmediaentity/enumeratevaluesexcept%28forproperties_using_%29.md): Executes a provided block with the fetched values for all properties in the entity except for the provided set.
- [valueForProperty:](itlibmediaentity/value%28forproperty_%29.md): Gets the value for a specified media property key.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [ITLibMediaItem](itlibmediaitem.md)
- [ITLibPlaylist](itlibplaylist.md)

## See Also

### Media Items

- [ITLibMediaItem](itlibmediaitem.md): This class describes a media item (a track) in the iTunes library, such as a song, a video, or a podcast.
- [ITLibArtist](itlibartist.md): This class represents an artist, such as the performer of a song.
- [ITLibArtwork](itlibartwork.md): This class represents the artwork for a media item.
- [ITLibMediaItemVideoInfo](itlibmediaitemvideoinfo.md): This class encapsulates the video information of a video media item.
