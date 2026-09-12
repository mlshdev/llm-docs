> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitem/isexplicititem](https://developer.apple.com/documentation/mediaplayer/mpmediaitem/isexplicititem)

# isExplicitItem (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the media item has explicit (adult) lyrics or language.

## Declaration

```swift
var isExplicitItem: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the media item contains explicit content.

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
- [comments](comments.md): Textual information about the media item.
- [isCompilation](iscompilation.md): A Boolean value that indicates whether the media item is part of a compilation.

# explicitItem (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the media item has explicit (adult) lyrics or language.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isExplicitItem) BOOL explicitItem;
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the media item contains explicit content.

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
- [comments](comments.md): Textual information about the media item.
- [compilation](iscompilation.md): A Boolean value that indicates whether the media item is part of a compilation.
