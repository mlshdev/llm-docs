> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitem](https://developer.apple.com/documentation/mediaplayer/mpmediaitem)

# MPMediaItem (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

A collection of properties that represents a single item in the media library.

## Declaration

```swift
class MPMediaItem
```

<a id="overview"></a>

## Overview

A media item has an overall unique identifier, accessed using the [MPMediaItemPropertyPersistentID](mpmediaitempropertypersistentid.md) property key, as well as specific identifiers for its metadata. These identifiers persists across application launches.

A media item can have a wide range of metadata associated with it. You access this metadata using the [value(forProperty:)](mpmediaentity/value%28forproperty_%29.md) method along with the property keys described in this document. You can also access metadata in a batch fashion using the [enumerateValues(forProperties:using:)](mpmediaentity/enumeratevalues%28forproperties_using_%29.md) method. Anytime the app accesses more than one property, enumerating over a set of property keys is more efficient than fetching each individual property. [MPMediaEntity](mpmediaentity.md) defines both of these methods, the abstract superclass of [MPMediaItemCollection](mpmediaitemcollection.md), and described in `MPMediaEntity`.

You use attributes of media items to build media queries for searching the Media library. [MPMediaType](mpmediatype.md), [General media item property keys](general-media-item-property-keys.md), and `Podcast Item Property Keys` describe these attributes. In addition, [Media entity property keys](media-entity-property-keys.md) describes the [MPMediaEntityPropertyPersistentID](mpmediaentitypropertypersistentid.md) property, and [MPMediaQuery](mpmediaquery.md) describes media queries.

## Topics

### Media item properties

- [albumArtist](mpmediaitem/albumartist.md): The primary performing artist for an album.
- [albumArtistPersistentID](mpmediaitem/albumartistpersistentid.md): The persistent identifier for the primary performing artist for an album.
- [albumPersistentID](mpmediaitem/albumpersistentid.md): The persistent identifier for an album.
- [albumTitle](mpmediaitem/albumtitle.md): The title of an album, such as *Live on Mars*, rather than the title of an individual song on the album, such as “Crater Dance.”
- [albumTrackCount](mpmediaitem/albumtrackcount.md): The number of tracks for the album that contains the media item.
- [albumTrackNumber](mpmediaitem/albumtracknumber.md): The track number of the media item, for a media item that’s part of an album.
- [artist](mpmediaitem/artist.md): The performing artists for a media item, which may vary from the primary artist for the album that a media item belongs to.
- [artistPersistentID](mpmediaitem/artistpersistentid.md): The persistent identifier for an artist.
- [artwork](mpmediaitem/artwork.md): The artwork image for the media item.
- [assetURL](mpmediaitem/asseturl.md): The URL that points to the media item.
- [beatsPerMinute](mpmediaitem/beatsperminute.md): The number of musical beats per minute for the media item.
- [bookmarkTime](mpmediaitem/bookmarktime.md): The time of the user’s most recent interaction with the bookmark in the media item.
- [isCloudItem](mpmediaitem/isclouditem.md): A Boolean value that indicates whether the media item is an iCloud Music Library item.
- [comments](mpmediaitem/comments.md): Textual information about the media item.
- [isCompilation](mpmediaitem/iscompilation.md): A Boolean value that indicates whether the media item is part of a compilation.
- [isPreorder](mpmediaitem/ispreorder.md): A Boolean value that indicates whether the media item is a preorder.
- [composer](mpmediaitem/composer.md): The musical composer for the media item.
- [composerPersistentID](mpmediaitem/composerpersistentid.md): The persistent identifier for a composer.
- [dateAdded](mpmediaitem/dateadded.md): The date the user adds the media item to the library.
- [discCount](mpmediaitem/disccount.md): The number of discs for the album that contains the media item.
- [discNumber](mpmediaitem/discnumber.md): The disc number of the media item, for a media item that’s part of a multidisc album.
- [isExplicitItem](mpmediaitem/isexplicititem.md): A Boolean value that indicates whether the media item has explicit (adult) lyrics or language.
- [genre](mpmediaitem/genre.md): The music or film genre of the media item.
- [genrePersistentID](mpmediaitem/genrepersistentid.md): The persistent identifier for a genre.
- [lastPlayedDate](mpmediaitem/lastplayeddate.md): The most recent play date of the media item.
- [lyrics](mpmediaitem/lyrics.md): The lyrics for the media item.
- [mediaType](mpmediaitem/mediatype.md): The media type of the media item.
- [persistentID](mpmediaitem/persistentid.md): The persistent identifier for the media item.
- [playCount](mpmediaitem/playcount.md): The number of times the user plays the media item.
- [playbackDuration](mpmediaitem/playbackduration.md): The playback duration of the media item.
- [playbackStoreID](mpmediaitem/playbackstoreid.md): The ID of a media item from the Apple Music catalog.
- [podcastPersistentID](mpmediaitem/podcastpersistentid.md): The persistent identifier for an audio podcast.
- [podcastTitle](mpmediaitem/podcasttitle.md): The title of a podcast, such as *This Martian Drudgery*, rather than the title of an individual episode of a podcast, such as “Episode 12: Another Cold Day at the Pole.”
- [hasProtectedAsset](mpmediaitem/hasprotectedasset.md): A Boolean value that indicates whether the media item has a protected asset.
- [rating](mpmediaitem/rating.md): The user-specified rating of the media item.
- [releaseDate](mpmediaitem/releasedate.md): The date of the media item’s first public release.
- [skipCount](mpmediaitem/skipcount.md): The number of times the user skips playing the media item.
- [title](mpmediaitem/title.md): The title or name of the media item.
- [userGrouping](mpmediaitem/usergrouping.md): Grouping information for the media item.

### Obtaining group properties

- [persistentIDProperty(forGroupingType:)](mpmediaitem/persistentidproperty%28forgroupingtype_%29.md): Obtains the persistent identifier key for a specified grouping type.
- [titleProperty(forGroupingType:)](mpmediaitem/titleproperty%28forgroupingtype_%29.md): Obtains the title key for a specified grouping type.

### Media item types and keys

- [MPMediaType](mpmediatype.md): The properties for defining the type for a media item.
- [General media item property keys](general-media-item-property-keys.md): System-defined properties for obtaining the metadata for a media item.
- [User-defined property keys](user-defined-property-keys.md): Properties for obtaining user-defined metadata for a media item.

## Relationships

### Inherits From

- [MPMediaEntity](mpmediaentity.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Media items and playlists

- [Providing animated artwork for media items](providing-animated-artwork-for-media-items.md): Display animated artwork for your app’s media in system views, such as the lock screen, by providing video assets through your now playing info.
- [MPMediaItemArtwork](mpmediaitemartwork.md): A graphical image, such as music album cover art, associated with a media item.
- [MPMediaItemAnimatedArtwork](mpmediaitemanimatedartwork.md): An animated image, such as an animated music album cover art, for a media item.
- [MPMediaItemCollection](mpmediaitemcollection.md): A sorted set of media items from the media library.
- [MPMediaPlaylist](mpmediaplaylist.md): A playable collection of related media items.
- [MPMediaPlaylistCreationMetadata](mpmediaplaylistcreationmetadata.md): A set of attributes for describing a playlist when creating it.
- [MPMediaEntity](mpmediaentity.md): The abstract superclass for media items, media item collections, and media playlist instances.

# MPMediaItem (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

A collection of properties that represents a single item in the media library.

## Declaration

```objectivec
@interface MPMediaItem : MPMediaEntity
```

<a id="overview"></a>

## Overview

A media item has an overall unique identifier, accessed using the [MPMediaItemPropertyPersistentID](mpmediaitempropertypersistentid.md) property key, as well as specific identifiers for its metadata. These identifiers persists across application launches.

A media item can have a wide range of metadata associated with it. You access this metadata using the [valueForProperty:](mpmediaentity/value%28forproperty_%29.md) method along with the property keys described in this document. You can also access metadata in a batch fashion using the [enumerateValuesForProperties:usingBlock:](mpmediaentity/enumeratevalues%28forproperties_using_%29.md) method. Anytime the app accesses more than one property, enumerating over a set of property keys is more efficient than fetching each individual property. [MPMediaEntity](mpmediaentity.md) defines both of these methods, the abstract superclass of [MPMediaItemCollection](mpmediaitemcollection.md), and described in `MPMediaEntity`.

You use attributes of media items to build media queries for searching the Media library. [MPMediaType](mpmediatype.md), [General media item property keys](general-media-item-property-keys.md), and `Podcast Item Property Keys` describe these attributes. In addition, [Media entity property keys](media-entity-property-keys.md) describes the [MPMediaEntityPropertyPersistentID](mpmediaentitypropertypersistentid.md) property, and [MPMediaQuery](mpmediaquery.md) describes media queries.

## Topics

### Media item properties

- [albumArtist](mpmediaitem/albumartist.md): The primary performing artist for an album.
- [albumArtistPersistentID](mpmediaitem/albumartistpersistentid.md): The persistent identifier for the primary performing artist for an album.
- [albumPersistentID](mpmediaitem/albumpersistentid.md): The persistent identifier for an album.
- [albumTitle](mpmediaitem/albumtitle.md): The title of an album, such as *Live on Mars*, rather than the title of an individual song on the album, such as “Crater Dance.”
- [albumTrackCount](mpmediaitem/albumtrackcount.md): The number of tracks for the album that contains the media item.
- [albumTrackNumber](mpmediaitem/albumtracknumber.md): The track number of the media item, for a media item that’s part of an album.
- [artist](mpmediaitem/artist.md): The performing artists for a media item, which may vary from the primary artist for the album that a media item belongs to.
- [artistPersistentID](mpmediaitem/artistpersistentid.md): The persistent identifier for an artist.
- [artwork](mpmediaitem/artwork.md): The artwork image for the media item.
- [assetURL](mpmediaitem/asseturl.md): The URL that points to the media item.
- [beatsPerMinute](mpmediaitem/beatsperminute.md): The number of musical beats per minute for the media item.
- [bookmarkTime](mpmediaitem/bookmarktime.md): The time of the user’s most recent interaction with the bookmark in the media item.
- [cloudItem](mpmediaitem/isclouditem.md): A Boolean value that indicates whether the media item is an iCloud Music Library item.
- [comments](mpmediaitem/comments.md): Textual information about the media item.
- [compilation](mpmediaitem/iscompilation.md): A Boolean value that indicates whether the media item is part of a compilation.
- [preorder](mpmediaitem/ispreorder.md): A Boolean value that indicates whether the media item is a preorder.
- [composer](mpmediaitem/composer.md): The musical composer for the media item.
- [composerPersistentID](mpmediaitem/composerpersistentid.md): The persistent identifier for a composer.
- [dateAdded](mpmediaitem/dateadded.md): The date the user adds the media item to the library.
- [discCount](mpmediaitem/disccount.md): The number of discs for the album that contains the media item.
- [discNumber](mpmediaitem/discnumber.md): The disc number of the media item, for a media item that’s part of a multidisc album.
- [explicitItem](mpmediaitem/isexplicititem.md): A Boolean value that indicates whether the media item has explicit (adult) lyrics or language.
- [genre](mpmediaitem/genre.md): The music or film genre of the media item.
- [genrePersistentID](mpmediaitem/genrepersistentid.md): The persistent identifier for a genre.
- [lastPlayedDate](mpmediaitem/lastplayeddate.md): The most recent play date of the media item.
- [lyrics](mpmediaitem/lyrics.md): The lyrics for the media item.
- [mediaType](mpmediaitem/mediatype.md): The media type of the media item.
- [persistentID](mpmediaitem/persistentid.md): The persistent identifier for the media item.
- [playCount](mpmediaitem/playcount.md): The number of times the user plays the media item.
- [playbackDuration](mpmediaitem/playbackduration.md): The playback duration of the media item.
- [playbackStoreID](mpmediaitem/playbackstoreid.md): The ID of a media item from the Apple Music catalog.
- [podcastPersistentID](mpmediaitem/podcastpersistentid.md): The persistent identifier for an audio podcast.
- [podcastTitle](mpmediaitem/podcasttitle.md): The title of a podcast, such as *This Martian Drudgery*, rather than the title of an individual episode of a podcast, such as “Episode 12: Another Cold Day at the Pole.”
- [protectedAsset](mpmediaitem/hasprotectedasset.md): A Boolean value that indicates whether the media item has a protected asset.
- [rating](mpmediaitem/rating.md): The user-specified rating of the media item.
- [releaseDate](mpmediaitem/releasedate.md): The date of the media item’s first public release.
- [skipCount](mpmediaitem/skipcount.md): The number of times the user skips playing the media item.
- [title](mpmediaitem/title.md): The title or name of the media item.
- [userGrouping](mpmediaitem/usergrouping.md): Grouping information for the media item.

### Obtaining group properties

- [persistentIDPropertyForGroupingType:](mpmediaitem/persistentidproperty%28forgroupingtype_%29.md): Obtains the persistent identifier key for a specified grouping type.
- [titlePropertyForGroupingType:](mpmediaitem/titleproperty%28forgroupingtype_%29.md): Obtains the title key for a specified grouping type.

### Media item types and keys

- [MPMediaType](mpmediatype.md): The properties for defining the type for a media item.
- [General media item property keys](general-media-item-property-keys.md): System-defined properties for obtaining the metadata for a media item.
- [User-defined property keys](user-defined-property-keys.md): Properties for obtaining user-defined metadata for a media item.

## Relationships

### Inherits From

- [MPMediaEntity](mpmediaentity.md)

## See Also

### Media items and playlists

- [Providing animated artwork for media items](providing-animated-artwork-for-media-items.md): Display animated artwork for your app’s media in system views, such as the lock screen, by providing video assets through your now playing info.
- [MPMediaItemArtwork](mpmediaitemartwork.md): A graphical image, such as music album cover art, associated with a media item.
- [MPMediaItemAnimatedArtwork](mpmediaitemanimatedartwork.md): An animated image, such as an animated music album cover art, for a media item.
- [MPMediaItemCollection](mpmediaitemcollection.md): A sorted set of media items from the media library.
- [MPMediaPlaylist](mpmediaplaylist.md): A playable collection of related media items.
- [MPMediaPlaylistCreationMetadata](mpmediaplaylistcreationmetadata.md): A set of attributes for describing a playlist when creating it.
- [MPMediaEntity](mpmediaentity.md): The abstract superclass for media items, media item collections, and media playlist instances.
