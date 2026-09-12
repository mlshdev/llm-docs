> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitempropertypodcasttitle](https://developer.apple.com/documentation/mediaplayer/mpmediaitempropertypodcasttitle)

# MPMediaItemPropertyPodcastTitle (Swift)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The title of a podcast.

## Declaration

```swift
let MPMediaItemPropertyPodcastTitle: String
```

<a id="Discussion"></a>

## Discussion

The property contains the title of a podcast, such as “This Martian Drudgery”, as opposed to the title of an individual episode of a podcast such as “Episode 12: Another Cold Day At The Pole” (which you specify using the [MPMediaItemPropertyTitle](mpmediaitempropertytitle.md) property). Value is an `NSString` object.

Can be used to build a media property predicate as described in [MPMediaPropertyPredicate](mpmediapropertypredicate.md).

## See Also

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

# MPMediaItemPropertyPodcastTitle (Objective-C)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The title of a podcast.

## Declaration

```objectivec
extern NSString * const MPMediaItemPropertyPodcastTitle;
```

<a id="Discussion"></a>

## Discussion

The property contains the title of a podcast, such as “This Martian Drudgery”, as opposed to the title of an individual episode of a podcast such as “Episode 12: Another Cold Day At The Pole” (which you specify using the [MPMediaItemPropertyTitle](mpmediaitempropertytitle.md) property). Value is an `NSString` object.

Can be used to build a media property predicate as described in [MPMediaPropertyPredicate](mpmediapropertypredicate.md).

## See Also

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
