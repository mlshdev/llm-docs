> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/videoplayercomponent/screenvideodimension

# screenVideoDimension

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The video resolution size.

## Declaration

```swift
var screenVideoDimension: SIMD2<Float> { get }
```

<a id="discussion"></a>

## Discussion

This property has the format `[width, height]`, for example, `[1920, 1080]`.

## See Also

### Accessing video player properties

- [avPlayer](avplayer.md): The AV player that the component plays.
- [playerScreenSize](playerscreensize.md): The screen entity size of the current video player in meters.
- [videoRenderer](videorenderer.md): The component’s video renderer.
- [viewingMode](viewingmode.md): The current content-viewing mode for video playback.
