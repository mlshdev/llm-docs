> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/setallmediaplaybacksuspended(_:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebview/setallmediaplaybacksuspended(_:completionhandler:))

# setAllMediaPlaybackSuspended(\_:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Changes whether the webpage is suspending playback of all media in the page.

## Declaration

```swift
func setAllMediaPlaybackSuspended(_ suspended: Bool, completionHandler: (@MainActor @Sendable () -> Void)? = nil)
```

```swift
func setAllMediaPlaybackSuspended(_ suspended: Bool) async
```

## Parameters

- `suspended`: A Boolean value that indicates whether the webpage should suspend media playback.
- `completionHandler`: A closure the system executes after it completes changing the media playback suspension status.

<a id="Discussion"></a>

## Discussion

Pass `true` to pause all media the web view is playing. Neither the user nor the webpage can resume playback until you call this method again with `false`.

## See Also

### Interacting with media

- [pauseAllMediaPlayback(completionHandler:)](pauseallmediaplayback%28completionhandler_%29.md): Pauses playback of all media in the web view.
- [requestMediaPlaybackState(completionHandler:)](requestmediaplaybackstate%28completionhandler_%29.md): Requests the playback status of media in the web view.
- [closeAllMediaPresentations(completionHandler:)](closeallmediapresentations%28completionhandler_%29.md): Closes all media the web view is presenting, including picture-in-picture video and fullscreen video.
- [WKMediaPlaybackState](../wkmediaplaybackstate.md): An enumeration that describes whether an audio or video presentation is playing, paused, or suspended.

# setAllMediaPlaybackSuspended:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Changes whether the webpage is suspending playback of all media in the page.

## Declaration

```objectivec
- (void) setAllMediaPlaybackSuspended:(BOOL) suspended completionHandler:(void (^)(void)) completionHandler;
```

## Parameters

- `suspended`: A Boolean value that indicates whether the webpage should suspend media playback.
- `completionHandler`: A closure the system executes after it completes changing the media playback suspension status.

<a id="Discussion"></a>

## Discussion

Pass `true` to pause all media the web view is playing. Neither the user nor the webpage can resume playback until you call this method again with `false`.

## See Also

### Interacting with media

- [pauseAllMediaPlaybackWithCompletionHandler:](pauseallmediaplayback%28completionhandler_%29.md): Pauses playback of all media in the web view.
- [pauseAllMediaPlayback:](pauseallmediaplayback_.md): Deprecated. Pauses playback of all media in the web view.
- [requestMediaPlaybackStateWithCompletionHandler:](requestmediaplaybackstate%28completionhandler_%29.md): Requests the playback status of media in the web view.
- [requestMediaPlaybackState:](requestmediaplaybackstate_.md): Deprecated. Requests the playback status of media in the web view.
- [suspendAllMediaPlayback:](suspendallmediaplayback_.md): Deprecated. Changes whether the webpage is suspending playback of all media in the page.
- [resumeAllMediaPlayback:](resumeallmediaplayback_.md): Deprecated. Resumes playback of all media in a web view.
- [closeAllMediaPresentationsWithCompletionHandler:](closeallmediapresentations%28completionhandler_%29.md): Closes all media the web view is presenting, including picture-in-picture video and fullscreen video.
- [WKMediaPlaybackState](../wkmediaplaybackstate.md): An enumeration that describes whether an audio or video presentation is playing, paused, or suspended.
