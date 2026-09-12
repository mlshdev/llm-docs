> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaintent](https://developer.apple.com/documentation/intents/inplaymediaintent)

# INPlayMediaIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

An intent that contains information about media playable from your app.

## Declaration

```swift
class INPlayMediaIntent
```

## Mentioned In

- [Improving Siri Media Interactions and App Selection](../sirikit/improving-siri-media-interactions-and-app-selection.md)
- [Creating an Intents App Extension](../sirikit/creating-an-intents-app-extension.md)

<a id="overview"></a>

## Overview

Use [INPlayMediaIntent](inplaymediaintent.md) to donate songs, movies, and other media the user plays in your app, or to recommend upcoming media, such as new TV shows or podcast episodes. The system uses these donations to offer the user relevant search results and suggestions.

[INPlayMediaIntent](inplaymediaintent.md) supports playing audio in the background. See `Enabling Background Audio` for more information about supporting background audio in your app.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents (audio only) |
| Always requires unlocked device | No |

## Topics

### Creating a Play Media Intent

- [init(mediaItems:mediaContainer:playShuffled:playbackRepeatMode:resumePlayback:playbackQueueLocation:playbackSpeed:mediaSearch:)](inplaymediaintent/init%28mediaitems_mediacontainer_playshuffled_playbackrepeatmode_resumeplayback_playbackqueuelocation_playbackspeed_mediasearch_%29.md): Creates an intent that describes media content such as a song, podcast episode, or movie.

### Accessing Media Items

- [mediaContainer](inplaymediaintent/mediacontainer.md): The media item container.
- [mediaItems](inplaymediaintent/mediaitems.md): The media content.

### Accessing Playback Settings

- [playShuffled](inplaymediaintent/playshuffled-2btex.md): A Boolean value that indicates whether the media plays in a shuffled order.
- [resumePlayback](inplaymediaintent/resumeplayback-1xw6r.md): The resume playback setting at the time the user plays the media item.
- [playbackRepeatMode](inplaymediaintent/playbackrepeatmode.md): The repeat mode setting at the time the user plays the media item.
- [INPlaybackRepeatMode](inplaybackrepeatmode.md): The possible repeat modes at the time the user plays the media item.
- [playbackSpeed](inplaymediaintent/playbackspeed-17r2t.md): The playback speed for a media item.
- [playbackQueueLocation](inplaymediaintent/playbackqueuelocation.md): The queue location for a media item during playback.
- [INPlaybackQueueLocation](inplaybackqueuelocation.md): Constants that describe the playback queue location for a media item.
- [mediaSearch](inplaymediaintent/mediasearch.md): An object that contains the search parameters.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Playable Media Intents

- [INPlayMediaIntentHandling](inplaymediaintenthandling.md): The interface an object implements to confirm and handle play media intents.
- [INPlayMediaIntentResponse](inplaymediaintentresponse.md): An intents handler’s response to a play media intent.

# INPlayMediaIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

An intent that contains information about media playable from your app.

## Declaration

```objectivec
@interface INPlayMediaIntent : INIntent
```

## Mentioned In

- [Improving Siri Media Interactions and App Selection](../sirikit/improving-siri-media-interactions-and-app-selection.md)
- [Creating an Intents App Extension](../sirikit/creating-an-intents-app-extension.md)

<a id="overview"></a>

## Overview

Use [INPlayMediaIntent](inplaymediaintent.md) to donate songs, movies, and other media the user plays in your app, or to recommend upcoming media, such as new TV shows or podcast episodes. The system uses these donations to offer the user relevant search results and suggestions.

[INPlayMediaIntent](inplaymediaintent.md) supports playing audio in the background. See `Enabling Background Audio` for more information about supporting background audio in your app.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents (audio only) |
| Always requires unlocked device | No |

## Topics

### Creating a Play Media Intent

- [initWithMediaItems:mediaContainer:playShuffled:playbackRepeatMode:resumePlayback:playbackQueueLocation:playbackSpeed:mediaSearch:](https://developer.apple.com/documentation/intents/inplaymediaintent/initwithmediaitems:mediacontainer:playshuffled:playbackrepeatmode:resumeplayback:playbackqueuelocation:playbackspeed:mediasearch:): Initialize an intent that describes media content such as a song, podcast episode, or movie.
- [initWithMediaItems:mediaContainer:playShuffled:playbackRepeatMode:resumePlayback:](https://developer.apple.com/documentation/intents/inplaymediaintent/initwithmediaitems:mediacontainer:playshuffled:playbackrepeatmode:resumeplayback:): Deprecated. Initializes an intent that describes media content such as a song, podcast episode, or movie.

### Accessing Media Items

- [mediaContainer](inplaymediaintent/mediacontainer.md): The media item container.
- [mediaItems](inplaymediaintent/mediaitems.md): The media content.

### Accessing Playback Settings

- [playShuffled](https://developer.apple.com/documentation/intents/inplaymediaintent/playshuffled-93hn1): A Boolean value that indicates whether the media plays in a shuffled order.
- [resumePlayback](https://developer.apple.com/documentation/intents/inplaymediaintent/resumeplayback-9zfyp): The resume playback setting at the time the user plays the media item.
- [playbackRepeatMode](inplaymediaintent/playbackrepeatmode.md): The repeat mode setting at the time the user plays the media item.
- [INPlaybackRepeatMode](inplaybackrepeatmode.md): The possible repeat modes at the time the user plays the media item.
- [playbackSpeed](https://developer.apple.com/documentation/intents/inplaymediaintent/playbackspeed-6ngbq): The playback speed for a media item.
- [playbackQueueLocation](inplaymediaintent/playbackqueuelocation.md): The queue location for a media item during playback.
- [INPlaybackQueueLocation](inplaybackqueuelocation.md): Constants that describe the playback queue location for a media item.
- [mediaSearch](inplaymediaintent/mediasearch.md): An object that contains the search parameters.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Playable Media Intents

- [INPlayMediaIntentHandling](inplaymediaintenthandling.md): The interface an object implements to confirm and handle play media intents.
- [INPlayMediaIntentResponse](inplaymediaintentresponse.md): An intents handler’s response to a play media intent.
