> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/pauseallmediaplayback(completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebview/pauseallmediaplayback(completionhandler:))

# pauseAllMediaPlayback(completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Pauses playback of all media in the web view.

## Declaration

```swift
func pauseAllMediaPlayback(completionHandler: (@MainActor @Sendable () -> Void)? = nil)
```

```swift
func pauseAllMediaPlayback() async
```

## Parameters

- `completionHandler`: A closure the system executes after the web view pauses media playback.

## See Also

### Interacting with media

- [requestMediaPlaybackState(completionHandler:)](requestmediaplaybackstate%28completionhandler_%29.md): Requests the playback status of media in the web view.
- [setAllMediaPlaybackSuspended(\_:completionHandler:)](setallmediaplaybacksuspended%28__completionhandler_%29.md): Changes whether the webpage is suspending playback of all media in the page.
- [closeAllMediaPresentations(completionHandler:)](closeallmediapresentations%28completionhandler_%29.md): Closes all media the web view is presenting, including picture-in-picture video and fullscreen video.
- [WKMediaPlaybackState](../wkmediaplaybackstate.md): An enumeration that describes whether an audio or video presentation is playing, paused, or suspended.

# pauseAllMediaPlaybackWithCompletionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Pauses playback of all media in the web view.

## Declaration

```objectivec
- (void) pauseAllMediaPlaybackWithCompletionHandler:(void (^)(void)) completionHandler;
```

## Parameters

- `completionHandler`: A closure the system executes after the web view pauses media playback.

## See Also

### Interacting with media

- [pauseAllMediaPlayback:](pauseallmediaplayback_.md): Deprecated. Pauses playback of all media in the web view.
- [requestMediaPlaybackStateWithCompletionHandler:](requestmediaplaybackstate%28completionhandler_%29.md): Requests the playback status of media in the web view.
- [requestMediaPlaybackState:](requestmediaplaybackstate_.md): Deprecated. Requests the playback status of media in the web view.
- [setAllMediaPlaybackSuspended:completionHandler:](setallmediaplaybacksuspended%28__completionhandler_%29.md): Changes whether the webpage is suspending playback of all media in the page.
- [suspendAllMediaPlayback:](suspendallmediaplayback_.md): Deprecated. Changes whether the webpage is suspending playback of all media in the page.
- [resumeAllMediaPlayback:](resumeallmediaplayback_.md): Deprecated. Resumes playback of all media in a web view.
- [closeAllMediaPresentationsWithCompletionHandler:](closeallmediapresentations%28completionhandler_%29.md): Closes all media the web view is presenting, including picture-in-picture video and fullscreen video.
- [WKMediaPlaybackState](../wkmediaplaybackstate.md): An enumeration that describes whether an audio or video presentation is playing, paused, or suspended.
