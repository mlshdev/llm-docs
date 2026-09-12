> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpplayablecontentdelegate](https://developer.apple.com/documentation/mediaplayer/mpplayablecontentdelegate)

# MPPlayableContentDelegate (Swift)

**Framework:** Media Player  
**Kind:** Protocol  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The protocol used to let external media players send playback commands to an app.

> Use CarPlay framework

## Declaration

```swift
protocol MPPlayableContentDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

After the media player determines that a media item should play, the app’s content delegate requests to initiate playback.

> **Important**

>  Some features of this protocol are specific to CarPlay, which requires a special entitlement issued by Apple. Apps without the correct entitlement won’t appear on the CarPlay home screen. See [http://www.apple.com/ios/carplay/](http://www.apple.com/ios/carplay/) for more information.

When creating your CarPlay app, keep the following in mind:

- Transition to the Now Playing screen only when content is ready to play. Due to buffering and network conditions, it may take several seconds for audio to begin playing after a user selects it. The user’s selection remains highlighted, and the system displays a spinning activity indicator until your app informs the system that the audio is ready to play.
- Start playback as soon as possible. Playback should begin as soon as audio has sufficiently loaded, even if descriptive information is still loading. Continue loading descriptive information in the background and show it once available.
- Avoid beginning playback automatically. Unless your app’s purpose is to play a single source of audio, it shouldn’t begin playback until the user initiates it.

## Topics

### Playing a specific media item

- [playableContentManager(\_:initiatePlaybackOfContentItemAt:completionHandler:)](mpplayablecontentdelegate/playablecontentmanager%28__initiateplaybackofcontentitemat_completionhandler_%29.md): Deprecated. Asks the delegate to begin playback of the specified content item.

### Suggesting content for playback

- [playableContentManager(\_:initializePlaybackQueueWithContentItems:completionHandler:)](mpplayablecontentdelegate/playablecontentmanager%28__initializeplaybackqueuewithcontentitems_completionhandler_%29.md): Deprecated. Asks the delegate to prepare suggested content for playback.
- [playableContentManager(\_:initializePlaybackQueueWithCompletionHandler:)](mpplayablecontentdelegate/playablecontentmanager%28__initializeplaybackqueuewithcompletionhandler_%29.md): Deprecated. Asks the delegate to prepare suggested content for playback.

### Responding to context changes

- [playableContentManager(\_:didUpdate:)](mpplayablecontentdelegate/playablecontentmanager%28__didupdate_%29.md): Deprecated. Notifies the delegate that the playable content manager’s context information has changed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to playback events

- [delegate](mpplayablecontentmanager/delegate.md): Deprecated. A delegate that lets the media player manage the app’s playback queue.

# MPPlayableContentDelegate (Objective-C)

**Framework:** Media Player  
**Kind:** Protocol  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The protocol used to let external media players send playback commands to an app.

> Use CarPlay framework

## Declaration

```objectivec
@protocol MPPlayableContentDelegate <NSObject>
```

<a id="overview"></a>

## Overview

After the media player determines that a media item should play, the app’s content delegate requests to initiate playback.

> **Important**

>  Some features of this protocol are specific to CarPlay, which requires a special entitlement issued by Apple. Apps without the correct entitlement won’t appear on the CarPlay home screen. See [http://www.apple.com/ios/carplay/](http://www.apple.com/ios/carplay/) for more information.

When creating your CarPlay app, keep the following in mind:

- Transition to the Now Playing screen only when content is ready to play. Due to buffering and network conditions, it may take several seconds for audio to begin playing after a user selects it. The user’s selection remains highlighted, and the system displays a spinning activity indicator until your app informs the system that the audio is ready to play.
- Start playback as soon as possible. Playback should begin as soon as audio has sufficiently loaded, even if descriptive information is still loading. Continue loading descriptive information in the background and show it once available.
- Avoid beginning playback automatically. Unless your app’s purpose is to play a single source of audio, it shouldn’t begin playback until the user initiates it.

## Topics

### Playing a specific media item

- [playableContentManager:initiatePlaybackOfContentItemAtIndexPath:completionHandler:](mpplayablecontentdelegate/playablecontentmanager%28__initiateplaybackofcontentitemat_completionhandler_%29.md): Deprecated. Asks the delegate to begin playback of the specified content item.

### Suggesting content for playback

- [playableContentManager:initializePlaybackQueueWithContentItems:completionHandler:](mpplayablecontentdelegate/playablecontentmanager%28__initializeplaybackqueuewithcontentitems_completionhandler_%29.md): Deprecated. Asks the delegate to prepare suggested content for playback.
- [playableContentManager:initializePlaybackQueueWithCompletionHandler:](mpplayablecontentdelegate/playablecontentmanager%28__initializeplaybackqueuewithcompletionhandler_%29.md): Deprecated. Asks the delegate to prepare suggested content for playback.

### Responding to context changes

- [playableContentManager:didUpdateContext:](mpplayablecontentdelegate/playablecontentmanager%28__didupdate_%29.md): Deprecated. Notifies the delegate that the playable content manager’s context information has changed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to playback events

- [delegate](mpplayablecontentmanager/delegate.md): Deprecated. A delegate that lets the media player manage the app’s playback queue.
