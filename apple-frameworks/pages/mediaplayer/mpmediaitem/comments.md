> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitem/comments](https://developer.apple.com/documentation/mediaplayer/mpmediaitem/comments)

# comments (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Textual information about the media item.

## Declaration

```swift
var comments: String? { get }
```

<a id="Discussion"></a>

## Discussion

The contents of this property correspond to the “Comments” field in the Info tab in the Get Info dialog in iTunes.

## See Also

### Media item properties

- [albumArtist](albumartist.md): The primary performing artist for an album.
- [albumArtistPersistentID](albumartistpersistentid.md): The persistent identifier for the primary performing artist for an album.
- [albumPersistentID](albumpersistentid.md): The persistent identifier for an album.
- [albumTitle](albumtitle.md): The title of an album, such as *Live on Mars*, rather than the title of an individual song on the album, such as “Crater Dance.”
- [albumTrackCount](albumtrackcount.md): The number of tracks for the album that contains the media item.
- [albumTrackNumber](albumtracknumber.md): The track number of the media item, for a media item that’s part of an album.
- [artist](artist.md): The performing artists for a media item, which may vary from the primary artist for the album that a media item belongs to.
- [artistPersistentID](artistpersistentid.md): The persistent identifier for an artist.
- [artwork](artwork.md): The artwork image for the media item.
- [assetURL](asseturl.md): The URL that points to the media item.
- [beatsPerMinute](beatsperminute.md): The number of musical beats per minute for the media item.
- [bookmarkTime](bookmarktime.md): The time of the user’s most recent interaction with the bookmark in the media item.
- [isCloudItem](isclouditem.md): A Boolean value that indicates whether the media item is an iCloud Music Library item.
- [isCompilation](iscompilation.md): A Boolean value that indicates whether the media item is part of a compilation.
- [isPreorder](ispreorder.md): A Boolean value that indicates whether the media item is a preorder.

# comments (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Textual information about the media item.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * comments;
```

<a id="Discussion"></a>

## Discussion

The contents of this property correspond to the “Comments” field in the Info tab in the Get Info dialog in iTunes.

## See Also

### Media item properties

- [albumArtist](albumartist.md): The primary performing artist for an album.
- [albumArtistPersistentID](albumartistpersistentid.md): The persistent identifier for the primary performing artist for an album.
- [albumPersistentID](albumpersistentid.md): The persistent identifier for an album.
- [albumTitle](albumtitle.md): The title of an album, such as *Live on Mars*, rather than the title of an individual song on the album, such as “Crater Dance.”
- [albumTrackCount](albumtrackcount.md): The number of tracks for the album that contains the media item.
- [albumTrackNumber](albumtracknumber.md): The track number of the media item, for a media item that’s part of an album.
- [artist](artist.md): The performing artists for a media item, which may vary from the primary artist for the album that a media item belongs to.
- [artistPersistentID](artistpersistentid.md): The persistent identifier for an artist.
- [artwork](artwork.md): The artwork image for the media item.
- [assetURL](asseturl.md): The URL that points to the media item.
- [beatsPerMinute](beatsperminute.md): The number of musical beats per minute for the media item.
- [bookmarkTime](bookmarktime.md): The time of the user’s most recent interaction with the bookmark in the media item.
- [cloudItem](isclouditem.md): A Boolean value that indicates whether the media item is an iCloud Music Library item.
- [compilation](iscompilation.md): A Boolean value that indicates whether the media item is part of a compilation.
- [preorder](ispreorder.md): A Boolean value that indicates whether the media item is a preorder.
