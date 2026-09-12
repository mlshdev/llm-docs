> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/suspendallmediaplayback:](https://developer.apple.com/documentation/webkit/wkwebview/suspendallmediaplayback:)

# suspendAllMediaPlayback:

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ (deprecated in 15.0) · iPadOS 14.5+ (deprecated in 15.0) · Mac Catalyst 14.5+ (deprecated in 15.0) · macOS 11.3+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Changes whether the webpage is suspending playback of all media in the page.

## Declaration

```objectivec
- (void) suspendAllMediaPlayback:(void (^)(void)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

Pass `true` to pause all media the web view is playing. Neither the user or web page can resume playback until you call this method again with `false`.

## See Also

### Interacting with media

- [pauseAllMediaPlaybackWithCompletionHandler:](pauseallmediaplayback%28completionhandler_%29.md): Pauses playback of all media in the web view.
- [pauseAllMediaPlayback:](pauseallmediaplayback_.md): Deprecated. Pauses playback of all media in the web view.
- [requestMediaPlaybackStateWithCompletionHandler:](requestmediaplaybackstate%28completionhandler_%29.md): Requests the playback status of media in the web view.
- [requestMediaPlaybackState:](requestmediaplaybackstate_.md): Deprecated. Requests the playback status of media in the web view.
- [setAllMediaPlaybackSuspended:completionHandler:](setallmediaplaybacksuspended%28__completionhandler_%29.md): Changes whether the webpage is suspending playback of all media in the page.
- [resumeAllMediaPlayback:](resumeallmediaplayback_.md): Deprecated. Resumes playback of all media in a web view.
- [closeAllMediaPresentationsWithCompletionHandler:](closeallmediapresentations%28completionhandler_%29.md): Closes all media the web view is presenting, including picture-in-picture video and fullscreen video.
- [WKMediaPlaybackState](../wkmediaplaybackstate.md): An enumeration that describes whether an audio or video presentation is playing, paused, or suspended.
