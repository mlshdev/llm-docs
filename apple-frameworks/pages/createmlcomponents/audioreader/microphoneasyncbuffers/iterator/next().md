> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/audioreader/microphoneasyncbuffers/iterator/next()](https://developer.apple.com/documentation/createmlcomponents/audioreader/microphoneasyncbuffers/iterator/next())

# next()

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Advances to the next element and returns it, or nil if no next element exists.

## Declaration

```swift
final func next() async throws -> TemporalFeature<AudioReader.MicrophoneAsyncBuffers.Feature>?
```
