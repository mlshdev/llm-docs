> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/videoplayercomponent/desiredviewingmode

# desiredViewingMode

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The viewer’s selected content-viewing mode.

## Declaration

```swift
var desiredViewingMode: VideoPlaybackController.ViewingMode { get set }
```

<a id="discussion"></a>

## Discussion

This is the content-viewing mode that the current content-viewing mode transitions to.

## See Also

### Configuring the video player

- [isPassthroughTintingEnabled](ispassthroughtintingenabled.md): A Boolean value that indicates whether the passthrough camera feed is tinted, emphasizing the video content.
