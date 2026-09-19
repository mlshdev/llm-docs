> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/audioplaybackgroupcontroller/seek(to:)

# seek(to:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the playback position to the specified time.

## Declaration

```swift
@MainActor @preconcurrency func seek(to time: Duration)
```

## Parameters

- `time`: The desired playback position.

## See Also

### Controlling playback

- [play(at:)](play%28at_%29.md): Plays all audio resources in the group asynchronously at a specified time.
