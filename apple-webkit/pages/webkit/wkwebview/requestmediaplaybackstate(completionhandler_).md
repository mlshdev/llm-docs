> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/requestmediaplaybackstate(completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebview/requestmediaplaybackstate(completionhandler:))

# requestMediaPlaybackState(completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Requests the playback status of media in the web view.

## Declaration

```swift
func requestMediaPlaybackState(completionHandler: @escaping @MainActor @Sendable (WKMediaPlaybackState) -> Void)
```

```swift
func requestMediaPlaybackState() async -> WKMediaPlaybackState
```

## Parameters

- `completionHandler`: A closure the system executes after the web view determines the current state of media playback.

## See Also

### Interacting with media

- [pauseAllMediaPlayback(completionHandler:)](pauseallmediaplayback%28completionhandler_%29.md): Pauses playback of all media in the web view.
- [setAllMediaPlaybackSuspended(\_:completionHandler:)](setallmediaplaybacksuspended%28__completionhandler_%29.md): Changes whether the webpage is suspending playback of all media in the page.
- [closeAllMediaPresentations(completionHandler:)](closeallmediapresentations%28completionhandler_%29.md): Closes all media the web view is presenting, including picture-in-picture video and fullscreen video.
- [WKMediaPlaybackState](../wkmediaplaybackstate.md): An enumeration that describes whether an audio or video presentation is playing, paused, or suspended.

# requestMediaPlaybackStateWithCompletionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Requests the playback status of media in the web view.

## Declaration

```objectivec
- (void) requestMediaPlaybackStateWithCompletionHandler:(void (^)(enum WKMediaPlaybackState)) completionHandler;
```

## Parameters

- `completionHandler`: A closure the system executes after the web view determines the current state of media playback.

## See Also

### Interacting with media

- [pauseAllMediaPlaybackWithCompletionHandler:](pauseallmediaplayback%28completionhandler_%29.md): Pauses playback of all media in the web view.
- [pauseAllMediaPlayback:](pauseallmediaplayback_.md): Deprecated. Pauses playback of all media in the web view.
- [requestMediaPlaybackState:](requestmediaplaybackstate_.md): Deprecated. Requests the playback status of media in the web view.
- [setAllMediaPlaybackSuspended:completionHandler:](setallmediaplaybacksuspended%28__completionhandler_%29.md): Changes whether the webpage is suspending playback of all media in the page.
- [suspendAllMediaPlayback:](suspendallmediaplayback_.md): Deprecated. Changes whether the webpage is suspending playback of all media in the page.
- [resumeAllMediaPlayback:](resumeallmediaplayback_.md): Deprecated. Resumes playback of all media in a web view.
- [closeAllMediaPresentationsWithCompletionHandler:](closeallmediapresentations%28completionhandler_%29.md): Closes all media the web view is presenting, including picture-in-picture video and fullscreen video.
- [WKMediaPlaybackState](../wkmediaplaybackstate.md): An enumeration that describes whether an audio or video presentation is playing, paused, or suspended.
