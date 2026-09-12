> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/general-media-item-property-keys](https://developer.apple.com/documentation/mediaplayer/general-media-item-property-keys)

# General media item property keys (Swift)

**Framework:** Media Player  
**Kind:** API Collection

System-defined properties for obtaining the metadata for a media item.

<a id="overview"></a>

## Overview

Obtain metadata for a media item by calling the [value(forProperty:)](mpmediaentity/value%28forproperty_%29.md) method with these property keys. You can use the filterable property keys to build media property predicates, which [MPMediaPropertyPredicate](mpmediapropertypredicate.md) describes.

## Topics

### Property keys

- [MPMediaItemPropertyPlaybackDuration](mpmediaitempropertyplaybackduration.md): The playback duration of the media item.
- [MPMediaItemPropertyAlbumTrackNumber](mpmediaitempropertyalbumtracknumber.md): The track number of the media item, for a media item that is part of an album.
- [MPMediaItemPropertyAlbumTrackCount](mpmediaitempropertyalbumtrackcount.md): The number of tracks for the album that contains the media item.
- [MPMediaItemPropertyDiscNumber](mpmediaitempropertydiscnumber.md): The disc number of the media item, for a media item that is part of a multidisc album.
- [MPMediaItemPropertyDiscCount](mpmediaitempropertydisccount.md): The number of discs for the album that contains the media item.
- [MPMediaItemPropertyArtwork](mpmediaitempropertyartwork.md): The artwork image for the media item.
- [MPMediaItemPropertyLyrics](mpmediaitempropertylyrics.md): The lyrics for the media item.
- [MPMediaItemPropertyReleaseDate](mpmediaitempropertyreleasedate.md): The date of the media item’s first public release.
- [MPMediaItemPropertyBeatsPerMinute](mpmediaitempropertybeatsperminute.md): The number of musical beats per minute for the media item.
- [MPMediaItemPropertyComments](mpmediaitempropertycomments.md): Textual information about the media item.
- [MPMediaItemPropertyAssetURL](mpmediaitempropertyasseturl.md): A URL that points to the media item.
- [MPMediaItemPropertyIsExplicit](mpmediaitempropertyisexplicit.md): A Boolean value that indicates whether the media item contains explicit (adult) lyrics or language.
- [MPMediaItemPropertyIsPreorder](mpmediaitempropertyispreorder.md): A Boolean value that indicates whether the media item is a preorder.
- [MPMediaItemPropertyPlaybackStoreID](mpmediaitempropertyplaybackstoreid.md): The identifier for enqueueing store tracks.

### Filterable property keys

- [MPMediaItemPropertyAlbumArtist](mpmediaitempropertyalbumartist.md): The primary performing artist for an album.
- [MPMediaItemPropertyAlbumArtistPersistentID](mpmediaitempropertyalbumartistpersistentid.md): The persistent identifier for an album artist.
- [MPMediaItemPropertyAlbumPersistentID](mpmediaitempropertyalbumpersistentid.md): The key for the persistent identifier for an album.
- [MPMediaItemPropertyAlbumTitle](mpmediaitempropertyalbumtitle.md): The title of an album.
- [MPMediaItemPropertyArtist](mpmediaitempropertyartist.md): The performing artists for a media item — which may vary from the primary artist for the album that a media item belongs to.
- [MPMediaItemPropertyArtistPersistentID](mpmediaitempropertyartistpersistentid.md): The key for the persistent identifier for an artist.
- [MPMediaItemPropertyComposer](mpmediaitempropertycomposer.md): The musical composer for the media item.
- [MPMediaItemPropertyComposerPersistentID](mpmediaitempropertycomposerpersistentid.md): The persistent identifier for a composer.
- [MPMediaItemPropertyGenre](mpmediaitempropertygenre.md): The music or film genre of the media item.
- [MPMediaItemPropertyGenrePersistentID](mpmediaitempropertygenrepersistentid.md): The persistent identifier for a genre.
- [MPMediaItemPropertyHasProtectedAsset](mpmediaitempropertyhasprotectedasset.md): A Boolean value that indicates the media item has DRM protection so it can’t play through a standard playback API.
- [MPMediaItemPropertyIsCompilation](mpmediaitempropertyiscompilation.md): A Boolean value that indicates whether the media item is part of a compilation.
- [MPMediaItemPropertyIsCloudItem](mpmediaitempropertyisclouditem.md): A Boolean value that indicates whether the media item is an iCloud item.
- [MPMediaItemPropertyMediaType](mpmediaitempropertymediatype.md): The media type of the media item.
- [MPMediaItemPropertyPersistentID](mpmediaitempropertypersistentid.md): The key for the persistent identifier for the media item.
- [MPMediaItemPropertyPlayCount](mpmediaitempropertyplaycount.md): The number of times the user plays the media item.
- [MPMediaItemPropertyPodcastPersistentID](mpmediaitempropertypodcastpersistentid.md): The persistent identifier for an audio podcast.
- [MPMediaItemPropertyPodcastTitle](mpmediaitempropertypodcasttitle.md): The title of a podcast.
- [MPMediaItemPropertyTitle](mpmediaitempropertytitle.md): The title or name of the media item.

## See Also

### Media item types and keys

- [MPMediaType](mpmediatype.md): The properties for defining the type for a media item.
- [User-defined property keys](user-defined-property-keys.md): Properties for obtaining user-defined metadata for a media item.

# General media item property keys (Objective-C)

**Framework:** Media Player  
**Kind:** API Collection

System-defined properties for obtaining the metadata for a media item.

<a id="overview"></a>

## Overview

Obtain metadata for a media item by calling the [valueForProperty:](mpmediaentity/value%28forproperty_%29.md) method with these property keys. You can use the filterable property keys to build media property predicates, which [MPMediaPropertyPredicate](mpmediapropertypredicate.md) describes.

## Topics

### Property keys

- [MPMediaItemPropertyPlaybackDuration](mpmediaitempropertyplaybackduration.md): The playback duration of the media item.
- [MPMediaItemPropertyAlbumTrackNumber](mpmediaitempropertyalbumtracknumber.md): The track number of the media item, for a media item that is part of an album.
- [MPMediaItemPropertyAlbumTrackCount](mpmediaitempropertyalbumtrackcount.md): The number of tracks for the album that contains the media item.
- [MPMediaItemPropertyDiscNumber](mpmediaitempropertydiscnumber.md): The disc number of the media item, for a media item that is part of a multidisc album.
- [MPMediaItemPropertyDiscCount](mpmediaitempropertydisccount.md): The number of discs for the album that contains the media item.
- [MPMediaItemPropertyArtwork](mpmediaitempropertyartwork.md): The artwork image for the media item.
- [MPMediaItemPropertyLyrics](mpmediaitempropertylyrics.md): The lyrics for the media item.
- [MPMediaItemPropertyReleaseDate](mpmediaitempropertyreleasedate.md): The date of the media item’s first public release.
- [MPMediaItemPropertyBeatsPerMinute](mpmediaitempropertybeatsperminute.md): The number of musical beats per minute for the media item.
- [MPMediaItemPropertyComments](mpmediaitempropertycomments.md): Textual information about the media item.
- [MPMediaItemPropertyAssetURL](mpmediaitempropertyasseturl.md): A URL that points to the media item.
- [MPMediaItemPropertyIsExplicit](mpmediaitempropertyisexplicit.md): A Boolean value that indicates whether the media item contains explicit (adult) lyrics or language.
- [MPMediaItemPropertyIsPreorder](mpmediaitempropertyispreorder.md): A Boolean value that indicates whether the media item is a preorder.
- [MPMediaItemPropertyPlaybackStoreID](mpmediaitempropertyplaybackstoreid.md): The identifier for enqueueing store tracks.

### Filterable property keys

- [MPMediaItemPropertyAlbumArtist](mpmediaitempropertyalbumartist.md): The primary performing artist for an album.
- [MPMediaItemPropertyAlbumArtistPersistentID](mpmediaitempropertyalbumartistpersistentid.md): The persistent identifier for an album artist.
- [MPMediaItemPropertyAlbumPersistentID](mpmediaitempropertyalbumpersistentid.md): The key for the persistent identifier for an album.
- [MPMediaItemPropertyAlbumTitle](mpmediaitempropertyalbumtitle.md): The title of an album.
- [MPMediaItemPropertyArtist](mpmediaitempropertyartist.md): The performing artists for a media item — which may vary from the primary artist for the album that a media item belongs to.
- [MPMediaItemPropertyArtistPersistentID](mpmediaitempropertyartistpersistentid.md): The key for the persistent identifier for an artist.
- [MPMediaItemPropertyComposer](mpmediaitempropertycomposer.md): The musical composer for the media item.
- [MPMediaItemPropertyComposerPersistentID](mpmediaitempropertycomposerpersistentid.md): The persistent identifier for a composer.
- [MPMediaItemPropertyGenre](mpmediaitempropertygenre.md): The music or film genre of the media item.
- [MPMediaItemPropertyGenrePersistentID](mpmediaitempropertygenrepersistentid.md): The persistent identifier for a genre.
- [MPMediaItemPropertyHasProtectedAsset](mpmediaitempropertyhasprotectedasset.md): A Boolean value that indicates the media item has DRM protection so it can’t play through a standard playback API.
- [MPMediaItemPropertyIsCompilation](mpmediaitempropertyiscompilation.md): A Boolean value that indicates whether the media item is part of a compilation.
- [MPMediaItemPropertyIsCloudItem](mpmediaitempropertyisclouditem.md): A Boolean value that indicates whether the media item is an iCloud item.
- [MPMediaItemPropertyMediaType](mpmediaitempropertymediatype.md): The media type of the media item.
- [MPMediaItemPropertyPersistentID](mpmediaitempropertypersistentid.md): The key for the persistent identifier for the media item.
- [MPMediaItemPropertyPlayCount](mpmediaitempropertyplaycount.md): The number of times the user plays the media item.
- [MPMediaItemPropertyPodcastPersistentID](mpmediaitempropertypodcastpersistentid.md): The persistent identifier for an audio podcast.
- [MPMediaItemPropertyPodcastTitle](mpmediaitempropertypodcasttitle.md): The title of a podcast.
- [MPMediaItemPropertyTitle](mpmediaitempropertytitle.md): The title or name of the media item.

## See Also

### Media item types and keys

- [MPMediaType](mpmediatype.md): The properties for defining the type for a media item.
- [User-defined property keys](user-defined-property-keys.md): Properties for obtaining user-defined metadata for a media item.
