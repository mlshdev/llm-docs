> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaybackqueuelocation](https://developer.apple.com/documentation/intents/inplaybackqueuelocation)

# INPlaybackQueueLocation (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe the playback queue location for a media item.

## Declaration

```swift
enum INPlaybackQueueLocation
```

## Topics

### Constants

- [INPlaybackQueueLocation.unknown](inplaybackqueuelocation/unknown.md): A response that indicates the system doesn’t know where to place the media item.
- [INPlaybackQueueLocation.now](inplaybackqueuelocation/now.md): A response that tells the system to play the item immediately, interrupting any currently playing media.
- [INPlaybackQueueLocation.next](inplaybackqueuelocation/next.md): A response that tells the system to play the media item after the currently playing media item finishes.
- [INPlaybackQueueLocation.later](inplaybackqueuelocation/later.md): A response that tells the system to add the media item to the end of the playback queue.

### Initializers

- [init(rawValue:)](inplaybackqueuelocation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Playback Settings

- [playShuffled](inplaymediaintent/playshuffled-2btex.md): A Boolean value that indicates whether the media plays in a shuffled order.
- [resumePlayback](inplaymediaintent/resumeplayback-1xw6r.md): The resume playback setting at the time the user plays the media item.
- [playbackRepeatMode](inplaymediaintent/playbackrepeatmode.md): The repeat mode setting at the time the user plays the media item.
- [INPlaybackRepeatMode](inplaybackrepeatmode.md): The possible repeat modes at the time the user plays the media item.
- [playbackSpeed](inplaymediaintent/playbackspeed-17r2t.md): The playback speed for a media item.
- [playbackQueueLocation](inplaymediaintent/playbackqueuelocation.md): The queue location for a media item during playback.
- [mediaSearch](inplaymediaintent/mediasearch.md): An object that contains the search parameters.

# INPlaybackQueueLocation (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe the playback queue location for a media item.

## Declaration

```objectivec
enum INPlaybackQueueLocation : NSInteger;
```

## Topics

### Constants

- [INPlaybackQueueLocationUnknown](inplaybackqueuelocation/unknown.md): A response that indicates the system doesn’t know where to place the media item.
- [INPlaybackQueueLocationNow](inplaybackqueuelocation/now.md): A response that tells the system to play the item immediately, interrupting any currently playing media.
- [INPlaybackQueueLocationNext](inplaybackqueuelocation/next.md): A response that tells the system to play the media item after the currently playing media item finishes.
- [INPlaybackQueueLocationLater](inplaybackqueuelocation/later.md): A response that tells the system to add the media item to the end of the playback queue.

## See Also

### Accessing Playback Settings

- [playShuffled](https://developer.apple.com/documentation/intents/inplaymediaintent/playshuffled-93hn1): A Boolean value that indicates whether the media plays in a shuffled order.
- [resumePlayback](https://developer.apple.com/documentation/intents/inplaymediaintent/resumeplayback-9zfyp): The resume playback setting at the time the user plays the media item.
- [playbackRepeatMode](inplaymediaintent/playbackrepeatmode.md): The repeat mode setting at the time the user plays the media item.
- [INPlaybackRepeatMode](inplaybackrepeatmode.md): The possible repeat modes at the time the user plays the media item.
- [playbackSpeed](https://developer.apple.com/documentation/intents/inplaymediaintent/playbackspeed-6ngbq): The playback speed for a media item.
- [playbackQueueLocation](inplaymediaintent/playbackqueuelocation.md): The queue location for a media item during playback.
- [mediaSearch](inplaymediaintent/mediasearch.md): An object that contains the search parameters.
