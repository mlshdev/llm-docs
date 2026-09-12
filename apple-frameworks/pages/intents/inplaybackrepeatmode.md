> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaybackrepeatmode](https://developer.apple.com/documentation/intents/inplaybackrepeatmode)

# INPlaybackRepeatMode (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The possible repeat modes at the time the user plays the media item.

## Declaration

```swift
enum INPlaybackRepeatMode
```

## Topics

### Repeat Modes

- [INPlaybackRepeatMode.unknown](inplaybackrepeatmode/unknown.md): Unknown repeat mode.
- [INPlaybackRepeatMode.none](inplaybackrepeatmode/none.md): A mode that doesn’t repeat media items.
- [INPlaybackRepeatMode.all](inplaybackrepeatmode/all.md): A mode that repeats all media items within a media container.
- [INPlaybackRepeatMode.one](inplaybackrepeatmode/one.md): A mode that repeats the current media item within a media container.

### Initializers

- [init(rawValue:)](inplaybackrepeatmode/init%28rawvalue_%29.md)

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
- [playbackSpeed](inplaymediaintent/playbackspeed-17r2t.md): The playback speed for a media item.
- [playbackQueueLocation](inplaymediaintent/playbackqueuelocation.md): The queue location for a media item during playback.
- [INPlaybackQueueLocation](inplaybackqueuelocation.md): Constants that describe the playback queue location for a media item.
- [mediaSearch](inplaymediaintent/mediasearch.md): An object that contains the search parameters.

# INPlaybackRepeatMode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The possible repeat modes at the time the user plays the media item.

## Declaration

```objectivec
enum INPlaybackRepeatMode : NSInteger;
```

## Topics

### Repeat Modes

- [INPlaybackRepeatModeUnknown](inplaybackrepeatmode/unknown.md): Unknown repeat mode.
- [INPlaybackRepeatModeNone](inplaybackrepeatmode/none.md): A mode that doesn’t repeat media items.
- [INPlaybackRepeatModeAll](inplaybackrepeatmode/all.md): A mode that repeats all media items within a media container.
- [INPlaybackRepeatModeOne](inplaybackrepeatmode/one.md): A mode that repeats the current media item within a media container.

## See Also

### Accessing Playback Settings

- [playShuffled](https://developer.apple.com/documentation/intents/inplaymediaintent/playshuffled-93hn1): A Boolean value that indicates whether the media plays in a shuffled order.
- [resumePlayback](https://developer.apple.com/documentation/intents/inplaymediaintent/resumeplayback-9zfyp): The resume playback setting at the time the user plays the media item.
- [playbackRepeatMode](inplaymediaintent/playbackrepeatmode.md): The repeat mode setting at the time the user plays the media item.
- [playbackSpeed](https://developer.apple.com/documentation/intents/inplaymediaintent/playbackspeed-6ngbq): The playback speed for a media item.
- [playbackQueueLocation](inplaymediaintent/playbackqueuelocation.md): The queue location for a media item during playback.
- [INPlaybackQueueLocation](inplaybackqueuelocation.md): Constants that describe the playback queue location for a media item.
- [mediaSearch](inplaymediaintent/mediasearch.md): An object that contains the search parameters.
