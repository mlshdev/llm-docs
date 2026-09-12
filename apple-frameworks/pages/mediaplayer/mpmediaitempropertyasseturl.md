> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitempropertyasseturl](https://developer.apple.com/documentation/mediaplayer/mpmediaitempropertyasseturl)

# MPMediaItemPropertyAssetURL (Swift)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

A URL that points to the media item.

## Declaration

```swift
let MPMediaItemPropertyAssetURL: String
```

<a id="Discussion"></a>

## Discussion

This value is an [NSURL](../foundation/nsurl.md) object. The URL has the custom scheme of `ipod-library`. For example, a URL might look like this:

**Swift**

```swift
ipod-library://item/item.m4a?id=12345
```

**Objective-C**

```objc
ipod-library://item/item.m4a?id=12345
```

## See Also

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
- [MPMediaItemPropertyIsExplicit](mpmediaitempropertyisexplicit.md): A Boolean value that indicates whether the media item contains explicit (adult) lyrics or language.
- [MPMediaItemPropertyIsPreorder](mpmediaitempropertyispreorder.md): A Boolean value that indicates whether the media item is a preorder.
- [MPMediaItemPropertyPlaybackStoreID](mpmediaitempropertyplaybackstoreid.md): The identifier for enqueueing store tracks.

# MPMediaItemPropertyAssetURL (Objective-C)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

A URL that points to the media item.

## Declaration

```objectivec
extern NSString * const MPMediaItemPropertyAssetURL;
```

<a id="Discussion"></a>

## Discussion

This value is an [NSURL](../foundation/nsurl.md) object. The URL has the custom scheme of `ipod-library`. For example, a URL might look like this:

**Swift**

```swift
ipod-library://item/item.m4a?id=12345
```

**Objective-C**

```objc
ipod-library://item/item.m4a?id=12345
```

## See Also

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
- [MPMediaItemPropertyIsExplicit](mpmediaitempropertyisexplicit.md): A Boolean value that indicates whether the media item contains explicit (adult) lyrics or language.
- [MPMediaItemPropertyIsPreorder](mpmediaitempropertyispreorder.md): A Boolean value that indicates whether the media item is a preorder.
- [MPMediaItemPropertyPlaybackStoreID](mpmediaitempropertyplaybackstoreid.md): The identifier for enqueueing store tracks.
