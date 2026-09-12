> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaintenthandling](https://developer.apple.com/documentation/intents/inplaymediaintenthandling)

# INPlayMediaIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The interface an object implements to confirm and handle play media intents.

## Declaration

```swift
protocol INPlayMediaIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INPlayMediaIntentHandling](inplaymediaintenthandling.md) protocol to confirm and handle requests for media playback in your app. Adopt this protocol in an object of your Intents app extension capable of verifying that the media is playable in your app. When handling the playback request, send the request to your app and let your app perform the playback, rather than playing the media in the extension. The lifespan of extensions is too short for media playback.

Siri delivers an [INPlayMediaIntent](inplaymediaintent.md) object to your handler when the user invokes the media intent shortcut. This intent object contains metadata that identifies the requested media content.

## Topics

### Resolving the Intent Parameters

- [resolveMediaItems(for:with:)](inplaymediaintenthandling/resolvemediaitems%28for_with_%29.md): Resolves the media items to play.
- [resolvePlayShuffled(for:with:)](inplaymediaintenthandling/resolveplayshuffled%28for_with_%29.md): Resolves whether to shuffle the played media.
- [resolvePlaybackQueueLocation(for:with:)](inplaymediaintenthandling/resolveplaybackqueuelocation%28for_with_%29.md): Resolves the location in the playback queue where your app plays the media.
- [resolvePlaybackRepeatMode(for:with:)](inplaymediaintenthandling/resolveplaybackrepeatmode%28for_with_%29.md): Resolves the repeat mode when playing media.
- [resolvePlaybackSpeed(for:with:)](inplaymediaintenthandling/resolveplaybackspeed%28for_with_%29.md): Resolves the playback speed when playing media.
- [resolveResumePlayback(for:with:)](inplaymediaintenthandling/resolveresumeplayback%28for_with_%29.md): Resolves whether to resume playback.

### Confirming the Intent

- [confirm(intent:completion:)](inplaymediaintenthandling/confirm%28intent_completion_%29.md): Confirms the details of the media playback request.

### Handling the Intent

- [handle(intent:completion:)](inplaymediaintenthandling/handle%28intent_completion_%29.md): Handles the media playback request.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Playable Media Intents

- [INPlayMediaIntent](inplaymediaintent.md): An intent that contains information about media playable from your app.
- [INPlayMediaIntentResponse](inplaymediaintentresponse.md): An intents handler’s response to a play media intent.

# INPlayMediaIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The interface an object implements to confirm and handle play media intents.

## Declaration

```objectivec
@protocol INPlayMediaIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INPlayMediaIntentHandling](inplaymediaintenthandling.md) protocol to confirm and handle requests for media playback in your app. Adopt this protocol in an object of your Intents app extension capable of verifying that the media is playable in your app. When handling the playback request, send the request to your app and let your app perform the playback, rather than playing the media in the extension. The lifespan of extensions is too short for media playback.

Siri delivers an [INPlayMediaIntent](inplaymediaintent.md) object to your handler when the user invokes the media intent shortcut. This intent object contains metadata that identifies the requested media content.

## Topics

### Resolving the Intent Parameters

- [resolveMediaItemsForPlayMedia:withCompletion:](inplaymediaintenthandling/resolvemediaitems%28for_with_%29.md): Resolves the media items to play.
- [resolvePlayShuffledForPlayMedia:withCompletion:](inplaymediaintenthandling/resolveplayshuffled%28for_with_%29.md): Resolves whether to shuffle the played media.
- [resolvePlaybackQueueLocationForPlayMedia:withCompletion:](inplaymediaintenthandling/resolveplaybackqueuelocation%28for_with_%29.md): Resolves the location in the playback queue where your app plays the media.
- [resolvePlaybackRepeatModeForPlayMedia:withCompletion:](inplaymediaintenthandling/resolveplaybackrepeatmode%28for_with_%29.md): Resolves the repeat mode when playing media.
- [resolvePlaybackSpeedForPlayMedia:withCompletion:](inplaymediaintenthandling/resolveplaybackspeed%28for_with_%29.md): Resolves the playback speed when playing media.
- [resolveResumePlaybackForPlayMedia:withCompletion:](inplaymediaintenthandling/resolveresumeplayback%28for_with_%29.md): Resolves whether to resume playback.

### Confirming the Intent

- [confirmPlayMedia:completion:](inplaymediaintenthandling/confirm%28intent_completion_%29.md): Confirms the details of the media playback request.

### Handling the Intent

- [handlePlayMedia:completion:](inplaymediaintenthandling/handle%28intent_completion_%29.md): Handles the media playback request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Playable Media Intents

- [INPlayMediaIntent](inplaymediaintent.md): An intent that contains information about media playable from your app.
- [INPlayMediaIntentResponse](inplaymediaintentresponse.md): An intents handler’s response to a play media intent.
