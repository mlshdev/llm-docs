> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/videoplaybackcontroller/currentviewingmode](https://developer.apple.com/documentation/realitykit/videoplaybackcontroller/currentviewingmode)

# currentViewingMode

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Is the currently playing video in mono or stereo? This is optional because the video may not currently be playing, or the mode is otherwise not available.

## Declaration

```swift
@MainActor @preconcurrency var currentViewingMode: VideoPlaybackController.ViewingMode? { get }
```
