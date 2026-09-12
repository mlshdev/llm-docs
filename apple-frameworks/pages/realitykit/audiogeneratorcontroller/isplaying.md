> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audiogeneratorcontroller/isplaying](https://developer.apple.com/documentation/realitykit/audiogeneratorcontroller/isplaying)

# isPlaying

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A Boolean value that indicates whether playback is currently active.

## Declaration

```swift
@MainActor var isPlaying: Bool { get }
```

<a id="discussion"></a>

## Discussion

You may experience a small delay between when you call the [play()](play%28%29.md) method and when the [isPlaying](isplaying.md) property reports `true`.
