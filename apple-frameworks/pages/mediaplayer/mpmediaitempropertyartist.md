> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitempropertyartist](https://developer.apple.com/documentation/mediaplayer/mpmediaitempropertyartist)

# MPMediaItemPropertyArtist (Swift)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The performing artists for a media item — which may vary from the primary artist for the album that a media item belongs to.

## Declaration

```swift
let MPMediaItemPropertyArtist: String
```

<a id="Discussion"></a>

## Discussion

For example, if the album artist is “Joseph Fable,” the artist for one of the songs in the album may be “Joseph Fable featuring Thomas Smithson”. Value is an [NSString](../foundation/nsstring.md) object.

Can be used to build a media property predicate as described in [MPMediaPropertyPredicate](mpmediapropertypredicate.md).

## See Also

### Filterable property keys

- [MPMediaItemPropertyAlbumArtist](mpmediaitempropertyalbumartist.md): The primary performing artist for an album.
- [MPMediaItemPropertyAlbumArtistPersistentID](mpmediaitempropertyalbumartistpersistentid.md): The persistent identifier for an album artist.
- [MPMediaItemPropertyAlbumPersistentID](mpmediaitempropertyalbumpersistentid.md): The key for the persistent identifier for an album.
- [MPMediaItemPropertyAlbumTitle](mpmediaitempropertyalbumtitle.md): The title of an album.
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

# MPMediaItemPropertyArtist (Objective-C)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The performing artists for a media item — which may vary from the primary artist for the album that a media item belongs to.

## Declaration

```objectivec
extern NSString * const MPMediaItemPropertyArtist;
```

<a id="Discussion"></a>

## Discussion

For example, if the album artist is “Joseph Fable,” the artist for one of the songs in the album may be “Joseph Fable featuring Thomas Smithson”. Value is an [NSString](../foundation/nsstring.md) object.

Can be used to build a media property predicate as described in [MPMediaPropertyPredicate](mpmediapropertypredicate.md).

## See Also

### Filterable property keys

- [MPMediaItemPropertyAlbumArtist](mpmediaitempropertyalbumartist.md): The primary performing artist for an album.
- [MPMediaItemPropertyAlbumArtistPersistentID](mpmediaitempropertyalbumartistpersistentid.md): The persistent identifier for an album artist.
- [MPMediaItemPropertyAlbumPersistentID](mpmediaitempropertyalbumpersistentid.md): The key for the persistent identifier for an album.
- [MPMediaItemPropertyAlbumTitle](mpmediaitempropertyalbumtitle.md): The title of an album.
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
