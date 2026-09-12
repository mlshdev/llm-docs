> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitempropertyartistpersistentid](https://developer.apple.com/documentation/mediaplayer/mpmediaitempropertyartistpersistentid)

# MPMediaItemPropertyArtistPersistentID (Swift)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The key for the persistent identifier for an artist.

## Declaration

```swift
let MPMediaItemPropertyArtistPersistentID: String
```

<a id="Discussion"></a>

## Discussion

This value is an [NSNumber](../foundation/nsnumber.md) object that contains a [MPMediaEntityPersistentID](mpmediaentitypersistentid.md). The value of the `MPMediaItemPropertyArtistPersistentID` identifier persists across application launches and across syncs that do not change the sync status of the media item. The value is not guaranteed to persist across a sync/unsync/sync cycle.

Can be used to build a media property predicate as described in [MPMediaPropertyPredicate](mpmediapropertypredicate.md).

## See Also

### Filterable property keys

- [MPMediaItemPropertyAlbumArtist](mpmediaitempropertyalbumartist.md): The primary performing artist for an album.
- [MPMediaItemPropertyAlbumArtistPersistentID](mpmediaitempropertyalbumartistpersistentid.md): The persistent identifier for an album artist.
- [MPMediaItemPropertyAlbumPersistentID](mpmediaitempropertyalbumpersistentid.md): The key for the persistent identifier for an album.
- [MPMediaItemPropertyAlbumTitle](mpmediaitempropertyalbumtitle.md): The title of an album.
- [MPMediaItemPropertyArtist](mpmediaitempropertyartist.md): The performing artists for a media item — which may vary from the primary artist for the album that a media item belongs to.
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

# MPMediaItemPropertyArtistPersistentID (Objective-C)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The key for the persistent identifier for an artist.

## Declaration

```objectivec
extern NSString * const MPMediaItemPropertyArtistPersistentID;
```

<a id="Discussion"></a>

## Discussion

This value is an [NSNumber](../foundation/nsnumber.md) object that contains a [MPMediaEntityPersistentID](mpmediaentitypersistentid.md). The value of the `MPMediaItemPropertyArtistPersistentID` identifier persists across application launches and across syncs that do not change the sync status of the media item. The value is not guaranteed to persist across a sync/unsync/sync cycle.

Can be used to build a media property predicate as described in [MPMediaPropertyPredicate](mpmediapropertypredicate.md).

## See Also

### Filterable property keys

- [MPMediaItemPropertyAlbumArtist](mpmediaitempropertyalbumartist.md): The primary performing artist for an album.
- [MPMediaItemPropertyAlbumArtistPersistentID](mpmediaitempropertyalbumartistpersistentid.md): The persistent identifier for an album artist.
- [MPMediaItemPropertyAlbumPersistentID](mpmediaitempropertyalbumpersistentid.md): The key for the persistent identifier for an album.
- [MPMediaItemPropertyAlbumTitle](mpmediaitempropertyalbumtitle.md): The title of an album.
- [MPMediaItemPropertyArtist](mpmediaitempropertyartist.md): The performing artists for a media item — which may vary from the primary artist for the album that a media item belongs to.
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
