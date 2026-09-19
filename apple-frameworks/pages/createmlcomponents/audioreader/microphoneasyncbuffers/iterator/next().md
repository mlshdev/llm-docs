> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/audioreader/microphoneasyncbuffers/iterator/next()

# next()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Advances to the next element and returns it, or nil if no next element exists.

## Declaration

```swift
final func next() async throws -> TemporalFeature<AudioReader.MicrophoneAsyncBuffers.Feature>?
```
