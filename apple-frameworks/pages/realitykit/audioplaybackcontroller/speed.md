> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/audioplaybackcontroller/speed

# speed

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The rate of playback of the audio resource, with a range of `[.25, 4]`

## Declaration

```swift
@MainActor @preconcurrency var speed: Double { get set }
```

<a id="discussion"></a>

## Discussion

Set the speed to `1` for a normal playback rate.
