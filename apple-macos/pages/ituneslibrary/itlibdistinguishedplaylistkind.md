> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibdistinguishedplaylistkind](https://developer.apple.com/documentation/ituneslibrary/itlibdistinguishedplaylistkind)

# ITLibDistinguishedPlaylistKind (Swift)

**Framework:** iTunes Library  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

These constants specify the possible kinds of distinguished playlists.

## Declaration

```swift
enum ITLibDistinguishedPlaylistKind
```

## Topics

### Distinguished Playlist Kinds

- [ITLibDistinguishedPlaylistKind.kindNone](itlibdistinguishedplaylistkind/kindnone.md): The playlist isn’t a distinguished playlist.
- [ITLibDistinguishedPlaylistKind.kindMovies](itlibdistinguishedplaylistkind/kindmovies.md): The playlist contains all the movies in the iTunes library.
- [ITLibDistinguishedPlaylistKind.kindTVShows](itlibdistinguishedplaylistkind/kindtvshows.md): The playlist contains all the TV shows in the iTunes library.
- [ITLibDistinguishedPlaylistKind.kindMusic](itlibdistinguishedplaylistkind/kindmusic.md): The playlist contains all the music items in the iTunes library.
- [ITLibDistinguishedPlaylistKind.kindAudiobooks](itlibdistinguishedplaylistkind/kindaudiobooks.md): The playlist contains all the audiobooks in the iTunes library.
- [kindBooks](itlibdistinguishedplaylistkind/kindbooks.md): The playlist contains all the audiobooks in the iTunes library.
- [ITLibDistinguishedPlaylistKind.kindRingtones](itlibdistinguishedplaylistkind/kindringtones.md): The playlist contains all the iOS ringtones in the iTunes library.
- [ITLibDistinguishedPlaylistKind.kindPodcasts](itlibdistinguishedplaylistkind/kindpodcasts.md): The playlist contains all the podcasts in the iTunes library.
- [ITLibDistinguishedPlaylistKind.kindVoiceMemos](itlibdistinguishedplaylistkind/kindvoicememos.md): The playlist contains all the voice memos in the iTunes library.
- [ITLibDistinguishedPlaylistKind.kindPurchases](itlibdistinguishedplaylistkind/kindpurchases.md): The playlist contains all the user’s purchases from the iTunes Store.
- [ITLibDistinguishedPlaylistKind.kindiTunesU](itlibdistinguishedplaylistkind/kinditunesu.md): The playlist contains all the user’s iTunes U items.
- [ITLibDistinguishedPlaylistKind.kind90sMusic](itlibdistinguishedplaylistkind/kind90smusic.md): The default Smart Playlist that iTunes creates of the user’s music from the 1990s.
- [ITLibDistinguishedPlaylistKind.kindMyTopRated](itlibdistinguishedplaylistkind/kindmytoprated.md): The default Smart Playlist that iTunes creates of the user’s top rated media items.
- [ITLibDistinguishedPlaylistKind.kindTop25MostPlayed](itlibdistinguishedplaylistkind/kindtop25mostplayed.md): The default Smart Playlist that iTunes creates of the user’s 25 most played media items.
- [ITLibDistinguishedPlaylistKind.kindRecentlyPlayed](itlibdistinguishedplaylistkind/kindrecentlyplayed.md): The default Smart Playlist that iTunes creates of the user’s most recently played media items.
- [ITLibDistinguishedPlaylistKind.kindRecentlyAdded](itlibdistinguishedplaylistkind/kindrecentlyadded.md): The default Smart Playlist that iTunes creates of the user’s most recently added media items.
- [ITLibDistinguishedPlaylistKind.kindMusicVideos](itlibdistinguishedplaylistkind/kindmusicvideos.md): The default Smart Playlist that iTunes creates of the user’s music videos.
- [ITLibDistinguishedPlaylistKind.kindClassicalMusic](itlibdistinguishedplaylistkind/kindclassicalmusic.md): The default Smart Playlist that iTunes creates of the user’s classical music.
- [ITLibDistinguishedPlaylistKind.kindLibraryMusicVideos](itlibdistinguishedplaylistkind/kindlibrarymusicvideos.md): The playlist contains all the music videos in the iTunes library.
- [ITLibDistinguishedPlaylistKind.kindHomeVideos](itlibdistinguishedplaylistkind/kindhomevideos.md): The playlist contains all the user’s home videos in the iTunes library.
- [ITLibDistinguishedPlaylistKind.kindApplications](itlibdistinguishedplaylistkind/kindapplications.md): The playlist contains all the user’s iOS apps in the iTunes library.
- [ITLibDistinguishedPlaylistKind.kindLovedSongs](itlibdistinguishedplaylistkind/kindlovedsongs.md): The playlist contains all the user’s loved music.
- [ITLibDistinguishedPlaylistKind.kindMusicShowsAndMovies](itlibdistinguishedplaylistkind/kindmusicshowsandmovies.md): The default Smart Playlist that iTunes creates of the user’s music shows and movies.

### Initializers

- [init(rawValue:)](itlibdistinguishedplaylistkind/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Playlist Info

- [name](itlibplaylist/name.md): The name or title of the playlist.
- [items](itlibplaylist/items.md): The media items (tracks) in the playlist.
- [parentID](itlibplaylist/parentid.md): The unique persistent identifier of the playlist’s parent playlist.
- [isPrimary](itlibplaylist/isprimary.md): A Boolean value that indicates whether the playlist is the primary playlist.
- [isVisible](itlibplaylist/isvisible.md): A Boolean value that indicates whether the playlist is visible to the user in iTunes.
- [distinguishedKind](itlibplaylist/distinguishedkind.md): An indication of whether the playlist has a special distinction.
- [kind](itlibplaylist/kind.md): An indication of the type of playlist.
- [ITLibPlaylistKind](itlibplaylistkind.md): These constants specify the possible kinds of playlists.

# ITLibDistinguishedPlaylistKind (Objective-C)

**Framework:** iTunes Library  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

These constants specify the possible kinds of distinguished playlists.

## Declaration

```objectivec
enum ITLibDistinguishedPlaylistKind : NSUInteger;
```

## Topics

### Distinguished Playlist Kinds

- [ITLibDistinguishedPlaylistKindNone](itlibdistinguishedplaylistkind/kindnone.md): The playlist isn’t a distinguished playlist.
- [ITLibDistinguishedPlaylistKindMovies](itlibdistinguishedplaylistkind/kindmovies.md): The playlist contains all the movies in the iTunes library.
- [ITLibDistinguishedPlaylistKindTVShows](itlibdistinguishedplaylistkind/kindtvshows.md): The playlist contains all the TV shows in the iTunes library.
- [ITLibDistinguishedPlaylistKindMusic](itlibdistinguishedplaylistkind/kindmusic.md): The playlist contains all the music items in the iTunes library.
- [ITLibDistinguishedPlaylistKindAudiobooks](itlibdistinguishedplaylistkind/kindaudiobooks.md): The playlist contains all the audiobooks in the iTunes library.
- [ITLibDistinguishedPlaylistKindBooks](itlibdistinguishedplaylistkind/kindbooks.md): The playlist contains all the audiobooks in the iTunes library.
- [ITLibDistinguishedPlaylistKindRingtones](itlibdistinguishedplaylistkind/kindringtones.md): The playlist contains all the iOS ringtones in the iTunes library.
- [ITLibDistinguishedPlaylistKindPodcasts](itlibdistinguishedplaylistkind/kindpodcasts.md): The playlist contains all the podcasts in the iTunes library.
- [ITLibDistinguishedPlaylistKindVoiceMemos](itlibdistinguishedplaylistkind/kindvoicememos.md): The playlist contains all the voice memos in the iTunes library.
- [ITLibDistinguishedPlaylistKindPurchases](itlibdistinguishedplaylistkind/kindpurchases.md): The playlist contains all the user’s purchases from the iTunes Store.
- [ITLibDistinguishedPlaylistKindiTunesU](itlibdistinguishedplaylistkind/kinditunesu.md): The playlist contains all the user’s iTunes U items.
- [ITLibDistinguishedPlaylistKind90sMusic](itlibdistinguishedplaylistkind/kind90smusic.md): The default Smart Playlist that iTunes creates of the user’s music from the 1990s.
- [ITLibDistinguishedPlaylistKindMyTopRated](itlibdistinguishedplaylistkind/kindmytoprated.md): The default Smart Playlist that iTunes creates of the user’s top rated media items.
- [ITLibDistinguishedPlaylistKindTop25MostPlayed](itlibdistinguishedplaylistkind/kindtop25mostplayed.md): The default Smart Playlist that iTunes creates of the user’s 25 most played media items.
- [ITLibDistinguishedPlaylistKindRecentlyPlayed](itlibdistinguishedplaylistkind/kindrecentlyplayed.md): The default Smart Playlist that iTunes creates of the user’s most recently played media items.
- [ITLibDistinguishedPlaylistKindRecentlyAdded](itlibdistinguishedplaylistkind/kindrecentlyadded.md): The default Smart Playlist that iTunes creates of the user’s most recently added media items.
- [ITLibDistinguishedPlaylistKindMusicVideos](itlibdistinguishedplaylistkind/kindmusicvideos.md): The default Smart Playlist that iTunes creates of the user’s music videos.
- [ITLibDistinguishedPlaylistKindClassicalMusic](itlibdistinguishedplaylistkind/kindclassicalmusic.md): The default Smart Playlist that iTunes creates of the user’s classical music.
- [ITLibDistinguishedPlaylistKindLibraryMusicVideos](itlibdistinguishedplaylistkind/kindlibrarymusicvideos.md): The playlist contains all the music videos in the iTunes library.
- [ITLibDistinguishedPlaylistKindHomeVideos](itlibdistinguishedplaylistkind/kindhomevideos.md): The playlist contains all the user’s home videos in the iTunes library.
- [ITLibDistinguishedPlaylistKindApplications](itlibdistinguishedplaylistkind/kindapplications.md): The playlist contains all the user’s iOS apps in the iTunes library.
- [ITLibDistinguishedPlaylistKindLovedSongs](itlibdistinguishedplaylistkind/kindlovedsongs.md): The playlist contains all the user’s loved music.
- [ITLibDistinguishedPlaylistKindMusicShowsAndMovies](itlibdistinguishedplaylistkind/kindmusicshowsandmovies.md): The default Smart Playlist that iTunes creates of the user’s music shows and movies.

## See Also

### Getting Playlist Info

- [name](itlibplaylist/name.md): The name or title of the playlist.
- [items](itlibplaylist/items.md): The media items (tracks) in the playlist.
- [parentID](itlibplaylist/parentid.md): The unique persistent identifier of the playlist’s parent playlist.
- [primary](itlibplaylist/isprimary.md): A Boolean value that indicates whether the playlist is the primary playlist.
- [visible](itlibplaylist/isvisible.md): A Boolean value that indicates whether the playlist is visible to the user in iTunes.
- [distinguishedKind](itlibplaylist/distinguishedkind.md): An indication of whether the playlist has a special distinction.
- [kind](itlibplaylist/kind.md): An indication of the type of playlist.
- [ITLibPlaylistKind](itlibplaylistkind.md): These constants specify the possible kinds of playlists.
