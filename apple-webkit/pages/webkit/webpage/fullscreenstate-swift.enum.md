> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/fullscreenstate-swift.enum](https://developer.apple.com/documentation/webkit/webpage/fullscreenstate-swift.enum)

# WebPage.FullscreenState

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The set of possible fullscreen states a webpage may be in.

## Declaration

```swift
enum FullscreenState
```

## Topics

### Enumeration Cases

- [WebPage.FullscreenState.enteringFullscreen](fullscreenstate-swift.enum/enteringfullscreen.md): The page is entering fullscreen.
- [WebPage.FullscreenState.exitingFullscreen](fullscreenstate-swift.enum/exitingfullscreen.md): The page is exiting fullscreen.
- [WebPage.FullscreenState.inFullscreen](fullscreenstate-swift.enum/infullscreen.md): The page is currently in fullscreen.
- [WebPage.FullscreenState.notInFullscreen](fullscreenstate-swift.enum/notinfullscreen.md): The page is not currently in fullscreen.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interacting with media

- [pauseAllMediaPlayback()](pauseallmediaplayback%28%29.md): Pauses playback of all media in the web view.
- [mediaPlaybackState()](mediaplaybackstate%28%29.md): Determine the playback status of media in the page.
- [setAllMediaPlaybackSuspended(\_:)](setallmediaplaybacksuspended%28__%29.md): Changes whether the webpage is suspending playback of all media in the page.
- [closeAllMediaPresentations()](closeallmediapresentations%28%29.md): Closes all media the webpage is presenting, including picture-in-picture video and fullscreen video.
- [fullscreenState](fullscreenstate-swift.property.md): The fullscreen state the page is currently in.
