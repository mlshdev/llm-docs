> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/mediaplaybackstate()](https://developer.apple.com/documentation/webkit/webpage/mediaplaybackstate())

# mediaPlaybackState()

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Determine the playback status of media in the page.

## Declaration

```swift
@MainActor final func mediaPlaybackState() async -> WKMediaPlaybackState
```

<a id="return-value"></a>

## Return Value

The current state of media playback within the page.

## See Also

### Interacting with media

- [WebPage.FullscreenState](fullscreenstate-swift.enum.md): The set of possible fullscreen states a webpage may be in.
- [pauseAllMediaPlayback()](pauseallmediaplayback%28%29.md): Pauses playback of all media in the web view.
- [setAllMediaPlaybackSuspended(\_:)](setallmediaplaybacksuspended%28__%29.md): Changes whether the webpage is suspending playback of all media in the page.
- [closeAllMediaPresentations()](closeallmediapresentations%28%29.md): Closes all media the webpage is presenting, including picture-in-picture video and fullscreen video.
- [fullscreenState](fullscreenstate-swift.property.md): The fullscreen state the page is currently in.
