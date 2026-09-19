> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/audiogeneratorcontroller/play()

# play()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Begins the audio stream from the generator render handler.

## Declaration

```swift
@MainActor func play()
```

<a id="discussion"></a>

## Discussion

When you play the controller, the render handler starts receiving callbacks. The controller ignores calls to [play()](play%28%29.md) when audio is already playing.
