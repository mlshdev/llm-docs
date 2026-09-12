> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaintent/mediasearch](https://developer.apple.com/documentation/intents/inplaymediaintent/mediasearch)

# mediaSearch (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that contains the search parameters.

## Declaration

```swift
@NSCopying var mediaSearch: INMediaSearch? { get }
```

## See Also

### Accessing Playback Settings

- [playShuffled](playshuffled-2btex.md): A Boolean value that indicates whether the media plays in a shuffled order.
- [resumePlayback](resumeplayback-1xw6r.md): The resume playback setting at the time the user plays the media item.
- [playbackRepeatMode](playbackrepeatmode.md): The repeat mode setting at the time the user plays the media item.
- [INPlaybackRepeatMode](../inplaybackrepeatmode.md): The possible repeat modes at the time the user plays the media item.
- [playbackSpeed](playbackspeed-17r2t.md): The playback speed for a media item.
- [playbackQueueLocation](playbackqueuelocation.md): The queue location for a media item during playback.
- [INPlaybackQueueLocation](../inplaybackqueuelocation.md): Constants that describe the playback queue location for a media item.

# mediaSearch (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An object that contains the search parameters.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INMediaSearch * mediaSearch;
```

```objectivec
@property (atomic, copy, readonly, nullable) INMediaSearch * mediaSearch;
```

## See Also

### Accessing Playback Settings

- [playShuffled](https://developer.apple.com/documentation/intents/inplaymediaintent/playshuffled-93hn1): A Boolean value that indicates whether the media plays in a shuffled order.
- [resumePlayback](https://developer.apple.com/documentation/intents/inplaymediaintent/resumeplayback-9zfyp): The resume playback setting at the time the user plays the media item.
- [playbackRepeatMode](playbackrepeatmode.md): The repeat mode setting at the time the user plays the media item.
- [INPlaybackRepeatMode](../inplaybackrepeatmode.md): The possible repeat modes at the time the user plays the media item.
- [playbackSpeed](https://developer.apple.com/documentation/intents/inplaymediaintent/playbackspeed-6ngbq): The playback speed for a media item.
- [playbackQueueLocation](playbackqueuelocation.md): The queue location for a media item during playback.
- [INPlaybackQueueLocation](../inplaybackqueuelocation.md): Constants that describe the playback queue location for a media item.
