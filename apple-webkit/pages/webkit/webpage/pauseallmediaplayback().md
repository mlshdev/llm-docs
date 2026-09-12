> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/pauseallmediaplayback()](https://developer.apple.com/documentation/webkit/webpage/pauseallmediaplayback())

# pauseAllMediaPlayback()

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Pauses playback of all media in the web view.

## Declaration

```swift
@MainActor final func pauseAllMediaPlayback() async
```

## See Also

### Interacting with media

- [WebPage.FullscreenState](fullscreenstate-swift.enum.md): The set of possible fullscreen states a webpage may be in.
- [mediaPlaybackState()](mediaplaybackstate%28%29.md): Determine the playback status of media in the page.
- [setAllMediaPlaybackSuspended(\_:)](setallmediaplaybacksuspended%28__%29.md): Changes whether the webpage is suspending playback of all media in the page.
- [closeAllMediaPresentations()](closeallmediapresentations%28%29.md): Closes all media the webpage is presenting, including picture-in-picture video and fullscreen video.
- [fullscreenState](fullscreenstate-swift.property.md): The fullscreen state the page is currently in.
