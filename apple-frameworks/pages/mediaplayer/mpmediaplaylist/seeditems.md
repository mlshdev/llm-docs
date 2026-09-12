> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplaylist/seeditems](https://developer.apple.com/documentation/mediaplayer/mpmediaplaylist/seeditems)

# seedItems (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The items seeded to generate the playlist; applies only to Genius playlists.

## Declaration

```swift
var seedItems: [MPMediaItem]? { get }
```

## See Also

### Retrieving information about a playlist

- [authorDisplayName](authordisplayname.md): The display name for the playlist defined in the app.
- [descriptionText](descriptiontext.md): User supplied text that describes the playlist.
- [name](name.md): The name of the playlist.
- [persistentID](persistentid.md): The persistent identifier for the playlist.
- [cloudGlobalID](cloudglobalid.md): The cloud identifier for the playlist.
- [playlistAttributes](playlistattributes.md): The attributes associated with the playlist.
- [MPMediaPlaylistAttribute](../mpmediaplaylistattribute.md): Attributes define the type of playlist.

# seedItems (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The items seeded to generate the playlist; applies only to Genius playlists.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<MPMediaItem *> * seedItems;
```

## See Also

### Retrieving information about a playlist

- [authorDisplayName](authordisplayname.md): The display name for the playlist defined in the app.
- [descriptionText](descriptiontext.md): User supplied text that describes the playlist.
- [name](name.md): The name of the playlist.
- [persistentID](persistentid.md): The persistent identifier for the playlist.
- [cloudGlobalID](cloudglobalid.md): The cloud identifier for the playlist.
- [playlistAttributes](playlistattributes.md): The attributes associated with the playlist.
- [MPMediaPlaylistAttribute](../mpmediaplaylistattribute.md): Attributes define the type of playlist.
