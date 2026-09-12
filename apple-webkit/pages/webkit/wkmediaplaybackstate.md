> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkmediaplaybackstate](https://developer.apple.com/documentation/webkit/wkmediaplaybackstate)

# WKMediaPlaybackState (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

An enumeration that describes whether an audio or video presentation is playing, paused, or suspended.

## Declaration

```swift
enum WKMediaPlaybackState
```

## Topics

### Constants

- [WKMediaPlaybackState.none](wkmediaplaybackstate/none.md): There is no media to play back.
- [WKMediaPlaybackState.paused](wkmediaplaybackstate/paused.md): The media playback is paused.
- [WKMediaPlaybackState.playing](wkmediaplaybackstate/playing.md): The media is playing.
- [WKMediaPlaybackState.suspended](wkmediaplaybackstate/suspended.md): The media is not playing, and cannot be resumed until the user revokes the suspension.

### Initializers

- [init(rawValue:)](wkmediaplaybackstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interacting with media

- [pauseAllMediaPlayback(completionHandler:)](wkwebview/pauseallmediaplayback%28completionhandler_%29.md): Pauses playback of all media in the web view.
- [requestMediaPlaybackState(completionHandler:)](wkwebview/requestmediaplaybackstate%28completionhandler_%29.md): Requests the playback status of media in the web view.
- [setAllMediaPlaybackSuspended(\_:completionHandler:)](wkwebview/setallmediaplaybacksuspended%28__completionhandler_%29.md): Changes whether the webpage is suspending playback of all media in the page.
- [closeAllMediaPresentations(completionHandler:)](wkwebview/closeallmediapresentations%28completionhandler_%29.md): Closes all media the web view is presenting, including picture-in-picture video and fullscreen video.

# WKMediaPlaybackState (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

An enumeration that describes whether an audio or video presentation is playing, paused, or suspended.

## Declaration

```objectivec
enum WKMediaPlaybackState : NSInteger;
```

## Topics

### Constants

- [WKMediaPlaybackStateNone](wkmediaplaybackstate/none.md): There is no media to play back.
- [WKMediaPlaybackStatePaused](wkmediaplaybackstate/paused.md): The media playback is paused.
- [WKMediaPlaybackStatePlaying](wkmediaplaybackstate/playing.md): The media is playing.
- [WKMediaPlaybackStateSuspended](wkmediaplaybackstate/suspended.md): The media is not playing, and cannot be resumed until the user revokes the suspension.

## See Also

### Interacting with media

- [pauseAllMediaPlaybackWithCompletionHandler:](wkwebview/pauseallmediaplayback%28completionhandler_%29.md): Pauses playback of all media in the web view.
- [pauseAllMediaPlayback:](wkwebview/pauseallmediaplayback_.md): Deprecated. Pauses playback of all media in the web view.
- [requestMediaPlaybackStateWithCompletionHandler:](wkwebview/requestmediaplaybackstate%28completionhandler_%29.md): Requests the playback status of media in the web view.
- [requestMediaPlaybackState:](wkwebview/requestmediaplaybackstate_.md): Deprecated. Requests the playback status of media in the web view.
- [setAllMediaPlaybackSuspended:completionHandler:](wkwebview/setallmediaplaybacksuspended%28__completionhandler_%29.md): Changes whether the webpage is suspending playback of all media in the page.
- [suspendAllMediaPlayback:](wkwebview/suspendallmediaplayback_.md): Deprecated. Changes whether the webpage is suspending playback of all media in the page.
- [resumeAllMediaPlayback:](wkwebview/resumeallmediaplayback_.md): Deprecated. Resumes playback of all media in a web view.
- [closeAllMediaPresentationsWithCompletionHandler:](wkwebview/closeallmediapresentations%28completionhandler_%29.md): Closes all media the web view is presenting, including picture-in-picture video and fullscreen video.
