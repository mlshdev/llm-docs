> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audioplaybackgroupcontroller/isplaying](https://developer.apple.com/documentation/realitykit/audioplaybackgroupcontroller/isplaying)

# isPlaying

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether playback is currently active.

## Declaration

```swift
@MainActor @preconcurrency var isPlaying: Bool { get }
```

<a id="discussion"></a>

## Discussion

You may experience a small delay between when you call the [play()](play%28%29.md) method and when the [isPlaying](isplaying.md) property reports `true`.
