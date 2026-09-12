> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaintent/init(mediaitems:mediacontainer:playshuffled:playbackrepeatmode:resumeplayback:playbackqueuelocation:playbackspeed:mediasearch:)](https://developer.apple.com/documentation/intents/inplaymediaintent/init(mediaitems:mediacontainer:playshuffled:playbackrepeatmode:resumeplayback:playbackqueuelocation:playbackspeed:mediasearch:))

# init(mediaItems:mediaContainer:playShuffled:playbackRepeatMode:resumePlayback:playbackQueueLocation:playbackSpeed:mediaSearch:)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 14.0+ · watchOS 6.0+

Creates an intent that describes media content such as a song, podcast episode, or movie.

## Declaration

```swift
@nonobjc convenience init(mediaItems: [INMediaItem]? = nil, mediaContainer: INMediaItem? = nil, playShuffled: Bool? = nil, playbackRepeatMode: INPlaybackRepeatMode = .unknown, resumePlayback: Bool? = nil, playbackQueueLocation: INPlaybackQueueLocation = .unknown, playbackSpeed: Double? = nil, mediaSearch: INMediaSearch? = nil)
```

## Parameters

- `mediaItems`: The media content, such as a song or episode of TV show, that the user is playing. When donating the intent, the system uses only the first item in the array, ignoring the other media items in the array.
- `mediaContainer`: The container of the media item. For example, when the user plays a song from the playlist, the playlist is the container. A television show with multiple episodes is another example. However, some media items, like movies, may have no container.
- `playShuffled`: A Boolean value that indicates whether the media plays in a shuffled order.
- `playbackRepeatMode`: The repeat mode setting at the time the user plays the media item.
- `resumePlayback`: The resume playback setting at the time the user plays the media item. Set to [true](https://developer.apple.com/documentation/swift/true) when the user hasn’t finished listening to or watching the media item.
- `playbackQueueLocation`: The location in the queue to play the media item.
- `playbackSpeed`: The speed to play the media item.
- `mediaSearch`: The search parameters for a media item.

<a id="Discussion"></a>

## Discussion

The [INPlayMediaIntent](../inplaymediaintent.md) object should include information about the media that accurately represents the content. For example, if the user plays a song from a particular album, include both pieces of information in the intent. Provide the song in `mediaItems` and the album in `mediaContainer`. If your app supports options for shuffle play, repeat modes, and resuming playback, include the current settings for those options when creating the intent.
