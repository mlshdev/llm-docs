> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/videoplaybackcontroller/currentimagesize

# currentImageSize

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

What is the width and height of currently playing video (for stereo, the width and height of each eye)? This is optional because the video may not currently be playing, or the size is otherwise not available.

## Declaration

```swift
@MainActor @preconcurrency var currentImageSize: CGSize? { get }
```
